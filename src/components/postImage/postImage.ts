export default class PostImages extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		if (this.shadowRoot)
			this.shadowRoot.innerHTML = `
        <section>
        <div>

        </div>
        </section>
        `;
	}
}

customElements.define('post-images', PostImages);
