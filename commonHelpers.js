import"./assets/styles-71c6475e.js";import{f as h,i as y}from"./assets/vendor-651d7991.js";const l=document.querySelector("#datetime-picker"),a=document.querySelector("button[data-start]");a.disabled=!0;const p=document.querySelector("span[data-days]"),S=document.querySelector("span[data-hours]"),T=document.querySelector("span[data-minutes]"),D=document.querySelector("span[data-seconds]");let m="";const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){f.defaultDate>t[0]?(y.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),a.disabled=!0):(a.disabled=!1,m=t[0])}},b=h(l,f);l.addEventListener("focus",()=>{b.config.defaultDate=new Date});a.addEventListener("click",g);function g(){const t=setInterval(()=>{const c=m.getTime(),i=new Date().getTime(),u=c-i-1e3,d=q(u),{days:e,hours:n,minutes:o,seconds:r}=d;p.textContent=s(e),S.textContent=s(n),T.textContent=s(o),D.textContent=s(r),e<=0&&n<=0&&o<=0&&r<=0&&clearInterval(t)},1e3)}function s(t){return String(t).padStart(2,"0")}function q(t){const e=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5),o=Math.floor(t%864e5%36e5/6e4),r=Math.floor(t%864e5%36e5%6e4/1e3);return{days:e,hours:n,minutes:o,seconds:r}}
//# sourceMappingURL=commonHelpers.js.map
