import Image from 'next/image';
import React from 'react';

export const metadata = {
    title: 'Casa Bella Outdoor Kitchen Cabinetry',
    keywords: 'outdoor kitchen cabinetry, outdoor cabinetry',
    description:
        'Casa Bella Outdoor Cabinetry is a leading manufacturer of high end outdoor kitchen islands. Build your dream outdoor kitchen today.',
};

export default function HomePage() {
    return (
        <main>
            <div className="object-contain h-208 w-screen overflow-hidden relative flex justify-between items-center">
                {/* <h1 className="text-6xl drop-shadow-md text-white absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-3/4 z-10">
                    Premium Outdoor Cabinetry
                </h1> */}
                <Image
                    fill={true}
                    src="/Venetian.jpg"
                    className="md:h-full md:w-full md:object-cover object-contain object-top w-fit"
                    alt="Casa Bella Venetian Island Package"
                    priority={true}
                />
                <div className="md:hidden bg-slate-700 text-slate-200">
                    <h1 className="text-3xl md:hidden  flex items-center justify-center px-6 mt-6">
                        Casa Bella Outdoor Kitchen Cabinetry
                    </h1>
                    <p className="px-6 my-5">
                        Casa Bella Outdoor Kitchen Cabinetry provides premium,
                        American made cabinets for you to build your dream
                        outdoor kitchen.
                    </p>
                </div>
            </div>
            {/* <div className="text-white flex justify-center">
                <h1 className="text-4xl">Some Section goes Here</h1>
            </div> */}
        </main>
    );
}
