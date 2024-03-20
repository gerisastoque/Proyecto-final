import './components/export';
class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	connectedCallback() {
		if (this.shadowRoot)
			this.shadowRoot.innerHTML = `
        <h1>Hola mami</h1>
        <post-images></post-images>
        `;
	}
}
customElements.define('app-container', AppContainer);
