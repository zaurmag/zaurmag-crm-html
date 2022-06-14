import {Dropdown} from 'bootstrap'

// const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
const dropdownElementList = Array.from(document.querySelectorAll('.dropdown-toggle'))
dropdownElementList.map((el) => new Dropdown(el))
