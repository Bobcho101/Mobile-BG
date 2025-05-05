import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

interface Route {
    name: string;
    path: string;
}


const routes: Route[] = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Cars for Sale',
        path: '/catalog',
    },
    {
        name: 'About',
        path: '/about',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
    {
        name: 'Login',
        path: '/login',
    },
    {
        name: 'Register',
        path: '/register',
    },
    {
        name: 'Logout',
        path: '/logout',
    },
];

export default function Navigation() {
    const [ isOpen, setIsOpen ] = useState(false);
    const router = useRouter();

    const isCurrentRoute = (currentRoute: string) => {
        const match = routes.find(() => {
            return router.pathname === currentRoute;
        });
        return match?.name;
    };

    return (
        <>
        <header className="bg-blue-600 text-white fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-xl font-bold">Mobile BG</div>

            <nav className="hidden md:flex space-x-6">
                {routes.map((route, index) => (
                <Link href={route.path} key={index} className={`hover:text-blue-200 cursor-pointer ${isCurrentRoute(route.path) ? "underline underline-offset-4" : ""}`}>
                    {route.name}
                </Link>
                ))}
            </nav>

            <button
                className="md:hidden text-2xl"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                {isOpen ? "×" : "☰"}
            </button>
            </div>
        </header>

        <div
            className={`fixed top-0 right-0 h-full w-64 bg-blue-700 text-white p-6 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out z-40 md:hidden`}
        >
            <div className="flex justify-between items-center mb-6">
            <div className="text-lg font-bold">Menu</div>
                <button onClick={() => setIsOpen(false)} className="text-2xl">
                    ×
                </button>
            </div>
            <nav className="space-y-4">
            {routes.map((route, index) => (
                <Link
                key={index}
                href={route.path}
                className="block hover:text-blue-200"
                onClick={() => setIsOpen(false)}
                >
                {route.name}
                </Link>
            ))}
            </nav>
        </div>

        <div className="h-[72px]" />
        </>
    );
}