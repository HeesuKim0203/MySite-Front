import styled from 'styled-components' ;
import { Link } from 'react-router-dom' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;

import { faSquareFull } from '@fortawesome/free-solid-svg-icons' ;

import {
    DOCUMENT
} from '../../Util/routes' ;
import { searchCoreData } from '../../Util/util' ;
import { useEffect, useRef } from 'react';

const Title = styled.h5`
    font-size : 16px ;
    font-weight : 550 ;

    width : 100% ;
    height : 40px ;

    margin-top : 15px ;

    overflow : hidden ;
    text-overflow : ellipsis ; 
    white-space : nowrap ;

    user-select : none ;

    font-family : 'Noto Sans KR', sans-serif ;

    @media ${props => props.theme.laptop} {
        font-size : 14px ;
        margin-top : 10px ;
        height : 30px ;
    }
`;

const Container = styled.div`
    width : 70% ;
    overflow : hidden ;

    border-radius : 20px ;

    cursor : pointer ;

    &:nth-child(3n-2) {
        margin-left : 10% ;
        @media ${props => props.theme.tabletL} {
            margin-left : 0 ;
        }
    }
    &:nth-child(3n - 1) {
        margin-left : 5% ;
        @media ${props => props.theme.tabletL} {
            margin-left : 0 ;
        }
    }

    @media ${props => props.theme.laptop} {
        width : 80% ;
    }

    @media ${props => props.theme.tabletL} {
        width : 100% ;
        height : 200px ;

        box-shadow: none ;
        padding : 8px 8px 0 5px ;

        border-bottom : 1px solid #999 ;
        border-radius : 0 ;
    }

    @media ${props => props.theme.mobileS} {
        height : 140px ;
    }
`;

const Img = styled.div`
    width : 100% ;
    height : 220px ;

    background-image : url(${props=>`https://ik.imagekit.io/u1jztfg71ed${props.url}?tr=w-1,h-1:w-400,h-300`}) ;
    background-repeat : no-repeat ;
    background-position : center center ;
    background-size : cover ;

    float : left ; 

    @media ${props => props.theme.laptop} {
        height : 180px ;
    }
    @media ${props => props.theme.tabletL} {
        border : 1px solid #eeeeee ;
        border-radius : 7px ;
        
        height : 180px ;

        width : 35% ;

        float : right ;
    }
    @media ${props => props.theme.mobileS} {
        height : 120px ;

        width : 40% ;
    }
`;

const Code = styled.div`
    position : absolute ;
    top : 0 ;
    right : 0 ;

    @media ${props => props.theme.tabletL} {
        top : 50px ;
        left : 2px ;
    }

    @media ${props => props.theme.mobileS} {
        top : 45px ;
    }
`;

const TextContainer = styled.div`
    width : 100% ;

    padding : 12px ;

    background-color : #fff ;

    float : left ;

    @media ${props => props.theme.laptop} {
        padding : 10px 7px ;
    }
    @media ${props => props.theme.tabletL} {
        background-color : ${props => props.theme.color.mobileContentColor} ;
        color : ${props => props.theme.color.fontColor} ;
        padding : 8px 7px ;
        width : 50% ;
    }
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
    
    font-family : 'Noto Sans KR', sans-serif ;

    @media ${props => props.theme.laptop} {
        font-size : 7px ;
    }
    @media ${props => props.theme.mobileS} {
        padding-left : 3px ;
    }
`;

const TitleContainer = styled.div`
    width : 100% ;
    float : left ;
`;


const StyleFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size : 22px ;

    @media ${props => props.theme.mobileS} {
        font-size : 20px ;
    }
`;

const Content = ({ content }) => {
    const { id, title, image_url, created_at, type } = content ;
    const Image = useRef() ;

    const core = searchCoreData.filter(data => data.text === type)[0] ;

    useEffect(() => {
        setTimeout(() => {
            Image.current.style.backgroundImage = `url(https://ik.imagekit.io/u1jztfg71ed${image_url}?tr=w-400,h-300)` ;
        }, 300);
    }, []) ;

    return (
            <Container>
                <Link to={`${DOCUMENT}/${id}`}>
                <Img ref={Image} url={image_url} />
                <TextContainer>
                    <HeadContainer>
                        <Date draggable="false">{created_at && created_at.substring(0, 10)}</Date>
                        <Code>
                            <StyleFontAwesomeIcon icon={ core !== undefined ? core.icon : faSquareFull} />
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
  
export default  Content ; 