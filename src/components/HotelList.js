import React from 'react';
import HotelCard from './HotelCard';

const HotelList = ({ hotels }) => (
    <div className="hotel-list">
        {hotels.map(hotel => (
            <HotelCard hotel={hotel} key={hotel.id} />
        ))}
    </div>
);

export default HotelList;
