import { groq } from 'next-sanity';
import { client } from '../../../../lib/sanity.client';
import { Custom } from '../../../../typings';
import Image from 'next/image';
import urlFor from '../../../../lib/urlFor';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '../../../../components/RichTextComponents';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

type Props = {
    params: {
        slug: string;
    };
};

async function CustomProduct({ params: { slug } }: Props) {
    const query = groq`
        *[_type== 'custom' && slug.current == $slug][0] 
    {
        ...,
    }
    `;

    const product: Custom = await client.fetch(query, { slug });

    return (
        <article className="px-10 pb-28 max-w-7xl mx-auto">
            <div>
                <Link href="/custom" className="text-white flex items-center">
                    <ArrowLeftIcon className="h-10 w-10 p-2" />
                    Back to Custom
                </Link>
            </div>
            <section className="space-y-2 text-white">
                <div className="relative h-80 md:h-96 flex flex-col md:flex-row justify-between">
                    <div className="absolute top-0 w-full h-full p-10">
                        <Image
                            className="object-cover object-center mx-auto"
                            src={urlFor(product.main_image).url()}
                            alt={product.name}
                            fill
                        />
                    </div>
                </div>
                <section className="p-5 w-full">
                    <div className="flex flex-col md:flex-row justify-between gap-y-5">
                        <div>
                            <h1 className="text-4xl font-extrabold">
                                {product.name}
                            </h1>
                        </div>
                    </div>
                </section>
            </section>
            <section className="text-white">
                <PortableText
                    value={product.description}
                    components={RichTextComponents}
                />
            </section>
        </article>
    );
}

export default CustomProduct;
