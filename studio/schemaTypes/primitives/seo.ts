import { defineField, defineType } from 'sanity'

export const seoType = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',

  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta title',
      type: 'string',
    }),

    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
    }),

    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'ogImage',
      title: 'Open Graph image',
      type: 'image',
    }),

    defineField({
      name: 'noIndex',
      title: 'No index',
      type: 'boolean',
    }),
  ],
})
