import { useEffect, useState } from 'react' ;
import styled from 'styled-components' ;
import Comment from './Comment';

import { 
    insertComment,
    deleteComment,
    updateComment,
    getCommets,
    checkUser
} from '../../Util/api';

const Container = styled.div`
    width : 100% ;
    
    overflow : hidden ;

    color : ${props => props.theme.color.fontColor} ;
`;

const CommetsWrap = styled.div`

    width : 100% ;

    display : flex ;

    justify-content : center ;
    align-items : center ;

    margin-top : 30px ;

    float : left ;
`;

const Form = styled.form`
    width : 80% ;

    margin : 0 auto ;

    @media ${props => props.theme.mobileS} {
        width : 90% ;
    }  
`;

const Input = styled.input`
    all : unset ;

    width : 180px ;
    height : 30px ;
    
    border-bottom : 1px solid ${props => props.theme.color.fontColor} ;

    padding-left : 5px ;

    @media ${props => props.theme.mobileS} {
        width : 30% ;
        height : 15px ;
        padding-left : 3px ;

        font-size : 12px ;
    }
`;

const UserName = styled(Input)`
    margin-right : 8px ;
`;

const UserPassword = styled(Input)`

`;

const Text = styled.textarea`
    display : block ;

    all : unset ;
    
    border : 1px solid ${props => props.theme.color.fontColor} ;

    width : 90% ;

    padding : 7px ;

    margin-top : 10px ;

    @media ${props => props.theme.mobileS} {
        width : 95% ;
        font-size : 12px ;
    }
`;

const Button = styled.button`
    all : unset ;

    width : 100px ;
    
    padding : 10px ;
    border : 1px solid #999 ;

    margin-top : 10px ;

    text-align : center ;
    font-size : 14px ;

    font-weight : 550 ;

    cursor : pointer ;

    @media ${props => props.theme.mobileS} {
        width : 50px ;
        font-size : 9px ;
        padding : 3px 5px ;
        font-weight : 500 ;
    }
`;

const CommentContainer = ({ contentId }) => {

    const [ commentsList, setCommentsList ] = useState([]) ;

    const [ userName, setUserName ] = useState('') ;
    const [ password, setPassword ] = useState('') ;
    const [ text, setText ] = useState('') ;

    async function onSubmitCommnet(e) {
        e.preventDefault() ;

        const commentData = new FormData() ;

        commentData.append('user_name', userName) ;
        commentData.append('password', password) ;
        commentData.append('text', text) ;
        commentData.append('content_id', contentId) ;

        try {
            const {
                data : {
                    result
                }
            } = await insertComment(commentData) ;

            if(result) {
                setUserName('') ;
                setPassword('') ;
                setText('') ;
                setCommentsList([ ...commentsList, result ]) ;
                alert('댓글을 입력 하였습니다.') ;
            }
        }catch {
            alert('댓글 입력 실패하였습니다.') ;
        }finally {

        }
    }

    async function deleteCommnet(id) {
        try {
            const {
                data : {
                    result
                }
            } = await deleteComment(id) ;

            if(result) {
                const findId = commentsList.findIndex(comment => comment.id === id) ;
    
                setCommentsList([
                    ...commentsList.slice(0, findId),
                    ...commentsList.slice(findId + 1, commentsList.length)
                ]) ;
                alert('댓글을 삭제 하였습니다.') ;
            }
        }catch {
            alert('삭제 실패하였습니다.') ;
        }finally {
        }
    }

    async function onUpdateComment(e, text, commentData) {
        e.preventDefault() ;

        try {

            const updateData = new FormData() ;

            updateData.append('text', text) ;
            updateData.append('_method', 'PUT') ;

            const {
                data : {
                    result
                }
            } = await updateComment(updateData, commentData.id) ;

            if(result) {

                const findId = commentsList.findIndex(comment => comment.id === commentData.id) ;
                setCommentsList([
                    ...commentsList.slice(0, findId),
                    {
                        ...commentData,
                        text
                    },
                    ...commentsList.slice(findId + 1, commentsList.length)
                ]) ;
                alert('댓글을 수정 하였습니다.') ;
            }
            
        }catch {
            alert('수정 실패하였습니다.') ;
        }finally {

        }
    }

    async function onCheckUser(e, commentData, password) {
        e.preventDefault() ;

        let resultValue ;

        try {

            const userData = new FormData() ;

            userData.append('comment_id', commentData.id) ;
            userData.append('user_name', commentData.user_name) ;
            userData.append('password', password) ;

            const {
                data : {
                    result
                }
            } = await checkUser(userData) ;

            resultValue = result ;

        }catch {

            resultValue = false ;

        }finally {
            
        }

        return resultValue ;
    }

    function onChangeUserName(e) {
        setUserName(e.target.value) ;
    }

    function onChangePassword(e) {
        setPassword(e.target.value) ;
    }

    function onChangeText(e) {
        setText(e.target.value) ;
    }

    useEffect(() => {

        async function getCommnetsList() {

            try {
                const {
                    data
                } = await getCommets(contentId) ;

                setCommentsList(data) ;

            }catch {

            }finally {

            }
        }

        if(contentId) 
            getCommnetsList() ;

        return () => {
            setCommentsList(null) ;
        }

    }, [contentId]) ;

    return (
        <Container className="notranslate">
            { commentsList && commentsList.map((comment, index) => (
                <Comment 
                    key={index} 
                    comment={comment} 
                    deleteCommnet={deleteCommnet}
                    onUpdateComment={onUpdateComment}
                    onCheckUser={onCheckUser}
                />
            ))}
            <CommetsWrap>
                <Form onSubmit={onSubmitCommnet}> 
                    <UserName 
                        type="text" 
                        placeholder="name" 
                        required 
                        value={userName} 
                        onChange={onChangeUserName} 
                    />
                    <UserPassword 
                        type="text" 
                        placeholder="password" 
                        required 
                        value={password} 
                        onChange={onChangePassword}
                    />
                    <Text 
                        type="text" 
                        rows="4" 
                        placeholder="Please leave comments." 
                        required 
                        value={text} 
                        onChange={onChangeText} 
                    />
                    <Button type="submit">Comment!</Button>
                </Form>
            </CommetsWrap>
        </Container>
    );
};

export default CommentContainer ;