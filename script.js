const template = `
<style>
div label{
background-color:red;
}
</style>
<div>
<label type="checkbox">
    <input type="checkbox"/>
    <slot></slot>
</label>
</div>
`;

class MyCustomClass extends HTMLElement {
  checked = "";
  constructor() {
    super();
    this.shadow = null;
  }

  // rendered
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = template;
  }

  // dependancy
  static get observedAttributes() {
    return ["name", "id"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("dependancy updated: ", name, oldValue, newValue);
  }
}

customElements.define("ni-rimon", MyCustomClass);
