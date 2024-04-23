import{_ as k,m as b,k as w,o as p,c as h,a as e,t as $,l as y,p as V,j as x,r,n as L,b as m,h as I,e as c,q as N,i as S,f as B}from"./index-CWVWdIaL.js";import{N as E}from"./NavBar-B2MYh0mE.js";/* empty css                  */import{u as C}from"./token-Cfw4qG7q.js";import{a as M}from"./axios-Cm0UX6qg.js";import{n as g}from"./httputils-0tl6qC22.js";const F={class:"element"},P={class:"heading"},U=["value"],D={__name:"InputElement",props:b({label:{type:String,default:""},modelValue:{type:[String,Number],default:""},error:String},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(o){return w(o,"modelValue"),(n,a)=>(p(),h("div",F,[e("label",P,$(o.label),1),e("input",{class:"inputField",name:"inputField",value:o.modelValue,readonly:"",minlength:"2",maxlength:"30"},null,8,U)]))}},_=k(D,[["__scopeId","data-v-808b8b1e"]]),v=o=>(V("data-v-0213a3d5"),o=o(),x(),o),K={class:"main"},T={class:"flex-container3"},q={class:"box"},A={class:"question"},H=v(()=>e("div",{class:"text"},[e("h3",null,"Hvordan vil du best beskrive din kunnskap om økonomi?")],-1)),R=v(()=>e("label",{class:"radio",for:"low"},"Lav",-1)),j=v(()=>e("label",{class:"radio",for:"medium"},"Middels",-1)),z=v(()=>e("label",{class:"radio",for:"high"},"Høy",-1)),f=!0,O={__name:"Knowledge",props:["knowledgeLevel"],setup(o){const n=o;return y(()=>{console.log(n.knowledgeLevel),n.knowledgeLevel==="low"&&(document.getElementById("low").checked=!0),n.knowledgeLevel==="medium"&&(document.getElementById("medium").checked=!0),n.knowledgeLevel==="high"&&(document.getElementById("high").checked=!0)}),(a,s)=>(p(),h("div",K,[e("div",T,[e("div",q,[e("ul",A,[H,e("div",null,[e("input",{type:"radio",id:"low",name:"difficulty",value:"low",onClick:s[0]||(s[0]=u=>a.$emit("knowledge","low")),disabled:f}),R]),e("div",null,[e("input",{type:"radio",id:"medium",name:"difficulty",value:"medium",onClick:s[1]||(s[1]=u=>a.$emit("knowledge","medium")),disabled:f}),j]),e("div",null,[e("input",{type:"radio",id:"high",name:"difficulty",value:"high",onClick:s[2]||(s[2]=u=>a.$emit("knowledge","high")),disabled:f}),z])])])])]))}},G=k(O,[["__scopeId","data-v-0213a3d5"]]),J={class:"flex-container"},Q=e("div",{class:"header"},[e("h1",{class:"title"},"Profil")],-1),W={class:"main",id:"profile"},X=e("br",null,null,-1),Y=e("br",null,null,-1),Z=e("br",null,null,-1),ee=e("br",null,null,-1),le=e("br",null,null,-1),te={class:"footer"},ue={__name:"ProfileView",setup(o){const n=r(""),a=r(""),s=r(""),u=r("");let i="";return(async()=>{try{const d=C();await g("/profile");const t=await M.get("http://localhost:8080/api/users/"+d.getLoggedInUser(),d.getAxiosAuthorizationConfig());if(t.status===200){const l=t.data;n.value=l.firstName,a.value=l.lastName,s.value=l.email,u.value=l.password,i=l.knowledgeLevel}else await L.push("/login")}catch(d){console.error("Error fetching data:",d)}})(),(d,t)=>(p(),h("div",J,[Q,e("div",W,[m(_,{label:"Fornavn",type:"text",modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=l=>n.value=l)},null,8,["modelValue"]),m(_,{label:"Etternavn",type:"text",modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=l=>a.value=l)},null,8,["modelValue"]),m(_,{label:"Email",type:"text",modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=l=>s.value=l)},null,8,["modelValue"]),I(),X,c(i)!==""?(p(),N(G,{key:0,knowledgeLevel:c(i),onKnowledge:t[3]||(t[3]=l=>S(i)?i.value=l:i=l)},null,8,["knowledgeLevel"])):B("",!0),Y,Z,e("button",{class:"btn",id:"edit",onClick:t[4]||(t[4]=l=>c(g)("/editProfile"))},"Rediger"),ee,le,e("button",{class:"btn",id:"logOut",onClick:t[5]||(t[5]=l=>c(g)("/"))},"Logg ut")]),e("div",te,[m(E)])]))}};export{ue as default};
