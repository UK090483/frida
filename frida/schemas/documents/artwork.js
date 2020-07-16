export default {
    name: 'artwork',
    type: 'document',
    title: 'Artwork',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            validation: Rule => Rule.required()
        },

        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'Some frontends will require a slug to be set to be able to show the person',
            options: {
                source: 'name',
                maxLength: 96
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            type: 'image',
            title: 'Bild',
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'beschreibung',
            type: 'text',
            title: 'Beschreibung',
            validation: Rule => Rule.required()
        },
        {
            name: 'webLink',
            type: 'url',
            title: 'Web Link',
            validation: Rule => Rule.required()
        },
        {
            title: 'Höhe',
            name: 'height',
            type: 'number',
            validation: Rule => Rule.required()
        },
        {
            title: 'Weite',
            name: 'width',
            type: 'number',
            validation: Rule => Rule.required()
        },
        {
            title: 'Preis',
            name: 'price',
            type: 'number',
            validation: Rule => Rule.required()
        },
        {
            name: 'artist',
            type: 'array',
            title: 'Artist',
            of: [
                {
                    type: 'reference',
                    to: {
                        type: 'artist'
                    }
                }
            ],
            validation: Rule => Rule.required()
        },
        {
            name: 'medium',
            type: 'array',
            title: 'Medium',
            of: [
                {
                    type: 'reference',
                    to: {
                        type: 'medium'
                    }
                }
            ],
            validation: Rule => Rule.required()

        },
        {
            name: 'stil',
            type: 'array',
            title: 'Stil',
            of: [
                {
                    type: 'reference',
                    to: {
                        type: 'stil'
                    }
                }
            ],
            validation: Rule => Rule.required()
        },
    ],
    preview: {
        select: {
            media: 'image',
            title: 'name',
            publishedAt: 'publishedAt',
            slug: 'slug',

        },
    }
}
