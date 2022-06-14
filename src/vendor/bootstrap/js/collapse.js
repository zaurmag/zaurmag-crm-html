import {Collapse} from 'bootstrap'

const collapseElementsList = [].slice.call(document.querySelectorAll('[data-bs-toggle="collapse"]'))
const collapse = collapseElementsList.map((el) => new Collapse(el))
