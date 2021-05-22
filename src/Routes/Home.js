import { memo } from 'react' ;
import styled from 'styled-components' ;
import Project from './Project' ;

import UseLanguage from '../Components/Home/UseLanguage' ;
import Slide from '../Components/Slide' ;
import Seo from '../Components/Seo' ;

import { HOME } from '../Util/routes' ;
import { darkMode, lightMode } from '../Util/theme' ;
import { mode, homeText, MakeFixMenu, FIXEDMENUVALUE } from '../Util/util' ;

const { light } = mode ;

const Container = styled.main`
    width : 90% ;

    margin : 0 auto ;        

    overflow : hidden ;     

    @media ${props => props.theme.mobileL} {
        width : 100% ;
    }
`;

const ContentContainer = styled.section`
    width : 100% ;

    float : left ;
    
    overflow : hidden ;

    margin-top : 60px ;
    padding : 20px ;

    &:not(:first-child) {
        margin-top : 160px ;

        @media ${props => props.theme.mobileL} {
            margin-top : 140px ;
        }

    }
    @media ${props => props.theme.laptop} {
        margin-top : 10px ;
        padding : 10px ;
    }
    @media ${props => props.theme.mobileL} {
        padding : 0 ;
    }
`; 

const SlideDataContainer = styled.section`
    margin-top : 45px ;

    width : 100% ;

    float : left ;
`;

const SlideTextContainer = styled.div`
    width : 100% ;
    float : left  ;

    margin-bottom : 80px ;

    @media ${props => props.theme.mobileL} {
        margin-bottom : 40px ;
    }
`;

const LanguageDataContainer = styled.div`
    float : left ;
    width : 40% ;
    height : 350px ;

    margin-left : 10% ;

    display : flex ;
    
    align-items : center ;

    @media ${props => props.theme.laptop} {
        width : 100% ;
        margin-left : 0 ;
    }
    @media ${props => props.theme.mobileS} {
        height : 260px ;
    }
`;

const ProjectDataContainer = styled.div`
    width : 100% ;
    float : left ;
`;

const LanguageTextContainer = styled.div`
    float : left ;

    width : 40% ;
    height : 300px ;
    margin-left : 5% ;

    overflow : hidden ;

    display : flex ;

    flex-direction : column ;
    justify-content : center ;
    align-items : center ;

    @media ${props => props.theme.laptop} {
        width : 100% ;
        margin-left : 0 ;
    }
    @media ${props => props.theme.mobileS} {
        height : 220px ;
    }
`;

const ProjectTextContainer = styled.div`

    width : 100% ;
    float : left ;

    margin-bottom : 80px ;

    @media ${props => props.theme.laptop} {
        margin-bottom : 40px ;
    }
`;

const Title = styled.h3`
    width : 100% ;
    font-size : 28px ;

    text-align : center ;

    user-select : none ;
    color : ${props => props.theme.color.fontColor} ;

    @media ${props => props.theme.mobileL} {
        font-size : 24px ;
    }
    @media ${props => props.theme.mobileS} {
        font-size : 22px ;
    }
`;

const Text = styled.p`
    font-size : 14px ;

    text-align : center ;
    padding : 5px 3px ;

    color : ${props => props.theme.color.fontColor} ;

    user-select : none ;

    @media ${props => props.theme.mobileL} {
        font-size : 13px ;
    }
`;

const TabeltLHiddenText = styled(Text)`
    @media ${props => props.theme.tabletL} {
        display : none ;
    }
`;

const FixMenu = styled.div`
    display : none ;
    position : fixed ;

    bottom : 300px ;
    left : 5px ;

    width : 20px ;

    border-radius : 20px ;

    padding : 10px ;
    z-index : 10 ;

    flex-direction : column ;
    justify-content : center ;
    align-items : center ;

    @media ${props => props.theme.mobileS} {
        display : block ;
    }
`;

const Button = styled.div`
    width : 20px ;
    height : 20px ;
    
    border-radius : 20px ;
    
    background-color : ${props => props.modeState === light ? darkMode.backgroundColor : lightMode.backgroundColor} ;
    opacity : 0.6 ;

    &:not(:last-child) {
        margin-bottom : 10px ;
    }
`;

const Home = ({ modeState }) => {

    const { SKILL, PROJECT, BLOG } = homeText ;

    return (
        <>
            <Seo
                title=""
                url={HOME}
                description="heesu99의 기술스택 지금까지 경험한 프로젝트를 볼 수 있는 공간입니다."
            />
            <FixMenu>
                { MakeFixMenu(FIXEDMENUVALUE).map((func, index) => 
                    <Button key={index} onClick={func} modeState={modeState} />
                )}
            </FixMenu>
            <Container>
                <ContentContainer>
                    <LanguageTextContainer>
                        <Title>{SKILL}</Title>
                        { homeText.returnJSX(SKILL, Text) }
                    </LanguageTextContainer>
                    <LanguageDataContainer>
                        <UseLanguage />
                    </LanguageDataContainer>
                </ContentContainer>
                <ContentContainer>
                    <ProjectTextContainer>
                        <Title>{PROJECT}</Title>
                        { homeText.returnJSX(PROJECT, Text, TabeltLHiddenText) }
                    </ProjectTextContainer>
                    <ProjectDataContainer>
                        <Project />
                    </ProjectDataContainer>
                </ContentContainer>
                <ContentContainer>
                    <SlideTextContainer>
                            <Title>{BLOG}</Title>
                            { homeText.returnJSX(BLOG, Text) }
                    </SlideTextContainer>
                    <SlideDataContainer>
                        <Slide modeState={modeState} />
                    </SlideDataContainer>
                </ContentContainer>
            </Container>
        </>
    );
};

export default memo(Home) ;