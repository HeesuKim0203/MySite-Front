import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { connect } from 'react-redux' ;
import { createAction } from '../../Store/store' ;
import { Link } from 'react-router-dom';

import { DOCUMENT } from '../../Util/routes' ;

const Title = styled.h6`
    font-size : 20px ;
    font-weight : 700 ;

    color : ${props => props.theme.color.fontColor} ;

    user-select : none ;
    cursor : default ;

    @media ${props => props.theme.laptop} {
        font-size : 16px ;
    }
    @media ${props => props.theme.tabletL} {
        color : #fff ;
    }
    @media ${props => props.theme.mobileS} {
        font-size : 10px ;
    }

`;

const BigAisdeMenu = styled.li`
    width : 100% ;
    margin-top : 40px ;

    float : left ;

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

    color : ${props => props.theme.color.aisdeMenuColor} ;

    @media ${props => props.theme.tabletL} {
        color : #e0e0e0  ;
    }

    @media ${props => props.theme.mobileS} {
        padding : 5px 0 ;
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
        color : #e0e0e0 ;
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

export default connect(
    null,
    dispatch => (
        {
            searchContents : (defaultData, search) => dispatch(createAction.searchContents(defaultData, search))
        }
    ))(AsideContent) ;