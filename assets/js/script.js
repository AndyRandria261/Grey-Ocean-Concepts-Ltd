// Products Data
const products = [
  // Balustrades
  {
    title: "Frameless Glass Balustrade",
    category: "Balustrades",
    image: "assets/img/modern-glass-railing-balcony.jpg",
    description:
      "Premium frameless glass balustrade system providing unobstructed views. Features 12mm toughened safety glass with invisible fixings for a clean, modern aesthetic.",
    price: "From €320/m",
    duration: "2-3 weeks",
    features: [
      "12mm toughened safety glass",
      "Invisible stainless steel fixings",
      "Compliant with EN 12600 standard",
      "Weather-resistant finishes",
    ],
  },
  {
    title: "Semi-Frameless Balcony Railing",
    category: "Balustrades",
    image: "assets/img/modern-glass-railing-balcony.jpg",
    description:
      "Elegant semi-frameless balustrade combining structural posts with glass panels. Perfect for residential balconies and terraces.",
    price: "From €280/m",
    duration: "2-4 weeks",
    features: [
      "Aluminium or stainless steel posts",
      "10mm tempered glass panels",
      "Multiple finish options",
      "10-year structural warranty",
    ],
  },

  // Kitchen Splashbacks
  {
    title: "Colored Glass Backsplash",
    category: "KitchenSplashbacks",
    image: "assets/img/luxury-frameless-glass-door.jpg",
    description:
      "Custom-colored glass splashback in any RAL color. Easy to clean, hygienic surface that adds a modern touch to your kitchen design.",
    price: "From €180/m²",
    duration: "1-2 weeks",
    features: [
      "6mm toughened glass",
      "Any RAL color available",
      "Easy-clean surface",
      "Heat-resistant up to 200°C",
    ],
  },  
  {
    title: "Printed Glass Kitchen Panel",
    category: "Kitchen Splashbacks",
    image: "assets/img/luxury-frameless-glass-door.jpg",
    description:
      "High-definition digital printed glass splashback with custom designs or photos. Create a unique focal point in your kitchen.",
    price: "From €250/m²",
    duration: "2-3 weeks",
    features: [
      "HD digital printing",
      "Custom design or image",
      "Fade-resistant inks",
      "Seamless installation",
    ],
  },

  // Shower Cabins
  {
    title: "Walk-In Shower Enclosure",
    category: "Shower Cabins",
    image: "assets/img/modern-interior-glass-partition-loft.jpg",
    description:
      "Luxurious walk-in shower featuring 10mm clear glass panels with minimal framing. Creates a spa-like experience in your bathroom.",
    price: "From €850/unit",
    duration: "3-4 weeks",
    features: [
      "10mm toughened glass",
      "Chrome or matte black fittings",
      "Easy-clean coating",
      "Custom sizing available",
    ],
  },
  {
    title: "Sliding Shower Door System",
    category: "Shower Cabins",
    image: "assets/img/modern-interior-glass-partition-loft.jpg",
    description:
      "Space-saving sliding shower door with smooth glide system. Ideal for compact bathrooms without compromising on style.",
    price: "From €680/unit",
    duration: "2-3 weeks",
    features: [
      "8mm tempered glass",
      "Soft-close mechanism",
      "Anti-limescale treatment",
      "Lifetime hardware warranty",
    ],
  },

  // Aluminium Doors & Windows
  {
    title: "Bi-Fold Aluminium Door",
    category: "Aluminium Doors",
    image: "assets/img/modern-office-glass-partition.jpg",
    description:
      "Contemporary bi-fold door system that seamlessly connects indoor and outdoor spaces. Features slim sightlines and smooth operation.",
    price: "From €1,200/m²",
    duration: "4-6 weeks",
    features: [
      "Thermally broken aluminium",
      "Low-E double glazing",
      "Multi-point locking system",
      "Powder-coated finish",
    ],
  },
  {
    title: "Casement Windows",
    category: "Aluminium Doors",
    image: "assets/img/modern-office-glass-partition.jpg",
    description:
      "Energy-efficient aluminium casement windows with slim profiles. Combines modern aesthetics with excellent thermal performance.",
    price: "From €350/m²",
    duration: "3-5 weeks",
    features: [
      "Thermal break technology",
      "Triple weatherseals",
      "Tilt & turn options",
      "A-rated energy performance",
    ],
  },

  // Facade Engineering
  {
    title: "Structural Glass Facade",
    category: "Facade Engineering",
    image: "assets/img/modern-glass-facade-building-exterior.jpg",
    description:
      "Advanced structural glazing system for commercial buildings. Provides exceptional thermal performance and architectural impact.",
    price: "From €550/m²",
    duration: "6-10 weeks",
    features: [
      "Point-fixed or spider glazing",
      "High-performance insulated glass",
      "Wind load calculations included",
      "BIM modeling support",
    ],
  },
  {
    title: "Curtain Wall System",
    category: "Facade Engineering",
    image: "assets/img/modern-glass-facade-building-exterior.jpg",
    description:
      "Complete unitized curtain wall solution for multi-story buildings. Engineered for superior weather resistance and energy efficiency.",
    price: "From €450/m²",
    duration: "8-12 weeks",
    features: [
      "Modular unitized system",
      "Triple glazing options",
      "Integrated shading systems",
      "Full engineering support",
    ],
  },
];

// Navigation Scroll Effect
const navbar = document.getElementById("navbar")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  lastScroll = currentScroll
})

