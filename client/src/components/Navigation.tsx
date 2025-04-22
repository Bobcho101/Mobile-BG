import Link from "next/link";

export default function Navigation() {
    return (
        <header className="bg-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                <div className="text-xl font-bold">Mobile BG</div>
                <nav className="space-x-4">
                    <Link href="/" className="hover:text-blue-200">Home</Link>
                    <Link href="" className="hover:text-blue-200">Cars for Sale</Link>
                    <Link href="/about" className="hover:text-blue-200">About</Link>
                    <Link href="#contact" className="hover:text-blue-200">Contact</Link>
                </nav>
                </div>
            </div>
        </header>
    );
}