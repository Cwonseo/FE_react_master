import styled, { keyframes } from 'styled-components';

const Father = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Btn = styled.button`
  color: white;
  border-radius: 15px;
  border: 0;
`;
const Emoji = styled.span`
  font-size: 40px;
`;
const rotationanimation = keyframes`
0%{
  transform: rotate(0deg);
  border-radius: 0px;
}50%{
  
  border-radius: 100px;
}100%{
  transform: rotate(360deg);
  border-radius: 100px;
}
`;
const Box = styled.div`
  //props 통한 컴포넌트 설정
  background-color: ${(props) => props.theme.textColor};
  width: 200px;
  height: 200px;
  display: flex;
  animation: ${rotationanimation} 3s linear infinite;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 70px;
    }
    &:active {
      opacity: 0;
    }
  }
`;
// const BoxTwo = styled.div`
//   background-color: tomato;
//   width: 100px;
//   height: 100px;
// `;
const Circle = styled(Box)`
  //Box의 모든 속성을 들고 옴. 컴포넌트 확장(extend)
  border-radius: 50px;
`;
const Text = styled.span`
  color: white;
  font-size: 40px;
`;
const Input = styled.input.attrs({ required: true, maxLength: 5 })`
  //속성값을 설정해줄 수 있음.
  background-color: tomato;
`;
const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100vw;
  height: 100vh;
`;
function App() {
  return (
    <Wrapper>
      <Father>
        <Box bgColor="teal" />
        <Btn> Log in</Btn>
        <Btn as="a" href="/">
          Log in A
        </Btn>
        {/* 태그는 a로 바뀐다 */}
        <Circle bgColor="tomato" />
        <Input />
        <Input />
        <Input />

        <Box>
          <Emoji as="p">🥰</Emoji>
        </Box>
        <Emoji>😍</Emoji>
      </Father>
    </Wrapper>
  );
}

export default App;
