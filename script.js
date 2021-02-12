let burger = document.querySelector('.burger'),
    lines1 = document.querySelector('.up1'),
    lines2 = document.querySelector('.up2'),
    lines3 = document.querySelector('.up3'),
    lines4 = document.querySelector('.up4');

    burger.addEventListener('click', () => {
        // lines1.style.animationName = "cross";
        // lines2.style.animationName = "cross2";
        // lines3.style.animationName = "cross1";
        // lines4.style.animationName = "cross4";
        document.body.classList.toggle('vrep');
    });