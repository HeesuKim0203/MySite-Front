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
    font-weight : 600 ;

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

    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

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

    border-bottom : 1.5px solid #999 ;
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
    const { title, url, update_at, content_id, language_id } = content ;
    return (
        <Container>
            <Link to={{
                pathname : `${DOCUMENT}/${1}`,
                state : content
                }}
                // onClick={content_id ?  () => {} : e => e.preventDefault()}
                >
                <Img url={url} />
                <TextContainer>
                    <HeadContainer>
                        {/* <Date draggable="false">{update_at && update_at.substring(0, 10)}</Date> */}
                        <Date>2020-10-29</Date>
                        {/* <Code>
                            { 
                              language_id && language_id === 2 ? (<StyleFontAwesomeIcon icon={fab.faJsSquare} />) : 
                              language_id === 1 ? (<StyleFontAwesomeIcon icon={fab.faHtml5} />) :
                              language_id === 3 ? (<StyleFontAwesomeIcon icon={fab.faCss3Alt} />) :
                              language_id === 4 ? (<StyleFontAwesomeIcon icon={fab.faReact} />) : null
                            }
                        </Code> */}
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