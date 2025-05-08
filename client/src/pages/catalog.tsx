import React from "react";

const Catalog: React.FC = () => {
    const cars = [
        {
          src: 'https://images.unsplash.com/photo-1603216934532-6d98729f9c60',
          brand: 'Mercedes-Benz',
          model: 'C-Class',
          type: 'Luxury Sedan',
          engine: 'Petrol',
          price: '$42,000',
        },
        {
          src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
          brand: 'Ford',
          model: 'Mustang GT',
          type: 'Muscle Car',
          engine: 'Petrol',
          price: '$39,000',
        },
        {
          src: 'https://images.unsplash.com/photo-1549924231-f129b911e442',
          brand: 'Honda',
          model: 'Civic',
          type: 'Compact Sedan',
          engine: 'Gas',
          price: '$22,500',
        },
        {
          src: 'https://images.unsplash.com/photo-1583267741379-c715a693f879',
          brand: 'Toyota',
          model: 'Supra',
          type: 'Performance Coupe',
          engine: 'Petrol',
          price: '$50,000',
        },
        {
          src: 'https://images.unsplash.com/photo-1604335399103-74fb1e5c1574',
          brand: 'Chevrolet',
          model: 'Camaro',
          type: 'Sports Car',
          engine: 'Diesel',
          price: '$28,000',
        },
        {
          src: 'https://images.unsplash.com/photo-1588617358531-bc64e8f48f4d',
          brand: 'Subaru',
          model: 'WRX',
          type: 'AWD Sedan',
          engine: 'Gas',
          price: '$33,000',
        },
        {
          src: 'https://images.unsplash.com/photo-1592363187340-f828a6f60c3f',
          brand: 'Tesla',
          model: 'Model 3',
          type: 'Electric Sedan',
          engine: 'Electric',
          price: '$38,000',
        },
        {
          src: 'https://images.unsplash.com/photo-1615933406712-10dff34c50a9',
          brand: 'BMW',
          model: 'i4',
          type: 'Electric Coupe',
          engine: 'Electric',
          price: '$55,000',
        },
    ];
    
    return (
        <>
        <h1>Catalog</h1>
        </>
    )
};

export default Catalog;