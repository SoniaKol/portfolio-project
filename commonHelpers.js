/* empty css                      */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const l=document.querySelector(".js-header-menu-btn"),c=document.querySelector(".js-header-nav-list"),d=document.querySelector(".js-burger-menu");let r=!1;l.addEventListener("click",a);function a(){if(!r){c.classList.add("is-open"),r=!0;return}if(r){c.classList.remove("is-open"),r=!1;return}}const i=document.querySelector(".mobile-menu"),f=document.querySelector(".js-mobile-menu-close");d.addEventListener("click",m);f.addEventListener("click",p);function m(){i.classList.add("is-open")}function p(){i.classList.remove("is-open")}
//# sourceMappingURL=commonHelpers.js.map
