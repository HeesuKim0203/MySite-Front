import { 
    faReact, 
    faJsSquare, 
    faHtml5, 
    faCss3Alt, 
    faLaravel, 
    faNode, 
    faLinux, 
    faJava, 
    faAndroid, 
    faPython,
    faAws 
} from '@fortawesome/free-brands-svg-icons' ;
import { useState } from 'react' ;

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
    { text : 'AWS', icon : faAws, color : '#f57f17', project : 1, rating : rank.B }
] ;  


// asideTitle 길이와 little data의 갯수를 맞춰주세요
export const asideTitle = [ '프로그래밍 언어' ] ;
export const coreData = [ language ] ;

export const searchCoreData = [ ...language ] ;

export const webData = {
    webUrl : 'https://blog.heesu99.site',
    titleData : '초보 프로그래머',
    name : 'heesu99'
} ;

export const FIXEDMENUVALUE = [ 260, 810, 2800 ] ;

// Fixed 메뉴 함수
function moveScroll(y) {
  window.scroll({
      behavior : 'smooth',
      top : y
  }) ;
}

export const MakeFixMenu = dataArr => {
  return dataArr.map(data => {
    return () => {
      moveScroll(data) ;
    }
  })
} ;

export const homeText = {
  // Title, 텍스트 배열 변수명 같도록 지정할 것
  SKILL : 'Skill',
  PROJECT : 'Project',
  BLOG : 'Blog',
  Skill : [
    "제가 현재 쓸 수 있는 개발 스택입니다.",
    "클릭 시 프로젝트 경험 횟수와 랭크가 있습니다."
  ],
  Project : [
    "제가 현재까지 진행한 개인 프로젝트 입니다."
  ],
  threejs : [
    "사람모양의 아이콘을 클릭 해 보세요.",
    "각 면을 우클릭 시 상세 설명이 나옵니다."
  ],
  Blog : [
    "저의 게시물 입니다.",
    "정보 공유와 저의 성장을 기록하기 위해서 만들었습니다."
  ],
  returnJSX(str, Text, TabeltLHiddenText) {

    let jsx = [] ;

    if (this.hasOwnProperty(str)) {
      jsx = this[str].map((text, index) => <Text key={index}>{text}</Text>) ;
    }

    if(str === this.PROJECT) {
      jsx = [
        ...jsx,
        ...this.threejs.map((text, index) => <TabeltLHiddenText key={(index + this[str].length)}>{text}</TabeltLHiddenText>)
      ] ;
    }

    return jsx ;
  }
} ;

export function ApiHooks (api, apiData) {

    const [ data, setData ] = useState([]) ;
    const [ error, setError ] = useState('') ;
    const [ load, setLoad ] = useState(true) ;
  
    const getData = async () => {
        try {

          const {
              data : { result }
          } = await api(apiData) ;

          setData(result) ;

        }catch {

          setError("서버로부터 데이터를 불러올 수 없습니다.") ;

        }finally {

          setLoad(false) ;
        }
    } ;
  
    return { data, error, load, getData, setLoad } ;
  }