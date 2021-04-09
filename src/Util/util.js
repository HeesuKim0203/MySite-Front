import { faReact, faJsSquare, faHtml5, faCss3Alt, faLaravel, faNode, faLinux, faJava, faAndroid, faPython } from '@fortawesome/free-brands-svg-icons' ;

export const mode = { dark : 'dark', light : 'light' } ;

export const blogContentNum = 9 ;
export const blogPageContentNum = 5 ;

export const LanguageContentNum = 4 ;

const rank = {
    'C' : ['C', '#ffb300'],
    'B' : ['B', '#43a047'],
    'A' : ['A', '#f4511e'],
    'S' : ['S', '#d81b60'] 
} ;

export const language = [
    { text : 'React' , icon : faReact, color : '#1e88e5', project : 2, rating : rank.S },
    { text : 'JS' , icon : faJsSquare, color : '#ffa726', project : 4, rating : rank.S },
    { text : 'HTML' , icon : faHtml5, color : '#e65100', project : 3, rating : rank.S },
    { text : 'CSS3' , icon : faCss3Alt, color : '#01579b', project : 3, rating : rank.S },
    { text : 'Laravel', icon : faLaravel, color : '#d32f2f', project : 1, rating : rank.A },
    { text : 'NodeJs', icon : faNode, color : '#43a047', project : 0, rating : rank.C },
    { text : 'linux', icon : faLinux, color : '#e65100', project : 3, rating : rank.B },
    { text : 'Java', icon : faJava, color : '#b71c1c', project : 1, rating : rank.B },
    { text : 'Android', icon : faAndroid, color : '#66bb6a', project : 1, rating : rank.B },
    { text : 'Python', icon : faPython , color : '#0277bd', project : 1, rating : rank.A },
] ;

export const otherType = [
    // { text : '일상' , icon : faWalking },
    // { text : '이모저모' , icon : faComment },
    // { text : '여행기' , icon : faHiking },
] ;

// asideTitle 길이와 little data의 갯수를 맞춰주세요
// '잡담'
export const asideTitle = [ '프로그래밍 언어' ] ;
export const coreData = [ language, otherType ] ;

export const searchCoreData = [ ...language, ...otherType ] ;

export const typeChartData = language.map(data =>({ type : data.text, num : 0, color : data.color }))