/**
 * SHOE THRIFT — Main JavaScript
 * Cart: localStorage | Filters: pure JS | Animations: IntersectionObserver
 */

/* ============================================================
   PRODUCT DATA — 20+ Realistic Second-Hand Shoes
   ============================================================ */
const PRODUCTS = [
  {
    id: 1,
    title: "Nike Air Max 270",
    price: 4500,
    gender: "Men",
    brand: "Nike",
    size: 10,
    condition: "Excellent",
    stock: 3,
    description: "Classic Air Max 270 in near-mint condition. Iconic air unit for all-day comfort. Minor scuffs on outsole, upper is pristine.",
    images: [
      "https://picsum.photos/seed/nike-am270-1/600/600",
      "https://picsum.photos/seed/nike-am270-2/600/600",
      "https://picsum.photos/seed/nike-am270-3/600/600",
      "https://picsum.photos/seed/nike-am270-4/600/600"
    ],
    featured: true,
    category: "Lifestyle"
  },
  {
    id: 2,
    title: "Adidas Ultra Boost 22",
    price: 6200,
    gender: "Unisex",
    brand: "Adidas",
    size: 9,
    condition: "New",
    stock: 1,
    description: "Worn once — feels brand new. Responsive Boost midsole, Primeknit upper. Full box and laces included.",
    images: [
      "https://picsum.photos/seed/adidas-ub22-1/600/600",
      "https://picsum.photos/seed/adidas-ub22-2/600/600",
      "https://picsum.photos/seed/adidas-ub22-3/600/600",
      "https://picsum.photos/seed/adidas-ub22-4/600/600"
    ],
    featured: true,
    category: "Running"
  },
  {
    id: 3,
    title: "Puma RS-X3 Puzzle",
    price: 3200,
    gender: "Unisex",
    brand: "Puma",
    size: 8,
    condition: "Good",
    stock: 2,
    description: "Chunky retro runner in eye-catching colorway. Upper in good condition, outsole shows light wear. Perfect for streetwear fits.",
    images: [
      "https://picsum.photos/seed/puma-rsx3-1/600/600",
      "https://picsum.photos/seed/puma-rsx3-2/600/600",
      "https://picsum.photos/seed/puma-rsx3-3/600/600",
      "https://picsum.photos/seed/puma-rsx3-4/600/600"
    ],
    featured: false,
    category: "Lifestyle"
  },
  {
    id: 4,
    title: "New Balance 574 Classic",
    price: 3800,
    gender: "Women",
    brand: "New Balance",
    size: 7,
    condition: "Excellent",
    stock: 4,
    description: "Timeless NB 574 in excellent shape. Suede and mesh upper, ENCAP midsole. Light use — soles are nearly clean.",
    images: [
      "https://picsum.photos/seed/nb574-1/600/600",
      "https://picsum.photos/seed/nb574-2/600/600",
      "https://picsum.photos/seed/nb574-3/600/600",
      "https://picsum.photos/seed/nb574-4/600/600"
    ],
    featured: true,
    category: "Lifestyle"
  },
  {
    id: 5,
    title: "Vans Old Skool Pro",
    price: 2200,
    gender: "Unisex",
    brand: "Vans",
    size: 11,
    condition: "Good",
    stock: 2,
    description: "Skate-ready Old Skool Pro with reinforced toe cap. Shows normal skate wear but structurally sound. Iconic sidewall stripe intact.",
    images: [
      "https://picsum.photos/seed/vans-oldskool-1/600/600",
      "https://picsum.photos/seed/vans-oldskool-2/600/600",
      "https://picsum.photos/seed/vans-oldskool-3/600/600",
      "https://picsum.photos/seed/vans-oldskool-4/600/600"
    ],
    featured: false,
    category: "Skate"
  },
  {
    id: 6,
    title: "Reebok Classic Leather",
    price: 2800,
    gender: "Men",
    brand: "Reebok",
    size: 9,
    condition: "Excellent",
    stock: 3,
    description: "80s legend. Premium leather upper kept in immaculate condition. Original insoles intact. Great everyday classic.",
    images: [
      "https://picsum.photos/seed/reebok-classic-1/600/600",
      "https://picsum.photos/seed/reebok-classic-2/600/600",
      "https://picsum.photos/seed/reebok-classic-3/600/600",
      "https://picsum.photos/seed/reebok-classic-4/600/600"
    ],
    featured: false,
    category: "Lifestyle"
  },
  {
    id: 7,
    title: "Nike Air Force 1 Low",
    price: 5500,
    gender: "Unisex",
    brand: "Nike",
    size: 10,
    condition: "New",
    stock: 2,
    description: "Deadstock pair, never worn. Triple-white colorway, Nike Air cushioning. Original box included.",
    images: [
      "https://picsum.photos/seed/nike-af1-1/600/600",
      "https://picsum.photos/seed/nike-af1-2/600/600",
      "https://picsum.photos/seed/nike-af1-3/600/600",
      "https://picsum.photos/seed/nike-af1-4/600/600"
    ],
    featured: true,
    category: "Lifestyle"
  },
  {
    id: 8,
    title: "Adidas Stan Smith",
    price: 2500,
    gender: "Women",
    brand: "Adidas",
    size: 7,
    condition: "Good",
    stock: 5,
    description: "Legendary tennis shoe in clean white/green. Upper has minor surface marks, easily cleaned. Classic for life.",
    images: [
      "https://picsum.photos/seed/adidas-stan-1/600/600",
      "https://picsum.photos/seed/adidas-stan-2/600/600",
      "https://picsum.photos/seed/adidas-stan-3/600/600",
      "https://picsum.photos/seed/adidas-stan-4/600/600"
    ],
    featured: false,
    category: "Lifestyle"
  },
  {
    id: 9,
    title: "Jordan 1 Retro High OG",
    price: 7800,
    gender: "Men",
    brand: "Jordan",
    size: 11,
    condition: "Excellent",
    stock: 1,
    description: "Iconic Chicago-colorway inspired AJ1. Lightly worn – 7/10 condition. Nike Air cushioning and full-grain leather upper.",
    images: [
      "https://picsum.photos/seed/jordan1-1/600/600",
      "https://picsum.photos/seed/jordan1-2/600/600",
      "https://picsum.photos/seed/jordan1-3/600/600",
      "https://picsum.photos/seed/jordan1-4/600/600"
    ],
    featured: true,
    category: "Basketball"
  },
  {
    id: 10,
    title: "Converse Chuck Taylor 70s",
    price: 1800,
    gender: "Unisex",
    brand: "Converse",
    size: 8,
    condition: "Good",
    stock: 6,
    description: "Vintage-style Chuck 70 with premium canvas. Light toe scuffs but soles are clean. Heritage stitching intact.",
    images: [
      "https://picsum.photos/seed/converse-ct70-1/600/600",
      "https://picsum.photos/seed/converse-ct70-2/600/600",
      "https://picsum.photos/seed/converse-ct70-3/600/600",
      "https://picsum.photos/seed/converse-ct70-4/600/600"
    ],
    featured: false,
    category: "Lifestyle"
  },
  {
    id: 11,
    title: "Asics Gel-Kayano 28",
    price: 4200,
    gender: "Women",
    brand: "Asics",
    size: 8,
    condition: "Excellent",
    stock: 2,
    description: "Performance stability runner in excellent condition. Gel cushioning in heel and forefoot. Perfect for daily training.",
    images: [
      "https://picsum.photos/seed/asics-kayano-1/600/600",
      "https://picsum.photos/seed/asics-kayano-2/600/600",
      "https://picsum.photos/seed/asics-kayano-3/600/600",
      "https://picsum.photos/seed/asics-kayano-4/600/600"
    ],
    featured: false,
    category: "Running"
  },
  {
    id: 12,
    title: "Nike React Element 55",
    price: 3600,
    gender: "Men",
    brand: "Nike",
    size: 9,
    condition: "Good",
    stock: 3,
    description: "Futuristic runner with React foam cushioning. Unique cage overlay. Upper shows light wear, sole is great.",
    images: [
      "https://picsum.photos/seed/nike-react55-1/600/600",
      "https://picsum.photos/seed/nike-react55-2/600/600",
      "https://picsum.photos/seed/nike-react55-3/600/600",
      "https://picsum.photos/seed/nike-react55-4/600/600"
    ],
    featured: false,
    category: "Running"
  },
  {
    id: 13,
    title: "Adidas NMD R1 V2",
    price: 5000,
    gender: "Unisex",
    brand: "Adidas",
    size: 10,
    condition: "Excellent",
    stock: 2,
    description: "Street-ready NMD with Boost midsole and Primeknit upper. Light wear — looks 9/10. Plugs are present.",
    images: [
      "https://picsum.photos/seed/adidas-nmd-1/600/600",
      "https://picsum.photos/seed/adidas-nmd-2/600/600",
      "https://picsum.photos/seed/adidas-nmd-3/600/600",
      "https://picsum.photos/seed/adidas-nmd-4/600/600"
    ],
    featured: true,
    category: "Lifestyle"
  },
  {
    id: 14,
    title: "Puma Suede Classic XXI",
    price: 2000,
    gender: "Men",
    brand: "Puma",
    size: 7,
    condition: "Fair",
    stock: 4,
    description: "All-time classic Puma Suede in grey/white. Shows visible wear but very affordable entry point. Upper structure solid.",
    images: [
      "https://picsum.photos/seed/puma-suede-1/600/600",
      "https://picsum.photos/seed/puma-suede-2/600/600",
      "https://picsum.photos/seed/puma-suede-3/600/600",
      "https://picsum.photos/seed/puma-suede-4/600/600"
    ],
    featured: false,
    category: "Lifestyle"
  },
  {
    id: 15,
    title: "Nike Blazer Mid '77 Vintage",
    price: 4800,
    gender: "Women",
    brand: "Nike",
    size: 8,
    condition: "New",
    stock: 1,
    description: "Brand new, never worn. Retro hoops aesthetics with vintage detailing. Leather upper and visible Nike Air. Box included.",
    images: [
      "https://picsum.photos/seed/nike-blazer-1/600/600",
      "https://picsum.photos/seed/nike-blazer-2/600/600",
      "https://picsum.photos/seed/nike-blazer-3/600/600",
      "https://picsum.photos/seed/nike-blazer-4/600/600"
    ],
    featured: true,
    category: "Lifestyle"
  },
  {
    id: 16,
    title: "Reebok Nano X2",
    price: 3400,
    gender: "Men",
    brand: "Reebok",
    size: 12,
    condition: "Good",
    stock: 2,
    description: "Premium cross-training shoe with Floatride Energy Foam. Shows gym use but excellent structural integrity.",
    images: [
      "https://picsum.photos/seed/reebok-nano-1/600/600",
      "https://picsum.photos/seed/reebok-nano-2/600/600",
      "https://picsum.photos/seed/reebok-nano-3/600/600",
      "https://picsum.photos/seed/reebok-nano-4/600/600"
    ],
    featured: false,
    category: "Training"
  },
  {
    id: 17,
    title: "New Balance 990v5 Made in USA",
    price: 7200,
    gender: "Unisex",
    brand: "New Balance",
    size: 11,
    condition: "Excellent",
    stock: 1,
    description: "Premium USA-made NB 990. Pigskin/mesh upper in grey, ENCAP+C-CAP midsole. Light wear on outsole only.",
    images: [
      "https://picsum.photos/seed/nb990-1/600/600",
      "https://picsum.photos/seed/nb990-2/600/600",
      "https://picsum.photos/seed/nb990-3/600/600",
      "https://picsum.photos/seed/nb990-4/600/600"
    ],
    featured: true,
    category: "Lifestyle"
  },
  {
    id: 18,
    title: "Vans Sk8-Hi Reissue",
    price: 2600,
    gender: "Unisex",
    brand: "Vans",
    size: 9,
    condition: "Good",
    stock: 3,
    description: "High-top heritage skate shoe. Canvas upper with sturdy vulcanized outsole. Light scuffs on toe — great used pair.",
    images: [
      "https://picsum.photos/seed/vans-sk8hi-1/600/600",
      "https://picsum.photos/seed/vans-sk8hi-2/600/600",
      "https://picsum.photos/seed/vans-sk8hi-3/600/600",
      "https://picsum.photos/seed/vans-sk8hi-4/600/600"
    ],
    featured: false,
    category: "Skate"
  },
  {
    id: 19,
    title: "Jordan 4 Retro",
    price: 8000,
    gender: "Men",
    brand: "Jordan",
    size: 10,
    condition: "Excellent",
    stock: 1,
    description: "Iconic AJ4 in fire red colorway. Flight straps present, netting intact. 8/10 condition, worn carefully.",
    images: [
      "https://picsum.photos/seed/jordan4-1/600/600",
      "https://picsum.photos/seed/jordan4-2/600/600",
      "https://picsum.photos/seed/jordan4-3/600/600",
      "https://picsum.photos/seed/jordan4-4/600/600"
    ],
    featured: true,
    category: "Basketball"
  },
  {
    id: 20,
    title: "Converse Run Star Hike",
    price: 3000,
    gender: "Women",
    brand: "Converse",
    size: 7,
    condition: "Excellent",
    stock: 2,
    description: "Platform canvas with massive lugged outsole. Chunky streetwear statement piece. Near-new, worn twice.",
    images: [
      "https://picsum.photos/seed/converse-rsh-1/600/600",
      "https://picsum.photos/seed/converse-rsh-2/600/600",
      "https://picsum.photos/seed/converse-rsh-3/600/600",
      "https://picsum.photos/seed/converse-rsh-4/600/600"
    ],
    featured: false,
    category: "Lifestyle"
  },
  {
    id: 21,
    title: "Asics Gel-Lyte III OG",
    price: 4000,
    gender: "Unisex",
    brand: "Asics",
    size: 9,
    condition: "Good",
    stock: 2,
    description: "Beloved retro runner with split tongue design. Multi-tonal upper in cream/olive. Some sole wear, great collector piece.",
    images: [
      "https://picsum.photos/seed/asics-lyte3-1/600/600",
      "https://picsum.photos/seed/asics-lyte3-2/600/600",
      "https://picsum.photos/seed/asics-lyte3-3/600/600",
      "https://picsum.photos/seed/asics-lyte3-4/600/600"
    ],
    featured: false,
    category: "Lifestyle"
  },
  {
    id: 22,
    title: "Adidas Gazelle Indoor",
    price: 2900,
    gender: "Women",
    brand: "Adidas",
    size: 8,
    condition: "Excellent",
    stock: 3,
    description: "Classic suede Gazelle in mint green. Gum rubber outsole. Minimal use, beautiful condition. Perfect for minimal fits.",
    images: [
      "https://picsum.photos/seed/adidas-gazelle-1/600/600",
      "https://picsum.photos/seed/adidas-gazelle-2/600/600",
      "https://picsum.photos/seed/adidas-gazelle-3/600/600",
      "https://picsum.photos/seed/adidas-gazelle-4/600/600"
    ],
    featured: false,
    category: "Lifestyle"
  }
];

