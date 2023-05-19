const refs = {
  button:document.querySelector('button'),
  delay:document.querySelector('.form input[name = "delay"]'),
  step:document.querySelector('.form input[name = "step"]'),  
  amount:document.querySelector('.form input[name = "amount"]') 
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      setTimeout(() => { 
        if (shouldResolve) {
      console.log(`Promise ${position} виконано`);
      resolve();
      } else {
        reject(console.log(`Promise ${position}  не виконано`))
      }}, 
      delay)})
      
  });
  promise.then(position => {
    
    console.log(position);})
    .catch(delay => {
      console.log(delay);
    });
}


refs.button.addEventListener("submit", function(e)  {
  e.preventDefault();
  console.log(refs.amount.value);
}) 

