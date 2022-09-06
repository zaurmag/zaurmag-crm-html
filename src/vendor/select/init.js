import { Select } from './select'

// Init select on the filter
new Select('#filterSelectType', {
	selectedID: 1,
})

// Init select on the filter
new Select('#filterSelectPeriod', {
	placeholder: 'Выбрать период',
})

// Page size
new Select('#pageSize', {
	selectedID: 1,
})

// Add form
new Select('#addRecordType', {
	selectedID: 1,
	classes: ['select--bordered'],
})
