import Link from "next/link";

const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;

export default function PropertyCard({ p }) {
  return (
    <Link href={`/stays/${p.slug}`} className="card">
      <div className="photo">
        {p.photos[0] ? (
          <img src={p.photos[0]} alt={`${p.name}, ${p.area}`} loading="lazy" decoding="async" />
        ) : (
          <span className="soon">Photography coming soon</span>
        )}
        {p.status !== "Available" && <span className="badge dark">{p.status}</span>}
      </div>
      <div className="card-b">
        <p className="eyebrow">{p.area}</p>
        <h3>{p.name}</h3>
        <ul className="meta">
          <li>{plural(p.beds, "bedroom", "bedrooms")}</li>
          <li>{plural(p.baths, "bathroom", "bathrooms")}</li>
          <li>Sleeps {p.sleeps}</li>
        </ul>
        <div className="card-f">
          <span className="rate">
            {p.rate ? (
              <>From <b>₦{p.rate.toLocaleString()}</b> a night</>
            ) : (
              "Rates on request"
            )}
          </span>
          <span className="view">View</span>
        </div>
      </div>
    </Link>
  );
}