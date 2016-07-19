//Source: Danny Blue
//https://plnkr.co/edit/Rgmcg9aG4ENM99aLp7OV?p=preview
class CustomElement extends HTMLElement {
  get username() {
    return this._username;
  }

  set username(value) {
    if(this._username !== value) {
      this._username = value;
      this.setAttribute('username', value);
      this.render();
    }
  }

  attachedCallback() {
    this.addEventListener('click', (e) => {
      var eventObj = new CustomEvent('selected', {
        detail: this.username
      });

      if(e.target.tagName === 'BUTTON') {
        // fire custom event
        this.dispatchEvent(eventObj);
      }
    });
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this[name] = newVal;
  }

  render() {
    this.innerHTML = this.renderString(this.username);
  }

  renderString(val = '') {
    return `
        <div style="border: solid 1px #000;">
          The Custom Element
          <h2>
            Hello My Name is ${val} <button>Select</button>
          </h2>
        </div>
      `
  }
}

document.registerElement('custom-element', CustomElement);
