System.register(["@beyond-js/widgets@0.1.2/render","@beyond-js/kernel@0.1.7/bundle","@beyond-js/kernel@0.1.7/styles","@beyond-js/react-widgets@18.21.1/page","react@18.2.0","@beyond/docs@1/store","@beyond/ui@1.0.0/link","@beyond/docs@1/preload"],function(o,e){"use strict";var n,t,r,s,i,l,d,c,a,u;return o({Controller:void 0,View:void 0}),{setters:[function(e){n=e},function(e){t=e},function(e){r=e},function(e){s=e},function(e){i=e},function(e){l=e},function(e){d=e},function(e){c=e}],execute:function(){u=t.Bundle,(a=new u({module:{vspecifier:"@beyond/docs@1/missing",multibundle:!0},type:"widget"},e.meta.url).package()).dependencies.update([["@beyond-js/widgets/render",n],["@beyond-js/kernel/styles",r],["@beyond-js/react-widgets/page",s],["react",i],["@beyond/docs/store",l],["@beyond/ui/link",d],["@beyond/docs/preload",c]]),brequire("@beyond-js/widgets/render").widgets.register([{name:"app-docs-missing",vspecifier:"@beyond/docs@1/missing.widget",is:"page",route:"/not-found",layout:"home-layout"}]),brequire("@beyond-js/kernel/styles").styles.register("@beyond/docs@1/missing.widget"),(u=new Map).set("./controller",{hash:2988556055,creator:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Controller=void 0;var t=e("@beyond-js/react-widgets/page"),o=e("./views");class r extends t.PageReactWidgetController{get Widget(){return o.View}}n.Controller=r}}),u.set("./views/index",{hash:2590127334,creator:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.View=function(){var[e,n]=(0,o.useTexts)(r.module.specifier);return e?t.createElement("div",{className:"container-404"},t.createElement("div",{className:"content-container two-columns"},t.createElement("header",null,t.createElement("span",{className:"pretitle-h1"},n.pretitle),t.createElement("h1",null,n.title),t.createElement("p",null,n.description),t.createElement("p",null,n.end.s1," ",t.createElement(s.Link,{href:"/",className:"link primary"},n.end.l1)," ",n.end.s2)),t.createElement("div",{className:"isotype-404 "},t.createElement("span",null,"4"),t.createElement(i.BeyondIsotype,null),t.createElement("span",null,"4")))):null};var t=e("react"),o=e("@beyond/docs/store"),r=e("beyond_context"),s=e("@beyond/ui/link"),i=e("@beyond/docs/preload")}}),a.exports.descriptor=[{im:"./controller",from:"Controller",name:"Controller"},{im:"./views/index",from:"View",name:"View"}],a.exports.process=function({require:e,prop:n,value:t}){!e&&"Controller"!==n||o("Controller",e?e("./controller").Controller:t),!e&&"View"!==n||o("View",e?e("./views/index").View:t)},o("__beyond_pkg",a),o("hmr",new function(){this.on=(e,n)=>a.hmr.on(e,n),this.off=(e,n)=>a.hmr.off(e,n)}),a.initialise(u)}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpZGdldC90cy9jb250cm9sbGVyLnRzIiwid2lkZ2V0L3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlZpZXciLCJleHBvcnRzIiwicmVhZHkiLCJ0ZXh0cyIsIl9zdG9yZSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiUmVhY3QiLCJjbGFzc05hbWUiLCJwcmV0aXRsZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJlbmQiLCJzMSIsIkxpbmsiLCJocmVmIiwibDEiLCJzMiIsIkJleW9uZElzb3R5cGUiLCJfYmV5b25kX2NvbnRleHQiLCJfbGluayIsIl9wcmVsb2FkIl0sIm1hcHBpbmdzIjoiaXRDQUFBLElBQUFBLEVBQUFDLEVBQUEsK0JBQUEsRUFDQUMsRUFBQUQsRUFBQSxTQUFBLFFBR01FLFVBQW1CQyxFQUFBQSwwQkFDckJDLGFBQ0ksT0FBT0MsRUFBQUEsSUFDWCxDLENBQ0hDLEVBQUFBLFdBQUFBLEMseUhDRmdCLFdBQ2IsR0FBTSxDQUFDQyxFQUFPQyxJQUFTLEVBQUFDLEVBQUFDLFVBQVNDLEVBQUFBLE9BQU9DLFNBQVMsRUFDaEQsT0FBS0wsRUFFRE0sRUFBQUEsY0FBQUEsTUFBQUEsQ0FBS0MsVUFBVSxlQUFlLEVBQzFCRCxFQUFBQSxjQUFBQSxNQUFBQSxDQUFLQyxVQUFVLCtCQUErQixFQUMxQ0QsRUFBQUEsY0FBQUEsU0FBQUEsS0FDSUEsRUFBQUEsY0FBQUEsT0FBQUEsQ0FBTUMsVUFBVSxhQUFhLEVBQUVOLEVBQU1PLFFBQVEsRUFDN0NGLEVBQUFBLGNBQUFBLEtBQUFBLEtBQUtMLEVBQU1RLEtBQUssRUFDaEJILEVBQUFBLGNBQUFBLElBQUFBLEtBQUlMLEVBQU1TLFdBQVcsRUFDckJKLEVBQUFBLGNBQUFBLElBQUFBLEtBQ0tMLEVBQU1VLElBQUlDLEdBQUksSUFDZk4sRUFBQUEsY0FBQ08sRUFBQUEsS0FBSSxDQUFDQyxLQUFLLElBQUlQLFVBQVUsY0FBYyxFQUNsQ04sRUFBTVUsSUFBSUksRUFBRSxFQUNULElBQ1BkLEVBQU1VLElBQUlLLEVBQUUsQ0FDYixFQUVSVixFQUFBQSxjQUFBQSxNQUFBQSxDQUFLQyxVQUFVLGNBQWMsRUFDekJELEVBQUFBLGNBQUFBLE9BQUFBLEtBQUFBLEdBQUFBLEVBQ0FBLEVBQUFBLGNBQUNXLEVBQUFBLGNBQWEsSUFBQSxFQUNkWCxFQUFBQSxjQUFBQSxPQUFBQSxLQUFBQSxHQUFBQSxDQUFjLENBQ1osQ0FDSixFQXJCSyxJQXdCdkIsRUFoQ0EsSUFBQUEsRUFBQWIsRUFBQSxPQUFBLEVBQ0FTLEVBQUFULEVBQUEsb0JBQUEsRUFDQXlCLEVBQUF6QixFQUFBLGdCQUFBLEVBQ0EwQixFQUFBMUIsRUFBQSxpQkFBQSxFQUNBMkIsRUFBQTNCLEVBQUEsc0JBQUEifQ==