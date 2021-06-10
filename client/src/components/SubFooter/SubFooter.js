import React from 'react';
import styled from 'styled-components';

import Button from '../Button/Button';
import bgBoost from '../../images/bg-boost-desktop.svg';

const SubFooterWrapper = styled.div`
    color: ${props => props.theme.colors.neutral.white};
    background: ${props => props.theme.colors.primary.darkViolet} url(${bgBoost}) top/cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 150px;
    @media (max-width: 1100px) {
        padding: 50px 30px;
    }
`;

const Heading = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    @media (max-width: 1100px) {
        font-size: 1.5rem;
    }
`;

const SubFooter = () => {
    return (
        <SubFooterWrapper>
            <Heading>Boost your links today</Heading>
            <Button
                content="Get Started"
                rounded={true}
                large={true}
                margin="2rem 0 0 0"
            />
        </SubFooterWrapper>
    );
};

export default SubFooter;
