// ALL SITE CONTENT LIVES HERE. Edit this file to change the site.
// Items marked TODO are placeholders. Replace with your real details.

export const properties = [
  {
    slug: "lekki-diamond", name: "The Lekki Diamond", area: "Lekki Phase 1",
    beds: 2, baths: 2, sleeps: 4, floor: "4th floor, lift",
    rate: null,            // TODO e.g. 150000 (₦ per night). null shows "Enquire for rate"
    minStay: "2 nights",   // TODO confirm
    status: "Available",
    amenities: ["Backup power", "Fibre internet", "Lift", "Walk to cafés"],
    blurb: "A quiet, service-apartment-style stay off Admiralty Way.",
    photos: [],            // TODO e.g. ["/properties/lekki-1.jpg"] (files go in /public/properties)
  },
  {
    slug: "vi-loft", name: "The Victoria Island Loft", area: "Adeola Odeku, VI",
    beds: 1, baths: 1, sleeps: 2, floor: "Ground, private entry",
    rate: null, minStay: "2 nights", status: "Available",
    amenities: ["Gated compound", "24-hr security", "Private entry", "Work-friendly"],
    blurb: "Design-forward one-bedroom for solo travel or a quiet work trip.",
    photos: [],
  },
  {
    slug: "onikan-residence", name: "The Onikan Residence", area: "Onikan, VI",
    beds: 3, baths: 3, sleeps: 6, floor: "Duplex",
    rate: null, minStay: "2 nights", status: "Booking fast",
    amenities: ["Full duplex", "Family friendly", "Near the museum", "Group stays"],
    blurb: "A full duplex for families or small groups. Our most requested address.",
    photos: [],
  },
];

export const services = [
  { title: "Airport transfers", text: "Meet-and-greet pickup, arrival to departure." },
  { title: "Drivers & car rental", text: "Private drivers and vehicles by the day." },
  { title: "Restaurant reservations", text: "Lagos's best tables, arranged for you." },
  { title: "Grocery stocking", text: "Fridge filled before you arrive." },
  { title: "Personal shopping", text: "Items sourced and delivered." },
  { title: "Errands", text: "Pickups, deliveries and small tasks handled." },
  { title: "Cleaning", text: "Mid-stay and post-stay, on request." },
  { title: "Spa bookings", text: "In-suite massage or a trusted spa." },
  { title: "Private chef", text: "Breakfast in-suite or a full evening menu." },
  { title: "Birthday & romantic setups", text: "Flowers, decor, cake and surprises." },
  { title: "Security", text: "Personal or property security, arranged discreetly." },
  { title: "Anything else", text: "Ask. If it's legal and doable, we'll try." },
];

export const corporate = [
  { title: "Corporate accommodation", text: "Furnished stays for staff, visiting teams and relocations." },
  { title: "Executive transport", text: "Chauffeured cars and airport pickups for leadership." },
  { title: "Client hosting", text: "Dinners, venues and welcome arrangements." },
  { title: "Business requests", text: "Meeting spaces, event organisation and more." },
];

export const steps = [
  { t: "Tell us what you need", d: "Send dates, guests and location, or the service you want, on WhatsApp or the form." },
  { t: "We confirm and arrange", d: "We check availability, share rates and house rules, and confirm on payment." },
  { t: "Arrive and be looked after", d: "We greet you, and stay one message away for the whole stay." },
];

export const why = [
  { t: "Curated stays", d: "A small, hand-picked portfolio. Every address is one we'd stay in." },
  { t: "Personal assistance", d: "Real people who greet you, not an automated inbox." },
  { t: "Local knowledge", d: "We know what's worth your time in Lagos, and what isn't." },
  { t: "One point of contact", d: "Stay, transport, dinner and more, all through one chat." },
];

// TODO: review these picks and add your own favourites.
export const guide = [
  { cat: "Eat", items: [
    { n: "Terra Kulture", a: "Victoria Island", d: "Nigerian dining alongside art and books." },
    { n: "The Yellow Chilli", a: "Victoria Island", d: "Refined Nigerian classics." },
    { n: "Tonight's table", a: "Anywhere", d: "Tell us your mood and we'll book it." } ] },
  { cat: "Shop", items: [
    { n: "The Palms", a: "Lekki", d: "Big mall for fashion, food and cinema." },
    { n: "Lekki Arts & Crafts Market", a: "Lekki", d: "Art, crafts and gifts. Bargain gently." } ] },
  { cat: "Relax", items: [
    { n: "Landmark Beach", a: "Oniru", d: "Beachside lounging and easy evenings." },
    { n: "In-suite spa", a: "Your apartment", d: "We'll send a therapist to you." } ] },
  { cat: "Explore", items: [
    { n: "Nike Art Gallery", a: "Lekki", d: "Five floors of Nigerian art." },
    { n: "National Museum", a: "Onikan", d: "Nigerian history, minutes from Onikan." },
    { n: "Lekki Conservation Centre", a: "Lekki", d: "Canopy walkway and green calm." } ] },
];

export const faqs = [
  { q: "How do I book?", a: "Send your dates, number of guests and preferred apartment. Availability, pricing and full stay details are confirmed accordingly." },
  { q: "Booking & payment", a: "Bookings are confirmed only after payment. Reservations can't be held without payment and are first-come, first-served." },
  { q: "Pricing", a: "Prices are per night for the agreed number of guests. Extra charges may apply only for significantly more guests, events or parties, and are always communicated in advance." },
  { q: "Cancellations", a: "Terms are specific to each property and shared before payment. Please review them before confirming." },
  { q: "Property rules", a: "Check-in times, house guidelines and event allowances vary by property. Full details are shared before payment." },
  { q: "Guest responsibility", a: "Please treat the apartment with care. Damage, missing items or excessive cleaning after check-out may attract extra charges." },
  { q: "Privacy & security", a: "Your details are confidential and never shared publicly." },
];
