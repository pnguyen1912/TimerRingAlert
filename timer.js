class timer {
    constructor() {}
    countdown() {
        let count = document.getElementById('div1');
        let time = 59;
        let a = setInterval(function () {
            if (time > 0) {
                //get random color
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                console.log(color)
                count.style.color = color;
                // set color
                // if (count.style.color =='white'){
                // count.style.color = 'red';} 
                // else if (count.style.color =='red')
                // {count.style.color ='green'}
                // else if (count.style.color =='green')
                // {count.style.color ='blue'}
                //  else {count.style.color = 'white'}
                count.innerHTML = time;
                time = time - 1;
            } else {
                let sound1 = document.getElementById('sound');
                sound1.play();
                alert('Happy New Year')
            }
        }, 1000);
        setTimeout(function () {
            clearInterval(a);
        }, 60500);
    }
}

let mypage = new timer();