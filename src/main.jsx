import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, ArrowUpRight, CalendarDays, CheckCircle2, Mail, Menu, X } from 'lucide-react';
import './styles.css';

const BASE = 'https://www.epictrends.net';
const APP_BASE = import.meta.env.BASE_URL;

const localAsset = (filename) => `${APP_BASE}assets/${filename}`;

function internalHref(path) {
  if (APP_BASE === '/') return path;

  const [pathname, hash] = path.split('#');
  if (pathname === '/' || pathname === '') return `${APP_BASE}${hash ? `#${hash}` : ''}`;

  const page = pathname.replace(/^\/+|\/+$/g, '');
  return `${APP_BASE}?page=${encodeURIComponent(page)}${hash ? `#${hash}` : ''}`;
}

const brands = [
  { name: 'Allermuir', url: 'https://www.allermuir.com/us', category: 'Seating', product: 'Thoughtful seating for modern spaces.', image: localAsset('brand-allermuir.jpg') },
  { name: 'Amish Country', url: 'https://www.amishcountry.com/', category: 'Furniture', product: 'Craftsmanship that endures.', image: localAsset('brand-amish-country.jpg') },
  { name: 'Camira', url: 'https://www.camirafabrics.com/us', category: 'Textiles', product: 'Beautiful textiles for a better tomorrow.', image: localAsset('brand-camira.jpg') },
  { name: 'Luna Textiles', url: 'https://lunatextiles.com/', category: 'Textiles', product: 'Inspirational textiles for the built environment.', image: localAsset('brand-luna.jpg') },
  { name: 'Darran', url: 'https://www.darran.com/', category: 'Furniture', product: 'Functional furniture for education and work.', image: localAsset('brand-darran.jpg') },
  { name: 'Egan', url: 'https://egan.com/', category: 'Visual communications', product: 'Flexible solutions for modern learning.', image: localAsset('brand-egan.jpg') },
  { name: 'Enwork', url: 'https://www.enwork.com/', category: 'Workplace', product: 'Spaces that empower people.', image: localAsset('brand-enwork.jpg') },
  { name: 'Martin Brattrud', url: 'https://martinbrattrud.com/', category: 'Seating', product: 'Enduring design for public spaces.', image: localAsset('brand-martin-brattrud.jpg') },
  { name: 'Nuans Design', url: 'https://nuansdesign.com/', category: 'Furniture', product: 'Versatile. Elevated. Human-centered.', image: localAsset('brand-nuans-design.jpg') },
  { name: 'OM Seating', url: 'https://www.omseating.com/', category: 'Seating', product: 'Seating for a brighter tomorrow.', image: localAsset('brand-om-seating.jpg') },
  { name: 'Prismatique', url: 'https://www.prismatique.com/', category: 'Tables', product: 'Distinctive design. Everyday function.', image: localAsset('brand-prismatique.jpg') },
  { name: 'Senator', url: 'https://www.senator.online/', category: 'Workplace', product: 'Design for a better world.', image: localAsset('brand-senator.jpg') },
  { name: 'Stance Healthcare', url: 'https://www.stancehealthcare.com/', category: 'Healthcare', product: 'Solutions for care environments.', image: localAsset('brand-stance-healthcare.jpg') },
];

