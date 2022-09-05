import enquire from 'enquire.js'
import overlay from '../overlay/overlay'
import {tooltip} from '../../vendor/bootstrap/js/tooltip'

const body = document.body
const btn = document.querySelector('.js-sb-collapse')
let isActive = false

enquire.register('screen and (max-width: 992px)', {
	match() {
		btn.dataset.bsOriginalTitle = 'Развернуть'
		tooltip[0].disable()
	},
	unmatch() {
		tooltip[0].enable()
	}
})

btn.addEventListener('click', (event) => {
	tooltip[0].hide()
	isActive = !isActive

	if (isActive) {
		event.target.classList.add('is-active')
		event.target.dataset.bsTitle = 'Развернуть'
		body.classList.add('is-sb-collapsed')

		enquire.register('screen and (max-width: 992px)', {
			match() {
				overlay.show()
				document.addEventListener('click', (event) => {
					if (event.target.classList.contains('overlay')) {
						remove()
					}
				})
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
				event.target.dataset.bsTitle = 'Свернуть'
				tooltip[0].update()
			}
		})

		enquire.register('screen and (max-width: 992px)', {
			match: overlay.hide
		})
	}
})
