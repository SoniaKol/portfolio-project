import * as basicLightbox from 'basiclightbox';
// const basicLightbox = require('basiclightbox');
const footerForm = document.querySelector('.footer-form');
const instance = basicLightbox.create(
  `  <div class="modal-window">
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
  </div>`,
  {
    onShow: instance => {
      instance.element().querySelector('.modal-window-close').onclick =
        instance.close;
    },
  }
);
footerForm.addEventListener('submit', footerFormHandler);

function footerFormHandler(evt) {
  evt.preventDefault();

  instance.show();
  footerForm.reset();
}

export { footerForm, footerFormHandler };
