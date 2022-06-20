let navTog = document.querySelector('#checkbox');
let nav = document.querySelector('#nav');
let dark = document.querySelector('#dark');


    const toggleBurger = () => {

        nav.classList.toggle('show');

        document.body.classList.toggle('no-scroll');


        if (nav.classList.contains('show')) {

                dark.style.opacity = 1;

                dark.style.display = 'flex';

        } else {

                dark.style.opacity = '';
                
                dark.style.display = '';
        }
    }; 

        const hideNav = () => {

            nav.classList.remove('show');

            document.body.classList.remove('no-scroll');

            dark.style.opacity = '';

            dark.style.display = '';

            document.getElementById('checkbox').checked = false;
        }

        navTog.addEventListener('click', () => {

          toggleBurger();

        });


        dark.addEventListener('click', hideNav);

        document.querySelectorAll(".nav-link").forEach(element => {

           element.addEventListener("click", hideNav);

        });  

        