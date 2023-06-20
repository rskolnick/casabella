import Link from 'next/link';

function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-gray-200 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023{' '}
                <Link href="#" className="hover:underline">
                    SDR Manufacturing, Inc
                </Link>
                . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    Call us at <a href="tel:+9735207114">973-520-7114</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
