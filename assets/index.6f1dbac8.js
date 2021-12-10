var tt=Object.defineProperty,lt=Object.defineProperties;var nt=Object.getOwnPropertyDescriptors;var Ce=Object.getOwnPropertySymbols;var qe=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable;var Re=(a,t,l)=>t in a?tt(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,d=(a,t)=>{for(var l in t||(t={}))qe.call(t,l)&&Re(a,l,t[l]);if(Ce)for(var l of Ce(t))Be.call(t,l)&&Re(a,l,t[l]);return a},y=(a,t)=>lt(a,nt(t));var N=(a,t)=>{var l={};for(var n in a)qe.call(a,n)&&t.indexOf(n)<0&&(l[n]=a[n]);if(a!=null&&Ce)for(var n of Ce(a))t.indexOf(n)<0&&Be.call(a,n)&&(l[n]=a[n]);return l};import{R as r,r as h,b as ae,a as c,i as rt,p as it,s as st,c as e,I as ot,d as pt,e as Y,f as ct,g as dt,h as mt,t as ut,j as ht,F as ft,m as F,k,u as Fe,l as je,n as fe,o as $e,q as E,v as te,w as _,x as ke,H as bt,y as gt,z as xt,A as Nt,M as yt,B as vt,S as Tt,C as B}from"./vendor.f236fe6d.js";const Ct=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=l(i);fetch(i.href,s)}};Ct();function se(n){var i=n,{children:a,as:t="div"}=i,l=N(i,["children","as"]);return r.createElement(t,y(d({},l),{className:h(ae.box,{[ae.bleed]:l.bleed,[ae.clickable]:l.clickable,"bg-aqua-50":l.info,"hover:bg-aqua-100 active:bg-aqua-200":l.info&&l.clickable,"bg-bluegray-100":l.neutral,"hover:bg-bluegray-200 active:bg-bluegray-300":l.neutral&&l.clickable,"border-2 border-bluegray-300":l.bordered},l.className)}),a)}const le=typeof window!="undefined"?c.exports.useLayoutEffect:c.exports.useEffect;function kt(a){let[t,l]=c.exports.useState({width:0,height:0});const n=c.exports.useCallback(i=>{l({width:i[0].contentRect.width,height:i[0].contentRect.height})},[]);return le(()=>{if(!a.current)return;const{width:i,height:s}=a.current.getBoundingClientRect();l({width:i,height:s});const o=new rt(n);return o.observe(a.current),()=>{o.disconnect()}},[a,n]),t}let He=!1;const wt=Date.now().toString(36)+Math.random().toString(36).slice(2,5);let Le=0;const _e=()=>(Le=Le+1,wt+Le),G=a=>{const t=a||(He?_e():null),[l,n]=c.exports.useState(t);return le(()=>{l===null&&n(_e())},[]),c.exports.useEffect(()=>{He===!1&&(He=!0)},[]),l};function we(v){var T=v,{controlled:a,option:t,children:l,label:n,invalid:i,value:s,helpId:o,checked:p,defaultChecked:m,labelClassName:f}=T,g=N(T,["controlled","option","children","label","invalid","value","helpId","checked","defaultChecked","labelClassName"]);const b=G();return r.createElement(r.Fragment,null,r.createElement("input",y(d({id:b,checked:a?p:void 0,defaultChecked:m,"aria-invalid":i,"aria-errormessage":i?o:void 0,value:n?void 0:s},g),{onChange:H=>g.onChange(n?H.target.checked:t?{label:t==null?void 0:t.label,value:t==null?void 0:t.value}:!1)})),r.createElement("label",{htmlFor:b,className:f},l||n||(t==null?void 0:t.label)))}function K(s){var o=s,{children:a,radio:t,checkbox:l,value:n}=o,i=N(o,["children","radio","checkbox","value"]);const p=G(),m=t?"radio":"checkbox";return t||l?r.createElement(we,{labelClassName:i.labelClassName,className:"absolute inset-0 h-full w-full appearance-none cursor-pointer focus-ring",type:m,controlled:!1,onChange:()=>{},value:n,name:`${p}:toggle`},a):r.createElement(i.href?"a":"button",y(d({},i),{className:h(i.className,"focus-ring"),type:i.href?void 0:i.type||"button"}),r.createElement(r.Fragment,null,r.createElement("span",{className:"inset-0 absolute","aria-hidden":"true"}),a))}function be(a){const t=a.radio?"radio":"checkbox";return r.createElement("div",{className:h(a.className,{"input-toggle h-20 w-20 pointer-events-none":!0}),"aria-hidden":"true"},r.createElement(we,{type:t,className:"hidden",labelClassName:a.labelClassName,name:"test",controlled:!0,onChange:()=>{},value:a.value,checked:a.checked}))}function ge(a){const t=a.prefix?it:st;return r.createElement(a.label?"div":"button",{onClick:a.onClick,className:h({[t.wrapper]:!0,[t.wrapperWithLabel]:a.label,[t.wrapperWithIcon]:!a.label})},r.createElement("div",null,a.clear&&r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16"},r.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.03 2.97a.75.75 0 00-1.06 1.06L6.94 8l-3.97 3.97a.75.75 0 101.06 1.06L8 9.06l3.97 3.97a.75.75 0 101.06-1.06L9.06 8l3.97-3.97a.75.75 0 00-1.06-1.06L8 6.94 4.03 2.97z",clipRule:"evenodd"})),a.search&&r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16"},r.createElement("g",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",clipPath:"url(#nra-cclip0)"},r.createElement("path",{d:"M8.796 11.803A5.684 5.684 0 104.349 1.341a5.684 5.684 0 004.447 10.462zM11 11l4 4"})),r.createElement("defs",null,r.createElement("clipPath",{id:"nra-cclip0"},r.createElement("path",{fill:"currentColor",d:"M0 0h16v16H0z"})))),a.label&&r.createElement("span",{className:t.label},a.label)))}const St=a=>function(l){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",d({},l))},We=St("PropTable"),Et={},Ht="wrapper";function Oe(l){var n=l,{components:a}=n,t=N(n,["components"]);return e(Ht,y(d(d({},Et),t),{components:a,mdxType:"MDXLayout"}),e("h1",{id:"box"},e("a",{parentName:"h1",href:"#box","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Box"),e("p",null,"Box is a layout component used for separating content areas on a page."),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Box } from '@fabric-ds/react';
`)),e("h2",{id:"visual-options"},e("a",{parentName:"h2",href:"#visual-options","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Visual Options"),e("h3",{id:"default"},e("a",{parentName:"h3",href:"#default","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Default"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Box>
  <h1>Default example</h1>
  <p>Box contents go here.</p>
</Box>
`)),e("div",{className:"example"},e(se,{mdxType:"Box"},e("h1",null,"Default example"),e("p",null,"Box contents go here."))),e("h3",{id:"info"},e("a",{parentName:"h3",href:"#info","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Info"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Box info>
  <h1>Info example</h1>
  <p>Box contents go here.</p>
</Box>
`)),e("div",{className:"example"},e(se,{info:!0,mdxType:"Box"},e("h1",null,"Info example"),e("p",null,"Box contents go here."))),e("h3",{id:"bordered"},e("a",{parentName:"h3",href:"#bordered","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Bordered"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Box bordered>
  <h1>Bordered example</h1>
  <p>Box contents go here.</p>
</Box>
`)),e("div",{className:"example"},e(se,{bordered:!0,mdxType:"Box"},e("h1",null,"Bordered example"),e("p",null,"Box contents go here."))),e("h3",{id:"clickable-using-button"},e("a",{parentName:"h3",href:"#clickable-using-button","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Clickable (using button)"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Box info clickable>
  <h1>
    <Clickable className="font-bold" onClick={() => alert('hey')}>
      Clickable example
    </Clickable>
  </h1>
  <p>Box contents go here.</p>
</Box>
`)),e("div",{className:"example"},e(se,{info:!0,clickable:!0,mdxType:"Box"},e("h1",null,e(K,{className:"font-bold",onClick:()=>alert("hey"),mdxType:"Clickable"},"Clickable example")),e("p",null,"Box contents go here."))),e("h3",{id:"clickable-using-anchor"},e("a",{parentName:"h3",href:"#clickable-using-anchor","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Clickable (using anchor)"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Box info clickable>
  <h1>
    <Clickable
      className="font-bold text-gray-700 hover:no-underline"
      href="https://finn.no"
      target="_blank"
    >
      Clickable example
    </Clickable>
  </h1>
  <p>Box contents go here.</p>
</Box>
`)),e("div",{className:"example"},e(se,{info:!0,clickable:!0,mdxType:"Box"},e("h1",null,e(K,{className:"font-bold text-gray-700 hover:no-underline",href:"https://finn.no",target:"_blank",mdxType:"Clickable"},"Clickable example")),e("p",null,"Box contents go here."))),e("h3",{id:"neutral"},e("a",{parentName:"h3",href:"#neutral","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Neutral"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Box neutral>
  <h1>Neutral example</h1>
  <p>Box contents go here.</p>
</Box>
`)),e("div",{className:"example"},e(se,{neutral:!0,mdxType:"Box"},e("h1",null,"Neutral example"),e("p",null,"Box contents go here."))),e("h2",{id:"props"},e("a",{parentName:"h2",href:"#props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Props"),e(We,{props:{children:{defaultValue:null,description:"Expand element children",name:"children",parent:{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"},declarations:[{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"}],required:!0,type:{name:"Element | Element[]"},descriptionHtml:"<p>Expand element children</p>"},className:{defaultValue:null,description:"Additional classes to include",name:"className",parent:{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"},declarations:[{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional classes to include</p>"},style:{defaultValue:null,description:"CSS styles to inline on the component",name:"style",parent:{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"},declarations:[{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"}],required:!1,type:{name:"any"},descriptionHtml:"<p>CSS styles to inline on the component</p>"},onClick:{defaultValue:null,description:"Action to be called when the component is clicked",name:"onClick",parent:{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"},declarations:[{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"}],required:!1,type:{name:"(e: any) => void"},descriptionHtml:"<p>Action to be called when the component is clicked</p>"},as:{defaultValue:{value:"div"},description:"Allows customization of the underlying HTML element",name:"as",parent:{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"},declarations:[{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"}],required:!1,type:{name:"string | Component"},descriptionHtml:"<p>Allows customization of the underlying HTML element</p>"},bleed:{defaultValue:{value:"false"},description:"Toggles bleed, makes a box full-width on mobile",name:"bleed",parent:{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"},declarations:[{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Toggles bleed, makes a box full-width on mobile</p>"},clickable:{defaultValue:{value:"false"},description:"Applies focus and pointer helpers, should be used with other styling to indicate clickability",name:"clickable",parent:{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"},declarations:[{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Applies focus and pointer helpers, should be used with other styling to indicate clickability</p>"},bordered:{defaultValue:{value:"false"},description:"",name:"bordered",parent:{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"},declarations:[{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"}],required:!1,type:{name:"boolean"}},info:{defaultValue:{value:"false"},description:"Styles the box with light blue color",name:"info",parent:{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"},declarations:[{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Styles the box with light blue color</p>"},neutral:{defaultValue:{value:"false"},description:"Style the box with light gray color",name:"neutral",parent:{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"},declarations:[{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Style the box with light gray color</p>"}},mdxType:"PropTable"}),e("h2",{id:"clickable-props"},e("a",{parentName:"h2",href:"#clickable-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Clickable props"),e(We,{props:{radio:{defaultValue:null,description:"Passes radio type to the underlying toggle",name:"radio",declarations:[{fileName:"react/react/packages/_helpers/clickable.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Passes radio type to the underlying toggle</p>"},checkbox:{defaultValue:null,description:"Passes checkbox type to the underlying toggle",name:"checkbox",declarations:[{fileName:"react/react/packages/_helpers/clickable.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Passes checkbox type to the underlying toggle</p>"},value:{defaultValue:null,description:`Value of the dead toggle
Sets or retrieves the default or selected value of the control.`,name:"value",declarations:[{fileName:"react/react/packages/_helpers/clickable.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/typescript/lib/lib.dom.d.ts",name:"HTMLButtonElement"}],required:!1,type:{name:"string"},descriptionHtml:`<p>Value of the dead toggle
Sets or retrieves the default or selected value of the control.</p>`},children:{defaultValue:null,description:"Clickable element children",name:"children",declarations:[{fileName:"react/react/packages/_helpers/clickable.tsx",name:"TypeLiteral"}],required:!0,type:{name:"string | Element | Element[]"},descriptionHtml:"<p>Clickable element children</p>"},href:{defaultValue:null,description:`Redirect to url on click
If passed, clickable renders as an anchor tag allowing you to pass properties such as target, rel, etc.`,name:"href",declarations:[{fileName:"react/react/packages/_helpers/clickable.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/typescript/lib/lib.dom.d.ts",name:"HTMLHyperlinkElementUtils"}],required:!1,type:{name:"string"},descriptionHtml:`<p>Redirect to url on click
If passed, clickable renders as an anchor tag allowing you to pass properties such as target, rel, etc.</p>`},labelClassName:{defaultValue:null,description:"Additional classnames to the toggle label",name:"labelClassName",declarations:[{fileName:"react/react/packages/_helpers/clickable.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional classnames to the toggle label</p>"},onClick:{defaultValue:null,description:`Click handler
If passed, clickable renders as a button with a click event`,name:"onClick",declarations:[{fileName:"react/react/packages/_helpers/clickable.tsx",name:"TypeLiteral"}],required:!1,type:{name:"() => void"},descriptionHtml:`<p>Click handler
If passed, clickable renders as a button with a click event</p>`}},mdxType:"PropTable"}))}Oe.isMDXComponent=!0;const Lt=a=>{const s=a,{children:t,className:l}=s,n=N(s,["children","className"]),i=a["aria-label"]||"Her er du";return c.exports.createElement("nav",d({className:h("flex space-x-8 space-x-reverse",a.className),"aria-label":i},n),c.exports.createElement("h2",{className:"sr-only"},i),t==null?void 0:t.map((o,p)=>[o,p!==t.length-1&&c.exports.createElement("span",{key:p,"aria-hidden":!0,className:"select-none"},"/")]))},Pt=a=>function(l){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",d({},l))},It=Pt("PropTable"),At={},Mt="wrapper";function ze(l){var n=l,{components:a}=n,t=N(n,["components"]);return e(Mt,y(d(d({},At),t),{components:a,mdxType:"MDXLayout"}),e("h1",{id:"breadcrumbs"},e("a",{parentName:"h1",href:"#breadcrumbs","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Breadcrumbs"),e("p",null,"Breadcrumbs show the navigation structure for the current location."),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Breadcrumbs } from '@fabric-ds/react';
`)),e("h2",{id:"example"},e("a",{parentName:"h2",href:"#example","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Example"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Breadcrumbs>
  <a href="#/url/1">Eiendom</a>
  <a href="#/url/2">Bolig til salgs</a>
  <a href="#/url/3" aria-current="page">
    Oslo
  </a>
</Breadcrumbs>
`)),e("div",{className:"example"},e(Lt,{mdxType:"Breadcrumbs"},e("a",{href:"#/url/1"},"Eiendom"),e("a",{href:"#/url/2"},"Bolig til salgs"),e("a",{href:"#/url/3","aria-current":"page"},"Oslo"))),e("h2",{id:"content"},e("a",{parentName:"h2",href:"#content","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Content"),e("p",null,`Breadcrumbs expect their component children to be the link "crumbs" that make up
the navigation structure. The component will interject a separator between the
crumbs.`),e("h2",{id:"accessibility"},e("a",{parentName:"h2",href:"#accessibility","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Accessibility"),e("p",null,`Breadcrumbs should have a label that identifies the structure as a breadcrumb
trail to screen readers. By default, `,e("inlineCode",{parentName:"p"},"aria-label")," is set to ",e("em",null,`"Her er
du"`),"."),e("p",null,`It is recommended that the crumb for the current page has the
`,e("inlineCode",{parentName:"p"},'aria-current="page"'),` attribute set. Usually this is the last crumb in the
trail.`),e("h2",{id:"props"},e("a",{parentName:"h2",href:"#props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Props"),e(It,{props:{"aria-label":{defaultValue:{value:"Her er du"},description:"Defines a string value that labels the current element.",name:"aria-label",declarations:[{fileName:"react/react/packages/breadcrumbs/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Defines a string value that labels the current element.</p>"},className:{defaultValue:null,description:"",name:"className",declarations:[{fileName:"react/react/packages/breadcrumbs/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",declarations:[{fileName:"react/react/packages/breadcrumbs/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"CSSProperties"}}},mdxType:"PropTable"}))}ze.isMDXComponent=!0;const V=c.exports.forwardRef((a,t)=>{const b=a,{primary:l,secondary:n,negative:i,utility:s,quiet:o,small:p,link:m,pill:f,loading:g}=b,v=N(b,["primary","secondary","negative","utility","quiet","small","link","pill","loading"]),T=h(a.className,{button:!0,"button--primary":l,"button--destructive":i,"button--flat":n&&o,"button--destructive-flat":i&&o,"button--utility-flat":s&&o,"button--small":p,"button--utility":s&&!o,"button--link":m,"button--pill":f,"button--in-progress":g});return r.createElement(r.Fragment,null,a.href?r.createElement("a",{href:a.href,target:a.target,rel:a.target==="_blank"?a.rel||"noopener":void 0,ref:t,className:T},a.children):r.createElement("button",y(d({},v),{type:a.type||"button",ref:t,className:T}),a.children),a.loading?r.createElement("span",{className:"sr-only",role:"progressbar","aria-valuenow":0,"aria-valuetext":"Laster..."}):null)}),Vt=a=>function(l){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",d({},l))},Dt=Vt("PropTable"),qt={},Bt="wrapper";function Ue(l){var n=l,{components:a}=n,t=N(n,["components"]);return e(Bt,y(d(d({},qt),t),{components:a,mdxType:"MDXLayout"}),e("h1",{id:"button"},e("a",{parentName:"h1",href:"#button","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Button"),e("p",null,"Buttons are used to perform actions, with different visuals for different needs."),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Button } from '@fabric-ds/react';
`)),e("h2",{id:"example"},e("a",{parentName:"h2",href:"#example","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Example"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Button>Save</Button>
`)),e("div",{className:"example"},e(V,{mdxType:"Button"},"Save")),e("h2",{id:"migrating-from-troika"},e("a",{parentName:"h2",href:"#migrating-from-troika","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Migrating from Troika"),e("ul",null,e("li",{parentName:"ul"},"You should no longer include or import any Troika button CSS."),e("li",{parentName:"ul"},`The variants are no longer different named exports. Use component properties
instead.`),e("li",{parentName:"ul"},"There is now a single button component for all cases. As a quick guide:",e("ul",{parentName:"li"},e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"<CallToAction>")," should be migrated to ",e("inlineCode",{parentName:"li"},"<Button primary>"),"."),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"<DestructiveButton>")," should be migrated to ",e("inlineCode",{parentName:"li"},"<Button negative>"),"."),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"<DestructiveFlatButton>")," should be migrated to ",e("inlineCode",{parentName:"li"},"<Button negative>"),"."),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"<FlatButton>")," should be migrated to ",e("inlineCode",{parentName:"li"},"<Button>"),"."),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"<LinkButton>")," should be migrated to ",e("inlineCode",{parentName:"li"},'<Button href="...">'),"."))),e("li",{parentName:"ul"},"The ",e("inlineCode",{parentName:"li"},"inProgress")," property should be changed to ",e("inlineCode",{parentName:"li"},"loading"),"."),e("li",{parentName:"ul"},"The ",e("inlineCode",{parentName:"li"},"disabled")," has been removed as it is an anti-pattern (see below).")),e("h2",{id:"accessibility"},e("a",{parentName:"h2",href:"#accessibility","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Accessibility"),e("p",null,`If the button doesn't have visible text content, such as when used with only an
icon, an `,e("inlineCode",{parentName:"p"},"aria-label")," prop must be provided for accessibility."),e("h2",{id:"visual-options"},e("a",{parentName:"h2",href:"#visual-options","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Visual options"),e("h3",{id:"primary"},e("a",{parentName:"h3",href:"#primary","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Primary"),e("p",null,`The primary button is a call to action. As a general rule, there should only be
one of them on the screen. This guides the user towards the happy path.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Button primary>Save</Button>
`)),e("div",{className:"example"},e(V,{primary:!0,mdxType:"Button"},"Save")),e("h3",{id:"negative"},e("a",{parentName:"h3",href:"#negative","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Negative"),e("p",null,`Used for destructive actions, like deletion. Shouldn't be used on the same
screen as a primary button.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Button negative>Delete</Button>
`)),e("div",{className:"example"},e(V,{negative:!0,mdxType:"Button"},"Delete")),e("h3",{id:"secondary"},e("a",{parentName:"h3",href:"#secondary","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Secondary"),e("p",null,`Secondary buttons are without an outline, and are often used for secondary or
tertiary actions. This is the default so you may simply omit the secondary
property`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<div className="flex space-x-32">
  <Button secondary>Save</Button>
  <Button>Save</Button>
</div>
`)),e("div",{className:"example"},e("div",{className:"flex space-x-32"},e(V,{secondary:!0,mdxType:"Button"},"Save"),e(V,{mdxType:"Button"},"Save"))),e("h3",{id:"loadingin-progress"},e("a",{parentName:"h3",href:"#loadingin-progress","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Loading/In progress"),e("p",null,"Used for visual feedback that the action the user triggered is loading."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Button loading>Save</Button>
`)),e("div",{className:"example"},e(V,{loading:!0,mdxType:"Button"},"Save")),e("h3",{id:"small"},e("a",{parentName:"h3",href:"#small","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Small"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Button small>Small</Button>
`)),e("div",{className:"example"},e(V,{small:!0,mdxType:"Button"},"Small")),e("h3",{id:"pill"},e("a",{parentName:"h3",href:"#pill","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Pill"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Button pill>Pill</Button>
`)),e("div",{className:"example"},e(V,{pill:!0,mdxType:"Button"},"Pill")),e("h3",{id:"link"},e("a",{parentName:"h3",href:"#link","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Link"),e("p",null,"Buttons will be rendered as an anchor (a tag) if they use an ",e("inlineCode",{parentName:"p"},"href")," attribute."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Button href="https://google.no">Link</Button>
`)),e("div",{className:"example"},e(V,{href:"https://google.no",mdxType:"Button"},"Link")),e("p",null,"But if you need a button to look like a link, use the ",e("inlineCode",{parentName:"p"},"link")," property."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Button link>Link</Button>
`)),e("div",{className:"example"},e(V,{link:!0,mdxType:"Button"},"Link")),e("h3",{id:"disabled"},e("a",{parentName:"h3",href:"#disabled","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Disabled"),e("p",null,`Disabled is an anti-pattern and is not supported. There will ALWAYS be users who
don't understand why an element is disabled, or users who can't even see that it
is disabled because of poor lighting conditions or other reasons.`),e("h2",{id:"props"},e("a",{parentName:"h2",href:"#props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Props"),e(Dt,{props:{className:{defaultValue:null,description:"Additional classes to include",name:"className",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional classes to include</p>"},onClick:{defaultValue:null,description:"Action to be called when the component is clicked",name:"onClick",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"(e: MouseEvent<HTMLButtonElement, MouseEvent>) => void"},descriptionHtml:"<p>Action to be called when the component is clicked</p>"},style:{defaultValue:null,description:"CSS styles to inline on the component",name:"style",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"CSSProperties"},descriptionHtml:"<p>CSS styles to inline on the component</p>"},type:{defaultValue:{value:"button"},description:"Button type, only applied when href is not set.",name:"type",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"ButtonHTMLAttributes"}],required:!1,type:{name:'"button" | "submit" | "reset"'},descriptionHtml:"<p>Button type, only applied when href is not set.</p>"},primary:{defaultValue:{value:"false"},description:"Set the button to be a primary, call to action button. Can be combined with `small`.",name:"primary",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Set the button to be a primary, call to action button. Can be combined with <code>small</code>.</p>"},secondary:{defaultValue:{value:"true"},description:"Set the button to be a secondary, flat style button. Can be combined with `quiet` and `small`.",name:"secondary",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Set the button to be a secondary, flat style button. Can be combined with <code>quiet</code> and <code>small</code>.</p>"},negative:{defaultValue:{value:"false"},description:"Set the button to be a negative, destructive style button. Can be combined with `quiet` and `small`.",name:"negative",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Set the button to be a negative, destructive style button. Can be combined with <code>quiet</code> and <code>small</code>.</p>"},utility:{defaultValue:{value:"false"},description:"Set the button to be a utility style button. Can be combined with `small`.",name:"utility",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Set the button to be a utility style button. Can be combined with <code>small</code>.</p>"},quiet:{defaultValue:{value:"false"},description:"Quieten down the button, can be combined with other button types",name:"quiet",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Quieten down the button, can be combined with other button types</p>"},small:{defaultValue:{value:"false"},description:"Set the button to be a small size, can be combined with other button types",name:"small",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Set the button to be a small size, can be combined with other button types</p>"},link:{defaultValue:{value:"false"},description:"Set the button to look like a link. Can be combined with `small`.",name:"link",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Set the button to look like a link. Can be combined with <code>small</code>.</p>"},pill:{defaultValue:{value:"false"},description:"Set the button to look like a pill style button",name:"pill",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Set the button to look like a pill style button</p>"},loading:{defaultValue:{value:"false"},description:"Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type.",name:"loading",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type.</p>"},href:{defaultValue:null,description:"Set the href for the location where clicking the button will take you to. Uses an a tag instead of a button tag for the underlying implementation",name:"href",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Set the href for the location where clicking the button will take you to. Uses an a tag instead of a button tag for the underlying implementation</p>"},target:{defaultValue:null,description:"Anchor target, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a",name:"target",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Anchor target, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a</p>"},rel:{defaultValue:null,description:"The relationship of the linked URL",name:"rel",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>The relationship of the linked URL</p>"}},mdxType:"PropTable"}))}Ue.isMDXComponent=!0;const z={pill:"inline-flex items-center py-8 focus-ring text-12 transition-all",pillSuggestion:"bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-gray-700 font-bold",pillFilter:"bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white",label:"pl-12 rounded-l-full",labelSuggestion:"",labelFilter:"",labelWithoutClose:"pr-12 rounded-r-full",labelWithClose:"pr-2",close:"pr-12 pl-4 py-10 rounded-r-full"};function U(a){return r.createElement("div",{className:"flex items-center"},r.createElement("button",{type:"button",onClick:a.onClick,className:h(a.canClose?"":a.className,{[z.pill]:!0,[a.suggestion?z.pillSuggestion:z.pillFilter]:!0,[z.label]:!0,[a.canClose?z.labelWithClose:z.labelWithoutClose]:!0})},r.createElement("span",{className:"sr-only"},a.openSRLabel||"\xC5pne filter"),a.icon||r.createElement("span",null,a.label)),a.canClose&&r.createElement("button",{type:"button",className:h(a.className,{[z.pill]:!0,[a.suggestion?z.pillSuggestion:z.pillFilter]:!0,[z.close]:!0}),onClick:a.onClose},r.createElement("span",{className:"sr-only"},a.closeSRLabel||`Fjern filter ${a.label}`),r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"none",viewBox:"0 0 16 16","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4.03 2.97a.75.75 0 00-1.06 1.06L6.94 8l-3.97 3.97a.75.75 0 101.06 1.06L8 9.06l3.97 3.97a.75.75 0 101.06-1.06L9.06 8l3.97-3.97a.75.75 0 00-1.06-1.06L8 6.94 4.03 2.97z"}))))}const Rt=a=>function(l){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",d({},l))},Ft=Rt("PropTable"),jt={},$t="wrapper";function Xe(l){var n=l,{components:a}=n,t=N(n,["components"]);return e($t,y(d(d({},jt),t),{components:a,mdxType:"MDXLayout"}),e("h1",{id:"pill"},e("a",{parentName:"h1",href:"#pill","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Pill"),e("p",null,`Pill is a type of button that is often used as a filter, but can also be used as
a rounded button for overlays, etc.`),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Pill } from '@fabric-ds/react';
`)),e("h2",{id:"examples"},e("a",{parentName:"h2",href:"#examples","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Examples"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<div className="flex space-x-8">
  <Pill label="Example" />
  <Pill label="Example" canClose onClose={() => alert('onClose event')} />
  <Pill label="Example" suggestion />
  <Pill
    label="Example"
    suggestion
    canClose
    onClose={() => alert('onClose event')}
  />
</div>
`)),e("div",{className:"example"},e("div",{className:"flex space-x-8"},e(U,{label:"Example",mdxType:"Pill"}),e(U,{label:"Example",canClose:!0,onClose:()=>alert("onClose event"),mdxType:"Pill"}),e(U,{label:"Example",suggestion:!0,mdxType:"Pill"}),e(U,{label:"Example",suggestion:!0,canClose:!0,onClose:()=>alert("onClose event"),mdxType:"Pill"}))),e("p",null,"You can also make the Pill clickable like so"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<div className="flex space-x-8">
  <Pill label="Example" onClick={() => alert('onClick event')} />
  <Pill label="Example" onClick={() => alert('onClick event')} suggestion />
</div>
`)),e("div",{className:"example"},e("div",{className:"flex space-x-8"},e(U,{label:"Example",onClick:()=>alert("onClick event"),mdxType:"Pill"}),e(U,{label:"Example",onClick:()=>alert("onClick event"),suggestion:!0,mdxType:"Pill"}))),e("p",null,"or have both the label and close button clickable if you wish"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<div className="flex space-x-8">
  <Pill
    label="Example"
    onClick={() => alert('onClick event')}
    canClose
    onClose={() => alert('onClose event')}
  />
  <Pill
    label="Example"
    onClick={() => alert('onClick event')}
    suggestion
    canClose
    onClose={() => alert('onClose event')}
  />
</div>
`)),e("div",{className:"example"},e("div",{className:"flex space-x-8"},e(U,{label:"Example",onClick:()=>alert("onClick event"),canClose:!0,onClose:()=>alert("onClose event"),mdxType:"Pill"}),e(U,{label:"Example",onClick:()=>alert("onClick event"),suggestion:!0,canClose:!0,onClose:()=>alert("onClose event"),mdxType:"Pill"}))),e("h2",{id:"icons-in-pill"},e("a",{parentName:"h2",href:"#icons-in-pill","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Icons in Pill"),e("p",null,`You can pass any valid HTML as the icon prop, but in this example we will use
icons from `,e("inlineCode",{parentName:"p"},"@fabric-ds/icons")),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { IconSearch16, IconPlus16 } from '@fabric-ds/icons/react';
`)),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<div className="flex space-x-8">
  <Pill
    icon={<IconSearch16 />}
    onClick={() => alert('onClick event')}
    className="py-12"
  />
  <Pill
    icon={<IconPlus16 />}
    onClick={() => alert('onClick event')}
    suggestion
    className="py-12"
  />
</div>
`)),e("div",{className:"example"},e("div",{className:"flex space-x-8"},e(U,{icon:e(ot,{mdxType:"IconSearch16"}),onClick:()=>alert("onClick event"),className:"py-12",mdxType:"Pill"}),e(U,{icon:e(pt,{mdxType:"IconPlus16"}),onClick:()=>alert("onClick event"),suggestion:!0,className:"py-12",mdxType:"Pill"}))),e("h2",{id:"props"},e("a",{parentName:"h2",href:"#props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Props"),e(Ft,{props:{label:{defaultValue:null,description:"Render text inside of Pill",name:"label",declarations:[{fileName:"react/react/packages/pill/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Render text inside of Pill</p>"},openSRLabel:{defaultValue:null,description:"Label read by screen readers when targetting a pill",name:"openSRLabel",declarations:[{fileName:"react/react/packages/pill/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Label read by screen readers when targetting a pill</p>"},closeSRLabel:{defaultValue:null,description:"Label read by screen readers when targetting the pill close button",name:"closeSRLabel",declarations:[{fileName:"react/react/packages/pill/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Label read by screen readers when targetting the pill close button</p>"},icon:{defaultValue:null,description:"Render icon inside of Pill",name:"icon",declarations:[{fileName:"react/react/packages/pill/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"ReactNode"},descriptionHtml:"<p>Render icon inside of Pill</p>"},canClose:{defaultValue:{value:"false"},description:"Whether Pill should render a closing button, use onClick",name:"canClose",declarations:[{fileName:"react/react/packages/pill/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether Pill should render a closing button, use onClick</p>"},suggestion:{defaultValue:{value:"false"},description:"Whether Pill should be rendered as a suggestion",name:"suggestion",declarations:[{fileName:"react/react/packages/pill/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether Pill should be rendered as a suggestion</p>"},onClick:{defaultValue:null,description:"Action to be called when the Pill is clicked",name:"onClick",declarations:[{fileName:"react/react/packages/pill/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"() => void"},descriptionHtml:"<p>Action to be called when the Pill is clicked</p>"},onClose:{defaultValue:null,description:"Action to be called when the close button is clicked",name:"onClose",declarations:[{fileName:"react/react/packages/pill/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"() => void"},descriptionHtml:"<p>Action to be called when the close button is clicked</p>"},className:{defaultValue:null,description:"Additional styles applied to the Pill",name:"className",declarations:[{fileName:"react/react/packages/pill/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional styles applied to the Pill</p>"}},mdxType:"PropTable"}))}Xe.isMDXComponent=!0;function _t({id:a,isInvalid:t,title:l,optional:n}){return r.createElement("legend",{id:`${a}__title`,className:h("field-label",{"text-danger":t})},l,n&&r.createElement("span",{className:"pl-2 font-normal text-14 text-gray-500"}," ","(valgfritt)"))}function Wt({isInvalid:a,helpId:t,helpText:l}){return r.createElement("div",{id:t,className:h("field-hint",{"text-danger":a})},l)}function ne(a){const t=G(),l=a.helpText?`${t}__hint`:void 0,n=a.invalid,i=a.type==="radio"||a.type==="radio-button",s=!!a.selected||!!a.checked;return r.createElement("fieldset",{role:i?"radiogroup":void 0,"aria-invalid":i?n:void 0,"aria-errormessage":i&&n?l:void 0,"aria-describedby":l,className:"field"},a.title&&r.createElement(_t,{id:t,title:a.title,isInvalid:n,optional:a.optional}),r.createElement("div",{className:h(a.className,{"segment-control":a.type==="radio-button","segment-control--justified":a.equalWidth,"segment-control--small":a.small,"input-toggle":a.type==="radio"||a.type==="checkbox"})},!a.options&&a.label?r.createElement(we,{controlled:s,label:a.label,checked:a.checked,defaultChecked:a.defaultChecked,onChange:o=>a.onChange(o),name:`${t}:toggle`,key:`${t+a.type}`,invalid:n,helpId:l,type:i?"radio":"checkbox"}):a.options&&a.options.map((o,p)=>{var m,f;return r.createElement(we,{controlled:s,checked:(m=a.selected)==null?void 0:m.some(g=>g.value===o.value),defaultChecked:(f=a.defaultSelected)==null?void 0:f.some(g=>g.value===o.value),option:o,onChange:g=>a.onChange(g),name:`${t}:toggle`,key:`${t+p+a.type}`,invalid:n,helpId:l,type:i?"radio":"checkbox"})})),a.helpText&&r.createElement(Wt,{helpId:l,helpText:a.helpText,isInvalid:n}))}function W(a){const s=a,{as:t="article",children:l,flat:n}=s,i=N(s,["as","children","flat"]);return r.createElement(t,y(d({},i),{className:h(a.className,{[Y.card]:!0,[Y.cardShadow]:!a.flat,[Y.cardSelected]:a.selected,[Y.cardFlat]:a.flat,[a.selected?Y.cardFlatSelected:Y.cardFlatUnselected]:a.flat}),tabIndex:0,onKeyDown:a.onClick?o=>{if(typeof a.onClick=="function"&&(o.key==="Enter"||o.key===" ")){o.preventDefault(),a.onClick();return}}:void 0}),r.createElement(r.Fragment,null,a.onClick&&r.createElement("button",{className:"sr-only","aria-pressed":a.selected,tabIndex:-1},"Velg"),!a.onClick&&a.selected&&r.createElement("span",{role:"checkbox","aria-checked":"true","aria-disabled":"true"}),r.createElement("div",{className:h({[Y.cardOutline]:!a.flat,[a.selected?Y.cardOutlineSelected:Y.cardOutlineUnselected]:!a.flat})}),l))}const Ze=function(){const[t,l]=r.useState(!1);return e("div",{className:"space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32"},e(W,{onClick:()=>l(!t),selected:t,mdxType:"Card"},e("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/400x400",alt:"Description"}),e("p",{className:"absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12"},"Ukens bolig"),e("div",{className:"p-16"},e("p",{className:"text-12 text-gray-300"},"DNB Eiendom"),e("p",null,"Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."),e("p",{className:"text-14 text-gray-400 mb-4"},"B\xF8gata 25C, 0655 Oslo"),e("p",{className:"font-bold my-8"},"52 m",e("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5}},"2"),"Totalpris: 4 869 039 kr"),e("p",{className:"text-14 text-gray-400 mb-0"},"Eier (Selveier) ",e("span",{className:"text-gray-200"},"\u2022")," Leilighet",e("span",{className:"text-gray-200"},"\u2022")," 2 soverom"))),e(W,{onClick:()=>l(!t),selected:t,mdxType:"Card"},e("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/403x403",alt:"Description"}),e("div",{className:"p-16"},e("p",{className:"text-12 text-gray-300"},"DNB Eiendom"),e("p",null,"Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."),e("p",{className:"text-14 text-gray-400 mb-4"},"B\xF8gata 25C, 0655 Oslo"),e("p",{className:"font-bold my-8"},"52 m",e("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5}},"2"),"Totalpris: 4 869 039 kr"),e("p",{className:"text-14 text-gray-400 mb-0"},"Eier (Selveier) ",e("span",{className:"text-gray-200"},"\u2022")," Leilighet",e("span",{className:"text-gray-200"},"\u2022")," 2 soverom"))),e(W,{onClick:()=>l(!t),selected:t,mdxType:"Card"},e("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/404x404",alt:"Description"}),e("div",{className:"p-16"},e("p",{className:"text-12 text-gray-300"},"DNB Eiendom"),e("p",null,"Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."),e("p",{className:"text-14 text-gray-400 mb-4"},"B\xF8gata 25C, 0655 Oslo"),e("p",{className:"font-bold my-8"},"52 m",e("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5}},"2"),"Totalpris: 4 869 039 kr"),e("p",{className:"text-14 text-gray-400 mb-0"},"Eier (Selveier) ",e("span",{className:"text-gray-200"},"\u2022")," Leilighet",e("span",{className:"text-gray-200"},"\u2022")," 2 soverom"))))},Ye=function(){const[t,l]=r.useState(!1),[n,i]=r.useState("");return e("div",null,e(W,{selected:t,onClick:()=>l(!t),className:"mt-32 w-max",mdxType:"Card"},e("div",{className:"p-24 flex items-center"},e(be,{checkbox:!0,checked:t,className:"-mt-8",mdxType:"DeadToggle"}),e(K,{checkbox:!0,labelClassName:"ml-12",mdxType:"Clickable"},"Checkbox in a card"))),e("div",{className:"flex gap-32 mt-32"},e(W,{selected:n==="a",onClick:()=>i("a"),mdxType:"Card"},e("div",{className:"p-24 flex items-center"},e(be,{radio:!0,checked:n==="a",className:"-mt-8",mdxType:"DeadToggle"}),e(K,{radio:!0,labelClassName:"ml-12",mdxType:"Clickable"},"Radio in a card - A"))),e(W,{selected:n==="b",onClick:()=>i("b"),mdxType:"Card"},e("div",{className:"p-24 flex items-center"},e(be,{radio:!0,checked:n==="b",className:"-mt-8",mdxType:"DeadToggle"}),e(K,{radio:!0,labelClassName:"ml-12",mdxType:"Clickable"},"Radio in a card - B")))))},Ge=function(){const[t,l]=r.useState("");return e("div",{className:"flex"},e(W,{flat:!0,className:"py-12 px-16 w-max",selected:t==="a",onClick:()=>l("a"),mdxType:"Card"},e("div",{className:"flex items-center"},e(be,{radio:!0,checked:t==="a",className:"-mt-6",mdxType:"DeadToggle"}),e("div",{className:"ml-16"},e("h4",{className:"mb-0"},e(K,{radio:!0,mdxType:"Clickable"},"Purchase foo")),e("p",{className:"mb-0 text-14"},"520 kr/mnd")))),e(W,{flat:!0,className:"py-12 px-16 w-max ml-20",selected:t==="b",onClick:()=>l("b"),mdxType:"Card"},e("div",{className:"flex items-center"},e(be,{radio:!0,checked:t==="b",className:"-mt-6",mdxType:"DeadToggle"}),e("div",{className:"ml-16"},e("h4",{className:"mb-0"},e(K,{radio:!0,mdxType:"Clickable"},"Purchase bar")),e("p",{className:"mb-0 text-14"},"124 kr/mnd")))))},Ot=a=>function(l){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",d({},l))},Ke=Ot("PropTable"),zt={Example0:Ze,Example1:Ye,Example2:Ge},Ut="wrapper";function Je(l){var n=l,{components:a}=n,t=N(n,["components"]);return e(Ut,y(d(d({},zt),t),{components:a,mdxType:"MDXLayout"}),e("h1",{id:"card"},e("a",{parentName:"h1",href:"#card","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Card"),e("p",null,`The Card component wraps any JSX and adds a bit of pseudo state styling, as well
as letting you set the card as selected. See examples below.`),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Card } from '@fabric-ds/react';
`)),e("h3",{id:"examples"},e("a",{parentName:"h3",href:"#examples","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Examples"),e("div",{className:"space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32 my-20"},e(W,{mdxType:"Card"},e("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/400x400",alt:"Description"}),e("p",{className:"absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12"},"Ukens bolig"),e("div",{className:"p-16"},e("p",{className:"text-12 text-gray-300"},"DNB Eiendom"),e("p",null,"Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."),e("p",{className:"text-14 text-gray-400 mb-4"},"B\xF8gata 25C, 0655 Oslo"),e("p",{className:"font-bold my-8"},"52 m",e("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5}},"2"),"Totalpris: 4 869 039 kr"),e("p",{className:"text-14 text-gray-400 mb-0"},"Eier (Selveier) ",e("span",{className:"text-gray-200"},"\u2022")," Leilighet",e("span",{className:"text-gray-200"},"\u2022")," 2 soverom"))),e(W,{mdxType:"Card"},e("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/402x402",alt:"Description"}),e("div",{className:"p-16"},e("p",{className:"text-12 text-gray-300"},"DNB Eiendom"),e("p",null,"Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."),e("p",{className:"text-14 text-gray-400 mb-4"},"B\xF8gata 25C, 0655 Oslo"),e("p",{className:"font-bold my-8"},"52 m",e("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5}},"2"),"Totalpris: 4 869 039 kr"),e("p",{className:"text-14 text-gray-400 mb-0"},"Eier (Selveier) ",e("span",{className:"text-gray-200"},"\u2022")," Leilighet",e("span",{className:"text-gray-200"},"\u2022")," 2 soverom"))),e(W,{mdxType:"Card"},e("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/404x404",alt:"Description"}),e("div",{className:"p-16"},e("p",{className:"text-12 text-gray-300"},"DNB Eiendom"),e("p",null,"Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."),e("p",{className:"text-14 text-gray-400 mb-4"},"B\xF8gata 25C, 0655 Oslo"),e("p",{className:"font-bold my-8"},"52 m",e("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5}},"2"),"Totalpris: 4 869 039 kr"),e("p",{className:"text-14 text-gray-400 mb-0"},"Eier (Selveier) ",e("span",{className:"text-gray-200"},"\u2022")," Leilighet",e("span",{className:"text-gray-200"},"\u2022")," 2 soverom")))),e("h3",{id:"code"},e("a",{parentName:"h3",href:"#code","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Code"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"<Card>")," component takes any set of JSX elements as its children."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`<Card>
  <img
    className="h-128 w-full object-cover"
    src="https://source.unsplash.com/random/400x400"
    alt="Description"
  />
  <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">
    Ukens bolig
  </p>
  <div className="p-16">
    <p className="text-12 text-gray-300">DNB Eiendom</p>
    <p>
      Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a.
      vv/fyring.
    </p>
    <p className="text-14 text-gray-400 mb-4">B\xF8gata 25C, 0655 Oslo</p>
    <p className="font-bold my-8">
      52 m
      <span
        style={{
          fontSize: 10,
          verticalAlign: 'super',
          marginRight: 5,
        }}
      >
        2
      </span>
      Totalpris: 4 869 039 kr
    </p>
    <p className="text-14 text-gray-400 mb-0">
      Eier (Selveier) <span className="text-gray-200">\u2022</span> Leilighet
      <span className="text-gray-200">\u2022</span> 2 soverom
    </p>
  </div>
</Card>
`)),e("h3",{id:"selecting"},e("a",{parentName:"h3",href:"#selecting","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Selecting"),e("p",null,"You can mark a Card as selected by pasing the ",e("inlineCode",{parentName:"p"},"selected"),` property. This will add
an outline to indicate the selected state.`),e("p",null,"Try clicking one of the cards below and watch them all get selected at once."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [selected, setSelected] = React.useState(false);

  return (
    <div className="space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32">
      <Card onClick={() => setSelected(!selected)} selected={selected}>
        <img
          className="h-128 w-full object-cover"
          src="https://source.unsplash.com/random/400x400"
          alt="Description"
        />
        <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">
          Ukens bolig
        </p>
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>
            Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl.
            bl.a. vv/fyring.
          </p>
          <p className="text-14 text-gray-400 mb-4">B\xF8gata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span
              style={{
                fontSize: 10,
                verticalAlign: 'super',
                marginRight: 5,
              }}
            >
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">\u2022</span> Leilighet
            <span className="text-gray-200">\u2022</span> 2 soverom
          </p>
        </div>
      </Card>
      <Card onClick={() => setSelected(!selected)} selected={selected}>
        <img
          className="h-128 w-full object-cover"
          src="https://source.unsplash.com/random/403x403"
          alt="Description"
        />
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>
            Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl.
            bl.a. vv/fyring.
          </p>
          <p className="text-14 text-gray-400 mb-4">B\xF8gata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span
              style={{
                fontSize: 10,
                verticalAlign: 'super',
                marginRight: 5,
              }}
            >
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">\u2022</span> Leilighet
            <span className="text-gray-200">\u2022</span> 2 soverom
          </p>
        </div>
      </Card>
      <Card onClick={() => setSelected(!selected)} selected={selected}>
        <img
          className="h-128 w-full object-cover"
          src="https://source.unsplash.com/random/404x404"
          alt="Description"
        />
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>
            Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl.
            bl.a. vv/fyring.
          </p>
          <p className="text-14 text-gray-400 mb-4">B\xF8gata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span
              style={{
                fontSize: 10,
                verticalAlign: 'super',
                marginRight: 5,
              }}
            >
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">\u2022</span> Leilighet
            <span className="text-gray-200">\u2022</span> 2 soverom
          </p>
        </div>
      </Card>
    </div>
  );
}
`)),e("div",{className:"example"},e(Ze,{mdxType:"Example0"})),e("h3",{id:"anchor-cards"},e("a",{parentName:"h3",href:"#anchor-cards","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Anchor Cards"),e("p",null,`Keep in mind that if you wish to make the Card a clickable anchor card, you must
add a div as the very first element with the attribute aria-owns set to the id
of the title element. In this example we set it to the id of title and assign
the h3 this id.`),e("p",null,"You should follow these semantics, but styling is up to you."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`<Card>
  <div aria-owns="title"></div>
  ...
  <h3 id="title">
    <Clickable href="..." title="content">
      content
    </Clickable>
  </h3>
  ...
</Card>
`)),e("p",null,"Here's the full code example:"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Card>
  <div aria-owns="title_id"></div>
  <img
    className="h-128 w-full object-cover"
    src="https://source.unsplash.com/random/400x400"
    alt="Description"
  />
  <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">
    Ukens bolig
  </p>
  <div className="p-16">
    <p className="text-12 text-gray-300">DNB Eiendom</p>
    <h3 className="text-16 font-normal text-gray-800" id="title_id">
      <Clickable
        href="//finn.no"
        target="_blank"
        title="Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."
        className="text-current hover:no-underline focus:no-underline"
      >
        Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a.
        vv/fyring.
      </Clickable>
    </h3>
    <p className="text-14 text-gray-400 mb-4">B\xF8gata 25C, 0655 Oslo</p>
    <p className="font-bold my-8">
      52 m
      <span
        style={{
          fontSize: 10,
          verticalAlign: 'super',
          marginRight: 5,
        }}
      >
        2
      </span>
      Totalpris: 4 869 039 kr
    </p>
    <p className="text-14 text-gray-400 mb-0">
      Eier (Selveier) <span className="text-gray-200">\u2022</span> Leilighet
      <span className="text-gray-200">\u2022</span> 2 soverom
    </p>
  </div>
</Card>
`)),e("div",{className:"example"},e(W,{mdxType:"Card"},e("div",{"aria-owns":"title_id"}),e("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/400x400",alt:"Description"}),e("p",{className:"absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12"},"Ukens bolig"),e("div",{className:"p-16"},e("p",{className:"text-12 text-gray-300"},"DNB Eiendom"),e("h3",{className:"text-16 font-normal text-gray-800",id:"title_id"},e(K,{href:"//finn.no",target:"_blank",title:"Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.",className:"text-current hover:no-underline focus:no-underline",mdxType:"Clickable"},"Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.")),e("p",{className:"text-14 text-gray-400 mb-4"},"B\xF8gata 25C, 0655 Oslo"),e("p",{className:"font-bold my-8"},"52 m",e("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5}},"2"),"Totalpris: 4 869 039 kr"),e("p",{className:"text-14 text-gray-400 mb-0"},"Eier (Selveier) ",e("span",{className:"text-gray-200"},"\u2022")," Leilighet",e("span",{className:"text-gray-200"},"\u2022")," 2 soverom")))),e("h3",{id:"toggles-inside-of-cards"},e("a",{parentName:"h3",href:"#toggles-inside-of-cards","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Toggles inside of Cards"),e("p",null,"Using ",e("a",{parentName:"p",href:"/fabric-react/#/toggle"},"Toggles"),` inside of cards has the limitation of
only being able to pass forward a label. If you wish to further enhance the look
and feel of these you must use the DeadToggle helper component, which we cover a
bit further down.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [checked, setChecked] = React.useState(false);
  const [selected, setSelected] = React.useState('');

  return (
    <div>
      <Card
        selected={checked}
        onClick={() => setChecked(!checked)}
        className="mt-32 w-max"
      >
        <div className="p-24 flex items-center">
          <DeadToggle checkbox checked={checked} className="-mt-8" />
          <Clickable checkbox labelClassName="ml-12">
            Checkbox in a card
          </Clickable>
        </div>
      </Card>

      <div className="flex gap-32 mt-32">
        <Card selected={selected === 'a'} onClick={() => setSelected('a')}>
          <div className="p-24 flex items-center">
            <DeadToggle radio checked={selected === 'a'} className="-mt-8" />
            <Clickable radio labelClassName="ml-12">
              Radio in a card - A
            </Clickable>
          </div>
        </Card>
        <Card selected={selected === 'b'} onClick={() => setSelected('b')}>
          <div className="p-24 flex items-center">
            <DeadToggle radio checked={selected === 'b'} className="-mt-8" />
            <Clickable radio labelClassName="ml-12">
              Radio in a card - B
            </Clickable>
          </div>
        </Card>
      </div>
    </div>
  );
}
`)),e("div",{className:"example"},e(Ye,{mdxType:"Example1"})),e("h2",{id:"using-the-deadtoggle-and-clickable-helper-component"},e("a",{parentName:"h2",href:"#using-the-deadtoggle-and-clickable-helper-component","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Using the DeadToggle and Clickable helper component"),e("p",null,"First we must import the necessary helper components:"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Clickable, DeadToggle } from '@fabric-ds/react';
`)),e("p",null,`By using the DeadToggle and Clickable helper components, we can utilize the UI
of the Toggle, whilst being able to style the card however we want.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [selected, setSelected] = React.useState('');

  return (
    <div className="flex">
      <Card
        flat
        className="py-12 px-16 w-max"
        selected={selected === 'a'}
        onClick={() => setSelected('a')}
      >
        <div className="flex items-center">
          <DeadToggle radio checked={selected === 'a'} className="-mt-6" />
          <div className="ml-16">
            <h4 className="mb-0">
              <Clickable radio>Purchase foo</Clickable>
            </h4>
            <p className="mb-0 text-14">520 kr/mnd</p>
          </div>
        </div>
      </Card>
      <Card
        flat
        className="py-12 px-16 w-max ml-20"
        selected={selected === 'b'}
        onClick={() => setSelected('b')}
      >
        <div className="flex items-center">
          <DeadToggle radio checked={selected === 'b'} className="-mt-6" />
          <div className="ml-16">
            <h4 className="mb-0">
              <Clickable radio>Purchase bar</Clickable>
            </h4>
            <p className="mb-0 text-14">124 kr/mnd</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
`)),e("div",{className:"example"},e(Ge,{mdxType:"Example2"})),e("p",null,e("strong",{parentName:"p"},"Note")," the ",e("inlineCode",{parentName:"p"},'className="-mb-4"'),` on the Toggle component. This removes the
`,e("inlineCode",{parentName:"p"},"margin-bottom")," that follows the component."),e("h1",{id:"props"},e("a",{parentName:"h1",href:"#props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Props"),e(Ke,{props:{flat:{defaultValue:null,description:"Removes box shadow around card",name:"flat",parent:{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"},declarations:[{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Removes box shadow around card</p>"},children:{defaultValue:null,description:"The contents of the Card",name:"children",parent:{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"},declarations:[{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"}],required:!0,type:{name:"Element | Element[]"},descriptionHtml:"<p>The contents of the Card</p>"},selected:{defaultValue:null,description:"If the card is selected",name:"selected",parent:{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"},declarations:[{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>If the card is selected</p>"},as:{defaultValue:{value:"div"},description:"The wrapping container element",name:"as",parent:{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"},declarations:[{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"}],required:!1,type:{name:"string | Component"},descriptionHtml:"<p>The wrapping container element</p>"},className:{defaultValue:null,description:"Add your own custom styles to the container element",name:"className",parent:{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"},declarations:[{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Add your own custom styles to the container element</p>"},onClick:{defaultValue:null,description:"When the card is clicked",name:"onClick",parent:{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"},declarations:[{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"}],required:!1,type:{name:"() => void"},descriptionHtml:"<p>When the card is clicked</p>"}},mdxType:"PropTable"}),e("h2",{id:"deadtoggle-props"},e("a",{parentName:"h2",href:"#deadtoggle-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"DeadToggle props"),e(Ke,{props:{radio:{defaultValue:null,description:"Passes radio type to the underlying toggle",name:"radio",parent:{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"},declarations:[{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Passes radio type to the underlying toggle</p>"},checkbox:{defaultValue:null,description:"Passes checkbox type to the underlying toggle",name:"checkbox",parent:{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"},declarations:[{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Passes checkbox type to the underlying toggle</p>"},value:{defaultValue:null,description:"Value for the input",name:"value",parent:{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"},declarations:[{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Value for the input</p>"},checked:{defaultValue:null,description:"Whether the toggle is checked",name:"checked",parent:{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"},declarations:[{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the toggle is checked</p>"},className:{defaultValue:null,description:"Additional classnames to the toggle wrapper",name:"className",parent:{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"},declarations:[{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional classnames to the toggle wrapper</p>"},labelClassName:{defaultValue:null,description:"Additional classnames to the toggle label",name:"labelClassName",parent:{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"},declarations:[{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional classnames to the toggle label</p>"}},mdxType:"PropTable"}))}Je.isMDXComponent=!0;const R=c.exports.forwardRef((b,T)=>{var H=b,{className:a,disabled:t,id:l,children:n,invalid:i,error:s,helpText:o,label:p,readOnly:m,type:f="text",style:g}=H,v=N(H,["className","disabled","id","children","invalid","error","helpText","label","readOnly","type","style"]);const P=G(l),S=o?`${P}__hint`:void 0,I=i||s;return r.createElement("div",{className:h({"has-suffix":n==null?void 0:n.props.suffix,"has-prefix":n==null?void 0:n.props.prefix})},r.createElement("div",{className:"input"},p&&r.createElement("label",{htmlFor:P},p),r.createElement("div",{className:h(a,{"input mb-0":!0,"input--is-invalid":I,"input--is-disabled":t,"input--is-read-only":m}),style:g},r.createElement("input",y(d({},v),{"aria-describedby":S,"aria-errormessage":I&&S?S:void 0,"aria-invalid":I,disabled:t,id:P,readOnly:m,ref:T,type:f})),o&&r.createElement("div",{className:"input__sub-text",id:S},o),n)))}),Qe="bluegray-100",Xt="f-react-combobox-option",Zt="f-react-combobox-match",oe=c.exports.forwardRef((a,t)=>{var x;const l=G(a.id),n=c.exports.useRef(null),i=c.exports.useRef(null),[s,o]=c.exports.useState(!0),[p,m]=c.exports.useState(null),[f,g]=c.exports.useState(!1),[v,T]=c.exports.useState(a.options.map(u=>y(d({},u),{id:Date.now().toString(36)+Math.random().toString(36).slice(2,5)}))),b=v&&v.filter(u=>u.value.toLocaleLowerCase().includes(a.value.toLowerCase())).length?v.filter(u=>u.value.toLocaleLowerCase().includes(a.value.toLowerCase())):v,H=u=>{a.onSelect&&a.onSelect(u.value),m(null),g(!1)},P=u=>{if(!f&&["ArrowDown","ArrowUp","PageUp","PageDown"].includes(u.key))return g(!0);if(!f||!(p==null?void 0:p.id)&&["Home","End"].includes(u.key))return;const C=b.findIndex(M=>M.id===(p==null?void 0:p.id)),w=C+1,A=C-1;switch(u.key){case"ArrowDown":u.preventDefault(),m(w>b.length?null:b[w]);break;case"ArrowUp":u.preventDefault(),m(A===-2?b[b.length-1]:A<0?null:b[A]);break;case"PageUp":u.preventDefault(),m(C-10<0?b[0]:b[C-10]);break;case"PageDown":u.preventDefault(),m(C+10>b.length?b[b.length-1]:b[C+10]);break;case"Home":u.preventDefault(),m(b[0]);break;case"End":u.preventDefault(),m(b[b.length-1]);break;case"Escape":f?g(!1):a.onChange(""),m(null);break;case"Enter":if(u.preventDefault(),!p)return;H(p);break;case"Backspace":a.onChange((p==null?void 0:p.value)||a.value),m(null);break;default:u.key.length===1&&(a.onChange((p==null?void 0:p.value)||a.value),m(null));break}},S=()=>{!i.current||!n.current||o(n.current.getBoundingClientRect().bottom+i.current.clientHeight<=(window.innerHeight||document.documentElement.clientHeight))};c.exports.useEffect(()=>{if(!n.current)return;const u=n.current;return u.addEventListener("keydown",P),window.addEventListener("scroll",S),()=>{u.removeEventListener("keydown",P),window.removeEventListener("scroll",S)}}),c.exports.useEffect(()=>{a.value.trim().length||g(!1),a.value.length&&g(!0)},[a.value]),c.exports.useEffect(()=>{T(a.options.map(u=>y(d({},u),{id:Date.now().toString(36)+Math.random().toString(36).slice(2,5)})))},[a.options]);const I={id:l,ref:t||n,value:(p==null?void 0:p.value)||a.value,onChange:u=>a.onChange&&a.onChange(a.value.length?u.target.value:u.target.value.trim()),label:a.label,invalid:a.invalid,helpText:a.helpText,placeholder:a.placeholder,role:"combobox","aria-label":a["aria-label"],"aria-labelledby":a["aria-labelledby"],"aria-autocomplete":"list","aria-expanded":!!(p==null?void 0:p.id)||!1,"aria-activedescendant":f?p==null?void 0:p.id:void 0,"aria-controls":`${l}-listbox`,onFocus:()=>{!a.openOnFocus||g(!0)}};return r.createElement("div",{className:h(a.className,{relative:!0}),onBlur:u=>{u.currentTarget.contains(u.relatedTarget)||g(!1)}},a.children?r.createElement(R,d({},I),a.children):r.createElement(R,d({},I)),f?r.createElement("div",{ref:i,className:h(a.listClassName,{"absolute left-0 right-0 pb-8 rounded-8 bg-white shadow":!0,"sr-only":!v.length}),style:{zIndex:2,top:s?"unset":i.current?-((x=i.current)==null?void 0:x.clientHeight)+(a.label?22:0):"unset"}},r.createElement("span",{className:"sr-only",role:"status"},v&&v.filter(u=>u.value.toLocaleLowerCase().toLocaleLowerCase().includes(a.value.toLowerCase())).length?`${b.length} treff`:`Ingen treff, viser ${b.length>1||b.length===0?"alle":""} ${b.length} alternativ${b.length>1||b.length===0?"er":""}`),r.createElement("ul",{id:`${l}-listbox`,role:"listbox",className:h("m-0 p-0 select-none list-none",{[Zt]:a.matchTextSegments})},b.map(u=>{const C=u.label||u.value;let w=[];return a.matchTextSegments&&(w=[...C].map((A,M)=>[...a.value.toLowerCase()].includes(A.toLowerCase())?r.createElement("span",{"data-combobox-text-match":!0,key:`${u.id}-bold-letter-${A}-${M}`,className:"font-bold"},A):r.createElement("span",{key:`${u.id}-letter-${A}-${M}`},A))),r.createElement("li",{key:u.id,"aria-selected":(p==null?void 0:p.id)===u.id||!1,role:"option",tabIndex:-1,onClick:()=>{m(u),setTimeout(()=>{H(u)},1)},className:h({[`block cursor-pointer p-8 hover:bg-${Qe} ${Xt}`]:!0,[`bg-${Qe}`]:(p==null?void 0:p.id)===u.id})},a.matchTextSegments?w:C)}))):"")}),ea=function(){const[t,l]=c.exports.useState("");return e(oe,{label:"Choose a fruit",value:t,onChange:n=>l(n),onSelect:n=>l(n),options:[{value:"Apple"},{value:"Banana"},{value:"Orange"},{value:"Pineapple"}],mdxType:"Combobox"})},aa=function(){const[t,l]=c.exports.useState("");return e(oe,{label:"Choose a fruit",value:t,onChange:n=>l(n),onSelect:n=>l(n),matchTextSegments:!0,options:[{value:"Apple"},{value:"Banana"},{value:"Orange"},{value:"Pineapple"}],mdxType:"Combobox"})},ta=function(){const[t,l]=c.exports.useState("");return e(oe,{label:"Choose a fruit",placeholder:"Custom Option Rendering",value:t,onChange:n=>l(n),onSelect:n=>l(n),matchTextSegments:!0,options:[{value:"Apple",label:"\u{1F34E} Apple"},{value:"Banana",label:"\u{1F34C} Banana"},{value:"Orange",label:"\u{1F34A} Orange"},{value:"Pineapple",label:"\u{1F34D} Pineapple"}],mdxType:"Combobox"})},la=function(){const[t,l]=c.exports.useState(""),n=Yt(t);return e(oe,{label:"Star Wars character",matchTextSegments:!0,value:t,onChange:i=>l(i),onSelect:i=>{l(i),alert(i)},options:n,mdxType:"Combobox"})};function Yt(a){const[t,l]=c.exports.useState([]);return r.useEffect(()=>{if(!a.trim())return;let n=!0;return fetch("https://swapi.dev/api/people/?search="+a.trim()).then(i=>i.json()).then(i=>{!n||l(i.results.map(s=>({value:s.name})))}),()=>n=!1},[a]),t}const na=function(){const[t,l]=c.exports.useState("");return e(oe,{label:"Choose a fruit",placeholder:"Your favorite fruit",value:t,onChange:n=>l(n),onSelect:n=>l(n),matchTextSegments:!0,options:[{value:"Apple",label:"\u{1F34E} Apple"},{value:"Banana",label:"\u{1F34C} Banana"},{value:"Orange",label:"\u{1F34A} Orange"},{value:"Pineapple",label:"\u{1F34D} Pineapple"}],mdxType:"Combobox"},e(ge,{suffix:!0,clear:!0,onClick:()=>l(""),mdxType:"Affix"}))},ra=function(){const[t,l]=c.exports.useState("");return e(oe,{label:"Choose a fruit",value:t,onChange:n=>l(n),onSelect:n=>{alert(n),l("")},options:[{value:"Apple"},{value:"Banana"},{value:"Orange"},{value:"Pineapple"}],mdxType:"Combobox"})},Gt=a=>function(l){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",d({},l))},ia=Gt("PropTable"),Kt={Example0:ea,Example1:aa,Example2:ta,Example3:la,Example4:na,Example5:ra},Jt="wrapper";function sa(l){var n=l,{components:a}=n,t=N(n,["components"]);return e(Jt,y(d(d({},Kt),t),{components:a,mdxType:"MDXLayout"}),e("h1",{id:"combobox"},e("a",{parentName:"h1",href:"#combobox","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Combobox"),e("p",null,"A combobox (also known as an autocomplete or autosuggest) component."),e("p",null,"A combobox is the combination of an ",e("inlineCode",{parentName:"p"},'<input type="text"/>'),` and a list. The list
is designed to help the user arrive at a value, but the value does not
necessarily have to come from that list. Don't think of it like a `,e("inlineCode",{parentName:"p"},"<select/>"),`,
but more of an input with some suggestions. You can, however, validate that the
value comes from the list, that's up to your app.`),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Combobox } from '@fabric-ds/react';
`)),e("h2",{id:"example"},e("a",{parentName:"h2",href:"#example","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Example"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [value, setValue] = useState('');

  return (
    <Combobox
      label="Choose a fruit"
      value={value}
      onChange={(val) => setValue(val)}
      onSelect={(val) => setValue(val)}
      options={[
        { value: 'Apple' },
        { value: 'Banana' },
        { value: 'Orange' },
        { value: 'Pineapple' },
      ]}
    />
  );
}
`)),e("div",{className:"example"},e(ea,{mdxType:"Example0"})),e("h2",{id:"migrating-from-troika"},e("a",{parentName:"h2",href:"#migrating-from-troika","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Migrating from Troika"),e("ul",null,e("li",{parentName:"ul"},"You should no longer include or import any Troika React's combobox CSS.")),e("h3",{id:"highlight-matched-text-segments"},e("a",{parentName:"h3",href:"#highlight-matched-text-segments","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Highlight matched text segments"),e("p",null,"If you want to highlight the matched text you can set the ",e("inlineCode",{parentName:"p"},"matchTextSegments"),`
prop.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [value, setValue] = useState('');

  return (
    <Combobox
      label="Choose a fruit"
      value={value}
      onChange={(val) => setValue(val)}
      onSelect={(val) => setValue(val)}
      matchTextSegments
      options={[
        { value: 'Apple' },
        { value: 'Banana' },
        { value: 'Orange' },
        { value: 'Pineapple' },
      ]}
    />
  );
}
`)),e("div",{className:"example"},e(aa,{mdxType:"Example1"})),e("p",null,`Note that this prop only enables the component's default styling for text
matches. You can style text matches however you'd like by overriding styles on
`,e("inlineCode",{parentName:"p"},"[data-combobox-text-match]"),". For example:"),e("pre",null,e("code",{parentName:"pre",className:"language-css",metastring:"example",example:!0},`[data-combobox-text-match] {
  background: yellow;
}
`)),e("h2",{id:"custom-rendering-in-comboboxoption"},e("a",{parentName:"h2",href:"#custom-rendering-in-comboboxoption","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Custom rendering in ComboboxOption"),e("p",null,`Sometimes you need to render something other than the value as the visible
option, in these cases you can pass a `,e("inlineCode",{parentName:"p"},"label"),`. The label is only for display.
The `,e("inlineCode",{parentName:"p"},"value")," is what gets sent back when selected."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [value, setValue] = useState('');

  return (
    <Combobox
      label="Choose a fruit"
      placeholder="Custom Option Rendering"
      value={value}
      onChange={(val) => setValue(val)}
      onSelect={(val) => setValue(val)}
      matchTextSegments
      options={[
        { value: 'Apple', label: '\u{1F34E} Apple' },
        { value: 'Banana', label: '\u{1F34C} Banana' },
        { value: 'Orange', label: '\u{1F34A} Orange' },
        { value: 'Pineapple', label: '\u{1F34D} Pineapple' },
      ]}
    />
  );
}
`)),e("div",{className:"example"},e(ta,{mdxType:"Example2"})),e("h2",{id:"client-side-search"},e("a",{parentName:"h2",href:"#client-side-search","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Client side search"),e("p",null,`This example searches an API of Star Wars characters. Combobox does not
implement any matching on your list (aside from highlighting the matched phrases
in an option). Instead, you render an option for each result you want in the
list. So your job is to:`),e("ul",null,e("li",{parentName:"ul"},"Establish the search term state"),e("li",{parentName:"ul"},"Match the search to your list"),e("li",{parentName:"ul"},"Render an option for each match")),e("p",null,`There is nothing special about managing state for a combobox, it's like managing
state for any other list in your app. As the input changes, you figure out what
state you need, then render as many options as you want.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [value, setValue] = useState('');
  const characters = useSWMatch(value);

  return (
    <Combobox
      label="Star Wars character"
      matchTextSegments
      value={value}
      onChange={(val) => setValue(val)}
      onSelect={(val) => {
        setValue(val);
        alert(val);
      }}
      options={characters}
    />
  );
}

// Note that this is a simplified example querying an API on every change to the input field
// Normally you would have some sort of throttling/debouncing and request cancellation
// to reduce the load on both the client and the server.
function useSWMatch(term) {
  const [characters, setCharacters] = useState([]);

  React.useEffect(() => {
    if (!term.trim()) return;
    let isFresh = true;

    fetch('https://swapi.dev/api/people/?search=' + term.trim())
      .then((res) => res.json())
      .then((res) => {
        if (!isFresh) return;
        setCharacters(res.results.map((c) => ({ value: c.name })));
      });

    return () => (isFresh = false);
  }, [term]);

  return characters;
}
`)),e("div",{className:"example"},e(la,{mdxType:"Example3"})),e("h3",{id:"affix"},e("a",{parentName:"h3",href:"#affix","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Affix"),e("p",null,"If you wish to use an affix you must first import the Affix component."),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Affix } from '@fabric-ds/react';
`)),e("p",null,`Then you include it as a child of Combobox component and pass the appropiate
props (see bottom of this page for types)`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [value, setValue] = useState('');

  return (
    <Combobox
      label="Choose a fruit"
      placeholder="Your favorite fruit"
      value={value}
      onChange={(val) => setValue(val)}
      onSelect={(val) => setValue(val)}
      matchTextSegments
      options={[
        { value: 'Apple', label: '\u{1F34E} Apple' },
        { value: 'Banana', label: '\u{1F34C} Banana' },
        { value: 'Orange', label: '\u{1F34A} Orange' },
        { value: 'Pineapple', label: '\u{1F34D} Pineapple' },
      ]}
    >
      <Affix suffix clear onClick={() => setValue('')} />
    </Combobox>
  );
}
`)),e("div",{className:"example"},e(na,{mdxType:"Example4"})),e("h3",{id:"clearing-input-on-select"},e("a",{parentName:"h3",href:"#clearing-input-on-select","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Clearing input on select"),e("p",null,`If you want, you can have the input field cleared after a value has been
selected`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [value, setValue] = useState('');

  return (
    <Combobox
      label="Choose a fruit"
      value={value}
      onChange={(val) => setValue(val)}
      onSelect={(val) => {
        alert(val);
        setValue('');
      }}
      options={[
        { value: 'Apple' },
        { value: 'Banana' },
        { value: 'Orange' },
        { value: 'Pineapple' },
      ]}
    />
  );
}
`)),e("div",{className:"example"},e(ra,{mdxType:"Example5"})),e("h2",{id:"combobox-props"},e("a",{parentName:"h2",href:"#combobox-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Combobox Props"),e(ia,{props:{id:{defaultValue:null,description:"Unique identifier for the input field",name:"id",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Unique identifier for the input field</p>"},options:{defaultValue:null,description:"The available options to select from",name:"options",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!0,type:{name:"ComboboxOption[]"},descriptionHtml:"<p>The available options to select from</p>"},label:{defaultValue:null,description:"Label above input",name:"label",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Label above input</p>"},placeholder:{defaultValue:null,description:"Input placeholder",name:"placeholder",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Input placeholder</p>"},value:{defaultValue:null,description:"The TextField input value",name:"value",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!0,type:{name:"string"},descriptionHtml:"<p>The TextField input value</p>"},openOnFocus:{defaultValue:{value:"false"},description:"Whether the popover opens when focus is on the text field.",name:"openOnFocus",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the popover opens when focus is on the text field.</p>"},matchTextSegments:{defaultValue:{value:"false"},description:"Whether the matching text segments in the options should be highlighted. Customise the styling by using CSS selectors to override `[data-combobox-text-match]`.",name:"matchTextSegments",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the matching text segments in the options should be highlighted. Customise the styling by using CSS selectors to override <code>[data-combobox-text-match]</code>.</p>"},onSelect:{defaultValue:null,description:"Called when the user selects an option",name:"onSelect",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(value: string) => void"},descriptionHtml:"<p>Called when the user selects an option</p>"},onChange:{defaultValue:null,description:"Called when the value of the input changes",name:"onChange",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!0,type:{name:"(value: string) => void"},descriptionHtml:"<p>Called when the value of the input changes</p>"},invalid:{defaultValue:null,description:"Renders the input field in an invalid state. Often paired together with `helpText` to provide feedback about the error.",name:"invalid",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Renders the input field in an invalid state. Often paired together with <code>helpText</code> to provide feedback about the error.</p>"},helpText:{defaultValue:null,description:"The content to display as the help text.",name:"helpText",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"ReactNode"},descriptionHtml:"<p>The content to display as the help text.</p>"},className:{defaultValue:null,description:"Additional container styling",name:"className",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional container styling</p>"},listClassName:{defaultValue:null,description:"Additional list styling",name:"listClassName",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional list styling</p>"},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element. Must be set if `aria-labelledby` is not defined,",name:"aria-label",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Defines a string value that labels the current element. Must be set if <code>aria-labelledby</code> is not defined,</p>"},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element. Must be set if `aria-label` is not defined.",name:"aria-labelledby",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Identifies the element (or elements) that labels the current element. Must be set if <code>aria-label</code> is not defined.</p>"},children:{defaultValue:null,description:"For affix use",name:"children",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"Element"},descriptionHtml:"<p>For affix use</p>"}},mdxType:"PropTable"}),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`export type ComboboxOption = {
  value: string;
  label?: string;
};
`)),e("h2",{id:"affix-props"},e("a",{parentName:"h2",href:"#affix-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Affix Props"),e(ia,{props:{prefix:{defaultValue:null,description:"Affix added at the beginning of input",name:"prefix",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Affix added at the beginning of input</p>"},suffix:{defaultValue:null,description:"Affix added at the end of input",name:"suffix",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Affix added at the end of input</p>"},clear:{defaultValue:null,description:"Displays a clear icon",name:"clear",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Displays a clear icon</p>"},search:{defaultValue:null,description:"Displays a search icon",name:"search",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Displays a search icon</p>"},label:{defaultValue:null,description:"Displays a string",name:"label",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Displays a string</p>"},onClick:{defaultValue:null,description:"Click handler paired with clear or search",name:"onClick",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"() => void"},descriptionHtml:"<p>Click handler paired with clear or search</p>"}},mdxType:"PropTable"}))}sa.isMDXComponent=!0;const Qt=f=>{var g=f,{title:a="",info:t=!1,box:l=!1,bleed:n=!1,buttonClass:i="",contentClass:s="",expanded:o=!1,className:p}=g,m=N(g,["title","info","box","bleed","buttonClass","contentClass","expanded","className"]);return y(d({},m),{wrapperClasses:h(p,{"bg-aqua-50":t,["py-0 px-0 "+ae.box]:l,[ae.bleed]:n}),buttonClasses:h({[i||""]:!0,[ct+" hover:underline focus:underline"]:!0,["w-full text-left relative "+ae.box]:l,"hover:text-aqua-700 active:text-aqua-800":t}),chevronClasses:h({"inline-block align-middle transform transition-transform":!0,"-rotate-180":o,"relative left-8":!l,"box-chevron absolute right-16":l}),contentClasses:h({[s||""]:!0,[ae.box+(a?" pt-0":"")]:l}),title:a})};function re(a){const t=c.exports.useRef(null),S=a,{children:l,expanded:n=!1,onChange:i}=S,s=N(S,["children","expanded","onChange"]),[o,p]=r.useState(n),I=Qt(d({expanded:o},s)),{wrapperClasses:m,buttonClasses:f,contentClasses:g,chevronClasses:v,title:T,chevron:b=!0}=I,H=N(I,["wrapperClasses","buttonClasses","contentClasses","chevronClasses","title","chevron"]),P=x=>{p(!x),i&&i(!x),!(!t.current||!a.animated)&&(x?mt(t.current):dt(t.current))};return r.createElement("div",y(d({},H),{className:m}),r.createElement("button",{"aria-expanded":o,className:f,onClick:()=>P(o)},T&&r.createElement("span",{className:"h4"},T),b&&r.createElement("div",{className:v},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16"},r.createElement("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M2.5 5.5L8 11l5.5-5.5"})))),r.createElement("div",{ref:t,className:h({"overflow-hidden":!0,"h-0":!o})},r.createElement("div",{className:g},l)))}const oa=function(){const[t,l]=r.useState(!0);return e(re,{title:"Expandable box",box:!0,info:!0,expanded:t,onChange:l,mdxType:"Expandable"},e("p",null,"I am expanded"))},el=a=>function(l){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",d({},l))},al=el("PropTable"),tl={Example0:oa},ll="wrapper";function pa(l){var n=l,{components:a}=n,t=N(n,["components"]);return e(ll,y(d(d({},tl),t),{components:a,mdxType:"MDXLayout"}),e("h1",{id:"expandable"},e("a",{parentName:"h1",href:"#expandable","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Expandable"),e("p",null,`Expandable is a layout component used for creating expandable content areas on a
page.`),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Expandable } from '@fabric-ds/react';
`)),e("h2",{id:"visual-options"},e("a",{parentName:"h2",href:"#visual-options","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Visual Options"),e("h3",{id:"default"},e("a",{parentName:"h3",href:"#default","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Default"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Expandable title="I am expandable">
  <p>Expandable contents go here.</p>
</Expandable>
`)),e("div",{className:"example"},e(re,{title:"I am expandable",mdxType:"Expandable"},e("p",null,"Expandable contents go here."))),e("h3",{id:"expandable-box"},e("a",{parentName:"h3",href:"#expandable-box","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Expandable box"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Expandable title="I am expandable" box>
  <p>Expandable contents go here.</p>
</Expandable>
`)),e("div",{className:"example"},e(re,{title:"I am expandable",box:!0,mdxType:"Expandable"},e("p",null,"Expandable contents go here."))),e("h3",{id:"expandable-info-box"},e("a",{parentName:"h3",href:"#expandable-info-box","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Expandable info box"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Expandable title="I am expandable" info box>
  <p>Expandable contents go here.</p>
</Expandable>
`)),e("div",{className:"example"},e(re,{title:"I am expandable",info:!0,box:!0,mdxType:"Expandable"},e("p",null,"Expandable contents go here."))),e("h3",{id:"expandable-animated-box"},e("a",{parentName:"h3",href:"#expandable-animated-box","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Expandable animated box"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Expandable title="I am expandable" info box animated>
  <p>Expandable contents go here.</p>
</Expandable>
`)),e("div",{className:"example"},e(re,{title:"I am expandable",info:!0,box:!0,animated:!0,mdxType:"Expandable"},e("p",null,"Expandable contents go here."))),e("h3",{id:"onchange-event"},e("a",{parentName:"h3",href:"#onchange-event","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"onChange event"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Expandable title="I am expandable" onChange={(state) => console.log(state)}>
  <h1>onChange example</h1>
  <p>Expandable contents go here.</p>
</Expandable>
`)),e("div",{className:"example"},e(re,{title:"I am expandable",onChange:i=>console.log(i),mdxType:"Expandable"},e("h1",null,"onChange example"),e("p",null,"Expandable contents go here."))),e("h3",{id:"the-expanded-prop"},e("a",{parentName:"h3",href:"#the-expanded-prop","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"The expanded prop"),e("p",null,"You can set whether the component is open or collapsed using the ",e("inlineCode",{parentName:"p"},"expanded"),`
prop.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Expandable title="I am initially..." expanded>
  <p>...expanded</p>
</Expandable>
`)),e("div",{className:"example"},e(re,{title:"I am initially...",expanded:!0,mdxType:"Expandable"},e("p",null,"...expanded"))),e("h3",{id:"controlling-the-component"},e("a",{parentName:"h3",href:"#controlling-the-component","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Controlling the component"),e("p",null,"If you need to take control of expansion, use the ",e("inlineCode",{parentName:"p"},"onChange"),` event in
combination with the `,e("inlineCode",{parentName:"p"},"expanded")," prop"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [open, setOpen] = React.useState(true);
  return (
    <Expandable
      title="Expandable box"
      box
      info
      expanded={open}
      onChange={setOpen}
    >
      <p>I am expanded</p>
    </Expandable>
  );
}
`)),e("div",{className:"example"},e(oa,{mdxType:"Example0"})),e("h2",{id:"props"},e("a",{parentName:"h2",href:"#props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Props"),e(al,{props:{className:{defaultValue:null,description:"Additional classes to include",name:"className",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional classes to include</p>"},style:{defaultValue:null,description:"CSS styles to inline on the component",name:"style",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"CSSProperties"},descriptionHtml:"<p>CSS styles to inline on the component</p>"},bleed:{defaultValue:{value:!1},description:"Toggles bleed, makes a box full-width on mobile",name:"bleed",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Toggles bleed, makes a box full-width on mobile</p>"},info:{defaultValue:{value:!1},description:"Styles the box with light blue color",name:"info",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Styles the box with light blue color</p>"},expanded:{defaultValue:{value:!1},description:"The state of the component, either true for expanded or false for closed.",name:"expanded",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>The state of the component, either true for expanded or false for closed.</p>"},onChange:{defaultValue:null,description:"Event function to be called any time the component is expanded or closed. Function will be passed a boolean with a value of true if the component is now expanded or false if it is now closed.",name:"onChange",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"(state: boolean) => void"},descriptionHtml:"<p>Event function to be called any time the component is expanded or closed. Function will be passed a boolean with a value of true if the component is now expanded or false if it is now closed.</p>"},title:{defaultValue:{value:""},description:"Component title. Can be a string or component. Used to display the title value which is always present regardless of whether the component is open or closed.",name:"title",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"ReactNode"},descriptionHtml:"<p>Component title. Can be a string or component. Used to display the title value which is always present regardless of whether the component is open or closed.</p>"},box:{defaultValue:{value:!1},description:"Whether to display the component as a padded box or not.",name:"box",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether to display the component as a padded box or not.</p>"},buttonClass:{defaultValue:{value:""},description:"Additional CSS classes to include on the button part of the component",name:"buttonClass",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional CSS classes to include on the button part of the component</p>"},contentClass:{defaultValue:{value:""},description:"Additional CSS classes to include on the content part of the component",name:"contentClass",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional CSS classes to include on the content part of the component</p>"},chevron:{defaultValue:{value:"true"},description:"Whether to display the chevron on the button part of the component",name:"chevron",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether to display the chevron on the button part of the component</p>"},animated:{defaultValue:{value:"false"},description:"Animate open and close",name:"animated",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Animate open and close</p>"}},mdxType:"PropTable"}))}pa.isMDXComponent=!0;const Pe=n=>{var i=n,{"aria-label":a,"aria-labelledby":t}=i,l=N(i,["aria-label","aria-labelledby"]);const s=c.exports.useRef(null),o=G(l.id);return c.exports.useEffect(()=>{ut(),!!s.current&&l.open&&ht(s.current)},[l.open,s]),c.exports.useEffect(()=>{var p;!l.initialFocusRef||(p=l.initialFocusRef.current)==null||p.focus()},[l.open,l.initialFocusRef]),l.open?r.createElement(ft,null,r.createElement("div",{onClick:l.onDismiss,className:h(l.className,F.backdrop),style:d({},l.style)},r.createElement("div",{role:"dialog","aria-modal":"true",id:o,onClick:p=>{p.stopPropagation()},"aria-label":a,"aria-labelledby":t!=null?t:l.title&&!a?`${o}__title`:void 0,onKeyDown:p=>{!l.onDismiss||p.key==="Escape"&&l.onDismiss()},className:F.modal,tabIndex:-1},r.createElement("div",{className:F.title},typeof l.left=="boolean"&&l.left?r.createElement("button",{type:"button","aria-label":"Tilbake",className:h([F.transitionTitle,F.titleButton,F.titleButtonLeft,"justify-self-start"]),onClick:l.onDismiss},r.createElement("svg",{className:h([F.titleButtonIcon,"transform rotate-90"]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},r.createElement("path",{fill:"currentColor",fillRule:"nonzero",d:"M8 2.25a.75.75 0 01.743.648L8.75 3v8.189l3.72-3.72a.75.75 0 011.133.977l-.073.084-5 5a.747.747 0 01-.374.204l-.104.014h-.104a.747.747 0 01-.478-.218l-5-5a.75.75 0 01.976-1.133l.084.073 3.72 3.719V3A.75.75 0 018 2.25z"}))):l.left,r.createElement("div",{id:`${o}__title`,className:h({[F.transitionTitle]:!0,"justify-self-center":!!l.left,"col-span-2":!l.left})},typeof l.title=="string"?r.createElement("p",{className:F.titleText},l.title):l.title),typeof l.right=="boolean"&&l.right?r.createElement("button",{type:"button","aria-label":"Lukk",onClick:l.onDismiss,className:h([F.transitionTitle,F.titleButton,F.titleButtonRight,"justify-self-end"])},r.createElement("svg",{className:F.titleButtonIcon,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M12 12l6 6-6-6-6 6 6-6zm0 0L6 6l6 6 6-6-6 6z"}))):l.right),r.createElement("div",{ref:s,className:F.content},l.children),!!l.footer&&r.createElement("div",{className:F.footer},l.footer)))):r.createElement(r.Fragment,null)},ca=function(){const[t,l]=r.useState(!1),[n,i]=r.useState(!0),[s,o]=r.useState("68%"),p=()=>l(!t);return e(r.Fragment,null,e(V,{utility:!0,onClick:p,mdxType:"Button"},"Open modal"),e(Pe,{left:n,right:!0,open:t,onDismiss:p,title:"Hello title",footer:e(V,{primary:!0,onClick:p,mdxType:"Button"},"Confirm"),style:{"--f-modal-max-height":s,"--f-modal-height":"100%"},mdxType:"Modal"},e("div",{className:"space-x-8"},e("button",{onClick:()=>o(s==="68%"?"100%":"68%"),className:"button button--utility button--small mb-32"},"Modify height"),e("button",{onClick:()=>i(!n),className:"button button--utility button--small mb-32"},"Toggle the back-button")),e("div",null,e("h1",{className:"h4 mb-16"},"This is a title for the content area"),e("p",null,"Life as a shorty shouldn't be so rough. Behold the bold soldier control the globe slowly, proceeds to blow, swinging swords like Shinobi. The game of chess, is like a swordfight, you must think first before you move. My beats travel like a vortex through your spine, to the top of your cerebral cortex. I smoke on the mic like smoking Joe Frazier, the hell raiser, raising hell with the flavor."),e("p",null,"I breaks it down to the bone gristle, Ill speaking Scud missile heat seeking, Johnny Blazing. Protect Ya Neck, my sword still remain imperial before I blast the mic, RZA scratch off the serial. Shackling the masses with drastic rap tactics, graphic displays melt the steel like blacksmiths. Perpendicular to the square we stay in gold like Flair, escape from your dragon's lair in particular. Shame on you when you stepped through to The Ol Dirty Bastard straight from the Brooklyn Zoo. Protect Ya Neck, my sword still remain imperial before I blast the mic, RZA scratch off the serial."),e("p",null,"Life as a shorty shouldn't be so rough. Handcuffed in the back of a bus, forty of us. Rae got it going on pal, call me the rap assassinator, rhymes rugged and built like Schwarzenegger. My beats travel like a vortex through your spine, to the top of your cerebral cortex. Life as a shorty shouldn't be so rough. Well I'm a sire, I set the microphone on fire, rap styles vary and carry like Mariah."))))},da=function(){const[t,l]=r.useState(!1),[n,i]=r.useState(!1),s=()=>l(!t);return e(r.Fragment,null,e(V,{utility:!0,onClick:s,mdxType:"Button"},"Open modal"),e(Pe,{open:t,onDismiss:n?s:void 0,title:"Non dismissable",footer:e(V,{primary:!0,disabled:!n,onClick:s,mdxType:"Button"},"Save"),mdxType:"Modal"},e("p",null,"To go further, you need to agree to these bogus terms"),e(ne,{type:"checkbox",label:"I agree",checked:n,onChange:o=>i(o),mdxType:"Toggle"})))},ma=function(){const[t,l]=r.useState(!1),n=r.useRef(),i=()=>l(!t);return e(r.Fragment,null,e(V,{utility:!0,onClick:i,mdxType:"Button"},"Open modal"),e(Pe,{open:t,initialFocusRef:n,title:"Customized focus behavior",footer:e(r.Fragment,null,e(V,{onClick:i,className:"mr-12",mdxType:"Button"},"Cancel"),e(V,{primary:!0,ref:n,onClick:i,mdxType:"Button"},"Accept")),mdxType:"Modal"},e("p",null,"The call to action button has inital focus.")))},nl=a=>function(l){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",d({},l))},rl=nl("PropTable"),il={Example0:ca,Example1:da,Example2:ma},sl="wrapper";function ua(l){var n=l,{components:a}=n,t=N(n,["components"]);return e(sl,y(d(d({},il),t),{components:a,mdxType:"MDXLayout"}),e("h1",{id:"modal"},e("a",{parentName:"h1",href:"#modal","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Modal"),e("p",null,`Modals are dialogs for contextual information, tasks, or workflows that appear
over the user interface.`),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Modal } from '@fabric-ds/react';
`)),e("h2",{id:"example"},e("a",{parentName:"h2",href:"#example","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Example"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [open, setOpen] = React.useState(false);
  const [left, setLeft] = React.useState(true);
  const [height, setHeight] = React.useState('68%');

  const toggleModal = () => setOpen(!open);

  return (
    <>
      <Button utility onClick={toggleModal}>
        Open modal
      </Button>

      <Modal
        left={left}
        right
        open={open}
        onDismiss={toggleModal}
        title="Hello title"
        footer={
          <Button primary onClick={toggleModal}>
            Confirm
          </Button>
        }
        style={{
          '--f-modal-max-height': height,
          '--f-modal-height': '100%',
        }}
      >
        <div className="space-x-8">
          <button
            onClick={() => setHeight(height === '68%' ? '100%' : '68%')}
            className="button button--utility button--small mb-32"
          >
            Modify height
          </button>
          <button
            onClick={() => setLeft(!left)}
            className="button button--utility button--small mb-32"
          >
            Toggle the back-button
          </button>
        </div>
        <div>
          <h1 className="h4 mb-16">This is a title for the content area</h1>
          <p>
            Life as a shorty shouldn't be so rough. Behold the bold soldier
            control the globe slowly, proceeds to blow, swinging swords like
            Shinobi. The game of chess, is like a swordfight, you must think
            first before you move. My beats travel like a vortex through your
            spine, to the top of your cerebral cortex. I smoke on the mic like
            smoking Joe Frazier, the hell raiser, raising hell with the flavor.
          </p>
          <p>
            I breaks it down to the bone gristle, Ill speaking Scud missile heat
            seeking, Johnny Blazing. Protect Ya Neck, my sword still remain
            imperial before I blast the mic, RZA scratch off the serial.
            Shackling the masses with drastic rap tactics, graphic displays melt
            the steel like blacksmiths. Perpendicular to the square we stay in
            gold like Flair, escape from your dragon's lair in particular. Shame
            on you when you stepped through to The Ol Dirty Bastard straight
            from the Brooklyn Zoo. Protect Ya Neck, my sword still remain
            imperial before I blast the mic, RZA scratch off the serial.
          </p>
          <p>
            Life as a shorty shouldn't be so rough. Handcuffed in the back of a
            bus, forty of us. Rae got it going on pal, call me the rap
            assassinator, rhymes rugged and built like Schwarzenegger. My beats
            travel like a vortex through your spine, to the top of your cerebral
            cortex. Life as a shorty shouldn't be so rough. Well I'm a sire, I
            set the microphone on fire, rap styles vary and carry like Mariah.
          </p>
        </div>
      </Modal>
    </>
  );
}
`)),e("div",{className:"example"},e(ca,{mdxType:"Example0"})),e("h2",{id:"content"},e("a",{parentName:"h2",href:"#content","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Content"),e("p",null,"Fabric guidelines state the following:"),e("ul",null,e("li",{parentName:"ul"},`The cancel action should always be on the left, while the main action is to
the right.`)),e("h2",{id:"non-dismissable-modals"},e("a",{parentName:"h2",href:"#non-dismissable-modals","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Non dismissable modals"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"onDismiss"),` prop is optional. It can be dropped to create a modal that won't
respond to `,e("inlineCode",{parentName:"p"},"esc")," keypresses and/or clicking outside the modal."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [open, setOpen] = React.useState(false);
  const [hasAgreed, setHasAgreed] = React.useState(false);

  const toggleModal = () => setOpen(!open);

  return (
    <>
      <Button utility onClick={toggleModal}>
        Open modal
      </Button>

      <Modal
        open={open}
        onDismiss={hasAgreed ? toggleModal : undefined}
        title="Non dismissable"
        footer={
          <Button primary disabled={!hasAgreed} onClick={toggleModal}>
            Save
          </Button>
        }
      >
        <p>To go further, you need to agree to these bogus terms</p>
        <Toggle
          type="checkbox"
          label="I agree"
          checked={hasAgreed}
          onChange={(state) => setHasAgreed(state)}
        />
      </Modal>
    </>
  );
}
`)),e("div",{className:"example"},e(da,{mdxType:"Example1"})),e("h2",{id:"accessibility"},e("a",{parentName:"h2",href:"#accessibility","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Accessibility"),e("p",null,"Modal needs either ",e("inlineCode",{parentName:"p"},"aria-label")," or ",e("inlineCode",{parentName:"p"},"aria-labelledby"),` to be accessible to screen
readers.`),e("p",null,`All dialogs must have a title. Titles appear in bold at the top of the dialog
and use a few words to convey the outcome of what will happen if a user
continues with an action. Use the property `,e("inlineCode",{parentName:"p"},"title")," for this."),e("h3",{id:"customizing-focus-behavior"},e("a",{parentName:"h3",href:"#customizing-focus-behavior","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Customizing focus behavior"),e("p",null,`By default the first interactive element in the modal will be focused when the
modal opens. Use `,e("inlineCode",{parentName:"p"},"initialFocusRef"),` to customize this behavior. For instance,
this can be used to focus a call to action button.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [open, setOpen] = React.useState(false);
  const focusRef = React.useRef();

  const toggleModal = () => setOpen(!open);

  return (
    <>
      <Button utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal
        open={open}
        initialFocusRef={focusRef}
        title="Customized focus behavior"
        footer={
          <>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button primary ref={focusRef} onClick={toggleModal}>
              Accept
            </Button>
          </>
        }
      >
        <p>The call to action button has inital focus.</p>
      </Modal>
    </>
  );
}
`)),e("div",{className:"example"},e(ma,{mdxType:"Example2"})),e("h2",{id:"modal-props"},e("a",{parentName:"h2",href:"#modal-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Modal Props"),e(rl,{props:{title:{defaultValue:null,description:"A string or your own custom elements",name:"title",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string | Element | Element[]"},descriptionHtml:"<p>A string or your own custom elements</p>"},open:{defaultValue:null,description:"Whether the modal is open or not",name:"open",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!0,type:{name:"boolean"},descriptionHtml:"<p>Whether the modal is open or not</p>"},left:{defaultValue:null,description:"A default back button or your own custom elements",name:"left",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean | Element | Element[]"},descriptionHtml:"<p>A default back button or your own custom elements</p>"},right:{defaultValue:null,description:"A default close button or your own custom elements",name:"right",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean | Element | Element[]"},descriptionHtml:"<p>A default close button or your own custom elements</p>"},footer:{defaultValue:null,description:"Buttons passed to the footer",name:"footer",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"Element | Element[]"},descriptionHtml:"<p>Buttons passed to the footer</p>"},className:{defaultValue:null,description:"Additional classes added to the container",name:"className",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional classes added to the container</p>"},id:{defaultValue:null,description:"An id for the container and ARIA attributes. A random id is generated if none is provided.",name:"id",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>An id for the container and ARIA attributes. A random id is generated if none is provided.</p>"},style:{defaultValue:null,description:"Additional styles to the contianer",name:"style",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"CSSProperties"},descriptionHtml:"<p>Additional styles to the contianer</p>"},children:{defaultValue:null,description:"The modal contents",name:"children",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!0,type:{name:"Element | Element[]"},descriptionHtml:"<p>The modal contents</p>"},onDismiss:{defaultValue:null,description:"Handler that is called when the user presses *esc* or clicks outside the modal",name:"onDismiss",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"() => void"},descriptionHtml:"<p>Handler that is called when the user presses <em>esc</em> or clicks outside the modal</p>"},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,",name:"aria-label",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Defines a string value that labels the current element. Must be set if neither <code>aria-labelledby</code> or <code>&#x3C;ModalHeading></code> is defined,</p>"},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined.",name:"aria-labelledby",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Identifies the element (or elements) that labels the current element. Must be set if neither <code>aria-label</code> or <code>&#x3C;ModalHeading></code> is defined.</p>"},initialFocusRef:{defaultValue:null,description:"A reference to the element that should be focused. By default it'll be the first interactive element.",name:"initialFocusRef",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"RefObject<any>"},descriptionHtml:"<p>A reference to the element that should be focused. By default it'll be the first interactive element.</p>"}},mdxType:"PropTable"}))}ua.isMDXComponent=!0;const ol=a=>{const g=a,{className:t,invalid:l,id:n,hint:i,always:s,label:o,style:p}=g,m=N(g,["className","invalid","id","hint","always","label","style"]),f=i?`${n}__hint`:void 0;return{attrs:{div:{style:p},label:{htmlFor:n,children:o},select:y(d({},m),{"aria-describedby":f,"aria-errormessage":l&&f?f:void 0,"aria-invalid":l,id:n}),help:s||l?{children:i,id:f}:null},classes:h("input mb-0",{"input--is-invalid":l},t)}};function pl(a,t){const l=G(a.id),{attrs:n,classes:i}=ol(y(d({},a),{id:l})),{div:s,label:o,select:p,help:m}=n;return c.exports.createElement("div",d({className:i},s),o.children&&c.exports.createElement("label",d({},o)),c.exports.createElement("div",{className:"input--select__wrap"},c.exports.createElement("select",d({ref:t},p))),m&&c.exports.createElement("div",d({className:"input__sub-text"},m)))}const xe=c.exports.forwardRef(pl),ha=function(){let[t,l]=r.useState("c");return e("div",{className:"flex flex-col space-y-32"},e(xe,{label:"Berries (uncontrolled)",mdxType:"Select"},e("option",{value:"s"},"Strawberries"),e("option",{value:"r"},"Raspberries"),e("option",{value:"c"},"Cloudberries")),e(xe,{label:"Berries (controlled)",value:t,onChange:n=>l(n.target.value),mdxType:"Select"},e("option",{value:"s"},"Strawberries"),e("option",{value:"r"},"Raspberries"),e("option",{value:"c"},"Cloudberries")))},cl=a=>function(l){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",d({},l))},dl=cl("PropTable"),ml={Example0:ha},ul="wrapper";function fa(l){var n=l,{components:a}=n,t=N(n,["components"]);return e(ul,y(d(d({},ml),t),{components:a,mdxType:"MDXLayout"}),e("h1",{id:"select"},e("a",{parentName:"h1",href:"#select","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Select"),e("p",null,"A dropdown component for selecting a single value."),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Select } from '@fabric-ds/react';
`)),e("h2",{id:"example"},e("a",{parentName:"h2",href:"#example","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Example"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Select label="Berries">
  <option value="s">Strawberries</option>
  <option value="r">Raspberries</option>
  <option value="c">Cloudberries</option>
</Select>
`)),e("div",{className:"example"},e(xe,{label:"Berries",mdxType:"Select"},e("option",{value:"s"},"Strawberries"),e("option",{value:"r"},"Raspberries"),e("option",{value:"c"},"Cloudberries"))),e("h2",{id:"value"},e("a",{parentName:"h2",href:"#value","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Value"),e("p",null,"An initial, uncontrolled, value can be provided using the ",e("inlineCode",{parentName:"p"},"defaultValue"),` prop.
Alternatively, a controlled value can be provided using the `,e("inlineCode",{parentName:"p"},"value")," prop."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  let [value, setValue] = React.useState('c');

  return (
    <div className="flex flex-col space-y-32">
      <Select label="Berries (uncontrolled)">
        <option value="s">Strawberries</option>
        <option value="r">Raspberries</option>
        <option value="c">Cloudberries</option>
      </Select>

      <Select
        label="Berries (controlled)"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <option value="s">Strawberries</option>
        <option value="r">Raspberries</option>
        <option value="c">Cloudberries</option>
      </Select>
    </div>
  );
}
`)),e("div",{className:"example"},e(ha,{mdxType:"Example0"})),e("h2",{id:"labeling"},e("a",{parentName:"h2",href:"#labeling","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Labeling"),e("p",null,"A visual label should be provided for the Select using the ",e("inlineCode",{parentName:"p"},"label")," prop."),e("h3",{id:"accessibility"},e("a",{parentName:"h3",href:"#accessibility","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Accessibility"),e("p",null,"If a visible label isn't specified, an ",e("inlineCode",{parentName:"p"},"aria-label"),` should be provided to the
Select for accessibility. If the field is labeled by a separate element, an
`,e("inlineCode",{parentName:"p"},"aria-labelledby"),` prop should be provided using the id of the labeling element
instead.`),e("h2",{id:"hint-text"},e("a",{parentName:"h2",href:"#hint-text","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Hint text"),e("p",null,"Selects can provide additional context with ",e("inlineCode",{parentName:"p"},"hint"),` if the label and placeholder
aren't enough. You can force the hint text to always display by setting the
`,e("inlineCode",{parentName:"p"},"always")," prop."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Select label="Berries" hint="We'll make jam of your selection" always>
  <option value="s">Strawberries</option>
  <option value="r">Raspberries</option>
  <option value="c">Cloudberries</option>
</Select>
`)),e("div",{className:"example"},e(xe,{label:"Berries",hint:"We'll make jam of your selection",always:!0,mdxType:"Select"},e("option",{value:"s"},"Strawberries"),e("option",{value:"r"},"Raspberries"),e("option",{value:"c"},"Cloudberries"))),e("h2",{id:"validation"},e("a",{parentName:"h2",href:"#validation","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Validation"),e("p",null,`Selects can communicate to the user whether the current value is invalid.
Implement your own validation logic in your app and set the `,e("inlineCode",{parentName:"p"},"invalid"),` prop to
display it as invalid.`),e("p",null,e("inlineCode",{parentName:"p"},"invalid")," is often paired with ",e("inlineCode",{parentName:"p"},"hint"),` to provide feedback to the user about the
error.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Select label="Berries" invalid hint="The wrong selection gets you berried">
  <option value="s">Strawberries</option>
  <option value="r">Raspberries</option>
  <option value="c">Cloudberries</option>
</Select>
`)),e("div",{className:"example"},e(xe,{label:"Berries",invalid:!0,hint:"The wrong selection gets you berried",mdxType:"Select"},e("option",{value:"s"},"Strawberries"),e("option",{value:"r"},"Raspberries"),e("option",{value:"c"},"Cloudberries"))),e("h2",{id:"disabled"},e("a",{parentName:"h2",href:"#disabled","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Disabled"),e("p",null,`Using disabled is considered an anti-pattern and is therefore not supported.
There will ALWAYS be users who don't understand why an element is disabled, or
users who can't even see that it is disabled because of poor lighting conditions
or other reasons. Please consider more informative alternatives.`),e("h2",{id:"props"},e("a",{parentName:"h2",href:"#props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Props"),e(dl,{props:{autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"SelectHTMLAttributes"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the element should receive focus on render.</p>"},children:{defaultValue:null,description:"The `option` elements to populate the select with.",name:"children",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"DOMAttributes"}],required:!1,type:{name:"ReactNode"},descriptionHtml:"<p>The <code>option</code> elements to populate the select with.</p>"},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional CSS class for the container</p>"},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>The default value (uncontrolled).</p>"},invalid:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `hint` to provide feedback about the error.",name:"invalid",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Renders the field in an invalid state. Often paired together with <code>hint</code> to provide feedback about the error.</p>"},hint:{defaultValue:null,description:"The content to display as the help text.",name:"hint",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"ReactNode"},descriptionHtml:"<p>The content to display as the help text.</p>"},always:{defaultValue:null,description:"Whether to always show hint",name:"always",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether to always show hint</p>"},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:`<p>The element's unique identifier. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id">MDN</a>.</p>`},label:{defaultValue:null,description:"The content to display as the label.",name:"label",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"ReactNode"},descriptionHtml:"<p>The content to display as the label.</p>"},name:{defaultValue:null,description:"The name of the select element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"SelectHTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:'<p>The name of the select element, used when submitting an HTML form. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname">MDN</a>.</p>'},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"(e: FocusEvent<HTMLSelectElement, Element>) => void"},descriptionHtml:"<p>Handler that is called when the element loses focus.</p>"},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"(e: ChangeEvent<HTMLSelectElement>) => void"},descriptionHtml:"<p>Handler that is called when the value changes.</p>"},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"(e: FocusEvent<HTMLSelectElement, Element>) => void"},descriptionHtml:"<p>Handler that is called when the element receives focus.</p>"},required:{defaultValue:null,description:"Whether user input is required on the select before form submission.",name:"required",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"SelectHTMLAttributes"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether user input is required on the select before form submission.</p>"},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"CSSProperties"},descriptionHtml:"<p>Additional CSS styles for the container.</p>"},value:{defaultValue:null,description:"The current value (controlled).",name:"value",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>The current value (controlled).</p>"}},mdxType:"PropTable"}))}fa.isMDXComponent=!0;function ba(a,t){const{width:l}=kt(a),[n,i]=c.exports.useState(l);return le(()=>{var s,o;i(l-((o=(s=t.current)==null?void 0:s.offsetWidth)!=null?o:0))},[l,t]),n}function X(a,t,l){return Math.min(Math.max(a,t),l)}function pe(a,t,l,n){if(n){const i=(l-t)/2;return n.invertExtent(a)[a>i?1:0]}return X((a-t)/(l-t),0,1)}function ga(a,t,l,n,i){if(i)return i(a);let s=(l-t)*a;return s=Math.round(s/n)*n+t,X(t,s,l)}function xa(a,t,l){if(!l)return a+t;const n=l.range(),i=n.indexOf(a),s=Math.min(n.length-1,i+t);return n[s]}function Na(a,t,l){if(!l)return a-t;const n=l.range(),i=n.indexOf(a),s=Math.max(0,i-t);return n[s]}function Se(a,t,l,n,i){const s=2,o=20;return i?t*Math.max(s,Math.min(o,Math.ceil(i.range().length/10/t))):t*Math.max(s,Math.min(o,Math.ceil((n-l)/10/t)))}const hl=g=>{var v=g,{className:a,disabled:t=!1,onInput:l=()=>{},onChange:n=()=>{},max:i=100,min:s=0,scale:o,step:p=1,value:m}=v,f=N(v,["className","disabled","onInput","onChange","max","min","scale","step","value"]);const T=r.useRef(null),b=r.useRef(null),H=ba(T,b),P=r.useRef(m),[S,I]=r.useState(!1),x=M=>{M!==m&&n(M)},u=M=>{if(t)return;let j;switch(M.key){case"ArrowLeft":case"ArrowDown":case"PageDown":j=Na(m,M.key==="PageDown"?Se(m,p,s,i,o):p,o);break;case"ArrowUp":case"ArrowRight":case"PageUp":j=xa(m,M.key==="PageUp"?Se(m,p,s,i,o):p,o);break;case"Home":j=s;break;case"End":j=i;break}j!=null&&(j=X(j,s,i),l(j),x(j),M.preventDefault(),M.stopPropagation())},[C,w]=Fe(()=>({ratio:pe(m,s,i,o),immediate:!0}));r.useEffect(()=>{P.current!==m&&(P.current=m,w({ratio:pe(m,s,i,o)}))},[m,w,s,i,o]);const A=je(({xy:M,first:j,last:ye,memo:ie={rect:(ve=>(ve=T.current)==null?void 0:ve.getBoundingClientRect())()}})=>{var ue;const me=X((M[0]-ie.rect.left)/ie.rect.width,0,1);let Q=ga(me,s,i,p,o);return Q!==P.current&&(S||n(Q),l(Q)),w({ratio:me}),j?I(!0):ye&&(I(!1),x(Q),(ue=b.current)==null||ue.focus()),ie},{axis:"x",enabled:!t});return r.createElement("div",y(d({},A()),{"data-body-scroll-lock-ignore":!0,className:h(k.wrapper,a),style:{cursor:S?"grabbing":"pointer"},ref:T}),r.createElement("div",{className:h({"pointer-events-none":t,[k.track]:!0})}),r.createElement(fe.div,{className:h({[k.activeTrackDisabled]:t,[k.activeTrack]:!0}),style:{left:0,right:C.ratio.interpolate(M=>`${(1-M)*100}%`)}}),r.createElement(fe.div,{"aria-disabled":t,"aria-label":f["aria-label"],"aria-labelledby":f["aria-labelledby"],"aria-valuemax":i,"aria-valuemin":s,"aria-valuenow":m,"aria-valuetext":f["aria-valuetext"],className:h({[k.thumbDisabled]:t,[k.thumbEnabled]:!t,[k.thumb]:!0,"shadow-sm":!0}),onKeyDown:u,role:"slider",ref:b,style:{transform:C.ratio.interpolate(M=>`translate3d(${M*H}px,0,0)`),cursor:"inherit"},tabIndex:t?void 0:0},r.createElement("div",{className:h({[k.thumbCenter]:!0,[k.thumbCenterEnabled]:!t,[k.thumbCenterDisabled]:t})})))},Ie=a=>{const[t,l]=r.useState(!1);return le(()=>{l(!0)},[]),t?r.createElement(hl,d({},a)):r.createElement("div",{className:h(k.wrapper,a.className)},r.createElement("div",{className:h(k.track)}))};var ya;(function(a){a[a.Lower=0]="Lower",a[a.Upper=1]="Upper"})(ya||(ya={}));const fl=g=>{var v=g,{className:a,disabled:t=!1,value:l,onInput:n=()=>{},onChange:i=()=>{},max:s=100,min:o=0,scale:p,step:m=1}=v,f=N(v,["className","disabled","value","onInput","onChange","max","min","scale","step"]);var j,ye,ie,ve,me,Q,ue,Ae;const T=r.useRef(null),b=r.useRef(null),H=r.useRef(null),P=ba(T,b),S=r.useRef([...l]),[I,x]=r.useState(!1),u=(D,$)=>{if(l[$]!==D){const Z=l.concat();Z[$]=D,i(Z)}},C=(D,$=0)=>{if(t)return;const Z=l[$];let q;switch(D.key){case"ArrowLeft":case"ArrowDown":case"PageDown":q=Na(Z,D.key==="PageDown"?Se(Z,m,o,s,p):m,p);break;case"ArrowUp":case"ArrowRight":case"PageUp":q=xa(Z,D.key==="PageUp"?Se(Z,m,o,s,p):m,p);break;case"Home":q=o;break;case"End":q=s;break}if(q!=null){q=X(q,$===0?o:l[0],$===1?s:l[1]);const Te=l.concat();Te[$]=q,n(Te),u(q,$),D.preventDefault(),D.stopPropagation()}},[w,A]=Fe(()=>({ratioLower:pe(l[0],o,s,p),ratioUpper:pe(l[1],o,s,p),immediate:!0}));r.useEffect(()=>{S.current[0]!==l[0]&&(S.current[0]=l[0],A({ratioLower:pe(l[0],o,s,p)})),S.current[1]!==l[1]&&(S.current[1]=l[1],A({ratioUpper:pe(l[1],o,s,p)}))},[l,A,s,o,p]);const M=je(({xy:D,first:$,last:Z,memo:q={rect:(Te=>(Te=T.current)==null?void 0:Te.getBoundingClientRect())(),handle:0}})=>{var De;let ee=X((D[0]-q.rect.left)/q.rect.width,0,1);const Me=w.ratioLower.getValue(),Ve=w.ratioUpper.getValue();if($){let he;l[0]===s?he=0:l[1]===o?he=1:he=Math.abs(Me-ee)<Math.abs(Ve+1e-4-ee)?0:1,q.handle=he,x(!0)}ee=q.handle===0?X(ee,0,Ve):X(ee,Me,1);const Ee=ga(ee,o,s,m,p);return Ee!==S.current[q.handle]&&(S.current[q.handle]=Ee,I||i(S.current.concat()),n(S.current.concat())),Z&&(x(!1),u(Ee,q.handle),(De=(q.handle===0?b:H).current)==null||De.focus()),A({[q.handle===0?"ratioLower":"ratioUpper"]:ee}),q},{axis:"x",enabled:!t});return r.createElement("div",y(d({},M()),{"data-body-scroll-lock-ignore":!0,className:h(k.wrapper,{disabled:t},a),style:{cursor:I?"grabbing":"pointer"},ref:T}),r.createElement("div",{className:h({"pointer-events-none":t,[k.track]:!0})}),r.createElement(fe.div,{className:h({[k.activeTrackDisabled]:t,[k.activeTrack]:!0}),style:{left:w.ratioLower.interpolate(D=>`${D*100}%`),right:w.ratioUpper.interpolate(D=>`${(1-D)*100}%`)}}),r.createElement(fe.div,{"aria-disabled":t,"aria-label":(ye=(j=f["aria-label"])==null?void 0:j[0])!=null?ye:f["aria-labelledby"]?void 0:"Fra","aria-labelledby":(ie=f["aria-labelledby"])==null?void 0:ie[0],"aria-valuemax":l[1],"aria-valuemin":o,"aria-valuenow":l[0],"aria-valuetext":(ve=f["aria-valuetext"])==null?void 0:ve[0],className:h({[k.thumbDisabled]:t,[k.thumbEnabled]:!t,[k.thumb]:!0,"shadow-sm":!0}),onKeyDown:C,role:"slider",ref:b,style:{transform:$e([w.ratioLower,w.ratioUpper],(D,$)=>`translate3d(${X(D,0,$)*P}px, 0px, 0px)`),cursor:"inherit"},tabIndex:t?void 0:0},r.createElement("div",{className:h({[k.thumbCenter]:!0,[k.thumbCenterEnabled]:!t,[k.thumbCenterDisabled]:t})})),r.createElement(fe.div,{"aria-disabled":t,"aria-label":(Q=(me=f["aria-label"])==null?void 0:me[1])!=null?Q:f["aria-labelledby"]?void 0:"Til","aria-labelledby":(ue=f["aria-labelledby"])==null?void 0:ue[1],"aria-valuemax":s,"aria-valuemin":l[0],"aria-valuenow":l[1],"aria-valuetext":(Ae=f["aria-valuetext"])==null?void 0:Ae[1],className:h({[k.thumbDisabled]:t,[k.thumbEnabled]:!t,[k.thumb]:!0,"shadow-sm":!0}),onKeyDown:D=>C(D,1),role:"slider",ref:H,style:{transform:$e([w.ratioLower,w.ratioUpper],(D,$)=>`translate3d(${X($,D,1)*P}px, 0px, 0px)`),cursor:"inherit"},tabIndex:t?void 0:0},r.createElement("div",{className:h({[k.thumbCenter]:!0,[k.thumbCenterEnabled]:!t,[k.thumbCenterDisabled]:t})})))},va=a=>{const[t,l]=r.useState(!1);return le(()=>{l(!0)},[]),t?r.createElement(fl,d({},a)):r.createElement("div",{className:h(k.wrapper,a.className)},r.createElement("div",{className:h(k.track)}))},Ta=function(){const[t,l]=r.useState(50),[n,i]=r.useState([25,75]);return e("div",{className:"space-y-32"},e(Ie,{"aria-label":"Slider example",onChange:l,value:t,step:10,mdxType:"RegularSlider"}),e(va,{"aria-label":["Range example: lower","Range example: upper"],onChange:i,value:n,mdxType:"RangeSlider"}))},Ca=function(){const[t,l]=r.useState(50),[n,i]=r.useState(t);return e(r.Fragment,null,e("p",null,"Drag the slider to see the difference between onChange and onInput"),e(Ie,{"aria-label":"onInput example",value:t,onChange:l,onInput:i,mdxType:"RegularSlider"}),e("div",null,"onChange: ",t),e("div",null,"onInput: ",n))},bl=a=>function(l){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",d({},l))},ka=bl("PropTable"),gl={Example0:Ta,Example1:Ca},xl="wrapper";function wa(l){var n=l,{components:a}=n,t=N(n,["components"]);return e(xl,y(d(d({},gl),t),{components:a,mdxType:"MDXLayout"}),e("h1",{id:"slider"},e("a",{parentName:"h1",href:"#slider","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Slider"),e("p",null,`A slider is an input where the user selects a value from within a given range.
The precise value, however, is not necessarily considered important. It can have
single or dual drag handles.`),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { RegularSlider, RangeSlider } from '@fabric-ds/react';
`)),e("h2",{id:"example"},e("a",{parentName:"h2",href:"#example","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Example"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [singleValue, setSingleValue] = React.useState(50);
  const [rangeValue, setRangeValue] = React.useState([25, 75]);

  return (
    <div className="space-y-32">
      <RegularSlider
        aria-label="Slider example"
        onChange={setSingleValue}
        value={singleValue}
        step={10}
      />

      <RangeSlider
        aria-label={['Range example: lower', 'Range example: upper']}
        onChange={setRangeValue}
        value={rangeValue}
      />
    </div>
  );
}
`)),e("div",{className:"example"},e(Ta,{mdxType:"Example0"})),e("h2",{id:"accessiblity"},e("a",{parentName:"h2",href:"#accessiblity","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Accessiblity"),e("p",null,"To be accessible, an ",e("inlineCode",{parentName:"p"},"aria-label"),` prop should be provided to the slider. If the
slider is labeled by a separate element, use an `,e("inlineCode",{parentName:"p"},"aria-labelledby"),` prop with the
id of the labeling element instead.`),e("h2",{id:"events"},e("a",{parentName:"h2",href:"#events","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Events"),e("p",null,"The slider accepts an ",e("inlineCode",{parentName:"p"},"onChange"),` prop which is triggered whenever the value is
changed by the user. Note that this is only called when the value has settled.
In other words, when the user has stopped dragging the slider's handle.`),e("p",null,`If you need the value while the slider is being interacted it, before the value
has settled, you can use the `,e("inlineCode",{parentName:"p"},"onInput"),` prop. This is always triggered before an
`,e("inlineCode",{parentName:"p"},"onChange"),"."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [value, setValue] = React.useState(50);
  const [inputValue, setInputValue] = React.useState(value);

  return (
    <>
      <p>Drag the slider to see the difference between onChange and onInput</p>
      <RegularSlider
        aria-label="onInput example"
        value={value}
        onChange={setValue}
        onInput={setInputValue}
      />
      <div>onChange: {value}</div>
      <div>onInput: {inputValue}</div>
    </>
  );
}
`)),e("div",{className:"example"},e(Ca,{mdxType:"Example1"})),e("h2",{id:"visual-options"},e("a",{parentName:"h2",href:"#visual-options","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Visual options"),e("h3",{id:"disabled"},e("a",{parentName:"h3",href:"#disabled","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Disabled"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<div className="space-y-32">
  <RegularSlider aria-label="Disabled slider" disabled value={50} />
  <RangeSlider
    aria-label={['Disabled slider: lower', 'Disabled slider: upper']}
    disabled
    value={[25, 75]}
  />
</div>
`)),e("div",{className:"example"},e("div",{className:"space-y-32"},e(Ie,{"aria-label":"Disabled slider",disabled:!0,value:50,mdxType:"RegularSlider"}),e(va,{"aria-label":["Disabled slider: lower","Disabled slider: upper"],disabled:!0,value:[25,75],mdxType:"RangeSlider"}))),e("h2",{id:"additional-props"},e("a",{parentName:"h2",href:"#additional-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Additional props"),e("h3",{id:"max"},e("a",{parentName:"h3",href:"#max","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Max"),e("p",null,"The maximum value of the slider."),e("h3",{id:"min"},e("a",{parentName:"h3",href:"#min","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Min"),e("p",null,"The minimum value of the slider."),e("h3",{id:"step"},e("a",{parentName:"h3",href:"#step","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Step"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"step"),` prop is a number that specifies the granularity that the value must
adhere to as it changes. Step sets minimum intervals of change.`),e("h2",{id:"regularslider-props"},e("a",{parentName:"h2",href:"#regularslider-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"RegularSlider Props"),e(ka,{props:{"aria-label":{defaultValue:null,description:"String value that labels the slider.",name:"aria-label",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>String value that labels the slider.</p>"},"aria-labelledby":{defaultValue:null,description:"Identifies the element that labels the slider.",name:"aria-labelledby",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Identifies the element that labels the slider.</p>"},"aria-valuetext":{defaultValue:null,description:"Human readable text alternative for the value.",name:"aria-valuetext",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Human readable text alternative for the value.</p>"},className:{defaultValue:null,description:"Additional CSS class for the container.",name:"className",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional CSS class for the container.</p>"},disabled:{defaultValue:{value:!1},description:"Whether the slider is disabled.",name:"disabled",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the slider is disabled.</p>"},onInput:{defaultValue:{value:"() => {}"},description:"Handler that is called every time the value of the slider changes.",name:"onInput",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(value: number) => void"},descriptionHtml:"<p>Handler that is called every time the value of the slider changes.</p>"},onChange:{defaultValue:{value:"() => {}"},description:"Handler that is called when the value of the slider has settled.",name:"onChange",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(value: number) => void"},descriptionHtml:"<p>Handler that is called when the value of the slider has settled.</p>"},max:{defaultValue:{value:100},description:"The greatest value in the range of permitted values.",name:"max",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"number"},descriptionHtml:"<p>The greatest value in the range of permitted values.</p>"},min:{defaultValue:{value:0},description:"The lowest value in the range of permitted values.",name:"min",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"number"},descriptionHtml:"<p>The lowest value in the range of permitted values.</p>"},scale:{defaultValue:null,description:`A d3-scale object for non linear slider scales.
@see d3-scale repository https://github.com/d3/d3-scale`,name:"scale",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"Scale"},descriptionHtml:`<p>A d3-scale object for non linear slider scales.
@see d3-scale repository https://github.com/d3/d3-scale</p>`},step:{defaultValue:{value:1},description:"Specifies the value granularity.",name:"step",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"number"},descriptionHtml:"<p>Specifies the value granularity.</p>"},value:{defaultValue:null,description:"The current value.",name:"value",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!0,type:{name:"number"},descriptionHtml:"<p>The current value.</p>"}},mdxType:"PropTable"}),e("h2",{id:"rangeslider-props"},e("a",{parentName:"h2",href:"#rangeslider-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"RangeSlider Props"),e(ka,{props:{"aria-label":{defaultValue:null,description:"String value that labels the slider.",name:"aria-label",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"[string, string]"},descriptionHtml:"<p>String value that labels the slider.</p>"},"aria-labelledby":{defaultValue:null,description:"Identifies the element that labels the slider.",name:"aria-labelledby",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"[string, string]"},descriptionHtml:"<p>Identifies the element that labels the slider.</p>"},"aria-valuetext":{defaultValue:null,description:"Human readable text alternative for the value.",name:"aria-valuetext",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"[string, string]"},descriptionHtml:"<p>Human readable text alternative for the value.</p>"},className:{defaultValue:null,description:"Additional CSS class for the container.",name:"className",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional CSS class for the container.</p>"},disabled:{defaultValue:{value:!1},description:"Whether the slider is disabled.",name:"disabled",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the slider is disabled.</p>"},onInput:{defaultValue:{value:"() => {}"},description:"Handler that is called every time the value of the slider changes.",name:"onInput",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(value: [number, number]) => void"},descriptionHtml:"<p>Handler that is called every time the value of the slider changes.</p>"},onChange:{defaultValue:{value:"() => {}"},description:"Handler that is called when the value of the slider has settled.",name:"onChange",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(value: [number, number]) => void"},descriptionHtml:"<p>Handler that is called when the value of the slider has settled.</p>"},max:{defaultValue:{value:100},description:"The greatest value in the range of permitted values.",name:"max",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"number"},descriptionHtml:"<p>The greatest value in the range of permitted values.</p>"},min:{defaultValue:{value:0},description:"The lowest value in the range of permitted values.",name:"min",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"number"},descriptionHtml:"<p>The lowest value in the range of permitted values.</p>"},scale:{defaultValue:null,description:`A d3-scale object for non linear slider scales.
@see d3-scale repository https://github.com/d3/d3-scale`,name:"scale",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"Scale"},descriptionHtml:`<p>A d3-scale object for non linear slider scales.
@see d3-scale repository https://github.com/d3/d3-scale</p>`},step:{defaultValue:{value:1},description:"Specifies the value granularity.",name:"step",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"number"},descriptionHtml:"<p>Specifies the value granularity.</p>"},value:{defaultValue:null,description:"The current value",name:"value",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!0,type:{name:"[number, number]"},descriptionHtml:"<p>The current value</p>"}},mdxType:"PropTable"}))}wa.isMDXComponent=!0;const Sa=c.exports.createContext({horizontal:void 0,right:void 0});function Ea(a){return r.createElement(Sa.Provider,{value:{horizontal:a.horizontal,right:a.right}},r.createElement("div",{className:h(a.className,{"w-full":!0,flex:a.horizontal})},a.children))}function ce({active:a,completed:t,children:l}){const n=c.exports.useContext(Sa),i=!n.horizontal,s=!n.right;return r.createElement("div",{className:h({"f-step":!0,[E.stepVertical]:i,[E.stepVerticalLeft]:i&&s,[E.stepVerticalRight]:i&&!s,[E.stepHorizontal]:!i})},!i&&r.createElement("div",{className:h({"step-line-h-l":!0,[E.stepLine]:!0,[E.stepLineHorizontal]:!i,[E.stepLineIncomplete]:!a&&!t,[E.stepLineComplete]:a||t})}),r.createElement("div",{className:h({[E.stepDot]:!0,[E.stepDotVertical]:i,[E.stepDotVerticalLeft]:i&&s,[E.stepDotVerticalRight]:i&&!s,[E.stepDotHorizontal]:!i,[E.stepDotIncomplete]:!(a||t),[E.stepDotActive]:a,[E.stepDotComplete]:t})},r.createElement("svg",{role:"img","aria-label":t?"\u2713":"\u237B","aria-current":a?"step":void 0,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fill:"white",fillRule:"evenodd",d:"M13.007 4.447a.75.75 0 01.046 1.06l-5.5 6a.75.75 0 01-1.083.023l-3-3a.75.75 0 011.06-1.06l2.446 2.446 4.971-5.423a.75.75 0 011.06-.046z",clipRule:"evenodd"}))),r.createElement("div",{className:h({"step-line-h-r":!0,[E.stepLine]:!0,[E.stepLineVertical]:i,[E.stepLineVerticalLeft]:i&&s,[E.stepLineVerticalRight]:i&&!s,[E.stepLineHorizontal]:!i,[E.stepLineIncomplete]:!t,[E.stepLineComplete]:t})}),r.createElement("div",{className:h({[E.content]:!0,[E.contentVertical]:i,[E.contentHorizontal]:!i})},l))}const Ha=function(){return e(Ea,{mdxType:"Steps"},e(ce,{completed:!0,mdxType:"Step"},e("h4",null,"Step one"),e("p",null,"Content")),e(ce,{active:!0,mdxType:"Step"},e("h4",null,"Step two"),e("p",null,"Content")),e(ce,{mdxType:"Step"},e("h4",null,"Step three"),e("p",null,"Content")))},La=function(){const[t,l]=c.exports.useState(0),[n,i]=c.exports.useState(!1),[s,o]=c.exports.useState(!1),p=()=>l(t===3?0:m=>m+1);return e(r.Fragment,null,e(V,{onClick:p,small:!0,mdxType:"Button"},"Complete a step"),e(V,{className:"ml-8",onClick:()=>i(!n),small:!0,mdxType:"Button"},n?"Vertical":"Horizontal"),!n&&e(V,{className:"ml-8",onClick:()=>o(!s),small:!0,mdxType:"Button"},s?"Left":"Right"),e(Ea,{className:"mt-20",horizontal:n,right:s,mdxType:"Steps"},e(ce,{active:t===0,completed:t>0,mdxType:"Step"},e("h4",{className:"mt-0"},"Step one"),e("p",null,"Some content")),e(ce,{active:t===1,completed:t>1,mdxType:"Step"},e("h4",{className:"mt-0"},"Step two"),e("p",null,"Some content")),e(ce,{active:t===2,completed:t>2,mdxType:"Step"},e("h4",{className:"mt-0"},"Step three"),e("p",null,"Some content"))))},Nl=a=>function(l){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",d({},l))},Pa=Nl("PropTable"),yl={Example0:Ha,Example1:La},vl="wrapper";function Ia(l){var n=l,{components:a}=n,t=N(n,["components"]);return e(vl,y(d(d({},yl),t),{components:a,mdxType:"MDXLayout"}),e("h1",{id:"steps"},e("a",{parentName:"h1",href:"#steps","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Steps"),e("p",null,`The steps component is built to handle user journeys, making it clear to the end
user where they are in the process.`),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Steps, Step } from '@fabric-ds/react';
`)),e("h2",{id:"examples"},e("a",{parentName:"h2",href:"#examples","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Examples"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  return (
    <Steps>
      <Step completed>
        <h4>Step one</h4>
        <p>Content</p>
      </Step>
      <Step active>
        <h4>Step two</h4>
        <p>Content</p>
      </Step>
      <Step>
        <h4>Step three</h4>
        <p>Content</p>
      </Step>
    </Steps>
  );
}
`)),e("div",{className:"example"},e(Ha,{mdxType:"Example0"})),e("p",null,e("strong",{parentName:"p"},"Note")," the ",e("inlineCode",{parentName:"p"},"active")," and ",e("inlineCode",{parentName:"p"},"completed")," properties on the ",e("inlineCode",{parentName:"p"},"<Step>"),` component. You
have to conditionally set the truthiness of these properties depending on where
in the process the user is. See interactive example below.`),e("h3",{id:"interactive-example"},e("a",{parentName:"h3",href:"#interactive-example","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Interactive example"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [state, setState] = useState(0);
  const [horizontal, setHorizontal] = useState(false);
  const [right, setRight] = useState(false);

  const handleIncrease = () => {
    if (state === 3) {
      return setState(0);
    }

    return setState((state) => state + 1);
  };

  return (
    <>
      <Button onClick={handleIncrease} small>
        Complete a step
      </Button>
      <Button className="ml-8" onClick={() => setHorizontal(!horizontal)} small>
        {horizontal ? 'Vertical' : 'Horizontal'}
      </Button>
      {!horizontal && (
        <Button className="ml-8" onClick={() => setRight(!right)} small>
          {right ? 'Left' : 'Right'}
        </Button>
      )}

      <Steps className="mt-20" horizontal={horizontal} right={right}>
        <Step active={state === 0} completed={state > 0}>
          <h4 className="mt-0">Step one</h4>
          <p>Some content</p>
        </Step>
        <Step active={state === 1} completed={state > 1}>
          <h4 className="mt-0">Step two</h4>
          <p>Some content</p>
        </Step>
        <Step active={state === 2} completed={state > 2}>
          <h4 className="mt-0">Step three</h4>
          <p>Some content</p>
        </Step>
      </Steps>
    </>
  );
}
`)),e("div",{className:"example"},e(La,{mdxType:"Example1"})),e("p",null,e("strong",{parentName:"p"},"Note")," the ",e("inlineCode",{parentName:"p"},"horizontal")," and ",e("inlineCode",{parentName:"p"},"right")," properties on the ",e("inlineCode",{parentName:"p"},"<Steps>"),` component.
These choose the direction and alignment of the steps.`),e("h2",{id:"steps-props"},e("a",{parentName:"h2",href:"#steps-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Steps Props"),e(Pa,{props:{horizontal:{defaultValue:{value:"false"},description:"Direction of steps",name:"horizontal",parent:{fileName:"react/react/packages/steps/src/props.tsx",name:"StepsProps"},declarations:[{fileName:"react/react/packages/steps/src/props.tsx",name:"StepsProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Direction of steps</p>"},right:{defaultValue:{value:"false"},description:"Align steps to the right",name:"right",parent:{fileName:"react/react/packages/steps/src/props.tsx",name:"StepsProps"},declarations:[{fileName:"react/react/packages/steps/src/props.tsx",name:"StepsProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Align steps to the right</p>"},children:{defaultValue:null,description:"Two or more `Step` components",name:"children",parent:{fileName:"react/react/packages/steps/src/props.tsx",name:"StepsProps"},declarations:[{fileName:"react/react/packages/steps/src/props.tsx",name:"StepsProps"}],required:!0,type:{name:"Element[]"},descriptionHtml:"<p>Two or more <code>Step</code> components</p>"},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",parent:{fileName:"react/react/packages/steps/src/props.tsx",name:"StepsProps"},declarations:[{fileName:"react/react/packages/steps/src/props.tsx",name:"StepsProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional CSS class for the container</p>"}},mdxType:"PropTable"}),e("h2",{id:"step-props"},e("a",{parentName:"h2",href:"#step-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Step Props"),e(Pa,{props:{active:{defaultValue:{value:"false"},description:"Step is active",name:"active",parent:{fileName:"react/react/packages/steps/src/step.tsx",name:"StepProps"},declarations:[{fileName:"react/react/packages/steps/src/step.tsx",name:"StepProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Step is active</p>"},completed:{defaultValue:{value:"false"},description:"Step is completed",name:"completed",parent:{fileName:"react/react/packages/steps/src/step.tsx",name:"StepProps"},declarations:[{fileName:"react/react/packages/steps/src/step.tsx",name:"StepProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Step is completed</p>"},children:{defaultValue:null,description:"Contents of Step",name:"children",parent:{fileName:"react/react/packages/steps/src/step.tsx",name:"StepProps"},declarations:[{fileName:"react/react/packages/steps/src/step.tsx",name:"StepProps"}],required:!0,type:{name:"Element | Element[]"},descriptionHtml:"<p>Contents of Step</p>"}},mdxType:"PropTable"}))}Ia.isMDXComponent=!0;function Aa(o){var p=o,{id:a,value:t,onClick:l,"aria-label":n,"aria-labelledby":i}=p,s=N(p,["id","value","onClick","aria-label","aria-labelledby"]);const m="focus:outline-none focus:ring ring-offset-1 ring-blue-200 rounded-full";return r.createElement("div",{className:"tap-highlight-transparent"},r.createElement("button",d({id:a,role:"switch","aria-label":n,"aria-labelledby":i,"aria-checked":t,onClick:l,className:h([te.label,m])},s),r.createElement("span",{className:h([te.switchTrack,"top-0","left-0"],{[te.switchTrackSelected]:t,[te.switchTrackUnselected]:!t})}),r.createElement("span",{className:h([te.switchThumb,te.switchThumbNotDisabled],{[te.switchThumbSelected]:t})})))}const Ma=function(){const[t,l]=c.exports.useState(!1);return e(Aa,{value:t,onClick:()=>l(!t),"aria-label":"Toggle switch",mdxType:"Switch"})},Va=function(){const[t,l]=c.exports.useState(!1);return e(Aa,{value:t,onClick:()=>{l(!t),alert("Your own custom action when toggled")},"aria-label":"Toggle switch",mdxType:"Switch"})},Tl=a=>function(l){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",d({},l))},Cl=Tl("PropTable"),kl={Example0:Ma,Example1:Va},wl="wrapper";function Da(l){var n=l,{components:a}=n,t=N(n,["components"]);return e(wl,y(d(d({},kl),t),{components:a,mdxType:"MDXLayout"}),e("h1",{id:"switch"},e("a",{parentName:"h1",href:"#switch","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Switch"),e("p",null,"This component allows users to toggle between validity for a condition."),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Switch } from '@fabric-ds/react';
`)),e("h2",{id:"examples"},e("a",{parentName:"h2",href:"#examples","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Examples"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [value, setValue] = useState(false);

  return (
    <Switch
      value={value}
      onClick={() => setValue(!value)}
      aria-label="Toggle switch"
    />
  );
}
`)),e("div",{className:"example"},e(Ma,{mdxType:"Example0"})),e("h4",{id:"writing-your-own-custom-click-handler"},e("a",{parentName:"h4",href:"#writing-your-own-custom-click-handler","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Writing your own custom click handler"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [value, setValue] = useState(false);

  return (
    <Switch
      value={value}
      onClick={() => {
        setValue(!value);
        alert('Your own custom action when toggled');
      }}
      aria-label="Toggle switch"
    />
  );
}
`)),e("div",{className:"example"},e(Va,{mdxType:"Example1"})),e("h2",{id:"accessibility"},e("a",{parentName:"h2",href:"#accessibility","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Accessibility"),e("p",null,"The Switch needs either ",e("inlineCode",{parentName:"p"},"aria-label")," or ",e("inlineCode",{parentName:"p"},"aria-labelledby"),` to be accessible to
screen readers.`),e("h3",{id:""}),e("h4",{id:"disabled-property"},e("a",{parentName:"h4",href:"#disabled-property","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Disabled property"),e("p",null,`There is no visual styling to a disabled button. It is recommended to display a
message to the user, for example a modal or toast, stating why the user cannot
toggle the switch.`),e("h2",{id:"props"},e("a",{parentName:"h2",href:"#props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Props"),e(Cl,{props:{id:{defaultValue:null,description:"The unique identifier",name:"id",parent:{fileName:"react/react/packages/switch/src/props.tsx",name:"SwitchProps"},declarations:[{fileName:"react/react/packages/switch/src/props.tsx",name:"SwitchProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>The unique identifier</p>"},value:{defaultValue:null,description:"The value of the Switch",name:"value",parent:{fileName:"react/react/packages/switch/src/props.tsx",name:"SwitchProps"},declarations:[{fileName:"react/react/packages/switch/src/props.tsx",name:"SwitchProps"}],required:!0,type:{name:"boolean"},descriptionHtml:"<p>The value of the Switch</p>"},onClick:{defaultValue:null,description:"Handler for when the Switch is clicked",name:"onClick",parent:{fileName:"react/react/packages/switch/src/props.tsx",name:"SwitchProps"},declarations:[{fileName:"react/react/packages/switch/src/props.tsx",name:"SwitchProps"}],required:!0,type:{name:"() => void"},descriptionHtml:"<p>Handler for when the Switch is clicked</p>"},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element. Must be set if `aria-labelledby` is not defined,",name:"aria-label",parent:{fileName:"react/react/packages/switch/src/props.tsx",name:"SwitchProps"},declarations:[{fileName:"react/react/packages/switch/src/props.tsx",name:"SwitchProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Defines a string value that labels the current element. Must be set if <code>aria-labelledby</code> is not defined,</p>"},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element. Must be set if `aria-label` is not defined.",name:"aria-labelledby",parent:{fileName:"react/react/packages/switch/src/props.tsx",name:"SwitchProps"},declarations:[{fileName:"react/react/packages/switch/src/props.tsx",name:"SwitchProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Identifies the element (or elements) that labels the current element. Must be set if <code>aria-label</code> is not defined.</p>"}},mdxType:"PropTable"}))}Da.isMDXComponent=!0;const Sl=s=>{var o=s,{className:a,isActive:t,setActive:l,contained:n}=o,i=N(o,["className","isActive","setActive","contained"]);return{tab:h({[a]:!!a,[_.tab]:!0,[_.tabActive]:t,[_.tabContained]:n,[_.tabContainedActive]:n&&t}),icon:h({[_.icon]:!0,[_.iconUnderlined]:!n,[t?_.iconUnderlinedActive:_.iconUnderlinedInactive]:!n}),content:h({[_.contentUnderlined]:!n,[t?_.contentUnderlinedActive:_.contentUnderlinedInactive]:!n,[_.contentContainedActive]:n&&t}),attrs:d({},i)}};function L(a){const{children:t,label:l,setActive:n=()=>{},name:i,onClick:s,isActive:o}=a,{tab:p,icon:m,content:f,attrs:g}=Sl(a),H=g,{over:v}=H,T=N(H,["over"]),b=P=>{n(i),s&&s(P)};return r.createElement("button",y(d({type:"button"},T),{role:"tab","aria-selected":o?"true":"false","aria-controls":o?`fabric-tabpanel-${i}`:void 0,id:`fabric-tab-${i}`,tabIndex:o?0:-1,className:p,onClick:b}),!t&&r.createElement("span",{className:f},l),t&&v&&r.createElement(r.Fragment,null,r.createElement("span",{className:m},t),r.createElement("span",{className:f},l)),t&&!v&&r.createElement("div",{className:"flex items-center justify-center gap-8"},t,l))}function de(a){var o,p;const s=a,{children:t,name:l,hidden:n}=s,i=N(s,["children","name","hidden"]);return r.createElement("div",y(d({tabIndex:-1},i),{role:"tabpanel","aria-labelledby":`fabric-tab-${l}`,id:`fabric-tabpanel-${l}`,hidden:n===void 0&&typeof document=="object"?!((p=(o=document==null?void 0:document.getElementById(`fabric-tab-${l}`))==null?void 0:o.classList)==null?void 0:p.contains(_.tabActive)):n}),t)}function El(a,t=200,l=!1){let n;return function(){var i=()=>{n=null,l||a.apply(this,arguments)};let s=l&&!n;clearTimeout(n),n=setTimeout(i,t),s&&a.apply(this,arguments)}}const Hl=(m,o,p)=>{var f=m,{className:a,contained:t,children:l,onClick:n,active:i}=f,s=N(f,["className","contained","children","onClick","active"]);return{nav:h({[a]:!!a,[t?ke.wrapperContained:ke.wrapperUnderlined]:!0}),div:h({[ke.tabContainer]:!0,[`grid-cols-${l.length}`]:!0}),wunderbar:h(ke.wunderbar),attrs:s,updateWunderbar:()=>{t||window.requestAnimationFrame(()=>{try{const g=o.current.querySelector('button[role="tab"][aria-selected="true"]'),{left:v}=o.current.getBoundingClientRect(),{left:T,width:b}=g.getBoundingClientRect();p.current.style.left=`${T-v}px`,p.current.style.width=`${b}px`}catch(g){console.warn("Problem updating tabs",g)}})}}};function J(a){const t=Boolean(typeof document=="object"&&(document==null?void 0:document.createElement)),l=c.exports.useRef(null),n=c.exports.useRef(null),{children:i,contained:s,onChange:o}=a,{nav:p,div:m,wunderbar:f,attrs:g,updateWunderbar:v}=Hl(a,l,n),T=()=>{var x;if(a.active)return String(a.active);if(c.exports.Children.count(i)>0){const u=c.exports.Children.toArray(i),C=(u==null?void 0:u.find(w=>{var A;return(A=w==null?void 0:w.props)==null?void 0:A.isActive}))||u[0];return String(((x=C==null?void 0:C.props)==null?void 0:x.name)||"")}return""},[b,H]=c.exports.useState(T()),P=()=>{c.exports.Children.forEach(i,x=>{var u,C;if(typeof x=="object"){const w=document.getElementById(`fabric-tabpanel-${(u=x==null?void 0:x.props)==null?void 0:u.name}`);w&&(w.hidden=((C=x==null?void 0:x.props)==null?void 0:C.name)!==b)}})},S=x=>{H(x),v(),o&&o(x)},I=x=>{if(!x.altKey&&!x.ctrlKey&&!x.shiftKey&&["ArrowLeft","ArrowRight","Home","End"].includes(x.key))try{const u=[...l.current.querySelectorAll('button[role="tab"]')],C=u.findIndex(A=>A.name===b),w=(()=>{switch(x.key){case"Home":return 0;case"End":return u.length-1;case"ArrowLeft":return Math.max(0,C-1);case"ArrowRight":return Math.min(u.length-1,C+1);default:return C}})();C!==w&&(x.preventDefault(),S(u[w].name),u[w].focus())}catch(u){console.warn("Problem handling keydown",u)}};return c.exports.useEffect(()=>{t&&P(),v();const x=El(v,100);return window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)}),r.createElement("div",y(d({},g),{className:p}),r.createElement("div",{role:"tablist",className:m,ref:l,onKeyDown:I},c.exports.Children.map(i,x=>c.exports.cloneElement(x,{contained:s,setActive:S,isActive:x.props.name===b})),!s&&r.createElement("span",{className:f,ref:n})))}const qa=function(){return e("div",null,e(J,{active:"four",mdxType:"Tabs"},e(L,{label:"Tab 1",name:"four",mdxType:"Tab"}),e(L,{label:"Tab 2",name:"five",mdxType:"Tab"}),e(L,{label:"Tab 3",name:"six",mdxType:"Tab"})),e("div",{className:"mb-16"},e(de,{name:"four",mdxType:"TabPanel"},"Panel 1 content"),e(de,{name:"five",mdxType:"TabPanel"},"Panel 2 content"),e(de,{name:"six",mdxType:"TabPanel"},"Panel 3 content")))},Ba=function(){const t=e("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.33333 0.444444H15.1111C15.3469 0.444444 15.573 0.538095 15.7397 0.704794C15.9064 0.871493 16 1.09759 16 1.33333C16 1.56908 15.9064 1.79517 15.7397 1.96187C15.573 2.12857 15.3469 2.22222 15.1111 2.22222H5.33333C5.09759 2.22222 4.87149 2.12857 4.70479 1.96187C4.53809 1.79517 4.44444 1.56908 4.44444 1.33333C4.44444 1.09759 4.53809 0.871493 4.70479 0.704794C4.87149 0.538095 5.09759 0.444444 5.33333 0.444444ZM5.33333 5.77778H15.1111C15.3469 5.77778 15.573 5.87143 15.7397 6.03813C15.9064 6.20483 16 6.43092 16 6.66667C16 6.90241 15.9064 7.12851 15.7397 7.29521C15.573 7.46191 15.3469 7.55556 15.1111 7.55556H5.33333C5.09759 7.55556 4.87149 7.46191 4.70479 7.29521C4.53809 7.12851 4.44444 6.90241 4.44444 6.66667C4.44444 6.43092 4.53809 6.20483 4.70479 6.03813C4.87149 5.87143 5.09759 5.77778 5.33333 5.77778ZM5.33333 11.1111H15.1111C15.3469 11.1111 15.573 11.2048 15.7397 11.3715C15.9064 11.5382 16 11.7643 16 12C16 12.2357 15.9064 12.4618 15.7397 12.6285C15.573 12.7952 15.3469 12.8889 15.1111 12.8889H5.33333C5.09759 12.8889 4.87149 12.7952 4.70479 12.6285C4.53809 12.4618 4.44444 12.2357 4.44444 12C4.44444 11.7643 4.53809 11.5382 4.70479 11.3715C4.87149 11.2048 5.09759 11.1111 5.33333 11.1111ZM1.33333 5.33333C1.68696 5.33333 2.02609 5.47381 2.27614 5.72386C2.52619 5.97391 2.66667 6.31304 2.66667 6.66667C2.66667 7.02029 2.52619 7.35943 2.27614 7.60948C2.02609 7.85952 1.68696 8 1.33333 8C0.979711 8 0.640573 7.85952 0.390524 7.60948C0.140476 7.35943 0 7.02029 0 6.66667C0 6.31304 0.140476 5.97391 0.390524 5.72386C0.640573 5.47381 0.979711 5.33333 1.33333 5.33333ZM1.33333 10.6667C1.68696 10.6667 2.02609 10.8071 2.27614 11.0572C2.52619 11.3072 2.66667 11.6464 2.66667 12C2.66667 12.3536 2.52619 12.6928 2.27614 12.9428C2.02609 13.1929 1.68696 13.3333 1.33333 13.3333C0.979711 13.3333 0.640573 13.1929 0.390524 12.9428C0.140476 12.6928 0 12.3536 0 12C0 11.6464 0.140476 11.3072 0.390524 11.0572C0.640573 10.8071 0.979711 10.6667 1.33333 10.6667ZM1.33333 0C1.68696 0 2.02609 0.140476 2.27614 0.390524C2.52619 0.640573 2.66667 0.979711 2.66667 1.33333C2.66667 1.68696 2.52619 2.02609 2.27614 2.27614C2.02609 2.52619 1.68696 2.66667 1.33333 2.66667C0.979711 2.66667 0.640573 2.52619 0.390524 2.27614C0.140476 2.02609 0 1.68696 0 1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0Z",fill:"#474445"}));return e(J,{mdxType:"Tabs"},e(L,{label:"Tab 1",name:"one",isActive:!0,mdxType:"Tab"},t),e(L,{label:"Tab 2",name:"two",mdxType:"Tab"},t),e(L,{label:"Tab 3",name:"three",mdxType:"Tab"},t))},Ra=function(){const t=e("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.33333 0.444444H15.1111C15.3469 0.444444 15.573 0.538095 15.7397 0.704794C15.9064 0.871493 16 1.09759 16 1.33333C16 1.56908 15.9064 1.79517 15.7397 1.96187C15.573 2.12857 15.3469 2.22222 15.1111 2.22222H5.33333C5.09759 2.22222 4.87149 2.12857 4.70479 1.96187C4.53809 1.79517 4.44444 1.56908 4.44444 1.33333C4.44444 1.09759 4.53809 0.871493 4.70479 0.704794C4.87149 0.538095 5.09759 0.444444 5.33333 0.444444ZM5.33333 5.77778H15.1111C15.3469 5.77778 15.573 5.87143 15.7397 6.03813C15.9064 6.20483 16 6.43092 16 6.66667C16 6.90241 15.9064 7.12851 15.7397 7.29521C15.573 7.46191 15.3469 7.55556 15.1111 7.55556H5.33333C5.09759 7.55556 4.87149 7.46191 4.70479 7.29521C4.53809 7.12851 4.44444 6.90241 4.44444 6.66667C4.44444 6.43092 4.53809 6.20483 4.70479 6.03813C4.87149 5.87143 5.09759 5.77778 5.33333 5.77778ZM5.33333 11.1111H15.1111C15.3469 11.1111 15.573 11.2048 15.7397 11.3715C15.9064 11.5382 16 11.7643 16 12C16 12.2357 15.9064 12.4618 15.7397 12.6285C15.573 12.7952 15.3469 12.8889 15.1111 12.8889H5.33333C5.09759 12.8889 4.87149 12.7952 4.70479 12.6285C4.53809 12.4618 4.44444 12.2357 4.44444 12C4.44444 11.7643 4.53809 11.5382 4.70479 11.3715C4.87149 11.2048 5.09759 11.1111 5.33333 11.1111ZM1.33333 5.33333C1.68696 5.33333 2.02609 5.47381 2.27614 5.72386C2.52619 5.97391 2.66667 6.31304 2.66667 6.66667C2.66667 7.02029 2.52619 7.35943 2.27614 7.60948C2.02609 7.85952 1.68696 8 1.33333 8C0.979711 8 0.640573 7.85952 0.390524 7.60948C0.140476 7.35943 0 7.02029 0 6.66667C0 6.31304 0.140476 5.97391 0.390524 5.72386C0.640573 5.47381 0.979711 5.33333 1.33333 5.33333ZM1.33333 10.6667C1.68696 10.6667 2.02609 10.8071 2.27614 11.0572C2.52619 11.3072 2.66667 11.6464 2.66667 12C2.66667 12.3536 2.52619 12.6928 2.27614 12.9428C2.02609 13.1929 1.68696 13.3333 1.33333 13.3333C0.979711 13.3333 0.640573 13.1929 0.390524 12.9428C0.140476 12.6928 0 12.3536 0 12C0 11.6464 0.140476 11.3072 0.390524 11.0572C0.640573 10.8071 0.979711 10.6667 1.33333 10.6667ZM1.33333 0C1.68696 0 2.02609 0.140476 2.27614 0.390524C2.52619 0.640573 2.66667 0.979711 2.66667 1.33333C2.66667 1.68696 2.52619 2.02609 2.27614 2.27614C2.02609 2.52619 1.68696 2.66667 1.33333 2.66667C0.979711 2.66667 0.640573 2.52619 0.390524 2.27614C0.140476 2.02609 0 1.68696 0 1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0Z",fill:"#474445"}));return e(J,{mdxType:"Tabs"},e(L,{label:"Tab 1",name:"one",over:!0,isActive:!0,mdxType:"Tab"},t),e(L,{label:"Tab 2",name:"two",over:!0,mdxType:"Tab"},t),e(L,{label:"Tab 3",name:"three",over:!0,mdxType:"Tab"},t))},Fa=function(){const t=e("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.33333 0.444444H15.1111C15.3469 0.444444 15.573 0.538095 15.7397 0.704794C15.9064 0.871493 16 1.09759 16 1.33333C16 1.56908 15.9064 1.79517 15.7397 1.96187C15.573 2.12857 15.3469 2.22222 15.1111 2.22222H5.33333C5.09759 2.22222 4.87149 2.12857 4.70479 1.96187C4.53809 1.79517 4.44444 1.56908 4.44444 1.33333C4.44444 1.09759 4.53809 0.871493 4.70479 0.704794C4.87149 0.538095 5.09759 0.444444 5.33333 0.444444ZM5.33333 5.77778H15.1111C15.3469 5.77778 15.573 5.87143 15.7397 6.03813C15.9064 6.20483 16 6.43092 16 6.66667C16 6.90241 15.9064 7.12851 15.7397 7.29521C15.573 7.46191 15.3469 7.55556 15.1111 7.55556H5.33333C5.09759 7.55556 4.87149 7.46191 4.70479 7.29521C4.53809 7.12851 4.44444 6.90241 4.44444 6.66667C4.44444 6.43092 4.53809 6.20483 4.70479 6.03813C4.87149 5.87143 5.09759 5.77778 5.33333 5.77778ZM5.33333 11.1111H15.1111C15.3469 11.1111 15.573 11.2048 15.7397 11.3715C15.9064 11.5382 16 11.7643 16 12C16 12.2357 15.9064 12.4618 15.7397 12.6285C15.573 12.7952 15.3469 12.8889 15.1111 12.8889H5.33333C5.09759 12.8889 4.87149 12.7952 4.70479 12.6285C4.53809 12.4618 4.44444 12.2357 4.44444 12C4.44444 11.7643 4.53809 11.5382 4.70479 11.3715C4.87149 11.2048 5.09759 11.1111 5.33333 11.1111ZM1.33333 5.33333C1.68696 5.33333 2.02609 5.47381 2.27614 5.72386C2.52619 5.97391 2.66667 6.31304 2.66667 6.66667C2.66667 7.02029 2.52619 7.35943 2.27614 7.60948C2.02609 7.85952 1.68696 8 1.33333 8C0.979711 8 0.640573 7.85952 0.390524 7.60948C0.140476 7.35943 0 7.02029 0 6.66667C0 6.31304 0.140476 5.97391 0.390524 5.72386C0.640573 5.47381 0.979711 5.33333 1.33333 5.33333ZM1.33333 10.6667C1.68696 10.6667 2.02609 10.8071 2.27614 11.0572C2.52619 11.3072 2.66667 11.6464 2.66667 12C2.66667 12.3536 2.52619 12.6928 2.27614 12.9428C2.02609 13.1929 1.68696 13.3333 1.33333 13.3333C0.979711 13.3333 0.640573 13.1929 0.390524 12.9428C0.140476 12.6928 0 12.3536 0 12C0 11.6464 0.140476 11.3072 0.390524 11.0572C0.640573 10.8071 0.979711 10.6667 1.33333 10.6667ZM1.33333 0C1.68696 0 2.02609 0.140476 2.27614 0.390524C2.52619 0.640573 2.66667 0.979711 2.66667 1.33333C2.66667 1.68696 2.52619 2.02609 2.27614 2.27614C2.02609 2.52619 1.68696 2.66667 1.33333 2.66667C0.979711 2.66667 0.640573 2.52619 0.390524 2.27614C0.140476 2.02609 0 1.68696 0 1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0Z",fill:"#474445"}));return e(J,{contained:!0,mdxType:"Tabs"},e(L,{label:"Tab 1",name:"one",isActive:!0,mdxType:"Tab"},t),e(L,{label:"Tab 2",name:"two",mdxType:"Tab"},t),e(L,{label:"Tab 3",name:"three",mdxType:"Tab"},t))},ja=function(){const t=e("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.33333 0.444444H15.1111C15.3469 0.444444 15.573 0.538095 15.7397 0.704794C15.9064 0.871493 16 1.09759 16 1.33333C16 1.56908 15.9064 1.79517 15.7397 1.96187C15.573 2.12857 15.3469 2.22222 15.1111 2.22222H5.33333C5.09759 2.22222 4.87149 2.12857 4.70479 1.96187C4.53809 1.79517 4.44444 1.56908 4.44444 1.33333C4.44444 1.09759 4.53809 0.871493 4.70479 0.704794C4.87149 0.538095 5.09759 0.444444 5.33333 0.444444ZM5.33333 5.77778H15.1111C15.3469 5.77778 15.573 5.87143 15.7397 6.03813C15.9064 6.20483 16 6.43092 16 6.66667C16 6.90241 15.9064 7.12851 15.7397 7.29521C15.573 7.46191 15.3469 7.55556 15.1111 7.55556H5.33333C5.09759 7.55556 4.87149 7.46191 4.70479 7.29521C4.53809 7.12851 4.44444 6.90241 4.44444 6.66667C4.44444 6.43092 4.53809 6.20483 4.70479 6.03813C4.87149 5.87143 5.09759 5.77778 5.33333 5.77778ZM5.33333 11.1111H15.1111C15.3469 11.1111 15.573 11.2048 15.7397 11.3715C15.9064 11.5382 16 11.7643 16 12C16 12.2357 15.9064 12.4618 15.7397 12.6285C15.573 12.7952 15.3469 12.8889 15.1111 12.8889H5.33333C5.09759 12.8889 4.87149 12.7952 4.70479 12.6285C4.53809 12.4618 4.44444 12.2357 4.44444 12C4.44444 11.7643 4.53809 11.5382 4.70479 11.3715C4.87149 11.2048 5.09759 11.1111 5.33333 11.1111ZM1.33333 5.33333C1.68696 5.33333 2.02609 5.47381 2.27614 5.72386C2.52619 5.97391 2.66667 6.31304 2.66667 6.66667C2.66667 7.02029 2.52619 7.35943 2.27614 7.60948C2.02609 7.85952 1.68696 8 1.33333 8C0.979711 8 0.640573 7.85952 0.390524 7.60948C0.140476 7.35943 0 7.02029 0 6.66667C0 6.31304 0.140476 5.97391 0.390524 5.72386C0.640573 5.47381 0.979711 5.33333 1.33333 5.33333ZM1.33333 10.6667C1.68696 10.6667 2.02609 10.8071 2.27614 11.0572C2.52619 11.3072 2.66667 11.6464 2.66667 12C2.66667 12.3536 2.52619 12.6928 2.27614 12.9428C2.02609 13.1929 1.68696 13.3333 1.33333 13.3333C0.979711 13.3333 0.640573 13.1929 0.390524 12.9428C0.140476 12.6928 0 12.3536 0 12C0 11.6464 0.140476 11.3072 0.390524 11.0572C0.640573 10.8071 0.979711 10.6667 1.33333 10.6667ZM1.33333 0C1.68696 0 2.02609 0.140476 2.27614 0.390524C2.52619 0.640573 2.66667 0.979711 2.66667 1.33333C2.66667 1.68696 2.52619 2.02609 2.27614 2.27614C2.02609 2.52619 1.68696 2.66667 1.33333 2.66667C0.979711 2.66667 0.640573 2.52619 0.390524 2.27614C0.140476 2.02609 0 1.68696 0 1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0Z",fill:"#474445"}));return e(J,{contained:!0,mdxType:"Tabs"},e(L,{label:"Tab 1",name:"one",over:!0,isActive:!0,mdxType:"Tab"},t),e(L,{label:"Tab 2",name:"two",over:!0,mdxType:"Tab"},t),e(L,{label:"Tab 3",name:"three",over:!0,mdxType:"Tab"},t))},Ll=a=>function(l){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",d({},l))},$a=Ll("PropTable"),Pl={Example0:qa,Example1:Ba,Example2:Ra,Example3:Fa,Example4:ja},Il="wrapper";function _a(l){var n=l,{components:a}=n,t=N(n,["components"]);return e(Il,y(d(d({},Pl),t),{components:a,mdxType:"MDXLayout"}),e("h1",{id:"tabs"},e("a",{parentName:"h1",href:"#tabs","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Tabs"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Tabs onChange={(e) => console.log(e)}>
    <Tab label="Tab 1" name="one" isActive />
    <Tab label="Tab 2" name="two" />
    <Tab label="Tab 3" name="three" />
</Tabs>
<TabPanel name="one">Panel 1 content</TabPanel>
<TabPanel name="two">Panel 2 content</TabPanel>
<TabPanel name="three">Panel 3 content</TabPanel>
`)),e("div",{className:"example"},e(J,{onChange:i=>console.log(i),mdxType:"Tabs"},e(L,{label:"Tab 1",name:"one",isActive:!0,mdxType:"Tab"}),e(L,{label:"Tab 2",name:"two",mdxType:"Tab"}),e(L,{label:"Tab 3",name:"three",mdxType:"Tab"})),e(de,{name:"one",mdxType:"TabPanel"},"Panel 1 content"),e(de,{name:"two",mdxType:"TabPanel"},"Panel 2 content"),e(de,{name:"three",mdxType:"TabPanel"},"Panel 3 content")),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Tab, Tabs, TabPanel } from '@fabric-ds/react';
`)),e("h2",{id:"example"},e("a",{parentName:"h2",href:"#example","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Example"),e("p",null,`The following example demonstrates how the Tab, Tabs, and TabPanel components
can be used to switch between panels.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  return (
    <div>
      <Tabs active="four">
        <Tab label="Tab 1" name="four" />
        <Tab label="Tab 2" name="five" />
        <Tab label="Tab 3" name="six" />
      </Tabs>
      <div className="mb-16">
        <TabPanel name="four">Panel 1 content</TabPanel>
        <TabPanel name="five">Panel 2 content</TabPanel>
        <TabPanel name="six">Panel 3 content</TabPanel>
      </div>
    </div>
  );
}
`)),e("div",{className:"example"},e(qa,{mdxType:"Example0"})),e("h2",{id:"technical-details"},e("a",{parentName:"h2",href:"#technical-details","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Technical details"),e("p",null,"You can set the active tab in one of two ways:"),e("ol",null,e("li",{parentName:"ol"},`By passing the name of the active Tab to the Tabs component using the active
attribute.`),e("li",{parentName:"ol"},"By setting isActive on the active Tab.")),e("p",null,"The first Tab is active by default if you don't specify an active Tab."),e("p",null,"It is important that all children of Tabs are Tab components."),e("p",null,`Note that name attributes will be used to generate id attributes (prefixed with
fabric-tab- and fabric-tabpanel-), and therefore they must be unique throughout
the entire DOM. This is because aria-controls and aria-labelledby rely on id
attributes, and they are required for the tabs to be ARIA compliant.`),e("h2",{id:"accessibility"},e("a",{parentName:"h2",href:"#accessibility","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Accessibility"),e("p",null,"Focus management and ARIA attributes are handled automatically."),e("h2",{id:"visual-options"},e("a",{parentName:"h2",href:"#visual-options","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Visual options"),e("p",null,`There are two visual variations, default and contained. In either case, an icon
can be provided for each tab by passing it in as a child to the component. By
default, provided icons will be placed to the left of the label. You may move
the icons to above by using the `,e("inlineCode",{parentName:"p"},"over")," prop."),e("h3",{id:"default"},e("a",{parentName:"h3",href:"#default","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"default"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Tabs>
  <Tab label="Tab 1" name="one" isActive />
  <Tab label="Tab 2" name="two" />
  <Tab label="Tab 3" name="three" />
</Tabs>
`)),e("div",{className:"example"},e(J,{mdxType:"Tabs"},e(L,{label:"Tab 1",name:"one",isActive:!0,mdxType:"Tab"}),e(L,{label:"Tab 2",name:"two",mdxType:"Tab"}),e(L,{label:"Tab 3",name:"three",mdxType:"Tab"}))),e("h3",{id:"default-with-left-icons"},e("a",{parentName:"h3",href:"#default-with-left-icons","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"default with left icons"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const svgicon = (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.33333 0.444444H15.1111C15.3469 0.444444 15.573 0.538095 15.7397 0.704794C15.9064 0.871493 16 1.09759 16 1.33333C16 1.56908 15.9064 1.79517 15.7397 1.96187C15.573 2.12857 15.3469 2.22222 15.1111 2.22222H5.33333C5.09759 2.22222 4.87149 2.12857 4.70479 1.96187C4.53809 1.79517 4.44444 1.56908 4.44444 1.33333C4.44444 1.09759 4.53809 0.871493 4.70479 0.704794C4.87149 0.538095 5.09759 0.444444 5.33333 0.444444ZM5.33333 5.77778H15.1111C15.3469 5.77778 15.573 5.87143 15.7397 6.03813C15.9064 6.20483 16 6.43092 16 6.66667C16 6.90241 15.9064 7.12851 15.7397 7.29521C15.573 7.46191 15.3469 7.55556 15.1111 7.55556H5.33333C5.09759 7.55556 4.87149 7.46191 4.70479 7.29521C4.53809 7.12851 4.44444 6.90241 4.44444 6.66667C4.44444 6.43092 4.53809 6.20483 4.70479 6.03813C4.87149 5.87143 5.09759 5.77778 5.33333 5.77778ZM5.33333 11.1111H15.1111C15.3469 11.1111 15.573 11.2048 15.7397 11.3715C15.9064 11.5382 16 11.7643 16 12C16 12.2357 15.9064 12.4618 15.7397 12.6285C15.573 12.7952 15.3469 12.8889 15.1111 12.8889H5.33333C5.09759 12.8889 4.87149 12.7952 4.70479 12.6285C4.53809 12.4618 4.44444 12.2357 4.44444 12C4.44444 11.7643 4.53809 11.5382 4.70479 11.3715C4.87149 11.2048 5.09759 11.1111 5.33333 11.1111ZM1.33333 5.33333C1.68696 5.33333 2.02609 5.47381 2.27614 5.72386C2.52619 5.97391 2.66667 6.31304 2.66667 6.66667C2.66667 7.02029 2.52619 7.35943 2.27614 7.60948C2.02609 7.85952 1.68696 8 1.33333 8C0.979711 8 0.640573 7.85952 0.390524 7.60948C0.140476 7.35943 0 7.02029 0 6.66667C0 6.31304 0.140476 5.97391 0.390524 5.72386C0.640573 5.47381 0.979711 5.33333 1.33333 5.33333ZM1.33333 10.6667C1.68696 10.6667 2.02609 10.8071 2.27614 11.0572C2.52619 11.3072 2.66667 11.6464 2.66667 12C2.66667 12.3536 2.52619 12.6928 2.27614 12.9428C2.02609 13.1929 1.68696 13.3333 1.33333 13.3333C0.979711 13.3333 0.640573 13.1929 0.390524 12.9428C0.140476 12.6928 0 12.3536 0 12C0 11.6464 0.140476 11.3072 0.390524 11.0572C0.640573 10.8071 0.979711 10.6667 1.33333 10.6667ZM1.33333 0C1.68696 0 2.02609 0.140476 2.27614 0.390524C2.52619 0.640573 2.66667 0.979711 2.66667 1.33333C2.66667 1.68696 2.52619 2.02609 2.27614 2.27614C2.02609 2.52619 1.68696 2.66667 1.33333 2.66667C0.979711 2.66667 0.640573 2.52619 0.390524 2.27614C0.140476 2.02609 0 1.68696 0 1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0Z"
        fill="#474445"
      />
    </svg>
  );
  return (
    <Tabs>
      <Tab label="Tab 1" name="one" isActive>
        {svgicon}
      </Tab>
      <Tab label="Tab 2" name="two">
        {svgicon}
      </Tab>
      <Tab label="Tab 3" name="three">
        {svgicon}
      </Tab>
    </Tabs>
  );
}
`)),e("div",{className:"example"},e(Ba,{mdxType:"Example1"})),e("h3",{id:"default-with-icons-over-the-label"},e("a",{parentName:"h3",href:"#default-with-icons-over-the-label","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"default with icons over the label"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const svgicon = (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.33333 0.444444H15.1111C15.3469 0.444444 15.573 0.538095 15.7397 0.704794C15.9064 0.871493 16 1.09759 16 1.33333C16 1.56908 15.9064 1.79517 15.7397 1.96187C15.573 2.12857 15.3469 2.22222 15.1111 2.22222H5.33333C5.09759 2.22222 4.87149 2.12857 4.70479 1.96187C4.53809 1.79517 4.44444 1.56908 4.44444 1.33333C4.44444 1.09759 4.53809 0.871493 4.70479 0.704794C4.87149 0.538095 5.09759 0.444444 5.33333 0.444444ZM5.33333 5.77778H15.1111C15.3469 5.77778 15.573 5.87143 15.7397 6.03813C15.9064 6.20483 16 6.43092 16 6.66667C16 6.90241 15.9064 7.12851 15.7397 7.29521C15.573 7.46191 15.3469 7.55556 15.1111 7.55556H5.33333C5.09759 7.55556 4.87149 7.46191 4.70479 7.29521C4.53809 7.12851 4.44444 6.90241 4.44444 6.66667C4.44444 6.43092 4.53809 6.20483 4.70479 6.03813C4.87149 5.87143 5.09759 5.77778 5.33333 5.77778ZM5.33333 11.1111H15.1111C15.3469 11.1111 15.573 11.2048 15.7397 11.3715C15.9064 11.5382 16 11.7643 16 12C16 12.2357 15.9064 12.4618 15.7397 12.6285C15.573 12.7952 15.3469 12.8889 15.1111 12.8889H5.33333C5.09759 12.8889 4.87149 12.7952 4.70479 12.6285C4.53809 12.4618 4.44444 12.2357 4.44444 12C4.44444 11.7643 4.53809 11.5382 4.70479 11.3715C4.87149 11.2048 5.09759 11.1111 5.33333 11.1111ZM1.33333 5.33333C1.68696 5.33333 2.02609 5.47381 2.27614 5.72386C2.52619 5.97391 2.66667 6.31304 2.66667 6.66667C2.66667 7.02029 2.52619 7.35943 2.27614 7.60948C2.02609 7.85952 1.68696 8 1.33333 8C0.979711 8 0.640573 7.85952 0.390524 7.60948C0.140476 7.35943 0 7.02029 0 6.66667C0 6.31304 0.140476 5.97391 0.390524 5.72386C0.640573 5.47381 0.979711 5.33333 1.33333 5.33333ZM1.33333 10.6667C1.68696 10.6667 2.02609 10.8071 2.27614 11.0572C2.52619 11.3072 2.66667 11.6464 2.66667 12C2.66667 12.3536 2.52619 12.6928 2.27614 12.9428C2.02609 13.1929 1.68696 13.3333 1.33333 13.3333C0.979711 13.3333 0.640573 13.1929 0.390524 12.9428C0.140476 12.6928 0 12.3536 0 12C0 11.6464 0.140476 11.3072 0.390524 11.0572C0.640573 10.8071 0.979711 10.6667 1.33333 10.6667ZM1.33333 0C1.68696 0 2.02609 0.140476 2.27614 0.390524C2.52619 0.640573 2.66667 0.979711 2.66667 1.33333C2.66667 1.68696 2.52619 2.02609 2.27614 2.27614C2.02609 2.52619 1.68696 2.66667 1.33333 2.66667C0.979711 2.66667 0.640573 2.52619 0.390524 2.27614C0.140476 2.02609 0 1.68696 0 1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0Z"
        fill="#474445"
      />
    </svg>
  );
  return (
    <Tabs>
      <Tab label="Tab 1" name="one" over isActive>
        {svgicon}
      </Tab>
      <Tab label="Tab 2" name="two" over>
        {svgicon}
      </Tab>
      <Tab label="Tab 3" name="three" over>
        {svgicon}
      </Tab>
    </Tabs>
  );
}
`)),e("div",{className:"example"},e(Ra,{mdxType:"Example2"})),e("h3",{id:"contained"},e("a",{parentName:"h3",href:"#contained","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"contained"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Tabs contained>
  <Tab label="Tab 1" name="one" isActive />
  <Tab label="Tab 2" name="two" />
  <Tab label="Tab 3" name="three" />
</Tabs>
`)),e("div",{className:"example"},e(J,{contained:!0,mdxType:"Tabs"},e(L,{label:"Tab 1",name:"one",isActive:!0,mdxType:"Tab"}),e(L,{label:"Tab 2",name:"two",mdxType:"Tab"}),e(L,{label:"Tab 3",name:"three",mdxType:"Tab"}))),e("h3",{id:"contained-with-left-icons"},e("a",{parentName:"h3",href:"#contained-with-left-icons","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"contained with left icons"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const svgicon = (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.33333 0.444444H15.1111C15.3469 0.444444 15.573 0.538095 15.7397 0.704794C15.9064 0.871493 16 1.09759 16 1.33333C16 1.56908 15.9064 1.79517 15.7397 1.96187C15.573 2.12857 15.3469 2.22222 15.1111 2.22222H5.33333C5.09759 2.22222 4.87149 2.12857 4.70479 1.96187C4.53809 1.79517 4.44444 1.56908 4.44444 1.33333C4.44444 1.09759 4.53809 0.871493 4.70479 0.704794C4.87149 0.538095 5.09759 0.444444 5.33333 0.444444ZM5.33333 5.77778H15.1111C15.3469 5.77778 15.573 5.87143 15.7397 6.03813C15.9064 6.20483 16 6.43092 16 6.66667C16 6.90241 15.9064 7.12851 15.7397 7.29521C15.573 7.46191 15.3469 7.55556 15.1111 7.55556H5.33333C5.09759 7.55556 4.87149 7.46191 4.70479 7.29521C4.53809 7.12851 4.44444 6.90241 4.44444 6.66667C4.44444 6.43092 4.53809 6.20483 4.70479 6.03813C4.87149 5.87143 5.09759 5.77778 5.33333 5.77778ZM5.33333 11.1111H15.1111C15.3469 11.1111 15.573 11.2048 15.7397 11.3715C15.9064 11.5382 16 11.7643 16 12C16 12.2357 15.9064 12.4618 15.7397 12.6285C15.573 12.7952 15.3469 12.8889 15.1111 12.8889H5.33333C5.09759 12.8889 4.87149 12.7952 4.70479 12.6285C4.53809 12.4618 4.44444 12.2357 4.44444 12C4.44444 11.7643 4.53809 11.5382 4.70479 11.3715C4.87149 11.2048 5.09759 11.1111 5.33333 11.1111ZM1.33333 5.33333C1.68696 5.33333 2.02609 5.47381 2.27614 5.72386C2.52619 5.97391 2.66667 6.31304 2.66667 6.66667C2.66667 7.02029 2.52619 7.35943 2.27614 7.60948C2.02609 7.85952 1.68696 8 1.33333 8C0.979711 8 0.640573 7.85952 0.390524 7.60948C0.140476 7.35943 0 7.02029 0 6.66667C0 6.31304 0.140476 5.97391 0.390524 5.72386C0.640573 5.47381 0.979711 5.33333 1.33333 5.33333ZM1.33333 10.6667C1.68696 10.6667 2.02609 10.8071 2.27614 11.0572C2.52619 11.3072 2.66667 11.6464 2.66667 12C2.66667 12.3536 2.52619 12.6928 2.27614 12.9428C2.02609 13.1929 1.68696 13.3333 1.33333 13.3333C0.979711 13.3333 0.640573 13.1929 0.390524 12.9428C0.140476 12.6928 0 12.3536 0 12C0 11.6464 0.140476 11.3072 0.390524 11.0572C0.640573 10.8071 0.979711 10.6667 1.33333 10.6667ZM1.33333 0C1.68696 0 2.02609 0.140476 2.27614 0.390524C2.52619 0.640573 2.66667 0.979711 2.66667 1.33333C2.66667 1.68696 2.52619 2.02609 2.27614 2.27614C2.02609 2.52619 1.68696 2.66667 1.33333 2.66667C0.979711 2.66667 0.640573 2.52619 0.390524 2.27614C0.140476 2.02609 0 1.68696 0 1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0Z"
        fill="#474445"
      />
    </svg>
  );
  return (
    <Tabs contained>
      <Tab label="Tab 1" name="one" isActive>
        {svgicon}
      </Tab>
      <Tab label="Tab 2" name="two">
        {svgicon}
      </Tab>
      <Tab label="Tab 3" name="three">
        {svgicon}
      </Tab>
    </Tabs>
  );
}
`)),e("div",{className:"example"},e(Fa,{mdxType:"Example3"})),e("h3",{id:"contained-with-icons-over-the-label"},e("a",{parentName:"h3",href:"#contained-with-icons-over-the-label","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"contained with icons over the label"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const svgicon = (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.33333 0.444444H15.1111C15.3469 0.444444 15.573 0.538095 15.7397 0.704794C15.9064 0.871493 16 1.09759 16 1.33333C16 1.56908 15.9064 1.79517 15.7397 1.96187C15.573 2.12857 15.3469 2.22222 15.1111 2.22222H5.33333C5.09759 2.22222 4.87149 2.12857 4.70479 1.96187C4.53809 1.79517 4.44444 1.56908 4.44444 1.33333C4.44444 1.09759 4.53809 0.871493 4.70479 0.704794C4.87149 0.538095 5.09759 0.444444 5.33333 0.444444ZM5.33333 5.77778H15.1111C15.3469 5.77778 15.573 5.87143 15.7397 6.03813C15.9064 6.20483 16 6.43092 16 6.66667C16 6.90241 15.9064 7.12851 15.7397 7.29521C15.573 7.46191 15.3469 7.55556 15.1111 7.55556H5.33333C5.09759 7.55556 4.87149 7.46191 4.70479 7.29521C4.53809 7.12851 4.44444 6.90241 4.44444 6.66667C4.44444 6.43092 4.53809 6.20483 4.70479 6.03813C4.87149 5.87143 5.09759 5.77778 5.33333 5.77778ZM5.33333 11.1111H15.1111C15.3469 11.1111 15.573 11.2048 15.7397 11.3715C15.9064 11.5382 16 11.7643 16 12C16 12.2357 15.9064 12.4618 15.7397 12.6285C15.573 12.7952 15.3469 12.8889 15.1111 12.8889H5.33333C5.09759 12.8889 4.87149 12.7952 4.70479 12.6285C4.53809 12.4618 4.44444 12.2357 4.44444 12C4.44444 11.7643 4.53809 11.5382 4.70479 11.3715C4.87149 11.2048 5.09759 11.1111 5.33333 11.1111ZM1.33333 5.33333C1.68696 5.33333 2.02609 5.47381 2.27614 5.72386C2.52619 5.97391 2.66667 6.31304 2.66667 6.66667C2.66667 7.02029 2.52619 7.35943 2.27614 7.60948C2.02609 7.85952 1.68696 8 1.33333 8C0.979711 8 0.640573 7.85952 0.390524 7.60948C0.140476 7.35943 0 7.02029 0 6.66667C0 6.31304 0.140476 5.97391 0.390524 5.72386C0.640573 5.47381 0.979711 5.33333 1.33333 5.33333ZM1.33333 10.6667C1.68696 10.6667 2.02609 10.8071 2.27614 11.0572C2.52619 11.3072 2.66667 11.6464 2.66667 12C2.66667 12.3536 2.52619 12.6928 2.27614 12.9428C2.02609 13.1929 1.68696 13.3333 1.33333 13.3333C0.979711 13.3333 0.640573 13.1929 0.390524 12.9428C0.140476 12.6928 0 12.3536 0 12C0 11.6464 0.140476 11.3072 0.390524 11.0572C0.640573 10.8071 0.979711 10.6667 1.33333 10.6667ZM1.33333 0C1.68696 0 2.02609 0.140476 2.27614 0.390524C2.52619 0.640573 2.66667 0.979711 2.66667 1.33333C2.66667 1.68696 2.52619 2.02609 2.27614 2.27614C2.02609 2.52619 1.68696 2.66667 1.33333 2.66667C0.979711 2.66667 0.640573 2.52619 0.390524 2.27614C0.140476 2.02609 0 1.68696 0 1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0Z"
        fill="#474445"
      />
    </svg>
  );
  return (
    <Tabs contained>
      <Tab label="Tab 1" name="one" over isActive>
        {svgicon}
      </Tab>
      <Tab label="Tab 2" name="two" over>
        {svgicon}
      </Tab>
      <Tab label="Tab 3" name="three" over>
        {svgicon}
      </Tab>
    </Tabs>
  );
}
`)),e("div",{className:"example"},e(ja,{mdxType:"Example4"})),e("h2",{id:"props"},e("a",{parentName:"h2",href:"#props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Props"),e("h3",{id:"tabs-1"},e("a",{parentName:"h3",href:"#tabs-1","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Tabs"),e($a,{props:{contained:{defaultValue:{value:"false"},description:"Whether the tabs should use the contained look and feel or not.",name:"contained",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the tabs should use the contained look and feel or not.</p>"},children:{defaultValue:null,description:"The Tabs within the container.",name:"children",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!0,type:{name:"any"},descriptionHtml:"<p>The Tabs within the container.</p>"},active:{defaultValue:null,description:`Used to set the name of the Tab that should be active on mount.
Defaults to the first tab if not present and isActive is not set on any Tab.`,name:"active",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:`<p>Used to set the name of the Tab that should be active on mount.
Defaults to the first tab if not present and isActive is not set on any Tab.</p>`},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional CSS class for the container</p>"},onChange:{defaultValue:null,description:"Handler that is called when the tab changes.",name:"onChange",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(name: string) => void"},descriptionHtml:"<p>Handler that is called when the tab changes.</p>"},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"any"},descriptionHtml:"<p>Additional CSS styles for the container.</p>"}},mdxType:"PropTable"}),e("h3",{id:"tab"},e("a",{parentName:"h3",href:"#tab","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Tab"),e($a,{props:{setActive:{defaultValue:null,description:"",name:"setActive",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(name: string) => void"}},className:{defaultValue:null,description:"Additional CSS class for the tab.",name:"className",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional CSS class for the tab.</p>"},over:{defaultValue:{value:"false"},description:"Set the over prop to true if you need to move icons to above the tab label",name:"over",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Set the over prop to true if you need to move icons to above the tab label</p>"},children:{defaultValue:null,description:"Additional content to be included in the tab (eg. icons). Content is placed above the label.",name:"children",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"any"},descriptionHtml:"<p>Additional content to be included in the tab (eg. icons). Content is placed above the label.</p>"},name:{defaultValue:null,description:"Tab name identifier. This value will be omitted as the argument to the Tabs onChange handler.",name:"name",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!0,type:{name:"string"},descriptionHtml:"<p>Tab name identifier. This value will be omitted as the argument to the Tabs onChange handler.</p>"},label:{defaultValue:null,description:"The label of the tab item.",name:"label",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!0,type:{name:"any"},descriptionHtml:"<p>The label of the tab item.</p>"},isActive:{defaultValue:null,description:"Used to set which tab should be active on mount. Defaults to the first tab if not present.",name:"isActive",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Used to set which tab should be active on mount. Defaults to the first tab if not present.</p>"},style:{defaultValue:null,description:"Additional CSS styles for the tab.",name:"style",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"any"},descriptionHtml:"<p>Additional CSS styles for the tab.</p>"},onClick:{defaultValue:null,description:"Action to be called when the component is clicked",name:"onClick",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(e: any) => void"},descriptionHtml:"<p>Action to be called when the component is clicked</p>"}},mdxType:"PropTable"}))}_a.isMDXComponent=!0;function Al({ref:a,value:t,minimumRows:l,maximumRows:n}){const i=c.exports.useRef(-1/0),s=c.exports.useRef(1/0),o=t!==void 0;function p(m){m.style.setProperty("height","auto");let f=Math.max(i.current,m.scrollHeight);f=Math.min(s.current,f),m.style.setProperty("height",f+"px")}le(()=>{if(a.current&&(l||n)){const m=getComputedStyle(a.current),f=parseFloat(m.getPropertyValue("line-height")),g=parseFloat(m.getPropertyValue("padding-top")),v=parseFloat(m.getPropertyValue("padding-bottom")),T=parseFloat(m.getPropertyValue("border-bottom-width")),b=g+v+T;l&&(i.current=f*l+b),n&&(s.current=f*n+b)}},[a,n,l]),le(()=>{a.current&&p(a.current)},[a,t]),c.exports.useEffect(()=>{if(!a.current&&o)return;const m=a.current,f=()=>{p(m)};return m.addEventListener("input",f),()=>m.removeEventListener("input",f)},[a,o])}const O=c.exports.forwardRef((a,t)=>{const u=a,{className:l,disabled:n,error:i,helpText:s,id:o,invalid:p,label:m,maximumRows:f,minimumRows:g,readOnly:v,style:T,value:b}=u,H=N(u,["className","disabled","error","helpText","id","invalid","label","maximumRows","minimumRows","readOnly","style","value"]),P=G(o),S=c.exports.useRef(null),I=s?`${P}__hint`:void 0,x=p!=null?p:i;return Al({ref:S,value:b,maximumRows:f,minimumRows:g}),r.createElement("div",{className:h(l,{"input mb-0":!0,"input--is-invalid":x,"input--is-disabled":n,"input--is-read-only":v}),style:T},m&&r.createElement("label",{htmlFor:P},m),r.createElement("textarea",y(d({},H),{"aria-describedby":I,"aria-errormessage":x&&I?I:void 0,"aria-invalid":x,disabled:n,id:P,ref:C=>{S.current=C,t&&(typeof t=="function"?t(C):t.current=C)},readOnly:v,value:b})),s&&r.createElement("div",{className:"input__sub-text"},s))}),Wa=function(){let[t,l]=r.useState("Lorem ipsum");return e("div",{className:"flex space-x-32"},e(O,{label:"Description (Uncontrolled)",defaultValue:"Lorem ipsum",mdxType:"TextArea"}),e(O,{label:"Description (Controlled)",onChange:n=>l(n.target.value),value:t,mdxType:"TextArea"}))},Ml=a=>function(l){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",d({},l))},Vl=Ml("PropTable"),Dl={Example0:Wa},ql="wrapper";function Oa(l){var n=l,{components:a}=n,t=N(n,["components"]);return e(ql,y(d(d({},Dl),t),{components:a,mdxType:"MDXLayout"}),e("h1",{id:"textarea"},e("a",{parentName:"h1",href:"#textarea","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"TextArea"),e("p",null,"A multiline text input component."),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { TextArea } from '@fabric-ds/react';
`)),e("h2",{id:"example"},e("a",{parentName:"h2",href:"#example","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Example"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextArea label="Description" />
`)),e("div",{className:"example"},e(O,{label:"Description",mdxType:"TextArea"})),e("h2",{id:"migrating-from-troika"},e("a",{parentName:"h2",href:"#migrating-from-troika","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Migrating from Troika"),e("ul",null,e("li",{parentName:"ul"},"You should no longer include or import any Troika input CSS."),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"error")," has been deprecated. Use ",e("inlineCode",{parentName:"li"},"invalid")," instead.")),e("h2",{id:"value"},e("a",{parentName:"h2",href:"#value","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Value"),e("p",null,`A TextArea's value is empty by default, but an initial, uncontrolled, value can
be provided using the `,e("inlineCode",{parentName:"p"},"defaultValue"),` prop. Alternatively, a controlled value can
be provided using the `,e("inlineCode",{parentName:"p"},"value")," prop."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  let [value, setValue] = React.useState('Lorem ipsum');

  return (
    <div className="flex space-x-32">
      <TextArea label="Description (Uncontrolled)" defaultValue="Lorem ipsum" />

      <TextArea
        label="Description (Controlled)"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
    </div>
  );
}
`)),e("div",{className:"example"},e(Wa,{mdxType:"Example0"})),e("h2",{id:"labeling"},e("a",{parentName:"h2",href:"#labeling","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Labeling"),e("p",null,"A visual label should be provided for the TextArea using the ",e("inlineCode",{parentName:"p"},"label")," prop."),e("h3",{id:"accessibility"},e("a",{parentName:"h3",href:"#accessibility","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Accessibility"),e("p",null,"If a visible label isn't specified, an ",e("inlineCode",{parentName:"p"},"aria-label"),` must be provided to the
TextArea for accessibility. If the field is labeled by a separate element, an
`,e("inlineCode",{parentName:"p"},"aria-labelledby"),` prop must be provided using the id of the labeling element
instead.`),e("h2",{id:"help-text"},e("a",{parentName:"h2",href:"#help-text","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Help text"),e("p",null,"TextAreas can provide additional context with ",e("inlineCode",{parentName:"p"},"helpText"),` if the label and
placeholder aren't enough.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextArea label="Description" helpText="Maximum 200 characters" />
`)),e("div",{className:"example"},e(O,{label:"Description",helpText:"Maximum 200 characters",mdxType:"TextArea"})),e("h2",{id:"validation"},e("a",{parentName:"h2",href:"#validation","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Validation"),e("p",null,`TextAreas can communicate to the user whether the current value is invalid.
Implement your own validation logic in your app and set the `,e("inlineCode",{parentName:"p"},"invalid"),` prop to
display it as invalid.`),e("p",null,e("inlineCode",{parentName:"p"},"invalid")," is often paired with ",e("inlineCode",{parentName:"p"},"helpText"),` to provide feedback to the user about
the error.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextArea label="Description" invalid helpText="Maximum 200 characters" />
`)),e("div",{className:"example"},e(O,{label:"Description",invalid:!0,helpText:"Maximum 200 characters",mdxType:"TextArea"})),e("h2",{id:"visual-options"},e("a",{parentName:"h2",href:"#visual-options","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Visual options"),e("h3",{id:"placeholder"},e("a",{parentName:"h3",href:"#placeholder","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Placeholder"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextArea label="Description" placeholder="Lorem ipsum dolor sit amet" />
`)),e("div",{className:"example"},e(O,{label:"Description",placeholder:"Lorem ipsum dolor sit amet",mdxType:"TextArea"})),e("p",null,`Placeholder text can be used to describe the expected value or formatting for
the TextArea. Placeholder text will only appear when the TextArea is empty, and
should not be used as a substitute for labeling the component with a visible
label.`),e("h3",{id:"disabled"},e("a",{parentName:"h3",href:"#disabled","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Disabled"),e("p",null,`Keep in mind that using disabled in its current form is an anti-pattern. There
will ALWAYS be users who don't understand why an element is disabled, or users
who can't even see that it is disabled because of poor lighting conditions or
other reasons. Please consider more informative alternatives before choosing to
use disabled on an element.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<div className="flex flex-col y-space-32">
  <TextArea label="Description" disabled value="Lorem ipsum dolor sit amet" />
  <TextArea label="Description" disabled />
</div>
`)),e("div",{className:"example"},e("div",{className:"flex flex-col y-space-32"},e(O,{label:"Description",disabled:!0,value:"Lorem ipsum dolor sit amet",mdxType:"TextArea"}),e(O,{label:"Description",disabled:!0,mdxType:"TextArea"}))),e("h3",{id:"read-only"},e("a",{parentName:"h3",href:"#read-only","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Read only"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"readOnly"),` boolean prop makes the TextArea's text content immutable. Unlike
`,e("inlineCode",{parentName:"p"},"disabled"),` the TextArea remains focusable and the contents can still be copied.
See
`,e("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly"},"the MDN docs"),`
for more information.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<div className="flex flex-col y-space-32">
  <TextArea
    label="Description"
    readOnly
    defaultValue="Lorem ipsum dolor sit amet"
  />
  <TextArea label="Description" readOnly />
</div>
`)),e("div",{className:"example"},e("div",{className:"flex flex-col y-space-32"},e(O,{label:"Description",readOnly:!0,defaultValue:"Lorem ipsum dolor sit amet",mdxType:"TextArea"}),e(O,{label:"Description",readOnly:!0,mdxType:"TextArea"}))),e("h3",{id:"height-text-rows"},e("a",{parentName:"h3",href:"#height-text-rows","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Height (text rows)"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"minimumRows"),` prop sets the minimum number of text rows the TextArea should
show.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextArea label="Description" minimumRows={3} />
`)),e("div",{className:"example"},e(O,{label:"Description",minimumRows:3,mdxType:"TextArea"})),e("p",null,"The ",e("inlineCode",{parentName:"p"},"maximumRows"),` prop sets the maximum number of text rows the TextArea should
show.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextArea
  label="Description"
  maximumRows={3}
  defaultValue={'Lorem\\nipsum\\ndolor\\nsit\\namet'}
/>
`)),e("div",{className:"example"},e(O,{label:"Description",maximumRows:3,defaultValue:`Lorem
ipsum
dolor
sit
amet`,mdxType:"TextArea"})),e("h2",{id:"props"},e("a",{parentName:"h2",href:"#props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Props"),e(Vl,{props:{autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"TextareaHTMLAttributes"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the element should receive focus on render.</p>"},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional CSS class for the container</p>"},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>The default value (uncontrolled).</p>"},disabled:{defaultValue:null,description:"Whether the input is disabled.",name:"disabled",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"TextareaHTMLAttributes"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the input is disabled.</p>"},error:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.\n@deprecated use `invalid` instead.",name:"error",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:`<p>Renders the field in an invalid state. Often paired together with <code>helpText</code> to provide feedback about the error.
@deprecated use <code>invalid</code> instead.</p>`},invalid:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.",name:"invalid",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Renders the field in an invalid state. Often paired together with <code>helpText</code> to provide feedback about the error.</p>"},helpText:{defaultValue:null,description:"The content to display as the help text.",name:"helpText",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"ReactNode"},descriptionHtml:"<p>The content to display as the help text.</p>"},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:`<p>The element's unique identifier. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id">MDN</a>.</p>`},label:{defaultValue:null,description:"The content to display as the label.",name:"label",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>The content to display as the label.</p>"},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(e: FocusEvent<HTMLTextAreaElement, Element>) => void"},descriptionHtml:"<p>Handler that is called when the element loses focus.</p>"},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(e: ChangeEvent<HTMLTextAreaElement>) => void"},descriptionHtml:"<p>Handler that is called when the value changes.</p>"},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(e: FocusEvent<HTMLTextAreaElement, Element>) => void"},descriptionHtml:"<p>Handler that is called when the element receives focus.</p>"},maximumRows:{defaultValue:null,description:"Maximum number of text rows upto which the input can grow.",name:"maximumRows",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"number"},descriptionHtml:"<p>Maximum number of text rows upto which the input can grow.</p>"},minimumRows:{defaultValue:null,description:"Minimum number of text rows to show for the input.",name:"minimumRows",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"number"},descriptionHtml:"<p>Minimum number of text rows to show for the input.</p>"},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"TextareaHTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:'<p>The name of the input element, used when submitting an HTML form. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname">MDN</a>.</p>'},placeholder:{defaultValue:null,description:"Text hint that occupies the text input when it is empty.",name:"placeholder",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"TextareaHTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Text hint that occupies the text input when it is empty.</p>"},readOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"readOnly",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"TextareaHTMLAttributes"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the input can be selected but not changed by the user.</p>"},required:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"required",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"TextareaHTMLAttributes"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether user input is required on the input before form submission.</p>"},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"CSSProperties"},descriptionHtml:"<p>Additional CSS styles for the container.</p>"},value:{defaultValue:null,description:"The current value (controlled).",name:"value",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>The current value (controlled).</p>"}},mdxType:"PropTable"}))}Oa.isMDXComponent=!0;const za=function(){let[t,l]=r.useState("me@email.com");return e("div",{className:"flex space-x-32"},e(R,{label:"Email (Uncontrolled)",defaultValue:"me@email.com",mdxType:"TextField"}),e(R,{label:"Email (Controlled)",value:t,onChange:n=>l(n.target.value),mdxType:"TextField"}))},Bl=a=>function(l){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",d({},l))},Ua=Bl("PropTable"),Rl={Example0:za},Fl="wrapper";function Xa(l){var n=l,{components:a}=n,t=N(n,["components"]);return e(Fl,y(d(d({},Rl),t),{components:a,mdxType:"MDXLayout"}),e("h1",{id:"textfield"},e("a",{parentName:"h1",href:"#textfield","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"TextField"),e("p",null,"A single-line text input component."),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { TextField } from '@fabric-ds/react';
`)),e("h2",{id:"example"},e("a",{parentName:"h2",href:"#example","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Example"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextField label="Name" />
`)),e("div",{className:"example"},e(R,{label:"Name",mdxType:"TextField"})),e("h2",{id:"migrating-from-troika"},e("a",{parentName:"h2",href:"#migrating-from-troika","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Migrating from Troika"),e("ul",null,e("li",{parentName:"ul"},"You should no longer include or import any Troika input CSS."),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"error")," has been deprecated. Use ",e("inlineCode",{parentName:"li"},"invalid")," instead."),e("li",{parentName:"ul"},e("strong",{parentName:"li"},"BREAKING"),": ",e("inlineCode",{parentName:"li"},"appendAddon")," from Troika is currently unsupported.")),e("h2",{id:"value"},e("a",{parentName:"h2",href:"#value","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Value"),e("p",null,`A TextField's value is empty by default, but an initial, uncontrolled, value can
be provided using the `,e("inlineCode",{parentName:"p"},"defaultValue"),` prop. Alternatively, a controlled value can
be provided using the `,e("inlineCode",{parentName:"p"},"value")," prop."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  let [value, setValue] = React.useState('me@email.com');

  return (
    <div className="flex space-x-32">
      <TextField label="Email (Uncontrolled)" defaultValue="me@email.com" />

      <TextField
        label="Email (Controlled)"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}
`)),e("div",{className:"example"},e(za,{mdxType:"Example0"})),e("h2",{id:"labeling"},e("a",{parentName:"h2",href:"#labeling","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Labeling"),e("p",null,"A visual label should be provided for the TextField using the ",e("inlineCode",{parentName:"p"},"label")," prop."),e("h3",{id:"accessibility"},e("a",{parentName:"h3",href:"#accessibility","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Accessibility"),e("p",null,"If a visible label isn't specified, an ",e("inlineCode",{parentName:"p"},"aria-label"),` must be provided to the
TextField for accessibility. If the field is labeled by a separate element, an
`,e("inlineCode",{parentName:"p"},"aria-labelledby"),` prop must be provided using the id of the labeling element
instead.`),e("h2",{id:"help-text"},e("a",{parentName:"h2",href:"#help-text","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Help text"),e("p",null,"TextFields can provide additional context with ",e("inlineCode",{parentName:"p"},"helpText"),` if the label and
placeholder aren't enough.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextField
  label="Telefonnummer"
  helpText="Vil kun brukes til brukerverifisering"
/>
`)),e("div",{className:"example"},e(R,{label:"Telefonnummer",helpText:"Vil kun brukes til brukerverifisering",mdxType:"TextField"})),e("h2",{id:"validation"},e("a",{parentName:"h2",href:"#validation","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Validation"),e("p",null,`TextFields can communicate to the user whether the current value is invalid.
Implement your own validation logic in your app and set the `,e("inlineCode",{parentName:"p"},"error"),` prop to
display it as invalid.`),e("p",null,e("inlineCode",{parentName:"p"},"error")," is often paired with ",e("inlineCode",{parentName:"p"},"helpText"),` to provide feedback to the user about
the error.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextField label="Email" invalid helpText="Ugyldig e-post" />
`)),e("div",{className:"example"},e(R,{label:"Email",invalid:!0,helpText:"Ugyldig e-post",mdxType:"TextField"})),e("h2",{id:"visual-options"},e("a",{parentName:"h2",href:"#visual-options","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Visual options"),e("h3",{id:"placeholder"},e("a",{parentName:"h3",href:"#placeholder","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Placeholder"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextField label="E-post" placeholder="puse@finn.no" />
`)),e("div",{className:"example"},e(R,{label:"E-post",placeholder:"puse@finn.no",mdxType:"TextField"})),e("p",null,`Placeholder text can be used to describe the expected value or formatting for
the TextField. Placeholder text will only appear when the TextField is empty,
and should not be used as a substitute for labeling the component with a visible
label.`),e("h3",{id:"disabled"},e("a",{parentName:"h3",href:"#disabled","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Disabled"),e("p",null,`Keep in mind that using disabled in its current form is an anti-pattern. There
will ALWAYS be users who don't understand why an element is disabled, or users
who can't even see that it is disabled because of poor lighting conditions or
other reasons. Please consider more informative alternatives before choosing to
use disabled on an element.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<div className="flex flex-col space-y-32">
  <TextField label="E-post" disabled value="puse@finn.no" />
  <TextField label="E-post" disabled />
</div>
`)),e("div",{className:"example"},e("div",{className:"flex flex-col space-y-32"},e(R,{label:"E-post",disabled:!0,value:"puse@finn.no",mdxType:"TextField"}),e(R,{label:"E-post",disabled:!0,mdxType:"TextField"}))),e("h3",{id:"affix"},e("a",{parentName:"h3",href:"#affix","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Affix"),e("p",null,"If you wish to use an affix you must first import the Affix component."),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Affix } from '@fabric-ds/react';
`)),e("p",null,`Then you include it as a child of TextField component and pass the appropiate
props (see bottom of this page for types)`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextField label="Price" placeholder="1 000 000">
  <Affix suffix label="kr" />
</TextField>
`)),e("div",{className:"example"},e(R,{label:"Price",placeholder:"1 000 000",mdxType:"TextField"},e(ge,{suffix:!0,label:"kr",mdxType:"Affix"}))),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextField label="Price" placeholder="1 000 000">
  <Affix prefix label="kr" />
</TextField>
`)),e("div",{className:"example"},e(R,{label:"Price",placeholder:"1 000 000",mdxType:"TextField"},e(ge,{prefix:!0,label:"kr",mdxType:"Affix"}))),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextField>
  <Affix suffix clear onClick={() => alert('clear')} />
</TextField>
`)),e("div",{className:"example"},e(R,{mdxType:"TextField"},e(ge,{suffix:!0,clear:!0,onClick:()=>alert("clear"),mdxType:"Affix"}))),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextField>
  <Affix suffix search onClick={() => alert('search')} />
</TextField>
`)),e("div",{className:"example"},e(R,{mdxType:"TextField"},e(ge,{suffix:!0,search:!0,onClick:()=>alert("search"),mdxType:"Affix"}))),e("h3",{id:"read-only"},e("a",{parentName:"h3",href:"#read-only","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Read only"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"readOnly"),` boolean prop makes the TextField's text content immutable. Unlike
`,e("inlineCode",{parentName:"p"},"disabled"),` the TextField remains focusable and the contents can still be copied.
See
`,e("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly"},"the MDN docs"),`
for more information.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<div className="flex flex-col space-y-32">
  <TextField label="E-post" readOnly value="puse@finn.no" />
  <TextField label="E-post" readOnly />
</div>
`)),e("div",{className:"example"},e("div",{className:"flex flex-col space-y-32"},e(R,{label:"E-post",readOnly:!0,value:"puse@finn.no",mdxType:"TextField"}),e(R,{label:"E-post",readOnly:!0,mdxType:"TextField"}))),e("h2",{id:"textfield-props"},e("a",{parentName:"h2",href:"#textfield-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"TextField Props"),e(Ua,{props:{autoComplete:{defaultValue:null,description:"Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete) .",name:"autoComplete",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"never"},descriptionHtml:'<p>Describes the type of autocomplete functionality the input should provide if any. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete">MDN</a> .</p>'},autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the element should receive focus on render.</p>"},className:{defaultValue:null,description:"Additional CSS class for the container.",name:"className",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional CSS class for the container.</p>"},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"string & (string | number | readonly string[])"},descriptionHtml:"<p>The default value (uncontrolled).</p>"},disabled:{defaultValue:null,description:"Whether the input is disabled.",name:"disabled",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the input is disabled.</p>"},error:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.\n@deprecated use `invalid` instead.",name:"error",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:`<p>Renders the field in an invalid state. Often paired together with <code>helpText</code> to provide feedback about the error.
@deprecated use <code>invalid</code> instead.</p>`},invalid:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.",name:"invalid",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Renders the field in an invalid state. Often paired together with <code>helpText</code> to provide feedback about the error.</p>"},helpText:{defaultValue:null,description:"The content to display as the help text.",name:"helpText",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"ReactNode"},descriptionHtml:"<p>The content to display as the help text.</p>"},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:`<p>The element's unique identifier. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id">MDN</a>.</p>`},label:{defaultValue:null,description:"The content to display as the label.",name:"label",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"ReactNode"},descriptionHtml:"<p>The content to display as the label.</p>"},max:{defaultValue:null,description:'Standard `input` max attribute, to be used with `type="number".` See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmax).',name:"max",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"string | number"},descriptionHtml:'<p>Standard <code>input</code> max attribute, to be used with <code>type="number".</code> See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmax">MDN</a>.</p>'},min:{defaultValue:null,description:'Standard `input` min attribute, to be used with `type="number".` See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmin).',name:"min",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"string | number"},descriptionHtml:'<p>Standard <code>input</code> min attribute, to be used with <code>type="number".</code> See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmin">MDN</a>.</p>'},maxLength:{defaultValue:null,description:"The maximum number of characters supported by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).",name:"maxLength",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"number"},descriptionHtml:'<p>The maximum number of characters supported by the input. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength">MDN</a>.</p>'},minLength:{defaultValue:null,description:"The minimum number of characters required by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).",name:"minLength",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"number"},descriptionHtml:'<p>The minimum number of characters required by the input. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength">MDN</a>.</p>'},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:'<p>The name of the input element, used when submitting an HTML form. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname">MDN</a>.</p>'},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(e: FocusEvent<HTMLInputElement, Element>) => void"},descriptionHtml:"<p>Handler that is called when the element loses focus.</p>"},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(e: ChangeEvent<HTMLInputElement>) => void"},descriptionHtml:"<p>Handler that is called when the value changes.</p>"},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(e: FocusEvent<HTMLInputElement, Element>) => void"},descriptionHtml:"<p>Handler that is called when the element receives focus.</p>"},pattern:{defaultValue:null,description:"Regex pattern that the value of the input must match to be valid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).",name:"pattern",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:'<p>Regex pattern that the value of the input must match to be valid. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern">MDN</a>.</p>'},placeholder:{defaultValue:null,description:"Text hint that occupies the text input when it is empty.",name:"placeholder",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Text hint that occupies the text input when it is empty.</p>"},readOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"readOnly",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the input can be selected but not changed by the user.</p>"},required:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"required",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether user input is required on the input before form submission.</p>"},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"CSSProperties"},descriptionHtml:"<p>Additional CSS styles for the container.</p>"},type:{defaultValue:{value:"text"},description:"The type of input to render. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdeftype).",name:"type",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:'"number" | "text" | "search" | "email" | "password" | "url" | "tel"'},descriptionHtml:'<p>The type of input to render. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdeftype">MDN</a>.</p>'},children:{defaultValue:null,description:"For affix use",name:"children",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"DOMAttributes"}],required:!1,type:{name:"Element & ReactNode"},descriptionHtml:"<p>For affix use</p>"},value:{defaultValue:null,description:"The current value (controlled).",name:"value",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>The current value (controlled).</p>"}},mdxType:"PropTable"}),e("h2",{id:"affix-props"},e("a",{parentName:"h2",href:"#affix-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Affix Props"),e(Ua,{props:{prefix:{defaultValue:null,description:"Affix added at the beginning of input",name:"prefix",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Affix added at the beginning of input</p>"},suffix:{defaultValue:null,description:"Affix added at the end of input",name:"suffix",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Affix added at the end of input</p>"},clear:{defaultValue:null,description:"Displays a clear icon",name:"clear",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Displays a clear icon</p>"},search:{defaultValue:null,description:"Displays a search icon",name:"search",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Displays a search icon</p>"},label:{defaultValue:null,description:"Displays a string",name:"label",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Displays a string</p>"},onClick:{defaultValue:null,description:"Click handler paired with clear or search",name:"onClick",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"() => void"},descriptionHtml:"<p>Click handler paired with clear or search</p>"}},mdxType:"PropTable"}))}Xa.isMDXComponent=!0;const Za=function(){const[t,l]=r.useState(!1);return e(r.Fragment,null,e("p",{className:"h4"},t.toString()),e(ne,{type:"checkbox",label:"Apple",defaultChecked:t,onChange:n=>l(n),mdxType:"Toggle"}))},Ya=function(){const[t,l]=r.useState([{label:"Microsoft",value:"microsoft"}]),n=i=>t.some(s=>s.value===i.value)?l(t.filter(s=>s.value!==i.value)):l([...t,i]);return e(r.Fragment,null,e("p",{className:"h4"},JSON.stringify(t)),e(ne,{type:"checkbox",title:"Companies",defaultSelected:t,options:[{label:"Apple",value:"apple"},{label:"Microsoft",value:"microsoft"}],onChange:n,mdxType:"Toggle"}))},Ga=function(){return e(ne,{type:"radio",title:"Favorite color",helpText:"Choose your absolute favorite color",options:[{label:"Red",value:"red"},{label:"Blue",value:"blue"},{label:"Green",value:"green"}],onChange:l=>console.log(l),mdxType:"Toggle"})},Ka=function(){const t=[{label:"Oslo",value:1},{label:"L\xF8renskog",value:2},{label:"Hamar",value:3}],[l,n]=r.useState(!1);return e(r.Fragment,null,e(V,{className:"mb-8",onClick:()=>n(!l),primary:l,negative:!l,small:!0,mdxType:"Button"},"Equal width: ",l.toString()),e("div",null,e(ne,{type:"radio-button",options:t,equalWidth:l,onChange:i=>console.log(i),mdxType:"Toggle"})))},Ja=function(){const[t,l]=r.useState([{label:"Blue",value:"blue"}]);return e(ne,{type:"checkbox",title:"Favorite colors",helpText:"Blue surely isn't amongst your favorites?",invalid:!0,selected:t,options:[{label:"Red",value:"red"},{label:"Blue",value:"blue"},{label:"Green",value:"green"}],mdxType:"Toggle"})},Qa=function(){const[t,l]=r.useState([{label:"Blue",value:"blue"}]),n=i=>t.some(s=>s.value===i.value)?l(t.filter(s=>s.value!==i.value)):l([...t,i]);return e(ne,{type:"checkbox",title:"Favorite colors",helpText:t.some(i=>i.value==="blue")?"Blue surely isn't amongst your favorites?":"Choose your favorite colors",invalid:!!t.some(i=>i.value==="blue"),selected:t,onChange:n,options:[{label:"Red",value:"red"},{label:"Blue",value:"blue"},{label:"Green",value:"green"}],mdxType:"Toggle"})},jl=a=>function(l){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",d({},l))},$l=jl("PropTable"),_l={Example0:Za,Example1:Ya,Example2:Ga,Example3:Ka,Example4:Ja,Example5:Qa},Wl="wrapper";function et(l){var n=l,{components:a}=n,t=N(n,["components"]);return e(Wl,y(d(d({},_l),t),{components:a,mdxType:"MDXLayout"}),e("h1",{id:"toggle"},e("a",{parentName:"h1",href:"#toggle","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Toggle"),e("p",null,`The toggle component allows you to render checkboxes or radio buttons, all in
one component. All you have to do is specify the Toggle `,e("inlineCode",{parentName:"p"},"type"),` and let the
component handle the rest. Toggle is built to handle both single and multiple
options.`),e("p",null,e("strong",{parentName:"p"},"You must keep track of state yourself"),`. The state has to be handled
differently depending on whether you want to use single or multiple options. See
examples below.`),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Toggle } from '@fabric-ds/react';
`)),e("h2",{id:"checkbox-with-single-option"},e("a",{parentName:"h2",href:"#checkbox-with-single-option","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Checkbox with single option"),e("p",null,"When you only want a single option, please use the ",e("inlineCode",{parentName:"p"},"label"),` property over passing
a single option to the `,e("inlineCode",{parentName:"p"},"options")," property. This results in the ",e("inlineCode",{parentName:"p"},"onChange"),`
callback function returning a single boolean value indicating the current state
of the toggle.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <p className="h4">{checked.toString()}</p>
      <Toggle
        type="checkbox"
        label="Apple"
        defaultChecked={checked}
        onChange={(checked) => setChecked(checked)}
      />
    </>
  );
}
`)),e("div",{className:"example"},e(Za,{mdxType:"Example0"})),e("p",null,e("strong",{parentName:"p"},"Note")," the ",e("inlineCode",{parentName:"p"},"defaultChecked"),` property, which is only used to set the default
value on component mount (uncontrolled). `,e("strong",{parentName:"p"},"It does not"),` actively pass down the
state of the checkbox. Feel free to omit this property if you are not setting
the default value of the checkbox or use the `,e("inlineCode",{parentName:"p"},"checked"),` property (controlled) to
actively pass down state.`),e("p",null,e("strong",{parentName:"p"},"Note")," the ",e("inlineCode",{parentName:"p"},"onChange"),` property returning a boolean value. This is because
we're working with a single option. When using the `,e("inlineCode",{parentName:"p"},"options"),` property, as seen
in examples below, the option which has been selected is returned on the
callback and we must handle this state ourselves.`),e("h2",{id:"checkbox-with-multiple-options"},e("a",{parentName:"h2",href:"#checkbox-with-multiple-options","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Checkbox with multiple options"),e("p",null,`Let's have a look at using the Toggle with multiple options. As mentioned above,
using the `,e("inlineCode",{parentName:"p"},"options")," property will change the returning value of the ",e("inlineCode",{parentName:"p"},"onChange"),`
callback. It will now return the option which was selected.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [selected, setSelected] = React.useState([
    { label: 'Microsoft', value: 'microsoft' },
  ]);

  const handleSelect = (entry) => {
    if (selected.some((e) => e.value === entry.value)) {
      return setSelected(selected.filter((s) => s.value !== entry.value));
    }

    return setSelected([...selected, entry]);
  };

  return (
    <>
      <p className="h4">{JSON.stringify(selected)}</p>
      <Toggle
        type="checkbox"
        title="Companies"
        defaultSelected={selected}
        options={[
          { label: 'Apple', value: 'apple' },
          { label: 'Microsoft', value: 'microsoft' },
        ]}
        onChange={handleSelect}
      />
    </>
  );
}
`)),e("div",{className:"example"},e(Ya,{mdxType:"Example1"})),e("p",null,e("strong",{parentName:"p"},"Note")," the ",e("inlineCode",{parentName:"p"},"defaultSelected"),` property (uncontrolled). Similar to the single
option `,e("inlineCode",{parentName:"p"},"checked"),` property, this will render the passed options as checked by
default when the component mounts. If you wish to actively pass the state down
use the `,e("inlineCode",{parentName:"p"},"selected")," property instead (controlled)."),e("p",null,e("strong",{parentName:"p"},"Note")," the ",e("inlineCode",{parentName:"p"},"title"),` property. This gives you the option to label the options,
but is not required.`),e("h2",{id:"toggle-with-multiple-options"},e("a",{parentName:"h2",href:"#toggle-with-multiple-options","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Toggle with multiple options"),e("p",null,`We've already had a look at checkboxes, but Toggle can also render radio options
and buttons.`),e("h3",{id:"radio"},e("a",{parentName:"h3",href:"#radio","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Radio"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
  ];

  return (
    <Toggle
      type="radio"
      title="Favorite color"
      helpText="Choose your absolute favorite color"
      options={options}
      onChange={(selected) => console.log(selected)}
    />
  );
}
`)),e("div",{className:"example"},e(Ga,{mdxType:"Example2"})),e("p",null,e("strong",{parentName:"p"},"Note")," the ",e("inlineCode",{parentName:"p"},"helpText"),` property. This gives you the option to further explain
the purpose of the toggle and the action to take.`),e("h3",{id:"radio-buttons"},e("a",{parentName:"h3",href:"#radio-buttons","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Radio buttons"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const options = [
    { label: 'Oslo', value: 1 },
    { label: 'L\xF8renskog', value: 2 },
    { label: 'Hamar', value: 3 },
  ];

  const [equalWidth, setEqualWidth] = React.useState(false);

  return (
    <>
      <Button
        className="mb-8"
        onClick={() => setEqualWidth(!equalWidth)}
        primary={equalWidth}
        negative={!equalWidth}
        small
      >
        Equal width: {equalWidth.toString()}
      </Button>
      <div>
        <Toggle
          type="radio-button"
          options={options}
          equalWidth={equalWidth}
          onChange={(e) => console.log(e)}
        />
      </div>
    </>
  );
}
`)),e("div",{className:"example"},e(Ka,{mdxType:"Example3"})),e("p",null,"Radio buttons have the special property ",e("inlineCode",{parentName:"p"},"equalWidth"),`, which will render each
option with equal width.`),e("h2",{id:"validation"},e("a",{parentName:"h2",href:"#validation","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Validation"),e("p",null,"Validation is as easy as passing the property ",e("inlineCode",{parentName:"p"},"invalid")," with a ",e("inlineCode",{parentName:"p"},"helpText"),` to
further explain the error. `,e("inlineCode",{parentName:"p"},"helpText"),` can also be used as an assistance label
before an error occurs as long as `,e("inlineCode",{parentName:"p"},"invalid")," is set to false."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [selected, setSelected] = React.useState([
    { label: 'Blue', value: 'blue' },
  ]);

  return (
    <Toggle
      type="checkbox"
      title="Favorite colors"
      helpText="Blue surely isn't amongst your favorites?"
      invalid
      selected={selected}
      options={[
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
      ]}
    />
  );
}
`)),e("div",{className:"example"},e(Ja,{mdxType:"Example4"})),e("p",null,`In the next example, we'll take a closer look at one way to conditionally render
error and help messages. You should probably take this a step further and
implement your own error handler, but for the sake of the demo we've kept it
quite simple.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [selected, setSelected] = React.useState([
    { label: 'Blue', value: 'blue' },
  ]);

  const handleSelect = (entry) => {
    if (selected.some((e) => e.value === entry.value)) {
      return setSelected(selected.filter((s) => s.value !== entry.value));
    }

    return setSelected([...selected, entry]);
  };

  return (
    <Toggle
      type="checkbox"
      title="Favorite colors"
      helpText={
        selected.some((e) => e.value === 'blue')
          ? "Blue surely isn't amongst your favorites?"
          : 'Choose your favorite colors'
      }
      invalid={!!selected.some((e) => e.value === 'blue')}
      selected={selected}
      onChange={handleSelect}
      options={[
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
      ]}
    />
  );
}
`)),e("div",{className:"example"},e(Qa,{mdxType:"Example5"})),e("h1",{id:"toggle-props"},e("a",{parentName:"h1",href:"#toggle-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Toggle props"),e($l,{props:{type:{defaultValue:null,description:"The type of Toggle",name:"type",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!0,type:{name:'"radio" | "checkbox" | "radio-button"'},descriptionHtml:"<p>The type of Toggle</p>"},title:{defaultValue:null,description:"The option(s) title",name:"title",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>The option(s) title</p>"},invalid:{defaultValue:null,description:"Renders options in invalid state. Often paired together with `helpText` to provide feedback about the error.",name:"invalid",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Renders options in invalid state. Often paired together with <code>helpText</code> to provide feedback about the error.</p>"},helpText:{defaultValue:null,description:"Help text beneath options",name:"helpText",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Help text beneath options</p>"},options:{defaultValue:null,description:"An array of options to render",name:"options",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"ToggleEntry[]"},descriptionHtml:"<p>An array of options to render</p>"},selected:{defaultValue:null,description:"An array of options to be selected / checked (controlled)",name:"selected",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"ToggleEntry[]"},descriptionHtml:"<p>An array of options to be selected / checked (controlled)</p>"},defaultSelected:{defaultValue:null,description:"An array of options to be selected / checked on mount (uncontrolled)",name:"defaultSelected",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"ToggleEntry[]"},descriptionHtml:"<p>An array of options to be selected / checked on mount (uncontrolled)</p>"},label:{defaultValue:null,description:"If you only need to render a single option, use this prop instead",name:"label",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>If you only need to render a single option, use this prop instead</p>"},checked:{defaultValue:null,description:"Whether the single option should be checked (controlled)",name:"checked",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the single option should be checked (controlled)</p>"},defaultChecked:{defaultValue:null,description:"Whether the single option should be checked on mount (uncontrolled)",name:"defaultChecked",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the single option should be checked on mount (uncontrolled)</p>"},onChange:{defaultValue:null,description:"Retrieve the selected entry or a boolean value, depending on whether you are working with single or multiple options",name:"onChange",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!0,type:{name:"(value: any) => void"},descriptionHtml:"<p>Retrieve the selected entry or a boolean value, depending on whether you are working with single or multiple options</p>"},small:{defaultValue:null,description:"Whether the elements should be small",name:"small",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the elements should be small</p>"},optional:{defaultValue:null,description:`Whether the toggle is optional
Appends (valgfritt) to the end of the title for indication`,name:"optional",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"boolean"},descriptionHtml:`<p>Whether the toggle is optional
Appends (valgfritt) to the end of the title for indication</p>`},equalWidth:{defaultValue:null,description:"Will make each radio-button equal width",name:"equalWidth",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Will make each radio-button equal width</p>"},className:{defaultValue:null,description:"Custom classes applied to the wrapping container",name:"className",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Custom classes applied to the wrapping container</p>"}},mdxType:"PropTable"}),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`type ToggleEntry = {
  label: string;
  value: unknown;
};
`)))}et.isMDXComponent=!0;const Ol={},zl="wrapper";function at(l){var n=l,{components:a}=n,t=N(n,["components"]);return e(zl,y(d(d({},Ol),t),{components:a,mdxType:"MDXLayout"}),e("h1",{id:"getting-started"},e("a",{parentName:"h1",href:"#getting-started","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Getting started"),e("p",null,`This page describes how to get started building an application with Fabric
React.`),e("h2",{id:"setting-up-your-app"},e("a",{parentName:"h2",href:"#setting-up-your-app","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Setting up your app"),e("p",null,"Ensure the ",e("a",{parentName:"p",href:"https://css.fabric-ds.io"},"Fabric CSS"),` stylesheet is loaded in the
page you are working on.`),e("p",null,`See the
`,e("a",{parentName:"p",href:"https://css.fabric-ds.io/pages/getting-started.html"},"Fabric CSS getting started guide"),`
for more information.`),e("h2",{id:"installation"},e("a",{parentName:"h2",href:"#installation","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Installation"),e("p",null,`All the Fabric React code is provided as a single package and each component can
be imported from this package.`),e("h3",{id:"install-from-npm"},e("a",{parentName:"h3",href:"#install-from-npm","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Install from NPM"),e("p",null,"The Fabric React package can be installed from NPM."),e("pre",null,e("code",{parentName:"pre",className:"language-shell"},`npm install @fabric-ds/react
`)),e("h3",{id:"install-from-eik"},e("a",{parentName:"h3",href:"#install-from-eik","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Install from Eik"),e("p",null,"The same package is also available via our Eik CDN server"),e("pre",null,e("code",{parentName:"pre",className:"language-html"},`https://assets.finn.no/pkg/@fabric-ds/react/v0/index.js
`)),e("h3",{id:"importing-components"},e("a",{parentName:"h3",href:"#importing-components","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Importing Components"),e("p",null,`Once installed, components can be imported into your app by name. Below are
examples of how thats done`),e("br",null),e("h4",{id:"importing-from-the-npm-package"},e("a",{parentName:"h4",href:"#importing-from-the-npm-package","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Importing from the NPM package"),e("p",null,"\u{1F449} ",e("em",{parentName:"p"},e("strong",{parentName:"em"},"This is the most common method and should be used in most cases"))),e("p",null,`When importing from NPM you will need to ensure you have build tooling in place.
If you are working with Podium podlets or layouts which is the most common use
case at Finn, you likely already have Eik in place with Rollup or Esbuild in
which case no further action should be needed.`),e("p",null,`If not, take a look at the React
`,e("a",{parentName:"p",href:"https://reactjs.org/docs/getting-started.html"},"getting started")," docs."),e("p",null,e("em",{parentName:"p"},"Example")),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Button } from '@fabric-ds/react';
`)),e("br",null),e("h4",{id:"importing-directly-from-eik"},e("a",{parentName:"h4",href:"#importing-directly-from-eik","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Importing directly from Eik"),e("p",null,"\u{1F449} ",e("em",{parentName:"p"},e("strong",{parentName:"em"},"This is great for prototyping (can also be used in production)"))),e("p",null,`It is also possible to import components directly from the URL on our Eik
server. While not common, it should be possible to write React code without the
need for a build setup. You might find this useful for rapid prototyping
something on a hack day for example!`),e("p",null,e("em",{parentName:"p"},"Example")),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Button } from 'https://assets.finn.no/pkg/@fabric-ds/react/v0/index.js';
`)),e("p",null,`If you go down this route, other dependencies such as React and React Dom will
also need to be imported via URLs. These can also be found on the Eik server.`),e("p",null,e("em",{parentName:"p"},"Example")),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import React from 'https://assets.finn.no/npm/@pika/react/v16/index.js';
import ReactDom from 'https://assets.finn.no/npm/@pika/react-dom/v16/index.js';
`)),e("br",null),e("h4",{id:"individual-component-imports"},e("a",{parentName:"h4",href:"#individual-component-imports","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Individual component imports"),e("p",null,`You can find the specific import statement to import each component on that
component's documentation page. For example, here's the `,e("a",{parentName:"p",href:"/button"},"button page")),e("h2",{id:"typescript-support"},e("a",{parentName:"h2",href:"#typescript-support","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"TypeScript support"),e("p",null,`The components are written in TypeScript. To take advantage of this, make sure
your project is up to date on the latest `,e("inlineCode",{parentName:"p"},"@types/react")," definitions."),e("pre",null,e("code",{parentName:"pre",className:"language-shell"},`# YARN
yarn add @types/react -D

# NPM
npm i @types/react -D
`)))}at.isMDXComponent=!0;function Ul(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"grid lg:grid-cols-3 gap-16"},r.createElement("div",{className:"lg:col-span-2 overflow-hidden"},r.createElement(at,null)),r.createElement("div",null,r.createElement("f-docs-highlight-box",null))))}const Xl=n=>{var i=n,{children:a,className:t}=i,l=N(i,["children","className"]);const s=t.replace(/language-/,"");return r.createElement(bt,y(d({},gt),{code:a,language:s,theme:xt}),({className:o,style:p,tokens:m,getLineProps:f,getTokenProps:g})=>r.createElement("pre",{className:o,style:y(d({},p),{padding:"20px 20px 0px",overflowX:"auto"})},m.map((v,T)=>r.createElement("div",d({key:T},f({line:v,key:T})),v.map((b,H)=>r.createElement("span",d({key:H},g({token:b,key:H}))))))))},Zl="_table_113bc_1",Yl="_name_113bc_40",Gl="_value_113bc_44",Kl="_type_113bc_48";var Ne={table:Zl,name:Yl,value:Gl,type:Kl};function Jl({props:a}){return c.exports.createElement("div",{className:"overflow-x-auto"},c.exports.createElement("table",{className:Ne.table},c.exports.createElement("thead",null,c.exports.createElement("tr",null,c.exports.createElement("th",null,"Name"),c.exports.createElement("th",null,"Type"),c.exports.createElement("th",null,"Default"),c.exports.createElement("th",null,"Description"))),c.exports.createElement("tbody",null,Object.values(a).map(t=>c.exports.createElement("tr",{key:t.name},c.exports.createElement("td",null,c.exports.createElement(Ql,{prop:t})),c.exports.createElement("td",null,c.exports.createElement(an,{prop:t})),c.exports.createElement("td",null,c.exports.createElement(en,{prop:t})),c.exports.createElement("td",{dangerouslySetInnerHTML:{__html:t.descriptionHtml}}))))))}const Ql=({prop:a})=>{let t=Ne.name;a.description.includes("@deprecated")&&(t+=" line-through");const l=c.exports.createElement("span",{className:t},a.name);return a.required?c.exports.createElement(c.exports.Fragment,null,l,c.exports.createElement("span",{className:"ml-4"},"*")):l},en=({prop:a})=>{const t=a.defaultValue;if(!t)return c.exports.createElement("span",null);const l=t.value;return l?typeof l=="string"&&l!=="false"&&l!=="true"?c.exports.createElement("span",{className:Ne.value},'"',l,'"'):c.exports.createElement("span",{className:Ne.type},l.toString()):c.exports.createElement("span",null,"-")},an=({prop:a})=>{const t=n=>{const i=tn[n];let s="";return n.startsWith('"')&&(s=Ne.value),i?c.exports.createElement("span",{className:s},c.exports.createElement("a",{href:i},n)):c.exports.createElement("span",{className:s},n)},{name:l}=a.type;if(l.includes(" | ")){const n=l.split(" | ");return c.exports.createElement(c.exports.Fragment,null,n.map(i=>c.exports.createElement("span",{className:"block whitespace-nowrap",key:i},c.exports.createElement("span",{className:"mr-4"},"|"),t(i))))}else return t(l)},tn={string:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",number:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",boolean:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",Date:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date",CSSProperties:"https://reactjs.org/docs/dom-elements.html#style",ReactNode:"https://reactjs.org/docs/rendering-elements.html","RefObject<any>":"https://reactjs.org/docs/refs-and-the-dom.html"},ln={code:Xl,PropTable:Jl,pre:a=>r.createElement("div",d({},a)),img:l=>{var n=l,{style:a}=n,t=N(n,["style"]);return r.createElement("img",y(d({},t),{style:d({maxWidth:"100%"},a)}))}},nn=()=>r.createElement(yt,{components:ln},r.createElement(vt,null,r.createElement(Tt,null,r.createElement(B,{path:"/",exact:!0},r.createElement(Ul,null)),r.createElement(B,{path:"/modal"},r.createElement(ua,null)),r.createElement(B,{path:"/breadcrumbs"},r.createElement(ze,null)),r.createElement(B,{path:"/textfield"},r.createElement(Xa,null)),r.createElement(B,{path:"/select"},r.createElement(fa,null)),r.createElement(B,{path:"/tabs"},r.createElement(_a,null)),r.createElement(B,{path:"/textarea"},r.createElement(Oa,null)),r.createElement(B,{path:"/slider"},r.createElement(wa,null)),r.createElement(B,{path:"/combobox"},r.createElement(sa,null)),r.createElement(B,{path:"/button"},r.createElement(Ue,null)),r.createElement(B,{path:"/pill"},r.createElement(Xe,null)),r.createElement(B,{path:"/box"},r.createElement(Oe,null)),r.createElement(B,{path:"/expandable"},r.createElement(pa,null)),r.createElement(B,{path:"/switch"},r.createElement(Da,null)),r.createElement(B,{path:"/toggle"},r.createElement(et,null)),r.createElement(B,{path:"/steps"},r.createElement(Ia,null)),r.createElement(B,{path:"/Card"},r.createElement(Je,null)))));Nt.exports.render(nn(),document.querySelector("#root"));
