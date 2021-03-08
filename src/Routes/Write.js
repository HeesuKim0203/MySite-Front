import React, { useState } from 'react' ;
import styled from 'styled-components' ;

import Content from '../Components/Blog/Content' ;

import MDEditor from '@uiw/react-md-editor' ;
import { axiosApi } from '../Util/api' ;

import Image from '../Components/Me/Image' ;
import { Redirect } from 'react-router-dom' ;

import { DOCUMENT } from '../Util/routes' ;

const Container = styled.div`
    
`;

const Header = styled.div`
    width : 100% ;
    height : 500px ;
    overflow : hidden ;

    display : ${props => props.display} ;
    align-items : center ;
    justify-content : center ;


    @media ${props => props.theme.laptop} {
        height : 300px ;
    }
`;

const InputContainer = styled.div`
    display : flex ;

    flex-direction: column ;

    width : 30% ;
`;

const PreviewContainer = styled.div`
    width : 40% ;

    display : flex ;
    align-items : center ;
    justify-content : center ;
`;

const Title = styled.input`
    all : unset ;
    
    width : 300px ;
    height : 25px ;

    border : 2px solid ${props => props.status} ;
    
    font-size : 16px ;
    padding-left : 7px ;
`;

const Language = styled.select`
    all : unset ;

    width : 300px ;
    height : 25px ;

    line-height : 25px ;

    background-image : url(${props => props.url}) ;
    background-size : 30px 30px ;
    background-repeat : no-repeat ;
    background-position : 280px -1px ;

    border : 2px solid ${props => props.status} ;
    
    font-size : 16px ;
    padding-left : 7px ;
`;

const LanguageOption = styled.option`
    all : unset ;
`;

const ImgInput = styled.input`
    all : unset ;

    width : 300px ;
    height : 25px ;

    line-height : 26px ;

    border : 2px solid ${props => props.status} ;

    font-size : 14px ;
    padding-right : 7px ;
`;

const Label = styled.label`
    &:not(:first-child) {
        margin-top : 10px ;
    }
    &:not(:last-child) {
        margin-bottom : 10px ;
    }
`;

const Main = styled.main`

`;

const FixdMenu = styled.div`
    position : fixed ;
    
    bottom : 20px ;
    right : 20px ;

    display : flex ;
    align-items : center ;
    justify-content : center ;

`;

const Menu = styled.div`

    box-sizing : content-box ;
    height : 25px ;
    
    border : 1px solid #111 ;

    font-size : 14px ;
    font-weight : 600 ;

    padding : 5px 10px ;

    user-select : none ;
    cursor : pointer ;

    display : flex ;
    justify-content : center ;
    align-items : center ;

    &:not(:last-child) {
        margin-right : 5px ;
    }
`;

const FixedMorkDown = styled.div`

    width : 800px ;

    margin : 0 auto ;
    display : ${props => props.display} ;
`;

const ImageListContainer = styled.div`
    display : ${props => props.display} ;
`;

const Write = () => {
    const [ title, setTitle ] = useState('') ;
    const [ html, setHTML ] = useState('') ;
    const [ type, setType ] = useState('') ;
    const [ imageUrl, setImageUrl] = useState('') ;

    const [ htmlWriter, setHtmlWriter ] = useState(false) ;
    const [ preview, setPreview ] = useState(false) ;
    const [ ImageView, setImageView ] = useState(false) ;

    const [ pageState, setPageState ] = useState(true) ;

    async function onSubmitImage(e) {
        e.preventDefault() ;


        const contentFormData = new FormData() ;
        contentFormData.append('title', title) ;
        contentFormData.append('text', html) ;
        contentFormData.append('type', type) ;
        contentFormData.append('image_url', imageUrl) ;

        const data = await axiosApi.createContent(contentFormData) ;

        setPageState(!pageState) ;
    }

    function onChangeType(e) {
        setType(e.target.value) ;
    }

    function onChangeTitle(e) {
        setTitle(e.target.value) ;
    }

    function onViewHtml(e) {
        setHtmlWriter(htmlWriter ? false : true) ;
    }

    function onViewPreview(e) {
        setPreview(preview ? false : true) ;
    }

    function onViewImage(e) {
        setImageView(ImageView ? false :  true) ;
    }

    function onImageUrl(e) {
        setImageUrl(e.target.value) ;
    }

    return (
        <>
        { pageState ? (
            <Container>
                <Header display={preview ? 'flex' : 'none'}>
                    <InputContainer>
                        <Label name="title">제목</Label>
                        <Title 
                            type="text" 
                            name="title" 
                            value={title} 
                            onChange={onChangeTitle} 
                            required
                            status={title.length >= 1 ? 'blue' : 'red'}
                        />
                        <Label name="type">타입</Label>
                        <Language
                            type="text"
                            name="type"
                            value={type}
                            onChange={onChangeType}
                            status={type ? 'blue' : 'red'}
                            url={require("../assets/select_arrow.PNG").default}
                        >
                            <LanguageOption value="">--Select Type--</LanguageOption>
                            <LanguageOption value="JS">JS</LanguageOption>
                            <LanguageOption value="HTML">HTML</LanguageOption>
                            <LanguageOption value="CSS3">CSS</LanguageOption>
                            <LanguageOption value="React">React</LanguageOption>
                            <LanguageOption value="일상">일상</LanguageOption>
                            <LanguageOption value="이모저모">이모저모</LanguageOption>
                            <LanguageOption value="여행기">여행기</LanguageOption>
                        </Language>
                        <Label name="file">이미지 파일</Label>
                        <ImgInput 
                            name="file"
                            type="text"
                            onChange={onImageUrl}
                            required
                            status={imageUrl ? 'blue' : 'red'}
                        />
                    </InputContainer>
                    <PreviewContainer>
                        { 
                            <Content 
                                content={{
                                    title,
                                    type : type,
                                    image_url : imageUrl,
                                }}
                            /> 
                        }
                    </PreviewContainer>
                </Header>
                <Main>
                    <ImageListContainer display={ImageView ? 'block' : 'none'}>
                        <Image />
                    </ImageListContainer>
                    <FixedMorkDown
                        display={htmlWriter ? 'block' : 'none' }
                    >
                        <MDEditor
                            value={html}
                            onChange={setHTML}
                        />
                    </FixedMorkDown>
                    <MDEditor.Markdown source={html || null} />
                </Main>
                <FixdMenu>
                    <Menu onClick={onViewPreview}>개시글 컨텐츠</Menu>
                    <Menu onClick={onViewHtml}>HTML</Menu>
                    <Menu onClick={onViewImage}>이미지</Menu>
                    <Menu onClick={onSubmitImage}>작성</Menu>
                </FixdMenu>
            </Container>) : (
                <Redirect to={DOCUMENT} />
            )}
        </>
    );
};

export default Write ;