/* ============================================================
   CART — localStorage Management
   ============================================================ */
const Cart = {
  _key: 'hamarathrift_cart',

  get() {
    try {
      return JSON.parse(localStorage.getItem(this._key)) || [];
    } catch { return []; }
  },

  save(items) {
    localStorage.setItem(this._key, JSON.stringify(items));
    this.updateBadge();
  },

  add(productId, size, qty = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return false;

    const items = this.get();
    const existing = items.find(i => i.id === productId && i.size === size);

    // Thrift store: each pair is one-of-a-kind — can't add the same shoe twice
    if (existing) return 'duplicate';

    items.push({
      id: product.id,
      title: product.title,
      brand: product.brand,
      price: product.price,
      image: product.images[0],
      size,
      condition: product.condition,
      qty: 1
    });
    this.save(items);
    return true;
  },

  remove(productId, size) {
    const items = this.get().filter(i => !(i.id === productId && i.size === size));
    this.save(items);
  },

  updateQty(productId, size, qty) {
    const items = this.get();
    const item = items.find(i => i.id === productId && i.size === size);
    if (item) {
      if (qty < 1) { this.remove(productId, size); return; }
      item.qty = Math.min(qty, 5);
      this.save(items);
    }
  },

  total() {
    return this.get().reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  count() {
    return this.get().reduce((sum, i) => sum + i.qty, 0);
  },

  clear() {
    localStorage.removeItem(this._key);
    this.updateBadge();
  },

  updateBadge() {
    const count = this.count();
    document.querySelectorAll('.cart-badge').forEach(el => {
      el.textContent = count;
      el.classList.toggle('hidden', count === 0);
    });
  }
};

/* ============================================================
   TOAST NOTIFICATIONS
   ============================================================ */
const Toast = {
  container: null,

  init() {
    this.container = document.querySelector('.toast-container-custom');
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container-custom';
      document.body.appendChild(this.container);
    }
  },

  show(message, type = 'success', duration = 3000) {
    const icons = { success: '✓', error: '✕', info: '●' };
    const toast = document.createElement('div');
    toast.className = `custom-toast toast-${type}`;
    toast.innerHTML = `<span class="toast-icon">${icons[type]}</span><span>${message}</span>`;
    this.container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-exit');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
};

/* ============================================================
   SCROLL REVEAL ANIMATION
   ============================================================ */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ============================================================
   NAVBAR — Scroll behavior
   ============================================================ */
function initNavbar() {
  const navbar = document.querySelector('.main-navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.main-navbar .nav-link').forEach(link => {
    if (link.getAttribute('href') && path.includes(link.getAttribute('href').replace(/\//g, ''))) {
      link.classList.add('active');
    }
  });
}

/* ============================================================
   SCROLL TO TOP
   ============================================================ */
function initScrollToTop() {
  const btn = document.querySelector('.scroll-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ============================================================
   PRODUCT CARD BUILDER
   ============================================================ */
function buildProductCard(product, link = 'product-detail.html') {
  const conditionClass = {
    'New': 'condition-new',
    'Excellent': 'condition-excellent',
    'Good': 'condition-good',
    'Fair': 'condition-fair'
  }[product.condition] || 'condition-good';

  const badges = [
    `<span class="badge-condition ${conditionClass}">${product.condition}</span>`,
    product.featured ? '<span class="badge-featured">Featured</span>' : '',
    ''
  ].filter(Boolean).join('');

  return `
    <div class="col">
      <div class="product-card reveal h-100">
        <div class="product-card-img-wrap">
          <a href="${link}?id=${product.id}">
            <img src="${product.images[0]}" alt="${product.title}" class="product-card-img" loading="lazy">
          </a>
          <div class="product-card-badges">${badges}</div>
          <button class="product-card-wishlist" aria-label="Add to wishlist" data-id="${product.id}">
            <i class="bi bi-heart"></i>
          </button>
        </div>
        <div class="product-card-body">
          <div class="product-card-meta">
            <span class="product-card-brand">${product.brand}</span>
            <span class="product-card-gender">${product.gender}</span>
          </div>
          <a href="${link}?id=${product.id}" class="text-decoration-none">
            <h3 class="product-card-title">${product.title}</h3>
          </a>
          <p class="product-card-size">US ${product.size} &nbsp;·&nbsp; ${product.stock > 0 ? `${product.stock} left` : 'Out of Stock'}</p>
          <div class="product-card-footer">
            <div class="product-card-price">
              <span class="pkr">PKR</span>${product.price.toLocaleString()}
            </div>
            ${product.stock > 0
              ? (() => {
                  const inCart = Cart.get().some(i => i.id === product.id && i.size === product.size);
                  return inCart
                    ? `<button class="btn-add-cart" data-id="${product.id}" data-size="${product.size}" style="background:var(--secondary)">
                         <i class="bi bi-bag-check"></i> In Cart
                       </button>`
                    : `<button class="btn-add-cart" data-id="${product.id}" data-size="${product.size}">
                         <i class="bi bi-bag-plus"></i> Add
                       </button>`;
                })()
              : `<span style="font-size:0.75rem;color:#EF4444;font-weight:600;">Sold Out</span>`
            }
          </div>
        </div>
      </div>
    </div>`;
}

/* ============================================================
   HOME PAGE — New Arrivals & Best Sellers
   ============================================================ */
function initHomePage() {
  const newArrivalsGrid = document.getElementById('new-arrivals-grid');
  if (newArrivalsGrid) {
    const featured = PRODUCTS.filter(p => p.featured).slice(0, 8);
    newArrivalsGrid.innerHTML = featured.map(p => buildProductCard(p)).join('');
    initScrollReveal();
  }

  // Newsletter form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      if (email) {
        Toast.show('🎉 You\'re subscribed! Welcome to the family.', 'success');
        this.reset();
      }
    });
  }
}

/* ============================================================
   SHOP PAGE — Filtering & Sorting
   ============================================================ */
let shopState = {
  gender: [],
  brands: [],
  sizes: [],
  minPrice: 500,
  maxPrice: 8000,
  conditions: [],
  sort: 'default',
  page: 1,
  perPage: 12,
  query: ''
};

function initShopPage() {
  if (!document.getElementById('products-grid')) return;

  // Read search query from URL (e.g. shop.html?q=nike)
  const urlParams = new URLSearchParams(window.location.search);
  const urlQuery = urlParams.get('q') || '';
  if (urlQuery) {
    shopState.query = urlQuery;
    // Pre-fill the navbar search input on shop page
    const shopSearchInput = document.querySelector('.navbar-search input');
    if (shopSearchInput) shopSearchInput.value = urlQuery;
  }

  renderProducts();

  // Gender checkboxes
  document.querySelectorAll('[data-filter="gender"]').forEach(cb => {
    cb.addEventListener('change', () => {
      shopState.gender = [...document.querySelectorAll('[data-filter="gender"]:checked')].map(c => c.value);
      shopState.page = 1;
      renderProducts();
    });
  });

  // Brand checkboxes
  document.querySelectorAll('[data-filter="brand"]').forEach(cb => {
    cb.addEventListener('change', () => {
      shopState.brands = [...document.querySelectorAll('[data-filter="brand"]:checked')].map(c => c.value);
      shopState.page = 1;
      renderProducts();
    });
  });

  // Condition checkboxes
  document.querySelectorAll('[data-filter="condition"]').forEach(cb => {
    cb.addEventListener('change', () => {
      shopState.conditions = [...document.querySelectorAll('[data-filter="condition"]:checked')].map(c => c.value);
      shopState.page = 1;
      renderProducts();
    });
  });

  // Size buttons
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const size = parseInt(btn.dataset.size);
      if (shopState.sizes.includes(size)) {
        shopState.sizes = shopState.sizes.filter(s => s !== size);
      } else {
        shopState.sizes.push(size);
      }
      shopState.page = 1;
      renderProducts();
    });
  });

  // Price range
  const minPriceInput = document.getElementById('min-price');
  const maxPriceInput = document.getElementById('max-price');
  if (minPriceInput) {
    minPriceInput.addEventListener('input', debounce(() => {
      shopState.minPrice = parseInt(minPriceInput.value) || 500;
      renderProducts();
    }, 400));
  }
  if (maxPriceInput) {
    maxPriceInput.addEventListener('input', debounce(() => {
      shopState.maxPrice = parseInt(maxPriceInput.value) || 8000;
      renderProducts();
    }, 400));
  }

  // Sort
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      shopState.sort = sortSelect.value;
      renderProducts();
    });
  }

  // Clear filters
  document.getElementById('clear-filters')?.addEventListener('click', clearFilters);

  // Load more
  document.getElementById('load-more-btn')?.addEventListener('click', () => {
    shopState.page++;
    renderProducts(true);
  });
}

