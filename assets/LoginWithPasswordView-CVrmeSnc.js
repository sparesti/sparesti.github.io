import{_ as N,u as T,r as q,d as v,c as l,b as p,w as h,e,o as d,a as t,t as m,f as _,g as w,v as y,i as k,h as z,p as C,j as D}from"./index-_YVCG4aW.js";import{u as E,a as S,c as x}from"./index.esm-DBJyLCxb.js";import{a as L}from"./axios-Cm0UX6qg.js";import{u as G}from"./token-DW84-UJB.js";import{G as R}from"./loginStyle-D5Cki4IE.js";const U=a=>(C("data-v-5a1a11f6"),a=a(),D(),a),Z={class:"screen"},j=U(()=>t("h1",null,"Innlogging",-1)),M={class:"inputs"},W={key:0,class:"error"},$={key:1,class:"error"},H={key:0,class:"error"},J=["disabled"],K={__name:"LoginWithPasswordView",setup(a){const b=T(),V=()=>{b.push("/home")},{handleSubmit:B,errors:r,meta:f}=E(),g=G();g.getAxiosAuthorizationConfig();const u=q(""),P=B(async()=>{try{const s=await L.post("https://idatt2105-32.idi.ntnu.no:8080/api/login",{email:o.value,password:n.value});console.log(s.data),g.saveEmailAndTokenInStore(o.value,s.data),V()}catch(s){s.response&&s.response.status===401?(console.error("User not found. Please check your credentials."),u.value="E-post adresse og/eller passordet er feil. Prøv igjen"):console.error("Login failed:",s)}}),A=/^[a-zA-Z0-9._%+-æøåÆØÅ]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,{value:o}=S("email",x().required("Epost må fylles ut").matches(A,"Må være en gyldig epost")),{value:n}=S("password",x().required("Passord må fylles ut"));return(s,i)=>{const I=v("router-link"),F=v("Form");return d(),l("div",Z,[p(R,{page:"/",class:"goBackButton"}),j,p(F,{onSubmit:e(P)},{default:h(()=>[t("div",M,[e(r).email?(d(),l("span",W,m(e(r).email),1)):_("",!0),w(t("input",{type:"text",name:"email","onUpdate:modelValue":i[0]||(i[0]=c=>k(o)?o.value=c:null),placeholder:"Din e-post adresse",class:"input",required:""},null,512),[[y,e(o)]]),e(r).password?(d(),l("span",$,m(e(r).password),1)):_("",!0),w(t("input",{type:"password",name:"password","onUpdate:modelValue":i[1]||(i[1]=c=>k(n)?n.value=c:null),placeholder:"Ditt passord",class:"input",required:""},null,512),[[y,e(n)]])]),u.value?(d(),l("div",H,m(u.value),1)):_("",!0),t("button",{type:"submit",class:"login",disabled:!e(f).valid||!e(f).dirty},"Logg inn",8,J),p(I,{to:"/forgotPassword",class:"forgotPassword"},{default:h(()=>[z("Glemt passord?")]),_:1})]),_:1},8,["onSubmit"])])}}},se=N(K,[["__scopeId","data-v-5a1a11f6"]]);export{se as default};
