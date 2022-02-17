/**
 * Applies styles to your web component
 * @param {string} nameFile css name file where are your styles
 * @param {ShadowRoot} shadowRoot
 */
export function initStyles(nameFile, shadowRoot) {
  const style = document.createElement("link");
  style.setAttribute("rel", "stylesheet");
  style.setAttribute("href", `css/${nameFile}.css`);
  shadowRoot.append(style);
}
