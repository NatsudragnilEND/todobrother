import{f as _,an as v,a5 as b,a4 as h,r as u,a6 as r,a7 as i,a8 as t,ag as k,a9 as s,af as p,ao as T,ap as C,aq as m,ar as Q,as as V,aa as w,ab as f,M as I,at as N,au as S,ac as $,ad as q,av as x,aj as B}from"./index.f85b69b1.js";import{c as K,b as O,Q as c,a as J}from"./QItemLabel.7d876f0f.js";import{Q as L}from"./QPage.ab370e6f.js";function U(){return _(v)}const j=h({setup(){const e=U();let l=u("");const o=u(JSON.parse(localStorage.getItem("tasks"))||[]);return{tasks:o,deleteTask(n){e.dialog({title:"Confirm",message:"really delete?",cancel:!0,persistent:!0}).onOk(()=>{o.value.splice(n,1)[0],localStorage.setItem("tasks",JSON.stringify(o.value)),e.notify("Task deleted")})},newTask:l,addTask:()=>{const n=l.value.trim();n?(o.value.push({title:n,done:!1}),localStorage.setItem("tasks",JSON.stringify(o.value))):e.notify("Please add a task"),l.value=""}}}}),z={class:"row q-pa-sm bg-primary"},D={key:0,class:"no-tasks absolute-center"},M=k("div",{class:"text-h5 text-primary text-center"}," No tasks ",-1);function P(e,l,o,g,n,A){return r(),i(L,{class:"bg-grey-3 column"},{default:t(()=>[k("div",z,[s(C,{modelValue:e.newTask,"onUpdate:modelValue":l[0]||(l[0]=a=>e.newTask=a),onKeyup:T(e.addTask,["enter"]),class:"col",square:"",filled:"",placeholder:"Add task",dense:"","bg-color":"white"},{append:t(()=>[s(p,{onClick:e.addTask,round:"",dense:"",flat:"",icon:"add"},null,8,["onClick"])]),_:1},8,["modelValue","onKeyup"])]),s(K,{separator:"",bordered:"",class:"bg-white"},{default:t(()=>[(r(!0),m(V,null,Q(e.tasks,(a,y)=>I((r(),i(O,{clickable:"",key:a.index,class:N({"done bg-blue-1":a.done}),onClick:d=>a.done=!a.done},{default:t(()=>[s(c,{avatar:""},{default:t(()=>[s(S,{class:"no-pointer-events",modelValue:a.done,"onUpdate:modelValue":d=>a.done=d,color:"primary"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),s(c,null,{default:t(()=>[s(J,null,{default:t(()=>[$(q(a.title),1)]),_:2},1024)]),_:2},1024),a.done?(r(),i(c,{key:0},{default:t(()=>[s(p,{onClick:x(d=>e.deleteTask(y),["stop"]),color:"red",class:"nb",icon:"delete",dense:"",flat:"",round:""},null,8,["onClick"])]),_:2},1024)):f("",!0)]),_:2},1032,["class","onClick"])),[[B]])),128))]),_:1}),e.tasks.length?f("",!0):(r(),m("div",D,[s(w,{name:"check",size:"100px",color:"primary"}),M]))]),_:1})}var G=b(j,[["render",P]]);export{G as default};