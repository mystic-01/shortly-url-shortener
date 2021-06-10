import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignRight } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button/Button';

const NavWrapper = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 150px;
    @media (max-width: 1100px) {
        padding: 30px 20px;
    }
`;

const NavSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1100px) {
        display: none;
    }
`;
const NavSectionMobile = styled.div`
    display: none;
    @media (max-width: 1100px) {
        display: flex;
        justify-content: space-between;
        width: 100%;
        /* align-items: center; */
    }
`;

const NavLink = styled.a`
    color: ${props => props.theme.colors.neutral.gray};
    font-size: 1rem;
    font-weight: 500;
    margin: 0 1rem;
    cursor: pointer;
    &:hover {
        color: ${props => props.theme.colors.primary.darkViolet};
    }
`;
const NavBrand = styled.div`
    color: ${props => props.theme.colors.primary.darkViolet};
    font-size: 2rem;
    font-weight: 700;
    margin: 0 2rem 0 0;
`;
const NavIcon = styled(NavBrand)` 
    color: ${props => props.theme.colors.neutral.gray};
    cursor: pointer;
    margin: 0;
    &:hover {
        color: ${props => props.theme.colors.primary.darkViolet};
        cursor: pointer;
    }
`;


const Navbar = () => {
    return (
        <NavWrapper>
            <NavSection>
                <NavBrand>Shortly</NavBrand>
                <NavLink>Features</NavLink>
                <NavLink>Pricing</NavLink>
                <NavLink>Resources</NavLink>
            </NavSection>
            <NavSection>
                <NavLink>Login</NavLink>
                <Button
                    content="Sign Up"
                    rounded={true}
                    large={false}
                    margin="0 0 0 1rem"
                />
            </NavSection>
            <NavSectionMobile>
                <NavBrand>Shortly</NavBrand>
                <NavIcon><FontAwesomeIcon icon={faAlignRight} /></NavIcon>
            </NavSectionMobile>
        </NavWrapper>
    );
};

export default Navbar;
