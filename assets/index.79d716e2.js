import{r as T,o as c,c as p,a as r,b as u,w as v,d as _,p as y,e as S,f as P,t as b,g as N,T as W,u as f,F as I,h as q,K as H,i as K,j as h,n as U,k as a,l as k,v as R,m,q as M,s as C,x as j,y as z,z as G,A as J,B as Q}from"./vendor.ad735835.js";const X=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}};X();var Y="/Vue3_PomodoroTimer/stopwatch.png";var d=(e,t)=>{for(const[o,s]of t)e[o]=s;return e};const Z={},ee=e=>(y("data-v-8995e8ca"),e=e(),S(),e),te=ee(()=>r("div",{class:"icon-container"},[r("div",{class:"circle"}),r("img",{src:Y,alt:"Picture of a stopwatch"})],-1)),oe=_(" Pomodoro Timer "),re=[te,oe],se={class:"header-nav"},ne=_("Home"),ie=_("About"),ae=_("Settings");function le(e,t){const o=T("router-link");return c(),p("header",null,[r("h1",{onClick:t[0]||(t[0]=s=>e.$router.push("/"))},re),r("nav",se,[u(o,{class:"link",to:"/"},{default:v(()=>[ne]),_:1}),u(o,{class:"link",to:"/about"},{default:v(()=>[ie]),_:1}),u(o,{class:"link",to:"/settings"},{default:v(()=>[ae]),_:1})])])}var ce=d(Z,[["render",le],["__scopeId","data-v-8995e8ca"]]);const ue={};function pe(e,t){return c(),p("footer",null,"Steve's Pomodoro Timer demo app")}var de=d(ue,[["render",pe],["__scopeId","data-v-60b706bc"]]);const _e={},me={class:"finished-popup-content"};function ge(e,t){return c(),P(W,{to:"body"},[e.$store.state.isShowFinishedPopup?(c(),p("div",{key:0,onClick:t[1]||(t[1]=o=>e.$store.commit("prepareNextTimerMode")),class:"finished-popup"},[r("div",me,[r("p",null,b(e.$store.state.finishedMessage),1),r("button",{onClick:t[0]||(t[0]=o=>e.$store.commit("prepareNextTimerMode"))},"OK")])])):N("",!0)])}var fe=d(_e,[["render",ge],["__scopeId","data-v-53102266"]]);const ve={class:"page-container"},he=r("audio",{id:"alarmPlayer",src:"/Vue3_PomodoroTimer/Beep.mp3",loop:""},null,-1),be={setup(e){const t=f();function o(){t.subscribe((i,l)=>{localStorage.setItem("state",JSON.stringify(l))})}function s(){localStorage.getItem("state")&&(t.replaceState(Object.assign(t.state,JSON.parse(localStorage.getItem("state")))),t.commit("updateAppColor",{propName:"appAccentColor",propValue:t.state.appAccentColor}))}function n(){o(),s()}return n(),(i,l)=>{const A=T("router-view");return c(),p(I,null,[u(ce),r("div",ve,[u(A,null,{default:v(({Component:E})=>[(c(),P(H,null,[(c(),P(q(E)))],1024))]),_:1})]),u(de),u(fe),he],64)}}};const ke={},$e={class:"about-root"},Te=K('<h1 data-v-3024a1ca>About</h1><h2 data-v-3024a1ca>The Pomodoro Technique</h2><p data-v-3024a1ca>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the 1980s. It uses a timer to break work into intervals, typically 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer Cirillo used as a university student.</p><h2 data-v-3024a1ca>Five steps of the Pomodoro Technique</h2><ol data-v-3024a1ca><li data-v-3024a1ca>Decide on a task and set the timer (25 minutes is common).</li><li data-v-3024a1ca>Work on the task during that time.</li><li data-v-3024a1ca>When the timer rings, take a short break (5-10 minutes is common).</li><li data-v-3024a1ca>Keep repeating Steps 1-3, but after your 4th task, take a long break instead of a short break (20-30 minutes is common).</li><li data-v-3024a1ca>Once the long break is finished, return to Step 1.</li></ol><p data-v-3024a1ca> Source: Wikipedia <a target="_blank" href="https://en.wikipedia.org/wiki/Pomodoro_Technique" data-v-3024a1ca>https://en.wikipedia.org/wiki/Pomodoro_Technique</a></p>',6),ye=[Te];function Se(e,t){return c(),p("div",$e,ye)}var Ie=d(ke,[["render",Se],["__scopeId","data-v-3024a1ca"]]);const we={class:"progress-bar"},Ae={setup(e){const t=f(),o=h({get(){return t.state.progressPercent},set(s){}});return(s,n)=>(c(),p("div",we,[r("div",{class:"progress",style:U({width:a(o)+"%"})},null,4)]))}};var Pe=d(Ae,[["__scopeId","data-v-69beb373"]]);const Ce={};function Ve(e,t){return c(),p("span",null,b(e.$store.state.counter),1)}var xe=d(Ce,[["render",Ve],["__scopeId","data-v-53539cbe"]]);const Be={},Ne={class:"pp-btn-container"};function Re(e,t){return c(),p("div",Ne,[k(r("i",{role:"button",onClick:t[0]||(t[0]=o=>e.$store.commit("toggleTimer")),class:"fa-solid fa-circle-play"},null,512),[[R,!e.$store.state.isTimerRunning]]),k(r("i",{role:"button",onClick:t[1]||(t[1]=o=>e.$store.commit("toggleTimer")),class:"fa-solid fa-circle-pause"},null,512),[[R,e.$store.state.isTimerRunning]])])}var Me=d(Be,[["render",Re],["__scopeId","data-v-cc5e3a10"]]);const De={},Fe={class:"dropup"},Oe={key:0,class:"dropup-content"};function Le(e,t){return c(),p("div",Fe,[r("button",{class:"dropup-btn",onClick:t[0]||(t[0]=o=>e.$store.commit("toggleResetDropup"))},"RESET"),e.$store.state.isResetDropupVisible?(c(),p("div",Oe,[r("button",{class:"reset-btns",onClick:t[1]||(t[1]=o=>e.$store.commit("timerResetAll"))},"Reset All"),r("button",{class:"reset-btns",onClick:t[2]||(t[2]=o=>e.$store.commit("timerResetCurrent"))},"Reset Current")])):N("",!0)])}var Ee=d(De,[["render",Le],["__scopeId","data-v-3a88c052"]]);const We={class:"icon-bar-root"},qe={class:"icons-container"},He={setup(e){const t=f(),o=h({get(){return t.state.progress.length},set(s){}});return(s,n)=>(c(),p("div",We,[r("div",qe,[r("i",{class:m(["fa-solid fa-computer",{active:a(o)===1,completed:a(o)>1}])},null,2),r("i",{class:m(["fa-solid fa-mug-hot",{active:a(o)===2,completed:a(o)>2}])},null,2),r("i",{class:m(["fa-solid fa-computer",{active:a(o)===3,completed:a(o)>3}])},null,2),r("i",{class:m(["fa-solid fa-mug-hot",{active:a(o)===4,completed:a(o)>4}])},null,2),r("i",{class:m(["fa-solid fa-computer",{active:a(o)===5,completed:a(o)>5}])},null,2),r("i",{class:m(["fa-solid fa-mug-hot",{active:a(o)===6,completed:a(o)>6}])},null,2),r("i",{class:m(["fa-solid fa-computer",{active:a(o)===7,completed:a(o)>7}])},null,2),r("i",{class:m(["fa-solid fa-person-walking",{active:a(o)===8,completed:a(o)>8}])},null,2)])]))}};var Ke=d(He,[["__scopeId","data-v-258e4f32"]]);const Ue=e=>(y("data-v-1ae6913d"),e=e(),S(),e),je={key:0,class:"welcome-msg"},ze=Ue(()=>r("p",null,"Welcome!",-1)),Ge=_("Go to "),Je=_("Settings"),Qe=_(" to get started."),Xe={key:1,class:"home"},Ye={class:"graphic"},Ze={class:"counter"},et={setup(e){return(t,o)=>{const s=T("router-link");return t.$store.state.isFirstVisit?(c(),p("div",je,[ze,r("p",null,[Ge,u(s,{to:"/settings"},{default:v(()=>[Je]),_:1}),Qe])])):(c(),p("div",Xe,[r("div",Ye,[u(Ke),u(Pe)]),r("div",Ze,[u(xe),u(Me),u(Ee)])]))}}};var tt=d(et,[["__scopeId","data-v-1ae6913d"]]);const ot=["for"],rt=["id","min","max"],V={props:{id:String,label:String,min:Number,max:Number},setup(e){const t=e,o=f(),s=h({get(){return o.state[t.id]},set(n){o.commit("updateTimeSetting",{propName:t.id,propValue:n})}});return(n,i)=>(c(),p(I,null,[r("label",{for:e.id,class:"settings-label"},b(e.label),9,ot),k(r("input",{id:e.id,type:"number",min:e.min,max:e.max,"onUpdate:modelValue":i[0]||(i[0]=l=>C(s)?s.value=l:null)},null,8,rt),[[M,a(s)]])],64))}};const st=["for"],nt=["id"],it={props:{id:String,label:String},setup(e){const t=e,o=f(),s=h({get(){return o.state[t.id]},set(i){o.commit("updateAppColor",{propName:t.id,propValue:i})}}),n=h({get(){return o.state.isColorTooLight},set(i){}});return(i,l)=>(c(),p(I,null,[r("label",{for:e.id,class:"settings-label"},b(e.label),9,st),k(r("input",{id:e.id,type:"color","onUpdate:modelValue":l[0]||(l[0]=A=>C(s)?s.value=A:null)},null,8,nt),[[M,a(s)]]),r("p",{class:m({warn:a(n)})},"* To ensure contrast, lighter shades are not applied",2)],64))}};var at=d(it,[["__scopeId","data-v-a89de1f6"]]);const lt=e=>(y("data-v-571fa9b4"),e=e(),S(),e),ct=["for"],ut=lt(()=>r("i",{class:"fa-solid fa-volume-high"},null,-1)),pt=["id"],dt={props:{id:String,label:String},setup(e){const t=e,o=f(),s=h({get(){return o.state[t.id]},set(n){o.commit("toggleAlarmSound")}});return(n,i)=>(c(),p(I,null,[r("label",{for:e.id,class:"settings-label"},[_(b(e.label)+" ",1),ut],8,ct),k(r("input",{id:e.id,class:"toggle toggle-spacing",type:"checkbox","onUpdate:modelValue":i[0]||(i[0]=l=>C(s)?s.value=l:null)},null,8,pt),[[j,a(s)]])],64))}};var _t=d(dt,[["__scopeId","data-v-571fa9b4"]]);const g=e=>(y("data-v-b7c3f730"),e=e(),S(),e),mt=g(()=>r("span",null,"min",-1)),gt=g(()=>r("br",null,null,-1)),ft=g(()=>r("span",null,"min",-1)),vt=g(()=>r("br",null,null,-1)),ht=g(()=>r("span",null,"min",-1)),bt=g(()=>r("br",null,null,-1)),kt=g(()=>r("br",null,null,-1)),$t=g(()=>r("br",null,null,-1)),Tt=_("LET'S GO!"),yt={setup(e){const t=f();return t.commit("setInitialTimer"),t.commit("setFirstVisitStatus",{propValue:!1}),(o,s)=>{const n=T("router-link");return c(),p("form",null,[u(V,{min:1,max:120,id:"workInterval",label:"Work Interval"}),mt,gt,u(V,{min:1,max:120,id:"shortBreak",label:"Short break"}),ft,vt,u(V,{min:1,max:120,id:"longBreak",label:"Long break"}),ht,bt,u(_t,{id:"prefersAlarmSound",label:"Alarm Sound"}),kt,u(at,{id:"appAccentColor",label:"App color"}),$t,u(n,{class:"lets-go",to:"/"},{default:v(()=>[Tt]),_:1}),r("button",{type:"button",class:"reset-btn",onClick:s[0]||(s[0]=i=>o.$store.commit("restoreDefaultSettings"))},"RESTORE DEFAULTS")])}}};var St=d(yt,[["__scopeId","data-v-b7c3f730"]]);const It=[{path:"/",name:"Home",component:tt},{path:"/about",name:"About",component:Ie},{path:"/settings",name:"Settings",component:St}],wt=z({history:G("/Vue3_PomodoroTimer/"),routes:It});function D(e){return document.getElementById(e)}function F(e){return new Date(e).toISOString().slice(14,19)}let x=null;function At(e,t){x=setInterval(function(){document.title.startsWith("\u23F0")?document.title=e:document.title="\u23F0\u23F0\u23F0\u23F0\u23F0\u23F0\u23F0\u23F0\u23F0\u23F0"},t)}function Pt(){x?clearInterval(x):alert("Error:  something went wrong when trying to stop the title alarm."),document.title="Pomodoro Timer"}function Ct(e){return e[e.length-1]==="workInterval"?e.length===7?"longBreak":"shortBreak":"workInterval"}function O(e){if(e==="workInterval")return"work interval";if(e==="shortBreak")return"short break";if(e==="longBreak")return"long break"}function Vt(e){if(e==="workInterval")return"Work Time";if(e==="shortBreak")return"Short Break Time";if(e==="longBreak")return"Long Break Time"}function L(e){w(e),e.isTimerInProgress=!1,e.progress=["workInterval"],$(e),e.isResetDropupVisible=!1}function xt(e,t){e.counter="00:00",e.time=0,e.progressPercent=100;let o=e.progress[e.progress.length-1],s=Ct(e.progress);e.progress.push(s);let n=O(o),i=O(s);e.finishedMessage=`The ${n} timer has finished. Next up is a ${i}.`,e.isShowFinishedPopup=!0;let l=Vt(s);At(l,500),e.prefersAlarmSound&&t.play(),w(e)}function $(e){if(e.progress.length===9)L(e);else{let t=e.progress[e.progress.length-1];e.time=e[t]*6e4,e.counter=F(e.time),e.progressPercent=0}}function Bt(){D("alarmPlayer").pause(),Pt()}let B=null;function Nt(e){e.isTimerRunning=!0,e.isTimerInProgress=!0;let t=e.progress[e.progress.length-1],o=e[t]*6e4,s=e.time,n=Date.now();B=setInterval(function(){let i=Date.now()-n,l=s-i;if(l<=0){xt(e,D("alarmPlayer"));return}e.time=l,e.counter=F(l),e.progressPercent=(o-l)/o*100},200)}function w(e){B&&(clearInterval(B),e.isTimerRunning=!1)}function Rt(e){e=e.slice(1);let t=parseInt(e.substr(0,2),16),o=parseInt(e.substr(2,2),16),s=parseInt(e.substr(4,2),16);return!((t*299+o*587+s*114)/1e3>=128)}function Mt(e){return Rt(e)?(document.querySelector(":root").style.setProperty("--app-accent-color",e),!0):!1}var Dt=J({state:{counter:"25:00",time:0,workInterval:25,shortBreak:5,longBreak:30,isTimerRunning:!1,isTimerInProgress:!1,isShowFinishedPopup:!1,isResetDropupVisible:!1,isFirstVisit:!0,isColorTooLight:!1,prefersAlarmSound:!1,progress:["workInterval"],finishedMessage:"",appAccentColor:"#3b83b0",progressPercent:0},mutations:{setInitialTimer(e){$(e)},setFirstVisitStatus(e,t){e.isFirstVisit=t.propValue},updateTimeSetting(e,t){e[t.propName]=t.propValue,e.isTimerInProgress||$(e)},updateAppColor(e,t){e[t.propName]=t.propValue;let o=Mt(t.propValue);e.isColorTooLight=!o},toggleAlarmSound(e){e.prefersAlarmSound=!e.prefersAlarmSound},toggleTimer(e){e.isTimerRunning?w(e):Nt(e)},toggleResetDropup(e){e.isResetDropupVisible=!e.isResetDropupVisible},setProgressBarPercent(e,t){e.progressPercent=t.propValue},prepareNextTimerMode(e){Bt(),e.isShowFinishedPopup=!1,$(e)},timerResetCurrent(e){w(e);let t=e.progress[e.progress.length-1];this.commit("updateTimeSetting",{propName:t,propValue:e[t]}),$(e),e.isResetDropupVisible=!1},timerResetAll(e){L(e)},restoreDefaultSettings(e){this.commit("updateTimeSetting",{propName:"workInterval",propValue:25}),this.commit("updateTimeSetting",{propName:"shortBreak",propValue:5}),this.commit("updateTimeSetting",{propName:"longBreak",propValue:30}),e.prefersAlarmSound=!1,this.commit("updateAppColor",{propName:"appAccentColor",propValue:"#3b83b0"})}},actions:{},modules:{}});Q(be).use(wt).use(Dt).mount("#app");
