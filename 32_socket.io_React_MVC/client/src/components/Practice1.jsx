import { useEffect } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:8080", {
  autoConnect: false,
});
export default function Practice1() {
  const initSocketConnect = () => {
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    initSocketConnect();
  }, []);
  const events = ["bye", "study", "hello"];

  const emitToServer = (eventName) => {
    socket.emit(eventName, eventName);
  };
  return (
    <>
      <h3>실습1번</h3>
      {events.map((event) => (
        <button key={event} onClick={() => emitToServer(event)}>
          {event}
        </button>
      ))}
    </>
  );
}
