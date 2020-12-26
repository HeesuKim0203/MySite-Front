import React, { useEffect, useState, useRef } from 'react' ;
import styled from 'styled-components' ;

import Content from '../Components/Blog/Content' ;

import MDEditor from '@uiw/react-md-editor' ;
import { axiosApi } from '../Util/api' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faSortDown } from '@fortawesome/free-solid-svg-icons' ;

const Container = styled.div`
    
`;

const Header = styled.div`
    width : 100% ;
    height : 500px ;
    overflow : hidden ;

    display : flex ;
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

const Description = styled.textarea`
    all : unset ;

    width : 300px ;
    height : 60px ;

    padding : 3.5px ;

    border : 2px solid ${props => props.status} ;
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
    width : 40px ;
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

const FixedInputCss = styled.div`
    position : fixed ;
    
    top : 100px ;
    left : 100px ;
`;

const FixedMorkDown = styled.div`
    position : fixed ;
    
    top : 100px ;
    left : 700px ;

    width : 500px ;
    display : ${props => props.display} ;
`;


const InputCss = styled.textarea`
    all : unset ;

    border : 1.5px solid #999 ;

    background-color : #fff ;
    display : ${props => props.display} ;
`;

const useInputImg = (initialValue) => {
    const [ file, setFile ] = useState(initialValue) ;
    const [ url, setUrl ] = useState('') ;

    const onChange = e => {
        let reader = new FileReader() ;
        const {
            target : {
                files : [ fileData ]
            }
        } = e ;
        reader.onloadend = () => {
            setFile(fileData) ;
            setUrl(reader.result) ;
        }
        reader.readAsDataURL(fileData) ;
    }
    return { file, url, onChange } ;
} ;

const Write = () => {
    const [ title, setTitle ] = useState('') ;
    const [ language, setLanguage ] = useState('') ;
    const [ html, setHTML ] = useState('') ;
    const [ css, setCss ] = useState('') ;
    const [ description, setDescription ] = useState('') ;
    const [ type, setType ] = useState('') ;
    const [ value, setValue ] = useState('') ;
    const [ htmlWriter, setHtmlWriter ] = useState(false) ;
    const [ cssWriter, setCssWriter ] = useState(false) ;

    const today = new Date() ;
    const { 
        file : img, 
        url : imgUrl, 
        onChange : imgOnChange 
    } = useInputImg('') ; 

    async function onSubmitImage(e) {
        e.preventDefault() ;
        const formData = new FormData() ;
        formData.append('file', img) ;

        const {
            data
        } = await axiosApi.imgTest(formData) ;

        const contentFormData = new FormData() ;
        contentFormData.append('title', title) ;
        contentFormData.append('css', css) ;
        contentFormData.append('html', html) ;
        contentFormData.append('language', language) ;
        contentFormData.append('url', data) ;

        await axiosApi.createContent(contentFormData) ;
    }

    function onChangeValue(e) {
        setValue(e.target.value) ;
    }

    function onChagneDescrption(e) {
        setDescription(e.target.value) ;
    }

    function onChangeType(e) {
        setType(e.target.value) ;
    }

    function onChangeCss(e) {
        setCss(e.target.value) ;
    }

    function onChangeTitle(e) {
        setTitle(e.target.value) ;
    }

    function onChangeLanguage(e) {
        setLanguage(e.target.value) ;
    }

    function onViewCss(e) {
        setCssWriter(cssWriter ? false : true) ;
    }

    function onViewHtml(e) {
        setHtmlWriter(htmlWriter ? false : true) ;
    }

    return (
        <Container>
            <style>
                {css}
            </style>
            <Header>
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
                    <Label name="type">종류</Label>
                    <Language
                        type="text"
                        name="type"
                        value={type}
                        onChange={onChangeType}
                        status={type >= 1 ? 'blue' : 'red'}
                        url={require("../assets/select_arrow.PNG").default}
                    >
                        <LanguageOption value="0">--Select Type--</LanguageOption>
                        <LanguageOption value="1">프로그래밍</LanguageOption>
                        <LanguageOption value="2">일상</LanguageOption>
                    </Language>
                    {type === "1" ? (
                        <>
                            <Label name="language">언어</Label>
                            <Language 
                                type="text" 
                                name="language" 
                                value={language} 
                                onChange={onChangeLanguage} 
                                required
                                status={language >= 1 ? 'blue' : 'red'}
                                url={require("../assets/select_arrow.PNG").default}
                            >
                                <LanguageOption value="0">--Select LanguageOption--</LanguageOption>
                                <LanguageOption value="2">JS</LanguageOption>
                                <LanguageOption value="1">HTML</LanguageOption>
                                <LanguageOption value="3">CSS</LanguageOption>
                            </Language>
                        </>
                    ) : (
                        <>
                            <Label name="life">일상</Label>
                            <Language 
                                type="text" 
                                name="life" 
                                value={value} 
                                onChange={onChangeValue} 
                                required
                                status={value >= 1 ? 'blue' : 'red'}
                                url={require("../assets/select_arrow.PNG").default}
                            >
                                <LanguageOption value="0">--Select--</LanguageOption>
                                <LanguageOption value="1">일상</LanguageOption>
                                <LanguageOption value="2">이모저모</LanguageOption>
                                <LanguageOption value="3">여행기</LanguageOption>
                            </Language>
                        </>
                    )}
                    <Label name="file">이미지 파일</Label>
                    <ImgInput 
                        name="file"
                        type="file"
                        accept='image/jpg, image/png, image/jpeg, image/gif'
                        onChange={imgOnChange}
                        required
                        status={imgUrl.length >= 1 ? 'blue' : 'red'}
                    />
                </InputContainer>
                <PreviewContainer>
                    { <Content 
                            content={{
                                title,
                                language_id : Number(language),
                                url : imgUrl,
                                description,
                                update_at : today.getFullYear() + "/" +  today.getMonth() + "/" + today.getDay()
                            }}
                    /> }
                </PreviewContainer>
            </Header>
            <Main>
                <MDEditor.Markdown source={html || null} />
            </Main>
            <FixedMorkDown
                display={htmlWriter ? 'block' : 'none' }
            >
                <MDEditor
                    value={html}
                    onChange={setHTML}
                />
            </FixedMorkDown>
            <FixedInputCss>
                <InputCss
                    placeholder="Start css!!"
                    value={css}
                    onChange={onChangeCss}
                    rows="20" 
                    cols="60"
                    display={cssWriter ? 'block' : 'none' }
                />
            </FixedInputCss>
            <FixdMenu>
                <Menu onClick={onViewCss}>CSS</Menu>
                <Menu onClick={onViewHtml}>HTML</Menu>
                <Menu  onClick={null}>작성</Menu>
            </FixdMenu>
        </Container>
    );
};

export default Write ;