function filterProducts() {
  const q = shopState.query.toLowerCase().trim();
  return PRODUCTS.filter(p => {
    if (shopState.gender.length && !shopState.gender.includes(p.gender)) return false;
    if (shopState.brands.length && !shopState.brands.includes(p.brand)) return false;
    if (shopState.sizes.length && !shopState.sizes.includes(p.size)) return false;
    if (p.price < shopState.minPrice || p.price > shopState.maxPrice) return false;
    if (shopState.conditions.length && !shopState.conditions.includes(p.condition)) return false;
    if (q && !p.title.toLowerCase().includes(q) && !p.brand.toLowerCase().includes(q) && !p.description.toLowerCase().includes(q)) return false;
    return true;
  });
}

function sortProducts(products) {
  const sorted = [...products];
  switch (shopState.sort) {
    case 'price-asc': return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc': return sorted.sort((a, b) => b.price - a.price);
    case 'newest': return sorted.sort((a, b) => b.id - a.id);
    default: return sorted;
  }
}

function renderProducts(append = false) {
  const grid = document.getElementById('products-grid');
  const noResults = document.getElementById('no-results');
  const resultCount = document.getElementById('result-count');
  const loadMoreBtn = document.getElementById('load-more-btn');

  let filtered = filterProducts();
  let sorted = sortProducts(filtered);
  const total = sorted.length;
  const paginated = sorted.slice(0, shopState.page * shopState.perPage);

  if (resultCount) resultCount.textContent = total;

  grid.classList.add('loading');
  setTimeout(() => {
    if (!append) grid.innerHTML = '';

    if (total === 0) {
      noResults?.classList.add('visible');
      grid.classList.remove('loading');
      if (loadMoreBtn) loadMoreBtn.style.display = 'none';
      return;
    }
    noResults?.classList.remove('visible');

    const newItems = sorted.slice(append ? (shopState.page - 1) * shopState.perPage : 0, shopState.page * shopState.perPage);
    newItems.forEach(p => {
      grid.insertAdjacentHTML('beforeend', buildProductCard(p, 'product-detail.html'));
    });

    grid.classList.remove('loading');
    initScrollReveal();

    if (loadMoreBtn) {
      loadMoreBtn.style.display = paginated.length < total ? 'flex' : 'none';
    }
  }, 180);
}

