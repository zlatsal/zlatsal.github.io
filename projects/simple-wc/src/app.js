const template = document.createElement("template");
template.innerHTML = /*html*/ `
  <style>
    span {
      display: inline-block;
      padding: 1em 2em 1em 2em;
      text-align: center;
    }

    button {
      padding: 1em 2em 1em 2em;
      border: none;
      border-radius: 10px;
      background-color: black;
      color: white;
      font: 800 150% "segoe ui", helvetica, sans-serif;
    }
  </style>
  <button id="minus">-</button>
  <span id="count"></span>
  <button id="plus">+</button>`;

class SimpleCounter extends HTMLElement {
    constructor() {
        super();
        this.count = 0;
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.getElementById("minus").onclick = () => this.minus();
        this.shadowRoot.getElementById("plus").onclick = () => this.plus();
        this.update(this.count);
    }

    minus() {
        this.update(++this.count);
    }

    plus() {
        this.update(--this.count);
    }

    update(count) {
        this.shadowRoot.getElementById("count").innerHTML = count;
    }
}

customElements.define("simple-counter", SimpleCounter);
