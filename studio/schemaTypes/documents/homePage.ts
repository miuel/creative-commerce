import { defineType, defineField } from "sanity"

export const homePageType = defineType({
    name: 'home',
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
            title: 'Main Hero',
            type: 'hero',
        }),
        defineField({
            name: 'editorialHero',
            title: 'Editorial Hero',
            type: 'hero',
        }),
    ],
})