
const container = document.querySelector('.container')
const btn = container.querySelector('.light-bulb button');
const bulb = container.querySelector('.light-bulb .bulb')

console.log(btn)
btn.addEventListener('click', () => {
    bulb.classList.toggle('light');
    container.classList.toggle('dark');
    btn.classList.toggle('color_btn')
})