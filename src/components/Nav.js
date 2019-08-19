import React from 'react';
import styled from 'styled-components';

import { colors } from '../styleVariables';

const Nav = () => (
    <NavStyled>
        <HeaderImage src="https://www.rocketmiles.com/resources/images/logos/rocketmiles-two-tone-logo.png" />
    </NavStyled>
);

const NavStyled = styled.div`
    height: 70px;
    width: 100%;
    background: ${colors.white};
    border-bottom: 1px solid ${colors.offWhite};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeaderImage = styled.img`
    padding: 20px;
    max-width: 300px;
`;

export default Nav;
