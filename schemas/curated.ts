export default {
    name: 'curated',
    title: 'Curated',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input: string) =>
                    input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
            },
        },
        {
            title: 'Description',
            name: 'description',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'main_image',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
};
