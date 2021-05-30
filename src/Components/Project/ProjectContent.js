import styled, { css } from 'styled-components' ;

const Container = styled.div`

    float : left ;
    
    width : 80% ;
    overflow : hidden ;
    margin : 0 auto ;

    padding : 15px 25px ;

    background-color : ${props => props.theme.color.profileBackgroundColor} ;
    color : ${props => props.theme.color.fontColor} ;

    border-radius : 20px ;

    &:not(:first-child) {
        margin-top : 20px ;
    }

    @media ${props => props.theme.tabletS} {
        width : 70% ;
    }

    @media ${props => props.theme.mobileS} {
        width : 90% ;
    }
`;

const DescriptionContainer  = styled.div`
    width : 100% ;
    
    display : flex ;

    font-size : 13px ;

    padding : 15px 0px ;

    align-items : center ;
`;

const ContentLayOut = css`
    width : 100% ;
    height : 270px ;

    position : relative ;
    float : left ;

    @media ${props => props.theme.laptop} {
        height : 260px ;
    }
    @media ${props => props.theme.mobileL} {
        height : 250px ;
    }
` ;

const Video = styled.video`

    font-size : 20px ;

    color : red ;

    ${ContentLayOut}
`;

const Image = styled.div`

    ${ContentLayOut}
    background-image : url(${props => props.src}) ;

    background-size : 100% 100% ;
    background-repeat : no-repeat ;
    background-position : 0 0 ;
`;

const TextContainer = styled.div`
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

    function fallback() {
        const parnt = document.querySelector('video.videoProject') ;
        const img = document.querySelector('video.videoProject div.imageError') ;

        if (img)
            parnt.parentNode.replaceChild(img, parnt) ;
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
            {image.split(' ')[1] ? <Image
                src={image.split(' ')[0]} 
            /> : <Video 
                className="videoProject"
                autoPlay
                playsinline 
                loop
                muted
            >
                <source src={image} type="video/webm" onError={fallback} />
                <Image className="imageError" src={image.replace('webm', 'gif').replace('videos', 'images')} />
            </Video>}
            <DescriptionContainer>
                    <Description>
                        { description }
                    </Description>
                </DescriptionContainer>
        </Container>
    );
};

export default ProjectContent;