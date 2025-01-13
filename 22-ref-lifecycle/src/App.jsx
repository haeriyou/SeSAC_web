import LifeCycleClass from "./components/LifeCycleClass";
import LifeCycleFunc from "./components/LifeCycleFunc";
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
      </div>
    </>
  );
}

export default App;
