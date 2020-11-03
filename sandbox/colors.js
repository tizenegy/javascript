
document.addEventListener('DOMContentLoaded', () => {
    console.log(document.querySelectorAll('button'));
    console.log('test');
    document.querySelectorAll('button').forEach((button)=> {
        button.onclick = ()=> {
            document.querySelector("#hello").style.color = button.dataset.color;
            
        }
    });
 });