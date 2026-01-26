
let vk_el = document.querySelector('.vk')
let tg_el = document.querySelector('.tg')
let mail_el = document.querySelector('.mail')
let gh_el = document.querySelector('.github')
let scrol_btn = document.querySelector('.fa-chevron-down')

vk_el.addEventListener('click', function() {
    console.log('перенаправление на вк')
    location.assign('https://vk.com/feed')
})

tg_el.addEventListener('click', function() {
    console.log('перенаправление на тг')
    location.assign('https://web.telegram.org/a/')
})

mail_el.addEventListener('click', function() {
    console.log('перенаправление на почту')
    location.assign('https://e.mail.ru/inbox/?back=1')
})

gh_el.addEventListener('click', function() {
    console.log('перенаправление на гитхаб')
    location.assign('https://github.com/dashboard')
})

function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
}
scrol_btn.addEventListener('click', scrollDown)

anime({
    targets: '.name',
    translateX: [
        {value: 0, duration: 0},
        {value: 100,duration: 1000},
        {value: 0,duration: 1000},
    ],
    delay: 1000,
    loop: true,
    easing: 'linear'
})



