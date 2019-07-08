const line = document.querySelectorAll('.line2');
const faqText = document.querySelectorAll('.faq__text'),
    active = document.getElementsByClassName('active'),
    activeLine = document.getElementsByClassName('line2_active');
[...faqText].forEach(function (item, i, panelItem) {
    item.addEventListener('click', function (e) {
        if (active.length > 0 && active[0] !==
            this)
            active[0].classList.remove('active');
        this.classList.toggle('active');
        let line = this.lastElementChild.lastElementChild
        line.classList.toggle('line2_active');
        if (activeLine.length > 0 && activeLine[0] !== line)
            activeLine[0].classList.remove('line2_active')

    });
});