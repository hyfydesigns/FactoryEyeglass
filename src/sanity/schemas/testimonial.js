export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'name', title: 'Customer Name', type: 'string', validation: R => R.required() },
    { name: 'location', title: 'Location (e.g. Houston, TX)', type: 'string' },
    { name: 'rating', title: 'Rating (1–5)', type: 'number', validation: R => R.min(1).max(5) },
    { name: 'text', title: 'Review Text', type: 'text', rows: 4, validation: R => R.required() },
    { name: 'featured', title: 'Featured', type: 'boolean', initialValue: false },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'name', subtitle: 'text' },
  },
};
