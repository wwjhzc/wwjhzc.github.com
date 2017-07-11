document.body.style.overflow = 'hidden';
    var avatar = document.querySelector('.avatar');
    var audio = document.getElementById('bg-music');

    avatar.onmouseover = function() {
        console.log(1);
        avatar.classList.add('avatarStart');
    }
    avatar.onmouseleave = function() {
        avatar.classList.remove('avatarStart');
    }
    avatar.onclick = function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }