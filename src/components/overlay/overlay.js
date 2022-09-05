const body = document.body
let overlay = null

function show () {
	overlay = document.createElement('div')
	overlay.classList.add('overlay')
	body.classList.add('is-overlay-active')
	setTimeout(() => body.classList.add('is-overlay-animate'), 100)
	body.appendChild(overlay)
}

function hide () {
	overlay.remove()
	body.classList.remove('is-overlay-animate', 'is-overlay-active')
}

export default {
	show,
	hide
}
