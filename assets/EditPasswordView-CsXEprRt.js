import{_ as C,o as l,c as i,a as o,t as m,J as E,f as g,u as L,r as c,b as f,w as B,e as a,I as U,i as V}from"./index-qDlgM4vq.js";import{N as A}from"./NavBar-CLsjdGnx.js";/* empty css                  */import{u as N}from"./token-CTkdkM5A.js";import{a as x}from"./axios-Cm0UX6qg.js";import{n as F}from"./httputils-BkA1VD7X.js";import{u as z,a as S,c as I,F as D}from"./index.esm-D448LP-s.js";const R={class:"element"},q={class:"heading"},T=["value"],J={key:0,class:"error"},j={__name:"EditPasswordInputElement",props:{label:{type:String,default:""},modelValue:{type:[String,Number],default:""},error:String},emits:["update:modelValue"],setup(r,{emit:_}){const h=_,n=d=>{h("update:modelValue",d.target.value)};return(d,w)=>(l(),i("div",R,[o("label",q,m(r.label),1),o("input",{class:E(["inputField",{"is-error":r.error}]),value:r.modelValue,onInput:n,name:"inputField",minlength:"2",maxlength:"30",type:"password"},null,42,T),r.error?(l(),i("span",J,m(r.error),1)):g("",!0)]))}},$=C(j,[["__scopeId","data-v-d6a76940"]]),G={class:"flex-container"},H=U('<div class="header"><div class="left-content"></div><div class="middle-content"><h1 class="title">Rediger passord</h1></div><div class="right-content"></div></div>',1),K={class:"main",id:"profile"},M={key:0,class:"error"},O={key:1,class:"error"},Q={key:2,class:"error"},W=o("br",null,null,-1),X=["disabled"],Y=o("br",null,null,-1),Z=o("br",null,null,-1),ee={class:"footer"},ie={__name:"EditPasswordView",setup(r){const _=L(),{handleSubmit:h,errors:n,meta:d}=z(),w=c(""),b=c(""),P=c(""),p=c(""),k=c(""),{value:u}=S("password",I().required("Passord må oppgis")),{value:v}=S("confirmPassword",I().required("Passord må oppgis"));(async()=>{try{const s=N();await F("/editPassword");const e=await x.get("http://idatt2105-32.idi.ntnu.no:8080/api/users/"+s.getLoggedInUser(),s.getAxiosAuthorizationConfig());if(e.status===200){const t=e.data;w.value=t.firstName,b.value=t.lastName,P.value=t.email,k.value=t.knowledgeLevel}else await _.push("/login")}catch(s){console.error("Error fetching data:",s)}})();const y=async()=>{if(u.value!==v.value){p.value="Passordene matcher ikke",console.error(p.value);return}try{const s=N(),e={firstName:w.value,lastName:b.value,email:P.value,knowledgeLevel:k.value,password:u.value};(await x.put("http://idatt2105-32.idi.ntnu.no:8080/api/users/"+s.getLoggedInUser(),e,s.getAxiosAuthorizationConfig())).status===200?(alert("Passordet ditt har blitt endret."),await F("/editProfile")):alert("Feil ved endring av passord")}catch(s){console.error("Feil ved endring av passord:",s),alert("Feil ved endring av passord")}};return(s,e)=>(l(),i("div",G,[H,o("div",K,[f(a(D),{onSubmit:e[2]||(e[2]=t=>a(h)(y))},{default:B(()=>[a(n).password?(l(),i("span",M,m(a(n).password),1)):g("",!0),f($,{label:"Nytt passord",modelValue:a(u),"onUpdate:modelValue":e[0]||(e[0]=t=>V(u)?u.value=t:null),name:"password"},null,8,["modelValue"]),a(n).confirmPassword?(l(),i("span",O,m(a(n).confirmPassword),1)):g("",!0),f($,{label:"Bekreft nytt passord",modelValue:a(v),"onUpdate:modelValue":e[1]||(e[1]=t=>V(v)?v.value=t:null),name:"confirmPassword"},null,8,["modelValue"]),p.value?(l(),i("div",Q,m(p.value),1)):g("",!0),W]),_:1}),o("button",{class:"btn",id:"changePassword",onClick:y,disabled:!a(d).valid||!a(d).dirty},"Lagre",8,X),Y,Z]),o("div",ee,[f(A)])]))}};export{ie as default};
