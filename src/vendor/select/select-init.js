import {Select} from './select'

// Init select on the filter
const selectFilter = new Select('#filterSelectType', {
	selectedID: 1,
})

// Page size
const selectPageSize = new Select('#pageSize', {
	selectedID: 1,
})

// Add form
const addRecordType = new Select('#addRecordType', {
	selectedID: 1,
	classes: ['select--bordered'],
})
