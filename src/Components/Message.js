import styled from 'styled-components' ;
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
// import { faTimes } from '@fortawesome/free-solid-svg-icons' ;
// import { useState } from 'react';

const ContainerMessage = styled.div`
    width : 100% ;
    
    height : 400px ;
    
    display : flex ;
    justify-content : center ;
    align-items : center ;

    font-size : 18px ;
    color : red ;
`;

// const StopWeb = styled.div`

//     position : relative ;
    
//     width : 100vw ;
//     height : 100vh ;

//     opacity : 0.6 ;
//     display : none ;
    
//     top : 0 ;
//     left : 0 ;
// `;

// const MessageAlert = styled.div`
//     position : absolute ;
    
//     z-index : 9999 ;
    
//     width : 300px ;
//     height : 500px ;

//     top : 50% - 150px ;
//     left : 50% - 250px ;

//     background-color : ${props => props.theme.color.backgroundColor} ;
//     color : ${props => props.theme.color.fontColor} ;
// `;

const Message = ({ mode, text }) => {

    // const [ stopWeb, setStopWeb ] = useState(true) ;

    // function StopWebOnClick(e) {
    //     console.log(e) ;
    // }

    // function onClickTimes(e) {
    //     setStopWeb(false) ;
    // }

    return (
        <>
            {mode ? (
            <ContainerMessage>
                {text}
            </ContainerMessage>) : (
                <>
                    {/* <StopWeb onClick={StopWebOnClick} display={stopWeb ? 'display' : 'none'} >
                        <FontAwesomeIcon icon={faTimes} onClick={onClickTimes}/>
                        <MessageAlert>
                            {text}
                        </MessageAlert>
                    </StopWeb> */}
                </>
            )}
        </>
    );
};

export default Message;