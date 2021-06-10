var flag = 1;

function initialization() {
    let btn = document.getElementById('btn')
    let code = document.getElementsByClassName('code')
    let container = document.getElementsByClassName('container')
    
    color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    container[0].style.background = color
    document.getElementById('c').innerText=' '+color
   
}