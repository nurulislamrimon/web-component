const template = `
<style>
div label{
background-color:red;
}
</style>
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
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = template;
  }

  attributeChangedCallback() {}
}

customElements.define("ni-rimon", MyCustomClass);