function clearFilters() {
  shopState = { gender: [], brands: [], sizes: [], minPrice: 500, maxPrice: 8000, conditions: [], sort: 'default', page: 1, perPage: 12, query: '' };

  document.querySelectorAll('[data-filter]').forEach(cb => cb.checked = false);
  document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
  const minP = document.getElementById('min-price');
  const maxP = document.getElementById('max-price');
  if (minP) minP.value = 500;
  if (maxP) maxP.value = 8000;
  const sortSel = document.getElementById('sort-select');
  if (sortSel) sortSel.value = 'default';

  renderProducts();
  Toast.show('Filters cleared', 'info');
}

/* ============================================================
   PRODUCT DETAIL PAGE
   ============================================================ */
function initProductDetail() {
  const container = document.getElementById('product-detail-container');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id')) || 1;
  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

  // Populate detail
  document.getElementById('pd-title').textContent = product.title;
  document.getElementById('pd-price').innerHTML = `<span class="pkr">PKR </span>${product.price.toLocaleString()}`;
  document.getElementById('pd-brand').textContent = product.brand;
  document.getElementById('pd-gender').textContent = product.gender;
  document.getElementById('pd-condition').textContent = product.condition;
  document.getElementById('pd-description').textContent = product.description;
  document.getElementById('pd-size-display').textContent = `US ${product.size}`;

  // Stock status
  const stockEl = document.getElementById('pd-stock');
  if (product.stock === 0) {
    stockEl.innerHTML = `<span class="stock-dot"></span> Out of Stock`;
    stockEl.className = 'stock-badge out-of-stock';
  } else if (product.stock <= 2) {
    stockEl.innerHTML = `<span class="stock-dot"></span> Only ${product.stock} left!`;
    stockEl.className = 'stock-badge low-stock';
  } else {
    stockEl.innerHTML = `<span class="stock-dot"></span> In Stock (${product.stock} available)`;
    stockEl.className = 'stock-badge in-stock';
  }

  // Breadcrumb
  const bc = document.getElementById('pd-breadcrumb-title');
  if (bc) bc.textContent = product.title;

  // Condition badge
  const condEl = document.getElementById('pd-condition-badge');
  if (condEl) {
    const cls = { New: 'condition-new', Excellent: 'condition-excellent', Good: 'condition-good', Fair: 'condition-fair' };
    condEl.className = `badge-condition ${cls[product.condition]}`;
    condEl.textContent = product.condition;
  }

  // Main image
  const mainImg = document.getElementById('pd-main-img');
  if (mainImg) mainImg.src = product.images[0];

  // Thumbnails
  const thumbsContainer = document.getElementById('pd-thumbnails');
  if (thumbsContainer) {
    thumbsContainer.innerHTML = product.images.map((img, i) => `
      <div class="product-thumbnail ${i === 0 ? 'active' : ''}" data-img="${img}">
        <img src="${img}" alt="${product.title} view ${i+1}" loading="lazy">
      </div>`).join('');

    thumbsContainer.querySelectorAll('.product-thumbnail').forEach(thumb => {
      thumb.addEventListener('click', () => {
        mainImg.src = thumb.dataset.img;
        thumbsContainer.querySelectorAll('.product-thumbnail').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  }

  // Lightbox
  document.getElementById('pd-main-img-wrap')?.addEventListener('click', () => {
    const lbImg = document.getElementById('lightbox-img');
    if (lbImg) lbImg.src = mainImg.src;
    const modal = new bootstrap.Modal(document.getElementById('lightboxModal'));
    modal.show();
  });

  // Size selector
  const sizeSel = document.getElementById('pd-size-selector');
  let selectedSize = product.size;
  if (sizeSel) {
    const sizes = [7, 8, 9, 10, 11, 12, 13];
    sizeSel.innerHTML = sizes.map(s => `
      <button class="size-option ${s === product.size ? 'selected' : ''}" data-size="${s}"
        ${s !== product.size ? 'style="opacity:0.4"' : ''}>US ${s}</button>`).join('');
    sizeSel.querySelectorAll('.size-option').forEach(btn => {
      btn.addEventListener('click', () => {
        sizeSel.querySelectorAll('.size-option').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedSize = parseInt(btn.dataset.size);
      });
    });
  }

  // Quantity selector
  let qty = 1;
  const qtyVal = document.getElementById('qty-value');
  document.getElementById('qty-minus')?.addEventListener('click', () => {
    if (qty > 1) { qty--; qtyVal.value = qty; }
  });
  document.getElementById('qty-plus')?.addEventListener('click', () => {
    if (qty < 5) { qty++; qtyVal.value = qty; }
  });

  // Add to cart
  document.getElementById('pd-add-to-cart')?.addEventListener('click', () => {
    if (product.stock === 0) { Toast.show('Sorry, this item is out of stock.', 'error'); return; }
    const result = Cart.add(product.id, selectedSize, 1);
    if (result === 'duplicate') {
      Toast.show('Already in your cart! <a href="cart.html" style="color:var(--accent);text-decoration:underline;font-weight:700">View Cart</a>', 'info');
    } else {
      CartToast.show(product.title);
    }
  });

  // Related products
  const relGrid = document.getElementById('related-products');
  if (relGrid) {
    const related = PRODUCTS.filter(p => (p.brand === product.brand || p.gender === product.gender) && p.id !== product.id).slice(0, 4);
    relGrid.innerHTML = related.map(p => buildProductCard(p)).join('');
    initScrollReveal();
  }
}

/* ============================================================
   CART PAGE
   ============================================================ */
function initCartPage() {
  if (!document.getElementById('cart-container')) return;
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const emptyState = document.getElementById('cart-empty');
  const cartContent = document.getElementById('cart-content');
  const items = Cart.get();

  if (items.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    if (cartContent) cartContent.style.display = 'none';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (cartContent) cartContent.style.display = 'flex';

  container.innerHTML = items.map(item => `
    <div class="cart-item" data-id="${item.id}" data-size="${item.size}">
      <img src="${item.image}" alt="${item.title}" class="cart-item-img" loading="lazy">
      <div class="cart-item-info flex-grow-1">
        <div class="cart-item-brand">${item.brand}</div>
        <h4 class="cart-item-title">${item.title}</h4>
        <p class="cart-item-meta">Size: US ${item.size} &nbsp;·&nbsp; Condition: ${item.condition}</p>
        <div class="d-flex align-items-center gap-3 flex-wrap">
          <button class="cart-item-remove" data-id="${item.id}" data-size="${item.size}">
            <i class="bi bi-trash"></i> Remove
          </button>
        </div>
      </div>
      <div class="cart-item-price text-end" style="min-width:100px">
        <div class="text-muted" style="font-size:0.75rem">PKR</div>
        <div>${item.price.toLocaleString()}</div>
      </div>
    </div>`).join('');

  updateCartSummary();

  // Event delegation — survives re-renders
  container.onclick = function(e) {
    const btn = e.target.closest('.cart-item-remove');
    if (!btn) return;
    Cart.remove(parseInt(btn.dataset.id), parseInt(btn.dataset.size));
    renderCart();
    Toast.show('Item removed from cart', 'info');
  };
}

function updateCartSummary() {
  const subtotal = Cart.total();
  const delivery = subtotal > 0 ? 300 : 0;
  const total = subtotal + delivery;

  const fmt = n => `PKR ${n.toLocaleString()}`;
  const s = document.getElementById('cart-subtotal');
  const d = document.getElementById('cart-delivery');
  const t = document.getElementById('cart-total');
  if (s) s.textContent = fmt(subtotal);
  if (d) d.textContent = fmt(delivery);
  if (t) t.textContent = fmt(total);
}

/* ============================================================
   CHECKOUT PAGE
   ============================================================ */
function initCheckoutPage() {
  if (!document.getElementById('checkout-form')) return;

  // Populate order summary
  renderCheckoutSummary();

  document.getElementById('checkout-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!validateCheckoutForm()) return;

    const btn = document.getElementById('place-order-btn');
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Placing Order...';
    btn.disabled = true;

    setTimeout(() => {
      const orderNum = `THRIFT-${new Date().toISOString().slice(0,10).replace(/-/g,'')}-${Math.floor(1000 + Math.random() * 9000)}`;
      document.getElementById('order-number').textContent = orderNum;
      const modal = new bootstrap.Modal(document.getElementById('orderSuccessModal'));
      modal.show();
      Cart.clear();
      renderCheckoutSummary();
      btn.innerHTML = 'Place Order';
      btn.disabled = false;
    }, 2000);
  });
}

function renderCheckoutSummary() {
  const items = Cart.get();
  const listEl = document.getElementById('checkout-items-list');
  const subtotalEl = document.getElementById('co-subtotal');
  const totalEl = document.getElementById('co-total');

  if (listEl) {
    if (items.length === 0) {
      listEl.innerHTML = '<p class="text-muted text-center py-3" style="font-size:0.875rem">Your cart is empty</p>';
    } else {
      listEl.innerHTML = items.map(item => `
        <div class="d-flex gap-3 align-items-center py-2" style="border-bottom:1px solid var(--border)">
          <img src="${item.image}" style="width:52px;height:52px;border-radius:8px;object-fit:cover;" alt="${item.title}">
          <div class="flex-grow-1">
            <div style="font-size:0.8rem;font-weight:700;font-family:'Poppins',sans-serif;color:var(--primary)">${item.brand}</div>
            <div style="font-size:0.875rem;font-weight:600">${item.title}</div>
            <div style="font-size:0.75rem;color:var(--text-muted)">US ${item.size} · ×${item.qty}</div>
          </div>
          <div style="font-family:'Poppins',sans-serif;font-weight:700;font-size:0.9rem">PKR ${(item.price*item.qty).toLocaleString()}</div>
        </div>`).join('');
    }
  }

  const subtotal = Cart.total();
  const delivery = subtotal > 0 ? 300 : 0;
  const deliveryEl = document.getElementById('co-delivery');
  if (subtotalEl) subtotalEl.textContent = `PKR ${subtotal.toLocaleString()}`;
  if (deliveryEl) deliveryEl.textContent = `PKR ${delivery.toLocaleString()}`;
  if (totalEl) totalEl.textContent = `PKR ${(subtotal + delivery).toLocaleString()}`;
}

function validateCheckoutForm() {
  let valid = true;
  const required = ['co-name', 'co-phone', 'co-address', 'co-city'];

  required.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (!el.value.trim()) {
      el.classList.add('is-invalid');
      valid = false;
    } else {
      el.classList.remove('is-invalid');
    }
  });

  const phone = document.getElementById('co-phone');
  if (phone && phone.value && !/^(\+92|0)?3[0-9]{9}$/.test(phone.value.replace(/\s/g, ''))) {
    phone.classList.add('is-invalid');
    document.getElementById('phone-feedback').textContent = 'Enter a valid Pakistani phone number (e.g. 03001234567)';
    valid = false;
  }

  if (!valid) Toast.show('Please fill all required fields correctly.', 'error');
  return valid;
}

/* ============================================================
   WISHLIST
   ============================================================ */
function initWishlist() {
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.product-card-wishlist');
    if (!btn) return;
    btn.classList.toggle('wishlisted');
    const icon = btn.querySelector('i');
    if (btn.classList.contains('wishlisted')) {
      icon.className = 'bi bi-heart-fill';
      Toast.show('Added to wishlist ❤️', 'success');
    } else {
      icon.className = 'bi bi-heart';
    }
  });
}

