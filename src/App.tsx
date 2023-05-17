import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";                               // cssをインポート
import Button from '@mui/material/Button';        // Material UIのButtonをインポート
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';  // まとめてインポート
import styled from "@emotion/styled";             // emotionでCSSを調整

// ボタンの中の文字を小文字にするため
const TextButton = styled(Button)
    `text-transform: none;`;

// ThemeProviderrのthemeプロパティに渡す
const theme = createTheme({
  palette: {
      primary: {
      main: "#42a5f5",
      light: "#1976d2",
      dark: "#1565c0",
      },
  }
});

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
        <br />
        <LikeButton />
        <br />

        {/* Material UIで表示 */}
        {/* sxプロパティを用いてCSSのようにスタイリング */}
        <TextButton sx={{
          mb: 3,
        }}>
            text
        </TextButton>

        <Button variant="contained" sx={{
          mb: 3,
        }}>
            色で塗りつぶされたボタン
        </Button>

        <Button variant="outlined" sx={{
          mb: 3,
        }}>
            外枠の線のみのボタン
        </Button>

        {/* Boxでコンポーネントをラップしスタイルを調整 */}
        <Box component="div" sx={{
            mb: 3,
            ":hover": {
            opacity: ".8",
            },
            "@media screen and (min-width:400px)": {
                width: 200,
            },
        }}>
            <Typography paragraph={true}>Hello World!</Typography>
        </Box>

        {/* themeオブジェクトでオリジナルで定義したスタイルを使用 */}
        <ThemeProvider theme={theme}>
          <Box component="div">
              <Button color="primary" sx={{
                  color: theme.palette.primary.main,
              }}>
                  ボタン
              </Button>
          </Box>
        </ThemeProvider>
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
