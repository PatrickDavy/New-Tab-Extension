'use strict';

const textEditor = document.querySelector(".text-editor");

const preview = document.querySelector(".preview");

const converter = new showdown.Converter();

const renderPreview = value => {
    preview.innerHTML = converter.makeHtml(value);
};

// let storedMarkdown = chrome.storage.local.get('markdown', function (data){
//     textEditor.value = storedMarkdown;
//     renderPreview(storedMarkdown);
// })

// textEditor.addEventListener("keyup", evt => {
//     const { value } = evt.target;
//     chrome.storage.local.set({'markdown': value}, function (){console.log("done")});
//     renderPreview(value);
// });

textEditor.addEventListener("keyup", evt => {
    const { value } = evt.target;
    chrome.storage.sync.set({key: value}, function () {
        // console.log(value);
    })
    renderPreview(value);
});

// const storedMarkdown = window.localStorage.getItem('markdown');
const storedMarkdown = chrome.storage.sync.get('key', function (data) {
    console.log(data);
});
if (storedMarkdown) {
    textEditor.value = storedMarkdown;
    renderPreview(storedMarkdown);
    // chrome.storage.local.get(['key'], function (result) {
    //     console.log(2 + result.key)
    // });
}

window.addEventListener("load", renderPreview(storedMarkdown))

let flag = 3070;

function addClass() {
    console.log(flag)
    let preview = document.getElementById('main-content');
    if (flag === 3070) {
        preview.classList.remove('add-3070')
        preview.classList.add('add-5050');
        flag = 5050;
    } else if (flag === 5050) {
        preview.classList.remove('add-5050')
        preview.classList.add('add-7030');
        flag = 7030;
    } else if (flag === 7030) {
        preview.classList.remove('add-7030')
        preview.classList.add('add-3070');
        flag = 3070;
    }
}

document.getElementById("addClass").addEventListener("click",addClass,false);