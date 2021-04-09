import styled from 'styled-components' ;

const Container = styled.div`

    float : left ;

    width : 80% ;
    overflow : hidden ;

    background-color : ${props => props.theme.color.backgroundColor} ;
    color : ${props => props.theme.color.fontColor} ;

    &:nth-child(2n) {
        margin-left : 9.5% ;

        @media ${props => props.theme.tabletS} {
            margin-left : 14.5% ;
        }
        @media ${props => props.theme.mobileS} {
            margin-left : 0 ;
        }
    }
    &:nth-child(2n - 1) {
        margin-left : 9.5% ;

        @media ${props => props.theme.tabletS} {
            margin-left : 14.5% ;
        }
        @media ${props => props.theme.mobileS} {
            margin-left : 0 ;
        }
    }

    @media ${props => props.theme.tabletS} {
        width : 70% ;
    }

    @media ${props => props.theme.mobileS} {
        width : 100% ;
    }
`;

const DescriptionContainer  = styled.div`
    width : 100% ;
    
    display : flex ;

    background-color : ${props => props.theme.color.backgroundColor} ;
    color : ${props => props.theme.color.fontColor} ;

    font-size : 13px ;

    padding : 15px 0px ;

    align-items : center ;
`;

const Img = styled.div`
    width : 100% ;
    height : 270px ;

    position : relative ;
    float : left ;

    background-image : url(${props => props.src}) ;

    background-size : 100% 270px ;
    background-repeat : no-repeat ;
    background-position : 0 0 ;

    @media ${props => props.theme.laptop} {
        height : 260px ;
    }
    @media ${props => props.theme.mobileL} {
        height : 250px ;
    }
`;

const TextContainer = styled.div`
    position : relative ;
    width : 100% ;

    float : left ;
    overflow : hidden ;

    margin-bottom : 20px ;
`;

const TitleContainer = styled.div`
    width : 100% ;
    float : flex ;
`;

const Title = styled.h5`
    box-sizing : content-box ;

    height : 23px ;

    font-size : 17px ;

    overflow : hidden ;
    text-overflow : ellipsis ; 
    white-space : nowrap ;

    user-select : none ;

    text-align : center ;

    padding : 6px 2px 0 2px ;

    @media ${props => props.theme.mobileS} {
        font-size : 15px ;
    }

`;

const DateContainer = styled.div`
    width : 100% ;

    text-align : center ;
`;

const Date = styled.span`
    
    display : inline-block ;

    padding : 10px 1px 6px 1px ;
    font-size : 12px ;

    user-select : none ;

    @media ${props => props.theme.mobileL} {
        font-size : 10px ;
    }
    @media ${props => props.theme.mobileS} {
        font-size : 8px ;
    }
`;

const Description = styled.p`
    display : inline-block ;
    
    padding : 5px 10px ;
    line-height : 18px ;

`;

const ProjectContent = ({ content }) => {
    
    const { image, period, title, url, description } = content ;

    function onClickContent() {
        window.open(url, '_blank') ;
    }

    return (
        <Container onClick={onClickContent}>
            <TextContainer>
                <DateContainer>
                    <Date draggable="false">{period}</Date>
                </DateContainer>
                <TitleContainer>
                    <Title draggable="false">{title}</Title>
                </TitleContainer>
            </TextContainer>
            <Img 
                src={image.split(' ')[0]} 
            />
            <DescriptionContainer>
                    <Description>
                        { description }
                    </Description>
                </DescriptionContainer>
        </Container>
    );
};

export default ProjectContent;