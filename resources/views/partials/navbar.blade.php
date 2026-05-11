{{-- resources/views/partials/navbar.blade.php --}}
<nav class="main-navbar navbar navbar-expand-lg" role="navigation" aria-label="Main navigation">
  <div class="container">
    <a class="navbar-brand-custom" href="{{ route('home') }}" aria-label="Hamara Thrift Home">
      <img src="{{ asset('images/hamara-thrift-logo.png') }}" alt="Hamara Thrift — سب تمھارا" class="navbar-logo-img">
      Shoe<span class="brand-dot">.</span>Thrift
    </a>

    <button class="navbar-toggler border-0 shadow-none" type="button"
      data-bs-toggle="collapse" data-bs-target="#mainNav"
      aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav mx-auto gap-1">
        <li class="nav-item">
          <a class="nav-link {{ request()->routeIs('home') ? 'active' : '' }}" href="{{ route('home') }}">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link {{ request()->routeIs('shop*') ? 'active' : '' }}" href="{{ route('shop') }}">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link {{ request()->routeIs('about') ? 'active' : '' }}" href="{{ route('about') }}">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link {{ request()->routeIs('contact') ? 'active' : '' }}" href="{{ route('contact') }}">Contact</a>
        </li>
      </ul>

      <div class="navbar-icons">
        <div class="navbar-search d-none d-lg-block me-2">
          <i class="bi bi-search search-icon" aria-hidden="true"></i>
          <input type="search" placeholder="Search sneakers..." aria-label="Search products"
            id="navbar-search">
        </div>
        <a href="{{ route('cart') }}" class="navbar-icon-btn" aria-label="Shopping cart">
          <i class="bi bi-bag" aria-hidden="true"></i>
          <span class="cart-badge hidden" aria-live="polite">0</span>
        </a>
      </div>
    </div>
  </div>
</nav>
