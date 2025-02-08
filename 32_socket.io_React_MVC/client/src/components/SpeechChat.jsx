export default function SpeechChat({ chat }) {
  // chat:{content, type}
  return (
    <>
      <div className={`speech ${chat.type}`}>
        {chat.type == "other" && <span className="nickname">nickname</span>}
        <span className="msg-box">{chat.content}</span>
      </div>
    </>
  );
}
