// TODO: прикрутить Popper.JS

const getTemplate = (data = [], placeholder, selectedID = null) => {
	let text = placeholder || 'Выберите'

	const items = data.map((item) => {
		let cls = ''
		if (item.id === selectedID) {
			text = item.title
			cls = ' is-selected'
		}

		return `<li class="select__item${cls}" data-type="item" data-id="${item.id}">${item.title}</li>`
	})

	return `
		<div class="select__text btn btn-light p-2" data-type="text">${text}</div>
		<div class="select__dropdown">
			<ul class="select__list shadow-sm">
				${items.join('')}
			</ul>
		</div>
    `
}

export class Select {
	constructor(selector, options = {}) {
		this.$el = document.querySelector(selector)
		this.options = options
		this.selectedID = options.selectedID || null
		this.class = ['select', ...options.classes || '']

		if (!this.$el) {
			return
		}

		this.#setup()
		this.#render()
		this.#getItems()
	}

	#getItems() {
		const options = this.$el.querySelectorAll('option')
		let i = 1
		let data = []

		options.forEach((item) => {
			data.push({
				id: i,
				value: item.value,
				title: item.innerText
			})
			i++
		})

		return [...data]
	}

	get data() {
		return this.#getItems()
	}

	#render() {
		const { placeholder, selectedID } = this.options
		this.$el.insertAdjacentHTML('afterbegin', getTemplate(this.data, placeholder, selectedID))
	}

	get $text() {
		return this.$el.querySelector('[data-type="text"]')
	}

	#setup() {
		const parent = this.$el.parentNode
		const nextElement = this.$el.nextElementSibling
		const select = document.createElement('div')
		select.classList.add(...this.class)
		select.prepend(this.$el)
		parent.insertBefore(select, nextElement)

		this.$el.style.display = 'none'
		this.$el = this.$el.parentNode

		this.clickHandler = this.clickHandler.bind(this)
		this.$el.addEventListener('click', this.clickHandler)

		this.clickDocHandler = this.clickDocHandler.bind(this)
		document.addEventListener('click', this.clickDocHandler)
	}

	clickHandler(event) {
		const { type } = event.target.dataset

		if (type === 'text') {
			this.toggle()
		} else if (type === 'item') {
			const id = event.target.dataset.id
			this.select(id)
		}
	}

	clickDocHandler(event) {
		if (!event.target.matches('.select__text')) {
			this.close()
		}
	}

	get current() {
		return this.data.find((item) => item.id === +this.selectedID)
	}

	select(id) {
		this.selectedID = id
		this.$text.textContent = this.current.title
		this.$el.querySelectorAll('[data-type="item"]').forEach((el) => {
			el.classList.remove('is-selected')
		})
		this.$el.querySelector(`[data-id="${id}"]`).classList.add('is-selected')

		// eslint-disable-next-line no-unused-expressions
		this.options.onSelect ? this.options.onSelect(this.current) : null

		this.close()
	}

	get isOpen() {
		return this.$el.classList.contains('is-open')
	}

	toggle() {
		// eslint-disable-next-line no-unused-expressions
		this.isOpen ? this.close() : this.open()
	}

	open() {
		this.$el.classList.add('is-open')
	}

	close() {
		this.$el.classList.remove('is-open')
	}

	destroy() {
		this.$el.removeEventListener('click', this.clickHandler)
		this.$el.innerHTML = ''
	}
}
