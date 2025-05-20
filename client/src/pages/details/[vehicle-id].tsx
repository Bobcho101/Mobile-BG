import React from "react";

interface DetailsProps {
  id: string;
}

export const getServerSideProps = async ({ params }: { params: { [key: string]: string }}) => {
    const vehicleId = params["vehicle-id"];

    return {
        props: {
            id: vehicleId,
        }
    };
};

const Details: React.FC<DetailsProps> = ({ id }) => {
    return (
        <>
            <h1>Details - {id}</h1>
        </>
    );
}

export default Details;