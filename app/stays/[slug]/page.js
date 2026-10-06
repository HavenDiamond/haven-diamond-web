import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import EnquiryForm from "@/components/EnquiryForm";
import WaIcon from "@/components/WaIcon";
import { properties } from "@/lib/data";
import { wa, INSTAGRAM } from "@/lib/whatsapp";

const naira = (n) => `₦${n.toLocaleString()}`;
export const generateStaticParams = () => properties.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = properties.find((x) => x.slug === slug);
  return { title: p ? `${p.name} — Haven Diamond` : "Haven Diamond" };
}

export default async function Stay({ params }) {
  const { slug } = await params;
  const p = properties.find((x) => x.slug === slug);
  if (!p) notFound();
  const facts = [
    ["Bedrooms", p.beds], ["Bathrooms", p.baths], ["Guests", p.sleeps && `Up to ${p.sleeps}`],
    ["Minimum stay", p.minStay], ["Rate", p.rate && `${naira(p.rate)} / night`],
    ["Caution fee", p.caution && `${naira(p.caution)} refundable`],
  ].filter(([, v]) => v);
  const quick = wa(`Hi Haven Diamond, I'm interested in ${p.name}. Is it available?`);
  const photos = wa(`Hi Haven Diamond, could you send more photos of ${p.name}?`);
  return (
    <>
      <Header />
      <main className="stay">
        <div className="wrap">
          <Link href="/#stays" className="back">← All stays</Link>
          <div className="gallery">
            {p.photos.length
              ? p.photos.slice(0, 5).map((src, i) => <img key={src} src={src} alt={`${p.name} ${i + 1}`} className={i === 0 ? "g-main" : ""} />)
              : <div className="g-main ph"><span className="eyebrow">Photos coming soon</span></div>}
          </div>
          <p className="stay-note" style={{ marginTop: -24, marginBottom: 36 }}>
            More photos available on request. <a className="tlink" href={photos} target="_blank" rel="noopener">Ask us for them</a>.
          </p>
          <div className="stay-grid">
            <div>
              <p className="eyebrow">{p.area}</p>
              <h1>{p.name}</h1>
              {p.address && <p className="muted" style={{ marginBottom: 12 }}>{p.address}</p>}
              <p className="lead">{p.description}</p>
              <dl className="facts">
                {facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
              </dl>
              <h2 className="sub">Amenities</h2>
              <ul className="amen">{p.amenities.map((a) => <li key={a}>{a}</li>)}</ul>
              {p.rules && (<><h2 className="sub">House rules</h2><p className="muted">{p.rules}</p></>)}
              <div className="notice">
                <p><b>Please confirm availability with us first</b>, before making any payment.</p>
                <p>Looking for more options? <a className="tlink" href={INSTAGRAM} target="_blank" rel="noopener">See more apartments on Instagram →</a></p>
              </div>
            </div>
            <aside className="book">
              <h2>Check availability</h2>
              <p className="muted small" style={{ margin: "6px 0 18px" }}>Send your dates and we'll confirm availability personally.</p>
              <EnquiryForm property={p.name} />
            </aside>
          </div>
        </div>
      </main>
      <a className="fab" href={quick} target="_blank" rel="noopener"><WaIcon /> Check availability</a>
    </>
  );
}
