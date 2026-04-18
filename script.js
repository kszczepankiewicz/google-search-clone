const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');
const constantTextEl = document.getElementById('constant-text');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = constantTextEl.value + ' ' + inputEl.value;
    outputEl.textContent += value + '\n';
    navigator.clipboard.writeText(value);
    window.open(`https://www.google.com/search?q=` + encodeURIComponent(value));
});

//saveToLocalStorage(newEntry)
//handleApi()

//window.location.href property


