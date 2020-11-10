class FooterSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <ul>
                <h3>Company</h3>
                <li><a href="#about">Team</a></li>
                <li><a href="#about">Service</a></li>
                <li><a href="#about">Contact</a></li>
                <li><a href="#about">About Us</a></li>
            </ul>

            <ul>
                <h3>Social</h3>
                <li><a href="#about"><i class="fab fa-twitter"></i> Twitter</a></li>
                <li><a href="#about"><i class="fab fa-facebook-f"></i> Facebook</a></li>
                <li><a href="#about"><i class="fab fa-instagram"></i> Instagram</a></li>

            </ul>

            <ul>
                <h3>Contact Us</h3>
                <li>
                    <p>+62 8012345678</p>
                </li>
                <li>
                    <p>+62 223456789</p>
                </li>
                <li>
                    <p>info@coctailisious.com</p>
                </li>
            </ul>
        `;
    }
}

customElements.define("footer-section", FooterSection);