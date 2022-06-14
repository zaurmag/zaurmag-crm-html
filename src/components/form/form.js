function togglePassword(el) {
	el.forEach((item) => {
		const input = item.parentNode.querySelector('input[type="password"]')
		const icon = item.parentNode.querySelector('use')
		let isToggle = false

		item.addEventListener('click', (event) => {
			event.preventDefault()
			isToggle = !isToggle

			if (isToggle) {
				input.type = 'text'
				icon.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#eye-slash')
			} else {
				input.type = 'password'
				icon.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#eye')
			}
		})
	})
}

togglePassword(document.querySelectorAll('.pass-toggle--js'))

