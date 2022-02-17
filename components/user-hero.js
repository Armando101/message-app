import { initStyles } from "../helpers/styles.js";

export class UserHero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = this.htmlTemplate;
    initStyles("user", this.shadowRoot);
  }

  get htmlTemplate() {
    const html = `
      <div class="user">
        <img
          width="48"
          height="48"
          src="./assets/images/user.jpg"
          alt="Foto de perfil de Josefina"
        />
        <p>
          <span class="user-name">Josefa</span>
          <span class="user-status">En Línea</span>
        </p>
      </div>
    `;
    return html;
  }
}
