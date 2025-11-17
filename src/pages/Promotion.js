import React, { useState, useEffect } from 'react';

const Promotion = () => {
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        // Simulate fetching discount data
        const fetchDiscount = async () => {
            const response = await fetch('/api/discount');
            const data = await response.json();
            setDiscount(data.discount);
        };

        fetchDiscount();
    }, []);

    return (
        <div>
            <h1>Promotion</h1>
            <p>Current Discount: {discount}%</p>
        </div>
    );
};

export default Promotion;
