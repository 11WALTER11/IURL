/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

});

window.onload = () => {
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const navbar = document.getElementById('navbarResponsive');
    navbarToggler.addEventListener('click', () => {
        navbar.classList.toggle('show')
    })
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map((item)=>{
        item.addEventListener('click', () => {
            navbar.classList.toggle('show')
        })
    })
}

VANTA.NET({
  el: "#con-21 ",
  mouseControls: true,
  touchControls: true,
  gyroControls:true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xffc800,
  backgroundColor:0x212529,

  })
  VANTA.WAVES({
  el: "#Aboutus",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xa4a4a4,
  shininess: 0.00,
  waveHeight: 27.50,
  waveSpeed: 0.60,
  zoom: 0.70,
})
