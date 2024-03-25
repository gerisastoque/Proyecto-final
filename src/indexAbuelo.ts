import './components/indexPadre';
import { dataPostImage } from '../src/components/postImage/postImagedata';
// import './screens/main-feed/main-feed';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		if (this.shadowRoot)
			this.shadowRoot.innerHTML = `
        <h1>Hola mami como estas</h1>
				<postImage></postImage>

        `;
	}
}

customElements.define('app-container', AppContainer);
