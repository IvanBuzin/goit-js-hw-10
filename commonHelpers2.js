import"./assets/styles-2ece2716.js";import{i as s}from"./assets/vendor-651d7991.js";const m=document.querySelector('input[name="delay"]'),o=document.querySelector(".form");o.addEventListener("submit",a);function a(n){n.preventDefault();const t=o.delay.value,i=o.state.value;new Promise((e,r)=>{setTimeout(()=>{i==="fulfilled"?e(t):i==="rejected"&&r(t)},t)}).then(e=>s.success({message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})).catch(e=>s.error({message:`❌ Rejected promise in ${e}ms`,position:"topRight"})),m.value=""}
//# sourceMappingURL=commonHelpers2.js.map
