!function(){function e(e,n){var t=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){t?o({position:e,delay:n}):r({position:e,delay:n})}),n)}))}({form:document.querySelector("form")}).form.addEventListener("submit",(function(n){n.preventDefault();for(var t=document.querySelector('.form input[name = "delay"]'),o=document.querySelector('.form input[name = "step"]'),r=document.querySelector('.form input[name = "amount"]'),u=parseInt(t.value),a=parseInt(o.value),i=parseInt(r.value),m=0;m<i;m+=1)e(m,u+(m-1)*a).then((function(e){e.position,e.delay})).catch((function(e){e.position,e.delay}))}))}();
//# sourceMappingURL=03-promises.baabd40c.js.map
