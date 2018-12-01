class timer {
    constructor() {}
    countdown() {
        let count = document.getElementById('div1');
        let time = 59;
        let a = setInterval(function () {
            if (time > 0) {
                if (count.style.color =='white'){
                count.style.color = 'red';} else if (count.style.color =='red'){count.style.color ='green'} else {count.style.color = 'white'}
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