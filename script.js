$(document).ready(function () {


    //variable setup
    var loader = $('.loader');
    var container = $('.content-container');




    $('.homeButton').on('click',function () {
        hideProcess();
        container.load('./main/index.html',function () {
            showProcess();
            onHomeStart();
        });
    });

    $('.portfolioButton').on('click',function () {
        hideProcess();
        container.load('./portfolio/index.html',function () {
            onPortfolioStart();
            loader.hide();
        });
    });

    $('.projectButton').on('click',function () {
        hideProcess();
        container.load('./project/index.html',function () {
            loader.hide();
            onProjectStart();
        });
    });

    $('.contactButton').on('click',function () {
        hideProcess();
        container.load('./contact/index.html',function () {
            loader.hide();
            onContactStart();
        });
    })


    function onHomeStart() {
        //Load Particles
        particlesJS.load('div-1', 'js/settings/particle_home.json', function() {
            //console.log('callback - particles.js config loaded');
        });

        $('[data-parallax="scroll"]').parallax();
        showProcess();
    }

    function onPortfolioStart() {
        initiate();
        showProcess();
    }

    function onContactStart() {

        showProcess();
    }

    function onProjectStart() {

        showProcess();
    }

    function showProcess() {
        $(window).trigger('resize');
        loader.hide();
    }

    function hideProcess() {
        loader.show();
        container.html('');
    }

    $('.homeButton').click();

});