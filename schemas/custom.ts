export default {
    name: 'custom',
    title: 'Custom',
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
            name: 'image_black',
            title: 'Image black',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'image_grey',
            title: 'Image grey',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'image_blue',
            title: 'Image blue',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'image_putty',
            title: 'Image putty',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'image_white',
            title: 'Image white',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
};
