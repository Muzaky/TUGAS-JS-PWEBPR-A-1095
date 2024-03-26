var buttons = document.querySelectorAll('button')

document.getElementById('yes').addEventListener('click', function(){
    buttons.forEach(function(button) {
        button.remove();
    });
    var img = document.getElementById('detektif');
    img.src = './assets/pembohong.png';
    document.getElementById('text').innerText = 'Anda Berbohong!';
    document.querySelector('.container > .main-container').style.backgroundColor = '#E12E2E';
    document.querySelector('.container > .main-container > p').innerText = 'Anda adalah seorang Teknisi'
});

document.getElementById('tidak').addEventListener('click', function(){
    buttons.forEach(function(button) {
        button.remove();
    });
    var img = document.getElementById('detektif');
    img.src = './resources/pembernar.png';
    document.getElementById('text').innerText = 'Anda Benar!';
    document.querySelector('.container > .main-container').style.backgroundColor = '#6FD240';
    document.querySelector('.container > .main-container > p').innerText = 'Anda adalah seorang Mahasiswa'
});
