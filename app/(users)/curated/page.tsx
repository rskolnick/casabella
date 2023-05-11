import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
import CuratedList from '../../../components/CuratedList';
import { Suspense } from 'react';

const query = groq`
    *[_type== 'curated'] {
            ...,
        } | order(_createdAt asc)
`;

export const revalidate = 60;

async function CuratedPage() {
    const products = await client.fetch(query);
    return (
        <div>
            <Suspense
                fallback={
                    <p className="flex items-center justify-center text-white">
                        Loading...
                    </p>
                }
            >
                <CuratedList products={products} />
            </Suspense>
        </div>
    );
}

export default CuratedPage;
