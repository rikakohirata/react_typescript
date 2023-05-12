import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
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
        <LinkButton />
      </header>
    </div>
  );
}

// いいねボタン
function LinkButton() {
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
