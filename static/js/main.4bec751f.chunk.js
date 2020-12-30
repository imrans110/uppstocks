(this.webpackJsonpuppstocks=this.webpackJsonpuppstocks||[]).push([[0],{159:function(e,t,n){},260:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n(0),r=n.n(a),o=n(40),i=n.n(o),s=(n(159),n(160),n(32)),l=n(48),u=n(142),j=n(277),b=n(86),d=n(276),h=n(273),O=n(271),m=n(55),f=n.n(m),g=n(134),p=n.n(g),v=n(272),x=n(274),k=n(58),C=n(135),y=function(e){return{labels:e.map((function(e){return f()(e.date).format("DD MMM h:mm a")})),datasets:[{label:"# Stock Price ",data:e.map((function(e){return e.value.toLocaleString()})),fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]}},D={scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},w=function(e){var t=e.stockDetails;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(C.Line,{data:y(t),options:D})})};function S(){var e=Object(l.a)(["\n  margin: 0 !important;\n"]);return S=function(){return e},e}var A=function(e){var t=e.stockDetails,n=e.stock;return Object(c.jsx)(v.a,{trigger:Object(c.jsx)(x.a,{basic:!0,children:Object(c.jsx)(L,{name:"eye"})}),header:n.toUpperCase()+" Chart History",content:Object(c.jsx)(w,{stockDetails:t}),actions:[{key:"done",content:"Close",positive:!0}]})},L=Object(s.b)(k.a)(S());function M(){var e=Object(l.a)(["\n  margin: auto !important;\n  width: 75% !important;\n  margin-top: 15px !important;\n"]);return M=function(){return e},e}f.a.extend(p.a);var E=function(e){var t=e.stockDetails,n=e.negative,a=e.positive;if(n||a){var r=function(e){var t="";if(e.length>1){var n=e[e.length-1].value,c=e[e.length-2].value;t=0!==n?0!==c?(n-c)/c*100:100*n:100*-c}return Math.floor(t)}(t);return Object(c.jsxs)(b.a,{color:r>0?"green":"red",children:["  (".concat([r],")")," "]})}return""},H=function(e){var t,n=e.stockData;return Object(c.jsx)(d.a,{centered:!0,children:Object(c.jsx)(d.a.Row,{centered:!0,children:Object(c.jsx)(d.a.Column,{textAlign:"center",tablet:12,mobile:16,children:Object(c.jsxs)(F,{celled:!0,collapsing:!0,children:[Object(c.jsx)(h.a.Header,{children:Object(c.jsxs)(h.a.Row,{children:[Object(c.jsx)(h.a.HeaderCell,{children:"Ticker"}),Object(c.jsx)(h.a.HeaderCell,{children:"Price (Change %)"}),Object(c.jsx)(h.a.HeaderCell,{children:"Last Update"}),Object(c.jsx)(h.a.HeaderCell,{textAlign:"center",children:"Actions"})]})}),Object(c.jsx)(h.a.Body,{children:(t=n,0===Object.keys(t).length&&t.constructor===Object?Object(c.jsx)(O.a,{children:" No Data "}):Object.keys(n).map((function(e){var t,a=(t=n[e]).length>1&&t[t.length-1].value<t[t.length-2].value,r=function(e){return e.length>1&&e[e.length-1].value>e[e.length-2].value}(n[e]);return Object(c.jsxs)(h.a.Row,{negative:a,positive:r,children:[Object(c.jsxs)(h.a.Cell,{children:[e.toUpperCase()," "]}),Object(c.jsx)(h.a.Cell,{children:Object(c.jsx)(d.a,{style:{width:"100%"},children:Object(c.jsxs)(d.a.Row,{children:[Object(c.jsx)(d.a.Column,{tablet:8,mobile:8,children:n[e].slice(-1)[0].value.toLocaleString()}),Object(c.jsx)(d.a.Column,{tablet:8,mobile:8,children:Object(c.jsx)(E,{stockDetails:n[e],negative:a,positive:r})})]})})}),Object(c.jsx)(h.a.Cell,{children:f()().to(f()(n[e].slice(-1)[0].date))}),Object(c.jsx)(h.a.Cell,{textAlign:"center",children:Object(c.jsx)(A,{stockDetails:n[e],stock:e})})]},e)})))})]})})})})},F=Object(s.b)(h.a)(M()),P=n(139),R=n(140),T=n(84),U=n(144),B=n(141),J=n(143),I=n(145),N=function(e,t){var n,c=Object(I.a)({},e),a={},r=Object(J.a)(t);try{for(r.s();!(n=r.n()).done;){var o=n.value;a[o[0]]=o[1]}}catch(i){r.e(i)}finally{r.f()}return Object.keys(a).forEach((function(e){c[e]?c[e].push({value:a[e],date:Date.now()}):c[e]=[{value:a[e],date:Date.now()}]})),c},W=function(e){Object(U.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(P.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={ws:null,stockData:[]},e.timeout=250,e.connect=function(){var t,n=new WebSocket("ws://stocks.mnet.website/"),c=Object(T.a)(e);n.onopen=function(){console.log("connected websocket main component"),e.setState({ws:n}),c.timeout=250,clearTimeout(t)},n.onclose=function(n){console.log("Socket is closed. Reconnect will be attempted in ".concat(Math.min(10,(c.timeout+c.timeout)/1e3)," second."),n.reason),c.timeout=c.timeout+c.timeout,t=setTimeout(e.check,Math.min(1e4,c.timeout))},n.onerror=function(e){console.error("Socket encountered error: ",e.message,"Closing socket"),n.close()},n.onmessage=function(t){if(t&&t.data){var n=N(e.state.stockData,JSON.parse(t.data));e.setState({stockData:n})}}},e.check=function(){var t=e.state.ws;t&&t.readyState!==WebSocket.CLOSED||e.connect()},e}return Object(R.a)(n,[{key:"componentDidMount",value:function(){this.connect()}},{key:"render",value:function(){var e=this;return r.a.Children.map(this.props.children,(function(t){return r.a.cloneElement(t,{stockData:e.state.stockData})}))}}]),n}(a.Component),z=n.p+"static/media/Uppstocks.f9ff8a85.png";function Z(){var e=Object(l.a)(["\n  background: "," !important;\n  min-height: 100% !important;\n"]);return Z=function(){return e},e}var q=function(){return Object(c.jsxs)(G,{textAlign:"center",children:[Object(c.jsx)(u.a,{src:z,size:"tiny",centered:!0}),Object(c.jsx)(W,{children:Object(c.jsx)(H,{})})]})},G=Object(s.b)(j.a)(Z(),(function(e){return e.theme.secondary})),K={primary:"#4C051E",secondary:"rgb(36 55 67)",tertiary:"#CED3DC",altPrimary:"#556177"};var Q=function(){return Object(c.jsx)(s.a,{theme:K,children:Object(c.jsx)(q,{})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,279)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};i.a.render(Object(c.jsx)(Q,{}),document.getElementById("root")),V()}},[[260,1,2]]]);
//# sourceMappingURL=main.4bec751f.chunk.js.map