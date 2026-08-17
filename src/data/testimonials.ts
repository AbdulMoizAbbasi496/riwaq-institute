export type Testimonial = {
  quote: string;
  name: string;
  relation: string;
};

// No testimonials have been provided by the client yet.
// Only add genuine, client-provided testimonials here — never fabricated ones.
// The testimonials section renders automatically when this array is non-empty.
export const testimonials: Testimonial[] = [];
