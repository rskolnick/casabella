import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
import CustomList from '../../../components/CustomList';

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
            <CustomList products={products} />
        </div>
    );
}

export default CustomPage;
