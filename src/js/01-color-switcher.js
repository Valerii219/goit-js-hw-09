const refs = {
start: document.querySelector('button[data-start]'),
stop: document.querySelector('button[data-stop]'),
body: document.querySelector('body')
};

let timerId = null;

refs.body.style.backgroundColor = "";

const clickStart = refs.start.addEventListener('click', () => {
    timer();
    buttonStart();
})

const clickStop = refs.stop.addEventListener('click', () =>{
    clearInterval(timerId);
    buttonStop();
}
)

function timer(){
    timerId = setInterval(() => {
        console.log(refs.body.style.backgroundColor = getRandomHexColor());
    }, 1000)
}

function buttonStart(){
    if(clickStart !== true)
    {refs.start.setAttribute('disabled', true)}
}
    function buttonStop(){
        if(clickStop !== true){
            refs.start.removeAttribute('disabled');
        }
    }

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
