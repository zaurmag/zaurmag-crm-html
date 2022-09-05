import enquire from 'enquire.js'
import {overlayAdd, overlayRemove} from '../overlay/overlay'
import {tooltip} from '../../vendor/bootstrap/js/tooltip'

const body = document.body
const btn = document.querySelector('.js-sb-collapse')
let isActive = false

enquire.register('screen and (max-width: 992px)', {
	match() {
		btn.dataset.bsOriginalTitle = 'Развернуть'
	},
})

btn.addEventListener('click', (event) => {
	event.preventDefault()
	isActive = !isActive
	tooltip[0].hide()

	if (isActive) {
		event.target.classList.add('is-active')
		event.target.dataset.bsOriginalTitle = 'Развернуть'
		body.classList.add('is-sb-collapsed')

		enquire.register('screen and (max-width: 992px)', {
			match() {
				const overlay = overlayAdd()
				overlay.addEventListener('click', remove)
			},
		})
	} else {
		remove()
	}

	function remove() {
		isActive = false
		body.classList.remove('is-sb-collapsed')
		event.target.classList.remove('is-active')

		enquire.register('screen and (min-width: 992px)', {
			match() {
				event.target.dataset.bsOriginalTitle = 'Свернуть'
			}
		})

		enquire.register('screen and (max-width: 992px)', {
			match() {
				overlayRemove()
			}
		})
	}
})
