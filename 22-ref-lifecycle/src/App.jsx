import LifeCycleClass from "./components/LifeCycleClass";
import LifeCycleFunc from "./components/LifeCycleFunc";
import Practice1 from "./components/practice/Practice1";
import { RefClass1, RefClass2 } from "./components/RefClass";
import { RefFunc1, RefFunc2 } from "./components/RefFunc";

function App() {
  return (
    <>
      <div>
        <RefClass1 />
        <RefClass2 />
        <RefFunc1 />
        <RefFunc2 />
        <LifeCycleClass />
        <LifeCycleFunc />
        <h2>실습</h2>
        <Practice1 />
      </div>
    </>
  );
}

export default App;
