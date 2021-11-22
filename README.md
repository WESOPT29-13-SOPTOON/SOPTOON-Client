# SOPTOON

## 개발자
|권소희|서혜은|김지윤|

|-|-|-|
|![소희언니 미모티콘](https://user-images.githubusercontent.com/44703262/142837052-c89f5824-1253-4283-8d62-fda4cb42ad9d.png)|![혜은이 미모티콘](https://user-images.githubusercontent.com/44703262/142837086-e16ad727-b775-4292-8f65-9e5a47a36bea.png)|![주먹 미모티콘](https://user-images.githubusercontent.com/44703262/142837174-d1ad511f-7d87-4248-bd77-e3ce496233bc.png)|

|[@Sohee Kwon](https://github.com/sohee-K)|[@Hyeeun Seo](https://github.com/henization)|[@Jiyun Kim](https://github.com/small-j)|

## Tech
![react](https://img.shields.io/badge/-react-58c3ff?labelColor=white&logo=React)
![javascript](https://img.shields.io/badge/-javascript-ffd700?labelColor=white&logo=JavaScript)
![html5](https://img.shields.io/badge/-html5-fe765a?labelColor=white&logo=HTML5)
![css3](https://img.shields.io/badge/-css3-white?labelColor=blue&logo=CSS3)



## Code convention
- eslint, prettier사용
- 변수, 함수 Camel case 기본, 폴더이름 소문자 시작, 파일 이름(컴포넌트만) 대문자 시작
- Styled 컴포넌트 : 컴포넌트 이름 앞에 Styled 붙여주기, 가장 상위 styled 컴포넌트 이름 => StyledRoot, styled 컴포넌트 안에서 className 쓰지 않기
- 함수 선언 방식 : arrow function
- 함수 이름 : 동사 시작 ex) is : return [Boolean]
- Event handler의 이름 : handle로 시작
- 미디어 쿼리 : 소희 언니꺼 참고(react-responsive)
- api 호출 함수 : api.js에 넣어놓기
- 배열, 객체는 리터럴로 선언한다
- 배열, 객체 복사는 spread연산자 사용하기
- 객체선언시 축약표현 사용하기(object-shorthand)



## Commit message convention
- feat: 새로운 기능의 추가  
- fix: 버그 수정
- docs: 문서 수정
- style: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락, 코드 자체의 변경이 없는 경우)
- refactor: 코드 리팩토링
- test: 테스트 코트, 리팩토링 테스트 코드 추가
- chore: 빌드 업무 수정, 패키지 매니저 수정(ex .gitignore 수정 같은 경우)



## Git Branch convention
### Git Flow 방식

- main : 최종적으로 배포되는 브랜치

- develop : feature 브랜치가 merge되는 개발의 중심 브랜치

- feature/{구현기능명} : develop 브랜치 아래에서 컴포넌트 기능 단위로 나누어 브랜치 만들기



## Directory Structure
```
⎡ 📁 Public
⎜  ⎿ index.html
⎣ 📁 src
   ⎿ 📁 assets
   ⎹  ⎿ 📁 fonts
   ⎹  ⎿ 📁 icons
   ⎹  ⎿ 📁 images
   ⎿ 📁 components
   ⎹  ⎿ 📁 common 
   ⎿ 📁 libs
   ⎹  ⎿ 📁 constant
   ⎹  ⎮ ⎿ colors.js
   ⎹  ⎿ api.js
   ⎿ 📁 pages
   ⎿ APP.js
   ⎿ index.js
```


