"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},parser=function(){function e(e,t,n){var r=e,o=t,i=document.createDocumentFragment();o.forEach(function(e){var t=document.createElement("span");"string"==typeof e&&e.replace(/[^\,\w\s]/gi,""),t.textContent=e,i.appendChild(t)}),r.appendChild(i);var a=n;a.appendChild(r,n)}function t(e){var n=[];for(var r in e){var o=e[r];"object"===("undefined"==typeof o?"undefined":_typeof(o))?n.push(t(o)):n.push(o)}return n}var n=!0,r=function(e,t,r){try{var i=JSON.parse(e);i&&"object"===("undefined"==typeof i?"undefined":_typeof(i))&&o(i,a,t)}catch(e){if(n)throw new Error(e);throw new Error("WTF is this? Hit me up with these details: \n"+e)}},o=function(e,t,n){void 0!=e&&e.hasOwnProperty&&t(e,n)},i=function(e,t){var n=document.getElementsByTagName(t),r=e,o=!0,i=!1,a=void 0;try{for(var u,l=n[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var s=u.value;s.innerHTML=r}}catch(e){i=!0,a=e}finally{try{!o&&l.return&&l.return()}finally{if(i)throw a}}},a=function(n,r){for(var o=document.getElementById(r[0]),i=n.items,a=i.length,u=t(i),l=0,s=a;l<s;l++){var c=document.createElement(r[1]),f=u[l][0].toLowerCase().replace(/[^\w\s]/gi,"");c.classList.add(f),e(c,u[l],o)}},u=function(e,t,a){var u=new XMLHttpRequest,a=a,l="file"==t;l&&u.overrideMimeType("application/json"),u.open("GET",e,!0),u.onreadystatechange=function(){if(4===u.readyState&&200===u.status){var e=this.response;l?r(e,a,o):o(e,i,a)}},n&&(u.ontimeout=function(){console.log("The request timed out.")},u.timeout=1e3),u.send()};return{xhrObjs:function(e){var t=e.items,n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var l=i.value;u(l.url,"object",l.tag)}}catch(e){r=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}},xhrFile:function(e,t){u(e,"file",t)}}}(),HeaderModule={init:function(){var e={items:[{url:"bin/partials/header.html",tag:"header"},{url:"bin/partials/navigation.html",tag:"nav"}]};parser.xhrObjs(e)}},ExperienceModule={init:function(){var e="src/js/json/experience.json",t=["experience","div"];parser.xhrFile(e,t)}},SkillsModule={init:function(){var e="bin/js/json/skills.json",t=["skills","li"];parser.xhrFile(e,t)}};document.addEventListener("DOMContentLoaded",function(){HeaderModule.init(),ExperienceModule.init(),SkillsModule.init()});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsicGFyc2VyIiwiYnVpbGRFbGVtZW50IiwiZWxlbWVudCIsInRleHQiLCJwYXJlbnQiLCJpdGVtIiwiREVCVUciLCJjb250ZW50RnJhZ21lbnQiLCJkb2N1bWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjb250ZW50cyIsImUiLCJjcmVhdGVFbGVtZW50IiwibGkiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwidG9FbCIsInByb3AiLCJvYmoiLCJ2YWx1ZSIsInRvQXJyYXkiLCJyZXN1bHQiLCJwdXNoIiwidHJ5UGFyc2VKU09OIiwianNvblN0cmluZyIsInRhcmdldCIsImNhbGxiYWNrIiwiSlNPTiIsInBhcnNlIiwiX3R5cGVvZiIsInJldHVybk9iamVjdCIsImZpbGVPdXRwdXQiLCJFcnJvciIsImVyciIsInVuZGVmaW5lZCIsImhhc093blByb3BlcnR5Iiwib2JqT3V0cHV0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uIiwiX2RpZEl0ZXJhdG9yRXJyb3IiLCJfaXRlcmF0b3JFcnJvciIsIl9zdGVwIiwiX2l0ZXJhdG9yIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJuZXh0IiwiZG9uZSIsIm9iamVjdCIsInJldHVybiIsImdldEVsZW1lbnRCeUlkIiwiaXRlbXMiLCJudW1JdGVtcyIsImxlbmd0aCIsIm91dCIsImlubmVySFRNTCIsImwiLCJpIiwiaW5uZXJFbCIsImNsYXNzTmFtZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsImNsYXNzTGlzdCIsImFkZCIsImdldFBhcnRpYWxzIiwidHlwZSIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiaXNGaWxlIiwib3ZlcnJpZGVNaW1lVHlwZSIsIm9wZW4iLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicGFyYW1zIiwidGhpcyIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInRpbWVvdXQiLCJfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiIsIl9kaWRJdGVyYXRvckVycm9yMiIsIl9pdGVyYXRvckVycm9yMiIsIl9zdGVwMiIsIl9pdGVyYXRvcjIiLCJ1cmwiLCJ0YWciLCJIZWFkZXJNb2R1bGUiLCJvYmpzIiwieGhyT2JqcyIsIkV4cGVyaWVuY2VNb2R1bGUiLCJpbml0IiwieGhyRmlsZSIsIlNraWxsc01vZHVsZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI2TUFBSUEsT0FBVSxXQUFWQSxRQUFVQyxHQUFXQyxFQUFBQyxFQUFBQyxHQUtqQixHQUFJQyxHQUFPSCxFQUhUSSxFQUFOSCxFQUtRSSxFQUFrQkMsU0FBU0Msd0JBRi9CQyxHQUFJTCxRQUFPSCxTQUFYUyxHQUNJRCxHQUFBQSxHQUFBQSxTQUFKRSxjQUFBLE9BQ0lMLGlCQUFBQSxJQUEyQkUsRUFBQUEsUUFBQUEsY0FBL0IsSUFLSUksRUFBR0MsWUFBY0gsRUFIckJELEVBQWlCSyxZQUFZRixLQUd6QkEsRUFBQUEsWUFBR0MsRUFDSFAsSUFBQUEsR0FBQUEsQ0FDSFMsR0FMREQsWUFBQVYsRUFBQUQsR0FRQSxRQUFJWSxHQUFPWixHQUNYWSxHQUFLRCxLQUNSLEtBQUEsR0FBQUUsS0FBQUMsR0FBQSxDQUtPLEdBQU1DLEdBQVFELEVBQUlELEVBSEosYUFBYkcsbUJBQVFGLEdBQVJFLFlBQUFBLFFBQVFGLElBQ1BHLEVBQU5DLEtBQUFGLEVBQUFELElBR1FFLEVBQUFDLEtBQU9ILEdBSVBFLE1BQUFBLEdBM0JaLEdBQU1mLElBQVEsRUE4QlZpQixFQUFBLFNBQUFDLEVBQUFDLEVBQUFDLEdBQ0gsSUFJTyxHQUFJUixHQUFNUyxLQUFLQyxNQUFNSixFQUZ6QkQsSUFBQUEsWUFBZSxtQkFBQUwsR0FBQSxZQUFBVyxRQUFBWCxLQUNYWSxFQUFBWixFQUFBYSxFQUFBTixHQUdJSyxNQUFBQSxHQUNILEdBQUF4QixFQUFBLEtBQUEsSUFBQTBCLE9BQUFDLEVBRUwsTUFBTUEsSUFBS0QsT0FBQSxnREFBQUMs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QXBFLElBUXpCUixVQUFBcUYsaUJBQUEsbUJBQUEsV0FURVAsYUFBUEksT0F0R0pELGlCQUFBQyxPQThKSUUsYUFBYUYiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBwYXJzZXIgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBERUJVRyA9IHRydWU7XG5cbiAgICBmdW5jdGlvbiBidWlsZEVsZW1lbnQoZWxlbWVudCwgdGV4dCwgcGFyZW50KSB7XG4gICAgICAgIHZhciBpdGVtID0gZWxlbWVudDtcbiAgICAgICAgdmFyIGNvbnRlbnRzID0gdGV4dDtcbiAgICAgICAgdmFyIGNvbnRlbnRGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgICBjb250ZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZSA9PT0gJ3N0cmluZycpIGUucmVwbGFjZSgvW15cXCxcXHdcXHNdL2dpLCAnJyk7XG4gICAgICAgICAgICBsaS50ZXh0Q29udGVudCA9IGU7XG4gICAgICAgICAgICBjb250ZW50RnJhZ21lbnQuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGNvbnRlbnRGcmFnbWVudCk7XG4gICAgICAgIHZhciB0b0VsID0gcGFyZW50O1xuICAgICAgICB0b0VsLmFwcGVuZENoaWxkKGl0ZW0sIHBhcmVudCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9BcnJheShvYmopIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gb2JqW3Byb3BdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0b0FycmF5KHZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB2YXIgdHJ5UGFyc2VKU09OID0gZnVuY3Rpb24oanNvblN0cmluZywgdGFyZ2V0LCBjYWxsYmFjaykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG9iaiA9IEpTT04ucGFyc2UoanNvblN0cmluZyk7XG4gICAgICAgICAgICBpZiAob2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuT2JqZWN0KG9iaiwgZmlsZU91dHB1dCwgdGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgIGlmIChERUJVRykgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1dURiBpcyB0aGlzPyBIaXQgbWUgdXAgd2l0aCB0aGVzZSBkZXRhaWxzOiBcXG4nKyBlcnIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciByZXR1cm5PYmplY3QgPSBmdW5jdGlvbihvYmosIGNhbGxiYWNrLCB0YXJnZXQpIHtcbiAgICAgICAgaWYgKG9iaiAhPSB1bmRlZmluZWQgJiYgb2JqLmhhc093blByb3BlcnR5KXtcbiAgICAgICAgICAgIGNhbGxiYWNrKG9iaiwgdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBvYmpPdXRwdXQgPSBmdW5jdGlvbihvYmosIHRhcmdldCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhcmdldCk7XG4gICAgICAgIHZhciBvYmplY3QgPSBvYmo7XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBlbGVtZW50KSB7XG4gICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9IG9iamVjdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBmaWxlT3V0cHV0ID0gZnVuY3Rpb24ob2JqLCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldFswXSk7XG4gICAgICAgIHZhciBvYmplY3QgPSBvYmouaXRlbXM7XG4gICAgICAgIHZhciBudW1JdGVtcyA9IG9iamVjdC5sZW5ndGg7XG4gICAgICAgIHZhciBvdXQgPSB0b0FycmF5KG9iamVjdCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDAsIGwgPSBudW1JdGVtczsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlubmVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhcmdldFsxXSk7XG4gICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gb3V0W2ldWzBdLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15cXHdcXHNdL2dpLCAnJyk7XG4gICAgICAgICAgICBpbm5lckVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIGJ1aWxkRWxlbWVudChpbm5lckVsLCBvdXRbaV0sIHBhcmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZ2V0UGFydGlhbHMgPSBmdW5jdGlvbihvYmosIHR5cGUsIHRhcmdldCkge1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHZhciBpc0ZpbGUgPSB0eXBlID09ICdmaWxlJyA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgaWYgKGlzRmlsZSkgeGhyLm92ZXJyaWRlTWltZVR5cGUoJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIG9iaiwgdHJ1ZSk7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHRoaXMucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0ZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeVBhcnNlSlNPTihwYXJhbXMsIHRhcmdldCwgcmV0dXJuT2JqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybk9iamVjdChwYXJhbXMsIG9iak91dHB1dCwgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihERUJVRykge1xuICAgICAgICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhlIHJlcXVlc3QgdGltZWQgb3V0LicpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHhoci50aW1lb3V0ID0gMTAwMDtcbiAgICAgICAgfVxuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB4aHJPYmpzOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSBvYmplY3QuaXRlbXM7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgZ2V0UGFydGlhbHMoaXRlbS51cmwsICdvYmplY3QnLCBpdGVtLnRhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHhockZpbGU6IGZ1bmN0aW9uKG9iamVjdCwgdG9FbCkge1xuICAgICAgICAgICAgZ2V0UGFydGlhbHMob2JqZWN0LCAnZmlsZScsIHRvRWwpO1xuICAgICAgICB9XG4gICAgfTtcblxufSkoKTtcblxudmFyIEhlYWRlck1vZHVsZSA9IHtcblxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb2JqcyA9IHtcbiAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICdiaW4vcGFydGlhbHMvaGVhZGVyLmh0bWwnLFxuICAgICAgICAgICAgICAgICAgICB0YWc6ICdoZWFkZXInXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICdiaW4vcGFydGlhbHMvbmF2aWdhdGlvbi5odG1sJyxcbiAgICAgICAgICAgICAgICAgICAgdGFnOiAnbmF2J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICAgICAgcGFyc2VyLnhock9ianMob2Jqcyk7XG4gICAgfVxuXG59XG5cbnZhciBFeHBlcmllbmNlTW9kdWxlID0ge1xuXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB1cmwgPSAnc3JjL2pzL2pzb24vZXhwZXJpZW5jZS5qc29uJyxcbiAgICAgICAgICAgIHRvRWwgPSBbJ2V4cGVyaWVuY2UnLCdkaXYnXTtcbiAgICAgICAgcGFyc2VyLnhockZpbGUodXJsLCB0b0VsKTtcbiAgICB9XG5cbn07XG5cbnZhciBTa2lsbHNNb2R1bGUgPSB7XG5cbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHVybCA9ICdiaW4vanMvanNvbi9za2lsbHMuanNvbicsXG4gICAgICAgICAgICB0b0VsID0gWydza2lsbHMnLCdsaSddO1xuICAgICAgICBwYXJzZXIueGhyRmlsZSh1cmwsIHRvRWwpO1xuICAgIH1cblxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIEhlYWRlck1vZHVsZS5pbml0KCk7XG4gICAgRXhwZXJpZW5jZU1vZHVsZS5pbml0KCk7XG4gICAgU2tpbGxzTW9kdWxlLmluaXQoKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
