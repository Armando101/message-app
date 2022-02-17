import { Date } from "./date.js";
import { Header } from "./header.js";
import { MessageList } from "./message-list.js";
import { Message } from "./message.js";
import { UserHero } from "./user-hero.js";

customElements.define("wa-header", Header);
customElements.define("wa-user", UserHero);
customElements.define("wa-date", Date);
customElements.define("wa-message-list", MessageList);
customElements.define("wa-message", Message);
