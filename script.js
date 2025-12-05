// CTA section
let cta = document.createElement('section');
cta.className = 'cta-section';
cta.style.backgroundColor = '#F67E7E';
cta.style.padding = '60px 100px';
cta.style.display = 'flex';
cta.style.justifyContent = 'space-between';
cta.style.alignItems = 'center';
document.body.appendChild(cta);

// CTA text
let ctaText = document.createElement('div');
ctaText.className = 'cta-text-box';
cta.appendChild(ctaText);

let ctaTitle = document.createElement('h1');
ctaTitle.className = 'cta-title';
ctaTitle.innerText = 'Ready to get started?';
ctaTitle.style.color = '#012F34';
ctaTitle.style.fontSize = '36px';
ctaTitle.style.margin = '0';
ctaText.appendChild(ctaTitle);

// CTA button
let ctaBtnBox = document.createElement('div');
ctaBtnBox.className = 'cta-btn-box';
cta.appendChild(ctaBtnBox);

let ctaBtn = document.createElement('button');
ctaBtn.className = 'cta-btn';
ctaBtn.innerText = 'contact us';
ctaBtn.style.padding = '12px 24px';
ctaBtn.style.backgroundColor = 'transparent';
ctaBtn.style.border = '2px solid #012F34';
ctaBtn.style.borderRadius = '30px';
ctaBtn.style.fontSize = '16px';
ctaBtn.style.cursor = 'pointer';
ctaBtn.style.color = '#012F34';
ctaBtnBox.appendChild(ctaBtn);


// ---------------- FOOTER ----------------

let footer = document.createElement('footer');
footer.className = 'footer';
footer.style.backgroundColor = '#002529';
footer.style.padding = '40px 100px';
footer.style.display = 'flex';
footer.style.justifyContent = 'space-between';
footer.style.alignItems = 'center';
document.body.appendChild(footer);

// Footer left (logo)
let footerLeft = document.createElement('div');
footerLeft.className = 'footer-left';
footer.appendChild(footerLeft);

let fLogo = document.createElement('p');
fLogo.className = 'footer-logo';
fLogo.innerText = 'myteam';
fLogo.style.color = 'white';
fLogo.style.fontSize = '24px';
fLogo.style.fontWeight = '700';
footerLeft.appendChild(fLogo);

// Footer right (icons)
let footerRight = document.createElement('div');
footerRight.className = 'footer-right';
footerRight.style.display = 'flex';
footerRight.style.gap = '20px';
footer.appendChild(footerRight);

let socialIcons = [
    "./facebook.png",
    "./pinterest.png",
    "./twitter.png"
];

socialIcons.forEach(src => {
    let iconBox = document.createElement('div');
    iconBox.className = 'icon-box';

    let icon = document.createElement('img');
    icon.src = src;
    icon.className = 'social-icon';
    icon.style.width = '22px';
    icon.style.cursor = 'pointer';

    iconBox.appendChild(icon);
    footerRight.appendChild(iconBox);
});