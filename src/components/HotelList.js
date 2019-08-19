import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import HotelCard from './HotelCard';
import NoResults from './NoResults';
import Loader from './Loader';

import { colors } from '../styleVariables';

const HotelList = ({ hotels, sortOrder, nameFilter, isLoading }) => {
    const [hotelsFiltered, setHotelsFiltered] = useState([]);

    const sortLowToHigh = (hotelA, hotelB) =>
        hotelA.lowestAveragePrice.amount > hotelB.lowestAveragePrice.amount ? 1 : -1;

    const sortHighToLow = (hotelA, hotelB) =>
        hotelA.lowestAveragePrice.amount < hotelB.lowestAveragePrice.amount ? 1 : -1;

    // Returns filtered list without mutating original object
    const filterAndSort = list => {
        const refinedList = [...list].filter(hotel =>
            hotel.hotelStaticContent.name.toUpperCase().includes(nameFilter.toUpperCase())
        );
        if (sortOrder !== 'recommended') {
            const sortMethod = sortOrder === 'low-to-high' ? sortLowToHigh : sortHighToLow;
            refinedList.sort(sortMethod);
        }

        return refinedList;
    };

    useEffect(() => {
        setHotelsFiltered(filterAndSort(hotels));
    }, [hotels, sortOrder, nameFilter]);

    return (
        <HotelListStyled>
            {isLoading ? (
                <Loader />
            ) : hotelsFiltered && hotelsFiltered.length > 0 ? (
                hotelsFiltered.map(hotel => <HotelCard hotel={hotel} key={hotel.id} />)
            ) : (
                <NoResults searchTerm={nameFilter} />
            )}
        </HotelListStyled>
    );
};

const HotelListStyled = styled.div`
    background: ${colors.offWhite};
    padding: 1px 0;
`;

export default HotelList;
