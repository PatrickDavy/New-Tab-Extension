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

const BORDER_SIZE = 14;
const right_panel = document.getElementById("preview");

let m_pos;
function resize(e){
    const dx = m_pos - e.x;
    m_pos = e.x;
    right_panel.style.width = (parseInt(getComputedStyle(right_panel, '').width) + dx) + "px";
}

right_panel.addEventListener("mousedown", function(e){
    if (e.offsetX < BORDER_SIZE) {
        m_pos = e.x;
        document.addEventListener("mousemove", resize, false);
    }
}, false);

document.addEventListener("mouseup", function(){
    document.removeEventListener("mousemove", resize, false);
}, false);

window.addEventListener("load", renderPreview(storedMarkdown))