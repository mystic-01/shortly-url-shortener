import React from 'react';
import styled from 'styled-components';

import Form from './Form/Form';
import CardDeck from './CardDeck/CardDeck';

const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 150px;
    background: ${props => props.theme.colors.neutral.lightGray};
    @media (max-width: 1100px) {
        flex-direction: column;
        padding: 50px 20px;
        margin: 120px 0 0 0;
    }
`;

const Footer = () => {
    return (
        <MainWrapper>
            <Form />
            <CardDeck />
        </MainWrapper>
    );
};

export default Footer;
