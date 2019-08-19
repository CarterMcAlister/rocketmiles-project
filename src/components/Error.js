import React from 'react';
import styled from 'styled-components';

import { colors, breakpoints } from '../styleVariables';
import errorSvg from '../images/undraw_maintenance_cn7j.svg';

const Error = ({ message, handleClick }) => (
    <ErrorContainer>
        <MessageContainer>
            <h1 className="error-title">Something's wrong here...</h1>
            <div className="error-message">{message}</div>
            <RetryButton onClick={handleClick}>Retry</RetryButton>
        </MessageContainer>
        <ErrorImage src={errorSvg} />
    </ErrorContainer>
);

const ErrorContainer = styled.div`
    background: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px;
    padding: 20px 10px 60px 10px;

    @media ${breakpoints.medium} {
        flex-direction: row;
    }
`;

const MessageContainer = styled.div`
    padding-top: 30px;

    .error-title {
        font-size: 1.8rem;
    }

    .error-message {
        padding: 10px 0;
        color: ${colors.gray};
    }
`;

const ErrorImage = styled.img`
    max-width: 200px;
    padding-left: 30px;
`;

const RetryButton = styled.button`
    background: ${colors.orange};
    color: ${colors.white};

    :hover {
        opacity: 0.9;
    }
`;

export default Error;
