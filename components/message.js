import { initStyles } from "../helpers/styles.js";

export class Message extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.htmlTemplate;
    initStyles("message", this.shadowRoot);
  }

  connectedCallback() {
    const message = this.shadowRoot.querySelector(".message");
    if (this.hasAttribute("is-receiver")) {
      message.classList.add("is-receiver");
    }
    if (this.hasAttribute("is-sender")) {
      message.classList.add("is-sender");
      this.addStatus();
    }
  }

  addStatus() {
    const details = this.shadowRoot.querySelector(".message-details");
    const status = document.createElement("span");
    status.classList.add("message-status", "is-doubleCheck");
    details.appendChild(status);
  }

  get htmlTemplate() {
    const html = `
      <div class="message">
        <div class="message-body">
          <p class="message-text"><slot name="content"></slot></p>
          <div class="message-details">
            <span class="message-date"><slot name="time"></slot></span>
          </div>
        </div>
      </div>
    `;
    return this.styles + html;
  }

  get styles() {
    return `
      <style>
        :host([is-receiver]) {
          align-self: flex-start;
        }
        :host([is-sender]) {
          align-self: flex-end;
        }
      </style>
    `;
  }
}
