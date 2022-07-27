define(["exports", "@beyond-js/kernel/bundle", "sequelize", "perf_hooks", "dayjs", "path", "fs", "@beyond-js/kernel/core"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Manager = _exports.Database = _exports.DataModel = _exports.Connector = _exports.Config = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/database/connector",
    "bundle": "ts"
  }).package();

  ;
  externals.register(new Map([["sequelize", dependency_1], ["perf_hooks", dependency_2], ["dayjs", dependency_3], ["path", dependency_4], ["fs", dependency_5]]));
  const ims = new Map();
  /************************
  INTERNAL MODULE: ./config
  ************************/

  ims.set('./config', {
    hash: 4006439071,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Config = Config;
      /*bundle*/

      function Config(env = 'development') {
        const config = {
          development: {
            host: '127.0.0.1',
            user: 'root',
            password: '123456',
            database: 'beyond_docs',
            dateStrings: true,
            timezone: '-04:00'
          }
        };
        return config[env];
      }
    }
  });
  /***************************
  INTERNAL MODULE: ./connector
  ***************************/

  ims.set('./connector', {
    hash: 1633172547,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Connector = void 0;

      var _sequelize = require("sequelize");

      var _logs = require("./logs");
      /*bundle*/


      class Connector {
        _models;

        get models() {
          return this._models;
        }

        _logs;

        get logs() {
          return this._logs;
        }

        #ready = false;

        get ready() {
          return this.#ready;
        }

        #config;
        #environment = 'development';
        #sequelize;

        get sequelize() {
          return this.#sequelize;
        }

        #logs;

        constructor(config) {
          this.#config = config;
          this.#logs = new _logs.Logs();
          this.start();
        }

        async start() {
          const logs = this.#logs;
          await logs.start();

          try {
            const config = this.#config;
            this.#sequelize = new _sequelize.Sequelize(config.database, config.user, config.password, {
              host: config.host,
              dialect: 'mysql',
              timezone: config.timezone,
              logging: msg => logs.call(msg)
            });
            this.#ready = true;
          } catch (e) {
            console.error(e);
          }
        }

      }

      exports.Connector = Connector;
    }
  });
  /**************************
  INTERNAL MODULE: ./database
  **************************/

  ims.set('./database', {
    hash: 222464508,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Database = void 0;

      var _connector = require("./connector");
      /*bundle*/


      class Database {
        #connection;

        get sequelize() {
          return this.#connection?.sequelize;
        }

        constructor(config) {
          this.#connection = new _connector.Connector(config);
        }

        start() {
          return this.#connection.start();
        }

      }

      exports.Database = Database;
    }
  });
  /***************************
  INTERNAL MODULE: ./datamodel
  ***************************/

  ims.set('./datamodel', {
    hash: 2079180094,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DataModel = void 0;

      var _index = require("./index");

      var _perf_hooks = require("perf_hooks");
      /*bundle*/


      class DataModel {
        #query;

        get query() {
          return this.#query;
        }

        #ready;

        get ready() {
          return this.#ready;
        }

        #name;

        get name() {
          return this.#name;
        }

        #sequelize;
        #promise;
        #id;

        get id() {
          return this.#id;
        }

        #definition;

        get model() {
          return this.#sequelize.models[this.#name];
        }

        constructor(definition, name) {
          this.#id = _perf_hooks.performance.now();
          this.#name = name;
          this.#definition = definition;
          this.init();
        }

        async init() {
          if (this.#ready) return true;
          if (this.#promise) return this.#promise;
          this.#promise = _index.Manager.get('beyond_docs');
          const db = await this.#promise;
          this.#sequelize = db.sequelize;
          this.#definition.initModel(db.sequelize);
          this.#ready = true;
          this.#promise = undefined;
        }

        async data(params) {
          try {
            const model = this.model;
            return await model.findOne({
              where: {
                id: params.id
              }
            });
          } catch (exc) {
            console.log('error', exc);
          }
        }

      }

      exports.DataModel = DataModel;
    }
  });
  /***********************
  INTERNAL MODULE: ./index
  ***********************/

  ims.set('./index', {
    hash: 2958399396,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Manager = void 0;

      var _config = require("./config");

      var _database = require("./database");

      class ConnectionsManager {
        #instances = new Map();
        #config;
        #environment = 'development';

        constructor() {
          this.#config = (0, _config.Config)(this.#environment);
        }
        /**
         * Instances the database model
         *
         * Each database connection has a database model
         * @param connection
         */


        async init(connection) {
          const database = new _database.Database(this.#config);
          await database.start();
          this.#instances.set(connection, database);
          return database;
        }
        /**
         * Returns the database object instance
         * @param connection
         */


        async get(connection) {
          try {
            if (this.#instances.has(connection)) return this.#instances.get(connection);
            const instance = this.init(connection);
            this.#instances.set(connection, instance);
            return instance;
          } catch (e) {
            console.error(101, e);
          }
        }

        async getModel({
          db,
          name,
          model
        }) {
          const database = await this.get(db);
          return database.getModel(name, model);
        }

      }
      /*bundle*/


      const Manager = new ConnectionsManager();
      exports.Manager = Manager;
    }
  });
  /**********************
  INTERNAL MODULE: ./logs
  **********************/

  ims.set('./logs', {
    hash: 3913255955,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Logs = void 0;

      var dayjs = require("dayjs");

      var _path = require("path");

      var _fs = require("fs");

      class Logs {
        days;
        logs;
        calls;
        errors;
        current;
        #ready;
        #dirname;

        constructor() {
          this.days = 3;
          this.#dirname = (0, _path.join)(__dirname, "logs");
        }

        async start() {
          try {
            const directories = ['../../calls', '../../errors'];
            let prs = [];
            directories.forEach(directory => prs.push(this.#checkFiles((0, _path.join)(this.#dirname, directory))));
            await Promise.all(prs);
            this.#ready = true;
          } catch (e) {
            console.error(e);
          }
        }

        async #checkFiles(folder) {
          if (!(0, _fs.existsSync)(folder)) {
            return _fs.promises.mkdir(folder, {
              recursive: true
            });
          }

          const files = await _fs.promises.readdir(folder);
          /**
           * if exists file into the folder with more time than the number of days defined
           * then we delete them
           */

          files.forEach(file => {
            const currentTime = dayjs(); // the file name is the day when the file was created.

            const filename = file.split('.')[0];
            const fileMoment = dayjs(filename, 'DD-MM-YYYY');
            const diff = currentTime.diff(fileMoment, 'days');

            if (diff >= this.days) {
              _fs.promises.unlink(`${folder}/${file}`);
            }
          });
        }

        async write(type, data) {
          const current = dayjs().format('DD-MM-YYY');
          const date = dayjs().format('DD-MM-YYYY HH:mm');
          let text = `--------------------------\nExecute: ${date} \n--------------------------\n\t`;
          text += `${data}\n\n`;

          try {
            await _fs.promises.appendFile(`${type}/${current}.log`, text);
          } catch (error) {
            console.error(`Error saving log "${type}"`);
            console.error(error.stack);
          }
        }

        validateData(folder, files) {// files.forEach(file => {
          //     const currentMoment = dayjs();
          //     const fileName = file.split('.')[0];
          //     const fileMoment = dayjs(fileName).format('DD-MM-YYYY');
          //
          //     const diff = Math.floor(currentMoment.diff(fileMoment, 'hours') / 24);
          //
          //     if (diff >= this.days) {
          //         unlink(`${folder}/${file}`, () => {
          //             //    Clean old log files
          //         });
          //     }
          // });
        }

        call(data) {// this.write(this.calls, data);
        }

        error(data) {// this.write(this.errors, data);
        }

      }

      exports.Logs = Logs;
    }
  });
  /**********************************
  INTERNAL MODULE: ./to__review/query
  **********************************/

  ims.set('./to__review/query', {
    hash: 3759844117,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Query = void 0;

      var _sequelize = require("sequelize");
      /*interface Exception {
          message: string
      }*/


      class Query {
        #DEFAULT = {
          order: 'id',
          limit: 30,
          start: 0
        };

        get DEFAULT() {
          return this.#DEFAULT;
        }

        #OPERATORS = Object.freeze({
          0: 'eq',
          1: 'gt',
          2: 'gte',
          3: 'lt',
          4: 'lte',
          5: 'and',
          6: 'or',
          7: 'like'
        });

        get OPERATORS() {
          return this.#OPERATORS;
        }

        #connector;
        #model;

        constructor(connector, model) {
          this.#connector = connector;
          this.#model = model;
        }
        /**
         *
         * @param params
         */


        processFilters(params) {
          const model = this.#model;
          const operand = params.operand ? this.#OPERATORS[parseInt(params.operand)] : 'and';
          const additionalOperand = params.additionalOperand ? this.#OPERATORS[parseInt(params.additionalOperand)] : 'eq';
          const fields = {};

          for (const field in params) {
            if (params.hasOwnProperty(field) && model.rawAttributes.hasOwnProperty(field)) {
              const value = additionalOperand === 'like' ? `%${params[field]}%` : params[field];
              fields[field] = {
                [_sequelize.Op[additionalOperand]]: value
              };
            }
          }

          const filters = {};
          filters[_sequelize.Op[operand]] = fields;
          return filters;
        }

        processError(exc, target) {
          // logs.error(exc);
          return {
            status: false,
            error: {
              message: exc.message,
              target: target
            }
          };
        }

        async data(params, target) {
          try {
            const model = this.#model;
            const data = await model.findAll({
              where: {
                id: params.id
              }
            });
            const response = data.length ? data[0] : {};
            return {
              status: true,
              data: response
            };
          } catch (exc) {
            return this.processError(exc, target);
          }
        }

      }

      exports.Query = Query;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./config",
    "from": "Config",
    "name": "Config"
  }, {
    "im": "./connector",
    "from": "Connector",
    "name": "Connector"
  }, {
    "im": "./database",
    "from": "Database",
    "name": "Database"
  }, {
    "im": "./datamodel",
    "from": "DataModel",
    "name": "DataModel"
  }, {
    "im": "./index",
    "from": "Manager",
    "name": "Manager"
  }];
  let Config, Connector, Database, DataModel, Manager; // Module exports

  _exports.Manager = Manager;
  _exports.DataModel = DataModel;
  _exports.Database = Database;
  _exports.Connector = Connector;
  _exports.Config = Config;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Config') && (_exports.Config = Config = require ? require('./config').Config : value);
    (require || prop === 'Connector') && (_exports.Connector = Connector = require ? require('./connector').Connector : value);
    (require || prop === 'Database') && (_exports.Database = Database = require ? require('./database').Database : value);
    (require || prop === 'DataModel') && (_exports.DataModel = DataModel = require ? require('./datamodel').DataModel : value);
    (require || prop === 'Manager') && (_exports.Manager = Manager = require ? require('./index').Manager : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});