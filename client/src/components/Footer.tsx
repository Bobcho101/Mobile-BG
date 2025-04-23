import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <>
        <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white py-4 shadow-inner z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-center md:text-left text-sm mb-2 md:mb-0">
                &copy; {new Date().getFullYear()} Mobile BG. All rights reserved.
                </p>
                <div className="flex space-x-6 text-sm">
                <Link href="/sponsors" className="hover:text-blue-400">Sponsors</Link>
                <Link href="/about" className="hover:text-blue-400">About</Link>
                <Link href="/contact" className="hover:text-blue-400">Contact</Link>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;