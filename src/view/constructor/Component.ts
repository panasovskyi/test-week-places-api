export class Component {
  protected element: HTMLElement;

  constructor(tag: string) {
    this.element = document.createElement(tag);
  }

  render(): HTMLElement {
    return this.element;
  }

  on(e: string, handler: EventListener) {
    this.element.addEventListener(e, handler);

    return this;
  }

  /*   setContent(html: string) {
    this.element.innerHTML = html;

    return this;
  } */

  clearContent() {
    this.element.innerHTML = "";

    return this;
  }

  setText(text: string) {
    this.element.textContent = text;

    return this;
  }

  append(...children: (Component | HTMLElement | string)[]) {
    children.forEach((child) => {
      if (child instanceof Component) {
        this.element.append(child.render());
      } else if (typeof child === "string") {
        this.element.append(document.createTextNode(child));
      } else {
        this.element.append(child);
      }
    });

    return this;
  }

  setAttr(name: string, value: string) {
    const allowedAttrs = ["placeholder"];

    if (!allowedAttrs.includes(name)) return this;

    this.element.setAttribute(name, value);

    return this;
  }
}
