# My Site -> https://blog.heesu99.site


## 구글 번역기 이슈 해결 
https://lifesaver.codes/answer/make-react-resilient-to-dom-mutations-from-google-translate
구글 번역기는 해당 노드 안에 text를 font태그로 변경
그 때문에 Text가 Node로 변경되 React가 인식이 불가능해서 발생하는 에러였습니다.
저는 위 링크를 통해 해결 했습니다.
