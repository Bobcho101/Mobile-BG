import Image from 'next/image'
import './index.css'

export default function Home() {
  return (
    <>
      <div className="bg-gray-50">
        <section
          className="relative h-96 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1592427319311-6b7d5d9e232f)',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white py-32 px-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Find Your Dream Car
            </h1>
            <p className="text-lg sm:text-xl mb-8">
              Browse a wide selection of cars, from sedans to sports cars
            </p>
            <a
              href="#cars"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg"
            >
              Browse Cars
            </a>
          </div>
        </section>

        <section id="cars" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Cars Available for Sale
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[ // Here's a quick way to map over car data if you expand later
                {
                  src: 'https://images.unsplash.com/photo-1592363187340-f828a6f60c3f',
                  title: '2021 Tesla Model 3',
                  desc: 'Electric Sedan',
                  price: '$38,000',
                },
                {
                  src: 'https://images.unsplash.com/photo-1615933406712-10dff34c50a9',
                  title: '2019 BMW M3',
                  desc: 'Luxury Sports Sedan',
                  price: '$45,000',
                },
                {
                  src: 'https://images.unsplash.com/photo-1591367434622-453aaaf4ff8f',
                  title: '2020 Audi A4',
                  desc: 'Compact Luxury Sedan',
                  price: '$32,000',
                },
              ].map((car, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={car.src}
                      alt="Car"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{car.title}</h3>
                  <p className="text-gray-500">{car.desc}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-semibold text-blue-600">
                      {car.price}
                    </span>
                    <a href="#car-details" className="text-blue-500 hover:underline">
                      View Details
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
