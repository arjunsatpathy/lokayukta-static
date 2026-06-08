window.NavbarComponent = function() {
    return `
    <div class="top-bar" aria-label="Accessibility Bar">
        <div class="top-bar-content">
            <a href="accessibility-statement.html" class="top-bar-link" aria-label="Screen Reader Access">Screen Reader</a>
            <span class="top-separator">|</span>
            <a href="#main-content" class="top-bar-link hide-mobile">Skip to Main Content</a>
            <span class="top-separator hide-mobile">|</span>
            <a href="#nav-content" class="top-bar-link hide-mobile">Skip to Nav Content</a>
            <span class="top-separator hide-mobile">|</span>
            <div class="text-size-controls">
                <button class="text-size-btn" id="btn-decrease-text" aria-label="Decrease Font Size" title="Decrease Font Size">A-</button>
                <button class="text-size-btn" id="btn-normal-text" aria-label="Normal Font Size" title="Normal Font Size">A</button>
                <button class="text-size-btn" id="btn-increase-text" aria-label="Increase Font Size" title="Increase Font Size">A+</button>
            </div>
        </div>
    </div>
    <nav class="navbar" id="nav-content" role="navigation" aria-label="Main Navigation">
        <a href="index.html" class="nav-brand">
            <img src="ashokstambh.png" alt="Emblem of India">
            <div class="nav-brand-text">
                <span class="nav-brand-title">Arunachal Pradesh Lokayukta</span>
                
            </div>
        </a>
        <button class="mobile-menu-btn" aria-label="Toggle Menu">☰</button>
        <ul class="nav-links">
            <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
            <li class="nav-item">
                <a href="#" class="nav-link">About Us <span class="chevron">▼</span></a>
                <ul class="dropdown-menu">
                    <li><a href="introduction.html">Introduction</a></li>
                    <li><a href="history.html">History</a></li>
                    <li><a href="messagefromLokayukta.html">Message from Lokayukta</a></li>
                    <li><a href="organization-chart.html">Organization Chart</a></li>
                </ul>
            </li>
            <li class="nav-item"><a href="downloads.html" class="nav-link">Downloads</a></li>
            <li class="nav-item"><a href="photo_gallery.html" class="nav-link">Gallery</a></li>
            <li class="nav-item"><a href="faq.html" class="nav-link">FAQ</a></li>
            <li class="nav-item">
                <a href="#" class="nav-link">Public Info <span class="chevron">▼</span></a>
                <ul class="dropdown-menu">
                    <li><a href="cases.html">Cases</a></li>
                </ul>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">Contact <span class="chevron">▼</span></a>
                <ul class="dropdown-menu">
                    <li><a href="contact-us.html">Contact Us</a></li>
                    <li><a href="contactdir.html">Contact Directory</a></li>
                </ul>
            </li>
        </ul>
    </nav>
    `;
};
