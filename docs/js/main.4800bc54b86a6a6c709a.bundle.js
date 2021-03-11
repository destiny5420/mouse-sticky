/*! For license information please see main.4800bc54b86a6a6c709a.bundle.js.LICENSE.txt */
(()=>{"use strict";var e={632:e=>{e.exports=$}},t={};function o(r){if(t[r])return t[r].exports;var s=t[r]={exports:{}};return e[r](s,s.exports,o),s.exports}(()=>{var e=o(632);const t=function(e,t,o){return(1-o)*e+o*t};function r(){const e=this;window.addEventListener("mousemove",(t=>{e.mousePos=function(e){let t=0,o=0,r=e;return e||(r=window.event),r.pageX||r.pageY?(t=r.clientX,o=r.clientY):(r.clientX||r.clientY)&&(t=r.clientX+documentElement.scrollLeft,o=r.clientY+documentElement.scrollTop),{x:t,y:o}}(t)}))}function s(){const e=this;e.lastMousePos.dot.x=t(e.lastMousePos.dot.x,e.mousePos.x-e.bounds.dot.width/2,1),e.lastMousePos.dot.y=t(e.lastMousePos.dot.y,e.mousePos.y-e.bounds.dot.height/2,1),e.lastMousePos.circle.x=t(e.lastMousePos.circle.x,e.mousePos.x-e.bounds.circle.width/2,.15),e.lastMousePos.circle.y=t(e.lastMousePos.circle.y,e.mousePos.y-e.bounds.circle.height/2,e.data.circle.moveFactor),e.lastScale=t(e.lastScale,e.scale,.15),e.data.dot.element.style.transform=`translateX(${e.lastMousePos.dot.x}px) translateY(${e.lastMousePos.dot.y}px)`,e.data.circle.element.style.transform=`translateX(${e.lastMousePos.circle.x}px) translateY(${e.lastMousePos.circle.y}px) scale(${e.lastScale})`,requestAnimationFrame((()=>s.call(e)))}function c(e){const t=this;t.data=e,t.bounds={dot:t.data.dot.element.getBoundingClientRect(),circle:t.data.circle.element.getBoundingClientRect()},t.scale=1,t.opacity=1,t.mousePos={x:0,y:1},t.lastMousePos={dot:{x:0,y:0},circle:{x:0,y:0}},t.lastScale=1,r.call(this),requestAnimationFrame((()=>s.call(t)))}c.prototype.onEnter=function(t,o){e(this.data.dot.element).css("opacity",0),e(this.data.circleChild.element).css("background-color",t),e(this.data.circleChild.element).css("border-width","0px"),e(this.data.circleChild.element).css("width",`${o}px`),e(this.data.circleChild.element).css("height",`${o}px`)},c.prototype.onLeave=function(){e(this.data.dot.element).css("opacity",1),e(this.data.circleChild.element).css("background-color",this.data.circle.originBackgroundColor),e(this.data.circleChild.element).css("border-width",`${this.data.circle.originBorderWidth}px`),e(this.data.circleChild.element).css("width",`${this.data.circle.originSize}px`),e(this.data.circleChild.element).css("height",`${this.data.circle.originSize}px`)};const n=c,a=function(e,t){Array.prototype.forEach.call(e,(e=>{e.addEventListener("mouseenter",(e=>{const o=e.currentTarget.dataset.color||"transparent",r=e.currentTarget.dataset.size||20;t.onEnter(o,r)})),e.addEventListener("mouseleave",(()=>{t.onLeave()}))}))};var i=o(632);const l=function(e){Array.prototype.forEach.call(e,(e=>{e.addEventListener("mouseenter",(e=>{const t=e.clientX,o=e.clientY,r=.5*(t-(e.currentTarget.offsetLeft+e.currentTarget.offsetWidth/2)),s=.5*(o-(e.currentTarget.offsetTop+e.currentTarget.offsetHeight/2));i(e.currentTarget).css("border-width","0px"),i(e.currentTarget).css("transform",`translateX(${r}px) translateY(${s}px)`)})),e.addEventListener("mouseleave",(e=>{i(e.currentTarget).css("border-width","3px"),i(e.currentTarget).css("transform","translateX(0px) translateY(0px)")})),e.addEventListener("mousemove",(e=>{const t=e.clientX,o=e.clientY,r=.5*(t-(e.currentTarget.offsetLeft+e.currentTarget.offsetWidth/2)),s=.5*(o-(e.currentTarget.offsetTop+e.currentTarget.offsetHeight/2));i(e.currentTarget).css("transform",`translateX(${r}px) translateY(${s}px)`)}))}))};new function(){console.log("The construct of App.");const e={dot:{element:document.getElementById("cursor-dot"),originSize:4,originOpacity:1},circle:{element:document.getElementById("cursor-circle"),originBackgroundColor:"transparent",originSize:40,originOpacity:1,originBorderWidth:1,moveFactor:.15},circleChild:{element:document.getElementById("cursor-circle-child")}};this.cursor=new n(e),this.touchObj=new a(document.querySelectorAll(".touch-obj"),this.cursor),this.sticky=new l(document.querySelectorAll(".sticky-obj"))}})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3VzZS1zdGlja3kvanMvbWFpbi40ODAwYmM1NGI4NmE2YTZjNzA5YS5idW5kbGUuanMiXSwibmFtZXMiOlsiX193ZWJwYWNrX21vZHVsZXNfXyIsIjYzMiIsIm1vZHVsZSIsImV4cG9ydHMiLCIkIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwibGVycCIsImEiLCJiIiwibiIsImV2ZW50QmluZGluZyIsInNlbGYiLCJ0aGlzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwibW91c2VQb3MiLCJlIiwicG9zWCIsInBvc1kiLCJwYWdlWCIsInBhZ2VZIiwiY2xpZW50WCIsImNsaWVudFkiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwieCIsInkiLCJnZXRNb3VzZVBvcyIsInJlbmRlciIsImxhc3RNb3VzZVBvcyIsImRvdCIsImJvdW5kcyIsIndpZHRoIiwiaGVpZ2h0IiwiY2lyY2xlIiwiZGF0YSIsIm1vdmVGYWN0b3IiLCJsYXN0U2NhbGUiLCJzY2FsZSIsImVsZW1lbnQiLCJzdHlsZSIsInRyYW5zZm9ybSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGwiLCJDdXJzb3IiLCJkYXRhcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm9wYWNpdHkiLCJwcm90b3R5cGUiLCJvbkVudGVyIiwiYmFja2dyb3VuZENvbG9yIiwic2l6ZSIsImNzcyIsImNpcmNsZUNoaWxkIiwib25MZWF2ZSIsIm9yaWdpbkJhY2tncm91bmRDb2xvciIsIm9yaWdpbkJvcmRlcldpZHRoIiwib3JpZ2luU2l6ZSIsImpzX0N1cnNvciIsImpzX1RvdWNoT2JqIiwiZWxlbWVudHMiLCJjdXJzb3IiLCJBcnJheSIsImZvckVhY2giLCJjb2xvciIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiU3RpY2t5XyQiLCJqc19TdGlja3kiLCJtb3VzZVgiLCJtb3VzZVkiLCJvZmZzZXRYIiwib2Zmc2V0TGVmdCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0WSIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJjdXJzb3JDb25maWd1cmUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib3JpZ2luT3BhY2l0eSIsInRvdWNoT2JqIiwicXVlcnlTZWxlY3RvckFsbCIsInN0aWNreSJdLCJtYXBwaW5ncyI6IjtBQUFTLE1BQ0MsYUFDQSxJQUFJQSxFQUFzQixDQUU5QkMsSUFDRUMsSUFFUkEsRUFBT0MsUUFBVUMsSUFPSEMsRUFBMkIsR0FHL0IsU0FBU0MsRUFBb0JDLEdBRTVCLEdBQUdGLEVBQXlCRSxHQUMzQixPQUFPRixFQUF5QkUsR0FBVUosUUFHM0MsSUFBSUQsRUFBU0csRUFBeUJFLEdBQVksQ0FHakRKLFFBQVMsSUFPVixPQUhBSCxFQUFvQk8sR0FBVUwsRUFBUUEsRUFBT0MsUUFBU0csR0FHL0NKLEVBQU9DLFFBSXpCLE1BRzBCLElBQUlDLEVBQUlFLEVBQW9CLEtBQ3RELE1BQU1FLEVBQU8sU0FBVUMsRUFBR0MsRUFBR0MsR0FDM0IsT0FBUSxFQUFJQSxHQUFLRixFQUFJRSxFQUFJRCxHQTBCM0IsU0FBU0UsSUFDUCxNQUFNQyxFQUFPQyxLQUNiQyxPQUFPQyxpQkFBaUIsYUFBYUMsSUFDbkNKLEVBQUtLLFNBMUJULFNBQXFCQyxHQUNuQixJQUFJQyxFQUFPLEVBQ1BDLEVBQU8sRUFDUEosRUFBUUUsRUFjWixPQVpLQSxJQUNIRixFQUFRRixPQUFPRSxPQUdiQSxFQUFNSyxPQUFTTCxFQUFNTSxPQUN2QkgsRUFBT0gsRUFBTU8sUUFDYkgsRUFBT0osRUFBTVEsVUFDSlIsRUFBTU8sU0FBV1AsRUFBTVEsV0FDaENMLEVBQU9ILEVBQU1PLFFBQVVFLGdCQUFnQkMsV0FDdkNOLEVBQU9KLEVBQU1RLFFBQVVDLGdCQUFnQkUsV0FHbEMsQ0FDTEMsRUFBR1QsRUFDSFUsRUFBR1QsR0FPYVUsQ0FBWWQsTUFJaEMsU0FB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QUFtQyxJQUF4QkYsR0FGR3RELEVBQUVrRCxjQUFjTyxXQUFhekQsRUFBRWtELGNBQWNRLFlBQWMsSUFHekVDLEVBQW1DLElBQXhCSixHQUZHdkQsRUFBRWtELGNBQWNVLFVBQVk1RCxFQUFFa0QsY0FBY1csYUFBZSxJQUcvRVQsRUFBU3BELEVBQUVrRCxlQUFlYixJQUFJLFlBQWEsY0FBY21CLG1CQUF5QkcsZUEyQzVFLElBaENaLFdBQ0VHLFFBQVFDLElBQUkseUJBQ1osTUFHTUMsRUFBa0IsQ0FDdEJqRCxJQUFLLENBQ0hTLFFBTGN5QyxTQUFTQyxlQUFlLGNBTXRDeEIsV0FBWSxFQUNaeUIsY0FBZSxHQUVqQmhELE9BQVEsQ0FDTkssUUFUaUJ5QyxTQUFTQyxlQUFlLGlCQVV6QzFCLHNCQUF1QixjQUN2QkUsV0FBWSxHQUNaeUIsY0FBZSxFQUNmMUIsa0JBQW1CLEVBQ25CcEIsV0FBWSxLQUVkaUIsWUFBYSxDQUNYZCxRQWhCZ0J5QyxTQUFTQyxlQUFlLHlCQW1CNUN2RSxLQUFLbUQsT0FBUyxJQUFJSCxFQUFVcUIsR0FDNUJyRSxLQUFLeUUsU0FBVyxJQUFJeEIsRUFBWXFCLFNBQVNJLGlCQUFpQixjQUFlMUUsS0FBS21ELFFBQzlFbkQsS0FBSzJFLE9BQVMsSUFBSWpCLEVBQVVZLFNBQVNJLGlCQUFpQixrQkEzS3hELElBckNTIiwiZmlsZSI6Ii4vanMvbWFpbi40ODAwYmM1NGI4NmE2YTZjNzA5YS5idW5kbGUuanMiLCJzb3VyY2VSb290IjoiIn0=