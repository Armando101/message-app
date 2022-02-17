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

        <div class="message is-receiver">
          <div class="message-body">
            <p class="message-text">Estoy recibiendo este mensaje</p>
            <div class="message-details">
              <span class="message-date">09:28 am</span>
            </div>
          </div>
        </div>

        <div class="message is-sender">
          <div class="message-body">
            <p class="message-text">Estoy mandando este mensaje</p>
            <div class="message-details">
              <span class="message-date">09:28 am</span>
              <span class="message-status is-doubleCheck"></span>
            </div>
          </div>
        </div>

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
