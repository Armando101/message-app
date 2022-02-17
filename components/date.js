import { initStyles } from "../helpers/styles.js";

export class Date extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.htmlTemplate;
    initStyles("date", this.shadowRoot);
  }

  get htmlTemplate() {
    const html = `
      <div class="date"><slot></slot></div>
    `;
    const style = this.hostStyles;
    return html + style;
  }
  get hostStyles() {
    return `
      <style>
        :host {
          align-self: center;
        }
      </style>
    `;
  }
}
