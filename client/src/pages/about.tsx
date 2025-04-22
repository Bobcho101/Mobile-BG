import Link from "next/link";
import React from "react";

 const About: React.FC = () => {
    return (
        <>
        <div className="max-w-5xl mx-auto py-16 px-6 space-y-12">
            <section className="text-center">
                <h1 className="text-5xl font-bold mb-4 text-blue-400">About <strong className="text-blue-700">Mobile BG</strong></h1>
                <p className="text-lg text-gray-600">
                Mobile BG is your destination for discovering and buying cars you truly love.
                </p>
            </section>

            <section>
                <h2 className="text-3xl font-semibold mb-4">Our Journey</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                Founded in 2020 by passionate car enthusiasts and tech innovators, Mobile was built to bring trust, transparency, and excitement back into the car buying experience.
                </p>
            </section>

            <section>
                <h2 className="text-3xl font-semibold mb-4">What Drives Us</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                We believe finding your dream car should feel as smooth as driving it. That’s why we focus on curated listings, stunning photos, honest descriptions, and tools that help you decide with confidence.
                </p>
            </section>

            <section className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Have a question or want to collaborate?</h3>
                <Link
                href="/contact"
                className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
                >
                Contact Us
                </Link>
            </section>
        </div>
        </>
    );
}

export default About;