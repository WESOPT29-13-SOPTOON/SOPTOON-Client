# SOPTOON

### Tech
![react](https://img.shields.io/badge/-react-58c3ff?labelColor=white&logo=React)
![css3](https://img.shields.io/badge/-css3-white?labelColor=blue&logo=CSS3)
![html5](https://img.shields.io/badge/-html5-fe765a?labelColor=white&logo=HTML5)
![javascript](https://img.shields.io/badge/-javascript-ffd700?labelColor=white&logo=JavaScript)


### Code convention
- eslint, prettier사용(이미지 별첨)
- husky 사용
- camel case 기본, 폴더이름 소문자 시작, 파일이름(컴포넌트만) 대문자 시작
- Styled컴포넌트 이름 Styled 붙여주기, 가장 상위 styled 컴포넌트 이름(StyledRoot), styled 컴포넌트 안에서 className 쓰지 않기
- 함수 선언 방식 : arrow function
- 함수 이름 : 동사 시작 => is : return [Boolean]
- event handler의 이름 : handle로 시작.
- 미디어 쿼리 : 소희언니꺼 참고(react-responsive).
- api 호출 함수 : api.js에 넣어놓기.
- 배열과 객체는 리터럴로 선언한다.
- 배열, 객체 복사는 spread연산자 사용하기.
- 객체선언시 축약표현 사용하기(object short handed)


### Commit message convention
feat: 새로운 기능의 추가  
fix: 버그 수정
docs: 문서 수정
style: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락, 코드 자체의 변경이 없는 경우)
refactor: 코드 리펙토링
test: 테스트 코트, 리펙토링 테스트 코드 추가
chore: 빌드 업무 수정, 패키지 매니저 수정(ex .gitignore 수정 같은 경우)


### Git Branch convention
Git Flow

feat[] : 기능단위로 나누어서 브랜치 만들기


### Directory Structure
세미나때 그대로

⎡ 📁 Public
⎜  ⎿ index.html
⎣ 📁 src
   ⎿ 📁 assets
   ⎹  ⎿ 📁 fonts
   ⎹  ⎿ 📁 icons
   ⎹  ⎿ 📁 images
   ⎿ 📁 components
   ⎹  ⎿ 📁 common
   ⎹  ⎮  ⎿ 
   ⎿ 📁 libs
   ⎹  
   ⎹  ⎿ api.js
   ⎿ 📁 pages
   ⎿ APP.js
   ⎿ index.js



