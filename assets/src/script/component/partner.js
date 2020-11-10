class OurPartner extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="row partner">
                <div class="col-md">
                    <figure class="figure">
                        <img src="assets/img/image4.png" class="figure-img img-fluid rounded" alt="...">
                    </figure>
                </div>

                <div class="col-md">
                    <figure class="figure">
                        <img src="assets/img/image7.jpg" class="figure-img img-fluid rounded" alt="...">
                    </figure>
                </div>

                <div class="col-md">
                    <figure class="figure">
                        <img src="assets/img/image5.png" class="figure-img img-fluid rounded" alt="...">
                    </figure>
                </div>

                <div class="col-md">
                    <figure class="figure">
                        <img src="assets/img/image6.png" class="figure-img img-fluid rounded" alt="...">
                    </figure>
                </div>

                <div class="col-md">
                    <figure class="figure">
                        <img src="assets/img/image3.png" class="figure-img img-fluid rounded" alt="...">
                    </figure>
                </div>
            </div>
        `;
    }
}

customElements.define("our-partner", OurPartner);