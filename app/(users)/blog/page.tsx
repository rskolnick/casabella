import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
import BlogList from '../../../components/BlogList';

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
            <BlogList posts={posts} />
        </div>
    );
}

export default BlogPage;
