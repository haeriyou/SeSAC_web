import "bootstrap/dist/css/bootstrap.css";
import Start from "./src/components/Start";
import Practice1 from "./src/components/Practice1";
import io from "socket.io-client";
import Chatting from "./src/components/Chatting1";

const socket = io.connect("http://localhost:8080", { autoConnect: false });

function App() {
  return (
    <div>
      <h1>소켓으로 채팅 만들기!</h1>
      {/* <Start /> */}
      {/* <Practice1 /> */}
      <Chatting />
    </div>
  );
}

export default App;
