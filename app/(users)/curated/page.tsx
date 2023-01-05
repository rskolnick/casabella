import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
import CuratedList from '../../../components/CuratedList';

const query = groq`
    *[_type== 'curated'] {
            ...,
        } | order(_createdAt asc)
`;

async function CuratedPage() {
    const products = await client.fetch(query);
    return (
        <div>
            <CuratedList products={products} />
        </div>
    );
}

export default CuratedPage;
