(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,a){t.exports={form:"TaskEditor_form__2XWrW",label:"TaskEditor_label__33cky",input:"TaskEditor_input__3RReX"}},14:function(t,e,a){t.exports={list:"TaskList_list__1D3D_"}},15:function(t,e,a){t.exports={input:"TaskFilter_input__1bl9i"}},17:function(t,e,a){t.exports=a(32)},2:function(t,e,a){t.exports={task:"Task_task__2t59W",lowPriority:"Task_lowPriority__2abEB",normalPriority:"Task_normalPriority__1oi6H",highPriority:"Task_highPriority__CpWt_",text:"Task_text__3W0AQ",actions:"Task_actions__3Sydh"}},31:function(t,e,a){},32:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(12),i=a.n(o),l=a(16),s=a(1),c=a(5),u=a(6),p=a(8),m=a(7),d=a(9),f=a(13),h=a.n(f),k=a(4),y=function(t){var e=t.options,a=t.value,n=t.onChange;return r.a.createElement("select",{name:"priority",value:a,onChange:n},e.map(function(t){return r.a.createElement("option",{key:t,value:t},t)}))},b=Object.freeze({LOW:"low",NORMAL:"normal",HIGH:"high"}),v=a(10),g=a.n(v),_=Object.values(b),E=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).state={text:"",priority:b.NORMAL},a.handleChange=function(t){a.setState(Object(k.a)({},t.target.name,t.target.value))},a.handleSubmit=function(t){t.preventDefault(),a.props.onAddTask(Object(s.a)({},a.state)),a.setState({text:"",priority:b.NORMAL})},a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.state,e=t.text,a=t.priority;return r.a.createElement("form",{className:g.a.form,onSubmit:this.handleSubmit},r.a.createElement("input",{className:g.a.input,type:"text",name:"text",value:e,onChange:this.handleChange,placeholder:"Enter task content..."}),r.a.createElement("label",{className:g.a.label},"Select task priority:",r.a.createElement(y,{options:_,value:a,onChange:this.handleChange})),r.a.createElement("button",{type:"submit"},"Create"))}}]),e}(n.Component),C=a(2),O=a.n(C),T=Object.values(b),j=function(t){var e=t.id,a=t.text,n=t.priority,o=t.completed,i=t.onDeleteTask,l=t.onUpateCompleted,s=t.onUpdatePriority;return r.a.createElement("div",{className:"".concat(O.a.task," ").concat(O.a["".concat(n,"Priority")])},r.a.createElement("p",{className:O.a.text},a),r.a.createElement("hr",null),r.a.createElement("div",{className:O.a.actions},r.a.createElement("button",{type:"button",onClick:i},"Delete"),r.a.createElement(y,{options:T,value:n,onChange:function(t){return s(e,t.target.value)}}),r.a.createElement("label",null,"Completed:",r.a.createElement("input",{type:"checkbox",checked:o,onChange:l}))))},x=a(14),S=a.n(x),w=function(t){var e=t.items,a=t.onDeleteTask,n=t.onUpateCompleted,o=t.onUpdatePriority;return e.length>0&&r.a.createElement("ul",{className:S.a.list},e.map(function(t){return r.a.createElement("li",{key:t.id},r.a.createElement(j,Object.assign({},t,{onDeleteTask:function(){return a(t.id)},onUpateCompleted:function(){return n(t.id)},onUpdatePriority:o})))}))},N=a(15),P=a.n(N),D=function(t){var e=t.value,a=t.onChangeFilter;return r.a.createElement("input",{type:"text",className:P.a.input,value:e,onChange:a,placeholder:"Type to filter tasks..."})},U={maxWidth:1200,minWidth:800,marginLeft:"auto",marginRight:"auto"},A=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).state={tasks:[],filter:""},a.changeFilter=function(t){a.setState({filter:t.target.value})},a.addTask=function(t){var e=Object(s.a)({},t,{id:h.a.generate(),completed:!1});a.setState(function(t){return{tasks:[].concat(Object(l.a)(t.tasks),[e])}})},a.deleteTask=function(t){a.setState(function(e){return{tasks:e.tasks.filter(function(e){return e.id!==t})}})},a.updateCompleted=function(t){a.setState(function(e){return{tasks:e.tasks.map(function(e){return e.id===t?Object(s.a)({},e,{completed:!e.completed}):e})}})},a.updatePriority=function(t,e){a.setState(function(a){return{tasks:a.tasks.map(function(a){return a.id===t?Object(s.a)({},a,{priority:e}):a})}})},a}return Object(d.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){console.log("componentDidMount");var t=localStorage.getItem("tasks");if(t){var e=JSON.parse(t);this.setState({tasks:e})}}},{key:"componentDidUpdate",value:function(t,e){console.log("componentDidUpdate");var a=this.state.tasks;e.tasks!==a&&localStorage.setItem("tasks",JSON.stringify(a))}},{key:"render",value:function(){console.log("render");var t=this.state,e=t.tasks,a=t.filter,n=function(t,e){return t.filter(function(t){return t.text.toLowerCase().includes(e.toLowerCase())})}(e,a);return r.a.createElement("div",{style:U},r.a.createElement(E,{onAddTask:this.addTask}),r.a.createElement("hr",null),r.a.createElement(D,{value:a,onChangeFilter:this.changeFilter}),r.a.createElement(w,{items:n,onDeleteTask:this.deleteTask,onUpateCompleted:this.updateCompleted,onUpdatePriority:this.updatePriority}))}}]),e}(n.Component);a(31);i.a.render(r.a.createElement(A,null),document.querySelector("#root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.e70ec0a2.chunk.js.map