import { GradNavbar, GradPathChangedEvent } from '@gruppe-adler/navbar-component';
import type { Router } from 'vue-router';

export function registerNavbar(router: Router) {
    window.customElements.define('grad-navbar', GradNavbar);

    const el = document.createElement('grad-navbar');
    el.setAttribute('active-path', '/wiki');
    el.setAttribute('sublinks-hidden', 'true');
    el.setAttribute('nav-style', 'z-index: 1000;');

    document.body.appendChild(el);

    el.addEventListener('gradpathchanged', e => {
        const path = (e as GradPathChangedEvent).gradPath;

        if (path === '/wiki') {
            router.push('/');
            e.preventDefault();
        }
    });
}