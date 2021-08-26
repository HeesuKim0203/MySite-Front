import styled from 'styled-components' ;
import LanguageContent from './LanguageContent';

const Container = styled.div`
    float : left ;

    margin-top : 10px ;

    &:not(:first-child) {
        margin-top : 5px ;
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