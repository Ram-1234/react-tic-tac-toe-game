(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),i=n.n(c),l=(n(6),n(8)),o=n(1),u=n(2),s=n(4),p=n(3),m=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement("h1",null,"Tic Tac Toe Game")}}]),n}(r.Component),d=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"grid-item",onClick:function(){e.props.handlePlayerClick(e.props.rowIndex,e.props.colIndex)}},this.props.col)}}]),n}(r.Component),f=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"grid-row"},this.props.row.map((function(t,n){return a.a.createElement(d,{key:n,rowIndex:e.props.rowIndex,col:t,colIndex:n,handlePlayerClick:e.props.handlePlayerClick})})))}}]),n}(r.Component),h=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){return"X"===this.props.turn||"O"===this.props.turn?a.a.createElement("div",null,a.a.createElement("h3",null,"It's Player",this.props.turn,"'s turn")):a.a.createElement("div",null,a.a.createElement("h3",null,this.props.turn))}}]),n}(r.Component),v=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement("button",{onClick:this.props.reload},"Restart")}}]),n}(r.Component),b=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this)).winningCondition=function(){var e=r.state,t=e.gameState,n=e.playerTurn;if(t[0][0]===n){if(t[0][1]===n&&t[0][2]===n)return!0;if(t[1][0]===n&&t[2][0]===n)return!0;if(t[1][1]===n&&t[2][2]===n)return!0}if(t[2][2]===n){if(t[0][2]===n&&t[1][2]===n)return!0;if(t[2][0]===n&&t[2][1]===n)return!0}if(t[1][1]===n){if(t[1][0]===n&&t[1][2]===n)return!0;if(t[0][1]===n&&t[2][1]===n)return!0;if(t[2][0]===n&&t[0][2]===n)return!0}return!1},r.handlePlayerClick=function(e,t){if(r.state.gameActive&&""===r.state.gameState[e][t]){var n=Object(l.a)(r.state.gameState);n[e][t]=r.state.playerTurn,r.setState({gameState:n,count:r.state.count+1}),r.winningCondition()&&(r.state.gameActive=!1,r.setState({playerTurn:"X"===r.state.playerTurn?"Congratulations PlayerX Wins!":"Congratulations PlayerO Wins!"})),8===r.state.count&&r.state.gameActive&&(r.state.gameActive=!1,r.setState({playerTurn:"Game Draw!"})),r.state.playerTurn="X"===r.state.playerTurn?"O":"X"}},r.reload=function(){window.location.reload()},r.state={gameState:[["","",""],["","",""],["","",""]],playerTurn:"X",gameActive:!0,count:0},r}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"container"},a.a.createElement(m,null),a.a.createElement("div",{id:"board"},this.state.gameState.map((function(t,n){return a.a.createElement(f,{key:n,row:t,rowIndex:n,handlePlayerClick:e.handlePlayerClick})}))),a.a.createElement(h,{turn:this.state.playerTurn}),a.a.createElement(v,{reload:this.reload}))}}]),n}(r.Component);i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root"))},6:function(e,t,n){},9:function(e,t,n){e.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.c16498e0.chunk.js.map