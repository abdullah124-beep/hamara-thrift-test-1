{{-- resources/views/partials/footer.blade.php --}}
<footer class="main-footer" role="contentinfo">
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-4">
        <span class="footer-brand">Hamara Thrift</span>
        <p class="footer-desc">Multan's premium second-hand sneaker destination. Sustainable, affordable, and absolutely iconic.</p>
        <div class="footer-social">
          <a href="https://instagram.com/hamarathriftmultan" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
          <a href="https://facebook.com/hamarathriftmultan" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
          <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
          <a href="https://tiktok.com/@hamarathriftmultan" target="_blank" rel="noopener noreferrer" class="social-btn" aria-label="TikTok"><i class="bi bi-tiktok"></i></a>
        </div>
      </div>
      <div class="col-sm-4 col-lg-2">
        <h3 class="footer-heading">Shop</h3>
        <ul class="footer-links">
          <li><a href="{{ route('shop') }}">All Shoes</a></li>
          <li><a href="{{ route('shop', ['gender' => 'Men']) }}">Men's</a></li>
          <li><a href="{{ route('shop', ['gender' => 'Women']) }}">Women's</a></li>
          <li><a href="{{ route('shop', ['gender' => 'Unisex']) }}">Unisex</a></li>
          <li><a href="{{ route('shop', ['condition' => 'New']) }}">New Arrivals</a></li>
        </ul>
      </div>
      <div class="col-sm-4 col-lg-2">
        <h3 class="footer-heading">Info</h3>
        <ul class="footer-links">
          <li><a href="{{ route('about') }}">About Us</a></li>
          <li><a href="{{ route('contact') }}">Contact</a></li>
          <li><a href="{{ route('terms') }}">Terms & Privacy</a></li>
        </ul>
      </div>
      <div class="col-sm-4 col-lg-4">
        <h3 class="footer-heading">Contact Us</h3>
        <ul class="footer-links">
          <li><i class="bi bi-telephone me-2" aria-hidden="true"></i>+92 300 1234567</li>
          <li><i class="bi bi-envelope me-2" aria-hidden="true"></i>hello@hamarathrift.pk</li>
          <li><i class="bi bi-geo-alt me-2" aria-hidden="true"></i>Hussain Agahi Bazar, Multan</li>
          <li class="mt-3">
            <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" class="btn-primary-brand" style="font-size:0.85rem;padding:10px 20px">
              <i class="bi bi-whatsapp"></i> Chat on WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© {{ date('Y') }} Hamara Thrift Multan. All rights reserved.</span>
      <span>Made with ❤️ in Multan, Pakistan</span>
      <a href="{{ route('terms') }}" style="color:inherit">Terms & Privacy</a>
    </div>
  </div>
</footer>
