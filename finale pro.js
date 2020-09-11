 const items = document.querySelectorAll(".accordion .click");

            function toggleAccordion(){
                this.classList.toggle('active');
    
                    this.nextElementSibling.classList.toggle('active');
                    }
                           items.forEach(item => item.addEventListener('click', toggleAccordion));