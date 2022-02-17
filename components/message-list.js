import { initStyles } from "../helpers/styles.js";

export class MessageList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.htmlTemplate;
    initStyles("message-list", this.shadowRoot);
  }

  get htmlTemplate() {
    const html = `
      <div class="message-list">
        <wa-date>Viernes</wa-date>
        <wa-message is-receiver>
          <span slot="content">Estoy recibiendo este mensaje</span>
          <span slot="time">09:28 am</span>
        </wa-message>

        <wa-message is-sender>
          <span slot="content">Estoy mandando este mensaje</span>
          <span slot="time">09:28 am</span>
        </wa-message>
        <wa-date>Jueves</wa-date>
      </div>`;
    const styles = this.hostStyles;
    return html + styles;
  }

  get hostStyles() {
    return `
      <style>
        :host {
          flex-grow: 1;
          display: flex;
        }
      </style>
    `;
  }
}
