
const skills = document.getElementById('skills');
const experience = document.getElementById('experience');
const education = document.getElementById('education');
const skillToggle = document.getElementById('toggle-about');
const experienceToggle = document.getElementById('toggle-experience');
const educationToggle = document.getElementById('toggle-education');


skillToggle.addEventListener('click',function(){

    skills.style.display = null;
    experience.style.display = 'none';
    education.style.display = 'none';
    skillToggle.style.backgroundColor = '#0056b3'
    experienceToggle.style.backgroundColor = null
    educationToggle.style.backgroundColor = null
    skillToggle.style.color = '#EEEEEE';
    experienceToggle.style.color = null;
    educationToggle.style.color = null;
})

experienceToggle.addEventListener('click',function(){

    skills.style.display = 'none';
    experience.style.display = null;
    education.style.display = 'none';
    skillToggle.style.backgroundColor = null;
    experienceToggle.style.backgroundColor = '#0056b3';
    educationToggle.style.backgroundColor = null;
    skillToggle.style.color = null;
    experienceToggle.style.color = '#EEEEEE';
    educationToggle.style.color = null;
})

educationToggle.addEventListener('click',function(){

    skills.style.display = 'none';
    experience.style.display = 'none';
    education.style.display = null;
    skillToggle.style.backgroundColor = null;
    experienceToggle.style.backgroundColor = null;
    educationToggle.style.backgroundColor = '#0056b3';
    skillToggle.style.color = null;
    experienceToggle.style.color = null;
    educationToggle.style.color = '#EEEEEE';
})