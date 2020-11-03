// LocalStorage data
// is shared between all tabs and windows from the same origin. 
// LocalStorage data does not expire; 
// it remains after the browser is restarted and even after OS reboot.

if (!localStorage.getItem('counter')){
    localStorage.setItem('counter', 0);
}

function hello(){
    alert('hello world');
}

function count() {
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h2').innerHTML = counter;
    localStorage.setItem('counter', counter);
}

change = ()=>{
    let heading = document.querySelector('h1');
    if (heading.innerHTML === 'Hello!'){
        heading.innerHTML = 'Goodbye!';
    } else {
        heading.innerHTML = 'Hello!';
    }
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').onclick = change;
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').onsubmit = () => {
        const name = document.querySelector('#name').value;
        alert(`Hello, ${name}`);
    };
}); 

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('h2').innerHTML = localStorage.getItem('counter');
    setInterval(count, 1000);
})