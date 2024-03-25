export enum Attribute {
	'postType' = 'postType',
	'description' = 'description',
	'likesCount' = 'likesCount',
	'username' = 'username',
	'image' = 'image',
	'isLiked' = 'isLiked',
	'isSaved' = 'isSaved',
}

class PostImage extends HTMLElement {
	postType?: string;
	description?: string;
	likesCount?: number;
	username?: string;
	image?: string;
	isLiked?: boolean;
	isSaved?: boolean;

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			postType: null,
			description: null,
			likesCount: null,
			username: null,
			image: null,
			isLiked: null,
			isSaved: null,
		};
		return Object.keys(attrs);
	}

	// attributeChangedCallback(
	// 	propName: Attribute,
	// 	oldValue: string | undefined,
	// 	newValue: string | undefined
	// 	) {
	// 	switch (propName) {
	// 		default:
	// 			this[propName] = newValue;
	// 			break;
	// 	}
	// 	this.render();
	// }

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	changeLike() {
		this.isLiked = !this.isLiked;
		console.log('isLiked:', this.isLiked);
		this.render;
	}

	changeSaved() {
		this.isSaved = !this.isSaved;
		console.log('isSaved:', this.isSaved);
		this.render;
	}

	render() {
		let corazon = null;
		if (this.isLiked) {
			corazon = '';
		} else {
			corazon = 'vacio';
		}

		let save = null;
		if (this.isSaved) {
			save = 'lleno'; //imagennnnn
		} else {
			save = 'vacio';
		}

		if (this.shadowRoot && this.postType == 'post') {
			this.shadowRoot.innerHTML = `
			<link rel="stylesheet" href="./postImage.css">

			<section class="container">
			<img src = ${this.image} >
			<div>
				<div>
					<img src = ${corazon} id = "likeBtn">
					<img src = ${save} id = "saveBtn">
				</div>
				//contador likes
				<div>
					<p>${this.username}</p>
					<p>${this.description}</p>
				</div>
			</div>
			</section>
  `;
		}

		let likeBtn = document.getElementById('likeBtn');
		likeBtn?.addEventListener('click', this.changeLike);

		let saveBtn = document.getElementById('saveBtn');
		saveBtn?.addEventListener('click', this.changeSaved);
	}
}

customElements.define('post-image', PostImage);
export default PostImage;
