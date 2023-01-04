import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';

const query = groq`
    *[_type== 'post'] {
        ...,
        author->,
        categories[]->
    } | order(_createdAt desc)
`;

async function BlogPage() {
    const posts = await client.fetch(query);

    return (
        <div>
            <h1 className="text-4xl text-white">Blog Page</h1>
        </div>
    );
}

export default BlogPage;
