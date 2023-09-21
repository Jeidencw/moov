const tabs = document.querySelectorAll('.tab_btn')
const allContent = document.querySelectorAll('.content')
const line = document.querySelector('.line')


function toggleTab(index) {
    tabs.forEach(tab => tab.classList.remove('active'))
    tabs[index].classList.add('active')
    
    line.style.width = tabs[index].offsetWidth + 'px';
    line.style.left = tabs[index].offsetLeft + 'px';

    allContent.forEach(content => content.classList.remove('active'))
    allContent[index].classList.add('active')
}

tabs.forEach((tab, index) => tab.addEventListener('click', () => toggleTab(index)))

