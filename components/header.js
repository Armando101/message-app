import { createDOM } from "../helpers/dom.js";
import { initStyles } from "../helpers/styles.js";

export class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const image = this.attributes.image.value;
    const name = this.attributes.name?.value;
    const status = this.attributes.status?.value;
    this.shadowRoot.innerHTML = this.htmlTemplate(image, name, status);
    initStyles("header", this.shadowRoot);

    if (this.hasAttribute("search")) {
      this.addSearchIcon();
    }
  }

  addSearchIcon() {
    const header = this.shadowRoot.querySelector("header");
    const iconTemplate = `
      <div class="header-secondary">
        <i class="icon-search"></i>
      </div>
    `;
    const icon = createDOM(iconTemplate);
    header.appendChild(icon);
  }

  htmlTemplate(image, name, status) {
    const html = `
      <header class="header">
        <div class="header-primary">
          <wa-user-hero name = ${name} status = ${status} image = ${image}></wa-user-hero>
        </div>
      </header>`;

    return html;
  }
}
