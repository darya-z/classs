
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



