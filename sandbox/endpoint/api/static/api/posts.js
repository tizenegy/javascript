
let counter = 1;
const quantity = 20;
let loading_allowed = true;

document.addEventListener('DOMContentLoaded', load);

window.onscroll = () => {
    px_to_bottom = parseInt(document.body.offsetHeight - (window.innerHeight + window.scrollY))
    if (px_to_bottom < 50) {
        if (loading_allowed){
            load();
        } 
    } else {
        loading_allowed = true;
    }
};

document.addEventListener('click', event => {
    const element = event.target;
    if (element.className === 'hide') {
        element.parentElement.style.animationPlayState = 'running';
        element.parentElement.addEventListener('animationend', () =>  {
            element.parentElement.remove();
        });
    }
});

async function load() {
    loading_allowed = false;
    const start = counter;
    const end = start + quantity - 1;
    counter = end + 1;
    const res = await fetch(`/posts?start=${start}&end=${end}`);
    const json = await res.json();
    json.posts.forEach(add_post);
};

// function load() {
//     const start = counter;
//     const end = start + quantity - 1;
//     counter = end + 1;
//     fetch(`/posts?start=${start}&end=${end}`)
//     .then(response => response.json())
//     .then(data => {
//         data.posts.forEach(add_post);
//     })
// };

function add_post(contents) {
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = `${contents} <button class="hide">Hide</button>`;
    document.querySelector('#posts').append(post);
};