import React, { useEffect, useState } from 'react' ;
import styled from 'styled-components' ;
import { axiosApi } from '../../Util/api';

const Container = styled.div`
    
    width : 600px ;
    height : 400px ;
    
    padding : 20px ;

    background-color : #1565c0 ;
    border-radius : 20px ;

    overflow : hidden ;
`;

const ImageListContainer = styled.div`
    float : left ;
    width : 50% ;
    height : 100% ;
    
    border-radius : 20px ;

    padding : 15px 10px ;

    background-color : #fff ;

    overflow-x : scroll ;
`;

const InputContainer = styled.div`
    background-color : #fff ;
    float : right ;

    width : 48% ;
    height : 100% ;

    border-radius : 20px ;
`;

const ImagePreviewContainer = styled.div`
    width : 100% ;
    height : 160px ;
    margin-bottom : 30px ;
`;

const ImagePreview = styled.img`
    width : 100% ;
    height : 100% ;

    background-image : url(${props => props.url}) ;
    background-repeat : no-repeat ;
    background-size : cover ;
`;

const Input = styled.input`

`;

const Form = styled.form`
    
`;

const Button = styled.button`
    all : unset ;

    font-size : 14px ;
    font-weight : 550 ;

    border-radius : 15px ;

    padding : 4px 8px ;
    margin : 2px 4px ;

    background-color : #1de9b6 ;
`;

const ImageContent = styled.div`
    overflow : hidden ; 
    text-overflow : ellipsis ; 
    white-space : nowrap ;
`;

const Msg = styled.div`

    width : 100% ;
    height : 100% ;
    
    font-size : 22px ;
    font-weight : 600 ;
    color : #b71c1c ;

    display : flex ;

    justify-content : center ;
    align-items : center ;
    
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

const ImageJSX = () =>{

    const [ imageList, setImageList ] = useState([]) ;
    const [ selectUrl, setSelectUrl ] = useState('') ;

    const { 
        file : img, 
        onChange : imgOnChange 
    } = useInputImg('') ; 

    useEffect(() => {
        async function getImgList() {

            try {
                const {
                    data : { 
                        images
                    }
                } = await axiosApi.getImgList() ;

                setImageList(images) ;
            }catch {

            }
        }

        getImgList() ;

        return () => {
            setSelectUrl('') ;
            setImageList([]) ;
        }

    }, []) ;

    async function onSubmitImage(e) {
        e.preventDefault() ;

        const formData = new FormData() ;

        formData.append('file', img) ;

        try {
            const { 
                data 
            } = await axiosApi.addImg(formData) ;

            setImageList(imageList.concat(data)) ;
        }catch {
            

        }finally {
            
        }
    }

    function onClickImage(e) {
        setSelectUrl(e.currentTarget !== e.target ? 
            imageList[imageList.findIndex(image => image.url === e.target.innerHTML)]
            : null
        ) ;
    }

    async function onDeleteImg(e) {

        // const formData = new FormData() ;
        
        // formData.append('_method', 'DELETE') ;

        if(selectUrl !== null) {
            try {
                const { data } = await axiosApi.deleteImg(selectUrl.id) ;
                if(data) {
                    const id = imageList.findIndex(image => image.id === selectUrl.id) ;
                    setImageList([
                        ...imageList.slice(0, id),
                        ...imageList.slice(id + 1, imageList.length)
                    ]) ;
                }
            }catch {
                
            }
        }
    }

    function onClickImageContent(e) {

        const node = e.target ;
        const text = node.innerHTML ;

        const createInput = document.createElement('input') ;
        createInput.setAttribute('type', 'text') ;

        node.appendChild(createInput) ;

        createInput.value = text ;
        
        createInput.select() ;
        document.execCommand('copy') ;

        node.removeChild(createInput) ;

    }

    return (
        <Container>
            <ImageListContainer onClick={onClickImage}>
                {imageList && imageList.map((content, index) => 
                    <ImageContent onClick={onClickImageContent} key={index}>
                        {content.url}
                    </ImageContent>
                )}
            </ImageListContainer>
            <InputContainer>
            <ImagePreviewContainer>
                {selectUrl ? 
                    (<ImagePreview src={selectUrl && selectUrl.url} />) : (<Msg>선택된 이미지 없음</Msg>) }
                <Button onClick={onDeleteImg}>삭제</Button>
            </ImagePreviewContainer>
            <Form onSubmit={onSubmitImage} action="POST">
                <Input
                     name="file"
                     type="file"
                     accept='image/jpg, image/png, image/jpeg, image/gif'
                     onChange={imgOnChange}
                     required
                />
                <Button type="submit">이미지 추가</Button>
            </Form>
            </InputContainer>
        </Container>
    );
};

export default ImageJSX ;