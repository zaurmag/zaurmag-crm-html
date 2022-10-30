import { Tab } from 'bootstrap'

const dropdownElementList = Array.from(document.querySelectorAll('[data-bs-toggle="tab"]'))
dropdownElementList.map((el) => new Tab(el))
