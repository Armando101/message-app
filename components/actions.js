import { initStyles } from "../helpers/styles.js";

export class Actions extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.htmlTemplate;
    initStyles("action-list", this.shadowRoot);
  }

  get htmlTemplate() {
    const html = `
      <i class="icon-smile"></i>
      <i class="icon-paperclip"></i>

      <input type="text" placeholder="Escribe un mensaje"/>

      <i class="icon-mic"></i>
    `;
    const styles = this.hostStyles;
    return styles + html;
  }

  get hostStyles() {
    return `
      <style>
        :host {
          background-color: var(--grey-4);
          display: grid;
          grid-template-columns: 1fr 1fr 25fr 1fr;
          gap: 1rem;
          align-items: center;
          padding: 1rem;
        }
      </style>
    `;
  }
}
