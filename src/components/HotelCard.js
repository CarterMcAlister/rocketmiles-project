import React from 'react';
import styled from 'styled-components';

import { colors, breakpoints } from '../styleVariables';
import placeholderImage from '../images/hotel_placeholder.jpg';

const HotelCard = ({ hotel }) => (
    <HotelCardStyled>
        <HotelImage className="image" image={hotel.hotelStaticContent.mainImage.url} />
        <HotelDetails>
            <div className="hotel-name">{hotel.hotelStaticContent.name}</div>
            <div className="location">📍 {hotel.hotelStaticContent.neighborhoodName}</div>
        </HotelDetails>
        <PriceDetails>
            <div>
                <div className="price">
                    <span
                        dangerouslySetInnerHTML={{
                            __html: hotel.lowestAveragePrice.symbol
                        }}
                    />
                    {hotel.lowestAveragePrice.amount.toLocaleString()}
                </div>
                <div className="price-subtitle">per night</div>
            </div>

            <RewardDetails>
                <div className="earn">Earn</div>
                <div className="miles-section">
                    <span className="mile-amount">{hotel.rewards.miles.toLocaleString()} </span>
                    <span className="miles">miles</span>
                </div>
            </RewardDetails>
            <SelectButton>Select</SelectButton>
        </PriceDetails>
    </HotelCardStyled>
);

const HotelCardStyled = styled.div`
    margin: 20px;
    background: ${colors.white};
    display: grid;
    border-radius: 2px;
    overflow: hidden;
    box-shadow: 0 2px 7px -2px rgba(0, 0, 0, 0.12);

    @media ${breakpoints.medium} {
        grid-template-columns: 210px auto 180px;
    }

    :hover {
        box-shadow: 0 2px 7px -2px rgba(0, 0, 0, 0.22);
    }
`;

const HotelImage = styled.div`
    background-image: ${({ image }) => `url(${image}), url(${placeholderImage})`};
    height: 180px;
    background-size: cover;
    min-width: 180px;
`;

const HotelDetails = styled.div`
    padding: 20px 15px 0;

    .hotel-name {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 6px;

        color: ${colors.black};
    }

    .location {
        color: ${colors.gray};
    }
`;

const PriceDetails = styled.div`
    display: flex;

    padding: 15px;
    justify-content: space-around;

    @media ${breakpoints.medium} {
        flex-direction: column;
    }

    .price {
        color: ${colors.black};
        font-size: 18px;
        font-weight: 500;
    }

    .price-subtitle {
        font-size: 11px;
        color: ${colors.gray};
        font-weight: 500;
    }
`;

const RewardDetails = styled.div`
    .earn {
        font-size: 12px;
        font-weight: 500;
        padding-bottom: 5px;
    }

    .miles-section {
        display: flex;
        align-items: center;
        font-weight: 700;
    }

    .mile-amount {
        color: ${colors.blue};
    }

    .miles {
        font-size: 11px;
        color: ${colors.gray};
        margin-left: 5px;
    }
`;

const SelectButton = styled.button`
    background: ${colors.orange};
    color: ${colors.white};

    :hover {
        opacity: 0.9;
    }
`;

export default HotelCard;