// Mobile Menu
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navLinks = document.getElementById("navLinks")

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active")
  mobileMenuBtn.classList.toggle("active")
})

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active")
  })
})

// Glass Shatter Animation
function createGlassFragments() {
  const container = document.getElementById("glassFragments")
  const fragmentCount = 20

  setTimeout(() => {
    for (let i = 0; i < fragmentCount; i++) {
      const fragment = document.createElement("div")
      fragment.className = "glass-fragment"

      const top = Math.random() * 100
      const left = Math.random() * 100
      const tx = (Math.random() - 0.5) * 200
      const ty = (Math.random() - 0.5) * 200
      const rotate = Math.random() * 360

      fragment.style.top = `${top}%`
      fragment.style.left = `${left}%`
      fragment.style.setProperty("--tx", `${tx}px`)
      fragment.style.setProperty("--ty", `${ty}px`)
      fragment.style.setProperty("--rotate", `${rotate}deg`)
      fragment.style.animationDelay = `${i * 0.1}s`

      container.appendChild(fragment)
    }
  }, 500)
}

createGlassFragments()

// Product Filtering
let activeFilter = "All"

function renderProducts() {
  const productsGrid = document.getElementById("productsGrid");
  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  // Handle empty state
  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
      <div class="products-empty">
        <div class="products-empty-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
            <line x1="9" y1="9" x2="9.01" y2="9"/>
            <line x1="15" y1="9" x2="15.01" y2="9"/>
          </svg>
        </div>
        <p class="products-empty-text">No products found in this category</p>
      </div>
    `;
    return;
  }

  // Render products with staggered animation
  productsGrid.innerHTML = filteredProducts
    .map(
      (product, index) => `
        <div class="product-card" 
             data-index="${products.indexOf(product)}" 
             style="animation: slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s both;">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
                <div class="product-overlay"></div>
            </div>
            <div class="product-content">
                <div class="product-header">
                    <div>
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-title">${product.title}</h3>
                    </div>
                    <div class="product-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    `
    )
    .join("");

  // Add click handlers with debouncing
  document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", function() {
      const index = parseInt(this.getAttribute("data-index"));
      openProductModal(index);
    });
  });
}

// Product Filter Buttons
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", function() {
    // Remove active class from all buttons
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    
    // Add active class to clicked button
    this.classList.add("active");
    
    // Update filter and re-render
    activeFilter = this.getAttribute("data-filter");
    renderProducts();
    
    // Smooth scroll to products grid
    document.getElementById("productsGrid").scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  });
});

// Product Modal
const modal = document.getElementById("productModal")
const modalBody = document.getElementById("modalBody")
const modalClose = document.getElementById("modalClose")
const modalOverlay = document.querySelector(".modal-overlay")

function openProductModal(index) {
  const product = products[index];

  modalBody.innerHTML = `
    <div class="modal-grid">
        <div class="modal-image">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="modal-details">
            <div class="section-badge">
                <div class="badge-dot"></div>
                <span>${product.category}</span>
            </div>
            <h3>${product.title}</h3>
            <p class="modal-description">${product.description}</p>
            
            <div class="modal-info-grid">
                <div class="modal-info-card">
                    <div class="modal-info-header">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="12" y1="1" x2="12" y2="23"/>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                        </svg>
                        <span>PRICE</span>
                    </div>
                    <div class="modal-info-content">${product.price}</div>
                </div>
                <div class="modal-info-card">
                    <div class="modal-info-header">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        <span>DURATION</span>
                    </div>
                    <div class="modal-info-content">${product.duration}</div>
                </div>
            </div>
            
            <div class="modal-features">
                <h4>KEY FEATURES</h4>
                <ul>
                    ${product.features.map((f) => `<li>${f}</li>`).join("")}
                </ul>
            </div>
            
            <button class="btn btn-primary btn-full modal-cta">
                Request a Quote
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </button>
        </div>
    </div>
  `;

  // Show modal with animation
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  
  // Focus trap for accessibility
  modalClose.focus();
}

function closeProductModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Modal event listeners
modalClose.addEventListener("click", closeProductModal);
modalOverlay.addEventListener("click", closeProductModal);

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeProductModal();
  }
});

// Prevent modal content clicks from closing modal
document.addEventListener("click", (e) => {
  if (modal.classList.contains("active")) {
    const modalContent = document.querySelector(".modal-content");
    if (modalContent && !modalContent.contains(e.target) && e.target === modalOverlay) {
      closeProductModal();
    }
  }
});


// Contact Form
// const contactForm = document.getElementById("contactForm")

// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault()

//   // Get form data
//   const formData = new FormData(contactForm)
//   const data = Object.fromEntries(formData)

//   console.log("Form submitted:", data)

//   // Show success message (you can customize this)
//   alert("Thank you for your message! We will contact you soon.")

//   // Reset form
//   contactForm.reset()
// })


const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", function (e) {
  e.preventDefault()

  emailjs.sendForm(
    "service_410wvsk",
    "template_c33gzwx",
    this
  )
  .then(() => {
    alert("Message sent successfully ✅")
    contactForm.reset()
  })
  .catch((error) => {
    alert("Failed to send message ❌")
    console.error("EmailJS Error:", error)
  })
})

// Set current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear()

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offset = 80 // Navbar height
      const targetPosition = target.offsetTop - offset
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Initialize products
renderProducts()