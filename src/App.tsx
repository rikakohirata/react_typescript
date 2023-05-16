import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";  // cssをインポート
import Button from '@mui/material/Button';  // Material UIのButtonをインポート
import styled from "@emotion/styled";  // // emotionでCSSを調整

// ボタンの中の文字を小文字にするため
const TextButton = styled(Button)`
  text-transform: none;
`;

function App() {
  return (
    <div className="App">
      {/* デフォルトのTOPページ */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <header className="App-header">
        {/* いいねボタンを表示 */}
        <LikeButton />
        <br />

        {/* Material UIで表示 */}
        <TextButton>text</TextButton>
        <br />
        <Button variant="contained">色で塗りつぶされたボタン</Button>
        <br />
        <Button variant="outlined">外枠の線のみのボタン</Button>
      </header>
      
    </div>
  );
}

// いいねボタン
function LikeButton() {
  // useState関数により、カウント数の状態をReactに管理させる
  // useStateの戻り値を、countとsetCountの2つの変数に代入
  // countに999, setCountにcountの値を変更するhandleClick関数を代入
  const [count, setCount] = useState(999);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    // クリック毎にhandleClick関数が実行される
    <span className="likeButton" onClick={handleClick}>
      ♥ {count}
    </span>
  );
}

export default App;
