import { initStyles } from "../helpers/styles.js";

export class User extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.htmlTemplate();
  }

  connectedCallback() {
    const image = this.attributes.image?.value;
    const name = this.attributes.name?.value;
    const day = this.attributes.day?.value;
    this.shadowRoot.innerHTML = this.htmlTemplate(image, name, day);
    initStyles("user", this.shadowRoot);
  }

  htmlTemplate(image, name, day) {
    return `  
    <div class="user">
        <div class="user-image">
          <img src=${image} alt=${name} />
        </div>
        <div class="user-info">
          <div class="user-header">
            <h4>${name}</h4>
            <p>${day}</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing affex ...
          </p>
          </div>
      </div>
    `;
  }
}
