// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'arrow-parents': 'off',
	  'generator-star-spacing': 'off',
	  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	  'no-unused-vars':[2,{
		  //允许声明未使用变量
		  'vars': 'local',
		  'args': 'none'
	  }],
	  'no-multiple-empty-lines': [0,{'max':20}],
	  'no-mixed-spaces-and-tabs':[0],
	  'spaced-comment':['off',"never"],
	  'semi':['error', 'always']
  }
}
