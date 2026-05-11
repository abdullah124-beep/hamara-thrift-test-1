# 👟 Hamara Thrift Multan — Frontend Documentation

> Premium second-hand sneaker store for Multan, Pakistan.  
> Stack: HTML5 · CSS3 · Bootstrap 5.3 · Vanilla JS · jQuery 3.7  
> Ready for Laravel Blade integration.

---

## 📁 Project Folder Structure

```
hamara-thrift/
│
├── index.html                    ← Home page
├── shop.html                     ← Shop / Collection page
├── product-detail.html           ← Product detail (dynamic via ?id=)
├── cart.html                     ← Cart page
├── checkout.html                 ← Checkout page
├── about.html                    ← About Us page
├── contact.html                  ← Contact Us page
├── terms.html                    ← Terms & Privacy Policy page
│
├── assets/
│   ├── css/
│   │   └── style.css             ← Main stylesheet (all custom CSS)
│   └── js/
│       └── script.js             ← All JS: cart, filters, product data, animations
│
├── resources/
│   └── views/
│       ├── layouts/
│       │   └── app.blade.php     ← Laravel master layout
│       └── partials/
│           ├── navbar.blade.php  ← Navbar partial
│           └── footer.blade.php  ← Footer partial
│
└── routes/
    └── web.php                   ← Laravel routes reference
```

---

## 🎨 Design System

| Token         | Value       | Usage                        |
|---------------|-------------|------------------------------|
| `--primary`   | `#060644`   | Buttons, badges, accents     |
| `--secondary` | `#1A1A1A`   | Dark backgrounds, nav        |
| `--accent`    | `#00C853`   | Success, sustainability      |
| `--bg-light`  | `#F8F9FA`   | Section backgrounds          |
| `--text-dark` | `#222222`   | Body text                    |
| `--text-muted`| `#6B7280`   | Subtitles, descriptions      |

**Fonts:**  
- Headings: `Poppins` (700–900)  
- Body: `Barlow` (400–600)

---

## 📦 Pages Reference

| File                   | Route          | Description                                |
|------------------------|----------------|--------------------------------------------|
| `index.html`           | `/`            | Long-scroll home with hero, grids, carousels |
| `shop.html`            | `/shop`        | Full product grid with sidebar filters     |
| `product-detail.html`  | `/shop/:id`    | Product gallery, sizes, add to cart        |
| `cart.html`            | `/cart`        | Cart items, quantity controls, summary     |
| `checkout.html`        | `/checkout`    | Guest form, order summary, success modal   |
| `about.html`           | `/about`       | Story, owner bio, sustainability, mission  |
| `contact.html`         | `/contact`     | Form, map, FAQ, WhatsApp                   |
| `terms.html`           | `/terms`       | Terms & Conditions + Privacy Policy tabs   |

---

## 🛒 Cart System

The cart is stored in **browser localStorage** under the key `hamarathrift_cart`.

```javascript
// Cart object structure (per item)
{
  id: 1,
  title: "Nike Air Max 270",
  brand: "Nike",
  price: 4500,
  image: "https://...",
  size: 10,
  condition: "Excellent",
  qty: 2
}
```

**Cart API (in `script.js`):**

```javascript
Cart.add(productId, size, qty)   // Add item
Cart.remove(productId, size)      // Remove item
Cart.updateQty(id, size, qty)     // Update quantity
Cart.get()                        // Get all items (array)
Cart.total()                      // Total PKR (number)
Cart.count()                      // Total item count
Cart.clear()                      // Empty cart
Cart.updateBadge()                // Sync badge in navbar
```

---

## 🔍 Filter System (Shop Page)

All filtering is client-side in `script.js` using the `PRODUCTS` array. State is managed in:

```javascript
let shopState = {
  gender: [],       // e.g. ["Men", "Women"]
  brands: [],       // e.g. ["Nike", "Adidas"]
  sizes: [],        // e.g. [9, 10, 11]
  minPrice: 500,
  maxPrice: 8000,
  conditions: [],   // e.g. ["New", "Excellent"]
  sort: 'default',  // 'price-asc' | 'price-desc' | 'newest' | 'best-selling'
  page: 1,
  perPage: 12
};
```

