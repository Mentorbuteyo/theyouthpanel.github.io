const textEl = document.getElementById('textEl');
const text = textEl.innerText;

let int = setInterval(writeText, 300);

writeText();

function writeText() {
    int++;
    
    textEl.innerHTML = text.slice(0, int);

    if(int > text.length){
        int = 0;
    }


}