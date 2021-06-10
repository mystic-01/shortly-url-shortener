import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../Button/Button';
import bgShorten from '../../../images/bg-shorten-desktop.svg';

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const InputWrapper = styled.form`
    color: ${props => props.theme.colors.neutral.white};
    background: ${props => props.theme.colors.primary.darkViolet} url(${bgShorten}) top/cover;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: -130px 0 0 0;
    padding: 50px 30px;
    width: 100%;
    @media (max-width: 1100px) {
        flex-direction: column;
        justify-content: space-between;
        padding: 25px;
        width: calc(100% - 30px);
    }
`;

const FormInput = styled.input`
    color: ${props => props.theme.colors.secondary.red};
    background: ${props => props.theme.colors.neutral.white};
    border-radius: 0.5rem;
    font-size: 1.1rem;
    margin: 0 20px 0 0;
    padding: 0.8rem 2rem;
    outline: none;
    width: 70%;
    &:focus {
        border: 2px solid ${props => props.theme.colors.secondary.red};
        &::placeholder {
            color: ${props => props.theme.colors.secondary.red};
        }
    }
    @media (max-width: 1100px) {
        margin: 0 0 20px 0;
        width: calc(100% - 4rem);
    }
`;

const CopyLink = styled.li`
    color: ${props => props.theme.colors.neutral.darkestViolet};
    background: ${props => props.theme.colors.neutral.white};
    border-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0 0 0;
    padding: 20px 30px;
    width: 100%;
    @media (max-width: 1100px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 20px 0;
        padding: 10px 10px;
    }
`;

const LinkText = styled.p`
    color: ${props => props.theme.colors.primary.darkViolet};
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.5;
    @media (max-width: 1100px) {
        font-size: 0.9rem;
        flex-direction: column;
        justify-content: space-between;
        margin: 10px 10px 0 10px;
    }
    `;
const LinkTextShort = styled(LinkText)`
    color: ${props => props.theme.colors.primary.cyan};
    margin: 0 20px 0 0;
    @media (max-width: 1100px) {
        margin: 10px 0; 
    }
    `;
const ShortenedWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    @media (max-width: 1100px) {
        border-top: 1px solid ${props => props.theme.colors.neutral.gray};
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 10px;
        width: 94%;
    }
`;

const EndHeading = styled.h1`
    color: ${props => props.theme.colors.primary.darkViolet};
    font-size: 3rem;
    font-weight: 700;
    line-height: 2;
    margin: 100px 0 0 0;
    text-align: center;
    @media (max-width: 1100px) {
        font-size: 1.8rem;
        margin: 80px 0 10px 0;
    }
`;
const EndSubtext = styled.p`
    color: ${props => props.theme.colors.neutral.gray};
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.6;
    margin: 0 0 50px 0;
    text-align: center;
    width: 50%;
    @media (max-width: 1100px) {
        font-size: 1rem;
        line-height: 1.4;
        width: auto;
    }
`;


const Form = () => {

    const [currentLink, setCurrentLink] = useState("");
    const [links, setLinks] = useState([]);

    const submitHandler = async (e) => {
        e.preventDefault()
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${currentLink}`)
        const data = await response.json();
        setLinks([...links, { link: currentLink, linkShortened: data?.result?.full_short_link }]);
    };

    const copy = (index) => {
        navigator.clipboard.writeText(links[index].linkShortened);
        links.map(item => item.copied = false);
        links[index].copied = true;
        setLinks([...links]);
    };

    return (
        <FormWrapper>
            <InputWrapper onSubmit={submitHandler}>
                <FormInput
                    type="url"
                    value={currentLink}
                    onChange={e => setCurrentLink(e.target.value)}
                    placeholder="Shorten a link here..."
                    required
                />
                <Button
                    type="submit"
                    content="Shorten it!"
                    rounded={false}
                    large={true}
                    margin="0"
                />
            </InputWrapper>
            {links.map((item, index) => (
                <CopyLink key={index}>
                    <LinkText>{`${item.link.substring(0, 50)}...`}</LinkText>
                    <ShortenedWrapper>
                        <LinkTextShort>{item.linkShortened}</LinkTextShort>
                        <Button
                            type="submit"
                            content={links[index].copied ? "Copied" : "Copy"}
                            bg={links[index].copied ? "violet" : "cyan"}
                            rounded={false}
                            large={false}
                            margin="0 0 0 0"
                            onClick={() => copy(index)}
                        />
                    </ShortenedWrapper>
                </CopyLink>
            ))}
            <EndHeading>Advanced Statistics</EndHeading>
            <EndSubtext>Track how your links are performing across the web with our
            advanced statistics dashboard.</EndSubtext>
        </FormWrapper>
    );
};

export default Form;
