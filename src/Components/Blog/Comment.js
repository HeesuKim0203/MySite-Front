import { useState } from 'react' ;
import styled from 'styled-components' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
    width : 100% ;

    float : left ;

    border-bottom : 1px solid #cfd8dc ;

    color : ${props => props.theme.color.fontColor} ;

    padding : 30px ;

    &:last-child {
        border-bottom : none ;
    }

    &:first-child {
        margin-top : 30px ;
    }

    @media ${props => props.theme.mobileS} {
        padding : 10px ;
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
    
    font-weight : 550 ;

    font-size : 11px ;
    
    cursor : pointer ;
    margin-right : 10px ;

    @media ${props => props.theme.mobileS} {
        font-weight : 500 ;
    }
`;

const UpdateButton = styled(Button)`
`;

const DeleteButton = styled(Button)`
`;

const CommentCommentAdd = styled(Button)`
    margin-right : 0px ;
`;

const Main = styled.div`
    padding : 15px 20px ;
    
    @media ${props => props.theme.mobileS} {
        padding : 7px 10px ;
    }
`;

const UserName = styled.span`
    display : inline-block ;

    text-decoration : underline ;

    font-weight : 600 ;

    margin-left : 5px ;

    @media ${props => props.theme.mobileS} {
        font-size : 13px ;
        margin-left : 4px ;
    }
`;

const Date = styled.span`
    display : inline-block ;

    padding-left : 10px ;

    font-size : 12px ;

    @media ${props => props.theme.mobileS} {
        font-size : 7px ;
        padding-left : 5px ;
    }
`;

const Text = styled.p`
    @media ${props => props.theme.mobileS} {
        font-size : 12px ;
        margin-top : 5px ;
    }
`;

const Form = styled.form`
    width : 100% ;
`;

const Input = styled.input`
    all : unset ;

    width : 100px ;
    height : 20px ;
    
    border : 1px solid ${props => props.status} ;

    padding-left : 2px ;

    text-align : left ;

    font-size : 12px ;

    @media ${props => props.theme.mobileS} {
        width : 60px ;
        font-size : 9px ;
        height : 15px ;
    }
`;

const TextArea = styled.textarea`
    all : unset ;
    
    padding : 3px ;

    border : 1px solid #999 ;

    width : 100% ;
    height : 80px ;

    @media ${props => props.theme.mobileS} {
        height : 40px ;
        font-size : 9px ;
    }
`;

const SubmitButton = styled(Button)`

    padding : 5px ;

    margin-top : 10px ;

    text-align : center ;
    font-size : 14px ;

    border : 1px solid #999 ;

    @media ${props => props.theme.mobileS} {
        font-size : 9px ;
        padding : 3px 5px ;
    }
`;

const CheckButton = styled(Button)`

    font-size : 14px ;

    padding : 2px ;

    margin-left : 10px ;

    @media ${props => props.theme.mobileS} {
        font-size : 9px ;
    }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    text-decoration : none ;

    @media ${props => props.theme.mobileS} {
        font-size : 14px ;
    }
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
        <Container className="notranslate">
            <Header>
                <StyledFontAwesomeIcon icon={ faUser } />
                <UserName>
                    {user_name}
                </UserName>
                <Date>
                    {updated_at.substring(0, 10) + " "+ updated_at.substring(11, 19)}
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
                            {/* <CommentCommentAdd>
                                댓글 달기
                            </CommentCommentAdd> */}
                        </>
                    ) : (
                    <Form onSubmit={async (e) => {
                            const result = await onCheckUser(e, comment, password) ;
                            setPassword('') ;
                            return result ? setCheckUser(!checkUser) : alert('비밀번호가 틀렸습니다.') ;
                        }}>
                        <Input 
                            status={checkUser ? '#999' : 'red'}
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