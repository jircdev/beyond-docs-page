System.register(["@beyond-js/widgets@0.1.2/render","@beyond-js/kernel@0.1.7/bundle","@beyond-js/kernel@0.1.7/styles","@beyond-js/react-widgets@18.21.1/base","react@18.2.0","@beyond/docs@1/spinner"],function(r,e){"use strict";var t,n,o,l,s,d,i,a;return r("Controller",void 0),{setters:[function(e){t=e},function(e){n=e},function(e){o=e},function(e){l=e},function(e){s=e},function(e){d=e}],execute:function(){a=n.Bundle,(i=new a({module:{vspecifier:"@beyond/docs@1/layout/home"},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["@beyond-js/kernel/styles",o],["@beyond-js/react-widgets/base",l],["react",s],["@beyond/docs/spinner",d]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"home-layout",vspecifier:"@beyond/docs@1/layout/home",is:"layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@beyond/docs@1/layout/home"),(a=new Map).set("./controller",{hash:1742863250,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var n=e("@beyond-js/react-widgets/base"),r=e("./layout");class o extends n.ReactWidgetController{get Widget(){return r.default}}t.Controller=o}}),a.set("./layout",{hash:570793535,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){n.useRef(null);return n.createElement("div",{className:"main-widget"},n.createElement("div",{className:"home-page"},n.createElement("docs-header-menu",null),n.createElement("menu-layout",{home:"true"}),n.createElement("main",null,n.createElement("beyond-layout-children",null))))};var n=e("react")}}),i.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"}],i.exports.process=function({require:e,prop:t,value:n}){!e&&"Controller"!==t||r("Controller",e?e("./controller").Controller:n)},r("__beyond_pkg",i),r("hmr",new function(){this.on=(e,t)=>i.hmr.on(e,t),this.off=(e,t)=>i.hmr.off(e,t)}),i.initialise(a)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRzL2NvbnRyb2xsZXIudHMiLCJ0cy9sYXlvdXQudHN4Il0sIm5hbWVzIjpbIl9iYXNlIiwicmVxdWlyZSIsIl9sYXlvdXQiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiTGF5b3V0IiwiZXhwb3J0cyIsIlJlYWN0IiwidXNlUmVmIiwiY2xhc3NOYW1lIiwiaG9tZSJdLCJtYXBwaW5ncyI6InFnQ0FBQSxJQUFBQSxFQUFBQyxFQUFBLCtCQUFBLEVBR0FDLEVBQUFELEVBQUEsVUFBQSxRQUdNRSxVQUFtQkMsRUFBQUEsc0JBQ3JCQyxhQUNJLE9BQU9DLEVBQUFBLE9BQ1gsQyxDQUNIQyxFQUFBQSxXQUFBQSxDLHNIQ0dhLFdBQ0RDLEVBQU1DLE9BQU8sSUFBSSxFQVE3QixPQUNDRCxFQUFBQSxjQUFBQSxNQUFBQSxDQUFLRSxVQUFVLGFBQWEsRUFJM0JGLEVBQUFBLGNBQUFBLE1BQUFBLENBQUtFLFVBQVUsV0FBVyxFQUN6QkYsRUFBQUEsY0FBQUEsbUJBQUFBLElBQUFBLEVBRUFBLEVBQUFBLGNBQUFBLGNBQUFBLENBQWFHLEtBQUssTUFBTSxDQUFBLEVBQ3hCSCxFQUFBQSxjQUFBQSxPQUFBQSxLQUNDQSxFQUFBQSxjQUFBQSx5QkFBQUEsSUFBQUEsQ0FBMEIsQ0FDcEIsQ0FDRixDQUdULEVBckNBLElBQUFBLEVBQUFQLEVBQUEsT0FBQSJ9