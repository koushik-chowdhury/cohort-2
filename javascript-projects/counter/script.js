let count = document.querySelector('#count')
let decrease = document.querySelector('#decrease')
let increase = document.querySelector('#increase')

let counter = 0
count.textContent = counter

increase.addEventListener('click', () => {
    counter++
    count.textContent = counter
})

decrease.addEventListener('click', () => {
  counter--
  count.textContent = counter;
});