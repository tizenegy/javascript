let counter = 0;

function hello(){
    alert('hello world');
}

function count() {
    counter++;
    document.querySelector('h2').innerHTML = counter;
    if (counter % 10 === 0){
        alert(`Count is now ${counter}`)
    }
}

function change(){
    const heading = document.querySelector('h1');
    if (heading.innerHTML === ')Hello!'){
        heading.innerHTML = 'Goodbye!';
    } else {
        heading.innerHTML = 'Hello!';
    }
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').onclick = change;
});