export default {
    name: 'artist',
    type: 'document',
    title: 'Artist',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            validation: Rule => Rule.required()
        },
        {
            name: 'anzeigeName',
            type: 'string',
            title: 'AnzeigeName',
            validation: Rule => Rule.required().max(20)
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email',
            validation: Rule => Rule.required()
        },
        {
            name: 'webLink',
            type: 'string',
            title: 'Web Link',
            validation: Rule => Rule.required()
        },
        {
            name: 'beschreibung',
            type: 'text',
            title: 'Beschreibung',
            validation: Rule => Rule.required()
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image'
        }
    }
}
