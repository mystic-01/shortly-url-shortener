import React from 'react';
import styled from 'styled-components';

import Button from '../Button/Button';
import illustration from '../../images/illustration-working.svg';

const HeroWrapper = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 200px 150px;
    @media (max-width: 1100px) {
        flex-direction: column-reverse;
        padding: 30px 20px;
    }
`;

const HeroSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
    @media (max-width: 1100px) {
        align-items: center;
        width: auto;
    }
`;

const Heading = styled.h1`
    color: ${props => props.theme.colors.primary.darkViolet};
    font-size: 5rem;
    font-weight: 700;
    line-height: 1.2;
    @media (max-width: 1100px) {
        text-align: center;
        font-size: 2rem;
        margin: 20px 0;
    }
`;
const Paragraph = styled.p`
    color: ${props => props.theme.colors.neutral.gray};
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.5;
    @media (max-width: 1100px) {
        text-align: center;
        font-size: 0.9rem;
    }
`;

const HeroImage = styled.img`
    max-width: 50vw;
    @media (max-width: 1100px) {
        max-width: 90vw;
    }
`;

const Hero = () => {
    return (
        <HeroWrapper>
            <HeroSection>
                <Heading>More than just shorter links</Heading>
                <Paragraph>Build your brand’s recognition and get detailed insights
                on how your links are performing.</Paragraph>
                <Button
                    content="Get Started"
                    rounded={true}
                    large={true}
                    margin="2rem 0 0 0"
                />
            </HeroSection>
            <HeroSection>
                <HeroImage src={illustration} alt='Illustration' />
            </HeroSection>
        </HeroWrapper>
    );
};

export default Hero;
