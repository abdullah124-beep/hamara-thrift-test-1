/* ============================================================
   HAMARA THRIFT — ADMIN PANEL JAVASCRIPT
   Shared across all admin pages
   ============================================================ */

/* ---- CREDENTIALS (change before going live) ---- */
const ADMIN_CREDENTIALS = { username: 'admin', password: 'admin123' };

/* ---- AUTH GUARD — call on every page except login ---- */
function requireAuth() {
  if (sessionStorage.getItem('ht_admin_auth') !== '1') {
    window.location.href = 'index.html';
  }
}

/* ---- LOGOUT ---- */
function logout() {
  sessionStorage.removeItem('ht_admin_auth');
  window.location.href = 'index.html';
}

/* ============================================================
   DATA STORE — localStorage-backed, synced with script.js shape
   ============================================================ */
const Store = {
  /* Products */
  getProducts() {
    const raw = localStorage.getItem('ht_admin_products');
    if (raw) return JSON.parse(raw);
    // Seed from the live site's product list if available
    return this._defaultProducts();
  },
  saveProducts(products) {
    localStorage.setItem('ht_admin_products', JSON.stringify(products));
  },
  nextProductId() {
    const p = this.getProducts();
    return p.length ? Math.max(...p.map(x => x.id)) + 1 : 1;
  },

  /* Site Content */
  getContent() {
    const raw = localStorage.getItem('ht_admin_content');
    if (raw) return JSON.parse(raw);
    return this._defaultContent();
  },
  saveContent(content) {
    localStorage.setItem('ht_admin_content', JSON.stringify(content));
  },

  /* Orders (placeholder for Laravel) */
  getOrders() {
    const raw = localStorage.getItem('ht_admin_orders');
    if (raw) return JSON.parse(raw);
    return this._defaultOrders();
  },
  saveOrders(orders) {
    localStorage.setItem('ht_admin_orders', JSON.stringify(orders));
  },

  /* ---- DEFAULT DATA ---- */
  _defaultProducts() {
    return [
      { id:1,  title:"Nike Air Max 270",        price:4500, gender:"Men",    brand:"Nike",        size:10, condition:"Excellent", stock:1, featured:true,  category:"Lifestyle", description:"Classic Air Max 270 in near-mint condition. Iconic air unit for all-day comfort. Minor scuffs on outsole, upper is pristine.", images:["https://picsum.photos/seed/nike-am270-1/600/600","https://picsum.photos/seed/nike-am270-2/600/600","https://picsum.photos/seed/nike-am270-3/600/600","https://picsum.photos/seed/nike-am270-4/600/600"] },
      { id:2,  title:"Adidas Ultra Boost 22",   price:6200, gender:"Unisex", brand:"Adidas",      size:9,  condition:"New",       stock:1, featured:true,  category:"Running",   description:"Worn once — feels brand new. Responsive Boost midsole, Primeknit upper. Full box and laces included.", images:["https://picsum.photos/seed/adidas-ub22-1/600/600","https://picsum.photos/seed/adidas-ub22-2/600/600","https://picsum.photos/seed/adidas-ub22-3/600/600","https://picsum.photos/seed/adidas-ub22-4/600/600"] },
      { id:3,  title:"Puma RS-X3 Puzzle",       price:3200, gender:"Unisex", brand:"Puma",        size:8,  condition:"Good",      stock:1, featured:false, category:"Lifestyle", description:"Chunky retro runner in eye-catching colorway. Upper in good condition, outsole shows light wear.", images:["https://picsum.photos/seed/puma-rsx3-1/600/600","https://picsum.photos/seed/puma-rsx3-2/600/600","https://picsum.photos/seed/puma-rsx3-3/600/600","https://picsum.photos/seed/puma-rsx3-4/600/600"] },
      { id:4,  title:"New Balance 574 Classic", price:3800, gender:"Women",  brand:"New Balance", size:7,  condition:"Excellent", stock:1, featured:false, category:"Lifestyle", description:"Timeless NB 574 in excellent shape. Suede and mesh upper, ENCAP midsole. Light use — soles are nearly clean.", images:["https://picsum.photos/seed/nb574-1/600/600","https://picsum.photos/seed/nb574-2/600/600","https://picsum.photos/seed/nb574-3/600/600","https://picsum.photos/seed/nb574-4/600/600"] },
      { id:5,  title:"Jordan 1 Retro High OG",  price:8500, gender:"Men",    brand:"Jordan",      size:11, condition:"Excellent", stock:1, featured:true,  category:"Basketball",description:"The OG. Bred colourway, excellent condition. Minor creasing on toe box — completely expected for this age.", images:["https://picsum.photos/seed/j1-retro-1/600/600","https://picsum.photos/seed/j1-retro-2/600/600","https://picsum.photos/seed/j1-retro-3/600/600","https://picsum.photos/seed/j1-retro-4/600/600"] },
      { id:6,  title:"Converse Chuck 70 Hi",    price:2800, gender:"Unisex", brand:"Converse",    size:9,  condition:"Good",      stock:1, featured:false, category:"Lifestyle", description:"Chuck 70s with premium canvas and ortholite insole. Slight yellowing on midsole — vintage charm.", images:["https://picsum.photos/seed/chuck70-1/600/600","https://picsum.photos/seed/chuck70-2/600/600","https://picsum.photos/seed/chuck70-3/600/600","https://picsum.photos/seed/chuck70-4/600/600"] },
      { id:7,  title:"Nike Dunk Low Panda",     price:7200, gender:"Unisex", brand:"Nike",        size:8,  condition:"New",       stock:1, featured:true,  category:"Lifestyle", description:"Sold-out colourway. Worn twice — barely any marks. White/black leather upper in excellent shape.", images:["https://picsum.photos/seed/dunk-panda-1/600/600","https://picsum.photos/seed/dunk-panda-2/600/600","https://picsum.photos/seed/dunk-panda-3/600/600","https://picsum.photos/seed/dunk-panda-4/600/600"] },
      { id:8,  title:"Vans Old Skool Classic",  price:2200, gender:"Men",    brand:"Vans",        size:10, condition:"Good",      stock:1, featured:false, category:"Skate",     description:"Classic Old Skool in black/white. Waffle outsole still has good grip. Worn regularly but well maintained.", images:["https://picsum.photos/seed/vans-os-1/600/600","https://picsum.photos/seed/vans-os-2/600/600","https://picsum.photos/seed/vans-os-3/600/600","https://picsum.photos/seed/vans-os-4/600/600"] },
      { id:9,  title:"Adidas Yeezy Boost 350",  price:12000,gender:"Unisex", brand:"Adidas",      size:9,  condition:"Excellent", stock:1, featured:true,  category:"Lifestyle", description:"Authentic Yeezy 350 V2 in Zebra colourway. Very lightly used. Original laces. Box included.", images:["https://picsum.photos/seed/yeezy-350-1/600/600","https://picsum.photos/seed/yeezy-350-2/600/600","https://picsum.photos/seed/yeezy-350-3/600/600","https://picsum.photos/seed/yeezy-350-4/600/600"] },
      { id:10, title:"New Balance 990v5",       price:5500, gender:"Men",    brand:"New Balance", size:10, condition:"Good",      stock:1, featured:false, category:"Running",   description:"Made in USA 990v5. Premium suede and mesh. Comfortable for daily wear. Moderate creasing.", images:["https://picsum.photos/seed/nb990-1/600/600","https://picsum.photos/seed/nb990-2/600/600","https://picsum.photos/seed/nb990-3/600/600","https://picsum.photos/seed/nb990-4/600/600"] },
    ];
  },

  _defaultContent() {
    return {
      home: {
        hero: {
          eyebrow: "Multan, Pakistan",
          heading1: "Thrift Premium",
          heading2: "Sneakers in Multan",
          subtitle: "Second-hand shoes that look brand new. Sustainable sneaker culture starts here — premium brands at thrift prices.",
          ctaPrimary: "Shop Now",
          ctaSecondary: "Our Story",
          trustRating: "4.9/5 · 500+ happy buyers",
          trustQuote: "Looks brand new — for half the price!",
          trustAuthor: "Ali H., Bosan Road, Multan",
          stat1Number: "500+", stat1Label: "Pairs Sold",
          stat2Number: "20+",  stat2Label: "Brands",
          stat3Number: "4.9★", stat3Label: "Rating",
        },
        featured: {
          heading: "Featured",
          headingAccent: "Drops",
          subtitle: "Curated premium pairs — each one verified and authenticated by our team.",
          slide1Badge: "New Arrival",
          slide1Title: "Nike Air Force 1 Low — Triple White",
          slide1Detail: "PKR 5,500 · US Size 10 · Never Worn",
          slide2Badge: "",
          slide2Title: "Jordan 1 Retro High OG — Lightly Worn",
          slide2Detail: "PKR 7,800 · US Size 11 · Excellent",
          slide3Badge: "Premium Pick",
          slide3Title: "Adidas Ultra Boost 22 — Worn Once",
          slide3Detail: "PKR 6,200 · US Size 9 · Near New",
          slide4Badge: "Rare Find",
          slide4Title: "New Balance 990v5 Made in USA",
          slide4Detail: "PKR 7,200 · US Size 11 · Excellent",
          slide5Badge: "🔥 Hot",
          slide5Title: "Jordan 4 Retro — Fire Red",
          slide5Detail: "PKR 8,000 · US Size 10 · Excellent",
        },
        categories: {
          heading: "Shop by",
          headingAccent: "Category",
          subtitle: "Find your perfect pair — filtered by gender or your favorite brand.",
          cat1Label: "Men's", cat1Count: "12 pairs",
          cat2Label: "Women's", cat2Count: "8 pairs",
          cat3Label: "Nike", cat3Count: "6 pairs",
          cat4Label: "Adidas", cat4Count: "5 pairs",
        },
        newArrivals: {
          heading: "New",
          headingAccent: "Arrivals",
          subtitle: "Fresh drops, just landed. Grab them before they're gone.",
        },
        why: {
          heading: "Why",
          headingAccent: "Choose Us",
          subtitle: "We're not just a thrift store — we're Multan's sneaker culture movement.",
          card1Title: "Sustainable",
          card1Body: "Every pair you buy extends a shoe's life and reduces fashion waste. Real environmental impact.",
          card2Title: "Affordable",
          card2Body: "Premium brands at 30–70% off retail. Your sneaker dreams don't have to break the bank.",
          card3Title: "Verified Quality",
          card3Body: "Every pair is inspected, cleaned and graded honestly. What you see is exactly what you get.",
          card4Title: "Multan Local",
          card4Body: "We're based right here in Multan. Fast local delivery, easy returns, real human support.",
        },
        story: {
          badge: "Our Story",
          badgeYears: "3+",
          badgeYearsLabel: "Years in Multan",
          heading: "From a passion for sneakers to a movement",
          body1: "It started with a cupboard full of sneakers and a simple question: why do perfectly good shoes end up in the trash? In Multan, we built Hamara Thrift to answer that question — connecting sneaker lovers with premium pairs at prices that actually make sense.",
          body2: "Every pair we list is hand-picked, cleaned, and graded honestly. We believe second-hand doesn't mean second-best — and happy customers across Pakistan agree.",
          cta: "Read Full Story",
        },
        testimonials: {
          heading: "What Multan",
          headingAccent: "Says",
          subtitle: "Real customers, real reviews from right here in Multan.",
          t1Quote: "Got a pair of Nike Air Max 270 in excellent condition for less than half the retail price. They look absolutely brand new. Delivery was fast too!",
          t1Name: "Ali Hassan", t1Location: "📍 Bosan Road, Multan",
          t2Quote: "Finally a thrift store in Multan that actually grades shoes honestly. Got my Adidas Stan Smiths exactly as described. Will definitely order again!",
          t2Name: "Sara Khan", t2Location: "📍 New Multan, Multan",
          t3Quote: "The Jordan 1s I bought were a steal. Condition was exactly as listed. The packaging was neat and the team was super responsive on WhatsApp. 10/10!",
          t3Name: "Usman Qureshi", t3Location: "📍 Cantonment, Multan",
          t4Quote: "Bought Puma RS-X3 for my brother as a gift. He thought they were brand new! The photos on the website were accurate. Love the sustainable concept.",
          t4Name: "Ayesha Malik", t4Location: "📍 Shah Rukn-e-Alam, Multan",
          t5Quote: "Great service, great prices. The Vans Old Skool I got had one tiny scuff that wasn't shown in photos but the team gave me a discount. Very honest guys.",
          t5Name: "Hamza Raza", t5Location: "📍 Wapda Town, Multan",
          t6Quote: "Same-day delivery in Multan is a game changer. Got my New Balance 574s the same evening I ordered. Absolutely perfect condition!",
          t6Name: "Zara Ahmed", t6Location: "📍 Gulgasht Colony, Multan",
        },
        instagram: {
          heading: "Follow",
          headingAccent: "@hamarathriftmultan",
          subtitle: "Join the community on Instagram. Real fits, real vibes, real Multan.",
          handle: "hamarathriftmultan",
          ctaText: "Follow on Instagram",
        },
        newsletter: {
          heading: "Stay in the",
          headingAccent: "Loop",
          subtitle: "Get notified first when premium pairs drop. No spam, just sneakers.",
          privacyNote: "No spam. Unsubscribe anytime.",
        },
        footer: {
          description: "Pakistan's premier pre-loved sneaker store — operated from Multan, delivering nationwide. Sustainable, affordable, and absolutely iconic.",
          copyright: "© 2026 Hamara Thrift Multan. All rights reserved.",
          madeIn: "Made with ❤ in Multan, Pakistan",
          instagram: "https://instagram.com/hamarathriftmultan",
          facebook: "https://facebook.com/hamarathriftmultan",
          tiktok: "https://tiktok.com/@hamarathriftmultan",
        },
      },
      about: {
        heroHeading: "We Love Sneakers.",
        heroSubheading: "We Hate Waste.",
        heroSubtitle: "A home-based passion project from Wapda Town, Multan — delivering premium pre-loved sneakers across Pakistan.",
        storyHeading: "How it Started",
        storyBody: "What started as a passion project from a house in Wapda Town, Multan, has grown into a trusted name for pre-loved premium sneakers across Pakistan — delivering nationwide via TCS.",
        founderName: "Abdullah Arshad",
        founderTitle: "Founder & Sole Curator",
        founderLocation: "Wapda Town, Multan",
        founderBio: "Abdullah grew up in Multan with a passion for sneakers but not the budget for retail. He started collecting, cleaning, and reselling — and the response was overwhelming. His philosophy: If I wouldn't wear it, I won't sell it.",
        missionHeading: "Our Mission",
        missionBody: "Make premium sneaker culture accessible to everyone in Pakistan. No fake hype, no inflated prices — just honest grading and real pairs at fair prices.",
      },
      contact: {
        heroHeading: "Get in Touch",
        phone: "+92 300 1234567",
        email: "hello@hamarathrift.pk",
        address: "Wapda Town, Multan",
        whatsapp: "923001234567",
        hours: "Mon – Sun, 10am – 9pm",
        faqHeading: "Quick FAQs",
        faq1Q: "Do you deliver outside Multan?",
        faq1A: "Yes! We deliver all over Pakistan via TCS. Delivery charges are PKR 250–400 depending on your city (charges may vary with fuel prices). Estimated delivery time is 3–4 working days after dispatch.",
        faq2Q: "How do you grade the condition of shoes?",
        faq2A: "We use 4 grades: New (never worn, sometimes with box), Excellent (worn 1-5 times, near perfect), Good (normal wear, solid condition, minor visible use), Fair (heavier wear but structurally sound and clean). We photograph real flaws honestly.",
        faq3Q: "Can I return a pair if it's not as expected?",
        faq3A: "Yes! We have a 3-day return policy. If the shoe is not as described or shown, contact us on WhatsApp within 3 days of receiving it — we'll sort it out.",
        faq4Q: "What payment methods do you accept?",
        faq4A: "We accept Cash on Delivery (COD) for Multan orders. For other cities we accept EasyPaisa, JazzCash, and bank transfer before dispatch. We'll confirm payment details via WhatsApp.",
      },
      shop: {
        heroHeading: "All Sneakers",
        heroSubtitle: "Every pair is unique — hand-picked, graded, and priced honestly.",
      },
      delivery: {
        partner: "TCS",
        minCharge: 250,
        maxCharge: 400,
        fixedCharge: 300,
        estimatedDays: "3–4 working days",
        freeAbove: 0,
      },
      returnPolicy: {
        windowDays: 3,
        summary: "We offer exchanges within 3 days if the shoe is not as described. No cash refunds — exchange for another pair only.",
      },
    };
  },

  _defaultOrders() {
    return [
      { id: 'HT-1001', customer: 'Ahmed Raza',   city: 'Lahore',   product: 'Nike Air Max 270',      price: 4500,  status: 'delivered', date: '2026-05-01' },
      { id: 'HT-1002', customer: 'Sara Malik',   city: 'Karachi',  product: 'Adidas Yeezy Boost 350', price: 12000, status: 'shipped',   date: '2026-05-08' },
      { id: 'HT-1003', customer: 'Usman Tariq',  city: 'Multan',   product: 'Jordan 1 Retro High OG', price: 8500,  status: 'pending',   date: '2026-05-10' },
      { id: 'HT-1004', customer: 'Zainab Khan',  city: 'Islamabad',product: 'Nike Dunk Low Panda',    price: 7200,  status: 'pending',   date: '2026-05-11' },
      { id: 'HT-1005', customer: 'Bilal Chaudhry',city:'Faisalabad',product: 'New Balance 990v5',      price: 5500,  status: 'delivered', date: '2026-04-28' },
    ];
  },
};

