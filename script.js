

function retrieveText() {
    var inputText = document.getElementById("textInput").value;
    outputBox = document.getElementById("outputBox")
    outputBox.textContent = translateText(inputText)
}

document.addEventListener('keydown', function(event) {
    // Check if the key pressed is 'Ctrl + Shift + A'
    if (event.ctrlKey && event.key === 'Enter') {
      // Call your function here
      retrieveText();
    }
  });