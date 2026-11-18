import { defineType, defineField } from 'sanity'

export const buttonType = defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: ['primary', 'secondary'],
      },
      initialValue: 'primary',
    }),
    defineField({
      name: 'showArrow',
      title: 'Show arrow',
      type: 'boolean',
    }),
  ],
})
