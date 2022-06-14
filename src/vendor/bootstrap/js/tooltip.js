import {Tooltip} from 'bootstrap'

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
export const tooltip = tooltipTriggerList.map((el) => new Tooltip(el))
