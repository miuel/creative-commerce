import { defineField, defineType } from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),

    defineField({
      name: 'button',
      title: 'Button',
      type: 'button'
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),

    defineField({
      name: 'showHero',
      title: 'Show hero',
      type: 'boolean',
    }),
  ],
})
