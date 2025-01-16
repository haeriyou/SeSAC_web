import "../style/Sass.scss";
import img1 from "../assets/hachi.jpg";

export default function Sass() {
  return (
    <>
      <h4>SASS 사용(.scss)</h4>
      <div className="div1">
        <div className="div2">
          <div className="div3"></div>
        </div>
        <button className="btn orangered">Button1</button>
        <button className="btn btn--opacity">Button2</button>
        <button className="btn btn--blue">Button3</button>
      </div>

      {/* mixin 사용 해 보기 */}
      <div className="container">
        <div className="box1"></div>
        <div className="box1"></div>
        <div className="box1"></div>

        <p className="circle"></p>
        <p className="circle"></p>
        <p className="circle"></p>

        <div className="box2">1</div>
        <div className="box2">2</div>
        <div className="box2">3</div>
        <div className="box2">4</div>
      </div>

      {/* image 불러오기 */}
      <h2>이미지 가져오기</h2>
      <h4>1. src 폴더 내부의 이미지 가져오기</h4>
      <h5>경로명으로 가져오기(상대경로)</h5>
      <img
        src="../assets/hachi.jpg"
        alt="src 내부의 사진은 경로명으로 바로 접근 불가능합니다."
      />

      <h5>import 후 가져오기</h5>
      <img src={img1} alt="import 후 가지고 오기" />

      <h4>1. public 폴더 내부의 이미지 가져오기</h4>
      <img
        src="/images/hachi.jpg"
        alt="public 폴더 내부에서는 경로명으로 접근 가능. 단, public 폴더 /이후로 접근"
      />
      <img
        src={process.env.PUBLIC_URL + "/images/hachi.jpg"}
        alt="process.env.PUBLIC_URL로 접근하면 조금 더 안전 함"
      />
      <h5>CSS에서 background-image 속성으로 접근하기</h5>
      <div className="src-img img-test"></div>

      <h4>실습문제</h4>
      <div className="practice">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
