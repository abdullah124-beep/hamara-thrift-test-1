# Hamara Thrift — Admin Panel

A clean, simple admin panel for managing your store without touching code.

## How to Access

Open `admin/index.html` in your browser.

**Default credentials:**
- Username: `admin`
- Password: `admin123`

> ⚠️ Change these before going live — open `admin/assets/js/admin.js` and update the `ADMIN_CREDENTIALS` object at the top.

---

## Pages

| Page | What you can do |
|------|----------------|
| **Dashboard** | Overview of products, orders, revenue |
| **Products** | Add, edit, delete shoe listings |
| **Orders** | View orders, update status (Pending → Shipped → Delivered) |
| **Home Page Content** | Edit hero text, stats, section headings |
| **About Page Content** | Edit story, founder info, mission |
| **Settings** | Contact info, delivery charges, return policy |

---

## How Data Works (Frontend-only phase)

Right now the admin panel saves everything to **localStorage** in your browser. This means:

- ✅ Changes persist between sessions on the same browser
- ✅ You can manage products and content without any server
- ❌ Changes don't automatically update the live HTML files yet

### Applying Changes to the Live Site

Until you move to Laravel, here's the workflow:

**For Products:** When you add/edit/delete a product in the admin panel, copy the updated product list from the browser console:
```js
JSON.stringify(JSON.parse(localStorage.getItem('ht_admin_products')), null, 2)
```
Then paste it into `assets/js/script.js` replacing the `PRODUCTS` array.

**For Content:** When you update text in the content editors, copy the values and paste them into the relevant HTML files manually.

---

## Moving to Laravel

When you migrate to Laravel, wire up these localStorage keys to your database:

| localStorage key | Laravel model |
|-----------------|---------------|
| `ht_admin_products` | `Product` |
| `ht_admin_orders` | `Order` |
| `ht_admin_content` | `SiteSetting` |

Replace the `Store.getProducts()` / `Store.saveProducts()` calls in `admin.js` with `fetch()` calls to your Laravel API endpoints. The HTML structure of every admin page stays exactly the same.

---

## File Structure

```
admin/
├── index.html              ← Login page
├── dashboard.html          ← Dashboard
├── products.html           ← Product management
├── orders.html             ← Orders list
├── content-home.html       ← Home page text editor
├── content-about.html      ← About page text editor
├── content-settings.html   ← Store settings
├── assets/
│   ├── css/admin.css       ← All admin styles
│   └── js/admin.js         ← Shared data, auth, utilities
└── README.md               ← This file
```
