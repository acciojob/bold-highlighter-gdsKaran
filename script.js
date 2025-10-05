function highlight() {
    // Select all <strong> elements
    const boldWords = document.querySelectorAll('strong');
    
    // Loop through each and set color to green
    boldWords.forEach(word => {
        word.style.color = 'rgb(0, 128, 0)';
    });
}

function return_normal() {
    // Select all <strong> elements
    const boldWords = document.querySelectorAll('strong');
    
    // Loop through each and reset color to black
    boldWords.forEach(word => {
        word.style.color = 'rgb(0, 0, 0)';
    });
}
