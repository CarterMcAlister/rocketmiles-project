import React from 'react';
import styled from 'styled-components';

import { colors } from '../styleVariables';

const Loader = () => (
    <LineLoader>
        <div className="la-line-scale la-2x">
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    </LineLoader>
);

const LineLoader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;

    /*!
        * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)
        * Copyright 2015 Daniel Cardoso <@DanielCardoso>
        * Licensed under MIT
    */
    .la-line-scale,
    .la-line-scale > div {
        position: relative;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    .la-line-scale {
        display: block;
        font-size: 0;
        color: ${colors.orange};
    }
    .la-line-scale > div {
        display: inline-block;
        float: none;
        background-color: currentColor;
        border: 0 solid currentColor;
    }
    .la-line-scale {
        width: 40px;
        height: 32px;
    }
    .la-line-scale > div {
        width: 4px;
        height: 32px;
        margin: 2px;
        margin-top: 0;
        margin-bottom: 0;
        border-radius: 0;
        -webkit-animation: line-scale 1.2s infinite ease;
        -moz-animation: line-scale 1.2s infinite ease;
        -o-animation: line-scale 1.2s infinite ease;
        animation: line-scale 1.2s infinite ease;
    }
    .la-line-scale > div:nth-child(1) {
        -webkit-animation-delay: -1.2s;
        -moz-animation-delay: -1.2s;
        -o-animation-delay: -1.2s;
        animation-delay: -1.2s;
    }
    .la-line-scale > div:nth-child(2) {
        -webkit-animation-delay: -1.1s;
        -moz-animation-delay: -1.1s;
        -o-animation-delay: -1.1s;
        animation-delay: -1.1s;
    }
    .la-line-scale > div:nth-child(3) {
        -webkit-animation-delay: -1s;
        -moz-animation-delay: -1s;
        -o-animation-delay: -1s;
        animation-delay: -1s;
    }
    .la-line-scale > div:nth-child(4) {
        -webkit-animation-delay: -0.9s;
        -moz-animation-delay: -0.9s;
        -o-animation-delay: -0.9s;
        animation-delay: -0.9s;
    }
    .la-line-scale > div:nth-child(5) {
        -webkit-animation-delay: -0.8s;
        -moz-animation-delay: -0.8s;
        -o-animation-delay: -0.8s;
        animation-delay: -0.8s;
    }
    .la-line-scale.la-sm {
        width: 20px;
        height: 16px;
    }
    .la-line-scale.la-sm > div {
        width: 2px;
        height: 16px;
        margin: 1px;
        margin-top: 0;
        margin-bottom: 0;
    }
    .la-line-scale.la-2x {
        width: 80px;
        height: 64px;
    }
    .la-line-scale.la-2x > div {
        width: 8px;
        height: 64px;
        margin: 4px;
        margin-top: 0;
        margin-bottom: 0;
    }
    .la-line-scale.la-3x {
        width: 120px;
        height: 96px;
    }
    .la-line-scale.la-3x > div {
        width: 12px;
        height: 96px;
        margin: 6px;
        margin-top: 0;
        margin-bottom: 0;
    }
    /*
        * Animation
     */
    @-webkit-keyframes line-scale {
        0%,
        40%,
        100% {
            -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4);
        }
        20% {
            -webkit-transform: scaleY(1);
            transform: scaleY(1);
        }
    }
    @-moz-keyframes line-scale {
        0%,
        40%,
        100% {
            -webkit-transform: scaleY(0.4);
            -moz-transform: scaleY(0.4);
            transform: scaleY(0.4);
        }
        20% {
            -webkit-transform: scaleY(1);
            -moz-transform: scaleY(1);
            transform: scaleY(1);
        }
    }
    @-o-keyframes line-scale {
        0%,
        40%,
        100% {
            -webkit-transform: scaleY(0.4);
            -o-transform: scaleY(0.4);
            transform: scaleY(0.4);
        }
        20% {
            -webkit-transform: scaleY(1);
            -o-transform: scaleY(1);
            transform: scaleY(1);
        }
    }
    @keyframes line-scale {
        0%,
        40%,
        100% {
            -webkit-transform: scaleY(0.4);
            -moz-transform: scaleY(0.4);
            -o-transform: scaleY(0.4);
            transform: scaleY(0.4);
        }
        20% {
            -webkit-transform: scaleY(1);
            -moz-transform: scaleY(1);
            -o-transform: scaleY(1);
            transform: scaleY(1);
        }
    }
`;

export default Loader;
