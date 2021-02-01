import React, { useEffect, useState } from 'react' ;
import { withCookies } from 'react-cookie';
import styled from 'styled-components' ;
import { axiosApi } from '../../Util/api';

import { useInputImg } from '../../Util/fucntion' ;

const Container = styled.div`
    
    width : 600px ;
    height : 400px ;
    
    padding : 20px ;

    background-color : #fff ;
    border : 1px solid #111 ;

    overflow : hidden ;
`;

const ImageListContainer = styled.div`
    float : left ;
    width : 50% ;
    height : 100% ;
    
    border : 1px solid #111 ;

    overflow-x : scroll ;

    &::-webkit-scrollbar {
        width : 0.4em ;  
    }
    &::-webkit-scrollbar,
    &::-webkit-scrollbar-thumb {
        overflow : visible ;
        border-radius : 4px ;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.2) ; 
    }
`;

const InputContainer = styled.div`
    float : right ;

    width : 48% ;
    height : 100% ;

    border : 1px solid ;
`;

const ImagePreviewContainer = styled.div`
    width : 100% ;
    margin-bottom : 30px ;
`;

const ImagePreview = styled.img`
    width : 100% ;
    height : 160px ;

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

    border : 1px solid #111 ;
    border-radius : 15px ;

    padding : 4px 8px ;
`;

const ImageContent = styled.div`
    /* user-select : none ; */
    /* cursor : pointer ; */
`;

const Image = () => {

    const [ imageList, setImageList ] = useState([]) ;
    const [ selectUrl, setSelectUrl ] = useState('') ;

    const { 
        file : img, 
        url : imgUrl, 
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
    }, []) ;

    useEffect(() => {
        console.log(selectUrl) ;
    }, [selectUrl]) ;

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

    return (
        <Container>
            <ImageListContainer onClick={onClickImage}>
                {imageList && imageList.map((content, index) => 
                    <ImageContent key={index}>
                        {content.url}
                    </ImageContent>
                )}
            </ImageListContainer>
            <InputContainer>
            <ImagePreviewContainer>
                <ImagePreview src={selectUrl && selectUrl.url} />
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

export default withCookies(Image) ;