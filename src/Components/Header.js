import React from 'react' ;
import { withRouter, Link } from 'react-router-dom' ;

import styled from 'styled-components' ;

import { 
    HOME,
    DOCUMENT,
    PROJECT,
    PROFILE,
    MY
} from '../Util/routes' ;

const Container = styled.header`

`;

const Menu = styled.ul`

`;

const Header = ({ location }) => {

    const data = [
        {
            path : HOME,
            text : 'HOME',
        },
        {
            path : DOCUMENT,
            text : 'Document',
        },
        {
            path : PROJECT,
            text : 'Project',
        },
        {
            path : PROFILE,
            text : 'Profile',
        }
    ] ;

    const [ pathnme ] = location ;

    return (
        <Container>
            <Menu>

            </Menu>
        </Container>
    );
};

export default withRouter(Header) ;