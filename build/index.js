(()=>{"use strict";var e,t={802:()=>{const e=window.wp.blocks,t=window.wp.blockEditor,r=window.wp.components,o=window.ReactJSXRuntime;(0,e.registerBlockType)("prototyper/grid-block",{title:"Grid Block",icon:"grid-view",category:"layout",attributes:{columns:{type:"number",default:3}},edit:e=>{const{attributes:n,setAttributes:s}=e,{columns:l}=n;return(0,o.jsxs)("div",{className:`grid-block columns-${l}`,children:[(0,o.jsx)(t.InspectorControls,{children:(0,o.jsx)(r.PanelBody,{title:"Grid Settings",children:(0,o.jsx)(r.RangeControl,{label:"Columns",value:l,onChange:e=>s({columns:e}),min:1,max:6})})}),(0,o.jsx)(t.InnerBlocks,{allowedBlocks:["core/paragraph","core/image"]})]})},save:e=>{const{attributes:r}=e,{columns:n}=r;return(0,o.jsx)("div",{className:`grid-block columns-${n}`,children:(0,o.jsx)(t.InnerBlocks.Content,{})})}}),(0,e.registerBlockType)("prototyper/section-block",{title:"Section Block",icon:"columns",category:"layout",attributes:{backgroundColor:{type:"string",default:"#ffffff"},padding:{type:"string",default:"20px"}},edit:e=>{const{attributes:n,setAttributes:s}=e,{backgroundColor:l,padding:i}=n;return(0,o.jsxs)("div",{className:"section-block",style:{backgroundColor:l,padding:i},children:[(0,o.jsx)(t.InspectorControls,{children:(0,o.jsxs)(r.PanelBody,{title:"Section Styles",children:[(0,o.jsx)(t.ColorPalette,{value:l,onChange:e=>s({backgroundColor:e})}),(0,o.jsx)(r.TextControl,{label:"Padding",value:i,onChange:e=>s({padding:e})})]})}),(0,o.jsx)(t.InnerBlocks,{})]})},save:e=>{const{attributes:r}=e,{backgroundColor:n,padding:s}=r;return(0,o.jsx)("div",{className:"section-block",style:{backgroundColor:n,padding:s},children:(0,o.jsx)(t.InnerBlocks.Content,{})})}}),(0,e.registerBlockType)("prototyper/margin-block",{title:"Margin Block",icon:"editor-contract",category:"layout",attributes:{margin:{type:"string",default:"0px"}},edit:e=>{const{attributes:n,setAttributes:s}=e,{margin:l}=n;return(0,o.jsxs)("div",{className:"margin-block",style:{margin:l},children:[(0,o.jsx)(t.InspectorControls,{children:(0,o.jsx)(r.PanelBody,{title:"Margin Settings",children:(0,o.jsx)(r.TextControl,{label:"Margin",value:l,onChange:e=>s({margin:e})})})}),(0,o.jsx)(t.InnerBlocks,{})]})},save:e=>{const{attributes:r}=e,{margin:n}=r;return(0,o.jsx)("div",{className:"margin-block",style:{margin:n},children:(0,o.jsx)(t.InnerBlocks.Content,{})})}});const n=window.wp.keyboardShortcuts,s=window.wp.data;(0,n.registerShortcut)({category:"block",description:"Group selected blocks",keyCombination:{modifier:"primary",character:"g"}},(()=>{const{clientIds:e}=(0,s.select)(t.store).getSelectedBlockClientIds();e.length&&((0,s.dispatch)(t.store).multiSelect(e),(0,s.dispatch)(t.store).replaceInnerBlocks(e[0],[],null))})),(0,e.registerBlockType)("prototyper/grid-block",{title:"Grid Block",icon:"grid-view",category:"layout",attributes:{columns:{type:"number",default:3}},edit:e=>{const{attributes:n,setAttributes:s}=e,{columns:l}=n;return(0,o.jsxs)("div",{className:"grid-block",children:[(0,o.jsx)(t.InspectorControls,{children:(0,o.jsx)(r.PanelBody,{title:"Grid Settings",children:(0,o.jsx)(r.RangeControl,{label:"Columns",value:l,onChange:e=>s({columns:e}),min:1,max:6})})}),(0,o.jsx)("div",{className:`columns-${l}`,children:(0,o.jsx)(t.InnerBlocks,{allowedBlocks:["core/paragraph","core/image"]})})]})},save:e=>{const{attributes:r}=e,{columns:n}=r;return(0,o.jsx)("div",{className:`grid-block columns-${n}`,children:(0,o.jsx)(t.InnerBlocks.Content,{})})}})}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.m=t,e=[],o.O=(t,r,n,s)=>{if(!r){var l=1/0;for(d=0;d<e.length;d++){for(var[r,n,s]=e[d],i=!0,c=0;c<r.length;c++)(!1&s||l>=s)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(i=!1,s<l&&(l=s));if(i){e.splice(d--,1);var a=n();void 0!==a&&(t=a)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[r,n,s]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,s,[l,i,c]=r,a=0;if(l.some((t=>0!==e[t]))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(c)var d=c(o)}for(t&&t(r);a<l.length;a++)s=l[a],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},r=globalThis.webpackChunk=globalThis.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[350],(()=>o(802)));n=o.O(n)})();