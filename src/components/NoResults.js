import React from 'react';
import styled from 'styled-components';

import { colors } from '../styleVariables';
import noDataImg from '../images/undraw_no_data_qbuo.svg';

const NoResults = ({ searchTerm }) => {
    return (
        <NoResultsContainer>
            <NoResultsImage src={noDataImg} />
            <h1 className="message-title">No matches found for '{searchTerm}'</h1>
            <div className="message">Please try modifying your selection criteria.</div>
        </NoResultsContainer>
    );
};

const NoResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px;
    padding: 20px 10px 60px 10px;

    .message-title {
        font-size: 1.4rem;
    }

    .message {
        padding: 10px 0;
        color: ${colors.gray};
    }
`;

const NoResultsImage = styled.img`
    max-width: 200px;
    padding-bottom: 50px;
`;

export default NoResults;