/* ============================================================
   TOAST NOTIFICATIONS
   ============================================================ */
const AdminToast = {
  show(msg, type = 'default') {
    let stack = document.querySelector('.toast-stack');
    if (!stack) { stack = document.createElement('div'); stack.className = 'toast-stack'; document.body.appendChild(stack); }
    const t = document.createElement('div');
    t.className = `admin-toast ${type}`;
    const icons = { success: 'bi-check-circle-fill', error: 'bi-x-circle-fill', default: 'bi-info-circle-fill' };
    t.innerHTML = `<i class="bi ${icons[type] || icons.default}"></i> ${msg}`;
    stack.appendChild(t);
    setTimeout(() => { t.classList.add('exit'); setTimeout(() => t.remove(), 250); }, 2800);
  }
};

/* ============================================================
   SIDEBAR + MOBILE NAV
   ============================================================ */
function initSidebar(activePage) {
  const sidebar  = document.querySelector('.sidebar');
  const overlay  = document.querySelector('.sidebar-overlay');
  const toggle   = document.querySelector('.topbar-toggle');

  if (toggle && sidebar && overlay) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('open');
    });
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('open');
    });
  }

  // Highlight active nav item
  document.querySelectorAll('.nav-item[data-page]').forEach(item => {
    if (item.dataset.page === activePage) item.classList.add('active');
    item.addEventListener('click', () => {
      const page = item.dataset.page;
      if (page) window.location.href = page;
    });
  });

  // Logout
  document.querySelector('.sidebar-logout')?.addEventListener('click', () => {
    if (confirm('Sign out?')) logout();
  });
}

