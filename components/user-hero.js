import { createDOM } from "../helpers/dom.js";
import { initStyles } from "../helpers/styles.js";

export class UserHero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const image = this.attributes.image.value;
    const name = this.attributes.name?.value;
    const status = this.attributes.status?.value;
    this.shadowRoot.innerHTML = this.htmlTemplate(image, name, status);
    if (status !== "undefined") {
      this.addStatus(name, status);
    }
    initStyles("user-hero", this.shadowRoot);
  }

  addStatus(name, status) {
    const statusContainer = this.shadowRoot.querySelector(".user");
    statusContainer.appendChild(createDOM(this.htmlStatus(name, status)));
  }

  htmlTemplate(image) {
    const html = `
      <div class="user">
        <img
          width="48"
          height="48"
          src="${image}"
          alt="Foto de perfil de Josefina"
        />
      </div>
    `;
    return html;
  }

  htmlStatus(name, status) {
    return `
      <p>
        <span class="user-name">${name}</span>
        <span class="user-status">${status}</span>
      </p>
    `;
  }
}
