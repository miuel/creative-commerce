import { defineField, defineType } from 'sanity'

export const imageSection = defineType({
  name: 'imageSection',
  title: 'Image section',
  type: 'object',

  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
  ],
})