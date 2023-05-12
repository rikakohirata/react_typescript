import { render, screen } from "@testing-library/react";
import { SimpleButton } from "./SimpleButton";
import userEvent from "@testing-library/user-event";

test("ボタンをクリックするとON/OFFの表示が切り替わる", () => {
  // コンポーネントの描画
  render(<SimpleButton />);
  // getByRole()で、ボタンのDOMの取得
  const simpleButton = screen.getByRole("button");
  // toHaveTextContent()で、そのコンポーネントがどのようなテキストを持っているかのアサーションを行う
  expect(simpleButton).toHaveTextContent("OFF");
  // click()で、ボタンのクリックを実現
  userEvent.click(simpleButton);
  // ONに切り替わるか判定
  expect(simpleButton).toHaveTextContent("ON");
  
});