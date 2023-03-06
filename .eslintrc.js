module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    // "eslint:recommended", // eslint的推荐规则配置
    /**
     * "eslint-config-airbnb"("eslint-plugin-import","eslint-plugin-jsx-a11y","eslint-plugin-react")
     * 
     * 
     * 包含了
     * import配置：规则配置是airbnb中的（不是import插件的推荐配置； 设置了解析选项
     *   parserOptions: {
            ecmaVersion: 6,
            sourceType: 'module'
          },
     * react配置: 规则配置是airbnb中的（不是插件的推荐配置）；已经设置了解析选项jsx
     * jsx-ally配置: 规则配置是airbnb中的（不是jsx-ally插件的推荐配置）
     * 其他的eslint规则配置: 包括best-practices,error,es6,node,strict,style,variables
     */
    "airbnb",
    "plugin:react-hooks/recommended", // "eslint-plugin-react-hooks": react-hooks 推荐规则配置
    "plugin:@typescript-eslint/recommended", // "@typescript-eslint/eslint-plugin":  ts推荐规则配置 已经设置了解析器
    // "plugin:eslint-comments/recommended", // 注释相关规则
    // "plugin:promise/recommended", // promise 规则
    /**
     * 禁用和prettier冲突的eslint规则配置
     * eslint格式相关
     * @typescript-eslint
     * babel
     * flowtype
     * react
     * standard
     * unicorn
     * vue
     * 都已经集成
     */
    // "prettier", // 已经在"plugin:prettier/recommended"中设置了
    // "prettier/react", // 禁用 react prettier相关的rule；已经合并到prettier
    // "prettier/@typescript-eslint", // 禁用 ts prettier相关的rule；已经合并到prettier
    "plugin:prettier/recommended", // "eslint-plugin-prettier": 里面包含了prettier扩展，和插件，和rule配置; 可以移除掉上面的prettier扩展了
  ],
  // parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [],
  rules: {
    // "import/no-cycle": 0,
    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-wrap-multilines": 0,
    "react/prop-types": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": "off",
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "no-empty-pattern": 0,
  },
  settings: {
    // support import modules from TypeScript files in JavaScript files
    "import/resolver": { node: { extensions: [".js", ".ts", ".tsx"] } },
  },
};
