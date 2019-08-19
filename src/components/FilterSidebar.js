import React from 'react';
import styled from 'styled-components';

import { colors } from '../styleVariables';

const FilterSidebar = ({ sortOrder, setSortOrder, nameFilter, setNameFilter }) => {
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
        <FilterSidebarStyled>
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
        </FilterSidebarStyled>
    );
};

const FilterSidebarStyled = styled.div`
    .filters {
        position: sticky;
        top: 0;
        height: fit-content;
        font-size: 0.8rem;
        color: ${colors.gray};
        background-color: ${colors.white};
        padding: 10px;
        border-radius: 2px;
        box-shadow: 0 2px 7px -2px rgba(0, 0, 0, 0.12);
    }

    .input {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        width: 100%;
        border-radius: 2px;
        border: 1px solid ${colors.lightGray};
        margin-bottom: 10px;
        font-family: system;
        font-weight: 500;
        outline: 0;
        background: white;
        display: inline-block;
    }

    .button {
        width: 100%;
        font-size: 0.8rem;
        border: none;
        outline: none;
        background: ${colors.gray};
        color: white;
        cursor: pointer;
        padding: 10px;
        font-weight: bold;
        border-radius: 2px;
    }

    .select {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        width: 100%;
        border-radius: 2px;
        border: 1px solid ${colors.lightGray};
        margin-bottom: 10px;
        font-family: system;
        font-weight: 500;
        outline: 0;
        background: white;
        display: block;
    }
`;

export default FilterSidebar;
