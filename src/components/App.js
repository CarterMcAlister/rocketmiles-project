import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import FilterSidebar from './FilterSidebar';
import HotelList from './HotelList';
import Error from './Error';

import { breakpoints } from '../styleVariables';
import hotelResultService from '../services/hotel-result/hotel-result.service';

const App = () => {
    const [hotels, setHotels] = useState([]);
    const [sortOrder, setSortOrder] = useState('recommended');
    const [nameFilter, setNameFilter] = useState('');
    const [showResults, setShowResults] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState('Sorry, something went wrong. Please try again.');

    // Get hotel info and display, or show error message
    const getHotelInfo = () => {
        setIsLoading(true);
        hotelResultService
            .get()
            .then(response => {
                if (response && response.success) {
                    setHotels(response.results.hotels);
                    setShowResults(response.success);
                } else {
                    setShowResults(false);
                    setErrorMsg(response.message);
                }
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        getHotelInfo();
    }, []);

    return (
        <div className="app-container">
            <Nav />
            {showResults ? (
                <ContentLayout>
                    <FilterSidebar
                        sortOrder={sortOrder}
                        setSortOrder={setSortOrder}
                        nameFilter={nameFilter}
                        setNameFilter={setNameFilter}
                    />
                    <HotelList hotels={hotels} sortOrder={sortOrder} nameFilter={nameFilter} isLoading={isLoading} />
                </ContentLayout>
            ) : (
                <Error message={errorMsg} handleClick={getHotelInfo} />
            )}
        </div>
    );
};

const ContentLayout = styled.div`
    margin: 0 auto;
    background: #dcdcdc;

    @media ${breakpoints.small} {
        display: grid;
        grid-template-columns: 20% 75%;
        grid-column-gap: 20px;
        max-width: 1200px;
        padding: 10px;
    }
`;

export default App;
