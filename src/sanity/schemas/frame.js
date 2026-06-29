export default {
  name: 'frame',
  title: 'Frame Brand',
  type: 'document',
  fields: [
    { name: 'name', title: 'Brand Name', type: 'string', validation: R => R.required() },
    {
      name: 'image',
      title: 'Frame Image',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'category', title: 'Category', type: 'string', options: { list: ['Eyeglasses', 'Sunglasses', 'Both'] } },
    { name: 'featured', title: 'Featured Brand', type: 'boolean', initialValue: false },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'name', media: 'image' },
  },
};
