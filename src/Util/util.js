import { fab } from '@fortawesome/free-brands-svg-icons' ;
import { fas } from '@fortawesome/free-solid-svg-icons' ;

export const blogContentNum = 9 ;
export const blogPageContentNum = 5 ;

export const LanguageContentNum = 4 ;

export const language = [
    { text : 'React' , icon : fab.faReact, color : '#1e88e5' },
    { text : 'JS' , icon : fab.faJsSquare, color : '#ffa726' },
    { text : 'HTML' , icon : fab.faHtml5, color : '#e65100 ' },
    { text : 'CSS3' , icon : fab.faCss3Alt, color : '#01579b' },
    { text : 'Laravel', icon : fab.faLaravel, color : '#d32f2f' },
    { text : 'NodeJs', icon : fab.faNode, color : '#43a047' }
] ;

export const otherType = [
    { text : '일상' , icon : fas.faWalking },
    { text : '이모저모' , icon : fas.faComments },
    { text : '여행기' , icon : fas.faHiking },
] ;

// asideTitle 길이와 little data의 갯수를 맞춰주세요
export const asideTitle = [ '프로그래밍 언어', '잡담' ] ;
export const coreData = [ language, otherType ] ;