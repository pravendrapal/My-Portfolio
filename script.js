// document.addEventListener('DOMContentLoaded', function() {
//     // Smooth scrolling
//     const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
//     for (const smoothScrollLink of smoothScrollLinks) {
//         smoothScrollLink.addEventListener('click', function(event) {
//             event.preventDefault();
//             const targetId = this.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);
//             if (targetElement) {
//                 const targetPosition = targetElement.offsetTop;
//                 window.scrollTo({
//                     top: targetPosition,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    const experienceBox = document.querySelector('.experience-box');
    const educationBox = document.querySelector('.education-box');

    // Hide experience and education boxes by default
    experienceBox.style.display = 'none';
    educationBox.style.display = 'none';

    // Toggle visibility of experience box
    document.getElementById('toggle-experience').addEventListener('click', function() {
        if (experienceBox.style.display === 'none') {
            experienceBox.style.display = 'block';
        } else {
            experienceBox.style.display = 'none';
        }
    });

    // Toggle visibility of education box
    document.getElementById('toggle-education').addEventListener('click', function() {
        if (educationBox.style.display === 'none') {
            educationBox.style.display = 'block';
        } else {
            educationBox.style.display = 'none';
        }
    });
});
