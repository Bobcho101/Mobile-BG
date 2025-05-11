import { fetchVehicles } from "@/api/vehicleApi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Vehicle = {
    src: string;
    brand: string;
    model: string;
    type: string;
    transmission: string;
    engine: string;
    price: number;
};


export const getServerSideProps = async ({ params }: { params: { category: string }}) => {
    const { category } = params;
    const data = await fetchVehicles(category);

    return {
        props: {
            vehicles: data
        }
    };
};

const Catalog: React.FC<{ vehicles: Vehicle[] }> = ({ vehicles }) => {
    const router = useRouter();
    const { category } = router.query; 


    return (
        <>
        <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
                Catalog
            </h1>

             <div className="max-w-7xl mx-auto mb-6">
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                {[
                    // { label: "All", img: "/images/all.png", href:"" },
                    { label: "Cars", img: "/images/car.png", href:"cars" },
                    { label: "Jeeps", img: "/images/jeep.png", href:"jeeps" },
                    { label: "Motorcycles", img: "/images/motorcycle.png", href:"motorcycles" },
                    { label: "Tractors", img: "/images/tractor.png", href:"tractors" },
                    { label: "Trucks", img: "/images/truck.png", href:"trucks" },
                    { label: "Buses", img: "/images/bus.png", href:"buses" },
                    { label: "Caravans", img: "/images/caravan.png", href:"caravans" },
                    { label: "Industrial", img: "/images/excavator.png", href:"industrial" },
                ].map((type) => (
                    <Link
                    href={type.href}
                    key={type.label}
                    className="flex flex-col items-center group cursor-pointer" 
                    >
                        <div className={`w-14 h-14 sm:w-16 sm:h-16 border ${type.label.toLowerCase() === category ? "bg-blue-500" : "bg-white"} border-gray-300 rounded-full flex items-center justify-center transition`}>
                            <Image width={40} height={40} src={type.img} alt={type.label} className="w-8 h-8 sm:w-10 sm:h-10" />
                        </div>
                        <span className="mt-2 sm:mt-12 text-sm text-gray-700 bg-white px-2 py-1 rounded shadow transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:absolute">
                            {type.label}
                        </span>
                    </Link>
                ))}
                </div>
            </div>
             
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
                {vehicles.map((car, index) => (
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