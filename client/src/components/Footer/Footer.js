import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faPinterest, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const FooterWrapper = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 50px 150px 100px 150px;
    color: ${props => props.theme.colors.neutral.white};
    background: ${props => props.theme.colors.neutral.darkestViolet};
    @media (max-width: 1100px) {
        flex-direction: column;
        align-items: center;
        padding: 80px 0 50px 0;
    }
`;

const FooterSection = styled.div`
    display: flex;
    flex: ${props => props.flexValue};
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: 1100px) {
        align-items: center;
        text-align: center;    
        margin-bottom: 20px;
    }
`;
const FooterIconList = styled(FooterSection)`
    flex-direction: row;
`;

const FooterLink = styled.a`
    color: ${props => props.theme.colors.neutral.gray};
    font-size: 1rem;
    font-weight: 500;
    margin: 0 1.5rem 0.5rem 0;
    &:hover {
        color: ${props => props.theme.colors.primary.cyan};
        cursor: pointer;
    }
    @media (max-width: 1100px) {
        text-align:center;    
    }
`;

const FooterBrand = styled(FooterLink)`
    color: ${props => props.theme.colors.neutral.white};
    font-size: 2rem;
    font-weight: 700;
    &:hover {
        color: inherit;
    }
`;
const FooterSubheading = styled(FooterBrand)`
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0 1rem 1rem 0;
`;

const FooterIcon = styled(FooterLink)`
    color: ${props => props.theme.colors.neutral.white};
    font-size: 1.3rem;
    font-weight: 700;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterSection flexValue={0.3}>
                <FooterBrand>Shortly</FooterBrand>
            </FooterSection>
            <FooterSection flexValue={0.2}>
                <FooterSubheading>Features</FooterSubheading>
                <FooterLink>Link Shortening</FooterLink>
                <FooterLink>Branded Links</FooterLink>
                <FooterLink>Analytics</FooterLink>
            </FooterSection>
            <FooterSection flexValue={0.2}>
                <FooterSubheading>Resources</FooterSubheading>
                <FooterLink>Blog</FooterLink>
                <FooterLink>Development</FooterLink>
                <FooterLink>Support</FooterLink>
            </FooterSection>
            <FooterSection flexValue={0.2}>
                <FooterSubheading>Company</FooterSubheading>
                <FooterLink>About</FooterLink>
                <FooterLink>Our Team</FooterLink>
                <FooterLink>Careers</FooterLink>
                <FooterLink>contact</FooterLink>
            </FooterSection>
            <FooterIconList flexValue={0.1}>
                <FooterIcon><FontAwesomeIcon icon={faFacebookSquare} /></FooterIcon>
                <FooterIcon><FontAwesomeIcon icon={faTwitter} /></FooterIcon>
                <FooterIcon><FontAwesomeIcon icon={faPinterest} /></FooterIcon>
                <FooterIcon><FontAwesomeIcon icon={faInstagram} /></FooterIcon>
            </FooterIconList>
        </FooterWrapper>
    );
};

export default Footer;