To migrate to a real backend, replace `filterProducts()` with an Axios/fetch call to `/api/products` and render the JSON response using `buildProductCard()`.

---

## 🚀 Laravel Integration Guide

### Step 1: Create a New Laravel Project

```bash
composer create-project laravel/laravel hamara-thrift
cd hamara-thrift
```

### Step 2: Copy Frontend Assets

```bash
# From your hamara-thrift/ frontend folder:
cp assets/css/style.css  public/css/style.css
cp assets/js/script.js   public/js/script.js
```

### Step 3: Copy Blade Views

Copy the Blade files from `resources/views/` into your Laravel project's `resources/views/`:

```
resources/views/
├── layouts/
│   └── app.blade.php         ← Copy from resources/views/layouts/app.blade.php
├── partials/
│   ├── navbar.blade.php
│   └── footer.blade.php
├── home.blade.php            ← Convert index.html → Blade syntax
├── shop.blade.php
├── product-detail.blade.php
├── cart.blade.php
├── checkout.blade.php
├── about.blade.php
├── contact.blade.php
└── terms.blade.php
```

### Step 4: Convert HTML to Blade Templates

When converting each `.html` to `.blade.php`:

1. **Wrap in layout:**
```blade
@extends('layouts.app')

@section('title', 'Shop — Hamara Thrift Multan')

@section('content')
  {{-- page content here, WITHOUT navbar/footer --}}
@endsection

@section('scripts')
  {{-- page-specific scripts --}}
@endsection
```

2. **Replace asset URLs:**
```html
<!-- HTML -->
<link rel="stylesheet" href="assets/css/style.css">
<script src="assets/js/script.js"></script>

<!-- Blade -->
<link rel="stylesheet" href="{{ asset('css/style.css') }}">
<script src="{{ asset('js/script.js') }}"></script>
```

3. **Replace page links:**
```html
<!-- HTML -->
<a href="shop.html">Shop</a>

<!-- Blade -->
<a href="{{ route('shop') }}">Shop</a>
```

4. **Use Blade directives for dynamic data:**
```blade
{{-- Active nav link --}}
<a class="nav-link {{ request()->routeIs('shop*') ? 'active' : '' }}" href="{{ route('shop') }}">Shop</a>

{{-- Dynamic year in footer --}}
© {{ date('Y') }} Hamara Thrift Multan
```

### Step 5: Set Up Routes

Copy the routes from `routes/web.php` into your Laravel project's `routes/web.php`.

### Step 6: Create Basic Controllers

```bash
php artisan make:controller ShopController
php artisan make:controller ContactController
php artisan make:controller CheckoutController
```

**ShopController example:**
```php
<?php
namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ShopController extends Controller
{
    public function index(Request $request)
    {
        // When ready for real backend filtering:
        $products = Product::query()
            ->when($request->gender, fn($q) => $q->where('gender', $request->gender))
            ->when($request->brand,  fn($q) => $q->where('brand', $request->brand))
            ->paginate(12);

        return view('shop', compact('products'));
    }

    public function show($id)
    {
        $product = Product::findOrFail($id);
        return view('product-detail', compact('product'));
    }

    // AJAX endpoint (optional)
    public function apiProducts(Request $request)
    {
        $products = Product::query()
            ->when($request->gender,    fn($q) => $q->where('gender', $request->gender))
            ->when($request->brand,     fn($q) => $q->whereIn('brand', explode(',', $request->brand)))
            ->when($request->min_price, fn($q) => $q->where('price', '>=', $request->min_price))
            ->when($request->max_price, fn($q) => $q->where('price', '<=', $request->max_price))
            ->when($request->condition, fn($q) => $q->whereIn('condition', explode(',', $request->condition)))
            ->get();

        return response()->json($products);
    }
}
```

### Step 7: Create the Product Model & Migration

```bash
php artisan make:model Product -m
```

