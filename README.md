# My Site
> 학교 과제와 프로그래밍을 해 오면서 여러 개발자분들의 경험담에 도움을 받았습니다.
> 그래서 저도 저의 경험담을 공유하고 싶어서 개발하게 되었습니다.

:running: [방문하기](https://blog.heesu99.site)  
**피드백 전부 환영입니다!**

### 2021.06.01~2021.06.03
### 이슈 해결 !
#### 1. Pagination 버튼이 서버에서 데이터가 오지않는 예외시 사라지지 않는 버그 해결
    buttonData가 없으면 사라지게 설정 -> redux 오류 모드 설정 필요:cold_sweat: 
#### 2. https://ik.imagekit.io 이용한 document 페이지 이미지 렌더링 개선
    ec2 서버와 연동(DB 일부 수정) 
    게시글 페이지의 이미지 렌더링 개선 필요:sweat: 

---

### 2021.05.26~2021.05.30
#### 1. PROJECT 영상 렌더링 안되는 부분 수정 및 각 면 위치 일부 수정
    사각형의 각 면의 위치 수정 
    각 면의 영상은 실행 X (렌더링 속도 UP) 
#### 2. CSS 일부 수정(src/Routes/Project.js, src/Routes/ButtonContainer.js, src/Routes/BlogPageContent.js)
    CSS 중복 코드 및 필요없는 코드 제거 
    Button 색 변경 및 크기 수정 
    BlogPageContent 컨텐츠 글자 크기 수정 
#### 3. PagiNation Right Left 버튼 추가
    버튼 추가, html 구조 변경 
    이벤트 추가 

---

### 2021.05.21~2021.05.22
#### 1. INFORMATION 페이지 리팩토링 작업
    텍스트 변수화 
    중복 코드 제거 
#### 2. Three.js 부분 마우스 클릭 렌더링 일부 수정
    처음 클릭한 뒤 다음 클릭이 Three.js 애니메이션에 시간에 적용되지 않는 문제 해결 

---

### 2021.05.20
### 이슈 해결 !
#### 1. IMFORMATION 페이지 Project 상세 설명 부분 오타 수정
    좌클릭 ->> 우클릭으로 변경 


---

### 2021.05.11
#### 1. 구글 번역기 이슈 해결 
    https://lifesaver.codes/answer/make-react-resilient-to-dom-mutations-from-google-translate 
    구글 번역기는 해당 노드 안에 text를 font태그로 변경 
    그 때문에 Text가 Node로 변경되어 React가 인식이 불가능해서 발생하는 에러였습니다. 
    저는 위 링크를 통해 해결 했습니다. 


---