export type Testimonial = {
  quote: string;
  name: string;
  relation: string;
};

// Only genuine, client-provided testimonials belong here — never fabricated ones.
// The testimonials section renders automatically when this array is non-empty.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Alhamdulillah, we are very happy with our child’s progress. Hafiz Hammad is patient, professional, and an excellent Quran teacher. Highly recommended.",
    name: "Ehsan's Dad",
    relation: "Parent, UK",
  },
];