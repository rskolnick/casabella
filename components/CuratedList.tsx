import { Curated } from '../typings';
import Image from 'next/image';
import urlFor from '../lib/urlFor';
import ClientSideRoute from '../components/ClientSideRoute';

type Props = {
    products: Curated[];
};

function CuratedList({ products }: Props) {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-40 md:pb-24">
                {products.map((product) => (
                    <ClientSideRoute
                        key={product._id}
                        route={`/curated/${product.slug.current}`}
                    >
                        <div className="cursor-pointer flex flex-col group">
                            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                                <Image
                                    className="object-cover object-left lg:object-center"
                                    src={urlFor(product.main_image).url()}
                                    alt={product.name}
                                    fill
                                />
                                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                                    <div>
                                        <p className="font-bold">
                                            {product.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ClientSideRoute>
                ))}
            </div>
        </div>
    );
}

export default CuratedList;
