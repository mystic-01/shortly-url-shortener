import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    color: ${props => props.theme.colors.neutral.white};
    background: ${props => props.bg === "violet" ? props.theme.colors.primary.darkViolet : props.theme.colors.primary.cyan};
    border-radius: ${props => props.rounded ? "5rem" : (props.large ? "0.5rem" : "0.3rem")};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => props.large ? "1.1rem" : "normal"};
    margin: ${props => props.margin};
    padding: ${props => props.large ? "0.8rem 2rem" : "0.5rem 1rem"};
    width: ${props => props.large ? "12rem" : "6rem"};

    &:hover {
        background: ${props => props.bg === "violet" ? props.theme.colors.primary.darkViolet : props.theme.colors.neutral.lightCyan};
        transition: all 0.275s ease-in-out;
        cursor: pointer;
    }
    @media (max-width: 1100px) {
        width: ${props => props.rounded ? "initial" : "100%"};
    }
`;

const Button = ({ content, rounded, large, margin, bg, onClick }) => {
    return (
        <ButtonWrapper 
            rounded={rounded} 
            large={large} 
            margin={margin} 
            bg={bg}
            onClick={onClick}
        >
            {content}
        </ButtonWrapper>
    );
};

export default Button;
