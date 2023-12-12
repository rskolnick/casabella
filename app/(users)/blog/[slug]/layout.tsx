import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <main className="bg-slate-800">{children}</main>
        </>
    );
}
