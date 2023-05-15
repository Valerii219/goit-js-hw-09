const refs = {
start: document.querySelector('button[data-start]'),
stop: document.querySelector('button[data-stop]'),
body: document.querySelector('body')
};

let timerId = null;
refs.stop.setAttribute('disabled', true);
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
    {refs.start.setAttribute('disabled', true);  refs.stop.removeAttribute('disabled')};
}
    function buttonStop(){
        if(clickStop !== true){
        refs.start.removeAttribute('disabled');
        refs.stop.setAttribute('disabled', true);
        }
    }
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    }

