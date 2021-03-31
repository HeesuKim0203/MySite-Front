import { faReact, faJsSquare, faHtml5, faCss3Alt, faLaravel, faNode, faLinux, faJava, faAndroid, faPython } from '@fortawesome/free-brands-svg-icons' ;
import { faWalking, faComment, faHiking } from '@fortawesome/free-solid-svg-icons' ;

export const blogContentNum = 9 ;
export const blogPageContentNum = 5 ;

export const LanguageContentNum = 4 ;

export const language = [
    { text : 'React' , icon : faReact, color : '#1e88e5' },
    { text : 'JS' , icon : faJsSquare, color : '#ffa726' },
    { text : 'HTML' , icon : faHtml5, color : '#e65100 ' },
    { text : 'CSS3' , icon : faCss3Alt, color : '#01579b' },
    { text : 'Laravel', icon : faLaravel, color : '#d32f2f' },
    { text : 'NodeJs', icon : faNode, color : '#43a047' },
    { text : 'linux', icon : faLinux, color : '#e65100' },
    { text : 'Java', icon : faJava, color : '#b71c1c' },
    { text : 'Android', icon : faAndroid, color : '#66bb6a' },
    { text : 'Python', icon : faPython , color : '#0277bd'}
] ;

export const otherType = [
    { text : '일상' , icon : faWalking },
    { text : '이모저모' , icon : faComment },
    { text : '여행기' , icon : faHiking },
] ;

// asideTitle 길이와 little data의 갯수를 맞춰주세요
export const asideTitle = [ '프로그래밍 언어', '잡담' ] ;
export const coreData = [ language, otherType ] ;

export const searchCoreData = [ ...language, ...otherType ] ;

export const typeChartData = language.map(data =>({ type : data.text, num : 0, color : data.color }))