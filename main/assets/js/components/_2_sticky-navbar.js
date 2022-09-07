// File#: _2_sticky-navbar
// Usage: codyhouse.co/license
(function() {
    window.addEventListener('scroll', function(){
        var header = document.querySelector('.navbar');
        var mainHeader = document.querySelector('.main-header').offsetHeight;
        header.classList.toggle("sticky", window.scrollY > mainHeader);
    })
}());