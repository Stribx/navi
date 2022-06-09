let loading = document.querySelector('.loading');
let nav = document.querySelector('ul');
let menutoggle = document.querySelector('.toggle');

window.addEventListener('load', function(){
    loading.parentElement.removeChild(loading);
})

menutoggle.onclick = function(){
    menutoggle.classList.toggle('active')
    nav.classList.toggle('active')
} 