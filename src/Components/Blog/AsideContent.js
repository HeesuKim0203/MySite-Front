import React from 'react' ;
import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { connect } from 'react-redux' ;
import { createAction } from '../../Store/store' ;
import { Link } from 'react-router-dom';

import { DOCUMENT } from '../../Util/routes' ;

const Title = styled.h6`
    font-size : 22px ;
    font-weight : 700 ;

    color : #424242 ;

    user-select : none ;

    @media ${props => props.theme.laptop} {
        font-size : 18px ;
    }
    @media ${props => props.theme.tabletL} {
        text-align : center ;
    }
`;

const BigAisdeMenu = styled.li`
    width : 100% ;
    margin-top : 40px ;

    float : left ;

    color : #9e9e9e ;

    user-select : none ;

    cursor : pointer ; 
    @media ${props => props.theme.tabletL} {
        &:nth-child(2) {
            margin-top : 40px ;
        }
    }
`;

const AsideMenu = styled.ul`
    margin-top : 20px ;

    /* @media ${props => props.theme.tabletL} {
        margin-top : 0 ;
    } */
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

    @media ${props => props.theme.tabletL} {
        width : 33.3333% ;
        float : left ;

        display : flex ;
        
        justify-content : center ;
        align-items : center ;

        margin-top : 0 ;

        border : 1px solid #999 ;
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
        font-size : 24px ;
    }
`;

const Text = styled.span`
    display : inline-block ;

    padding-left : 20px ;

    font-size : 16px ;

    font-weight : 550 ;

    @media ${props => props.theme.laptop} {
        font-size : 14px ;
    }
    /* @media ${props => props.theme.tabletL} {
        padding-left : 10px ;
    } */
`;

const ContentBox = styled.div`

`;

const AsideContent = ({ title, menu, onClickMenuContent }) => {
    
    return (
        <BigAisdeMenu>
            <Title>{title}</Title>
            <AsideMenu>
                { menu && menu.map((menu, index) => 
                <Link to={DOCUMENT} key={index}>
                    <Menu onClick={() => onClickMenuContent(menu.text)}>
                        {/* <ContentBox>    */}
                            <FontContainer>
                                <StyledFontAwesomeIcon icon={menu.icon} />
                            </FontContainer>
                            <Text>{menu.text}</Text>
                        {/* </ContentBox> */}
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