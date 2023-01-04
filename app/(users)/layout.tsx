import Header from '../../components/Header';
import '../../styles/globals.css';
import Footer from '../../components/Footer';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body className="bg-gray-900">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
