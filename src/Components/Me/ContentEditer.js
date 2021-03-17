import React, { useEffect, useState } from 'react' ;
import { connect } from 'react-redux';
import styled from 'styled-components' ;

import {
    axiosApi
} from '../../Util/api' ;

const Container = styled.div`
    width : 600px ;
    height : 400px ;
    
    padding : 20px ;

    background-color : #1565c0 ;
    border-radius : 20px ;

    overflow : hidden ;
`;

const ContentContainer = styled.div`
    width : 100% ;
    height : 100px ;

    color : #fff ;
    font-weight : 600 ;

    float : left ;
`;

const Form = styled.form`
    width : 100% ;
    height : 220px ;

    float : left ;
`;

const UpdateContainer = styled.textarea`

    all : unset ;

    background-color : #fff ;

    width : 100% ;
    height : 100% ;

    float : left ;
`;

const Content = styled.div`

`;

const Button = styled.button`
    all : unset ;

    float : right ;

    width : 100px ;
    height : 30px ;

    border-radius : 10px ;
    background-color : #1de9b6 ;
    border : none ;

    font-weight : 550 ;
    text-align : center ;
    cursor : pointer ;
    
    margin-top : 10px ;
`;

const ContentEditer = ({ defaultData }) => {

    const [ id, setId ] = useState(null) ;
    const [ text, setText ] = useState('') ;

    useEffect(() => {
     
        return () => {
            setText('') ;
        }
    }, []) ;

    function onClickContentTitle(e, text, id) {
        setText(text) ;
        setId(id) ;
    }

    function contentTextOnChange(e) {
        setText(e.target.value) ;
    }

    async function onUpdateContentText(e) {
        e.preventDefault() ;

        const formData = new FormData() ;

        console.log(text) ;

        formData.append('text', text) ;
        formData.append('ds', 'asdasd') ;
        formData.append('_method', 'PUT') ;

        const data = await axiosApi.updateContent(id, formData) ;

        console.log('update result : ', data) ;
    }

    return (
        <Container>
            <ContentContainer>
                { defaultData.map((content, index) => (
                    <Content 
                        key={index}
                        onClick={e => onClickContentTitle(e, content.text, content.id)}
                    >
                        {content.title}
                    </Content>
                )) }
            </ContentContainer>
            <Form onSubmit={onUpdateContentText}>
                <UpdateContainer type="text"  value={text} onChange={contentTextOnChange}/>
                <Button>수정하기</Button>
            </Form>
        </Container>
    );
};

function mapStateToProps(state) {
    const { 
        content : { 
            defaultData 
        } 
    } = state ;
    return {
        defaultData
    } ;
} ;

function mapDispatchToProps(dispatch) {
    return {
    }
} ;

export default  connect(mapStateToProps, mapDispatchToProps)(ContentEditer);