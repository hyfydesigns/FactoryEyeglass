export default {
  name: 'heroSlide',
  title: 'Hero Slide',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
      validation: R => R.required(),
    },
    {
      name: 'alt',
      title: 'Image Description',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: R => R.required().min(1),
    },
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'alt', media: 'image', order: 'order' },
    prepare({ title, media, order }) {
      return { title: `Slide ${order}: ${title || 'Untitled'}`, media };
    },
  },
};
