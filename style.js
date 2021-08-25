let btn = document.getElementById('first-el')

function changeColor() {

    colors = ['black', 'yellow', 'red'];
    number = Math.floor(Math.random() * 3);

    btn.innerHTML = document.body.style.background = colors[number];
}