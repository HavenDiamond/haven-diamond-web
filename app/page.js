import WaIcon from "@/components/WaIcon";
import Header from "@/components/Header";
import PropertyCard from "@/components/PropertyCard";
import EnquiryForm from "@/components/EnquiryForm";
import { properties, services, corporate, steps, why, faqs } from "@/lib/data";
import { wa, GENERAL, EMAIL, PHONE, INSTAGRAM } from "@/lib/whatsapp";

const Head = ({ e, h, p }) => (
  <div className="head"><p className="eyebrow">{e}</p><h2>{h}</h2>{p && <p className="muted">{p}</p>}</div>
);

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="hero">
          <div className="wrap">
            <p className="eyebrow">Shortlets &amp; Concierge · Lagos</p>
            <h1>Every stay,<br /><em>attended.</em></h1>
            <p className="lede">Curated apartments across Lagos, and a team that arranges everything else, from airport pickup to dinner.</p>
            <div className="ctas">
              <a className="btn wa" href={GENERAL} target="_blank" rel="noopener"><WaIcon /> Enquire on WhatsApp</a>
              <a className="btn ghost" href="#stays">View stays</a>
            </div>
            <ul className="pills">
              <li>Shortlets</li><li>Airport transfers</li><li>Private chef</li><li>Corporate stays</li>
            </ul>
          </div>
        </section>

        <section id="stays"><div className="wrap">
          <Head e="Shortlets" h="Stays, ready for you" p="Book directly. No booking-site fees." />
          <div className="grid3">{properties.map((p) => <PropertyCard key={p.slug} p={p} />)}</div>
          <p className="stay-note">Please confirm availability with us first, before making any payment. More photos are available on request. Looking for more options? <a className="tlink" href={INSTAGRAM} target="_blank" rel="noopener">See more apartments on Instagram</a>.</p>
        </div></section>

        <section id="concierge" className="alt-bg"><div className="wrap">
          <Head e="Concierge" h="Just ask" p="Everything below can be arranged for your stay. Message us to request." />
          <div className="grid4">
            {services.map((s) => (
              <div key={s.title} className="svc plain"><h3>{s.title}</h3><p className="muted">{s.text}</p></div>
            ))}
          </div>
          <a className="btn ghost" style={{ marginTop: 32 }} target="_blank" rel="noopener"
             href={wa("Hi Haven Diamond, I'd like to request a concierge service.\n\nService: \nDate: \nDetails: ")}>Request a service</a>
        </div></section>

        <section id="corporate"><div className="wrap">
          <Head e="Corporate" h="Business, taken care of" p="Accommodation and hospitality for companies, teams and executives." />
          <div className="grid4">
            {corporate.map((c) => <div key={c.title} className="svc plain"><h3>{c.title}</h3><p className="muted">{c.text}</p></div>)}
          </div>
          <a className="btn ghost" style={{ marginTop: 28 }} target="_blank" rel="noopener"
             href={wa("Hi Haven Diamond, I'm enquiring for my company.\n\nCompany: \nNeed: (accommodation / transport / hosting)\nDates: ")}>Corporate enquiry</a>
        </div></section>

        <section className="alt-bg"><div className="wrap">
          <Head e="How it works" h="Three simple steps" />
          <ol className="steps">
            {steps.map((s, i) => <li key={s.t}><span className="num">0{i + 1}</span><h3>{s.t}</h3><p className="muted">{s.d}</p></li>)}
          </ol>
        </div></section>

        <section><div className="wrap">
          <Head e="Why Haven Diamond" h="A different kind of stay" />
          <div className="grid4">{why.map((w) => <div key={w.t} className="svc plain"><h3>{w.t}</h3><p className="muted">{w.d}</p></div>)}</div>
        </div></section>


        <section id="about" className="alt-bg"><div className="wrap narrow">
          <Head e="About" h="Hospitality with a personal touch" />
          <p className="muted big">Haven Diamond is a Lagos shortlet and concierge company. We keep our portfolio small and our service personal, so that whether you're here for a weekend, a work trip or a relocation, someone is looking out for you.</p>
        </div></section>

        <section id="enquire"><div className="wrap two-col">
          <div>
            <Head e="Booking & enquiries" h="Tell us your dates" p="Fill this in and it opens WhatsApp with your details ready to send. Prefer to chat? Message us directly." />
            <a className="btn wa" href={GENERAL} target="_blank" rel="noopener"><WaIcon /> Chat on WhatsApp</a>
            <p className="muted small">+{PHONE.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, "$1 $2 $3 $4")} · <a className="tlink" href={`mailto:${EMAIL}`}>{EMAIL}</a> · <a className="tlink" href={INSTAGRAM} target="_blank" rel="noopener">Instagram</a></p>
          </div>
          <EnquiryForm />
        </div></section>

        <section id="faq" className="alt-bg"><div className="wrap narrow">
          <Head e="Policies & FAQ" h="Good to know" />
          {faqs.map((f) => (
            <details key={f.q} className="faq"><summary>{f.q}<span>+</span></summary><p className="muted">{f.a}</p></details>
          ))}
        </div></section>
      </main>

      <footer><div className="wrap foot">
        <img src="/logo.png" alt="Haven Diamond" className="logo" />
        <p>Shortlets &amp; concierge in Lagos.</p>
        <p><a className="tlink" href={`mailto:${EMAIL}`}>{EMAIL}</a> · <a className="tlink" href={INSTAGRAM} target="_blank" rel="noopener">Instagram</a></p>
        <p className="eyebrow">© {new Date().getFullYear()} Haven Diamond</p>
      </div></footer>

      <a className="fab" href={GENERAL} target="_blank" rel="noopener">Chat on WhatsApp</a>
    </>
  );
}