```php
// database/migrations/xxxx_create_products_table.php
Schema::create('products', function (Blueprint $table) {
    $table->id();
    $table->string('title');
    $table->integer('price');
    $table->string('gender');       // Men | Women | Unisex
    $table->string('brand');
    $table->integer('size');        // US size
    $table->string('condition');    // New | Excellent | Good | Fair
    $table->integer('stock')->default(0);
    $table->text('description');
    $table->json('images');         // Array of image URLs
    $table->boolean('featured')->default(false);
    $table->boolean('best_seller')->default(false);
    $table->string('category')->nullable();
    $table->timestamps();
});
```

### Step 8: Seed Initial Products

```bash
php artisan make:seeder ProductSeeder
```

Copy the `PRODUCTS` array from `assets/js/script.js` and adapt it into your seeder:

```php
// database/seeders/ProductSeeder.php
public function run()
{
    $products = [
        [
            'title'       => 'Nike Air Max 270',
            'price'       => 4500,
            'gender'      => 'Men',
            'brand'       => 'Nike',
            'size'        => 10,
            'condition'   => 'Excellent',
            'stock'       => 3,
            'description' => 'Classic Air Max 270 in near-mint condition...',
            'images'      => json_encode(['https://picsum.photos/seed/nike-am270-1/600/600']),
            'featured'    => true,
            'best_seller' => true,
        ],
        // ... more products
    ];

    foreach ($products as $product) {
        \App\Models\Product::create($product);
    }
}
```

### Step 9: Migrate JS Filters to Backend (Optional)

Once the backend is set up, update `script.js` to call your API instead of filtering the local array:

```javascript
// In renderProducts() — replace filterProducts() with:
async function renderProductsFromAPI(append = false) {
    const params = new URLSearchParams({
        gender:    shopState.gender.join(','),
        brands:    shopState.brands.join(','),
        sizes:     shopState.sizes.join(','),
        min_price: shopState.minPrice,
        max_price: shopState.maxPrice,
        conditions: shopState.conditions.join(','),
        sort:      shopState.sort,
        page:      shopState.page,
    });

    const response = await fetch(`/api/products?${params}`);
    const data = await response.json();
    // Render data.data using buildProductCard()
}
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Grid Columns (Products) |
|------------|------------------------|
| 320px+     | 2 columns              |
| 576px+     | 2 columns              |
| 768px+     | 3 columns              |
| 992px+     | 4 columns (with sidebar: 3) |

---

## ♿ Accessibility Features

- All interactive elements have ARIA labels
- `aria-live` regions for cart badge and toast notifications
- Semantic HTML (`nav`, `main`, `footer`, `section`, `article`)
- Focus-visible states via Bootstrap defaults
- Alt text on all images
- Form fields linked to labels via `for`/`id`
- Color contrast meets WCAG AA (orange on white: 3.5:1, white on dark: 7:1+)

---

## ⚡ Performance Notes

- All images use `loading="lazy"` (except hero)
- Google Fonts loaded with `preconnect`
- Bootstrap and jQuery loaded from CDN with SRI potential
- Scroll event listeners use `{ passive: true }`
- Filter debounce of 400ms on price inputs
- IntersectionObserver for scroll animations (no scroll event polling)

---

## 📞 WhatsApp Integration

The floating WhatsApp button links to:
```
https://wa.me/923001234567
```
Replace `923001234567` with the actual business number (country code + number, no `+` or spaces).

For pre-filled messages:
```
https://wa.me/923001234567?text=Hi%2C%20I%20want%20to%20order%20from%20Shoe%20Thrift
```

---

## 🔧 Quick Customization

| What to change       | Where                          |
|----------------------|--------------------------------|
| Brand colors         | `:root` in `assets/css/style.css` |
| Product data         | `PRODUCTS` array in `assets/js/script.js` |
| WhatsApp number      | Search `923001234567` across all files |
| Business address     | `contact.html`, `about.html`, footer |
| Google Maps location | `contact.html` iframe `src` attribute |
| Newsletter form      | `initHomePage()` in `script.js` |
| Social media links   | Footer and contact page        |

---

## 🧪 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile: iOS Safari 14+, Chrome Android 90+

---

*Built for Hamara Thrift Multan · 2026 · Ready for Laravel backend connection*
