import styled from 'styled-components';

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border-radius: 15px;
  border: 0;
`;

const Box = styled.div`
  //props 통한 컴포넌트 설정
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
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
function App() {
  return (
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
    </Father>
  );
}

export default App;
