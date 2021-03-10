import React from 'react' ;
import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { connect } from 'react-redux' ;
import { createAction } from '../../Store/store' ;
import { Link } from 'react-router-dom';

import { DOCUMENT } from '../../Util/routes' ;

const Title = styled.h6`
    font-size : 20px ;
    font-weight : 700 ;

    color : #424242 ;

    user-select : none ;

    @media ${props => props.theme.laptop} {
        font-size : 16px ;
    }
    @media ${props => props.theme.mobileS} {
        font-size : 10px ;
        color : #fff ;
    }

`;

const BigAisdeMenu = styled.li`
    width : 100% ;
    margin-top : 40px ;

    float : left ;

    color : #9e9e9e ;

    user-select : none ;

    cursor : pointer ; 
    @media ${props => props.theme.mobileS} {
        margin-top : 15px ;
    }
`;

const AsideMenu = styled.ul`

    margin-top : 20px ;

    @media ${props => props.theme.mobileS} {
        margin-top : 5px ;
    }
`;

const Menu = styled.li`
    width : 80% ;

    padding : 15px 0 15px 15px ;

    display : flex ;

    align-items : center ;

    color : #9e9e9e ;

    &:hover {
        background-color : #e8eaf6 ;
        color : #3949ab ;
    }

    @media ${props => props.theme.mobileS} {
        padding : 5px 0 ;
        color : #e0e0e0  ;

        &:hover {
            background-color : inherit ;
            color : #e0e0e0 ;
        }
    }
`;

const FontContainer = styled.div`
    width : 30px ;
    height : 30px ;

    display : flex ;

    align-items : center ;
    justify-content : center ;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`

    font-size : 28px ;

    font-weight : 700 ;

    @media ${props => props.theme.laptop} {
        font-size : 22px ;
    }
    @media ${props => props.theme.mobileS} {
        font-size : 14px ;
        color : #e0e0e0  ;
    }
`;

const Text = styled.span`
    display : block ;

    margin-left : 20px ;

    font-size : 14px ;

    font-weight : 550 ;

    @media ${props => props.theme.laptop} {
        font-size : 12px ;
        margin-left : 5px ;
    }
    @media ${props => props.theme.mobileS} {
        font-size : 8px ;
        margin-left : 2px ;
        color : #f5f5f5 ;
    }
`;

const AsideContent = ({ title, menu, onClickMenuContent }) => {
    
    return (
        <BigAisdeMenu>
            <Title>{title}</Title>
            <AsideMenu>
                { menu && menu.map((menu, index) => 
                <Link to={DOCUMENT} key={index}>
                    <Menu onClick={(e) => onClickMenuContent(e, menu.text)}>
                        <FontContainer>
                            <StyledFontAwesomeIcon icon={menu.icon} />
                        </FontContainer>
                        <Text>{menu.text}</Text>
                    </Menu>
                </Link>
                )}
            </AsideMenu>
        </BigAisdeMenu>
    );
};

function mapStateToProps(state) {
    const { 
        content : { 
            defaultData 
        } 
    } = state ;
    return {
        defaultData
    } ;
} ;

function mapDispatchToProps(dispatch) {
    return {
        searchContents : (defaultData, search) => dispatch(createAction.searchContents(defaultData, search))
    }
} ;

export default connect( mapStateToProps, mapDispatchToProps )(AsideContent);