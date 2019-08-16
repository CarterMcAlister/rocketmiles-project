import React, { useState, useEffect } from 'react';
import './App.style.scss';

import Filter from '../Filters';
import HotelList from '../HotelList';

import hotelResultService from '../../services/hotel-result/hotel-result.service';

const App = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        hotelResultService.get().then(response => {
            setHotels(response.results.hotels);
        });
    }, []);

    return (
        <div className="app-container">
            <div className="content">
                <Filter />
                <HotelList hotels={hotels} />
            </div>
        </div>
    );
};

export default App;
