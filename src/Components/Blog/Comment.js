import React, { useState } from 'react' ;
import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { fas } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    width : 100% ;

    float : left ;

    border-top : 1px solid #cfd8dc ;

    padding : 30px ;

    &:first-child {
        border-top : none ;
        margin-top : 30px ;
    }
`;

const Header = styled.div`
    overflow : hidden ;
`;

const HeaderTool = styled.div`
    width : 50% ;

    float : right ;

    text-align : right ;
`;

const Button = styled.button`
    all : unset ;

    color : #616161 ;
    
    font-weight : 550 ;

    font-size : 11px ;
    
    cursor : pointer ;
`;

const UpdateButton = styled(Button)`
    margin-right : 10px ;
`;

const DeleteButton = styled(Button)`
    margin-right : 10px ;
`;

const CommentCommentAdd = styled(Button)`

`;

const Main = styled.div`
    padding : 15px 20px ;
`;

const UserName = styled.span`
    display : inline-block ;

    text-decoration : underline ;

    font-weight : 600 ;

    margin-left : 5px ;
`;

const Date = styled.span`
    display : inline-block ;

    padding-left : 10px ;

    font-size : 12px ;
`;

const Text = styled.p`

`;

const Form = styled.form`
    width : 100% ;
`;

const Input = styled.input`
    all : unset ;

    width : 100px ;
    height : 20px ;
    
    border : 1px solid #999 ;

    padding-left : 2px ;

    text-align : left ;

    font-size : 12px ;
`;

const TextArea = styled.textarea`
    all : unset ;
    
    padding : 3px ;

    border : 1px solid #999 ;

    width : 100% ;
    height : 80px ;
`;

const SubmitButton = styled(Button)`

    padding : 5px ;

    margin-top : 10px ;

    text-align : center ;
    font-size : 14px ;

    border : 1px solid #999 ;
`;

const CheckButton = styled(Button)`

    font-size : 14px ;

    padding : 2px ;

    margin-left : 10px ;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    text-decoration : none ;
`;

const Comment = ({ comment, deleteCommnet, onUpdateComment, onCheckUser }) => {

    const { id, text, user_name, updated_at } = comment ;

    const [ checkUser, setCheckUser ] = useState(false) ;
    const [ updateMode, setUpdateMode ] = useState(false) ;
    const [ updateText, setUpdateText ] = useState('') ;
    const [ password, setPassword ] = useState('') ;
    
    function onChangePassword(e) {
        setPassword(e.target.value) ;
    }

    function onSetUpdateMode(e) {
        setUpdateMode(!updateMode) ;
        setUpdateText(text) ;
    }

    function updateTextOnChange(e) {
        setUpdateText(e.target.value) ;
    }

    return (
        <Container>
            <Header>
                <StyledFontAwesomeIcon icon={fas.faUser} />
                <UserName>
                    {user_name}
                </UserName>
                <Date>
                    {updated_at}
                </Date>
                <HeaderTool>
                {checkUser ? (
                        <>
                            <UpdateButton onClick={onSetUpdateMode}>
                                수정
                            </UpdateButton>
                            <DeleteButton onClick={() => deleteCommnet(id)}>
                                삭제
                            </DeleteButton>
                            <CommentCommentAdd>
                                댓글 달기
                            </CommentCommentAdd>
                        </>
                    ) : (
                    <Form onSubmit={async (e) => {
                            const result = await onCheckUser(e, comment, password) ;
                            
                            return result ? setCheckUser(!checkUser) : null ;
                        }}>
                        <Input 
                            type="text" 
                            value={password}
                            onChange={onChangePassword} 
                            placeholder="password"
                        />
                        <CheckButton type="submit">확인</CheckButton>
                    </Form>
                )}
                </HeaderTool>
            </Header>
            <Main>
                {updateMode ? (
                    <Form onSubmit={(e) => {
                            onUpdateComment(e, updateText, comment) ;
                            setUpdateMode(false) ;
                        }}>
                        <TextArea 
                            value={updateText} 
                            onChange={updateTextOnChange}
                        />
                        <SubmitButton type="submit">수정 하기</SubmitButton>
                    </Form>
                    ) : (
                    <Text>
                        {text}
                    </Text>
                    )
                }
            </Main>
        </Container>
    );
};

export default Comment;