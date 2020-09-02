'use strict';

const textEditor = document.querySelector(".text-editor");

const preview = document.querySelector(".preview");

const converter = new showdown.Converter({tables: true});

const renderPreview = value => {
    preview.innerHTML = converter.makeHtml(value);
};

textEditor.addEventListener("keyup", evt => {
    const { value } = evt.target;
    chrome.storage.sync.set({'key': value}, function () {
    })
    renderPreview(value);
});

let storedMarkdown = chrome.storage.sync.get('key', function (data) {
    console.log(data.key);
    textEditor.value = data.key;
    renderPreview(data.key);
});
if (storedMarkdown) {
    textEditor.value = storedMarkdown;
    renderPreview(storedMarkdown);
}

window.addEventListener("load", storedMarkdown)

let flag = 3070;

function addClass() {
    console.log(flag)
    let preview = document.getElementById('main-content');
    if (flag === 1000) {
        preview.classList.remove('add-1000')
        preview.classList.add('add-3070');
        flag = 3070;
    } else if (flag === 3070) {
        preview.classList.remove('add-3070')
        preview.classList.add('add-5050');
        flag = 5050;
    } else if (flag === 5050) {
        preview.classList.remove('add-5050')
        preview.classList.add('add-7030');
        flag = 7030;
    } else if (flag === 7030) {
        preview.classList.remove('add-7030')
        preview.classList.add('add-0100');
        flag = 100;
    } else if (flag === 100) {
        preview.classList.remove('add-0100')
        preview.classList.add('add-1000');
        flag = 1000;
    }
}

document.getElementById("addClass").addEventListener("click",addClass,false);