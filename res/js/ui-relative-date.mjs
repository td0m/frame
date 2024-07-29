function relativeDate(date) {
	const now = new Date()

	const secs = (now - date) / 1_000 // in seconds
	const mins = secs / 60
	const hours = mins / 60
	const days = hours / 24
	const months = days / 31
	const years = days / 365

	function pluralify(n, singular, plural) {
	  n = Math.floor(n)
	  if (!plural) plural = singular + 's'
	  if (n === 1) return `${n} ${singular}`
		return `${n} ${plural}`
	}

	if (years <= -1) return "in " + pluralify(-years, "year")
	if (months <= -1) return "in " + pluralify(-months, "month")
	if (days <= -1) return "in " + pluralify(-days, "day")
	if (hours <= -1) return "in " + pluralify(hours, "hour")

	if (years >= 1) return pluralify(years, "year") + " ago"
	if (months >= 1) return pluralify(months, "month") + " ago"
	if (days >= 1) return pluralify(days, "day") + " ago"
	if (hours >= 1) return pluralify(hours, "hour") + " ago"
	if (mins >= 1) return pluralify(mins, "minute") + " ago"

	return 'just now'
}

class UiRelativeDate extends HTMLElement {
	static get observedAttributes() {
		return ["value"]
	}
	constructor() {
		super()
		this.attachShadow({ mode: "open" })
		this.shadowRoot.innerHTML = `
		`
	}
	connectedCallback() {
		this._render()
		this._interval = setInterval(() => this._render(), 30_000)
	}

	disconnectedCallback() {
		// TODO: test this
		clearInterval(this._interval)
	}

	_render() {
		if (this.value !== undefined) {
			this.shadowRoot.textContent = relativeDate(this.value)
			// this.shadowRoot.innerHTML = this.value
		} else {
			this.shadowRoot.textContent = 'UNDEFINED'
		}

	}

	get value() {
		const s = this.getAttribute("value")
		if (!s) return undefined
		return new Date(s)
	}

	set value(value) {
		this.setAttribute("value", value)
		this._render()
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue === newValue) return
		if (name === "value") {
			// this.value = new Date(newValue)
		}
	}
}

customElements.define("ui-relative-date", UiRelativeDate)
