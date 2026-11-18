import { defineType, defineField } from "sanity"

export const homePageType = defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'seo',
            title: 'Seo',
            type: 'seo'
        }),
        defineField({
            name: 'hero',
            title: 'Hero',
            type: 'hero',
        }),
    ],
})