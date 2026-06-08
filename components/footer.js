window.FooterComponent = function() {
    return `
    <section class="footer-above">
        <div class="footer-grid">
            <div class="footer-section">
                <h3>Contact</h3>
                <ul>
                    <li>Phone: 0360-2216826 (O)</li>
                    <li>Email: secy-lykta-arn[at]gov[dot]in</li>
                    <li>Address: Officer's Apartment, Zoo Road, Tower-1, Itanagar, Arunachal Pradesh - 791113</li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Help Section</h3>
                <ul>
                    <li><a href="feedback.html">Feedback</a></li>
                    <li><a href="help.html">Help</a></li>
                    <li><a href="website-policy.html">Website Policy</a></li>
                    <li><a href="accessibility-statement.html">Accessibility Statement</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>External Links</h3>
                <ul>
                    <li><a href="https://dopt.gov.in/" target="_blank" rel="noopener">Dept. of Personnel & Training</a></li>
                    <li><a href="http://ghcitanagar.gov.in/" target="_blank" rel="noopener">Gauhati High Court, Itanagar Bench</a></li>
                    <li><a href="http://arunachalgovernor.gov.in" target="_blank" rel="noopener">Governor of Arunachal Pradesh</a></li>
                    <li><a href="http://www.arunachalpradesh.gov.in/" target="_blank" rel="noopener">Govt. of Arunachal Pradesh</a></li>
                </ul>
            </div>
        </div>
    </section>
    <div class="footer-bottom">
        <div class="footer-links-row" style="margin-bottom: 0.5rem; display: flex; gap: 1rem; justify-content: center; font-size: 0.9rem;">
            <a href="index.html" style="color: var(--clr-primary-200); text-decoration: none;">Home</a> <span style="color: var(--clr-primary-400);">|</span> 
            <a href="sitemap.html" style="color: var(--clr-primary-200); text-decoration: none;">Sitemap</a> <span style="color: var(--clr-primary-400);">|</span> 
            <a href="disclaimer.html" style="color: var(--clr-primary-200); text-decoration: none;">Disclaimer</a>
        </div>
        <div style="display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 1rem; margin-top: 1rem;">
            <p style="margin: 0;">© ${new Date().getFullYear()} Arunachal Pradesh Lokayukta</p>
            <span style="color: var(--clr-primary-400);">|</span>
            <a href="https://www.nic.in" target="_blank" rel="noopener" style="display: inline-block; transition: opacity 0.3s ease; opacity: 0.9;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.9'">
                <img src="images/Nic_logo3-01.png" alt="National Informatics Centre" style="height: 30px; width: auto; display: block;">
            </a>
        </div>
    </div>
    `;
};
