const textEditor = document.querySelector(".text-editor");

const preview = document.querySelector(".preview");

const converter = new showdown.Converter();

const renderPreview = value => {
    preview.innerHTML = converter.makeHtml(value);
};

textEditor.addEventListener("keyup", evt => {
    const { value } = evt.target;
    window.localStorage.setItem('markdown', value);
    renderPreview(value);
});

const storedMarkdown = window.localStorage.getItem('markdown');
if (storedMarkdown) {
    textEditor.value = storedMarkdown;
    renderPreview(storedMarkdown);
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