const markRead = document.querySelector('.clear');
const num = document.querySelector('.number');
const color = document.querySelectorAll('.blue');
const userInfo = document.querySelectorAll;
const hiddenRed = document.querySelectorAll('.red_dot');

markRead.addEventListener('click', () => {
    num.innerHTML = 0;

    color.forEach((el, index) => {
        el.style.backgroundColor = "white";
    })

    hiddenRed.forEach((el) => {
        el.style.display = "none";
    })

});

color.forEach((el, index) => {
    el.addEventListener('click', () => {
        el.style.backgroundColor = "white";

        hiddenRed[index].style.display = "none"

        let number = parseInt(num.innerText);

        if (number > 0) {
            number = number - 1;
        }

        num.innerHTML = number
    }, { once: true });
})
