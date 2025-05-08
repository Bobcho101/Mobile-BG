import Image from "next/image";
import React from "react";

const Catalog: React.FC = () => {
    const cars = [
        {
          src: 'https://images.unsplash.com/photo-1603216934532-6d98729f9c60',
          brand: 'Mercedes-Benz',
          model: 'C-Class',
          type: 'Luxury Sedan',
          transmission: 'Automatic',
          engine: 'Petrol',
          price: '$42,000',
        },
        {
          src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
          brand: 'Ford',
          model: 'Mustang GT',
          type: 'Muscle Car',
          transmission: 'Manual',
          engine: 'Petrol',
          price: '$39,000',
        },
        {
          src: 'https://images.unsplash.com/photo-1549924231-f129b911e442',
          brand: 'Honda',
          model: 'Civic',
          transmission: 'Automatic',
          type: 'Compact Sedan',
          engine: 'Gas',
          price: '$22,500',
        },
        {
          src: 'https://images.unsplash.com/photo-1583267741379-c715a693f879',
          brand: 'Toyota',
          model: 'Supra',
          transmission: 'Manual',
          type: 'Performance Coupe',
          engine: 'Petrol',
          price: '$50,000',
        },
        {
          src: 'https://images.unsplash.com/photo-1604335399103-74fb1e5c1574',
          brand: 'Chevrolet',
          model: 'Camaro',
          type: 'Sports Car',
          transmission: 'Manual',
          engine: 'Diesel',
          price: '$28,000',
        },
        {
          src: 'https://images.unsplash.com/photo-1588617358531-bc64e8f48f4d',
          brand: 'Subaru',
          model: 'WRX',
          type: 'AWD Sedan',
          engine: 'Gas',
          transmission: 'Automatic',
          price: '$33,000',
        },
        {
          src: 'https://images.unsplash.com/photo-1592363187340-f828a6f60c3f',
          brand: 'Tesla',
          model: 'Model 3',
          type: 'Electric Sedan',
          engine: 'Electric',
          transmission: 'Manual',
          price: '$38,000',
        },
        {
          src: 'https://images.unsplash.com/photo-1615933406712-10dff34c50a9',
          brand: 'BMW',
          model: 'i4',
          type: 'Electric Coupe',
          engine: 'Electric',
          transmission: 'Automatic',
          price: '$55,000',
        },
    ];

    return (
        <>
         <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10">
                Car Catalog
            </h1>
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
                    <div className="flex items-center justify-between mt-4">
                        <span className="text-lg font-bold text-blue-600">
                        {car.price}
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