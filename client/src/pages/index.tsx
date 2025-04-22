import Image from 'next/image'
import './index.css'

export default function Home() {
    return (
       <>
        <div className="bg-gray-50">
            <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1592427319311-6b7d5d9e232f)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white py-32">
                <h1 className="text-5xl font-extrabold mb-4">Find Your Dream Car</h1>
                <p className="text-xl mb-8">Browse a wide selection of cars, from sedans to sports cars</p>
                <a href="#cars" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg">Browse Cars</a>
            </div>
            </section>

            <section id="cars" className="py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">Cars Available for Sale</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <Image width={400} height={200} src="https://images.unsplash.com/photo-1592363187340-f828a6f60c3f" alt="Car" className="h-48 w-full object-cover rounded-md mb-4"/>
                    <h3 className="text-xl font-semibold">2021 Tesla Model 3</h3>
                    <p className="text-gray-500">Electric Sedan</p>
                    <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-semibold text-blue-600">$38,000</span>
                    <a href="#car-details" className="text-blue-500 hover:underline">View Details</a>
                    </div>
                </div>
    
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <Image width={400} height={200} src="https://images.unsplash.com/photo-1615933406712-10dff34c50a9" alt="Car" className="h-48 w-full object-cover rounded-md mb-4"/>
                    <h3 className="text-xl font-semibold">2019 BMW M3</h3>
                    <p className="text-gray-500">Luxury Sports Sedan</p>
                    <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-semibold text-blue-600">$45,000</span>
                    <a href="#car-details" className="text-blue-500 hover:underline">View Details</a>
                    </div>
                </div>
    
                <div className="bg-white p-4 rounded-lg shadow-lg">
                    <Image width={400} height={200} src="https://images.unsplash.com/photo-1591367434622-453aaaf4ff8f" alt="Car" className="h-48 w-full object-cover rounded-md mb-4"/>
                    <h3 className="text-xl font-semibold">2020 Audi A4</h3>
                    <p className="text-gray-500">Compact Luxury Sedan</p>
                    <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-semibold text-blue-600">$32,000</span>
                    <a href="#car-details" className="text-blue-500 hover:underline">View Details</a>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </div>
       </> 
    )
  }