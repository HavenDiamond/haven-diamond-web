export const PHONE = "2349023606799";
export const EMAIL = "kiishi1234@gmail.com";
export const wa = (text) => `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
export const GENERAL = wa("Hi Haven Diamond, I'd like to make an enquiry.");