const team = [
  { name: 'Terri Burkhart', role: 'Principal · A&D Market Manager', phone: '760.717.7167', email: 'Terri@EPICtrends.net', territory: 'LA County | Hawaii', image: 'https://static.wixstatic.com/media/a869c5_8c70af39047e44c595ea15d50e65ff55~mv2.png' },
  { name: 'Sabrina Benavides', role: 'A&D Market Manager · IIDA | CEAS', phone: '562.353.7411', email: 'Sabrina@EPICtrends.net', territory: 'LA County', image: 'https://static.wixstatic.com/media/a869c5_fbd1bfd49e594029b0321a887361e123~mv2.png' },
  { name: 'Vanessa Aparicio', role: 'A&D Market Manager · IIDA | CEAS', phone: '909.964.7417', email: 'Vanessa@EPICtrends.net', territory: 'LA County', image: 'https://static.wixstatic.com/media/a869c5_9f965f40bc3648e9ba924027e3faaf04~mv2.png' },
  { name: 'Josh McLeish', role: 'Market Manager', phone: '949.973.2207', email: 'Josh@EPICtrends.net', territory: 'Orange County | San Bernardino County', image: localAsset('team-josh-mcleish.jpg') },
  { name: 'Sierra Repp', role: 'A&D Market Manager · IIDA | CEAS', phone: '949.726.2460', email: 'Sierra@EPICtrends.net', territory: 'Orange County | San Bernardino County', image: localAsset('team-sierra-repp.jpg') },
  { name: 'Cari Meyer', role: 'Market Manager · IIDA', phone: '619.665.5663', email: 'Cari@EPICtrends.net', territory: 'San Diego | Imperial | Riverside Counties', image: localAsset('team-cari-meyer.jpg') },
  { name: 'Peter Trevino', role: 'Market Manager · GSA | CEAS', phone: '310.938.8448', email: 'Peter@EPICtrends.net', territory: 'Ventura | Santa Barbara | SLO | Kern Counties', image: localAsset('team-peter-trevino.jpg') },
  { name: 'Goldbourn Sebastian', role: 'Market Manager', phone: '323.573.1561', email: 'Goldbourn@EPICtrends.net', territory: 'Southern California', image: localAsset('team-goldbourn-sebastian.jpg') },
  { name: 'Scott Burkhart', role: 'Warehouse & Deliveries Manager', phone: '760.429.0805', email: 'Scott@EPICtrends.net', territory: 'Operations', image: localAsset('team-scott-burkhart.jpg') },
  { name: 'Riley Lenci', role: 'CFO', email: 'Riley@EPICtrends.net', territory: 'Operations', image: localAsset('team-riley-lenci.jpg') },
];

const resourceCards = [
  { title: 'Southern California + Hawaii', copy: 'Regional overview and current manufacturer coverage.', cta: 'Explore region', href: internalHref('/digital-resources#region') },
  { title: 'Quickship 2026', copy: 'Fast-turn options from select manufacturers.', cta: 'Explore quickship', href: internalHref('/digital-resources#quickship') },
  { title: 'Table Planning', copy: 'Planning tools and resources for collaborative spaces.', cta: 'Explore planning', href: internalHref('/digital-resources#table-planning') },
];

const resourceGroups = [
  {
    id: 'region',
    number: '01',
    title: 'Southern California + Hawaii',
    copy: 'Review the current manufacturer line cards for the markets EPIC trends serves.',
    documents: [
      { title: 'Southern California Line Card 2026', label: 'Regional manufacturer coverage', href: 'https://www.epictrends.net/_files/ugd/a869c5_6568ad18604e4960ba7688dadd2d580b.pdf' },
      { title: 'Hawaii Line Card 2026', label: 'Regional manufacturer coverage', href: 'https://www.epictrends.net/_files/ugd/a869c5_a02caf739d8a4df3ac2f0efad66bf8a8.pdf' },
    ],
  },
  {
    id: 'quickship',
    number: '02',
    title: 'Quickship 2026',
    copy: 'Browse fast-turn furniture programs and supporting textile and material references.',
    documents: [
      { title: 'Allermuir Quickship', label: 'Furniture program', href: 'https://www.epictrends.net/_files/ugd/a869c5_3d74a29fb0524e0c9f8ba9a9f38c3541.pdf' },
      { title: 'Allermuir Quickship Fabrics', label: 'Textile reference', href: 'https://www.epictrends.net/_files/ugd/a869c5_6a2bc93702574d5c8d2e7ff6f6812225.pdf' },
      { title: 'Senator Quickship', label: 'Furniture program', href: 'https://www.epictrends.net/_files/ugd/a869c5_637c63a4e7774d37a4e39a476fb1bd2c.pdf' },
      { title: 'Senator Quickship Fabrics', label: 'Textile reference', href: 'https://www.epictrends.net/_files/ugd/a869c5_2ea5e3e7fee74eb794d2434d311a6c78.pdf' },
      { title: 'Enwork Quick Ship', label: 'Furniture program', href: 'https://www.epictrends.net/_files/ugd/a869c5_141d2497a2dc426fb1795979ff7e4dfd.pdf' },
      { title: 'Enwork Materials Catalog', label: 'Materials reference', href: 'https://www.epictrends.net/_files/ugd/a869c5_0032f6b6de404b51872d91bd51d6bda9.pdf' },
    ],
  },
  {
    id: 'table-planning',
    number: '03',
    title: 'Table Planning',
    copy: 'Estimate table sizes, seating capacity, and room requirements for collaborative spaces.',
    documents: [
      { title: 'Table Size + Seating Capacity Guide', label: 'Planning reference', href: 'https://www.epictrends.net/_files/ugd/a869c5_e962b5a733804ac2b5d8a75a10df4b4d.pdf' },
    ],
  },
];

