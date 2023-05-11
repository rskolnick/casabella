import Image from 'next/image';
import Link from 'next/link';
import urlFor from '../lib/urlFor';
import { Libre_Baskerville } from '@next/font/google';

const libreBaskerville = Libre_Baskerville({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
});
export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="relative w-full h-96 m-10 mx-auto">
                    <Image
                        className="w-full object-cover"
                        src={urlFor(value).url()}
                        alt="Blog Post Image"
                        fill
                    />
                </div>
            );
        },
    },
    list: {
        bullet: ({ children }: any) => (
            <ul
                className={`ml-10 py-5 list-none ${libreBaskerville.className}`}
            >
                {children}
            </ul>
        ),
        number: ({ children }: any) => (
            <ol
                className={`mt-lg list-decimal ml-10 ${libreBaskerville.className}`}
            >
                {children}
            </ol>
        ),
    },
    block: {
        h1: ({ children }: any) => (
            <h1
                className={`text-5xl py-10 font-bold ${libreBaskerville.className}`}
            >
                {children}
            </h1>
        ),
        h2: ({ children }: any) => (
            <h2
                className={`text-4xl py-10 font-bold ${libreBaskerville.className}`}
            >
                {children}
            </h2>
        ),
        h3: ({ children }: any) => (
            <h3
                className={`text-3xl py-10 font-bold ${libreBaskerville.className}`}
            >
                {children}
            </h3>
        ),
        h4: ({ children }: any) => (
            <h4
                className={`text-2xl py-10 font-bold ${libreBaskerville.className}`}
            >
                {children}
            </h4>
        ),
        blockquote: ({ children }: any) => (
            <blockquote
                className={`border-l-[#396fb5] border-l-4 pl-5 py-5 my-5 ${libreBaskerville.className}`}
            >
                {children}
            </blockquote>
        ),
    },
    normal: {
        p: ({ children }: any) => (
            <p className={`text-xl py-10 ${libreBaskerville.className}`}>
                {children}
            </p>
        ),
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith('/')
                ? 'noreferrer noopener'
                : undefined;
            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className={`underline decoration-[#396fb5] hover:decoration-white ${libreBaskerville.className}`}
                >
                    {children}
                </Link>
            );
        },
        strong: ({ children }: any) => (
            <strong className="text-xl font-bold">{children}</strong>
        ),
    },
};
