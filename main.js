const agents = [
  {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Property Consultant",
      phone: "+234 801 234 5678",
      email: "sarah.johnson@myproperty.com",
      whatsapp: "+2348012345678",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
      id: 2,
      name: "Michael Adeyemi",
      title: "Real Estate Specialist",
      phone: "+234 802 345 6789",
      email: "michael.adeyemi@myproperty.com",
      whatsapp: "+2348023456789",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
      id: 3,
      name: "Chioma Okafor",
      title: "Luxury Property Advisor",
      phone: "+234 803 456 7890",
      email: "chioma.okafor@myproperty.com",
      whatsapp: "+2348034567890",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const properties = [
  {
      id: 1,
      title: "Modern Apartment",
      location: "Egbeda, Lagos",
      beds: 2,
      baths: 2,
      sqft: 1000,
      price: 2500000,
      priceType: "rent",
      type: "apartment",
      agentId: 1,
      description: "A sleek, fully-furnished modern apartment located in the heart of New York City. This stunning unit features floor-to-ceiling windows with breathtaking skyline views, an open-plan kitchen with premium appliances, and high-end finishes throughout. Residents enjoy access to a rooftop terrace, 24-hour concierge, and a state-of-the-art fitness centre. Walking distance to top restaurants, shopping, and transit hubs.",
      image: "https://images.unsplash.com/photo-1531300365552-da5abe58a725?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGhvdXNlcyUyMGZvciUyMHJlbnQlMjBpbiUyMG5pZ2VyaWF8ZW58MHx8MHx8fDA%3D"
  },
  {
      id: 2,
      title: "Cozy Family Home",
      location: "Magodo, Lagos",
      beds: 3,
      baths: 2,
      sqft: 1800,
      price: 45000000,
      priceType: "sale",
      type: "house",
      agentId: 2,
      description: "A warm and inviting family home nestled in one of Los Angeles's most sought-after neighbourhoods. This property boasts a spacious open-plan living area, a fully equipped kitchen with a breakfast island, and a large landscaped backyard perfect for entertaining. The master suite includes a walk-in wardrobe and en-suite bathroom. Excellent school catchment area and close to major highways.",
      image: "https://images.unsplash.com/photo-1643297551340-19d8ad4f20ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGhvdXNlcyUyMGZvciUyMHJlbnQlMjBpbiUyMG5pZ2VyaWF8ZW58MHx8MHx8fDA%3D"
  },
  {
      id: 3,
      title: "Luxury Beach Villa",
      location: "Eleko, Lagos",
      beds: 4,
      baths: 3,
      sqft: 3200,
      price: 75000000,
      priceType: "sale",
      type: "villa",
      agentId: 3,
      description: "An exceptional beachfront villa offering the ultimate in coastal luxury. This architecturally designed home features an infinity pool overlooking the ocean, a gourmet kitchen, and expansive terraces ideal for al fresco dining. The four en-suite bedrooms are beautifully appointed with premium furnishings. Smart home technology, private beach access, and a three-car garage complete this stunning offering.",
      image: "https://images.unsplash.com/photo-1745725427804-4d94df0c5eb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdXNlcyUyMGZvciUyMHJlbnQlMjBpbiUyMG5pZ2VyaWF8ZW58MHx8MHx8fDA%3D"
  },
  {
      id: 4,
      title: "Downtown Loft",
      location: "Gbagada, Lagos",
      beds: 1,
      baths: 1,
      sqft: 800,
      price: 1800000,
      priceType: "rent",
      type: "apartment",
      agentId: 1,
      description: "A stylish industrial-chic loft in the heart of Chicago's vibrant downtown district. Exposed brick walls, polished concrete floors, and soaring ceilings create a unique and atmospheric living space. The open-plan layout maximises the natural light from the oversized factory-style windows. Just steps away from world-class dining, nightlife, galleries, and the iconic Chicago Riverwalk.",
      image: "https://images.unsplash.com/photo-1628353100822-0229ae96e820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlcyUyMGZvciUyMHJlbnQlMjBpbiUyMG5pZ2VyaWF8ZW58MHx8MHx8fDA%3D"
  },
  {
      id: 5,
      title: "Suburban Retreat",
      location: "Victoria Island, Lagos",
      beds: 4,
      baths: 3,
      sqft: 2400,
      price: 55000000,
      priceType: "sale",
      type: "house",
      agentId: 2,
      description: "A beautiful suburban retreat offering space, comfort, and modern living. This four-bedroom home features a chef's kitchen with quartz countertops, a formal dining room, and a sunlit family room that opens onto a covered patio and pool. The primary suite is a true sanctuary with a spa-like bathroom. Located in a quiet, tree-lined neighbourhood with top-rated schools and easy access to downtown Austin.",
      image: "https://images.unsplash.com/photo-1694068154835-98ebce3175b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHN1YnVyYmFufGVufDB8fDB8fHww"
  },
  {
      id: 6,
      title: "Penthouse Suite",
      location: "Ikoyi, Lagos",
      beds: 3,
      baths: 2,
      sqft: 2000,
      price: 6500000,
      priceType: "rent",
      type: "apartment",
      agentId: 3,
      description: "A world-class penthouse perched atop one of San Francisco's most prestigious buildings. This exceptional residence offers panoramic 360-degree views of the Bay, Golden Gate Bridge, and city skyline. Featuring a private rooftop terrace, designer interiors, a chef's kitchen, and three spa-inspired bathrooms. Residents have exclusive access to a private lift, concierge, valet parking, and a private wine cellar.",
      image: "https://plus.unsplash.com/premium_photo-1661872731017-f16222b794cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVudGhvdXNlfGVufDB8fDB8fHww"
  }
];

function formatPrice(price, type) {
  if (type === 'rent') {
      return `₦${price.toLocaleString('en-NG')} / month`;
  }
  return `₦${price.toLocaleString('en-NG')}`;
}

function createPropertyCard(property) {
  const priceClass = property.priceType === 'rent' ? 'price-rent' : 'price-sale';
  const sqftDisplay = property.sqft ? `| ${property.sqft.toLocaleString()} sq ft` : '';

  return `
      <div class="col-md-6 col-lg-4">
          <div class="card property-card h-100" onclick="viewDetails(${property.id})">
              <img src="${property.image}" class="card-img-top property-image" alt="${property.title}">
              <div class="card-body">
                  <h5 class="card-title">${property.title}</h5>
                  <p class="text-muted mb-2"><i class="bi bi-geo-alt"></i> ${property.location}</p>
                  <p class="text-muted small mb-3">${property.beds} Beds | ${property.baths} Baths ${sqftDisplay}</p>
                  <span class="price-badge ${priceClass} d-inline-block mb-3">${formatPrice(property.price, property.priceType)}</span>
                  <button class="btn btn-primary w-100" onclick="event.stopPropagation(); viewDetails(${property.id})">View Details</button>
              </div>
          </div>
      </div>
  `;
}

function createHorizontalPropertyCard(property) {
  const priceClass = property.priceType === 'rent' ? 'price-rent' : 'price-sale';

  return `
      <div class="similar-property">
          <div class="row g-0">
              <div class="col-4">
                  <img src="${property.image}" class="w-100 h-100" style="object-fit:cover;" alt="${property.title}">
              </div>
              <div class="col-8 p-3">
                  <h6 class="mb-1">${property.title}</h6>
                  <p class="text-muted small mb-1">${property.location}</p>
                  <p class="text-muted small mb-2">${property.beds} Beds | ${property.baths} Baths</p>
                  <span class="price-badge ${priceClass} small d-inline-block mb-2">${formatPrice(property.price, property.priceType)}</span><br>
                  <button class="btn btn-sm btn-primary mt-1" onclick="viewDetails(${property.id})">View Details</button>
              </div>
          </div>
      </div>
  `;
}

function viewDetails(id) {
  const property = properties.find(p => p.id === id);
  if (!property) return;

  const agent = agents.find(a => a.id === property.agentId);
  const priceClass = property.priceType === 'rent' ? 'price-rent' : 'price-sale';
  const sqftDisplay = property.sqft ? property.sqft.toLocaleString() + ' sq ft' : 'N/A';

  document.getElementById('detail-content').innerHTML = `
      <div class="mb-4">
          <button class="btn btn-outline-secondary btn-sm mb-3" onclick="history.go(-1) || showPage('listings', {target: document.querySelector('.nav-link')})">
              <i class="bi bi-arrow-left"></i> Back
          </button>
          <img src="${property.image}" class="detail-hero-img" alt="${property.title}">
      </div>

      <div class="row g-5">
          <div class="col-lg-7">
              <div class="d-flex align-items-start justify-content-between flex-wrap gap-3 mb-3">
                  <div>
                      <h2 class="fw-bold mb-1">${property.title}</h2>
                      <p class="text-muted mb-0"><i class="bi bi-geo-alt-fill text-primary"></i> ${property.location}</p>
                  </div>
                  <span class="price-badge ${priceClass} fs-6">${formatPrice(property.price, property.priceType)}</span>
              </div>

              <div class="detail-meta-box mb-4">
                  <div class="meta-item"><i class="bi bi-door-open"></i><span><strong>Bedrooms:</strong> ${property.beds}</span></div>
                  <div class="meta-item"><i class="bi bi-droplet"></i><span><strong>Bathrooms:</strong> ${property.baths}</span></div>
                  <div class="meta-item"><i class="bi bi-aspect-ratio"></i><span><strong>Size:</strong> ${sqftDisplay}</span></div>
                  <div class="meta-item"><i class="bi bi-house"></i><span><strong>Type:</strong> ${property.type.charAt(0).toUpperCase() + property.type.slice(1)}</span></div>
                  <div class="meta-item"><i class="bi bi-tag"></i><span><strong>Listing:</strong> For ${property.priceType.charAt(0).toUpperCase() + property.priceType.slice(1)}</span></div>
              </div>

              <h4 class="fw-semibold mb-2">About This Property</h4>
              <p class="text-muted lh-lg">${property.description}</p>
          </div>

          <div class="col-lg-5">
              <div class="agent-card">
                  <h5 class="fw-semibold mb-4">Listed by</h5>
                  <div class="d-flex align-items-center gap-3 mb-4">
                      <img src="${agent.avatar}" class="agent-avatar" alt="${agent.name}">
                      <div>
                          <p class="fw-bold mb-0">${agent.name}</p>
                          <p class="text-muted small mb-0">${agent.title}</p>
                      </div>
                  </div>
                  <div class="mb-2 text-muted small"><i class="bi bi-telephone text-primary me-2"></i>${agent.phone}</div>
                  <div class="mb-4 text-muted small"><i class="bi bi-envelope text-primary me-2"></i>${agent.email}</div>
                  <button class="btn btn-success w-100 fw-semibold" onclick="openAgentOverlay(${agent.id})">
                      <i class="bi bi-chat-dots-fill me-2"></i>Contact Agent
                  </button>
              </div>
          </div>
      </div>
  `;

  document.querySelectorAll('.page-content').forEach(page => page.classList.add('d-none'));
  document.getElementById('detail-page').classList.remove('d-none');
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  window.scrollTo(0, 0);
}

function openAgentOverlay(agentId) {
  const agent = agents.find(a => a.id === agentId);
  if (!agent) return;

  document.getElementById('overlay-content').innerHTML = `
      <img src="${agent.avatar}" class="agent-overlay-avatar" alt="${agent.name}">
      <h5 class="text-center fw-bold mb-1">${agent.name}</h5>
      <p class="text-center text-muted small mb-4">${agent.title}</p>

      <div class="overlay-contact-row">
          <i class="bi bi-telephone-fill"></i>
          <div>
              <div class="text-muted" style="font-size:0.78rem;">Phone</div>
              <a href="tel:${agent.phone}" class="text-decoration-none fw-semibold text-dark">${agent.phone}</a>
          </div>
      </div>
      <div class="overlay-contact-row">
          <i class="bi bi-envelope-fill"></i>
          <div>
              <div class="text-muted" style="font-size:0.78rem;">Email</div>
              <a href="mailto:${agent.email}" class="text-decoration-none fw-semibold text-dark">${agent.email}</a>
          </div>
      </div>
      <div class="overlay-contact-row">
          <i class="bi bi-whatsapp" style="color:#25D366;"></i>
          <div>
              <div class="text-muted" style="font-size:0.78rem;">WhatsApp</div>
              <a href="https://wa.me/${agent.whatsapp}" target="_blank" class="text-decoration-none fw-semibold text-dark">${agent.phone}</a>
          </div>
      </div>

      <div class="d-grid gap-2 mt-4">
          <a href="tel:${agent.phone}" class="btn btn-primary"><i class="bi bi-telephone me-2"></i>Call Now</a>
          <a href="https://wa.me/${agent.whatsapp}" target="_blank" class="btn btn-success"><i class="bi bi-whatsapp me-2"></i>WhatsApp</a>
          <a href="mailto:${agent.email}" class="btn btn-outline-secondary"><i class="bi bi-envelope me-2"></i>Send Email</a>
      </div>
  `;

  document.getElementById('agentOverlay').classList.add('active');
}

function closeAgentOverlay() {
  document.getElementById('agentOverlay').classList.remove('active');
}

document.addEventListener('click', function (e) {
  if (e.target === document.getElementById('agentOverlay')) {
      closeAgentOverlay();
  }
});

function renderFeaturedProperties() {
  const container = document.getElementById('featured-properties');
  container.innerHTML = properties.slice(0, 6).map(createPropertyCard).join('');
}

function renderAllProperties(filteredProperties = properties) {
  const container = document.getElementById('all-properties');
  container.innerHTML = filteredProperties.map(createPropertyCard).join('');
}

function renderSimilarProperties() {
  const container = document.getElementById('similar-properties');
  container.innerHTML = properties.slice(0, 2).map(createHorizontalPropertyCard).join('');
}

function showPage(pageName, event) {
  document.querySelectorAll('.page-content').forEach(page => page.classList.add('d-none'));
  document.getElementById(`${pageName}-page`).classList.remove('d-none');

  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');

  window.scrollTo(0, 0);

  if (pageName === 'listings') renderAllProperties();
  else if (pageName === 'contact') renderSimilarProperties();
}

function searchProperties() {
  document.querySelectorAll('.page-content').forEach(page => page.classList.add('d-none'));
  document.getElementById('listings-page').classList.remove('d-none');
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  window.scrollTo(0, 0);
  renderAllProperties();
}

function applyFilters() {
  const location = document.getElementById('filter-location').value.toLowerCase();
  const type = document.getElementById('filter-type').value;
  const priceRange = document.getElementById('filter-price').value;

  let filtered = properties.filter(property => {
      let match = true;

      if (location && !property.location.toLowerCase().includes(location)) match = false;
      if (type && property.type !== type) match = false;

      if (priceRange) {
          const [min, max] = priceRange.split('-').map(p => p.replace('+', ''));
          if (max && property.price > parseInt(max)) match = false;
          if (min && property.price < parseInt(min)) match = false;
          if (priceRange === '500000+' && property.price < 500000) match = false;
      }

      return match;
  });

  renderAllProperties(filtered);
}

function handleContactSubmit(event) {
  event.preventDefault();
  alert('Message sent successfully!');
  event.target.reset();
}

document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProperties();
});