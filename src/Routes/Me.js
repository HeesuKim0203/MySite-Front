import React, { useState } from 'react' ;
import styled from 'styled-components' ;
import { Link } from 'react-router-dom' ;
import { withCookies } from 'react-cookie' ;

import {
    WRITE
} from '../Util/routes' ;
import Image from '../Components/Me/Image' ;

const Container = styled.div`

`;

const Button = styled.button`
    all : unset ;
    
    width : 150px ;
    height : 40px ;
    
    border-radius : 20px ;
    border : 1px solid #111 ;

    text-align : center ;
`;

const ButtonContainer = styled.div`
    margin-bottom : 30px ;
`;

const ImageContainer = styled.div`
    display : ${props => props.display} ;
`;

const Me = () => {
    const [ imgDisplay, setImgDisplay ] = useState(false) ;
    
    function onClickImageView(e) {
        
        setImgDisplay(imgDisplay ? false : true) ;
    }

    return (
        <Container>
            <ButtonContainer>
                <Link to={WRITE}>
                    <Button>Write</Button>
                </Link>
                <Button onClick={onClickImageView}>Image</Button>
            </ButtonContainer>
            <ImageContainer display={imgDisplay ? 'display' : 'none' }>
                <Image />
            </ImageContainer>
        </Container>
    );
};

export default withCookies(Me);