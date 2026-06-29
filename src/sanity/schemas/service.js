export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'number', title: 'Number (e.g. 01)', type: 'string', validation: R => R.required() },
    { name: 'icon', title: 'Icon Symbol', type: 'string' },
    { name: 'tag', title: 'Tag Label', type: 'string' },
    { name: 'title', title: 'Title', type: 'string', validation: R => R.required() },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    {
      name: 'details',
      title: 'Detail Bullets',
      type: 'array',
      of: [{ type: 'string' }],
    },
    { name: 'order', title: 'Display Order', type: 'number', validation: R => R.required() },
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'number' },
  },
};
