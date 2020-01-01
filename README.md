# 一个ui组件库
[![Build Status](https://travis-ci.org/ococa/wheels.svg?branch=master)](https://travis-ci.org/ococa/wheels)
作者：ococa

## 介绍

## 开始使用

1. 添加css样式
使用本框架前，请在css 中开启 border-box 
```css
*, *::before, *::after{ box-sizing: border-box }
```
还需要设置默认颜色等变量
```css
:root {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --button-border-radius: 4px;
    --color: #999;
    --border-color: #999;
    --border-color-horver: #666;
}
```
2. install
```
npm i --save o-coui
```
3. import 'o-coui'
```javascript
import { Button } from 'o-coui';
import 'o-coui/dist/index.css';

export default {
  name: 'app',
  components: {
    Button
  }
}
```
4. import svg symbols
```html
<script src="//at.alicdn.com/t/font_1590521_wqo0d4mj94.js"></script>
```
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码