/* ============================================================
   CART TOAST — uses same toast-container-custom as Toast but adds View Cart button
   ============================================================ */
const CartToast = {
  show(title) {
    const container = document.querySelector('.toast-container-custom');
    if (!container) return;
    const el = document.createElement('div');
    el.className = 'custom-toast toast-success';
    el.innerHTML = `
      <span class="toast-icon">🛒</span>
      <span>${title} added to cart!</span>
      <a href="cart.html" style="margin-left:12px;color:var(--accent);font-weight:700;white-space:nowrap;font-size:0.85rem;text-decoration:underline">View Cart</a>`;
    container.appendChild(el);
    setTimeout(() => el.classList.add('toast-exit'), 3200);
    setTimeout(() => el.remove(), 3500);
  }
};

/* ============================================================
   ADD TO CART — Global Handler
   ============================================================ */
function initAddToCartGlobal() {
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.btn-add-cart');
    if (!btn) return;
    const id = parseInt(btn.dataset.id);
    const size = parseInt(btn.dataset.size);
    if (!id) return;

    const result = Cart.add(id, size, 1);
    if (result === 'duplicate') {
      // Already in cart — flash the button and prompt to view cart
      btn.innerHTML = '<i class="bi bi-bag-check"></i> In Cart';
      btn.style.background = 'var(--secondary)';
      Toast.show('Already in cart — <a href="cart.html" style="color:var(--accent);text-decoration:underline;font-weight:700">View Cart</a>', 'info');
      setTimeout(() => {
        btn.innerHTML = '<i class="bi bi-bag-check"></i> In Cart';
        btn.style.background = 'var(--secondary)';
      }, 2000);
      return;
    }
    const product = PRODUCTS.find(p => p.id === id);
    CartToast.show(product?.title || 'Item');
    btn.innerHTML = '<i class="bi bi-check"></i> Added';
    btn.style.background = 'var(--accent)';
    setTimeout(() => {
      // Keep showing "In Cart" after adding since it can't be added again
      btn.innerHTML = '<i class="bi bi-bag-check"></i> In Cart';
      btn.style.background = 'var(--secondary)';
    }, 1500);
  });
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function initContactPage() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';
    btn.disabled = true;
    setTimeout(() => {
      Toast.show('Message sent! We\'ll reply on WhatsApp soon.', 'success');
      form.reset();
      btn.innerHTML = 'Send Message';
      btn.disabled = false;
    }, 1800);
  });
}

