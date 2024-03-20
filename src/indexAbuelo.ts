import './components/indexPadre';
import './screens/main-feed/main-feed';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		if (this.shadowRoot)
			this.shadowRoot.innerHTML = `
        <h1>Hola mami</h1>

				<main-feed></main-feed>
        `;
	}
}

customElements.define('app-container', AppContainer);
