# 노마드코더 React JS 마스터클래스 기반 학습

목차
**1. STYLED COMPONENTS**
**2. TYPESCRIPT**
**3. REACT ROUTER V6**
**4. CRYPTO TRACKER**
**5. STATE MANAGEMENT**
**6. TRELLO CLONE**
**7. ANIMATIONS**

## Styled Components?

- styled.div , styled.span 뒤에 ``을 붙여서 쓴다.

1. props 통한 컴포넌트 설정
   - Box라는 컴포넌트 내부에 width: ${(props) => props.wd}있다면
   - <Box wd = "14px"/>와 같이 사용 가능함!
2. 컴포넌트 확장 extend!
   - 컴포넌트의 모든 요소를 유지하면서 새로운 코드를 추가하는 것!
   - const Circle = styled(Box)`추가할 CSS 요소`
   - Box 컴포넌트 베이스에 추가한 요소만 추가됨.
3. as통한 태그변경
   - <Btn as = "a">와 같이 태그를 변경시켜 줄 수 있다.
4. attrs통한 속성값 설정
   - 속성이 반복되는 컴포넌트를 만들 때!
   - const Input = styled.input.attrs({required:true, maxLength: 10})
   - 모든 input의 태그 속성에 들어가야 하지만 styled component 이용하여 사용 가능
5. keyframes 이용한 애니메이션(normal css에서도 사용 가능)
   - const anim = keyframes`to{}from{}`
   - css 내에 animation: ${anim} 0.5s infinite; 넣기.
   - 위 코드를 이용하여 애니메이션을 만들 수 있다
   - export를 통해 다른 파일에서도 Import하여 사용 가능
6. styled components로 선언한 컴포넌트 내의 element 선택하기 :pseudo selector
   - 부모 요소 내에 태그명을 넣어 그 안에서만 작동하는 css 만들 수 있음.
   - &: hover 을 넣어 사용 가능
   - 만약 styled component 안에 있는 styled component를 선택하려면
   - ${Title}:hover{}와 같이 사용 가능
7. theme
   - 모든 색상을 가지고 있는 object
   - index.js에 선언하고 App을 감싸 준다.
   - components에서 themeProvider에 접근할 수 있음.
   - 그리고 theme을 두개를 만들고 같은 property이름을 가진다면 다크모드를 만들 수 있음.

## Typescript?
