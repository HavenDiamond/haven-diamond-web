import Link from "next/link";

export default function PropertyCard({ p }) {
  const meta = [`${p.beds} bed`, p.sleeps && `Sleeps ${p.sleeps}`].filter(Boolean).join(" · ");
  return (
    <Link href={`/stays/${p.slug}`} className="card">
      <div className="photo">
        {p.photos[0] ? <img src={p.photos[0]} alt={p.name} loading="lazy" /> : <span className="eyebrow">Photos coming soon</span>}
      </div>
      <div className="card-b">
        <p className="eyebrow">{p.area}</p>
        <h3>{p.name}</h3>
        <p className="meta">{meta}</p>
        <div className="card-f">
          <span className="rate">{p.rate ? `₦${p.rate.toLocaleString()} / night` : "Rates on request"}</span>
          <span className="view">View →</span>
        </div>
      </div>
    </Link>
  );
}
