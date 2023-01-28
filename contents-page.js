System.register(["@beyond-js/widgets@0.1.2/render","@beyond-js/kernel@0.1.7/bundle","react@18.2.0/jsx-runtime","@beyond-js/kernel@0.1.7/core","@beyond-js/react-widgets@18.21.1/page","react@18.2.0","@beyond/docs@1/contents-data"],function(o,e){"use strict";var t,n,r,s,a,i,d,c,l;return o("Controller",void 0),{setters:[function(e){t=e},function(e){n=e},function(e){r=e},function(e){s=e},function(e){a=e},function(e){i=e},function(e){d=e}],execute:function(){l=n.Bundle,(c=new l({module:{vspecifier:"@beyond/docs@1/contents-page"},type:"widget",name:"home"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",t],["react/jsx-runtime",r],["@beyond-js/kernel/core",s],["@beyond-js/react-widgets/page",a],["react",i],["@beyond/docs/contents-data",d]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"contents-page",vspecifier:"@beyond/docs@1/contents-page",is:"page",route:"/docs/${content}",layout:"main-layout"}]),(l=new Map).set("./contents",{hash:3986927060,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Contents=void 0;class n extends e("@beyond-js/kernel/core").Events{#loading=!1;get loading(){return this.#loading}#loaded=!1;get loaded(){return this.#loaded}#value=[];get value(){return this.#value}#hydrated=!1;get hydrated(){return this.#hydrated}#container;get container(){return this.#container}constructor(e){super(),this.#container=e}async fetch(){this.#loading=!0,this.trigger("change"),this.#loading=!1,this.#loaded=!0,this.trigger("change")}hydrate(e){console.log(e),this.#loading=!1,this.#loaded=!0,e.forEach(e=>this.#value.push(e)),this.#hydrated=!0}toJSON(){return this.#value}}t.Contents=n}}),l.set("./controller",{hash:4008428264,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;var n=e("@beyond-js/react-widgets/page"),o=e("./contents"),r=e("./views/page");class s extends n.PageReactWidgetController{createStore(){return new o.Contents(this.body)}get Widget(){return r.Page}}t.Controller=s}}),l.set("./views/page",{hash:1951911931,creator:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.Page=function(e){var{uri:e,component:t}=e,e=e.vars.get("content"),[,,]=n.useState(performance.now()),e=["",void 0,null].includes(e)?"intro":e;return n.createElement(o.ContentsPage,{contentId:e,component:t})};var n=e("react"),o=e("@beyond/docs/contents-data")}}),c.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"}],c.exports.process=function({require:e,prop:t,value:n}){!e&&"Controller"!==t||o("Controller",e?e("./controller").Controller:n)},o("__beyond_pkg",c),o("hmr",new function(){this.on=(e,t)=>c.hmr.on(e,t),this.off=(e,t)=>c.hmr.off(e,t)}),c.initialise(l)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpZGdldC90cy9jb250ZW50cy50cyIsIndpZGdldC90cy9jb250cm9sbGVyLnRzeCIsIndpZGdldC90cy92aWV3cy9wYWdlLnRzeCJdLCJuYW1lcyI6WyJDb250ZW50cyIsInJlcXVpcmUiLCJFdmVudHMiLCIjbG9hZGluZyIsImxvYWRpbmciLCJ0aGlzIiwiI2xvYWRlZCIsImxvYWRlZCIsIiN2YWx1ZSIsInZhbHVlIiwiI2h5ZHJhdGVkIiwiaHlkcmF0ZWQiLCIjY29udGFpbmVyIiwiY29udGFpbmVyIiwiY29uc3RydWN0b3IiLCJzdXBlciIsImZldGNoIiwidHJpZ2dlciIsImh5ZHJhdGUiLCJjYWNoZWQiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsImNvbXBhbnkiLCJwdXNoIiwidG9KU09OIiwiZXhwb3J0cyIsIl9wYWdlIiwiX2NvbnRlbnRzIiwiX3BhZ2UyIiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsImJvZHkiLCJXaWRnZXQiLCJQYWdlIiwicHJvcHMiLCJ1cmkiLCJjb21wb25lbnQiLCJjb250ZW50IiwidmFycyIsImdldCIsIlJlYWN0IiwidXNlU3RhdGUiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNvbnRlbnRJZCIsInVuZGVmaW5lZCIsImluY2x1ZGVzIiwiQ29udGVudHNQYWdlIiwiX2NvbnRlbnRzRGF0YSJdLCJtYXBwaW5ncyI6ImdrQ0FRYUEsVUFSYkMsRUFBQSx3QkFBQSxFQVE4QkMsT0FFMUJDLFNBQVcsQ0FBQSxFQUNYQyxjQUNJLE9BQU9DLEtBQUtGLFFBQ2hCLENBRUFHLFFBQVUsQ0FBQSxFQUNWQyxhQUNJLE9BQU9GLEtBQUtDLE9BQ2hCLENBRUFFLE9BQXFCLEdBQ3JCQyxZQUNJLE9BQU9KLEtBQUtHLE1BQ2hCLENBRUFFLFVBQVksQ0FBQSxFQUNaQyxlQUNJLE9BQU9OLEtBQUtLLFNBQ2hCLENBRUFFLFdBQ0FDLGdCQUNJLE9BQU9SLEtBQUtPLFVBQ2hCLENBRUFFLFlBQVlELEdBQ1JFLE1BQUssRUFDTFYsS0FBS08sV0FBYUMsQ0FDdEIsQ0FFQUcsY0FDSVgsS0FBS0YsU0FBVyxDQUFBLEVBQ2hCRSxLQUFLWSxRQUFRLFFBQVEsRUFDckJaLEtBQUtGLFNBQVcsQ0FBQSxFQUNoQkUsS0FBS0MsUUFBVSxDQUFBLEVBQ2ZELEtBQUtZLFFBQVEsUUFBUSxDQUN6QixDQUVBQyxRQUFRQyxHQUNKQyxRQUFRQyxJQUFJRixDQUFNLEVBQ2xCZCxLQUFLRixTQUFXLENBQUEsRUFDaEJFLEtBQUtDLFFBQVUsQ0FBQSxFQUNmYSxFQUFPRyxRQUFRQyxHQUFXbEIsS0FBS0csT0FBT2dCLEtBQUtELENBQU8sQ0FBQyxFQUNuRGxCLEtBQUtLLFVBQVksQ0FBQSxDQUNyQixDQUVBZSxTQUNJLE9BQU9wQixLQUFLRyxNQUNoQixDLENBQ0hrQixFQUFBQSxTQUFBQSxDLHFJQzNERCxJQUFBQyxFQUFBMUIsRUFBQSwrQkFBQSxFQUVBMkIsRUFBQTNCLEVBQUEsWUFBQSxFQUNBNEIsRUFBQTVCLEVBQUEsY0FBQSxRQUdNNkIsVUFBbUJDLEVBQUFBLDBCQUNyQkMsY0FDSSxPQUFPLElBQUloQyxFQUFBQSxTQUFTSyxLQUFLNEIsSUFBSSxDQUNqQyxDQUVBQyxhQUNJLE9BQU9DLEVBQUFBLElBQ1gsQyxDQUNIVCxFQUFBQSxXQUFBQSxDLHdIQ1hLLFNBQWVVLEdBQ2pCLEdBQU0sQ0FBRUMsSUFBQUEsRUFBS0MsVUFBQUEsQ0FBUyxFQUFLRixFQUNyQkcsRUFBVUYsRUFBSUcsS0FBS0MsSUFBSSxTQUFTLEVBQ2hDLENBQUEsQ0FBQSxHQUF1QkMsRUFBTUMsU0FBU0MsWUFBWUMsSUFBRyxDQUFFLEVBQ3ZEQyxFQUFhLENBQUMsR0FBSUMsS0FBQUEsRUFBVyxNQUFNQyxTQUFTVCxDQUFPLEVBQWMsUUFBVkEsRUFFN0QsT0FBT0csRUFBQUEsY0FBQ08sRUFBQUEsYUFBWSxDQUFDSCxVQUFXQSxFQUFXUixVQUFXQSxDQUFTLENBQUEsQ0FDbkUsRUFWQSxJQUFBSSxFQUFBekMsRUFBQSxPQUFBLEVBQ0FpRCxFQUFBakQsRUFBQSw0QkFBQSJ9