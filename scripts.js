const showJump = document.getElementById('showJump'),
    jump = document.getElementById('jump');



let jumpOpened = false;

function check1() {
    if (jumpOpened == false) {
        showJump.innerHTML = '='
        jump.classList.remove('slide')
    } else if (jumpOpened == true) {
        showJump.innerHTML = 'X'
        jump.classList.add('slide')

    }
    setTimeout(check1);
}

function clickCheck() {
    if (jumpOpened == false) {
        jumpOpened = true;
    } else if (jumpOpened == true) {
        jumpOpened = false;
    }
}

check1();