import { useState } from "react";

// テスト対象のコンポーネント
// クリック時にON, OFFが切り替わるボタン
export const SimpleButton: () => JSX.Element = () => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState((prevState) => !prevState);
  };

  return <button onClick={handleClick}>{state? "ON" : "OFF"}</button>
}

