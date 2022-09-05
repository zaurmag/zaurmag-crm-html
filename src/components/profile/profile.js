import Quill from 'quill'

new Quill('#editor', {
    "modules": {
        "toolbar": [
            ["bold", "italic", "underline", "strike", "link", "image", "blockquote", "code", {"list": "bullet"}]
        ]
    },
    placeholder: 'Расскажите немного о себе...',
    theme: 'snow'
})
