(()=>{"use strict";class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot&&(this.shadowRoot.innerHTML="\n        <section>\n        <div>\n\n        </div>\n        </section>\n        ")}}customElements.define("post-images",t);class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot&&(this.shadowRoot.innerHTML="\n        <h1>title</h1>\n        <post-images></post-images>\n        ")}}customElements.define("app-container",e)})();