const botonEncriptar = document.getElementById("cipher-button");
const botonDesencriptar = document.getElementById("uncipher-button");
const input = document.getElementById('input-text');
const copyButton = document.getElementById('copyToClipboard');


function monstrarBotonCopy() {
    copyButton.style.display = "block";
}

botonEncriptar.addEventListener("click", e => {
    e.preventDefault();
    
    let text = input.value;
    text.toLowerCase();
    
    text = text.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/o/g, 'ober').replace(/a/g, 'ai').replace(/u/g, 'ufat');

    let processedText = document.getElementById('processed-text');

    processedText.textContent = text;

    monstrarBotonCopy();
});

botonDesencriptar.addEventListener("click", e => {
    e.preventDefault();

    let text = input.value;
    text.toLowerCase();

    text = text.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ai/g, 'a').replace(/ufat/g, 'u');

    let processedText = document.getElementById('processed-text');
   
    processedText.textContent = text;

    monstrarBotonCopy();
});

copyButton.addEventListener('click', e => {
    e.preventDefault();
    const text = document.getElementById('processed-text').innerText;
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch((error) => {
            alert("Hubo un error al copiar el texto");
        });
})