/* ============================================================
   UTILITY — Debounce
   ============================================================ */
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/* ============================================================
   NAVBAR SEARCH — Global Handler
   ============================================================ */
function buildSearchSuggestions(query) {
  if (!query || query.length < 1) return [];
  const q = query.toLowerCase();
  return PRODUCTS.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q)
  ).slice(0, 6);
}

function initNavbarSearch() {
  const searchInput = document.querySelector('.navbar-search input');
  if (!searchInput) return;

  // Build suggestion dropdown
  const wrapper = searchInput.closest('.navbar-search');
  wrapper.style.position = 'relative';
  const dropdown = document.createElement('div');
  dropdown.className = 'search-suggestions';
  wrapper.appendChild(dropdown);

  const isShopPage = !!document.getElementById('products-grid');

  const doSearch = (q) => {
    q = q || searchInput.value.trim();
    if (!q) return;
    dropdown.innerHTML = '';
    dropdown.style.display = 'none';
    if (isShopPage) {
      shopState.query = q;
      shopState.page = 1;
      renderProducts();
    } else {
      window.location.href = `shop.html?q=${encodeURIComponent(q)}`;
    }
  };

  const showSuggestions = (val) => {
    const matches = buildSearchSuggestions(val);
    if (!val.trim() || matches.length === 0) {
      dropdown.style.display = 'none';
      dropdown.innerHTML = '';
      return;
    }
    dropdown.innerHTML = matches.map(p => `
      <div class="search-suggestion-item" data-q="${p.title}">
        <span class="suggestion-brand">${p.brand}</span>
        <span class="suggestion-title">${p.title}</span>
        <span class="suggestion-meta">US ${p.size} · PKR ${p.price.toLocaleString()}</span>
      </div>`).join('') +
      `<div class="search-suggestion-footer" data-q="${val.trim()}">
        <i class="bi bi-search me-2"></i>See all results for "<strong>${val.trim()}</strong>"
      </div>`;
    dropdown.style.display = 'block';

    dropdown.querySelectorAll('.search-suggestion-item, .search-suggestion-footer').forEach(item => {
      item.addEventListener('mousedown', (e) => {
        e.preventDefault();
        searchInput.value = item.dataset.q;
        doSearch(item.dataset.q);
      });
    });
  };

  searchInput.addEventListener('input', function() {
    if (isShopPage) {
      shopState.query = this.value.trim();
      shopState.page = 1;
      renderProducts();
    }
    showSuggestions(this.value);
  });

  searchInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') doSearch();
    if (e.key === 'Escape') { dropdown.style.display = 'none'; this.blur(); }
  });

  searchInput.addEventListener('focus', function() {
    if (this.value.trim()) showSuggestions(this.value);
  });

  // Mobile search icon: opens collapsed menu and focuses input
  const mobileTrigger = document.querySelector('.mobile-search-trigger');
  if (mobileTrigger) {
    mobileTrigger.addEventListener('click', () => {
      const navCollapse = document.getElementById('mainNav');
      if (navCollapse && !navCollapse.classList.contains('show')) {
        // Open the menu
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapse);
        bsCollapse.show();
      }
      // Focus the search input after the menu opens
      setTimeout(() => {
        const inp = document.querySelector('.navbar-search input');
        if (inp) inp.focus();
      }, 320);
    });
  }

  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) {
      dropdown.style.display = 'none';
    }
  });
}

/* ============================================================
   INITIALIZE
   ============================================================ */
document.addEventListener('DOMContentLoaded', function() {
  Toast.init();
  Cart.updateBadge();
  initNavbar();
  initNavbarSearch();
  initScrollReveal();
  initScrollToTop();
  initWishlist();
  initAddToCartGlobal();

  // Page-specific init
  initHomePage();
  initShopPage();
  initProductDetail();
  initCartPage();
  initCheckoutPage();
  initContactPage();
});
