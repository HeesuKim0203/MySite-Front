import { memo } from 'react' ;
import styled from 'styled-components' ;
import Project from './Project' ;
import UseLanguage from '../Components/Home/UseLanguage' ;

import Slide from '../Components/Slide' ;
import { darkMode, lightMode } from '../Util/theme' ;
import { mode } from '../Util/util' ;
import Seo from '../Components/Seo';
import { HOME } from '../Util/routes';

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

    &:nth-child(2) {
        // slideContainer margin-top과 같이 변경
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

const SlideContainer = styled.div`
    width : 100% ;

    float : left ;

    overflow : hidden ;

    // contentContainer margin-top과 같이 변경    
    margin-top : 200px ;

    @media ${props => props.theme.mobileL} {
        margin-top : 180px ;
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

const TextAdd = styled(Text)`
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

      function moveScroll(y) {
        window.scroll({
            behavior : 'smooth',
            top : y
        }) ;
      }

      function onClickScroll1(e) {
        moveScroll(260) ;
      }
      function onClickScroll2(e) {
        moveScroll(810) ;
      }
      function onClickScroll3(e) {
        moveScroll(2800) ;
      }

    return (
        <>
            <Seo
                title={""}
                url={HOME}
                description={"heesu99의 기술스택 지금까지 경험한 프로젝트를 볼 수 있는 공간입니다."}
            />
            <FixMenu>
                <Button onClick={onClickScroll1} modeState={modeState} />
                <Button onClick={onClickScroll2} modeState={modeState} />
                <Button onClick={onClickScroll3} modeState={modeState} />
            </FixMenu>
            <Container>
                <ContentContainer>
                    <LanguageTextContainer>
                        <Title>Skills</Title>
                        <Text>제가 현재 쓸 수 있는 개발 스택입니다.</Text>
                        <Text>클릭 시 프로젝트 경험 횟수와 랭크가 있습니다.</Text>
                    </LanguageTextContainer>
                    <LanguageDataContainer>
                        <UseLanguage />
                    </LanguageDataContainer>
                </ContentContainer>
                <ContentContainer>
                    <ProjectTextContainer>
                        <Title>Project</Title>
                        <Text>제가 현재까지 진행한 개인 프로젝트 입니다.</Text>
                        <TextAdd>사람모양의 아이콘을 클릭 해 보세요.</TextAdd>
                        <TextAdd>각 면을 좌클릭 시 상세 설명이 나옵니다.</TextAdd>
                    </ProjectTextContainer>
                    <ProjectDataContainer>
                        <Project />
                    </ProjectDataContainer>
                </ContentContainer>
                    <SlideContainer>
                        <SlideTextContainer>
                                <Title>Blog</Title>
                                <Text>저의 게시물 입니다.</Text>
                                <Text>정보 공유와 저의 성장을 기록하기 위해서 만들었습니다.</Text>
                        </SlideTextContainer>
                        <SlideDataContainer>
                            <Slide modeState={modeState} />
                        </SlideDataContainer>
                    </SlideContainer>
            </Container>
        </>
    );
};

export default memo(Home) ;