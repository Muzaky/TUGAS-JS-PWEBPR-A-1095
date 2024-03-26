var buttons = document.querySelectorAll('button')

document.getElementById('yes').addEventListener('click', function(){
    buttons.forEach(function(button) {
        button.remove();
    });
    var img = document.getElementById('detektif');
    img.src = './assets/pembohong.png';
    document.getElementById('text').innerText = 'Anda Berbohong!';
    document.querySelector('.main > .container').style.backgroundColor = '#E12E2E';
    document.querySelector('.main > .container > p').innerText = 'Anda adalah seorang Teknisi'
});

document.getElementById('no').addEventListener('click', function(){
    buttons.forEach(function(button) {
        button.remove();
    });
    var img = document.getElementById('detektif');
    img.src = './assets/pembenar.png';
    document.getElementById('text').innerText = 'Anda Benar!';
    document.querySelector('.main > .container').style.backgroundColor = '#6FD240';
    document.querySelector('.main > .container > p').innerText = 'Anda adalah seorang Mahasiswa'
});
