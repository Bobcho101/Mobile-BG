import Link from "next/link";
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
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                <div className="text-xl font-bold">Mobile BG</div>

                <nav className="hidden md:flex space-x-6">
                    {routes.map((route, index) => (
                    <Link key={index} href={route.path} className="hover:text-blue-200">
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

                {isOpen && (
                <nav className="md:hidden mt-4 space-y-2">
                    {routes.map((route, index) => (
                    <Link
                        key={index}
                        href={route.path}
                        className="block text-white hover:text-blue-200"
                        onClick={() => setIsOpen(false)}
                    >
                        {route.name}
                    </Link>
                    ))}
                </nav>
                )}
            </div>
        </header>
    );
}