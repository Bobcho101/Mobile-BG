import Image from "next/image";
import React from "react";

interface DetailsProps {
  id: string;
}

export const getServerSideProps = async ({ params }: { params: { [key: string]: string }}) => {
    const vehicleId = params["vehicle-id"];

    return {
        props: {
            vehicleId,
        }
    };
};

const Details: React.FC<DetailsProps> = ({ vehicleId }) => {

     const vehicle = {
        id: "a1b2c3d4",
        ownerId: "user-001",
        src: "https://images.unsplash.com/photo-1603216934532-6d98729f9c60",
        brand: "Mercedes-Benz",
        model: "C-Class",
        type: "Luxury Sedan",
        engine: "Petrol",
        transmission: "Automatic",
        price: 42000,
        desc: "A comfortable and stylish sedan with refined handling and a premium interior.",
        kmTravelled: 23000,
        horsepower: 255,
        category: "cars",
    };

    return (
         <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="relative w-full h-96">
                <Image
                    src={vehicle.src}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    fill
                    className="object-cover"
                />
                </div>
                <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    {vehicle.brand} {vehicle.model}
                </h1>
                <p className="text-sm text-gray-500 mb-4">{vehicle.type}</p>
                <p className="text-gray-700 mb-4">{vehicle.desc}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                    <span className="text-gray-600">Engine:</span>
                    <p className="font-medium text-gray-900">{vehicle.engine}</p>
                    </div>
                    <div>
                    <span className="text-gray-600">Transmission:</span>
                    <p className="font-medium text-gray-900">{vehicle.transmission}</p>
                    </div>
                    <div>
                    <span className="text-gray-600">Kilometers Travelled:</span>
                    <p className="font-medium text-gray-900">{vehicle.kmTravelled.toLocaleString()} km</p>
                    </div>
                    <div>
                    <span className="text-gray-600">Horsepower:</span>
                    <p className="font-medium text-gray-900">{vehicle.horsepower} HP</p>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">
                    ${vehicle.price.toLocaleString()}
                    </span>
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Category: {vehicle.category}
                    </span>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Details;