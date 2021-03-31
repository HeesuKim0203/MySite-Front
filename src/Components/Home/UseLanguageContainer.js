import styled from 'styled-components' ;
import LanguageContent from './LanguageContent';

const Container = styled.div`
    float : left ;

    overflow : hidden ;

    &:nth-child(2) {
        margin-top : 15px ;

        @media ${props => props.theme.mobileS} {
            margin-top : 2px ;
        }
    }
`;

const UseLanguageContainer = ({ content }) => {
    return (
        <Container>
            {content && content.map((menu, index) => (
                <LanguageContent key={index} menu={menu}/>
            ))} 
        </Container>
    );
};

export default UseLanguageContainer;