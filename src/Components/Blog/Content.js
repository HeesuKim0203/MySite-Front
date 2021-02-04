import React from 'react' ;
import styled from 'styled-components' ;
import { Link } from 'react-router-dom' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { fab } from '@fortawesome/free-brands-svg-icons' ;

import {
    DOCUMENT
} from '../../Util/routes' ;

const Title = styled.h5`
    font-size : 18px ;
    font-weight : 550 ;

    width : 100% ;

    margin-top : 15px ;

    overflow : hidden ;
    text-overflow : ellipsis ; 
    white-space : nowrap ;

    user-select : none ;

    font-family : 'Montserrat', sans-serif ;
`;

const Container = styled.div`
    width : 92% ;
    overflow : hidden ;

    box-shadow: 0 5px 10px rgba(0,0,0,0.19), 0 3px 3px rgba(0,0,0,0.23);

    cursor : pointer ;

    &:hover {
        ${Title} { 
            color : rgb(138, 37, 255) ;
            text-decoration : underline ;
        }
    }
`;

const Img = styled.div`
    width : 100% ;
    height : 250px ;
    
    background-image : url(${props=>props.url}) ;
    background-repeat : no-repeat ;
    background-size : cover ;

    float : left ; 

    @media ${props => props.theme.laptop} {
        height : 200px ;
    }
`;

const Code = styled.div`
    position : absolute ;
    top : 0 ;
    right : 0 ;
`;

const TextContainer = styled.div`
    width : 100% ;

    padding : 15px ;

    float : left ;

`;

const HeadContainer = styled.div`
    width : 100% ;

    position : relative ;
`;

const Date = styled.span`
    color : #bdbdbd ;
    font-size : 11px ;

    padding-left : 5px ;

    user-select : none ;

    font-family : 'Montserrat', sans-serif ;
`;

const TitleContainer = styled.div`
    width : 100% ;

    float : left ;
`;


const StyleFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size : 20px ;

    @media ${props => props.theme.laptop} {
        font-size : 18px ;
    }
`;

const Content = ({ content }) => {
    const { id, title, image_url, updated_at } = content ;
    return (
        <Container>
            <Link to={`${DOCUMENT}/${id}`}>
                <Img url={image_url} />
                <TextContainer>
                    <HeadContainer>
                        <Date draggable="false">{updated_at && updated_at.substring(0, 10)}</Date>
                        <Code>
                            <StyleFontAwesomeIcon icon={fab.faJsSquare} />
                        </Code>
                    </HeadContainer>
                    <TitleContainer>
                        <Title draggable="false">{title}</Title>
                    </TitleContainer>
                </TextContainer>
            </Link>
        </Container>
    );
};

export default Content ;