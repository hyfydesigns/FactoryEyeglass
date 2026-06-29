import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/index';

export default defineConfig({
  name: 'factory-eyeglass',
  title: 'Factory Eyeglass Outlet',
  projectId: '9x9xb4j2',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('heroSlide').title('Hero Slides'),
            S.documentTypeListItem('service').title('Services'),
            S.documentTypeListItem('frame').title('Frame Brands'),
            S.documentTypeListItem('testimonial').title('Testimonials'),
            S.divider(),
            S.documentTypeListItem('businessInfo').title('Business Info'),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
