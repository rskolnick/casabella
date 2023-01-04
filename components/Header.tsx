import Image from 'next/image';
import Link from 'next/link';

function Header() {
    return (
        <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5 bg-gray-900 sticky top-0 z-50">
            <div className="flex items-center space-x-2">
                <Link href="/">
                    <Image
                        className="cursor-pointer"
                        src="/Logo_Rect.png"
                        height={300}
                        width={300}
                        alt="Logo"
                    />
                </Link>
            </div>
            <div className="text-white text-xs sm:text-md md:text-xl flex items-center justify-between space-x-2 sm:space-x-10 md:space-x-20">
                <Link href="/curated" className="hover:text-[#396fb5]">
                    Curated
                </Link>
                <Link href="/custom" className="hover:text-[#396fb5]">
                    Custom
                </Link>
                <Link href="/blog" className="hover:text-[#396fb5]">
                    Inspiration
                </Link>
            </div>
            <div>
                <Link
                    className="hidden px-5 py-3 text-sm md:text-base text-[#396fb5] sm:flex items-center rounded-full text-center bg-white hover:bg-gray-200"
                    href="/locator"
                >
                    Find a Local Dealer
                </Link>
            </div>
        </header>
    );
}

export default Header;