function Logo() {
  return <a className="logo" href={internalHref('/')} aria-label="EPIC trends home"><img src={localAsset('epic-logo-transparent.png')} alt="EPIC trends" /></a>;
}

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="top-line" />
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container nav-row">
          <Logo />
          <div className="location-note">SOUTHERN CALIFORNIA <span>+</span> HAWAII</div>
          <button className="menu-button" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X /> : <Menu />}</button>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
            <a href={internalHref('/#brands')} onClick={closeMenu}>Our Brands</a>
            <a href={internalHref('/team')} onClick={closeMenu}>Our Team</a>
            <a href={internalHref('/digital-resources')} onClick={closeMenu}>Digital Resources</a>
            <a className="nav-contact" href={internalHref('/#showroom')} onClick={closeMenu}>Book a showroom tour <CalendarDays size={15} /></a>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container footer-row">
          <Logo />
          <div className="footer-links">
            <a href={internalHref('/#brands')}>Our Brands</a>
            <a href={internalHref('/team')}>Our Team</a>
            <a href={internalHref('/digital-resources')}>Digital Resources</a>
          </div>
          <div className="footer-region">SOUTHERN CALIFORNIA <span>+</span> HAWAII</div>
          <p>© 2026 EPIC trends. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero hero-image-only" aria-label="EPIC trends furniture showroom inspiration">
      <img src={localAsset('epic-hero-clean.jpg')} alt="Warm contemporary furniture interior with lounge chairs and table" />
      <div className="hero-caption" aria-hidden="true"><span /> SPACES FOR WHAT'S NEXT <span /></div>
    </section>
  );
}

