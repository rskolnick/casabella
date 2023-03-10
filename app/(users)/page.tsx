import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
    return (
        <main>
            <div className="object-contain h-208 w-screen overflow-hidden relative">
                {/* <h1 className="text-6xl drop-shadow-md text-white absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-3/4 z-10">
                    Premium Outdoor Cabinetry
                </h1> */}
                <Image
                    fill={true}
                    src="/Venetian.jpg"
                    className="h-full w-full object-cover"
                    alt="Casa Bella Venetian Island Package"
                />
            </div>
            {/* <div className="text-white flex justify-center">
                <h1 className="text-4xl">Some Section goes Here</h1>
            </div> */}
        </main>
    );
}
