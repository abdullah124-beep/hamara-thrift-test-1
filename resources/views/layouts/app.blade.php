<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>@yield('title', 'Hamara Thrift Multan — Premium Second-Hand Sneakers')</title>
  <meta name="description" content="@yield('description', 'Thrift premium sneakers in Multan. Second-hand shoes that look brand new.')">

  @yield('meta')

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Barlow:wght@400;500;600&display=swap" rel="stylesheet">

  <!-- Bootstrap 5.3 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Bootstrap Icons -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <!-- Custom CSS -->
  <link rel="stylesheet" href="{{ asset('css/style.css') }}">

  @yield('head')
</head>
<body>

  @include('partials.navbar')

  @yield('content')

  @include('partials.footer')

  <!-- Toast Container -->
  <div class="toast-container-custom" aria-live="polite" aria-atomic="true"></div>

  <!-- Scroll to Top -->
  <button class="scroll-to-top" aria-label="Scroll to top"><i class="bi bi-arrow-up" aria-hidden="true"></i></button>

  <!-- WhatsApp Float -->
  <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" class="whatsapp-float" aria-label="Chat on WhatsApp">
    <i class="bi bi-whatsapp" aria-hidden="true"></i>
  </a>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <!-- jQuery -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <!-- Custom JS -->
  <script src="{{ asset('js/script.js') }}"></script>

  @yield('scripts')
</body>
</html>
