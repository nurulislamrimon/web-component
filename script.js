const template = document.createElement("template");
template.innerHTML = `
<style></style>
<div>
<label type="checkbox">
    <input type="checkbox" value="What"/>
    <slot></slot>
</label>
</div>
`;

class MyCustomClass extends HTMLElement {
  constructor() {
    super();
    this.shadow = null;
  }

  connectedCallback() {
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.append(template.content.cloneNode(true));
  }

  attributeChangedCallback() {}
}

customElements?.define("ni-rimon", MyCustomClass);
