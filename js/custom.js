(function (factory) {
    typeof define === 'function' && define.amd ? define('custom', factory) :
    factory();
})((function () { 'use strict';

    const menu = document.querySelector('.menu__container-js');
    const links = menu.querySelectorAll('li');
    links.forEach(link => {
      link.addEventListener('click', e => {
        const link = e.target;
        menu.querySelector('.active').classList.remove('active');
        link.classList.add('active');
        document.querySelector('.content_active').classList.remove('content_active');
        document.querySelector(`[data-content='${link.id}']`).classList.add('content_active');
      });
    });

    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    };

    window.addEventListener('resize', appHeight);
    appHeight();

}));
