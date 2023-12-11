import Header from '../../components/Header';
import '../../styles/globals.css';
import Footer from '../../components/Footer';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
    title: {
        default: 'Casa Bella Cabinetry',
        template: '%s | Casa Bella Cabinetry',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-gray-900">
                <Header />
                {children}
                <Footer />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
