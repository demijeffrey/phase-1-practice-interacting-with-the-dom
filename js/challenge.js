const counter = document.getElementById('counter')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
let pause = document.getElementById('pause')


const timer = setInterval(() => {
	let count = parseInt(counter.innerText)
  counter.innerText = count += 1
}, 1000)


plus.addEventListener('click', () => {
	let count = parseInt(counter.innerText)
	counter.innerText = count += 1
})


minus.addEventListener('click', () => {
	let count = parseInt(counter.innerText)
  counter.innerText = count -= 1
})

const likes = {}
heart.addEventListener('click', () => {
	const likeNumber = counter.innerText
	if(likeNumber in likes) {
		likes[likeNumber]++
	} else {
		likes[likeNumber] = 1
	}
	const li = document.createElement('li')
	li.textContent = `${counter.innerText} has been liked ${likes[likeNumber]} times`
	document.querySelector('ul').appendChild(li)
})


function disableButtons () {
	document.getElementById('minus').disabled = true
	document.getElementById('plus').disabled = true
	document.getElementById('heart').disabled = true
}

function enableButtons () {
	document.getElementById('minus').disabled = false
	document.getElementById('plus').disabled = false
	document.getElementById('heart').disabled = false
}

pause.addEventListener('click', () => {
	clearInterval(timer)
	pause.innerText = 'restart'
	disableButtons()
	pause.addEventListener('click', () => {
		setInterval(() => {
			let count = parseInt(counter.innerText)
			counter.innerText = count += 1
		}, 1000)
		pause.innerText = 'pause'
		enableButtons()
	})
	// pause.reset()
})


const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
	e.preventDefault()
	let newComment = document.getElementById('comment-input').value
	inputComment(newComment)
	form.reset()
})

function inputComment (comment) {
	let p = document.createElement('p')
	document.querySelector('div').appendChild(p)
	let li = document.createElement('li')
	li.textContent = `${comment}`
	p.appendChild(li)
}