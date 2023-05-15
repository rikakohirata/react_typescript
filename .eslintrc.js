module.exports = {
  root: true,
  // 設定したパーサーを使って、ESLintはJavaScriptやTypeScriptの構文を解析する
  parser: "@typescript-eslint/parser",
  // プラグインを追加すると、ルールが追加できる
  // 第三者が作成したルールなど追加した場合追記する
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    // TypeScript ESLint独自のオプション
    // ESLint実行時に使うコンパイラ設定ファイルをtsconfigRootDirからの相対パスで指定
    project: "./tsconfig.eslint.json",  
    // TypeScript ESLint独自のオプション
    // プロジェクトルートの絶対パスを指定
    tsconfigRootDir: __dirname,         
  },
  // ESLintのチェック対象外にするファイルやディレクトリを指定するオプション
  ignorePatterns: ["dist"],
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    "import/prefer-default-export": "off",
    "@typescript-eslint/quotes": ["error", "double"],
  },
};