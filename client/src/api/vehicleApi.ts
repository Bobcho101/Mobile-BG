// import { useEffect, useState } from "react";
const baseUrl: string = "http://localhost:3030/data/vehicles";

export const fetchVehicles = async () => {
    try{
        const response = await fetch(baseUrl); 
        const data = await response.json();
        return data;
    } catch(err: any){
        console.log(err.message);
        return [];
    }
}



// export const useFetchCars = () => {
//     const [ cars, setCars ] = useState([]);
//     const [ loading, setLoading ] = useState<boolean>(false);
//     const [ error, setError ] = useState<null | string>(null);

//     useEffect(() => {
//         const fetchCars = async () => {
//             setLoading(true);
//             try{
//                 const response = await fetch(baseUrl);
//                 const data = await response.json();
//                 console.log(cars);
                
//                 setCars(data);
//             } catch(err: any){
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchCars();
//     }, [cars]);

//     return {
//         cars,
//         loading,
//         error,
//     }
// };