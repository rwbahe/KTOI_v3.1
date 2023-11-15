
/* header component file specifically for index.html, to make filepaths valid */

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <div id="topbar"></div>
                <div id="navbar">

                    <div id="logo">
                        <a href="./index.html" id="logo-cont">
                            <div id="logo-image"></div>
                        </a>
                        <div id="title">
                            <h1>Kootenai Tribe</h1>
                            <h2>of Idaho</h2>
                        </div>
                    </div>

                    <div id="nav">
                        <div class="nav-item"> About Us
                            <div class="dropdown-item">
                                <a href="./pages_AboutUs/tribalHistory.html">Tribal History</a>
                                <a href="./pages_AboutUs/kootenaiWar.html">Kootenai War of 1974</a>
                            </div>
                        </div>
                        <div class="nav-item"> Government
                            <div class="dropdown-item">
                                <a href="./pages_Government/tribalCouncil.html">Tribal Council</a>
                                <a href="./pages_Government/administration.html">Administration</a>
                                <a href="./pages_Government/environment.html">Environment</a>
                                <a href="./pages_Government/fish&Wildlife.html">Fish & Wildlife</a>
                                <a href="./pages_Government/health.html">Health</a>
                                <a href="./pages_Government/education.html">Education</a>
                                <a href="./pages_Government/finance.html">Finance</a>
                                <a href="./pages_Government/legal.html">Legal</a>
                                <a href="./pages_Government/law&OrderCode.html">Law & Order Code</a>
                                <a href="./pages_Government/tribalCourt.html">Tribal Court</a>
                                <a href="./pages_Government/lawEnforcement.html">Law Enforcement</a>
                            </div>
                        </div>
                        <div class="nav-item"> Enterprise
                            <div class="dropdown-item">
                                <a href="./pages_Enterprise/innCasinoSpa.html">Kootenai River Inn Casino & Spa</a>
                                <a href="./pages_Enterprise/twinRiverResort.html">Twin Rivers Resort</a>
                                <a href="./pages_Enterprise/sturgeonStation.html">Sturgeon Station</a>
                            </div>
                        </div>
                        <div class="nav-item"> Contact
                            <div class="dropdown-item">
                                <a href="./pages_Contact/generalContact.html">General Contact</a>
                                <a href="./pages_Contact/departmentContact.html">Department Contacts</a>
                            </div>
                        </div>
                    </div>

                    <div id="nav-mobile">
                        <div id="nav-mobile_item-container"> 
                            <div class="nav-item-mobile"> About Us
                                <div class="dropdown-item-mobile">
                                    <a href="./pages_AboutUs/tribalHistory.html">Tribal History</a>
                                    <a href="./pages_AboutUs/kootenaiWar.html">Kootenai War of 1974</a>
                                </div>
                            </div>
                            <div class="nav-item-mobile"> Government
                                <div class="dropdown-item-mobile">
                                    <a href="./pages_Government/tribalCouncil.html">Tribal Council</a>
                                    <a href="./pages_Government/administration.html">Administration</a>
                                    <a href="./pages_Government/environment.html">Environment</a>
                                    <a href="./pages_Government/fish&Wildlife.html">Fish & Wildlife</a>
                                    <a href="./pages_Government/health.html">Health</a>
                                    <a href="./pages_Government/education.html">Education</a>
                                    <a href="./pages_Government/finance.html">Finance</a>
                                    <a href="./pages_Government/legal.html">Legal</a>
                                    <a href="./pages_Government/law&OrderCode.html">Law & Order Code</a>
                                    <a href="./pages_Government/tribalCourt.html">Tribal Court</a>
                                    <a href="./pages_Government/lawEnforcement.html">Law Enforcement</a>
                                </div>
                            </div>
                            <div class="nav-item-mobile"> Enterprise
                                <div class="dropdown-item-mobile">
                                    <a href="./pages_Enterprise/innCasinoSpa.html">Kootenai River Inn Casino & Spa</a>
                                    <a href="./pages_Enterprise/twinRiverResort.html">Twin Rivers Resort</a>
                                    <a href="./pages_Enterprise/sturgeonStation.html">Sturgeon Station</a>
                                </div>
                            </div>
                            <div class="nav-item-mobile"> Contact
                                <div class="dropdown-item-mobile">
                                    <a href="./pages_Contact/generalContact.html">General Contact</a>
                                    <a href="./pages_Contact/departmentContact.html">Department Contacts</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div id="navbar-border"></div>
                <div id="banner"></div>
            </header>
        `;
    }
}

customElements.define('header-component', Header);