import { fetchCars } from "@/api/carsApi";
import Image from "next/image";
import React from "react";

type Car = {
    src: string;
    brand: string;
    model: string;
    type: string;
    transmission: string;
    engine: string;
    price: number;
};


export const getServerSideProps = async () => {
    const data = await fetchCars();

    
    return {
        props: {
            cars: data
        }
    };
};

const Catalog: React.FC<{ cars: Car[] }> = ({ cars }) => {
    

    return (
        <>
        <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
                Car Catalog
            </h1>
            <div className="max-w-7xl mx-auto mb-6 flex justify-end">
                <label className="flex items-center space-x-2 text-sm text-gray-700">
                <span>Sort by:</span>
                <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="brand-asc">Brand A-Z</option>
                    <option value="brand-desc">Brand Z-A</option>
                </select>
                </label>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {cars.map((car, index) => (
                <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                    <div className="relative w-full h-52">
                    <Image
                        src={car.src}
                        alt={`${car.brand} ${car.model}`}
                        fill
                        className="object-cover"
                    />
                    </div>
                    <div className="p-4">
                    <h3 className="text-xl font-semibold mb-1">
                        {car.brand} {car.model}
                    </h3>
                    <p className="text-gray-600">{car.type}</p>
                    <p className="text-gray-500">Engine: {car.engine}</p>
                    <p className="text-gray-500">Transmission: {car.transmission}</p>
                    <div className="flex items-center justify-between mt-4">
                        <span className="text-lg font-bold text-blue-600">
                        ${car.price}
                        </span>
                        <a
                        href="#car-details"
                        className="text-blue-500 hover:underline"
                        >
                        View Details
                        </a>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </>
    )
};

export default Catalog;