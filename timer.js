class timer {
    constructor() {}
    countdown() {
        let count = document.getElementById('div1');
        let time = 59;
        let a = setInterval(function () {
            if (time > 0) {
                count.innerHTML = time;
                time = time - 1;
            } else {
                let sound1 = document.getElementById('sound');
                sound1.play();
                alert('time up')
            }
        }, 1000);
        setTimeout(function () {
            clearInterval(a);
        }, 60500);
    }
}

let mypage = new timer();