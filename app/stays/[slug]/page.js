import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import EnquiryForm from "@/components/EnquiryForm";
import WaIcon from "@/components/WaIcon";
import { properties } from "@/lib/data";
import { wa } from "@/lib/whatsapp";

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
    ["Bedrooms", p.beds], ["Bathrooms", p.baths], ["Guests", `Up to ${p.sleeps}`],
    ["Minimum stay", p.minStay], ["Space", p.floor],
    ["Rate", p.rate ? `₦${p.rate.toLocaleString()} / night` : "On request"],
  ];
  const quick = wa(`Hi Haven Diamond, I'm interested in ${p.name}. Is it available?`);
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
          <div className="stay-grid">
            <div>
              <p className="eyebrow">{p.area}</p>
              <h1>{p.name}</h1>
              <p className="lead">{p.description || p.blurb}</p>
              <dl className="facts">
                {facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
              </dl>
              <h2 className="sub">Amenities</h2>
              <ul className="amen">{p.amenities.map((a) => <li key={a}>{a}</li>)}</ul>
              <h2 className="sub">Add to your stay</h2>
              <p className="muted">Airport pickup, a stocked fridge, a private chef or a driver. Just mention it in your enquiry.</p>
            </div>
            <aside className="book">
              <h2>Reserve your dates</h2>
              <p className="muted small" style={{ margin: "6px 0 18px" }}>We'll confirm availability and rates personally.</p>
              <EnquiryForm property={p.name} />
            </aside>
          </div>
        </div>
      </main>
      <a className="fab" href={quick} target="_blank" rel="noopener"><WaIcon /> Enquire about this apartment</a>
    </>
  );
}
