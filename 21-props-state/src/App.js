import { ClassProps, ClassProps2 } from "./components/ClassProps";
import ClassState from "./components/ClassState";
import Counter from "./components/Counter";
import {
  FunctionProps,
  FunctionProps2,
  FunctionProps3,
  FunctionProps4,
} from "./components/FunctionProps";
import FunctionState from "./components/FunctionState";
import HandlerEx from "./components/practice/ex/HandlerEx";
import ClassStatePrac from "./components/practice/ClassStatePrac";
import FunctionStatePrac from "./components/practice/FunctionStatePrac";
import SyntheticEvent from "./components/SyntheticEvent";
import EventPrac2 from "./components/practice/EventPrac2";
import EventPrac3 from "./components/practice/EventPrac3";
import EventPrac4 from "./components/practice/EventPrac4";
import EventPrac5 from "./components/practice/EventPrac5";
import EntirePractice from "./components/practice/EntirePractice";
import PropsMap from "./components/PropsMap";
import PropsMap2 from "./components/PropsMap2";
import Alphabet from "./components/Alphabet";
import MapPrac1 from "./components/practice/MapPrac1";
import MapPrac2 from "./components/practice/MapPrac2";

function App() {
  const arr = [
    { name: "peach", krPrice: 10000, number: 5 },
    { name: "strawberry", krPrice: 15000, number: 1 },
    { name: "pear", krPrice: 5000, number: 3 },
    { name: "apple", krPrice: 10000, number: 15 },
  ];
  return (
    <div>
      <h2>Props 사용</h2>
      {/* <h3>클래스형 컴포넌트 props 사용해보기</h3>
      <ClassProps name="루피" color="pink" nickname="공주" />

      <ClassProps2
        name="루피"
        color="pink"
        nickname="공주"
        // fontColor="blue"
      />

      <h3>함수형 컴포넌트 props 사용해보기</h3>
      <FunctionProps name="사과" number={5} krPrice={10000} />
      <FunctionProps2 name="사과" number={5} krPrice={10000} />
      <FunctionProps3 name="샤인머스캣" number={1} krPrice={15000} />
      <FunctionProps4 name="딸기" number={1} krPrice={20000}>
        <span style={{ color: "red" }}>children 요소입니다!!!!</span>
      </FunctionProps4>
      <FunctionProps4 name="딸기">
        <span style={{ color: "red" }}>children 요소입니다!!!!</span>
      </FunctionProps4> */}
      <h2>State</h2>
      <h3>클래스형 state</h3>
      <ClassState />

      <h3>함수형 state</h3>
      <FunctionState />

      <h3>State 실습 (클래스형 컴포넌트)</h3>
      <ClassStatePrac />

      <h3>State 실습 (함수 컴포넌트)</h3>
      <FunctionStatePrac />

      <h2>이벤트</h2>
      <SyntheticEvent />
      <Counter />

      <h2>실습</h2>
      <HandlerEx />
      <EventPrac2 />
      <EventPrac3 />
      <EventPrac4 />
      <EventPrac5 />

      <h2>실습 문제</h2>
      <EntirePractice />

      <h2>map 사용</h2>
      <PropsMap arr={arr} />
      <PropsMap2 arr={arr} />
      <PropsMap2 />
      <Alphabet />

      <h2>map 실습</h2>
      <MapPrac1 />
      <MapPrac2 />
    </div>
  );
}

export default App;
