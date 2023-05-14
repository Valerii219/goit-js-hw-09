const refs = {
start: document.querySelector('button[data-start]'),
stop: document.querySelector('button[data-stop]'),
body: document.querySelector('body')
};
let timerId = null;

refs.body.style.backgroundColor = getRandomHexColor();
refs.start.addEventListener('click', () => {
    

    timerId = setInterval(() => {
        console.log();
    },1000)
    

}
)

refs.stop.addEventListener('click', () =>{

}
)





function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
