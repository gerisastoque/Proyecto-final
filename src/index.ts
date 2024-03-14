import './components/export';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		if (this.shadowRoot)
			this.shadowRoot.innerHTML = `
        <h1>title</h1>
        <post-images></post-images>
        `;
	}
}

customElements.define('app-container', AppContainer);
