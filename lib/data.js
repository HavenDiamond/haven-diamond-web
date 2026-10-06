// ALL SITE CONTENT LIVES HERE. Edit this file to change the site.
// Items marked TODO are placeholders. Replace with your real details.

export const properties = [
  {
    slug: "shine", name: "Shine", area: "Lekki Phase 1",
    description: "Luxury 1-bedroom apartment. A stylish one-bedroom with premium amenities, self check-in and 24/7 power.",
    beds: 1, baths: null, sleeps: null,
    rate: 150000, caution: 50000, minStay: "2 nights",
    rules: "No parties, indoor smoking, decorations or movie shoots.",
    amenities: ["PS5", "Swimming pool", "Gym", "Smart TV", "Fast Wi-Fi", "Fully equipped kitchen", "24/7 power", "Security", "Self check-in"],
        photos: ["/properties/shine-1.jpg", "/properties/shine-2.jpg", "/properties/shine-3.jpg", "/properties/shine-4.jpg", "/properties/shine-5.jpg"],
  },
  {
    slug: "luxury-2-bedroom", name: "Luxury 2-Bedroom Apartment", area: "Lekki Phase 1",
    address: "Bisola Durosinmi Etti · Close to Evercare Hospital",
    description: "Fully furnished two-bedroom with a city view, three balconies and ensuite bedrooms.",
    beds: 2, baths: null, sleeps: null,
    rate: 250000, caution: 100000, minStay: null,
    rules: "No smoking indoors. Balconies only.",
    amenities: ["PS5", "Swimming pool", "Gym", "City view", "24/7 power", "Fast Wi-Fi", "Netflix / DStv", "Ensuite bedrooms", "3 balconies", "Washing machine", "Elevator", "Smart lock", "Security"],
        photos: ["/properties/luxury-1.jpg", "/properties/luxury-2.jpg", "/properties/luxury-3.jpg", "/properties/luxury-4.jpg", "/properties/luxury-5.jpg"],
  },
  {
    slug: "luxury-loft", name: "Luxury Loft Apartment", area: "Ikoyi",
    description: "A stylish loft with the bedroom upstairs, and a living room, kitchenette and bathroom downstairs. Breakfast provisions included.",
    beds: 1, baths: null, sleeps: 2,
    rate: 200000, caution: null, minStay: "2 nights",
    rules: null,
    amenities: ["Fast Wi-Fi", "24/7 power", "Smart TV / DStv", "Air conditioning", "PS5 on request", "Fully equipped kitchen", "Washing machine", "Housekeeping", "Security", "Private garden", "Ample parking", "Breakfast provisions"],
        photos: ["/properties/loft-1.jpg", "/properties/loft-2.jpg", "/properties/loft-3.jpg", "/properties/loft-4.jpg", "/properties/loft-5.jpg"],
  },
];

export const services = [
  { title: "Airport transfers", text: "Meet-and-greet pickup, arrival to departure." },
  { title: "Drivers & car rental", text: "Private drivers and vehicles by the day." },
  { title: "Restaurant reservations", text: "Lagos's best tables, arranged for you." },
  { title: "Grocery stocking", text: "Fridge filled before you arrive." },
  { title: "Personal shopping", text: "Items sourced and delivered." },
  { title: "Cleaning", text: "Mid-stay and post-stay, on request." },
  { title: "Spa bookings", text: "In-suite massage or a trusted spa." },
  { title: "Private chef", text: "Breakfast in-suite or a full evening menu." },
  { title: "Birthday & romantic setups", text: "Flowers, decor, cake and surprises." },
  { title: "Security", text: "Personal or property security, arranged discreetly." },
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

export const faqs = [
  { q: "How do I book?", a: "Send your dates, number of guests and preferred apartment. Availability, pricing and full stay details are confirmed accordingly." },
  { q: "Booking & payment", a: "Bookings are confirmed only after payment. Reservations can't be held without payment and are first-come, first-served." },
  { q: "Pricing", a: "Prices are per night for the agreed number of guests. Extra charges may apply only for significantly more guests, events or parties, and are always communicated in advance." },
  { q: "Cancellations", a: "Terms are specific to each property and shared before payment. Please review them before confirming." },
  { q: "Property rules", a: "Check-in times, house guidelines and event allowances vary by property. Full details are shared before payment." },
  { q: "Guest responsibility", a: "Please treat the apartment with care. Damage, missing items or excessive cleaning after check-out may attract extra charges." },
  { q: "Privacy & security", a: "Your details are confidential and never shared publicly." },
];
