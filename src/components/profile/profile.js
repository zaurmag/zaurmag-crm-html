import Quill from 'quill'

const $editor = document.querySelector('#editor')

if ($editor) {
    new Quill('#editor', {
        "modules": {
            "toolbar": [
                ["bold", "italic", "underline", "strike", "link", "image", "blockquote", "code", {"list": "bullet"}]
            ]
        },
        placeholder: 'Расскажите немного о себе...',
        theme: 'snow'
    })
}
