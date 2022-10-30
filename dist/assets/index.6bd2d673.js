import{r as S,o as a,c as d,a as r,b as c,w as f,d as _,p as h,e as b,f as A,t as $,g as V,T as L,u as g,F as y,h as W,K as q,i as H,j as T,n as K,k as u,l as I,v as N,m,q as j,s as R,x as z,y as G,z as J,A as U,B as Q}from"./vendor.a9d67b6a.js";const X=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}};X();var Y="/apps/Pomodoro-Timer/stopwatch.png";var p=(e,t)=>{for(const[o,s]of t)e[o]=s;return e};const Z={},ee=e=>(h("data-v-46eebb59"),e=e(),b(),e),te=ee(()=>r("div",{class:"icon-container"},[r("div",{class:"circle"}),r("img",{src:Y,alt:"Picture of a stopwatch"})],-1)),oe=_(" Pomodoro Timer "),re=[te,oe],se={class:"header-nav"},ne=_("Home"),ie=_("About"),ae=_("Settings");function le(e,t){const o=S("router-link");return a(),d("header",null,[r("h1",{onClick:t[0]||(t[0]=s=>e.$router.push("/"))},re),r("nav",se,[c(o,{class:"link",to:"/"},{default:f(()=>[ne]),_:1}),c(o,{class:"link",to:"/about"},{default:f(()=>[ie]),_:1}),c(o,{class:"link",to:"/settings"},{default:f(()=>[ae]),_:1})])])}var ce=p(Z,[["render",le],["__scopeId","data-v-46eebb59"]]);const ue={},de=e=>(h("data-v-02c3b8a0"),e=e(),b(),e),pe=de(()=>r("div",null,"\xA92022 Steven McGrew",-1)),_e=[pe];function me(e,t){return a(),d("footer",null,_e)}var ve=p(ue,[["render",me],["__scopeId","data-v-02c3b8a0"]]);const ge={},fe={class:"finished-popup-content"};function he(e,t){return a(),A(L,{to:"body"},[e.$store.state.isShowFinishedPopup?(a(),d("div",{key:0,onClick:t[1]||(t[1]=o=>e.$store.commit("prepareNextTimerMode")),class:"finished-popup"},[r("div",fe,[r("p",null,$(e.$store.state.finishedMessage),1),r("button",{onClick:t[0]||(t[0]=o=>e.$store.commit("prepareNextTimerMode"))},"OK")])])):V("",!0)])}var be=p(ge,[["render",he],["__scopeId","data-v-62f23108"]]);function B(e){return document.getElementById(e)}function M(e){return new Date(e).toISOString().slice(14,19)}let P=null;function $e(e,t){P=setInterval(function(){document.title.startsWith("\u23F0")?document.title=e:document.title="\u23F0\u23F0\u23F0\u23F0\u23F0\u23F0\u23F0\u23F0\u23F0\u23F0"},t)}function ke(){P?clearInterval(P):alert("Error:  something went wrong when trying to stop the title alarm."),document.title="Pomodoro Timer"}function Se(e){return e[e.length-1]==="workInterval"?e.length===7?"longBreak":"shortBreak":"workInterval"}function D(e){if(e==="workInterval")return"work interval";if(e==="shortBreak")return"short break";if(e==="longBreak")return"long break"}function ye(e){if(e==="workInterval")return"Work Time";if(e==="shortBreak")return"Short Break Time";if(e==="longBreak")return"Long Break Time"}function F(e){w(e),e.isTimerInProgress=!1,e.progress=["workInterval"],k(e),e.isResetDropupVisible=!1}function Te(e,t){e.counter="00:00",e.time=0,e.progressPercent=100;let o=e.progress[e.progress.length-1],s=Se(e.progress);e.progress.push(s);let n=D(o),i=D(s);e.finishedMessage=`The ${n} timer has finished. Next up is a ${i}.`,e.isShowFinishedPopup=!0;let l=ye(s);$e(l,500),e.prefersAlarmSound&&t.play(),w(e)}function k(e){if(e.progress.length===9)F(e);else{let t=e.progress[e.progress.length-1];e.time=e[t]*6e4,e.counter=M(e.time),e.progressPercent=0}}function Ie(){B("alarmPlayer").pause(),ke()}let C=null;function O(e){e.isTimerRunning=!0,e.isTimerInProgress=!0;let t=e.progress[e.progress.length-1],o=e[t]*6e4,s=e.time,n=Date.now();C=setInterval(function(){let i=Date.now()-n,l=s-i;if(l<=0){Te(e,B("alarmPlayer"));return}e.time=l,e.counter=M(l),e.progressPercent=(o-l)/o*100},200)}function w(e){C&&clearInterval(C),e.isTimerRunning=!1}function we(e){document.querySelector(":root").style.setProperty("--app-accent-color",e)}const Ae={class:"page-container"},Pe=r("audio",{id:"alarmPlayer",src:"/apps/Pomodoro-Timer/Beep.mp3",loop:""},null,-1),Ce={setup(e){const t=g();document.addEventListener("visibilitychange",function(n){document.hidden&&localStorage.setItem("state",JSON.stringify(t.state))});function o(){t.subscribe((n,i)=>{localStorage.setItem("state",JSON.stringify(i))})}function s(){localStorage.getItem("state")&&(t.replaceState(Object.assign(t.state,JSON.parse(localStorage.getItem("state")))),t.commit("updateAppColor",{propName:"appAccentColor",propValue:t.state.appAccentColor})),t.state.isTimerRunning&&O(t.state)}return o(),s(),(n,i)=>{const l=S("router-view");return a(),d(y,null,[c(ce),r("div",Ae,[c(l,null,{default:f(({Component:E})=>[(a(),A(q,null,[(a(),A(W(E)))],1024))]),_:1})]),c(ve),c(be),Pe],64)}}};const xe={},Ve={class:"about-root"},Ne=H('<h1 data-v-0daa66b8>About</h1><h2 data-v-0daa66b8>The Pomodoro Technique</h2><p data-v-0daa66b8>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the 1980s. It uses a timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student.</p><h2 data-v-0daa66b8>Five steps of the Pomodoro Technique</h2><ol data-v-0daa66b8><li data-v-0daa66b8>Decide on a task and set the timer (25 minutes is common).</li><li data-v-0daa66b8>Work on the task during that time.</li><li data-v-0daa66b8>When the timer rings, take a short break (5-10 minutes is common).</li><li data-v-0daa66b8>Keep repeating Steps 1-3, but after your 4th task, take a long break instead of a short break (20-30 minutes is common).</li><li data-v-0daa66b8>Once the long break is finished, return to Step 1.</li></ol><p data-v-0daa66b8> Source: Wikipedia <a target="_blank" href="https://en.wikipedia.org/wiki/Pomodoro_Technique" data-v-0daa66b8>https://en.wikipedia.org/wiki/Pomodoro_Technique</a></p>',6),Re=[Ne];function Be(e,t){return a(),d("div",Ve,Re)}var Me=p(xe,[["render",Be],["__scopeId","data-v-0daa66b8"]]);const De={class:"progress-bar"},Fe={setup(e){const t=g(),o=T({get(){return t.state.progressPercent},set(s){}});return(s,n)=>(a(),d("div",De,[r("div",{class:"progress",style:K({width:u(o)+"%"})},null,4)]))}};var Oe=p(Fe,[["__scopeId","data-v-48c478f6"]]);const Ee={};function Le(e,t){return a(),d("span",null,$(e.$store.state.counter),1)}var We=p(Ee,[["render",Le],["__scopeId","data-v-078d43f0"]]);const qe={},He={class:"pp-btn-container"};function Ke(e,t){return a(),d("div",He,[I(r("i",{role:"button",onClick:t[0]||(t[0]=o=>e.$store.commit("toggleTimer")),class:"fa-solid fa-circle-play"},null,512),[[N,!e.$store.state.isTimerRunning]]),I(r("i",{role:"button",onClick:t[1]||(t[1]=o=>e.$store.commit("toggleTimer")),class:"fa-solid fa-circle-pause"},null,512),[[N,e.$store.state.isTimerRunning]])])}var je=p(qe,[["render",Ke],["__scopeId","data-v-d4913488"]]);const ze={},Ge={class:"dropup"},Je={key:0,class:"dropup-content"};function Ue(e,t){return a(),d("div",Ge,[r("button",{class:"dropup-btn",onClick:t[0]||(t[0]=o=>e.$store.commit("toggleResetDropup"))},"RESET"),e.$store.state.isResetDropupVisible?(a(),d("div",Je,[r("button",{class:"reset-btns",onClick:t[1]||(t[1]=o=>e.$store.commit("timerResetAll"))},"Reset All"),r("button",{class:"reset-btns",onClick:t[2]||(t[2]=o=>e.$store.commit("timerResetCurrent"))},"Reset Current")])):V("",!0)])}var Qe=p(ze,[["render",Ue],["__scopeId","data-v-7c74c258"]]);const Xe={class:"icon-bar-root"},Ye={class:"icons-container"},Ze={setup(e){const t=g(),o=T({get(){return t.state.progress.length},set(s){}});return(s,n)=>(a(),d("div",Xe,[r("div",Ye,[r("i",{class:m(["fa-solid fa-computer",{active:u(o)===1,completed:u(o)>1}])},null,2),r("i",{class:m(["fa-solid fa-mug-hot",{active:u(o)===2,completed:u(o)>2}])},null,2),r("i",{class:m(["fa-solid fa-computer",{active:u(o)===3,completed:u(o)>3}])},null,2),r("i",{class:m(["fa-solid fa-mug-hot",{active:u(o)===4,completed:u(o)>4}])},null,2),r("i",{class:m(["fa-solid fa-computer",{active:u(o)===5,completed:u(o)>5}])},null,2),r("i",{class:m(["fa-solid fa-mug-hot",{active:u(o)===6,completed:u(o)>6}])},null,2),r("i",{class:m(["fa-solid fa-computer",{active:u(o)===7,completed:u(o)>7}])},null,2),r("i",{class:m(["fa-solid fa-person-walking",{active:u(o)===8,completed:u(o)>8}])},null,2)])]))}};var et=p(Ze,[["__scopeId","data-v-44c15836"]]);const tt=e=>(h("data-v-327a4eb2"),e=e(),b(),e),ot={key:0,class:"welcome-msg"},rt=tt(()=>r("p",null,"Welcome!",-1)),st=_("Go to "),nt=_("Settings"),it=_(" to get started."),at={key:1,class:"home"},lt={class:"graphic"},ct={class:"counter"},ut={setup(e){return(t,o)=>{const s=S("router-link");return t.$store.state.isFirstVisit?(a(),d("div",ot,[rt,r("p",null,[st,c(s,{to:"/settings"},{default:f(()=>[nt]),_:1}),it])])):(a(),d("div",at,[r("div",lt,[c(et),c(Oe)]),r("div",ct,[c(We),c(je),c(Qe)])]))}}};var dt=p(ut,[["__scopeId","data-v-327a4eb2"]]);const pt=["for"],_t=["id","min","max"],x={props:{id:String,label:String,min:Number,max:Number},setup(e){const t=e,o=g(),s=T({get(){return o.state[t.id]},set(n){o.commit("updateTimeSetting",{propName:t.id,propValue:n})}});return(n,i)=>(a(),d(y,null,[r("label",{for:e.id,class:"settings-label"},$(e.label),9,pt),I(r("input",{id:e.id,type:"number",min:e.min,max:e.max,"onUpdate:modelValue":i[0]||(i[0]=l=>R(s)?s.value=l:null)},null,8,_t),[[j,u(s)]])],64))}};const mt=["for"],vt={class:"dot-container"},gt={props:{id:String,label:String},setup(e){const t=e,o=g();function s(n){o.commit("updateAppColor",{propName:t.id,propValue:n})}return(n,i)=>(a(),d(y,null,[r("label",{for:e.id,class:"settings-label"},$(e.label),9,mt),r("div",vt,[r("div",{class:"blue-dot",onClick:i[0]||(i[0]=l=>s("#3b83b0"))}),r("div",{class:"red-dot",onClick:i[1]||(i[1]=l=>s("#c93232"))}),r("div",{class:"green-dot",onClick:i[2]||(i[2]=l=>s("#008000"))})])],64))}};var ft=p(gt,[["__scopeId","data-v-ff3cb89c"]]);const ht=e=>(h("data-v-49d46a8f"),e=e(),b(),e),bt=["for"],$t=ht(()=>r("i",{class:"fa-solid fa-volume-high"},null,-1)),kt=["id"],St={props:{id:String,label:String},setup(e){const t=e,o=g(),s=T({get(){return o.state[t.id]},set(n){o.commit("toggleAlarmSound")}});return(n,i)=>(a(),d(y,null,[r("label",{for:e.id,class:"settings-label"},[_($(e.label)+" ",1),$t],8,bt),I(r("input",{id:e.id,class:"toggle toggle-spacing",type:"checkbox","onUpdate:modelValue":i[0]||(i[0]=l=>R(s)?s.value=l:null)},null,8,kt),[[z,u(s)]])],64))}};var yt=p(St,[["__scopeId","data-v-49d46a8f"]]);const v=e=>(h("data-v-3b945b77"),e=e(),b(),e),Tt=v(()=>r("span",null,"min",-1)),It=v(()=>r("br",null,null,-1)),wt=v(()=>r("span",null,"min",-1)),At=v(()=>r("br",null,null,-1)),Pt=v(()=>r("span",null,"min",-1)),Ct=v(()=>r("br",null,null,-1)),xt=v(()=>r("br",null,null,-1)),Vt=v(()=>r("br",null,null,-1)),Nt=_("LET'S GO!"),Rt={setup(e){const t=g();return t.commit("setInitialTimer"),t.commit("setFirstVisitStatus",{propValue:!1}),(o,s)=>{const n=S("router-link");return a(),d("form",null,[c(x,{min:1,max:120,id:"workInterval",label:"Work Interval"}),Tt,It,c(x,{min:1,max:120,id:"shortBreak",label:"Short break"}),wt,At,c(x,{min:1,max:120,id:"longBreak",label:"Long break"}),Pt,Ct,c(yt,{id:"prefersAlarmSound",label:"Alarm Sound"}),xt,c(ft,{id:"appAccentColor",label:"App color"}),Vt,c(n,{class:"lets-go",to:"/"},{default:f(()=>[Nt]),_:1}),r("button",{type:"button",class:"reset-btn",onClick:s[0]||(s[0]=i=>o.$store.commit("restoreDefaultSettings"))},"RESTORE DEFAULTS")])}}};var Bt=p(Rt,[["__scopeId","data-v-3b945b77"]]);const Mt=[{path:"/",name:"Home",component:dt},{path:"/about",name:"About",component:Me},{path:"/settings",name:"Settings",component:Bt}],Dt=G({history:J(),routes:Mt});var Ft=U({state:{counter:"25:00",time:0,workInterval:25,shortBreak:5,longBreak:30,isTimerRunning:!1,isTimerInProgress:!1,isShowFinishedPopup:!1,isResetDropupVisible:!1,isFirstVisit:!0,prefersAlarmSound:!1,progress:["workInterval"],finishedMessage:"",appAccentColor:"#3b83b0",progressPercent:0},mutations:{setInitialTimer(e){k(e)},setFirstVisitStatus(e,t){e.isFirstVisit=t.propValue},updateTimeSetting(e,t){e[t.propName]=t.propValue,e.isTimerInProgress||k(e)},updateAppColor(e,t){e[t.propName]=t.propValue,we(t.propValue)},toggleAlarmSound(e){e.prefersAlarmSound=!e.prefersAlarmSound},toggleTimer(e){e.isTimerRunning?w(e):O(e)},toggleResetDropup(e){e.isResetDropupVisible=!e.isResetDropupVisible},setProgressBarPercent(e,t){e.progressPercent=t.propValue},prepareNextTimerMode(e){Ie(),e.isShowFinishedPopup=!1,k(e)},timerResetCurrent(e){w(e);let t=e.progress[e.progress.length-1];this.commit("updateTimeSetting",{propName:t,propValue:e[t]}),k(e),e.isResetDropupVisible=!1},timerResetAll(e){F(e)},restoreDefaultSettings(e){this.commit("updateTimeSetting",{propName:"workInterval",propValue:25}),this.commit("updateTimeSetting",{propName:"shortBreak",propValue:5}),this.commit("updateTimeSetting",{propName:"longBreak",propValue:30}),e.prefersAlarmSound=!1,this.commit("updateAppColor",{propName:"appAccentColor",propValue:"#3b83b0"})}},actions:{},modules:{}});Q(Ce).use(Dt).use(Ft).mount("#app");