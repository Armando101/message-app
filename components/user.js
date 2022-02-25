import { initStyles } from "../helpers/styles.js";

export class User extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.htmlTemplate();
  }

  connectedCallback() {
    initStyles("user", this.shadowRoot);
  }

  htmlTemplate() {
    return `  
    <div class="user">
        <div class="user-image">
          <img src="./assets/images/current-user.jpg" alt="user" />
        </div>
        <div class="user-info">
          <div class="user-header">
            <h4>Ingrid</h4>
            <p>Viernes</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing affex ...
          </p>
          </div>
      </div>
    `;
  }
}
