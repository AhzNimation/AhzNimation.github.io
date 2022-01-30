const showJump = document.getElementById('showJump'),
    jump = document.getElementById('jump'),
    grade1 = document.getElementById('grade1'),
    youtubeImg = document.getElementById('youtubeImg');



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

function myGrade() {
    let date = new Date();
    let year = date.getFullYear(),
        month = date.getMonth();

    let grade;
    if (month > 6) {
        grade = year - 2021 + 7;
    } else if (month <= 6) {
        grade = year - 2021 + 6;
    }
    grade1.innerText = grade;
    setTimeout(myGrade, 100);
}
myGrade();
check1();