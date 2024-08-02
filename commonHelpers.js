import{A as f,S as c,a as d,K as u,M as m,N as w,b,c as g}from"./assets/vendor-ccf7791c.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();new f(".accordion-container",{openOnInit:[0],elementClass:"about-me-item",triggerClass:"about-me-list-btn",panelClass:"about-me-list-panel"});new c(".about-me-skills",{modules:[d,u,m],autoplay:{delay:1e3},loop:!0,spaceBetween:0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!1},speed:700,mousewheel:{enabled:!0}});new f(".faq-list",{elementClass:"faq-item",triggerClass:"faq-list-btn",panelClass:"faq-list-panel",showMultiple:!0});const v=document.querySelector(".js-header-menu-btn"),l=document.querySelector(".js-header-nav-list"),h=document.querySelector(".js-burger-menu");let o=!1;v.addEventListener("click",L);document.body.addEventListener("click",C);document.addEventListener("scroll",E);function L(){if(!o){l.classList.add("is-open"),o=!0;return}if(o){l.classList.remove("is-open"),o=!1;return}}function C(t){if(t.target!==v&&o===!0){l.classList.remove("is-open"),o=!1;return}}function E(){if(o){l.classList.remove("is-open"),o=!1;return}}const p=document.querySelector(".mobile-menu"),S=document.querySelector(".js-mobile-menu-close"),q=document.querySelectorAll(".js-mobile-menu-link");h.addEventListener("click",A);S.addEventListener("click",M);q.forEach(t=>t.addEventListener("click",j));function A(){p.classList.add("is-open"),document.body.classList.add("no-scroll")}function M(){p.classList.remove("is-open"),document.body.classList.remove("no-scroll")}function j(){p.classList.remove("is-open"),document.body.classList.remove("no-scroll")}new c(".projects-swiper",{modules:[w,u,m,d],navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!1},speed:700,mousewheel:{enabled:!0}});const P="https://portfolio-js.b.goit.study/api",k="reviews";b.defaults.baseURL=P;const x=document.querySelector(".js-reviews-list");new c(".reviews-swiper",{modules:[w,u,m,d],navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},grabCursor:!0,keyboard:{enabled:!0,onlyInViewport:!1},speed:700,mousewheel:{enabled:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});function B(t){const n=t.map(({author:r,avatar_url:i,review:e})=>` <li class="reviews-item swiper-slide">
          <img src="${i}" alt="${r} photo" class="reviews-item-img" />
          <h3 class="reviews-item-title">${r}</h3>
          <p class="reviews-item-text">${e}</p>
        </li>`).join("");x.insertAdjacentHTML("beforeend",n)}async function O(){const t=(await b.get(k)).data;B(t)}const y=document.querySelector(".footer-form"),F=g.create(`  <div class="modal-window">
    <button type="button" class="modal-window-close">  <svg
        class="modal-window-close-icon"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.7071 6.29289C22.0976 6.68342 22.0976 7.31658 21.7071 7.70711L7.70711 21.7071C7.31658 22.0976 6.68342 22.0976 6.29289 21.7071C5.90237 21.3166 5.90237 20.6834 6.29289 20.2929L20.2929 6.29289C20.6834 5.90237 21.3166 5.90237 21.7071 6.29289Z"
          fill="#FAFAFA"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289Z"
          fill="#FAFAFA"
        />
      </svg></button>
    <h3 class="modal-window-title">
      Thank you for your interest in cooperation!
    </h3>
    <p class="modal-window-text">
      The manager will contact you shortly to discuss further details and
      opportunities for cooperation. Please stay in touch.
    </p>
  </div>`,{onShow:t=>{t.element().querySelector(".modal-window-close").onclick=t.close}});y.addEventListener("submit",V);function V(t){t.preventDefault(),F.show(),y.reset()}O();
//# sourceMappingURL=commonHelpers.js.map
