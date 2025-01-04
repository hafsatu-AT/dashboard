
document.querySelectorAll('.action-button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#2980b9';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#3498db';
    });
});
