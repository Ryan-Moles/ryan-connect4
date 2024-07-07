"use strict";(()=>{var c=[],T=()=>{for(let e=0;e<6;e++){let l=document.createElement("div");l.setAttribute("id",`row-${e}`),l.setAttribute("class","gridrows"),document.getElementById("grid").append(l),c.push([]);for(let t=0;t<7;t++){c[e].push(null);let o=document.createElement("div");o.setAttribute("id",`row-${e}-column-${t}`),o.setAttribute("class","emptySlots"),document.getElementById(`row-${e}`).append(o)}}console.log(c),console.log("createGrid was called")},u=()=>((c.length<1||c==null)&&T(),c),m=e=>{c=e};var s=1,i=2,d=0,x=1,n=!1,a=42;function C(e,l,t,o,r){return n||(console.log(`takeTurn was called with row: ${e}, column: ${l}`),o[e][l]!=null?console.log("This space has already been used"):(o[e][l]=r,m(o),a-=1,console.log(a),a==0&&O(!0))),console.log(u()),u()}function h(e){return console.log(e),e===s?e=i:e=s,console.log("Switch player called. Current player is",e),e}function b(e){if(console.log("checkWinner was called"),console.log(`turns = ${a}`),e[0][0]!=null&&e[0][0]==e[1][1]&&e[0][0]==e[2][2])return console.log(e[0][0]),console.log(typeof e[0][0]),e[0][0]==i?(n=!0,i):(n=!0,s);if(e[0][2]!=null&&e[0][2]==e[1][1]&&e[0][2]==e[2][0])return console.log(e[0][2]),console.log(typeof e[0][2]),e[0][2]==i?(n=!0,i):(n=!0,s);for(let l=0;l<6;l++){if(e[l][0]!=null&&e[l][0]==e[l][1]&&e[l][0]==e[l][2])return console.log(e[l][0]),console.log(typeof e[l][0]),e[l][0]==i?(n=!0,i):(n=!0,s);if(e[0][l]!=null&&e[0][l]==e[1][l]&&e[0][l]==e[2][l])return console.log(e[l][0]),console.log(typeof e[l][0]),e[l][0]==i?(n=!0,i):(n=!0,s);if(a===0)return n=!0,d}}function $(){console.log("resetGame was called"),n=!1,a=42,m([]),u(),k()}function y(){return x}function v(e){x=e}function P(){return n}function O(e){n=e}var F=document.getElementById("winner-name"),g=document.getElementById("winner-display"),E=[s,i,null,d,void 0],I=[s,i,d];function A(){for(let e=0;e<6;e++)for(let l=0;l<7;l++)document.getElementById(`row-${e}-column-${l}`).innerHTML=""}function S(e){console.log("populateHtmlGridWithBoardState was called with",e),A();for(let l=0;l<6;l++)for(let t=0;t<7;t++){if(!e[l][t])continue;let o=e[l][t]===s?"\u{1F6D1}":"\u{1F315}";document.getElementById(`row-${l}-column-${t}`).innerText=o}}function G(e){return Array.isArray(e)&&e.length===6}function W(e){return G(e)&&e.every(function(l){return E.includes(l)})}function H(e,l){console.log(`positionClick was called with rowIndex=${e}, columnIndex=${l},`);let t=structuredClone(u()),o=C(e,l,P(),u(),y());if(JSON.stringify(o)!==JSON.stringify(t)){if(m(o),v(h(y())),!G(o[0])||!o.every(W))throw`Expecting "getBoard" to return a 2d array where all values are one of the strings ${E}. Actually received: ${JSON.stringify(o)}`;S(o);let r=b(o);if(console.log(r),r){if(typeof r!="string"||!I.includes(r))throw`Expecting "checkWinner" to return null or one of the strings ${I}. Actually received: ${r}`;r===0?(g.innerText="Its a draw, you both lose",g.style.backgroundColor="red"):g.innerText=`The winner is ${r}`,g.style.backgroundColor="red"}}}var k=()=>{for(let e=0;e<6;e++)for(let l=0;l<7;l++)document.getElementById(`row-${e}-column-${l}`).addEventListener("click",H.bind(null,e,l))};$();})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vYm9hcmQudHMiLCAiLi4vYWNhZGVteS50cyIsICIuLi9jb25uZWN0b3JzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgdHlwZSBQbGF5ZXIgPSAxIHwgMiB8IG51bGwgfCAwIHwgdW5kZWZpbmVkO1xuZXhwb3J0IHR5cGUgQ2VsbCA9IFBsYXllcjtcbmV4cG9ydCBjb25zdCByb3dzOiBudW1iZXIgPSA2O1xuZXhwb3J0IGNvbnN0IGNvbHVtbnM6IG51bWJlciA9IDc7XG5leHBvcnQgY29uc3QgbWF4dHVybnM6IG51bWJlciA9IHJvd3MgKiBjb2x1bW5zXG5sZXQgZ3JpZDogQ2VsbFtdW10gPSBbXTtcblxuY29uc3QgY3JlYXRlR3JpZCA9ICgpID0+IHtcbiAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IHJvd3M7IHJvd0luZGV4KyspIHtcbiAgICBsZXQgcm93RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByb3dEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHJvdy0ke3Jvd0luZGV4fWApO1xuICAgIHJvd0Rpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImdyaWRyb3dzXCIpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JpZFwiKSEuYXBwZW5kKHJvd0Rpdik7XG4gICAgZ3JpZC5wdXNoKFtdKVxuICAgIGZvciAobGV0IGNvbHVtbkluZGV4ID0gMDsgY29sdW1uSW5kZXggPCBjb2x1bW5zOyBjb2x1bW5JbmRleCsrKSB7XG4gICAgICBncmlkW3Jvd0luZGV4XS5wdXNoKG51bGwpO1xuICAgICAgbGV0IGNvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb2xEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHJvdy0ke3Jvd0luZGV4fS1jb2x1bW4tJHtjb2x1bW5JbmRleH1gKTtcbiAgICAgIGNvbERpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImVtcHR5U2xvdHNcIik7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcm93LSR7cm93SW5kZXh9YCkhLmFwcGVuZChjb2xEaXYpO1xuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhncmlkKTtcbiAgY29uc29sZS5sb2coYGNyZWF0ZUdyaWQgd2FzIGNhbGxlZGApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEJvYXJkID0gKCkgPT4ge1xuICBpZiAoZ3JpZC5sZW5ndGggPCAxIHx8IGdyaWQgPT0gdW5kZWZpbmVkKSB7XG4gICAgY3JlYXRlR3JpZCgpXG4gIH1cbiAgcmV0dXJuIGdyaWQ7XG59O1xuZXhwb3J0IGNvbnN0IHNldEJvYXJkID0gKG5ld0JvYXJkOiBDZWxsW11bXSkgPT4ge1xuICBncmlkID0gbmV3Qm9hcmQ7XG59O1xuIiwgImltcG9ydCB7IFBsYXllciwgQ2VsbCwgZ2V0Qm9hcmQsIHNldEJvYXJkLCBtYXh0dXJucywgcm93cyB9IGZyb20gXCIuL2JvYXJkXCI7XG5pbXBvcnQgeyBiaW5kQ2xpY2tzIH0gZnJvbSBcIi4vY29ubmVjdG9yc1wiO1xuXG5leHBvcnQgY29uc3QgcmVkUGxheWVyID0gMTtcbmV4cG9ydCBjb25zdCB5ZWxsb3dQbGF5ZXIgPSAyO1xuZXhwb3J0IGNvbnN0IG5vYm9keVRleHQgPSAwO1xubGV0IHBsYXllcjogUGxheWVyID0gMTtcbmxldCBnYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xubGV0IHR1cm5zID0gbWF4dHVybnM7XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWtlVHVybihcbiAgcm93SW5kZXg6IG51bWJlcixcbiAgY29sdW1uSW5kZXg6IG51bWJlcixcbiAgY3VycmVudEdhbWVPdmVyOiBib29sZWFuLFxuICBjdXJyZW50Qm9hcmQ6IENlbGxbXVtdLFxuICBjdXJyZW50UGxheWVyOiBQbGF5ZXJcbik6IENlbGxbXVtdIHtcbiAgaWYgKCFnYW1lT3Zlcikge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYHRha2VUdXJuIHdhcyBjYWxsZWQgd2l0aCByb3c6ICR7cm93SW5kZXh9LCBjb2x1bW46ICR7Y29sdW1uSW5kZXh9YFxuICAgICk7XG4gICAgaWYgKGN1cnJlbnRCb2FyZFtyb3dJbmRleF1bY29sdW1uSW5kZXhdICE9IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBzcGFjZSBoYXMgYWxyZWFkeSBiZWVuIHVzZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRCb2FyZFtyb3dJbmRleF1bY29sdW1uSW5kZXhdID0gY3VycmVudFBsYXllcjtcbiAgICAgIHNldEJvYXJkKGN1cnJlbnRCb2FyZCk7XG4gICAgICB0dXJucyAtPSAxO1xuICAgICAgY29uc29sZS5sb2codHVybnMpO1xuICAgICAgaWYgKHR1cm5zID09IDApIHtcbiAgICAgICAgc2V0R2FtZU92ZXIodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKGdldEJvYXJkKCkpXG4gIHJldHVybiBnZXRCb2FyZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoUGxheWVyKGN1cnJlbnRQbGF5ZXI6IFBsYXllcik6IFBsYXllciB7XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQbGF5ZXIpO1xuICBpZiAoY3VycmVudFBsYXllciA9PT0gcmVkUGxheWVyKSB7XG4gICAgY3VycmVudFBsYXllciA9IHllbGxvd1BsYXllcjtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50UGxheWVyID0gcmVkUGxheWVyO1xuICB9XG4gIGNvbnNvbGUubG9nKFwiU3dpdGNoIHBsYXllciBjYWxsZWQuIEN1cnJlbnQgcGxheWVyIGlzXCIsIGN1cnJlbnRQbGF5ZXIpO1xuICByZXR1cm4gY3VycmVudFBsYXllcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrV2lubmVyKGN1cnJlbnRCb2FyZDogQ2VsbFtdW10pOiBQbGF5ZXIgeyAvL05FRUQgVE8gQ0hBTkdFIFRPTyBNQUtFIElUIFdPUksgRk9SIEFOWSBTUEVDSUZJRUQgTEVOR1RIXG4gIGNvbnNvbGUubG9nKFwiY2hlY2tXaW5uZXIgd2FzIGNhbGxlZFwiKTtcbiAgY29uc29sZS5sb2coYHR1cm5zID0gJHt0dXJuc31gKVxuICBpZiAoXG4gICAgY3VycmVudEJvYXJkWzBdWzBdICE9IG51bGwgJiZcbiAgICBjdXJyZW50Qm9hcmRbMF1bMF0gPT0gY3VycmVudEJvYXJkWzFdWzFdICYmXG4gICAgY3VycmVudEJvYXJkWzBdWzBdID09IGN1cnJlbnRCb2FyZFsyXVsyXVxuICApIHtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50Qm9hcmRbMF1bMF0pO1xuICAgIGNvbnNvbGUubG9nKHR5cGVvZiBjdXJyZW50Qm9hcmRbMF1bMF0pO1xuICAgIGlmIChjdXJyZW50Qm9hcmRbMF1bMF0gPT0geWVsbG93UGxheWVyKSB7XG4gICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgICByZXR1cm4geWVsbG93UGxheWVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgICByZXR1cm4gcmVkUGxheWVyO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICBjdXJyZW50Qm9hcmRbMF1bMl0gIT0gbnVsbCAmJlxuICAgIGN1cnJlbnRCb2FyZFswXVsyXSA9PSBjdXJyZW50Qm9hcmRbMV1bMV0gJiZcbiAgICBjdXJyZW50Qm9hcmRbMF1bMl0gPT0gY3VycmVudEJvYXJkWzJdWzBdXG4gICkge1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRCb2FyZFswXVsyXSk7XG4gICAgY29uc29sZS5sb2codHlwZW9mIGN1cnJlbnRCb2FyZFswXVsyXSk7XG4gICAgaWYgKGN1cnJlbnRCb2FyZFswXVsyXSA9PSB5ZWxsb3dQbGF5ZXIpIHtcbiAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHJldHVybiB5ZWxsb3dQbGF5ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgIHJldHVybiByZWRQbGF5ZXI7XG4gICAgfVxuICB9XG4gICAgZWxzZXtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBjdXJyZW50Qm9hcmRbaV1bMF0gIT0gbnVsbCAmJlxuICAgICAgICBjdXJyZW50Qm9hcmRbaV1bMF0gPT0gY3VycmVudEJvYXJkW2ldWzFdICYmXG4gICAgICAgIGN1cnJlbnRCb2FyZFtpXVswXSA9PSBjdXJyZW50Qm9hcmRbaV1bMl1cbiAgICAgICkge1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50Qm9hcmRbaV1bMF0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgY3VycmVudEJvYXJkW2ldWzBdKTtcbiAgICAgICAgaWYgKGN1cnJlbnRCb2FyZFtpXVswXSA9PSB5ZWxsb3dQbGF5ZXIpIHtcbiAgICAgICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHllbGxvd1BsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHJlZFBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgY3VycmVudEJvYXJkWzBdW2ldICE9IG51bGwgJiZcbiAgICAgICAgY3VycmVudEJvYXJkWzBdW2ldID09IGN1cnJlbnRCb2FyZFsxXVtpXSAmJlxuICAgICAgICBjdXJyZW50Qm9hcmRbMF1baV0gPT0gY3VycmVudEJvYXJkWzJdW2ldXG4gICAgICApIHtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudEJvYXJkW2ldWzBdKTtcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIGN1cnJlbnRCb2FyZFtpXVswXSk7XG4gICAgICAgIGlmIChjdXJyZW50Qm9hcmRbaV1bMF0gPT0geWVsbG93UGxheWVyKSB7XG4gICAgICAgICAgZ2FtZU92ZXIgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHllbGxvd1BsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIHJlZFBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIHR1cm5zID09PSAwICl7XG4gICAgICAgIGdhbWVPdmVyID0gdHJ1ZVxuICAgICAgICByZXR1cm4gbm9ib2R5VGV4dFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRHYW1lKCkge1xuICBjb25zb2xlLmxvZyhcInJlc2V0R2FtZSB3YXMgY2FsbGVkXCIpO1xuICBnYW1lT3ZlciA9IGZhbHNlO1xuICB0dXJucyA9IG1heHR1cm5zXG4gIHNldEJvYXJkKFtdKVxuICBnZXRCb2FyZCgpO1xuICBiaW5kQ2xpY2tzKClcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFBsYXllcigpOiBQbGF5ZXIge1xuICByZXR1cm4gcGxheWVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFBsYXllcihuZXdDdXJyZW50UGxheWVyOiBQbGF5ZXIpIHtcbiAgcGxheWVyID0gbmV3Q3VycmVudFBsYXllcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEdhbWVPdmVyKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZ2FtZU92ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRHYW1lT3ZlcihuZXdHYW1lT3ZlcjogYm9vbGVhbikge1xuICBnYW1lT3ZlciA9IG5ld0dhbWVPdmVyO1xufVxuXG4iLCAiaW1wb3J0IHsgUGxheWVyLCBDZWxsLCBnZXRCb2FyZCwgc2V0Qm9hcmQsIHJvd3MsIGNvbHVtbnMgfSBmcm9tIFwiLi9ib2FyZFwiO1xuaW1wb3J0IHtcbiAgY2hlY2tXaW5uZXIsXG4gIHllbGxvd1BsYXllcixcbiAgZ2V0Q3VycmVudFBsYXllcixcbiAgZ2V0R2FtZU92ZXIsXG4gIHJlZFBsYXllcixcbiAgcmVzZXRHYW1lLFxuICBzZXRDdXJyZW50UGxheWVyLFxuICBzd2l0Y2hQbGF5ZXIsXG4gIHRha2VUdXJuLFxuICBub2JvZHlUZXh0LFxufSBmcm9tIFwiLi9hY2FkZW15XCI7XG5cbmNvbnN0IHdpbm5lck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbm5lci1uYW1lXCIpITtcbmNvbnN0IHdpbm5lckRpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbm5lci1kaXNwbGF5XCIpITtcbmNvbnN0IHZhbGlkQ2VsbFZhbHVlczogQ2VsbFtdID0gW3JlZFBsYXllciwgeWVsbG93UGxheWVyLCBudWxsLCBub2JvZHlUZXh0LCB1bmRlZmluZWRdO1xuY29uc3QgdmFsaWRXaW5WYWx1ZXM6IENlbGxbXSA9IFtyZWRQbGF5ZXIsIHllbGxvd1BsYXllciwgbm9ib2R5VGV4dF07XG5cbmZ1bmN0aW9uIGNsZWFySHRtbEdyaWQoKSB7XG4gIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCByb3dzOyByb3dJbmRleCsrKSB7XG4gICAgZm9yIChsZXQgY29sdW1uSW5kZXggPSAwOyBjb2x1bW5JbmRleCA8IGNvbHVtbnM7IGNvbHVtbkluZGV4KyspIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICBgcm93LSR7cm93SW5kZXh9LWNvbHVtbi0ke2NvbHVtbkluZGV4fWBcbiAgICAgICkhLmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlSHRtbEdyaWRXaXRoQm9hcmRTdGF0ZShib2FyZDogQ2VsbFtdW10pIHtcbiAgY29uc29sZS5sb2coXCJwb3B1bGF0ZUh0bWxHcmlkV2l0aEJvYXJkU3RhdGUgd2FzIGNhbGxlZCB3aXRoXCIsIGJvYXJkKTtcbiAgY2xlYXJIdG1sR3JpZCgpO1xuICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgcm93czsgcm93SW5kZXgrKykge1xuICAgIGZvciAobGV0IGNvbHVtbkluZGV4ID0gMDsgY29sdW1uSW5kZXggPCBjb2x1bW5zOyBjb2x1bW5JbmRleCsrKSB7XG4gICAgICBpZiAoIWJvYXJkW3Jvd0luZGV4XVtjb2x1bW5JbmRleF0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCBjZWxsVGV4dCA9IGJvYXJkW3Jvd0luZGV4XVtjb2x1bW5JbmRleF0gPT09IHJlZFBsYXllciA/IFwiXHVEODNEXHVERUQxXCIgOiBcIlx1RDgzQ1x1REYxNVwiO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIGByb3ctJHtyb3dJbmRleH0tY29sdW1uLSR7Y29sdW1uSW5kZXh9YFxuICAgICAgKSEuaW5uZXJUZXh0ID0gY2VsbFRleHQ7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRSb3dPckNvbHVtbihhcnJheU9mQ2VsbHM6IENlbGxbXSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnJheU9mQ2VsbHMpICYmIGFycmF5T2ZDZWxscy5sZW5ndGggPT09IHJvd3M7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRDb2x1bW4oY29sdW1uQXJyYXk6IENlbGxbXSkge1xuICByZXR1cm4gKFxuICAgIGlzVmFsaWRSb3dPckNvbHVtbihjb2x1bW5BcnJheSkgJiZcbiAgICBjb2x1bW5BcnJheS5ldmVyeShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIHZhbGlkQ2VsbFZhbHVlcy5pbmNsdWRlcyhpdGVtKTtcbiAgICB9KVxuICApO1xufVxuXG5mdW5jdGlvbiBwb3NpdGlvbkNsaWNrKHJvdzogbnVtYmVyLCBjb2x1bW46IG51bWJlcikge1xuICBjb25zb2xlLmxvZyhcbiAgICBgcG9zaXRpb25DbGljayB3YXMgY2FsbGVkIHdpdGggcm93SW5kZXg9JHtyb3d9LCBjb2x1bW5JbmRleD0ke2NvbHVtbn0sYFxuICApO1xuICBjb25zdCBvbGRCb2FyZCA9IHN0cnVjdHVyZWRDbG9uZShnZXRCb2FyZCgpKTtcbiAgY29uc3QgYm9hcmQgPSB0YWtlVHVybihcbiAgICByb3csXG4gICAgY29sdW1uLFxuICAgIGdldEdhbWVPdmVyKCksXG4gICAgZ2V0Qm9hcmQoKSxcbiAgICBnZXRDdXJyZW50UGxheWVyKClcbiAgKTtcbiAgLy8gY29uc29sZS5sb2coYG9sZCBib2FyZDogJHtvbGRCb2FyZH0gYClcbiAgLy8gY29uc29sZS5sb2coYG5ldyBib2FyZDogJHtib2FyZH0gYClcbiAgaWYgKEpTT04uc3RyaW5naWZ5KGJvYXJkKSAhPT0gSlNPTi5zdHJpbmdpZnkob2xkQm9hcmQpKSB7XG4gICAgc2V0Qm9hcmQoYm9hcmQpO1xuICAgIHNldEN1cnJlbnRQbGF5ZXIoc3dpdGNoUGxheWVyKGdldEN1cnJlbnRQbGF5ZXIoKSkpO1xuXG4gICAgaWYgKCFpc1ZhbGlkUm93T3JDb2x1bW4oYm9hcmRbMF0pIHx8ICFib2FyZC5ldmVyeShpc1ZhbGlkQ29sdW1uKSkge1xuICAgICAgdGhyb3cgYEV4cGVjdGluZyBcImdldEJvYXJkXCIgdG8gcmV0dXJuIGEgMmQgYXJyYXkgd2hlcmUgYWxsIHZhbHVlcyBhcmUgb25lIG9mIHRoZSBzdHJpbmdzICR7dmFsaWRDZWxsVmFsdWVzfS4gQWN0dWFsbHkgcmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoYm9hcmQpfWA7XG4gICAgfVxuICAgIHBvcHVsYXRlSHRtbEdyaWRXaXRoQm9hcmRTdGF0ZShib2FyZCk7XG4gICAgY29uc3Qgd2lubmVyID0gY2hlY2tXaW5uZXIoYm9hcmQpO1xuICAgIGNvbnNvbGUubG9nKHdpbm5lcik7XG4gICAgaWYgKHdpbm5lcikge1xuICAgICAgaWYgKHR5cGVvZiB3aW5uZXIgIT09IFwic3RyaW5nXCIgfHwgIXZhbGlkV2luVmFsdWVzLmluY2x1ZGVzKHdpbm5lcikpIHtcbiAgICAgICAgdGhyb3cgYEV4cGVjdGluZyBcImNoZWNrV2lubmVyXCIgdG8gcmV0dXJuIG51bGwgb3Igb25lIG9mIHRoZSBzdHJpbmdzICR7dmFsaWRXaW5WYWx1ZXN9LiBBY3R1YWxseSByZWNlaXZlZDogJHt3aW5uZXJ9YDtcbiAgICAgIH1cbiAgICAgIGlmICh3aW5uZXIgPT09IDApIHtcbiAgICAgICAgd2lubmVyRGlzcGxheS5pbm5lclRleHQgPSBcIkl0cyBhIGRyYXcsIHlvdSBib3RoIGxvc2VcIjtcbiAgICAgICAgd2lubmVyRGlzcGxheS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2lubmVyRGlzcGxheS5pbm5lclRleHQgPSBgVGhlIHdpbm5lciBpcyAke3dpbm5lcn1gO1xuICAgICAgfVxuICAgICAgd2lubmVyRGlzcGxheS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZXNldENsaWNrKGV2ZW50OiBhbnkpIHtcbiAgcmVzZXRHYW1lKCk7XG4gIHdpbm5lckRpc3BsYXkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICBjbGVhckh0bWxHcmlkKCk7XG59XG5cbi8vIEJpbmQgdGhlIGNsaWNrIGV2ZW50cyBmb3IgdGhlIGdyaWQuXG5leHBvcnQgY29uc3QgYmluZENsaWNrcyA9ICgpID0+IHtcbiAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IHJvd3M7IHJvd0luZGV4KyspIHtcbiAgICBmb3IgKGxldCBjb2x1bW5JbmRleCA9IDA7IGNvbHVtbkluZGV4IDwgY29sdW1uczsgY29sdW1uSW5kZXgrKykge1xuICAgICAgY29uc3QgZ3JpZFBvc2l0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIGByb3ctJHtyb3dJbmRleH0tY29sdW1uLSR7Y29sdW1uSW5kZXh9YFxuICAgICAgKSE7XG4gICAgICBncmlkUG9zaXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICBwb3NpdGlvbkNsaWNrLmJpbmQobnVsbCwgcm93SW5kZXgsIGNvbHVtbkluZGV4KVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0LWJ1dHRvbicpIVxuLy8gcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldENsaWNrKVxucmVzZXRHYW1lKCk7XG4iXSwKICAibWFwcGluZ3MiOiAibUJBS0EsSUFBSUEsRUFBaUIsQ0FBQyxFQUVoQkMsRUFBYSxJQUFNLENBQ3ZCLFFBQVNDLEVBQVcsRUFBR0EsRUFBVyxFQUFNQSxJQUFZLENBQ2xELElBQUlDLEVBQVMsU0FBUyxjQUFjLEtBQUssRUFDekNBLEVBQU8sYUFBYSxLQUFNLE9BQU9ELENBQVEsRUFBRSxFQUMzQ0MsRUFBTyxhQUFhLFFBQVMsVUFBVSxFQUN2QyxTQUFTLGVBQWUsTUFBTSxFQUFHLE9BQU9BLENBQU0sRUFDOUNILEVBQUssS0FBSyxDQUFDLENBQUMsRUFDWixRQUFTSSxFQUFjLEVBQUdBLEVBQWMsRUFBU0EsSUFBZSxDQUM5REosRUFBS0UsQ0FBUSxFQUFFLEtBQUssSUFBSSxFQUN4QixJQUFJRyxFQUFTLFNBQVMsY0FBYyxLQUFLLEVBQ3pDQSxFQUFPLGFBQWEsS0FBTSxPQUFPSCxDQUFRLFdBQVdFLENBQVcsRUFBRSxFQUNqRUMsRUFBTyxhQUFhLFFBQVMsWUFBWSxFQUN6QyxTQUFTLGVBQWUsT0FBT0gsQ0FBUSxFQUFFLEVBQUcsT0FBT0csQ0FBTSxDQUMzRCxDQUNGLENBQ0EsUUFBUSxJQUFJTCxDQUFJLEVBQ2hCLFFBQVEsSUFBSSx1QkFBdUIsQ0FDckMsRUFFYU0sRUFBVyxNQUNsQk4sRUFBSyxPQUFTLEdBQUtBLEdBQVEsT0FDN0JDLEVBQVcsRUFFTkQsR0FFSU8sRUFBWUMsR0FBdUIsQ0FDOUNSLEVBQU9RLENBQ1QsRUMvQk8sSUFBTUMsRUFBWSxFQUNaQyxFQUFlLEVBQ2ZDLEVBQWEsRUFDdEJDLEVBQWlCLEVBQ2pCQyxFQUFvQixHQUNwQkMsRUFBUSxHQUVMLFNBQVNDLEVBQ2RDLEVBQ0FDLEVBQ0FDLEVBQ0FDLEVBQ0FDLEVBQ1UsQ0FDVixPQUFLUCxJQUNILFFBQVEsSUFD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QyxFQUFjLEVBQUdBLEVBQWMsRUFBU0EsSUFDMUIsU0FBUyxlQUM1QixPQUFPRCxDQUFRLFdBQVdDLENBQVcsRUFDdkMsRUFDYSxpQkFDWCxRQUNBQyxFQUFjLEtBQUssS0FBTUYsRUFBVUMsQ0FBVyxDQUNoRCxDQUdOLEVBSUFFLEVBQVUiLAogICJuYW1lcyI6IFsiZ3JpZCIsICJjcmVhdGVHcmlkIiwgInJvd0luZGV4IiwgInJvd0RpdiIsICJjb2x1bW5JbmRleCIsICJjb2xEaXYiLCAiZ2V0Qm9hcmQiLCAic2V0Qm9hcmQiLCAibmV3Qm9hcmQiLCAicmVkUGxheWVyIiwgInllbGxvd1BsYXllciIsICJub2JvZHlUZXh0IiwgInBsYXllciIsICJnYW1lT3ZlciIsICJ0dXJucyIsICJ0YWtlVHVybiIsICJyb3dJbmRleCIsICJjb2x1bW5JbmRleCIsICJjdXJyZW50R2FtZU92ZXIiLCAiY3VycmVudEJvYXJkIiwgImN1cnJlbnRQbGF5ZXIiLCAic2V0Qm9hcmQiLCAic2V0R2FtZU92ZXIiLCAiZ2V0Qm9hcmQiLCAic3dpdGNoUGxheWVyIiwgImNoZWNrV2lubmVyIiwgImkiLCAicmVzZXRHYW1lIiwgImJpbmRDbGlja3MiLCAiZ2V0Q3VycmVudFBsYXllciIsICJzZXRDdXJyZW50UGxheWVyIiwgIm5ld0N1cnJlbnRQbGF5ZXIiLCAiZ2V0R2FtZU92ZXIiLCAibmV3R2FtZU92ZXIiLCAid2lubmVyTmFtZSIsICJ3aW5uZXJEaXNwbGF5IiwgInZhbGlkQ2VsbFZhbHVlcyIsICJyZWRQbGF5ZXIiLCAieWVsbG93UGxheWVyIiwgIm5vYm9keVRleHQiLCAidmFsaWRXaW5WYWx1ZXMiLCAiY2xlYXJIdG1sR3JpZCIsICJyb3dJbmRleCIsICJjb2x1bW5JbmRleCIsICJwb3B1bGF0ZUh0bWxHcmlkV2l0aEJvYXJkU3RhdGUiLCAiYm9hcmQiLCAiY2VsbFRleHQiLCAiaXNWYWxpZFJvd09yQ29sdW1uIiwgImFycmF5T2ZDZWxscyIsICJpc1ZhbGlkQ29sdW1uIiwgImNvbHVtbkFycmF5IiwgIml0ZW0iLCAicG9zaXRpb25DbGljayIsICJyb3ciLCAiY29sdW1uIiwgIm9sZEJvYXJkIiwgImdldEJvYXJkIiwgInRha2VUdXJuIiwgImdldEdhbWVPdmVyIiwgImdldEN1cnJlbnRQbGF5ZXIiLCAic2V0Qm9hcmQiLCAic2V0Q3VycmVudFBsYXllciIsICJzd2l0Y2hQbGF5ZXIiLCAid2lubmVyIiwgImNoZWNrV2lubmVyIiwgImJpbmRDbGlja3MiLCAicm93SW5kZXgiLCAiY29sdW1uSW5kZXgiLCAicG9zaXRpb25DbGljayIsICJyZXNldEdhbWUiXQp9Cg==
