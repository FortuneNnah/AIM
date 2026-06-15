import { useState } from 'react'
import './App.css'
import img6 from './assets/imgs/img6.webp'
import img7 from './assets/imgs/img7.webp'
import img8 from './assets/imgs/img8.webp'
import img5 from './assets/imgs/img5.webp'
import img10 from './assets/imgs/img10.webp'
import img4 from './assets/imgs/img4.webp'

const galleryImages = [
  img6,
  img7, 
  img8, 
  img5, 
  img10, 
  img4
]

const services = [
  {
    title: 'Portrait Sessions',
    description: 'Strong lighting, confident posing, and editorial-level retouching for headshots, portraits, and personal brands.'
  },
  {
    title: 'Brand Storytelling',
    description: 'Bespoke visual identity work for founders, creatives, and product launches with a refined monochrome style.'
  },
  {
    title: 'Event Coverage',
    description: 'Discrete, cinematic coverage that captures the atmosphere and the essential moments of each event.'
  }
]

const testimonials = [
  {
    quote: 'The final images were sharp, atmospheric, and exactly what our brand needed.',
    name: 'Maya Reed',
    role: 'Creative Director'
  },
  {
    quote: 'He turned a complex shoot into something effortless, and the results were premium.',
    name: 'Daniel Pierce',
    role: 'Founder'
  },
  {
    quote: 'A polished experience from start to finish with images that feel editorial and authentic.',
    name: 'Sofia Lane',
    role: 'Model'
  }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <div className="brand">
          <span className="brand-mark">AIM</span>
          <div>
            <p className="brand-name">Akpan Iyeneobong Moses</p>
            <p className="brand-subtitle">Professional Photography</p>
          </div>
        </div>
        <button
          className={`mobile-nav-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        >
          <span className="hamburger" aria-hidden="true" />
        </button>
        <nav className={menuOpen ? 'open' : ''}>
          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <span className="eyebrow">Fine Art Photography</span>
            <h1>Delivering premium imagery with precision and presence.</h1>
            <p>
              Thoughtful lighting, exacting composition, and polished execution combine to create memorable visuals for discerning clients.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#gallery">View gallery</a>
              <a className="button button-secondary" href="#contact">Book a shoot</a>
            </div>
          </div>

          <div className="hero-frame">
            <div className="hero-photo hero-photo-1" />
            <div className="hero-photo hero-photo-2" />
            <div className="hero-photo hero-photo-3" />
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section-header">
            <span className="eyebrow">About the artist</span>
            <h2>Minimal, bold, and unforgettable photography.</h2>
          </div>
          <div className="about-grid">
            <article>
              <h3>Portrait sessions</h3>
              <p>Polished portraits with strong, flattering light and natural, expressive direction.</p>
            </article>
            <article>
              <h3>Creative direction</h3>
              <p>Editorial image-making that feels premium and purposeful across campaigns and personal brand work.</p>
            </article>
            <article>
              <h3>Production support</h3>
              <p>Lightning-fast planning, reliable crew, and a calm on-set atmosphere for every client.</p>
            </article>
          </div>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="section-header">
            <span className="eyebrow">Recent work</span>
            <h2>Selected imagery from recent shoots.</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((src, index) => (
              <div
                key={src}
                className="gallery-item"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <img src={src} alt={`Portfolio image ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-header">
            <span className="eyebrow">Services</span>
            <h2>Creative services for your next visual project.</h2>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonials-section">
          <div className="section-header">
            <span className="eyebrow">Client praise</span>
            <h2>Trusted by brands, founders, and creatives.</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="testimonial-card">
                <p>"{testimonial.quote}"</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-panel">
            <div>
              <span className="eyebrow">Ready to shoot</span>
              <h2>Reach out for availability and production details.</h2>
              <p>Fast replies, custom proposals, and polished delivery for every session.</p>
            </div>
            <a className="button button-tertiary" href="https://wa.me/2349129062499?text=Hello%20AIM%20Photgraphy,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you." target="_blank" rel="noopener noreferrer">
              Contact me directly on Whatsapp!
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Aperture Prime · AIM Professional Photograph.</p>
      </footer>
    </div>
  )
}

export default App