import React from 'react';
import styled from 'styled-components';

import brandRecognition from '../../../images/icon-brand-recognition.svg';
import detailedRecords from '../../../images/icon-detailed-records.svg';
import fullyCustomizable from '../../../images/icon-fully-customizable.svg';

const CardDeckWrapper = styled.div`
    display: flex;
    padding: 100px 40px;
    width: 100%;
    position: relative;
    @media (max-width: 1100px) {
        flex-direction:column;
        padding: 40px 10px;
        align-items: center;
    }
`;

const Card = styled.li`
    color: ${props => props.theme.colors.neutral.darkestViolet};
    background: ${props => props.theme.colors.neutral.white};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    z-index: 2;
    align-self: ${props => props.align};
    justify-content: space-between;
    align-items: flex-start;
    margin: ${props => props.margin};
    padding: 20px 30px 30px 30px;
    width: 30%;
    @media (max-width: 1100px) {
        margin: 0 0 80px 0;
        justify-content: center;
        align-self: center;
        align-items: center;
        width: 100%;
        padding: 20px 0 30px 0;
    }
`;

const CardImage = styled.img`
    border-radius: 50%;
    border: 20px solid ${props => props.theme.colors.neutral.darkestViolet};
    background: ${props => props.theme.colors.neutral.darkestViolet};
    margin: -60px 0 0 0;
`;
const CardHeading = styled.h3`
    font-size: 1.3rem;
    font-weight: 700;
    margin: 30px 0 20px 0;
    @media (max-width: 1100px) {
        font-size: 1.1rem;
    }
`;
const CardText = styled.p`
    color: ${props => props.theme.colors.neutral.gray};
    font-size: 0.9rem;
    @media (max-width: 1100px) {
        font-size: 0.8rem;
        text-align: center;
    }
`;

const Line = styled.div`
    background: ${props => props.theme.colors.primary.cyan};
    height: 10px;
    width: 500px;
    position: absolute;
    left: 30%;
    top: 50%;
    z-index: 1;
    @media (max-width: 1100px) {
        width: 60%;
        top: 45%;
        left: 20%;
        transform: rotateZ(90deg);
    }
    @media (max-width: 700px) {
        width: 120%;
        top: 45%;
        left: -10%;
        transform: rotateZ(90deg);
    }
`;

const Form = () => {
    return (
        <CardDeckWrapper>
            <Line/>
            <Card margin="0" align="flex-start">
                <CardImage
                    src={brandRecognition}
                    alt="Brand Recognition"
                />
                <CardHeading>Brand Recognition</CardHeading>
                <CardText>Boost your brand recognition with each click. Generic links don’t
                mean a thing. Branded links help instil confidence in your content.</CardText>
            </Card>
            <Card margin="0 50px" align="center">
                <CardImage
                    src={detailedRecords}
                    alt="Detailed Records"
                />
                <CardHeading>Detailed Records</CardHeading>
                <CardText>Gain insights into who is clicking your links. Knowing when and where
                people engage with your content helps inform better decisions.</CardText>
            </Card>
            <Card margin="100px 0 0 0" align="flex-end">
                <CardImage
                    src={fullyCustomizable}
                    alt="Fully Customizable"
                />
                <CardHeading>Fully Customizable</CardHeading>
                <CardText>Improve brand awareness and content discoverability through customizable
                links, supercharging audience engagement.</CardText>
            </Card>
        </CardDeckWrapper>
    );
};

export default Form;