function BrandsSection() {
  return (
    <section className="brands-section" id="brands">
      <div className="container">
        <div className="brands-intro">
          <div>
            <p className="section-kicker">Our brands</p>
            <h2>Exceptional brands for <em>inspiring spaces.</em></h2>
          </div>
          <div className="brands-intro-right">
            <p>We represent leading manufacturers of commercial furniture, textiles, and materials—bringing thoughtful design and lasting value to the A&amp;D community across Southern California and Hawaii.</p>
            <a className="text-link" href={`${BASE}/manufacturers`} target="_blank" rel="noreferrer">Explore all brands <ArrowRight size={17} /></a>
          </div>
        </div>
        <div className="brand-grid">
          {brands.map((brand) => <BrandCard key={brand.name} brand={brand} />)}
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  return (
    <section className="resources-section" id="resources">
      <div className="container resource-strip">
        <div className="resource-heading">
          <p className="section-kicker">Digital resources</p>
          <h2>Tools to help you <em>specify, plan and explore.</em></h2>
          <a className="text-link" href={internalHref('/digital-resources')}>Explore digital resources <ArrowRight size={17} /></a>
        </div>
        <div className="resource-grid">
          {resourceCards.map((card, index) => (
            <a className="resource-card" href={card.href} key={card.title}>
              <div className="resource-icon">0{index + 1}</div>
              <div>
                <h3>{card.title}</h3>
                <p>{card.copy}</p>
              </div>
              <span className="resource-link">{card.cta} <ArrowRight size={16} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowroomForm() {
  const [sent, setSent] = useState(false);

  return (
    <section className="showroom-section" id="showroom">
      <div className="showroom-media">
        <img src={localAsset('showroom-allermuir.jpg')} alt="Allermuir Haven lounge seating in a soft, neutral showroom interior" loading="lazy" />
      </div>
      <div className="showroom-panel">
        <div className="showroom-copy">
          <p className="section-kicker">Showroom appointments</p>
          <h2>Experience the <em>possibilities.</em></h2>
          <p>Schedule an in-person or virtual showroom tour and explore furniture displays, textiles, materials and design resources. Share a few details and we’ll be in touch to confirm your appointment.</p>
        </div>

        <form className="showroom-form" name="showroom-appointment" method="POST" data-netlify="true" data-netlify-honeypot="bot-field"
          onSubmit={async (event) => {
            event.preventDefault();
            const form = event.currentTarget;
            const data = new FormData(form);
            const crmEndpoint = import.meta.env.VITE_CRM_ENDPOINT;
            try {
              if (crmEndpoint) {
                await fetch(crmEndpoint, { method: 'POST', body: data });
              } else if (!window.location.hostname.includes('localhost') && !window.location.hostname.includes('127.0.0.1')) {
                const encoded = new URLSearchParams();
                for (const [key, value] of data.entries()) encoded.append(key, String(value));
                await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: encoded.toString() });
              }
              setSent(true);
              form.reset();
            } catch (error) {
              console.error('Appointment submission failed', error);
            }
          }}>
          <input type="hidden" name="form-name" value="showroom-appointment" />
          <input type="hidden" name="lead-source" value="EPIC Trends website - showroom appointment" />
          <p className="hidden-field"><label>Don’t fill this out <input name="bot-field" tabIndex="-1" autoComplete="off" /></label></p>

          {sent && <div className="form-success" role="status"><CheckCircle2 size={22} /><div><strong>Appointment request received.</strong><span>We’ll follow up to confirm your preferred date, time and tour format.</span></div></div>}

          <div className="tour-choice" role="group" aria-label="Tour type">
            <label className="tour-option"><input type="radio" name="tour-type" value="in-person" defaultChecked /><span><strong>In-person showroom tour</strong><small>Visit the showroom</small></span></label>
            <label className="tour-option"><input type="radio" name="tour-type" value="virtual" /><span><strong>Virtual showroom tour</strong><small>Meet with us online</small></span></label>
          </div>

          <div className="form-grid two-col">
            <label>First name<input name="first-name" required autoComplete="given-name" /></label>
            <label>Last name<input name="last-name" required autoComplete="family-name" /></label>
            <label>Company<input name="company" required autoComplete="organization" /></label>
            <label>Title<input name="title" autoComplete="organization-title" /></label>
            <label>Email<input type="email" name="email" required autoComplete="email" /></label>
            <label>Phone<input type="tel" name="phone" required autoComplete="tel" /></label>
            <label>Preferred date<input type="date" name="preferred-date" min={new Date().toISOString().split('T')[0]} required /></label>
            <label>Preferred time<select name="preferred-time" required defaultValue="10:00 AM - 11:00 AM"><option>9:00 AM - 10:00 AM</option><option>10:00 AM - 11:00 AM</option><option>11:00 AM - 12:00 PM</option><option>1:00 PM - 2:00 PM</option><option>2:00 PM - 3:00 PM</option><option>3:00 PM - 4:00 PM</option></select></label>
          </div>

          <label>Project or product interests<textarea name="project-interest" rows="3" placeholder="Tell us about your project, manufacturers, products, finishes, or questions." /></label>
          <label className="checkbox-row"><input type="checkbox" name="contact-consent" required /><span>I agree that EPIC trends may use my information to contact me about this appointment and related project inquiries.</span></label>
          <button className="button button-rose full" type="submit">Book a showroom tour <CalendarDays size={17} /></button>
          <p className="form-note">Appointments are requested, not automatically confirmed. EPIC trends will follow up to finalize availability and tour details.</p>
        </form>
      </div>
    </section>
  );
}

function HomePage() {
  return <Layout><Hero /><BrandsSection /><ResourcesSection /><ShowroomForm /></Layout>;
}

function TeamPage() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="container narrow">
          <p className="section-kicker">Our team</p>
          <h1>Local market expertise, built around <em>relationships.</em></h1>
          <div className="rose-rule" />
          <p>Connect with the EPIC trends team for product guidance, specification support, showroom tours and manufacturer introductions across Southern California and Hawaii.</p>
        </div>
      </section>
      <section className="team-section">
        <div className="container"><div className="team-grid">{team.map(member => <TeamCard key={member.name} member={member} />)}</div></div>
      </section>
      <section className="team-cta"><div className="container team-cta-inner"><div><p className="section-kicker">Need a contact?</p><h2>Start with a showroom appointment.</h2></div><a className="button button-rose" href={internalHref('/#showroom')}>Book a showroom tour <CalendarDays size={17} /></a></div></section>
    </Layout>
  );
}

function DigitalResourcesPage() {
  return (
    <Layout>
      <section className="page-hero resources-page-hero">
        <div className="container narrow">
          <p className="section-kicker">Digital resources 2026</p>
          <h1>Tools for better <em>planning and specification.</em></h1>
          <div className="rose-rule" />
          <p>Access EPIC trends line cards, current Quickship programs, material references and table-planning tools in one clear resource library.</p>
        </div>
      </section>
      <section className="resource-library">
        <div className="container">
          {resourceGroups.map(group => (
            <section className="resource-library-group" id={group.id} key={group.id}>
              <div className="resource-library-intro">
                <span>{group.number}</span>
                <div><h2>{group.title}</h2><p>{group.copy}</p></div>
              </div>
              <div className="resource-document-grid">
                {group.documents.map(document => (
                  <a className="resource-document" href={document.href} target="_blank" rel="noreferrer" key={document.title}>
                    <span className="resource-document-type">PDF</span>
                    <div><p>{document.label}</p><h3>{document.title}</h3></div>
                    <ArrowUpRight size={19} />
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
      <section className="team-cta"><div className="container team-cta-inner"><div><p className="section-kicker">Need specification support?</p><h2>Connect with the EPIC trends team.</h2></div><a className="button button-rose" href={internalHref('/team')}>Meet our team <ArrowRight size={17} /></a></div></section>
    </Layout>
  );
}

function BrandCard({ brand }) {
  return (
    <a className="brand-card" href={brand.url} target="_blank" rel="noreferrer" aria-label={`Visit ${brand.name} manufacturer website`}>
      <div className="brand-card-media"><img src={brand.image} alt={`${brand.name} furniture or material example`} loading="lazy" /></div>
      <div className="brand-card-body">
        <div className="brand-card-title"><h3>{brand.name}</h3><ArrowUpRight size={17} /></div>
        <p>{brand.product}</p>
        <span className="brand-card-visit">Visit manufacturer</span>
      </div>
    </a>
  );
}

function TeamCard({ member }) {
  return <article className="team-card"><div className="team-photo">{member.image ? <img src={member.image} alt="" /> : <span>{initials(member.name)}</span>}</div><div className="team-body"><p className="team-role">{member.role}</p><h3>{member.name}</h3><p className="team-territory">{member.territory}</p><div className="team-contact-row">{member.phone && <a href={`tel:${member.phone.replace(/\D/g, '')}`}>{member.phone}</a>}<a href={`mailto:${member.email}`}>{member.email}</a></div></div></article>;
}

function initials(name) { return name.split(' ').slice(0, 2).map(part => part[0]).join('').toUpperCase(); }
function App() {
  const page = new URLSearchParams(window.location.search).get('page');
  if (window.location.pathname.startsWith('/team') || page === 'team') return <TeamPage />;
  if (window.location.pathname.startsWith('/digital-resources') || page === 'digital-resources') return <DigitalResourcesPage />;
  return <HomePage />;
}

createRoot(document.getElementById('root')).render(<App />);