/* ============================================================
   MODAL HELPERS
   ============================================================ */
const Modal = {
  open(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('open');
  },
  close(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('open');
  },
  closeAll() {
    document.querySelectorAll('.modal-backdrop.open').forEach(el => el.classList.remove('open'));
  }
};

/* ============================================================
   CONFIRM DIALOG
   ============================================================ */
function showConfirm(title, msg, onConfirm) {
  let box = document.getElementById('confirm-backdrop');
  if (!box) {
    box = document.createElement('div');
    box.id = 'confirm-backdrop';
    box.className = 'confirm-backdrop';
    box.innerHTML = `
      <div class="confirm-box">
        <div class="confirm-icon">🗑️</div>
        <div class="confirm-title" id="conf-title"></div>
        <div class="confirm-msg" id="conf-msg"></div>
        <div class="confirm-actions">
          <button class="btn btn-outline" id="conf-cancel">Cancel</button>
          <button class="btn btn-danger" id="conf-ok">Delete</button>
        </div>
      </div>`;
    document.body.appendChild(box);
    document.getElementById('conf-cancel').addEventListener('click', () => box.classList.remove('open'));
  }
  document.getElementById('conf-title').textContent = title;
  document.getElementById('conf-msg').textContent = msg;
  box.classList.add('open');
  const okBtn = document.getElementById('conf-ok');
  const newOk = okBtn.cloneNode(true);
  okBtn.parentNode.replaceChild(newOk, okBtn);
  newOk.addEventListener('click', () => { box.classList.remove('open'); onConfirm(); });
}

/* ============================================================
   UTILITIES
   ============================================================ */
function conditionBadge(c) {
  const map = { New: 'badge-new', Excellent: 'badge-excellent', Good: 'badge-good', Fair: 'badge-fair' };
  return `<span class="badge ${map[c] || ''}">${c}</span>`;
}
function genderBadge(g) {
  const map = { Men: 'badge-men', Women: 'badge-women', Unisex: 'badge-unisex' };
  return `<span class="badge ${map[g] || ''}">${g}</span>`;
}
function formatPrice(n) {
  return 'PKR ' + Number(n).toLocaleString();
}
function esc(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
