import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
import CustomList from '../../../components/CustomList';
import { Suspense } from 'react';

const query = groq`
    *[_type== 'custom'] {
            ...,
        } | order(_createdAt asc)
`;

export const revalidate = 60;

async function CustomPage() {
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
                <CustomList products={products} />
            </Suspense>
        </div>
    );
}

export default CustomPage;
