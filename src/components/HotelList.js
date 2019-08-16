import React, { useState, useEffect } from 'react';
import HotelCard from './HotelCard';

const HotelList = ({ hotels, sortOrder, nameFilter }) => {
    const [hotelsFiltered, setHotelsFiltered] = useState(hotels);

    // Sorts and returns sorted values, without mutating original object
    const sortLowToHigh = hotelList =>
        [...hotelList].sort((hotelA, hotelB) =>
            hotelA.lowestAveragePrice.amount > hotelB.lowestAveragePrice.amount ? 1 : -1
        );
    // Sorts and returns sorted values, without mutating original object
    const sortHighToLow = hotelList =>
        [...hotelList].sort((hotelA, hotelB) =>
            hotelA.lowestAveragePrice.amount < hotelB.lowestAveragePrice.amount ? 1 : -1
        );
    // Returns filtered list without mutating original object
    const filterHotelsBySearch = hotelList =>
        hotelList.filter(hotel => hotel.hotelStaticContent.name.toUpperCase().includes(nameFilter.toUpperCase()));

    // Apply filters when hotel list, sort order, or name filter changes
    useEffect(() => {
        // Filter by searched value
        setHotelsFiltered(filterHotelsBySearch(hotels));

        // Sort in selected order
        switch (sortOrder) {
            case 'low-to-high':
                setHotelsFiltered(sortLowToHigh(hotelsFiltered));
                break;
            case 'high-to-low':
                setHotelsFiltered(sortHighToLow(hotelsFiltered));
                break;
            default:
                setHotelsFiltered(filterHotelsBySearch(hotels));
        }
    }, [hotels, sortOrder, nameFilter]);

    return (
        <div className="hotel-list">
            {hotelsFiltered.map(hotel => (
                <HotelCard hotel={hotel} key={hotel.id} />
            ))}
        </div>
    );
};

export default HotelList;
