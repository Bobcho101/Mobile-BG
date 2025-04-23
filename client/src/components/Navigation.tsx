import Link from "next/link";

const routes = [
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

    return (
        <header className="bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                <div className="text-xl font-bold">Mobile BG</div>
                <nav className="space-x-4">
                    {routes.map((route, index) => (
                        <Link key={index} href={route.path} className="hover:text-blue-200">{route.name}</Link>
                    ))}
                </nav>
                </div>
            </div>
        </header>
    );
}