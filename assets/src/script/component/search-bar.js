class SearchBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search Drinks" id="search-input"
                        aria-label="Recipient's username" aria-describedby="button-addon2">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button" id="search-button">Search</button>
                    </div>
                </div>
        `;

    }
}

customElements.define("search-bar", SearchBar);