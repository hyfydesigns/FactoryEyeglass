export default {
  name: 'businessInfo',
  title: 'Business Info',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    { name: 'phone', title: 'Phone Number', type: 'string' },
    { name: 'phoneDisplay', title: 'Phone (Display Format)', type: 'string', description: 'e.g. (713) 468-5665' },
    { name: 'email', title: 'Email Address', type: 'string' },
    { name: 'address', title: 'Street Address', type: 'string' },
    { name: 'city', title: 'City, State, Zip', type: 'string' },
    { name: 'turnaround', title: 'Turnaround Time', type: 'string', description: 'e.g. 3–5 Business Days' },
    {
      name: 'hours',
      title: 'Hours of Operation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'days', title: 'Days', type: 'string' },
            { name: 'hours', title: 'Hours', type: 'string' },
          ],
          preview: { select: { title: 'days', subtitle: 'hours' } },
        },
      ],
    },
    {
      name: 'heroHeadline',
      title: 'Hero Headline (line 1)',
      type: 'string',
      description: 'e.g. Live Life',
    },
    {
      name: 'heroSubheadline',
      title: 'Hero Headline (line 2, italic gold)',
      type: 'string',
      description: 'e.g. in the Clear',
    },
    {
      name: 'heroTagline',
      title: 'Hero Tagline',
      type: 'text',
      rows: 2,
    },
    {
      name: 'aboutHeadline',
      title: 'About Section Headline',
      type: 'string',
    },
    {
      name: 'aboutBody1',
      title: 'About Body Paragraph 1',
      type: 'text',
      rows: 3,
    },
    {
      name: 'aboutBody2',
      title: 'About Body Paragraph 2',
      type: 'text',
      rows: 3,
    },
    {
      name: 'aboutQuote',
      title: 'About Quote',
      type: 'text',
      rows: 2,
    },
  ],
  preview: {
    prepare() { return { title: 'Business Info' }; },
  },
};
