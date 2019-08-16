import React from 'react';

const HotelSidebar = ({ sortOrder, setSortOrder, nameFilter, setNameFilter }) => {
    const priceChange = event => {
        setSortOrder(event.target.value);
    };

    const nameFilterChange = event => {
        setNameFilter(event.target.value);
    };

    const resetFilters = () => {
        setNameFilter('');
        setSortOrder('recommended');
    };

    return (
        <div>
            <div className="filters">
                Hotel name
                <input type="text" className="input" value={nameFilter} onChange={nameFilterChange} />
                Price
                <select name="" className="select" onChange={priceChange} value={sortOrder}>
                    <option value="recommended">Recommended</option>
                    <option value="low-to-high">Price low-to-high</option>
                    <option value="high-to-low">Price high-to-low</option>
                </select>
                <button className="button" onClick={resetFilters}>
                    Reset
                </button>
            </div>
        </div>
    );
};
export default HotelSidebar;
