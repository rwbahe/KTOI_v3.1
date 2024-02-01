class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div id="footer-cont">
                    <div id="footer-info">
                        <div>
                            <p>&#169 2023 Kootenai Tribe of Idaho</p>
                            <p>
                                <br>
                                Phone: <a id="footer-link" href="tel:2082673519">(208) 267-3519</a> 
                                <br>
                                Email: <a id="footer-link" href="mailto:info@kootenai.org">info@kootenai.org</a>
                                <br>
                                Address: 100 Circle Drive, Bonners Ferry, ID 83805
                            </p>
                        </div>
                    
                        <div>
                            <table>
                                <tr>
                                    <td>Hours:</td>
                                    <td>Mon</td>
                                    <td>8AM-4PM</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Tues</td>
                                    <td>8AM-4PM</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Wed</td>
                                    <td>8AM-4PM</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Thur</td>
                                    <td>8AM-4PM</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Fri</td>
                                    <td>8AM-4PM</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Sat</td>
                                    <td>Closed</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Sun</td>
                                    <td>Closed</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);
