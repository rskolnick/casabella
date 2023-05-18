import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
// import dynamic from 'next/dynamic';
// const BlogList = dynamic(() => import('../../../components/BlogList'));
import { Suspense } from 'react';
import BlogList from '../../../components/BlogList';

const query = groq`
    *[_type== 'post'] {
        ...,
        author->,
        categories[]->
    } | order(_createdAt desc)
`;

export const revalidate = 60;

async function BlogPage() {
    const posts = await client.fetch(query);

    return (
        <div className="pb-16">
            <Suspense
                fallback={
                    <p className="flex items-center justify-center text-white">
                        Loading...
                    </p>
                }
            >
                <BlogList posts={posts} />
            </Suspense>

            {/* <div className="flex justify-center pb-16">
                <button className="bg-white flex items-center justify-center rounded-full w-auto px-4 py-2 text-l font-semibold text-[#396fb5]">
                    Load More
                </button>
            </div> */}
        </div>
    );
}

export default BlogPage;
