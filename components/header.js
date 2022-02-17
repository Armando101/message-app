import { initStyles } from "../helpers/styles.js";

export class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.htmlTemplate;
    initStyles("header", this.shadowRoot);
  }

  get htmlTemplate() {
    const html = `
      <header class="header">
        <div class="header-primary">
          <wa-user></wa-user>
        </div>

        <div class="header-secondary">
          <button class="button">
            <i>search</i>
          </button>
        </div>
      </header>`;
    return html;
  }
}
