<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ContactController;

/*
|--------------------------------------------------------------------------
| Web Routes — Hamara Thrift Multan
|--------------------------------------------------------------------------
*/

// Public pages
Route::get('/',                 fn() => view('home')       )->name('home');
Route::get('/about',            fn() => view('about')      )->name('about');
Route::get('/contact',          fn() => view('contact')    )->name('contact');
Route::get('/terms',            fn() => view('terms')      )->name('terms');
Route::get('/cart',             fn() => view('cart')       )->name('cart');
Route::get('/checkout',         fn() => view('checkout')   )->name('checkout');

// Shop (with optional filters via query string)
Route::get('/shop',             [ShopController::class, 'index']         )->name('shop');
Route::get('/shop/{id}',        [ShopController::class, 'show']          )->name('product.detail');

// Shop API (for AJAX filter calls — optional if you migrate JS filters to backend)
Route::get('/api/products',     [ShopController::class, 'apiProducts']   )->name('api.products');

// Contact form submission
Route::post('/contact',         [ContactController::class, 'submit']     )->name('contact.submit');

// Checkout (order placement — returns JSON for JS to handle)
Route::post('/checkout/place',  [CheckoutController::class, 'place']     )->name('checkout.place');

// Newsletter
Route::post('/newsletter',      fn() => response()->json(['success' => true]))->name('newsletter');
