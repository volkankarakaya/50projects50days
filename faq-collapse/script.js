const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach(button => {
    button.addEventListener('click', (e)=>{

        const parent = e.target.closest('.faq')
        parent.classList.toggle('active')
        
    })
})