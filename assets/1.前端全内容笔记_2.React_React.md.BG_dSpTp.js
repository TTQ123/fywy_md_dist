import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.4aTu-Nia.js";const k=JSON.parse('{"title":"React 入门","description":"","frontmatter":{},"headers":[],"relativePath":"1.前端全内容笔记/2.React/React.md","filePath":"1.前端全内容笔记/2.React/React.md"}'),e={name:"1.前端全内容笔记/2.React/React.md"},l=p(`<h1 id="react-入门" tabindex="-1">React 入门 <a class="header-anchor" href="#react-入门" aria-label="Permalink to &quot;React 入门&quot;">​</a></h1><h2 id="react-简介" tabindex="-1">React 简介 <a class="header-anchor" href="#react-简介" aria-label="Permalink to &quot;React 简介&quot;">​</a></h2><h3 id="react-为何物" tabindex="-1">React 为何物 <a class="header-anchor" href="#react-为何物" aria-label="Permalink to &quot;React 为何物&quot;">​</a></h3><p>React：用于构建用户界面的 JavaScript 库。由 <code>Facebook</code> 开发且开源。</p><h3 id="为何学习-react" tabindex="-1">为何学习 React <a class="header-anchor" href="#为何学习-react" aria-label="Permalink to &quot;为何学习 React&quot;">​</a></h3><p>原生 JavaScript 的痛点：</p><ul><li>操作 DOM 繁琐、效率低</li><li>使用 JavaScript 直接操作 DOM，浏览器进行大量重绘重排</li><li>原生 JavaScript 没有组件化编码方案，代码复用率低</li></ul><p>React 的特点：</p><ul><li>采用组件化模式、声明式编码，提高开发效率和组件复用率</li><li>在 <code>React Native</code> 中可用 React 语法进行移动端开发</li><li>使用虚拟 DOM 和 Diffing 算法，减少与真实 DOM 的交互</li></ul><h2 id="react-初体验" tabindex="-1">React 初体验 <a class="header-anchor" href="#react-初体验" aria-label="Permalink to &quot;React 初体验&quot;">​</a></h2><h3 id="来一发-hello-react" tabindex="-1">来一发 Hello React <a class="header-anchor" href="#来一发-hello-react" aria-label="Permalink to &quot;来一发 Hello React&quot;">​</a></h3><p>相关 JS 库：</p><ul><li><code>react.development.js</code> ：React 核心库</li><li><code>react-dom.development.js</code> ：提供 DOM 操作的 React 扩展库</li><li><code>babel.min.js</code> ：解析 JSX 语法，转换为 JS 代码</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 准备好一个“容器” --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 引入react核心库 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/javascript&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../js/react.development.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 引入react-dom，用于支持react操作DOM --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/javascript&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../js/react-dom.development.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 引入babel，用于将jsx转为js --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/javascript&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;../js/babel.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 此处一定要写babel，表示写的不是 JS，而是 JSX，并且靠 babel 翻译 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/babel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //1.创建虚拟DOM</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 不要写引号，因为不是字符串</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> VDOM</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello,React&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //2.渲染虚拟DOM到页面</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 导入核心库和扩展库后，会有 React 和 ReactDOM 两个对象</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ReactDOM.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VDOM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="创建虚拟-dom-的两种方式-js-和-jsx" tabindex="-1">创建虚拟 DOM 的两种方式：JS 和 JSX <a class="header-anchor" href="#创建虚拟-dom-的两种方式-js-和-jsx" aria-label="Permalink to &quot;创建虚拟 DOM 的两种方式：JS 和 JSX&quot;">​</a></h3><ul><li>使用 JS 创建虚拟 DOM 比 JSX 繁琐</li><li>JSX 可以让程序员更加简单地创建虚拟 DOM，相当于语法糖</li><li>最终 babel 会把 JSX 语法转换为 JS</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/javascript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //1.使用 React 提供的 API 创建虚拟DOM</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> VDOM</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;h1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;title&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, React.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;span&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {}, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello,React&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //2.渲染虚拟DOM到页面</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ReactDOM.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VDOM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/babel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //1.创建虚拟DOM</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VDOM</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello,React&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  )</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //2.渲染虚拟DOM到页面</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ReactDOM.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VDOM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="虚拟-dom-真实-dom" tabindex="-1">虚拟 DOM &amp;&amp; 真实 DOM <a class="header-anchor" href="#虚拟-dom-真实-dom" aria-label="Permalink to &quot;虚拟 DOM &amp;&amp; 真实 DOM&quot;">​</a></h3><p>关于虚拟 DOM：</p><ol><li>本质是 Object 类型的对象（一般对象）</li><li>虚拟 DOM 比较“轻”，真实 DOM 比较“重”，因为虚拟 DOM 是 React 内部在用，无需真实 DOM 上那么多的属性。</li><li>虚拟 DOM 最终会被 React 转化为真实 DOM，呈现在页面上。</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/babel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VDOM</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello,React&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ReactDOM.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VDOM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> TDOM</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;demo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;虚拟DOM&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VDOM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;真实DOM&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">TDOM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="jsx" tabindex="-1">JSX <a class="header-anchor" href="#jsx" aria-label="Permalink to &quot;JSX&quot;">​</a></h2><h3 id="jsx-简介" tabindex="-1">JSX 简介 <a class="header-anchor" href="#jsx-简介" aria-label="Permalink to &quot;JSX 简介&quot;">​</a></h3><ul><li>全称：JavaScript XML</li><li>React 定义的类似于 XML 的 JS 扩展语法；本质是 <code>React.createElement()</code> 方法的语法糖</li><li>作用：简化创建虚拟 DOM</li></ul><h3 id="jsx-语法规则" tabindex="-1">JSX 语法规则 <a class="header-anchor" href="#jsx-语法规则" aria-label="Permalink to &quot;JSX 语法规则&quot;">​</a></h3><ul><li>定义虚拟 DOM 时，不要写引号</li><li>标签中混入 JS 表达式需要使用 <code>{}</code></li><li>指定类名不用 <code>class</code>，使用 <code>className</code></li><li>内联样式，使用 <code>style={ { key: value } }</code> 的形式</li><li>只能有一个根标签</li><li>标签必须闭合，单标签结尾必须添加 <code>/</code>：<code>&lt;input type=&quot;text&quot; /&gt;</code></li><li>标签首字母小写，则把标签转换为 HTML 对应的标签，若没有，则报错</li><li>标签首字母大写，则渲染对应组件，若没有定义组件，则报错</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;en&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;jsx语法规则&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      .title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        background-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">orange</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/babel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myId</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;aTgUiGu&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;HeLlo,rEaCt&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VDOM</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h2</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> className</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;title&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{myId.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toLowerCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()}&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{{ color: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;white&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fontSize: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;19px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }}&gt;{myData.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toLowerCase</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          // &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">good</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;very good&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">good</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          // &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Child</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      )</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ReactDOM.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VDOM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="jsx-例子" tabindex="-1">JSX 例子 <a class="header-anchor" href="#jsx-例子" aria-label="Permalink to &quot;JSX 例子&quot;">​</a></h3><p>注意区分：<strong>JS 语句(代码)</strong> 与 <strong>JS 表达式</strong>：</p><ol><li>表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">demo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">arr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span></code></pre></div><ol start="2"><li>语句(代码)：</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">switch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:xxxx}</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/babel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> list </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Angular&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;React&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] const </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VDOM</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;前端js框架列表&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      // React 会自动遍历数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {list.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // Each child in a list should have a unique &quot;key&quot; prop.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{index}&gt;{item}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      })}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ) ReactDOM.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VDOM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;test&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h1 id="react-面向组件编程" tabindex="-1">React 面向组件编程 <a class="header-anchor" href="#react-面向组件编程" aria-label="Permalink to &quot;React 面向组件编程&quot;">​</a></h1><h2 id="函数式组件" tabindex="-1">函数式组件 <a class="header-anchor" href="#函数式组件" aria-label="Permalink to &quot;函数式组件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script type=&quot;text/babel&quot;&gt;</span></span>
<span class="line"><span>  //1.创建函数式组件</span></span>
<span class="line"><span>  function MyComponent() {</span></span>
<span class="line"><span>    //此处的 this 是 undefined，因为 babel 编译后开启了严格模式</span></span>
<span class="line"><span>    console.log(this)</span></span>
<span class="line"><span>    return &lt;h2&gt;我是用函数定义的组件(适用于【简单组件】的定义)&lt;/h2&gt;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  //2.渲染组件到页面</span></span>
<span class="line"><span>  ReactDOM.render(&lt;MyComponent /&gt;, document.getElementById(&#39;test&#39;))</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>要点：</p><ul><li>组件名称首字母必须大写，否则会解析成普通标签导致报错，详见 JSX 语法规则</li><li>函数需返回一个虚拟 DOM</li><li>渲染组件时需要使用标签形式，同时标签必须闭合</li></ul><p>渲染组件的过程：</p><ul><li>React 解析标签，寻找对应组件</li><li>发现组件是函数式组件，则调用函数，将返回的虚拟 DOM 转换为真实 DOM ，并渲染到页面中</li></ul><h2 id="类式组件" tabindex="-1">类式组件 <a class="header-anchor" href="#类式组件" aria-label="Permalink to &quot;类式组件&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script type=&quot;text/babel&quot;&gt;</span></span>
<span class="line"><span>  // 创建类式组件</span></span>
<span class="line"><span>  class MyComponent extends React.Component {</span></span>
<span class="line"><span>    render() {</span></span>
<span class="line"><span>      console.log(&#39;render中的this：&#39;, this)</span></span>
<span class="line"><span>      return &lt;h2&gt;我是用类定义的组件(适用于【复杂组件】的定义)&lt;/h2&gt;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  ReactDOM.render(&lt;MyComponent /&gt;, document.getElementById(&#39;test&#39;))</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>组件渲染过程：</p><ul><li>React 解析组件标签，寻找组件</li><li>发现是类式组件，则 <code>new</code> 该类的实例对象，通过实例调用原型上的 <code>render</code> 方法</li><li>将 <code>render</code> 返回的虚拟 DOM 转为真实 DOM ，渲染到页面上</li></ul><h2 id="组件实例核心属性-state" tabindex="-1">组件实例核心属性 state <a class="header-anchor" href="#组件实例核心属性-state" aria-label="Permalink to &quot;组件实例核心属性 state&quot;">​</a></h2><p><code>state</code> 是组件实例对象最重要的属性，值为对象。又称为状态机，通过更新组件的 <code>state</code> 来更新对应的页面显示。</p><p>要点：</p><ul><li>初始化 <code>state</code></li><li>React 中事件绑定</li><li><code>this</code> 指向问题</li><li><code>setState</code> 修改 <code>state</code> 状态</li><li><code>constructor</code> 、<code>render</code> 、自定义方法的调用次数</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script type=&quot;text/babel&quot;&gt;</span></span>
<span class="line"><span>  class Weather extends React.Component {</span></span>
<span class="line"><span>    // 调用一次</span></span>
<span class="line"><span>    constructor(props) {</span></span>
<span class="line"><span>      super(props)</span></span>
<span class="line"><span>      // 初始化 state</span></span>
<span class="line"><span>      this.state = { isHot: true, wind: &#39;微风&#39; }</span></span>
<span class="line"><span>      // 解决 this 指向问题</span></span>
<span class="line"><span>      this.changeWeather = this.changeWeather.bind(this)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 调用 1+N 次</span></span>
<span class="line"><span>    render() {</span></span>
<span class="line"><span>      // 读取状态</span></span>
<span class="line"><span>      const { isHot } = this.state</span></span>
<span class="line"><span>      return &lt;h1 onClick={this.changeWeather}&gt;今天天气 {isHot ? &#39;炎热&#39; : &#39;凉爽&#39;}&lt;/h1&gt;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 点一次调一次</span></span>
<span class="line"><span>    changeWeather() {</span></span>
<span class="line"><span>      const isHot = this.state.isHot</span></span>
<span class="line"><span>      // 对 state 的修改是一种合并而非替换，即 wind 依然存在</span></span>
<span class="line"><span>      this.setState({ isHot: !isHot })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ReactDOM.render(&lt;Weather /&gt;, document.getElementById(&#39;test&#39;))</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>简化版：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>  class Weather extends React.Component {</span></span>
<span class="line"><span>    state = { isHot: true, wind: &#39;微风&#39; }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    render() {</span></span>
<span class="line"><span>      const { isHot } = this.state</span></span>
<span class="line"><span>      return &lt;h2 onClick={this.changeWeather}&gt;天气{isHot ? &#39;炎热&#39; : &#39;凉爽&#39;}&lt;/h2&gt;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 采用箭头函数 + 赋值语句形式</span></span>
<span class="line"><span>    changeWeather = () =&gt; {</span></span>
<span class="line"><span>      const isHot = this.state.isHot</span></span>
<span class="line"><span>      this.setState = { isHot: !isHot }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ReactDOM.render(&lt;Weather /&gt;, document.getElementById(&#39;test&#39;))</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="组件实例核心属性-props" tabindex="-1">组件实例核心属性 props <a class="header-anchor" href="#组件实例核心属性-props" aria-label="Permalink to &quot;组件实例核心属性 props&quot;">​</a></h2><p>每个组件对象都有 <code>props</code> 属性，组件标签的属性都保存在 <code>props</code> 中。</p><p><code>props</code> 是只读的，不能修改。</p><h3 id="props-基本使用" tabindex="-1">props 基本使用 <a class="header-anchor" href="#props-基本使用" aria-label="Permalink to &quot;props 基本使用&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script type=&quot;text/babel&quot;&gt;</span></span>
<span class="line"><span>  class Person extends React.Component {</span></span>
<span class="line"><span>    render() {</span></span>
<span class="line"><span>      const { name, age, sex } = this.props</span></span>
<span class="line"><span>      return (</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>          &lt;li&gt;姓名：{name}&lt;/li&gt;</span></span>
<span class="line"><span>          &lt;li&gt;性别：{sex}&lt;/li&gt;</span></span>
<span class="line"><span>          &lt;li&gt;年龄：{age}&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 类似于标签属性传值</span></span>
<span class="line"><span>  ReactDOM.render(&lt;Person name=&quot;Lily&quot; age={19} sex=&quot;男&quot; /&gt;, document.getElementById(&#39;test&#39;))</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="批量传递-props" tabindex="-1">批量传递 props <a class="header-anchor" href="#批量传递-props" aria-label="Permalink to &quot;批量传递 props&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script type=&quot;text/babel&quot;&gt;</span></span>
<span class="line"><span>  class Person extends React.Component {</span></span>
<span class="line"><span>    render() {</span></span>
<span class="line"><span>      const { name, age, sex } = this.props</span></span>
<span class="line"><span>      return (</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>          &lt;li&gt;姓名：{name}&lt;/li&gt;</span></span>
<span class="line"><span>          &lt;li&gt;性别：{sex}&lt;/li&gt;</span></span>
<span class="line"><span>          &lt;li&gt;年龄：{age}&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const obj = { name: &#39;Ben&#39;, age: 21, sex: &#39;女&#39; }</span></span>
<span class="line"><span>  ReactDOM.render(&lt;Person {...obj} /&gt;, document.getElementById(&#39;test&#39;))</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="限制-props" tabindex="-1">限制 props <a class="header-anchor" href="#限制-props" aria-label="Permalink to &quot;限制 props&quot;">​</a></h3><p>在 <code>React 15.5</code> 以前，<code>React</code> 身上有一个 <code>PropTypes</code> 属性可直接使用，即 <code>name: React.PropTypes.string.isRequired</code> ，没有把 <code>PropTypes</code> 单独封装为一个模块。</p><p>从 <code>React 15.5</code> 开始，把 <code>PropTypes</code> 单独封装为一个模块，需要额外导入使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- 引入prop-types，用于对组件标签属性进行限制 --&gt;</span></span>
<span class="line"><span>&lt;script type=&quot;text/javascript&quot; src=&quot;../js/prop-types.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script type=&quot;text/babel&quot;&gt;</span></span>
<span class="line"><span>  class Person extends React.Component {</span></span>
<span class="line"><span>    render() {</span></span>
<span class="line"><span>      const { name, age, sex } = this.props</span></span>
<span class="line"><span>      return (</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>          &lt;li&gt;姓名：{name}&lt;/li&gt;</span></span>
<span class="line"><span>          &lt;li&gt;性别：{sex}&lt;/li&gt;</span></span>
<span class="line"><span>          &lt;li&gt;年龄：{age}&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 类型和必要性限制</span></span>
<span class="line"><span>  Person.propTypes = {</span></span>
<span class="line"><span>    name: PropTypes.string.isRequired,</span></span>
<span class="line"><span>    sex: PropTypes.string,</span></span>
<span class="line"><span>    age: PropTypes.number,</span></span>
<span class="line"><span>    // 限制 speak 为函数</span></span>
<span class="line"><span>    speak: PropTypes.func,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 指定默认值</span></span>
<span class="line"><span>  Person.defaultProps = {</span></span>
<span class="line"><span>    sex: &#39;male&#39;,</span></span>
<span class="line"><span>    age: 19,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ReactDOM.render(&lt;Person name=&quot;Vue&quot; sex=&quot;male&quot; age={11} speak={speak} /&gt;, document.getElementById(&#39;test&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function speak() {</span></span>
<span class="line"><span>    console.log(&#39;speaking...&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="props-的简写形式" tabindex="-1">props 的简写形式 <a class="header-anchor" href="#props-的简写形式" aria-label="Permalink to &quot;props 的简写形式&quot;">​</a></h3><p><code>Person.propTypes</code> 和 <code>Person.defaultProps</code> 可以看作在类身上添加属性，利用 <code>static</code> 关键词就能在类内部进行声明。因此所谓简写只是从类外部移到类内部。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- 引入prop-types，用于对组件标签属性进行限制 --&gt;</span></span>
<span class="line"><span>&lt;script type=&quot;text/javascript&quot; src=&quot;../js/prop-types.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script type=&quot;text/babel&quot;&gt;</span></span>
<span class="line"><span>  class Person extends React.Component {</span></span>
<span class="line"><span>    static propTypes = {</span></span>
<span class="line"><span>      name: PropTypes.string.isRequired,</span></span>
<span class="line"><span>      sex: PropTypes.string,</span></span>
<span class="line"><span>      age: PropTypes.number,</span></span>
<span class="line"><span>      // 限制 speak 为函数</span></span>
<span class="line"><span>      speak: PropTypes.func,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    static defaultProps = {</span></span>
<span class="line"><span>      sex: &#39;male&#39;,</span></span>
<span class="line"><span>      age: 19,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    render() {</span></span>
<span class="line"><span>      const { name, age, sex } = this.props</span></span>
<span class="line"><span>      return (</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>          &lt;li&gt;姓名：{name}&lt;/li&gt;</span></span>
<span class="line"><span>          &lt;li&gt;性别：{sex}&lt;/li&gt;</span></span>
<span class="line"><span>          &lt;li&gt;年龄：{age}&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ReactDOM.render(&lt;Person name=&quot;Vue&quot; sex=&quot;male&quot; age={11} speak={speak} /&gt;, document.getElementById(&#39;test&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function speak() {</span></span>
<span class="line"><span>    console.log(&#39;speaking...&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="类式组件的构造器与-props" tabindex="-1">类式组件的构造器与 props <a class="header-anchor" href="#类式组件的构造器与-props" aria-label="Permalink to &quot;类式组件的构造器与 props&quot;">​</a></h3><p><a href="https://gitee.com/link?target=https%3A%2F%2Fzh-hans.reactjs.org%2Fdocs%2Freact-component.html%23constructor" target="_blank" rel="noreferrer">官网文档说明</a></p><p>构造函数一般用在两种情况：</p><ul><li>通过给 <code>this.state</code> 赋值对象来初始化内部 <code>state</code></li><li>为事件处理函数绑定实例</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>constructor(props) {</span></span>
<span class="line"><span>  super(props)</span></span>
<span class="line"><span>  // 初始化 state</span></span>
<span class="line"><span>  this.state = { isHot: true, wind: &#39;微风&#39; }</span></span>
<span class="line"><span>  // 解决 this 指向问题</span></span>
<span class="line"><span>  this.changeWeather = this.changeWeather.bind(this)</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>因此构造器一般都不需要写。如果要在构造器内使用 <code>this.props</code> 才声明构造器，并且需要在最开始调用 <code>super(props)</code> ：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>constructor(props) {</span></span>
<span class="line"><span>  super(props)</span></span>
<span class="line"><span>  console.log(this.props)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="函数式组件使用-props" tabindex="-1">函数式组件使用 props <a class="header-anchor" href="#函数式组件使用-props" aria-label="Permalink to &quot;函数式组件使用 props&quot;">​</a></h3><p>由于函数可以传递参数，因此函数式组件可以使用 <code>props</code> 。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- 引入prop-types，用于对组件标签属性进行限制 --&gt;</span></span>
<span class="line"><span>&lt;script type=&quot;text/javascript&quot; src=&quot;../js/prop-types.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script type=&quot;text/babel&quot;&gt;</span></span>
<span class="line"><span>  function Person(props) {</span></span>
<span class="line"><span>    const { name, age, sex } = props</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;ul&gt;</span></span>
<span class="line"><span>        &lt;li&gt;姓名：{name}&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;性别：{sex}&lt;/li&gt;</span></span>
<span class="line"><span>        &lt;li&gt;年龄：{age}&lt;/li&gt;</span></span>
<span class="line"><span>      &lt;/ul&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  Person.propTypes = {</span></span>
<span class="line"><span>    name: PropTypes.string.isRequired,</span></span>
<span class="line"><span>    sex: PropTypes.string,</span></span>
<span class="line"><span>    age: PropTypes.number,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Person.defaultProps = {</span></span>
<span class="line"><span>    sex: &#39;男&#39;,</span></span>
<span class="line"><span>    age: 18,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ReactDOM.render(&lt;Person name=&quot;jerry&quot; /&gt;, document.getElementById(&#39;test&#39;))</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h2 id="组件实例核心属性-refs" tabindex="-1">组件实例核心属性 refs <a class="header-anchor" href="#组件实例核心属性-refs" aria-label="Permalink to &quot;组件实例核心属性 refs&quot;">​</a></h2><p>通过定义 <code>ref</code> 属性可以给标签添加标识。</p><h3 id="字符串形式的-ref" tabindex="-1">字符串形式的 ref <a class="header-anchor" href="#字符串形式的-ref" aria-label="Permalink to &quot;字符串形式的 ref&quot;">​</a></h3><p>这种形式已过时，效率不高，<a href="https://gitee.com/link?target=https%3A%2F%2Fzh-hans.reactjs.org%2Fdocs%2Frefs-and-the-dom.html%23legacy-api-string-refs" target="_blank" rel="noreferrer">官方</a>不建议使用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script type=&quot;text/babel&quot;&gt;</span></span>
<span class="line"><span>  class Demo extends React.Component {</span></span>
<span class="line"><span>    showData = () =&gt; {</span></span>
<span class="line"><span>      const { input1 } = this.refs</span></span>
<span class="line"><span>      alert(input1.value)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    render() {</span></span>
<span class="line"><span>      return (</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>          &lt;input ref=&quot;input1&quot; type=&quot;text&quot; placeholder=&quot;点击按钮提示数据&quot; /&gt;</span></span>
<span class="line"><span>          &amp;nbsp;</span></span>
<span class="line"><span>          &lt;button onClick={this.showData}&gt;点我提示左侧的数据&lt;/button&gt;&amp;nbsp;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ReactDOM.render(&lt;Demo /&gt;, document.getElementById(&#39;test&#39;))</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="回调形式的-ref" tabindex="-1">回调形式的 ref <a class="header-anchor" href="#回调形式的-ref" aria-label="Permalink to &quot;回调形式的 ref&quot;">​</a></h3><p>要点：</p><ul><li><code>c =&gt; this.input1 = c</code> 就是给组件实例添加 <code>input1</code> 属性，值为节点</li><li>由于是箭头函数，因此 <code>this</code> 是 <code>render</code> 函数里的 <code>this</code> ，即组件实例</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script type=&quot;text/babel&quot;&gt;</span></span>
<span class="line"><span>  class Demo extends React.Component {</span></span>
<span class="line"><span>    showData = () =&gt; {</span></span>
<span class="line"><span>      const { input1 } = this</span></span>
<span class="line"><span>      alert(input1.value)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    render() {</span></span>
<span class="line"><span>      return (</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>          &lt;input</span></span>
<span class="line"><span>            ref={(c) =&gt; {</span></span>
<span class="line"><span>              this.input1 = c</span></span>
<span class="line"><span>            }}</span></span>
<span class="line"><span>            type=&quot;text&quot;</span></span>
<span class="line"><span>            placeholder=&quot;点击按钮提示数据&quot;</span></span>
<span class="line"><span>          /&gt;</span></span>
<span class="line"><span>          &amp;nbsp;</span></span>
<span class="line"><span>          &lt;button onClick={this.showData}&gt;点我提示左侧的数据&lt;/button&gt;&amp;nbsp;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ReactDOM.render(&lt;Demo /&gt;, document.getElementById(&#39;test&#39;))</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><p>关于回调 <code>ref</code> 执行次数的问题，<a href="https://gitee.com/link?target=https%3A%2F%2Fzh-hans.reactjs.org%2Fdocs%2Frefs-and-the-dom.html%23caveats-with-callback-refs" target="_blank" rel="noreferrer">官网</a>描述：</p><div class="tip custom-block"><p class="custom-block-title">如果 <code>ref</code> 回调函数是以内联函数的方式定义的，在更新过程中它会被执行两次，第一次传入参数 <code>null</code>，然后第二次会传入参数 DOM 元素。这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 <code>ref</code> 并且设置新的。通过将 <code>ref</code> 的回调函数定义成 <code>class</code> 的绑定函数的方式可以避免上述问题，但是大多数情况下它是无关紧要的。 :::</p><p>即内联函数形式，在更新过程中 <code>ref</code> 回调会被执行两次，第一次传入 <code>null</code> ，第二次传入 DOM 元素。若是下述形式，则只执行一次。但是对功能实现没有影响，因此一般也是用内联函数形式。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script type=&quot;text/babel&quot;&gt;</span></span>
<span class="line"><span>  //创建组件</span></span>
<span class="line"><span>  class Demo extends React.Component {</span></span>
<span class="line"><span>    state = { isHot: false }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    changeWeather = () =&gt; {</span></span>
<span class="line"><span>      const { isHot } = this.state</span></span>
<span class="line"><span>      this.setState({ isHot: !isHot })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    saveInput = (c) =&gt; {</span></span>
<span class="line"><span>      this.input1 = c</span></span>
<span class="line"><span>      console.log(&#39;@&#39;, c)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    render() {</span></span>
<span class="line"><span>      const { isHot } = this.state</span></span>
<span class="line"><span>      return (</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>          &lt;h2&gt;今天天气很{isHot ? &#39;炎热&#39; : &#39;凉爽&#39;}&lt;/h2&gt;</span></span>
<span class="line"><span>          &lt;input ref={this.saveInput} type=&quot;text&quot; /&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ReactDOM.render(&lt;Demo /&gt;, document.getElementById(&#39;test&#39;))</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="createref-api" tabindex="-1">createRef API <a class="header-anchor" href="#createref-api" aria-label="Permalink to &quot;createRef API&quot;">​</a></h3><p>该方式通过调用 <code>React.createRef</code> 返回一个容器用于存储节点，且一个容器只能存储一个节点。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;script type=&quot;text/babel&quot;&gt;</span></span>
<span class="line"><span>  class Demo extends React.Component {</span></span>
<span class="line"><span>    myRef = React.createRef()</span></span>
<span class="line"><span>    myRef2 = React.createRef()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    showData = () =&gt; {</span></span>
<span class="line"><span>      alert(this.myRef.current.value)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    showData2 = () =&gt; {</span></span>
<span class="line"><span>      alert(this.myRef2.current.value)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    render() {</span></span>
<span class="line"><span>      return (</span></span>
<span class="line"><span>        &lt;div&gt;</span></span>
<span class="line"><span>          &lt;input ref={this.myRef} type=&quot;text&quot; placeholder=&quot;点击按钮提示数据&quot; /&gt;</span></span>
<span class="line"><span>          &amp;nbsp;</span></span>
<span class="line"><span>          &lt;button onClick={this.showData}&gt;点我提示左侧的数据&lt;/button&gt;&amp;nbsp;</span></span>
<span class="line"><span>          &lt;input onBlur={this.showData2} ref={this.myRef2} type=&quot;text&quot; placeholder=&quot;失去焦点提示数据&quot; /&gt;</span></span>
<span class="line"><span>          &amp;nbsp;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ReactDOM.render(&lt;Demo /&gt;, document.getElementById(&#39;test&#39;))</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre></div><h3 id="事件处理" tabindex="-1">事件处理 <a class="header-anchor" href="#事件处理" aria-label="Permalink to &quot;事件处理&quot;">​</a></h3><ul><li>React 使用自定义事件，而非原生 DOM 事件，即 <code>onClick、onBlur</code> ：为了更好的兼容性</li><li>React 的事件通过事件委托方式进行处理：为了高效</li><li>通过 <code>event.target</code> 可获取触发事件的 DOM 元素：勿过度使用 <code>ref</code></li></ul><p>当触发事件的元素和需要操作的元素为同一个时，可以不使用 <code>ref</code> ：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>class Demo extends React.Component {</span></span>
<span class="line"><span>  showData2 = (event) =&gt; {</span></span>
<span class="line"><span>    alert(event.target.value)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;input onBlur={this.showData2} type=&quot;text&quot; placeholder=&quot;失去焦点提示数据&quot; /&gt;</span></span>
<span class="line"><span>        &amp;nbsp;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="受控-非受控组件" tabindex="-1">受控 &amp; 非受控组件 <a class="header-anchor" href="#受控-非受控组件" aria-label="Permalink to &quot;受控 &amp; 非受控组件&quot;">​</a></h2><p>包含表单的组件分类：</p><ul><li>非受控组件：现用现取。即需要使用时，再获取节点得到数据</li><li>受控组件：类似于 Vue 双向绑定的从视图层绑定到数据层</li></ul><p>尽量使用受控组件，因为非受控组件需要使用大量的 <code>ref</code> 。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 非受控组件</span></span>
<span class="line"><span>class Login extends React.Component {</span></span>
<span class="line"><span>  handleSubmit = (event) =&gt; {</span></span>
<span class="line"><span>    event.preventDefault()</span></span>
<span class="line"><span>    const { username, password } = this</span></span>
<span class="line"><span>    alert(\`用户名是：\${username.value}, 密码是：\${password.value}\`)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;form onSubmit={this.handleSubmit}&gt;</span></span>
<span class="line"><span>        用户名：</span></span>
<span class="line"><span>        &lt;input ref={(c) =&gt; (this.username = c)} type=&quot;text&quot; name=&quot;username&quot; /&gt;</span></span>
<span class="line"><span>        密码：</span></span>
<span class="line"><span>        &lt;input ref={(c) =&gt; (this.password = c)} type=&quot;password&quot; name=&quot;password&quot; /&gt;</span></span>
<span class="line"><span>        &lt;button&gt;登录&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;/form&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 受控组件</span></span>
<span class="line"><span>class Login extends React.Component {</span></span>
<span class="line"><span>  state = {</span></span>
<span class="line"><span>    username: &#39;&#39;,</span></span>
<span class="line"><span>    password: &#39;&#39;,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  saveUsername = (event) =&gt; {</span></span>
<span class="line"><span>    this.setState({ username: event.target.value })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  savePassword = (event) =&gt; {</span></span>
<span class="line"><span>    this.setState({ password: event.target.value })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  handleSubmit = (event) =&gt; {</span></span>
<span class="line"><span>    event.preventDefault()</span></span>
<span class="line"><span>    const { username, password } = this.state</span></span>
<span class="line"><span>    alert(\`用户名是：\${username}, 密码是：\${password}\`)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;form onSubmit={this.handleSubmit}&gt;</span></span>
<span class="line"><span>        用户名：</span></span>
<span class="line"><span>        &lt;input onChange={this.saveUsername} type=&quot;text&quot; name=&quot;username&quot; /&gt;</span></span>
<span class="line"><span>        密码：</span></span>
<span class="line"><span>        &lt;input onChange={this.savePassword} type=&quot;password&quot; name=&quot;password&quot; /&gt;</span></span>
<span class="line"><span>        &lt;button&gt;登录&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;/form&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>对上述受控组件的代码进行优化，希望把 <code>saveUsername</code> 和 <code>savePassword</code> 合并为一个函数。</p><p>要点：</p><ul><li>高阶函数：参数为函数或者返回一个函数的函数，如 <code>Promise、setTimeout、Array.map()</code></li><li>函数柯里化：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 函数柯里化</span></span>
<span class="line"><span>function sum(a) {</span></span>
<span class="line"><span>  return (b) =&gt; {</span></span>
<span class="line"><span>    return (c) =&gt; {</span></span>
<span class="line"><span>      return a + b + c</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 使用高阶函数和柯里化写法</span></span>
<span class="line"><span>class Login extends React.Component {</span></span>
<span class="line"><span>  state = {</span></span>
<span class="line"><span>    username: &#39;&#39;,</span></span>
<span class="line"><span>    password: &#39;&#39;,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  saveFormData = (dataType) =&gt; {</span></span>
<span class="line"><span>    return (event) =&gt; {</span></span>
<span class="line"><span>      this.setState({ [dataType]: event.target.value })</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  handleSubmit = (event) =&gt; {</span></span>
<span class="line"><span>    event.preventDefault()</span></span>
<span class="line"><span>    const { username, password } = this.state</span></span>
<span class="line"><span>    alert(\`用户名是：\${username}, 密码是：\${password}\`)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;form onSubmit={this.handleSubmit}&gt;</span></span>
<span class="line"><span>        用户名：</span></span>
<span class="line"><span>        &lt;input onChange={this.saveFormData(&#39;username&#39;)} type=&quot;text&quot; name=&quot;username&quot; /&gt;</span></span>
<span class="line"><span>        密码：</span></span>
<span class="line"><span>        &lt;input onChange={this.saveFormData(&#39;password&#39;)} type=&quot;password&quot; name=&quot;password&quot; /&gt;</span></span>
<span class="line"><span>        &lt;button&gt;登录&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;/form&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 不使用柯里化写法</span></span>
<span class="line"><span>class Login extends React.Component {</span></span>
<span class="line"><span>  state = {</span></span>
<span class="line"><span>    username: &#39;&#39;,</span></span>
<span class="line"><span>    password: &#39;&#39;,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  saveFormData = (dataType, event) =&gt; {</span></span>
<span class="line"><span>    this.setState({ [dataType]: event.target.value })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  handleSubmit = (event) =&gt; {</span></span>
<span class="line"><span>    event.preventDefault()</span></span>
<span class="line"><span>    const { username, password } = this.state</span></span>
<span class="line"><span>    alert(\`用户名是：\${username}, 密码是：\${password}\`)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;form onSubmit={this.handleSubmit}&gt;</span></span>
<span class="line"><span>        用户名：</span></span>
<span class="line"><span>        &lt;input onChange={(event) =&gt; this.saveFormData(&#39;username&#39;, event)} type=&quot;text&quot; name=&quot;username&quot; /&gt;</span></span>
<span class="line"><span>        密码：</span></span>
<span class="line"><span>        &lt;input onChange={(event) =&gt; this.saveFormData(&#39;password&#39;, event)} type=&quot;password&quot; name=&quot;password&quot; /&gt;</span></span>
<span class="line"><span>        &lt;button&gt;登录&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;/form&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h2><h3 id="生命周期旧版" tabindex="-1">生命周期旧版 <a class="header-anchor" href="#生命周期旧版" aria-label="Permalink to &quot;生命周期旧版&quot;">​</a></h3><p><strong>初始化阶段</strong>：<code>ReactDOM.render()</code> 触发的初次渲染</p><ul><li><code>constructor</code></li><li><code>componentWillMount</code></li><li><code>render</code></li><li><code>componentDidMount</code></li></ul><p><strong>更新阶段</strong></p><ol><li>父组件重新 <code>render</code> 触发的更新</li></ol><ul><li><code>componentWillReceiveProps</code></li><li><code>shouldComponentUpdate</code> ：控制组件是否更新的阀门，返回值为布尔值，默认为 <code>true</code> 。若返回 <code>false</code> ，则后续流程不会进行。</li><li><code>componentWillUpdate</code></li><li><code>render</code></li><li><code>componentDidUpdate</code></li></ul><ol><li>组件内部调用 <code>this.setState()</code> 修改状态</li></ol><ul><li><code>shouldComponentUpdate</code></li><li><code>componentWillUpdate</code></li><li><code>render</code></li><li><code>componentDidUpdate</code></li></ul><ol><li>组件内部调用 <code>this.forceUpdate()</code> 强制更新</li></ol><ul><li><code>componentWillUpdate</code></li><li><code>render</code></li><li><code>componentDidUpdate</code></li></ul><p><strong>卸载阶段</strong>：<code>ReactDOM.unmountComponentAtNode()</code> 触发</p><ul><li><code>componentWillUnmount</code></li></ul><p><img src="https://gitee.com/brucecai55520/bruceblog/raw/master/docs/notes/react/images/react-lifecyle-old.png" alt="React Lifecycle"></p><h3 id="生命周期新版" tabindex="-1">生命周期新版 <a class="header-anchor" href="#生命周期新版" aria-label="Permalink to &quot;生命周期新版&quot;">​</a></h3><p><a href="https://gitee.com/link?target=https%3A%2F%2Fzh-hans.reactjs.org%2Fblog%2F2018%2F03%2F27%2Fupdate-on-async-rendering.html" target="_blank" rel="noreferrer">更改内容</a>：</p><ul><li>废弃三个钩子：<code>componentWillMount</code> 、<code>componentWillReceiveProps</code> 、 <code>componentWillUpdate</code> 。在新版本中这三个钩子需要加 <code>UNSAFE_</code> 前缀才能使用，后续可能会废弃。</li><li>新增两个钩子（实际场景用得很少）：<code>getDerivedStateFromProps</code> 、<code>getSnapshotBeforeUpdate</code></li></ul><p><img src="https://gitee.com/brucecai55520/bruceblog/raw/master/docs/notes/react/images/react-lifecycle-new.png" alt="React LIfecycle New"></p><p><a href="https://gitee.com/link?target=https%3A%2F%2Fzh-hans.reactjs.org%2Fdocs%2Freact-component.html%23static-getderivedstatefromprops" target="_blank" rel="noreferrer">static getDerivedStateFromProps(props, state)</a>：</p><ul><li>需使用 <code>static</code> 修饰</li><li>需返回一个对象更新 <code>state</code> 或返回 <code>null</code></li><li>适用于如下情况：<code>state</code> 的值任何时候都取决于 <code>props</code></li></ul><p><a href="https://gitee.com/link?target=https%3A%2F%2Fzh-hans.reactjs.org%2Fdocs%2Freact-component.html%23getsnapshotbeforeupdate" target="_blank" rel="noreferrer">getSnapshotBeforeUpdate(prevProps, prevState)</a>：</p><ul><li>在组件更新之前获取快照</li><li>得组件能在发生更改之前从 DOM 中捕获一些信息（如滚动位置）</li><li>返回值将作为参数传递给 <code>componentDidUpdate()</code></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>static getDerivedStateFromProps(props,state){</span></span>
<span class="line"><span>  console.log(&#39;getDerivedStateFromProps&#39;,props,state);</span></span>
<span class="line"><span>  return null</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>getSnapshotBeforeUpdate(){</span></span>
<span class="line"><span>  console.log(&#39;getSnapshotBeforeUpdate&#39;);</span></span>
<span class="line"><span>  return &#39;atguigu&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>componentDidUpdate(preProps,preState,snapshotValue){</span></span>
<span class="line"><span>  console.log(&#39;componentDidUpdate&#39;,preProps,preState,snapshotValue);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// getSnapshotBeforeUpdate 案例</span></span>
<span class="line"><span>class NewsList extends React.Component {</span></span>
<span class="line"><span>  state = { newsArr: [] }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  componentDidMount() {</span></span>
<span class="line"><span>    setInterval(() =&gt; {</span></span>
<span class="line"><span>      //获取原状态</span></span>
<span class="line"><span>      const { newsArr } = this.state</span></span>
<span class="line"><span>      //模拟一条新闻</span></span>
<span class="line"><span>      const news = &#39;新闻&#39; + (newsArr.length + 1)</span></span>
<span class="line"><span>      //更新状态</span></span>
<span class="line"><span>      this.setState({ newsArr: [news, ...newsArr] })</span></span>
<span class="line"><span>    }, 1000)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  getSnapshotBeforeUpdate() {</span></span>
<span class="line"><span>    return this.refs.list.scrollHeight</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  componentDidUpdate(preProps, preState, height) {</span></span>
<span class="line"><span>    this.refs.list.scrollTop += this.refs.list.scrollHeight - height</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div className=&quot;list&quot; ref=&quot;list&quot;&gt;</span></span>
<span class="line"><span>        {this.state.newsArr.map((n, index) =&gt; {</span></span>
<span class="line"><span>          return (</span></span>
<span class="line"><span>            &lt;div key={index} className=&quot;news&quot;&gt;</span></span>
<span class="line"><span>              {n}</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>          )</span></span>
<span class="line"><span>        })}</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>ReactDOM.render(&lt;NewsList /&gt;, document.getElementById(&#39;test&#39;))</span></span></code></pre></div><h3 id="最重要的三个钩子" tabindex="-1">最重要的三个钩子 <a class="header-anchor" href="#最重要的三个钩子" aria-label="Permalink to &quot;最重要的三个钩子&quot;">​</a></h3><ul><li><code>render</code> ：初始化渲染和更新渲染</li><li><code>componentDidMount</code> ：进行初始化，如开启定时器、发送网络请求、订阅消息</li><li><code>componentWillUnmount</code> ：进行收尾，如关闭定时器、取消订阅消息</li></ul><h2 id="虚拟-dom-与-diff-算法" tabindex="-1">虚拟 DOM 与 Diff 算法 <a class="header-anchor" href="#虚拟-dom-与-diff-算法" aria-label="Permalink to &quot;虚拟 DOM 与 Diff 算法&quot;">​</a></h2><p><img src="https://gitee.com/brucecai55520/bruceblog/raw/master/docs/notes/react/images/Diff.png" alt="Diff"></p><p><strong><code>key</code> 的作用：</strong></p><p><code>key</code> 是虚拟 DOM 对象的标识，可提高页面更新渲染的效率。</p><p>当状态中的数据发生变化时，React 会根据新数据生成新的虚拟 DOM ，接着对新旧虚拟 DOM 进行 Diff 比较，规则如下：</p><ul><li>旧虚拟 DOM 找到和新虚拟 DOM 相同的 key： <ul><li>若内容没变，直接复用真实 DOM</li><li>若内容改变，则生成新的真实 DOM ，替换页面中之前的真实 DOM</li></ul></li><li>旧虚拟 DOM 未找到和新虚拟 DOM 相同的 key：根据数据创建新的真实 DOM ，渲染到页面</li></ul><p><strong>使用 <code>index</code> 作为 <code>key</code> 可能引发的问题：</strong></p><ul><li>若对数据进行逆序添加、逆序删除等破坏顺序的操作，会进行没有必要的真实 DOM 更新。界面效果没问题，但效率低下。</li><li>如果结构中包含输入类的 DOM（如 input 输入框） ，则会产生错误的 DOM 更新。</li><li>若不存在对数据逆序添加、逆序删除等破坏顺序的操作，则没有问题。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 使用 index 作为 key 引发的问题</span></span>
<span class="line"><span>class Person extends React.Component {</span></span>
<span class="line"><span>  state = {</span></span>
<span class="line"><span>    persons: [</span></span>
<span class="line"><span>      { id: 1, name: &#39;小张&#39;, age: 18 },</span></span>
<span class="line"><span>      { id: 2, name: &#39;小李&#39;, age: 19 },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  add = () =&gt; {</span></span>
<span class="line"><span>    const { persons } = this.state</span></span>
<span class="line"><span>    const p = { id: persons.length + 1, name: &#39;小王&#39;, age: 20 }</span></span>
<span class="line"><span>    this.setState({ persons: [p, ...persons] })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;h2&gt;展示人员信息&lt;/h2&gt;</span></span>
<span class="line"><span>        &lt;button onClick={this.add}&gt;添加小王&lt;/button&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;使用index作为key&lt;/h3&gt;</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>          {this.state.persons.map((personObj, index) =&gt; {</span></span>
<span class="line"><span>            return (</span></span>
<span class="line"><span>              &lt;li key={index}&gt;</span></span>
<span class="line"><span>                {personObj.name}---{personObj.age}</span></span>
<span class="line"><span>                &lt;input type=&quot;text&quot; /&gt;</span></span>
<span class="line"><span>              &lt;/li&gt;</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>          })}</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h1 id="react-脚手架" tabindex="-1">React 脚手架 <a class="header-anchor" href="#react-脚手架" aria-label="Permalink to &quot;React 脚手架&quot;">​</a></h1><h2 id="创建-react-项目" tabindex="-1">创建 React 项目 <a class="header-anchor" href="#创建-react-项目" aria-label="Permalink to &quot;创建 React 项目&quot;">​</a></h2><ul><li>全局安装 React 脚手架：<code>npm i -g create-react-app</code></li><li>创建项目：<code>create-react-app 项目名称</code></li><li>进入文件夹：<code>cd 项目名称</code></li><li>启动项目：<code>npm start</code></li></ul><p>上述方式已经过时，改用下方命令。详见<a href="https://gitee.com/link?target=https%3A%2F%2Fcreate-react-app.dev%2Fdocs%2Fgetting-started" target="_blank" rel="noreferrer">官方说明</a>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npx create-react-app my-app</span></span>
<span class="line"><span>cd my-app</span></span>
<span class="line"><span>npm start</span></span></code></pre></div><h2 id="react-脚手架项目结构" tabindex="-1">React 脚手架项目结构 <a class="header-anchor" href="#react-脚手架项目结构" aria-label="Permalink to &quot;React 脚手架项目结构&quot;">​</a></h2><p><code>public</code> ：静态资源文件</p><ul><li><code>manifest.json</code> ：应用加壳（把网页变成安卓/IOS 软件）的配置文件</li><li><code>robots.txt</code> ：爬虫协议文件</li></ul><p><code>src</code> ：源码文件</p><ul><li><code>App.test.js</code> ：用于给 <code>App</code> 组件做测试，一般不用</li><li><code>index.js</code> ：入口文件</li><li><code>reportWebVitals.js</code> ：页面性能分析文件，需要 <code>web-vitals</code> 库支持</li><li><code>setupTests.js</code> ：组件单元测试文件，需要 <code>jest-dom</code> 库支持</li></ul><p><img src="https://gitee.com/brucecai55520/bruceblog/raw/master/docs/notes/react/images/React-cli.png" alt="React-cli structure"></p><p><code>index.html</code> 代码分析：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span>&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span>  &lt;head&gt;</span></span>
<span class="line"><span>    &lt;meta charset=&quot;utf-8&quot; /&gt;</span></span>
<span class="line"><span>    &lt;!-- %PUBLIC_URL% 代表 public 文件夹的路径 --&gt;</span></span>
<span class="line"><span>    &lt;link rel=&quot;icon&quot; href=&quot;%PUBLIC_URL%/favicon.ico&quot; /&gt;</span></span>
<span class="line"><span>    &lt;!-- 开启理想视口，用于做移动端网页的适配 --&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; /&gt;</span></span>
<span class="line"><span>    &lt;!-- 用于配置浏览器页签+地址栏的颜色(仅支持安卓手机浏览器) --&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;theme-color&quot; content=&quot;red&quot; /&gt;</span></span>
<span class="line"><span>    &lt;!-- 网站描述 --&gt;</span></span>
<span class="line"><span>    &lt;meta name=&quot;description&quot; content=&quot;Web site created using create-react-app&quot; /&gt;</span></span>
<span class="line"><span>    &lt;!-- 用于指定网页添加到手机主屏幕后的图标 --&gt;</span></span>
<span class="line"><span>    &lt;link rel=&quot;apple-touch-icon&quot; href=&quot;%PUBLIC_URL%/logo192.png&quot; /&gt;</span></span>
<span class="line"><span>    &lt;!-- 应用加壳时的配置文件 --&gt;</span></span>
<span class="line"><span>    &lt;link rel=&quot;manifest&quot; href=&quot;%PUBLIC_URL%/manifest.json&quot; /&gt;</span></span>
<span class="line"><span>    &lt;title&gt;React App&lt;/title&gt;</span></span>
<span class="line"><span>  &lt;/head&gt;</span></span>
<span class="line"><span>  &lt;body&gt;</span></span>
<span class="line"><span>    &lt;!-- 若浏览器不支持 js 则展示标签中的内容 --&gt;</span></span>
<span class="line"><span>    &lt;noscript&gt;You need to enable JavaScript to run this app.&lt;/noscript&gt;</span></span>
<span class="line"><span>    &lt;div id=&quot;root&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>  &lt;/body&gt;</span></span>
<span class="line"><span>&lt;/html&gt;</span></span></code></pre></div><h2 id="样式的模块化" tabindex="-1">样式的模块化 <a class="header-anchor" href="#样式的模块化" aria-label="Permalink to &quot;样式的模块化&quot;">​</a></h2><p>样式的模块化可用于解决样式冲突的问题。该方法比较麻烦，实际开发用的比较少。用 <code>less</code> 就能解决了。</p><p><code>component/Hello</code> 文件下的 <code>index.css</code> 改名为 <code>index.module.css</code> 。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>.title {</span></span>
<span class="line"><span>  background-color: orange;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>Hello</code> 组件导入样式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { Component } from &#39;react&#39;</span></span>
<span class="line"><span>import hello from &#39;./index.module.css&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default class Hello extends Component {</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return &lt;h2 className={hello.title}&gt;Hello,React!&lt;/h2&gt;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="todolist-案例总结" tabindex="-1">TodoList 案例总结 <a class="header-anchor" href="#todolist-案例总结" aria-label="Permalink to &quot;TodoList 案例总结&quot;">​</a></h2><ol><li>拆分组件、实现静态组件，注意：<code>className</code> 、<code>style</code> 的写法</li><li>动态初始化列表，如何确定将数据放在哪个组件的 <code>state</code> 中？</li></ol><ul><li>某个组件使用：放在其自身的 <code>state</code> 中</li><li>某些组件使用：放在他们共同的父组件 <code>state</code> 中，即<strong>状态提升</strong></li></ul><ol><li>关于父子之间通信：</li></ol><ul><li>父传子：直接通过 <code>props</code> 传递</li><li>子传父：父组件通过 <code>props</code> 给子组件传递一个函数，子组件调用该函数</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 父组件</span></span>
<span class="line"><span>class Father extends Component {</span></span>
<span class="line"><span>  state: {</span></span>
<span class="line"><span>    todos: [{ id: &#39;001&#39;, name: &#39;吃饭&#39;, done: true }],</span></span>
<span class="line"><span>    flag: true,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  addTodo = (todo) =&gt; {</span></span>
<span class="line"><span>    const { todos } = this.state</span></span>
<span class="line"><span>    const newTodos = [todo, ...todos]</span></span>
<span class="line"><span>    this.setState({ todos: newTodos })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return &lt;List todos={this.state.todos} addTodo={this.addTodo} /&gt;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 子组件</span></span>
<span class="line"><span>class Son extends Component {</span></span>
<span class="line"><span>  // 由于 addTodo 是箭头函数，this 指向父组件实例对象，因此子组件调用它相当于父组件实例在调用</span></span>
<span class="line"><span>  handleClick = () =&gt; {</span></span>
<span class="line"><span>    this.props.addTodo({ id: &#39;002&#39;, name: &#39;敲代码&#39;, done: false })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return &lt;button onClick={this.handleClick}&gt;添加&lt;/button&gt;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol><li>注意 <code>defaultChecked</code> 和 <code>checked</code> 的区别，类似的还有：<code>defaultValue</code> 和 <code>value</code></li><li>状态在哪里，操作状态的方法就在哪里</li></ol><h1 id="react-网络请求" tabindex="-1">React 网络请求 <a class="header-anchor" href="#react-网络请求" aria-label="Permalink to &quot;React 网络请求&quot;">​</a></h1><h2 id="react-脚手架配置代理" tabindex="-1">React 脚手架配置代理 <a class="header-anchor" href="#react-脚手架配置代理" aria-label="Permalink to &quot;React 脚手架配置代理&quot;">​</a></h2><p>方法一：</p><p>在 <code>package.json</code> 文件中进行配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;proxy&quot;: &quot;http://localhost:5000&quot;</span></span></code></pre></div><ul><li>优点：配置简单，前端请求资源可不加前缀</li><li>缺点：不能配置多个代理</li><li>工作方式：当请求了 3000 端口号（本机）不存在的资源时，就会把请求转发给 5000 端口号服务器</li></ul><p>方法二：</p><p>在 <code>src</code> 目录下创建代理配置文件 <code>setupProxy.js</code> ，进行配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const proxy = require(&#39;http-proxy-middleware&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = function (app) {</span></span>
<span class="line"><span>  app.use(</span></span>
<span class="line"><span>    //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)</span></span>
<span class="line"><span>    proxy(&#39;/api1&#39;, {</span></span>
<span class="line"><span>      //配置转发目标地址(能返回数据的服务器地址)</span></span>
<span class="line"><span>      target: &#39;http://localhost:5000&#39;,</span></span>
<span class="line"><span>      //控制服务器接收到的请求头中host字段的值</span></span>
<span class="line"><span>      /*</span></span>
<span class="line"><span>      changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000</span></span>
<span class="line"><span>      changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000</span></span>
<span class="line"><span>      changeOrigin默认值为false，但一般将changeOrigin改为true</span></span>
<span class="line"><span>      */</span></span>
<span class="line"><span>      changeOrigin: true,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)</span></span>
<span class="line"><span>      pathRewrite: { &#39;^/api1&#39;: &#39;&#39; },</span></span>
<span class="line"><span>    }),</span></span>
<span class="line"><span>    proxy(&#39;/api2&#39;, {</span></span>
<span class="line"><span>      target: &#39;http://localhost:5001&#39;,</span></span>
<span class="line"><span>      changeOrigin: true,</span></span>
<span class="line"><span>      pathRewrite: { &#39;^/api2&#39;: &#39;&#39; },</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="消息订阅-发布机制" tabindex="-1">消息订阅-发布机制 <a class="header-anchor" href="#消息订阅-发布机制" aria-label="Permalink to &quot;消息订阅-发布机制&quot;">​</a></h2><p>即 React 中兄弟组件或任意组件之间的通信方式。</p><p>使用的工具库：<a href="https://gitee.com/link?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fpubsub-js" target="_blank" rel="noreferrer">PubSubJS</a></p><p>下载安装 <code>PubSubJS</code> ：<code>npm install pubsub-js --save</code></p><p>基础用法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import PubSub from &#39;pubsub-js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 订阅消息</span></span>
<span class="line"><span>var token = PubSub.subscribe(&#39;topic&#39;, (msg, data) =&gt; {</span></span>
<span class="line"><span>  console.log(msg, data)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 发布消息</span></span>
<span class="line"><span>PubSub.publish(&#39;topic&#39;, &#39;hello react&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 取消订阅</span></span>
<span class="line"><span>PubSub.unsubscribe(token)</span></span></code></pre></div><h2 id="github-搜索框案例知识点总结" tabindex="-1">Github 搜索框案例知识点总结 <a class="header-anchor" href="#github-搜索框案例知识点总结" aria-label="Permalink to &quot;Github 搜索框案例知识点总结&quot;">​</a></h2><ol><li>设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办。</li><li>ES6 知识点：解构赋值 + 重命名</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let obj = { a: { b: 1 } }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//传统解构赋值</span></span>
<span class="line"><span>const { a } = obj</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//连续解构赋值</span></span>
<span class="line"><span>const {</span></span>
<span class="line"><span>  a: { b },</span></span>
<span class="line"><span>} = obj</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//连续解构赋值 + 重命名</span></span>
<span class="line"><span>const {</span></span>
<span class="line"><span>  a: { b: value },</span></span>
<span class="line"><span>} = obj</span></span></code></pre></div><ol><li>消息订阅与发布机制</li></ol><ul><li>先订阅，再发布（隔空对话）</li><li>适用于任意组件间通信</li><li>要在 <code>componentWillUnmount</code> 钩子中取消订阅</li></ul><ol><li><code>fetch</code> 发送请求（<strong>关注分离</strong>的设计思想）</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>try {</span></span>
<span class="line"><span>  // 先看服务器是否联系得上</span></span>
<span class="line"><span>  const response = await fetch(\`/api1/search/users2?q=\${keyWord}\`)</span></span>
<span class="line"><span>  // 再获取数据</span></span>
<span class="line"><span>  const data = await response.json()</span></span>
<span class="line"><span>  console.log(data)</span></span>
<span class="line"><span>} catch (error) {</span></span>
<span class="line"><span>  console.log(&#39;请求出错&#39;, error)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h1 id="react-路由" tabindex="-1">React 路由 <a class="header-anchor" href="#react-路由" aria-label="Permalink to &quot;React 路由&quot;">​</a></h1><h2 id="路由的理解" tabindex="-1">路由的理解 <a class="header-anchor" href="#路由的理解" aria-label="Permalink to &quot;路由的理解&quot;">​</a></h2><p>何为路由？</p><ul><li>一个路由是一个映射关系</li><li><code>key</code> 为路径，<code>value</code> 可能是 <code>function</code> 或 组件</li></ul><p>后端路由：</p><ul><li><code>value</code> 是 <code>function</code> ，用于处理客户端的请求</li><li>注册路由：<code>router.get(path, function(req, res))</code></li><li>工作过程：Node 接收到请求，根据路径匹配路由，调用对应函数处理请求，返回响应数据</li></ul><p>前端路由：</p><ul><li><code>value</code> 是组件</li><li>注册路由：<code>&lt;Route path=&quot;/test&quot; component={Test}&gt;</code></li><li>工作过程：浏览器路径变为 <code>/test</code> ，展示 <code>Test</code> 组件</li></ul><h2 id="路由基本使用" tabindex="-1">路由基本使用 <a class="header-anchor" href="#路由基本使用" aria-label="Permalink to &quot;路由基本使用&quot;">​</a></h2><p>安装 <code>react-router-dom</code> ：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 安装 5.X 版本路由</span></span>
<span class="line"><span>npm install react-router-dom@5.2.0 -S</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 最新已经 6.X 版本，用法和 5.X 有所不同</span></span>
<span class="line"><span>npm install react-router-dom -S</span></span></code></pre></div><p><code>6.x</code> 版本的用法参考<a href="https://gitee.com/link?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F191419879" target="_blank" rel="noreferrer">文章</a></p><p>以 <code>5.x</code> 版本为例展示基本使用：</p><p>导航区使用 <code>&lt;Link&gt;</code>，展示区使用 <code>&lt;Route&gt;</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// App.jsx</span></span>
<span class="line"><span>import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span>import { Link, Route } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span>import Home from &#39;./components/Home&#39;</span></span>
<span class="line"><span>import About from &#39;./components/About&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default class App extends Component {</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div className=&quot;list-group&quot;&gt;</span></span>
<span class="line"><span>          &lt;Link className=&quot;list-group-item&quot; to=&quot;/about&quot;&gt;</span></span>
<span class="line"><span>            About</span></span>
<span class="line"><span>          &lt;/Link&gt;</span></span>
<span class="line"><span>          &lt;Link className=&quot;list-group-item&quot; to=&quot;/home&quot;&gt;</span></span>
<span class="line"><span>            Home</span></span>
<span class="line"><span>          &lt;/Link&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div className=&quot;panel-body&quot;&gt;</span></span>
<span class="line"><span>          &lt;Route path=&quot;/about&quot; component={About} /&gt;</span></span>
<span class="line"><span>          &lt;Route path=&quot;/home&quot; component={Home} /&gt;</span></span>
<span class="line"><span>        &lt;/div&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>&lt;App&gt;</code> 的最外侧包裹 <code>&lt;BrowserRouter&gt;</code> 或 <code>&lt;HashRouter&gt;</code> ：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// index.js</span></span>
<span class="line"><span>import React from &#39;react&#39;</span></span>
<span class="line"><span>import ReactDOM from &#39;react-dom&#39;</span></span>
<span class="line"><span>import { BrowserRouter } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span>import App from &#39;./App&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ReactDOM.render(</span></span>
<span class="line"><span>  &lt;BrowserRouter&gt;</span></span>
<span class="line"><span>    &lt;App /&gt;</span></span>
<span class="line"><span>  &lt;/BrowserRouter&gt;,</span></span>
<span class="line"><span>  document.getElementById(&#39;root&#39;)</span></span>
<span class="line"><span>)</span></span></code></pre></div><h2 id="路由组件和一般组件" tabindex="-1">路由组件和一般组件 <a class="header-anchor" href="#路由组件和一般组件" aria-label="Permalink to &quot;路由组件和一般组件&quot;">​</a></h2><ol><li>写法不同：</li></ol><ul><li>一般组件：<code>&lt;Demo/&gt;</code></li><li>路由组件：<code>&lt;Route path=&quot;/demo&quot; component={Demo}/&gt;</code></li></ul><ol><li>存放位置不同：</li></ol><ul><li>一般组件：<code>components</code></li><li>路由组件：<code>pages</code></li></ul><ol><li>接收到的 <code>props</code> 不同：</li></ol><ul><li>一般组件：标签属性传递</li><li>路由组件：接收到三个固定的属性</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>history:</span></span>
<span class="line"><span>  go: ƒ go(n)</span></span>
<span class="line"><span>  goBack: ƒ goBack()</span></span>
<span class="line"><span>  goForward: ƒ goForward()</span></span>
<span class="line"><span>  push: ƒ push(path, state)</span></span>
<span class="line"><span>  replace: ƒ replace(path, state)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>location:</span></span>
<span class="line"><span>  pathname: &quot;/home/message/detail/2/hello&quot;</span></span>
<span class="line"><span>  search: &quot;&quot;</span></span>
<span class="line"><span>  state: undefined</span></span>
<span class="line"><span></span></span>
<span class="line"><span>match:</span></span>
<span class="line"><span>  params: {}</span></span>
<span class="line"><span>  path: &quot;/home/message/detail/:id/:title&quot;</span></span>
<span class="line"><span>  url: &quot;/home/message/detail/2/hello&quot;</span></span></code></pre></div><h2 id="navlink-的使用" tabindex="-1">NavLink 的使用 <a class="header-anchor" href="#navlink-的使用" aria-label="Permalink to &quot;NavLink 的使用&quot;">​</a></h2><p><code>NavLink</code> 可以实现路由链接的高亮，通过 <code>activeClassName</code> 指定样式名，默认追加类名为 <code>active</code> 。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;NavLink activeClassName=&quot;demo&quot; to=&quot;/about&quot;&gt;About&lt;/NavLink&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;NavLink activeClassName=&quot;demo&quot; to=&quot;/home&quot;&gt;Home&lt;/NavLink&gt;</span></span></code></pre></div><p>封装 <code>NavLink</code> 组件：由于 <code>NavLink</code> 组件中重复的代码太多，因此进行二次封装。</p><p>※ 细节点：组件标签的内容会传递到 <code>this.props.children</code> 属性中，反过来通过指定标签的 <code>children</code> 属性可以修改组件标签内容</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// MyNavLink 组件</span></span>
<span class="line"><span>import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span>import { NavLink } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default class MyNavLink extends Component {</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    // this.props.children 可以取到标签内容，如 About, Home</span></span>
<span class="line"><span>    // 反过来通过指定标签的 children 属性可以修改标签内容</span></span>
<span class="line"><span>    return &lt;NavLink activeClassName=&quot;demo&quot; className=&quot;list-group-item&quot; {...this.props} /&gt;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;MyNavLink to=&quot;/about&quot;&gt;About&lt;/MyNavLink&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;MyNavLink to=&quot;/home&quot;&gt;Home&lt;/MyNavLink&gt;</span></span></code></pre></div><h2 id="switch-的使用" tabindex="-1">Switch 的使用 <a class="header-anchor" href="#switch-的使用" aria-label="Permalink to &quot;Switch 的使用&quot;">​</a></h2><p><code>Switch</code> 可以提高路由匹配效率，如果匹配成功，则不再继续匹配后面的路由，即单一匹配。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- 只会展示 Home 组件 --&gt;</span></span>
<span class="line"><span>&lt;Switch&gt;</span></span>
<span class="line"><span>  &lt;Route path=&quot;/about&quot; component=&quot;{About}&quot; /&gt;</span></span>
<span class="line"><span>  &lt;Route path=&quot;/home&quot; component=&quot;{Home}&quot; /&gt;</span></span>
<span class="line"><span>  &lt;Route path=&quot;/home&quot; component=&quot;{Test}&quot; /&gt;</span></span>
<span class="line"><span>&lt;/Switch&gt;</span></span></code></pre></div><h2 id="解决多级路径刷新页面样式丢失的问题" tabindex="-1">解决多级路径刷新页面样式丢失的问题 <a class="header-anchor" href="#解决多级路径刷新页面样式丢失的问题" aria-label="Permalink to &quot;解决多级路径刷新页面样式丢失的问题&quot;">​</a></h2><ul><li><code>public/index.html</code> 中 引入样式时不写 <code>./</code> 写 <code>/</code> （常用）</li><li><code>public/index.html</code> 中 引入样式时不写 <code>./</code> 写 <code>%PUBLIC_URL%</code> （常用）</li><li>使用 <code>HashRouter</code></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;link rel=&quot;stylesheet&quot; href=&quot;/css/bootstrap.css&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;link rel=&quot;stylesheet&quot; href=&quot;%PUBLIC_URL%/css/bootstrap.css&quot; /&gt;</span></span></code></pre></div><h2 id="路由的严格匹配与模糊匹配" tabindex="-1">路由的严格匹配与模糊匹配 <a class="header-anchor" href="#路由的严格匹配与模糊匹配" aria-label="Permalink to &quot;路由的严格匹配与模糊匹配&quot;">​</a></h2><ul><li>默认使用模糊匹配（输入的路径必须包含要匹配的路径，且顺序一致）</li><li>开启严格匹配：<code>&lt;Route exact path=&quot;/about&quot; component={About}/&gt;</code></li><li>严格匹配需要再开，开启可能会导致无法继续匹配二级路由</li></ul><h2 id="redirect-的使用" tabindex="-1">Redirect 的使用 <a class="header-anchor" href="#redirect-的使用" aria-label="Permalink to &quot;Redirect 的使用&quot;">​</a></h2><ul><li>一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到 Redirect 指定的路由</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;Switch&gt;</span></span>
<span class="line"><span>  &lt;Route path=&quot;/about&quot; component=&quot;{About}&quot; /&gt;</span></span>
<span class="line"><span>  &lt;Route path=&quot;/home&quot; component=&quot;{Home}&quot; /&gt;</span></span>
<span class="line"><span>  &lt;Redirect to=&quot;/about&quot; /&gt;</span></span>
<span class="line"><span>&lt;/Switch&gt;</span></span></code></pre></div><h2 id="嵌套路由" tabindex="-1">嵌套路由 <a class="header-anchor" href="#嵌套路由" aria-label="Permalink to &quot;嵌套路由&quot;">​</a></h2><ul><li>注册子路由需写上父路由的 <code>path</code></li><li>路由的匹配是按照注册路由的顺序进行的</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- 父组件 --&gt;</span></span>
<span class="line"><span>&lt;MyNavLink to=&quot;/about&quot;&gt;About&lt;/MyNavLink&gt;</span></span>
<span class="line"><span>&lt;MyNavLink to=&quot;/home&quot;&gt;Home&lt;/MyNavLink&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;Switch&gt;</span></span>
<span class="line"><span>  &lt;Route path=&quot;/about&quot; component=&quot;{About}&quot; /&gt;</span></span>
<span class="line"><span>  &lt;Route path=&quot;/home&quot; component=&quot;{Home}&quot; /&gt;</span></span>
<span class="line"><span>  &lt;Redirect to=&quot;/about&quot; /&gt;</span></span>
<span class="line"><span>&lt;/Switch&gt;</span></span>
<span class="line"><span>&lt;!-- 子组件 --&gt;</span></span>
<span class="line"><span>&lt;ul className=&quot;nav nav-tabs&quot;&gt;</span></span>
<span class="line"><span>  &lt;li&gt;</span></span>
<span class="line"><span>    &lt;MyNavLink to=&quot;/home/news&quot;&gt;News&lt;/MyNavLink&gt;</span></span>
<span class="line"><span>  &lt;/li&gt;</span></span>
<span class="line"><span>  &lt;li&gt;</span></span>
<span class="line"><span>    &lt;MyNavLink to=&quot;/home/message&quot;&gt;Message&lt;/MyNavLink&gt;</span></span>
<span class="line"><span>  &lt;/li&gt;</span></span>
<span class="line"><span>&lt;/ul&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;Switch&gt;</span></span>
<span class="line"><span>  &lt;Route path=&quot;/home/news&quot; component=&quot;{News}&quot; /&gt;</span></span>
<span class="line"><span>  &lt;Route path=&quot;/home/message&quot; component=&quot;{Message}&quot; /&gt;</span></span>
<span class="line"><span>  &lt;Redirect to=&quot;/home/news&quot; /&gt;</span></span>
<span class="line"><span>&lt;/Switch&gt;</span></span></code></pre></div><h2 id="路由传参" tabindex="-1">路由传参 <a class="header-anchor" href="#路由传参" aria-label="Permalink to &quot;路由传参&quot;">​</a></h2><p>三种方式：<code>params, search, state</code> 参数</p><p>三种方式对比：</p><ul><li><code>state</code> 方式当前页面刷新可保留参数，但在新页面打开不能保留。前两种方式由于参数保存在 URL 地址上，因此都能保留参数。</li><li><code>params</code> 和 <code>search</code> 参数都会变成字符串</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;!-- 路由链接 --&gt;</span></span>
<span class="line"><span>&lt;Link to=&#39;/home/message/detail/Bruce/21&#39;&gt;params&lt;/Link&gt;</span></span>
<span class="line"><span>&lt;Link to={\`/home/message/detail/\${item.name}/\${item.age}\`}&gt;{item.name}&lt;/Link&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;Link to=&#39;/home/message/detail/?name=Bruce&amp;age=21&#39;&gt;search&lt;/Link&gt;</span></span>
<span class="line"><span>&lt;Link to={\`/home/message/detail/?id=\${item.name}&amp;title=\${item.age}\`}&gt;{item.name}&lt;/Link&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;Link to={{pathname: &#39;/home/message/detail&#39;, state: {name: &#39;Bruce&#39;, age: 21}}}&gt;state&lt;/Link&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;!-- 注册路由 --&gt;</span></span>
<span class="line"><span>&lt;Route path=&#39;/home/message/detail/:name/:age&#39; component={Detail} /&gt;</span></span>
<span class="line"><span>&lt;!-- search 和 state 按正常注册即可 --&gt;</span></span>
<span class="line"><span>&lt;Route path=&#39;/home/message/detail&#39; component={Detail} /&gt;</span></span>
<span class="line"><span>//接收参数</span></span>
<span class="line"><span>const { name, age } = this.props.match.params</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import qs from &#39;querystring&#39;</span></span>
<span class="line"><span>const { search } = this.props.location</span></span>
<span class="line"><span>const { name, age } = qs.parse(search.slice(1))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const { name, age } = this.props.location.state</span></span></code></pre></div><h2 id="编程式导航" tabindex="-1">编程式导航 <a class="header-anchor" href="#编程式导航" aria-label="Permalink to &quot;编程式导航&quot;">​</a></h2><p>编程式导航是使用路由组件 <code>this.props.history</code> 提供的 API 进行路由跳转：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>this.props.history.push(path, state)</span></span>
<span class="line"><span>this.props.history.replace(path, state)</span></span>
<span class="line"><span>this.props.history.goForward()</span></span>
<span class="line"><span>this.props.history.goBack()</span></span>
<span class="line"><span>this.props.history.go(n)</span></span>
<span class="line"><span>// 编程式导航传参</span></span>
<span class="line"><span>this.props.history.push(\`/home/message/detail/\${id}/\${title}\`)</span></span>
<span class="line"><span>this.props.history.push(\`/home/message/detail?id=\${id}&amp;title=\${title}\`)</span></span>
<span class="line"><span>this.props.history.push(\`/home/message/detail\`, { id: id, title: title })</span></span></code></pre></div><h2 id="withrouter-的使用" tabindex="-1">withRouter 的使用 <a class="header-anchor" href="#withrouter-的使用" aria-label="Permalink to &quot;withRouter 的使用&quot;">​</a></h2><p><code>withRouter</code> 的作用：加工一般组件，让其拥有路由组件的 API ，如 <code>this.props.history.push</code> 等。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import React, {Component} from &#39;react&#39;</span></span>
<span class="line"><span>import {withRouter} from &#39;react-router-dom&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Header extends Component {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default withRouter(Header)</span></span></code></pre></div><h2 id="browserrouter-和-hashrouter" tabindex="-1">BrowserRouter 和 HashRouter <a class="header-anchor" href="#browserrouter-和-hashrouter" aria-label="Permalink to &quot;BrowserRouter 和 HashRouter&quot;">​</a></h2><p>底层原理不一样：</p><ul><li><code>BrowserRouter</code> 使用的是 H5 的 history API，不兼容 IE9 及以下版本。</li><li><code>HashRouter</code> 使用的是 URL 的哈希值。</li></ul><p>路径表现形式不一样</p><ul><li><code>BrowserRouter</code> 的路径中没有 <code>#</code> ，如：<code>localhost:3000/demo/test</code></li><li><code>HashRouter</code> 的路径包含#，如：<code>localhost:3000/#/demo/test</code></li></ul><p>刷新后对路由 <code>state</code> 参数的影响</p><ul><li><code>BrowserRouter</code> 没有影响，因为 <code>state</code> 保存在 <code>history</code> 对象中。</li><li><code>HashRouter</code> 刷新后会导致路由 <code>state</code> 参数的丢失！</li></ul><p>备注：<code>HashRouter</code> 可以用于解决一些路径错误相关的<a href="https://gitee.com/brucecai55520/bruceblog/blob/master/docs/notes/react/react-router5.md#%E8%A7%A3%E5%86%B3%E5%A4%9A%E7%BA%A7%E8%B7%AF%E5%BE%84%E5%88%B7%E6%96%B0%E9%A1%B5%E9%9D%A2%E6%A0%B7%E5%BC%8F%E4%B8%A2%E5%A4%B1%E7%9A%84%E9%97%AE%E9%A2%98" target="_blank" rel="noreferrer">问题</a>。</p><h1 id="react-ui-组件库" tabindex="-1">React UI 组件库 <a class="header-anchor" href="#react-ui-组件库" aria-label="Permalink to &quot;React UI 组件库&quot;">​</a></h1><h2 id="ant-design-配置按需引入和自定义主题" tabindex="-1">Ant Design 配置按需引入和自定义主题 <a class="header-anchor" href="#ant-design-配置按需引入和自定义主题" aria-label="Permalink to &quot;Ant Design 配置按需引入和自定义主题&quot;">​</a></h2><blockquote><p>以下配置是 <code>3.x</code> 版本，<code>4.x</code> 版本见<a href="https://gitee.com/link?target=https%3A%2F%2F3x.ant.design%2Findex-cn" target="_blank" rel="noreferrer">官网</a></p></blockquote><ol><li>安装依赖：</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install react-app-rewired customize-cra babel-plugin-import less less-loader</span></span></code></pre></div><ol><li>修改 <code>package.json</code></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>  &quot;start&quot;: &quot;react-app-rewired start&quot;,</span></span>
<span class="line"><span>  &quot;build&quot;: &quot;react-app-rewired build&quot;,</span></span>
<span class="line"><span>  &quot;test&quot;: &quot;react-app-rewired test&quot;,</span></span>
<span class="line"><span>  &quot;eject&quot;: &quot;react-scripts eject&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol><li>根目录下创建 <code>config-overrides.js</code></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//配置具体的修改规则</span></span>
<span class="line"><span>const { override, fixBabelImports, addLessLoader } = require(&#39;customize-cra&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>module.exports = override(</span></span>
<span class="line"><span>  fixBabelImports(&#39;import&#39;, {</span></span>
<span class="line"><span>    libraryName: &#39;antd&#39;,</span></span>
<span class="line"><span>    libraryDirectory: &#39;es&#39;,</span></span>
<span class="line"><span>    style: true,</span></span>
<span class="line"><span>  }),</span></span>
<span class="line"><span>  addLessLoader({</span></span>
<span class="line"><span>    lessOptions: {</span></span>
<span class="line"><span>      javascriptEnabled: true,</span></span>
<span class="line"><span>      modifyVars: { &#39;@primary-color&#39;: &#39;green&#39; },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>)</span></span></code></pre></div><ol><li>备注：不用在组件里引入样式，<code>import &#39;antd/dist/antd.css&#39;</code> 删掉</li></ol><h1 id="redux" tabindex="-1">Redux <a class="header-anchor" href="#redux" aria-label="Permalink to &quot;Redux&quot;">​</a></h1><p><a href="https://gitee.com/link?target=https%3A%2F%2Fredux.js.org%2F" target="_blank" rel="noreferrer">官网</a></p><p><a href="https://gitee.com/link?target=https%3A%2F%2Fwww.redux.org.cn%2F" target="_blank" rel="noreferrer">中文文档</a></p><h2 id="redux-概述" tabindex="-1">Redux 概述 <a class="header-anchor" href="#redux-概述" aria-label="Permalink to &quot;Redux 概述&quot;">​</a></h2><p>Redux 为何物</p><ul><li>Redux 是用于做 <strong>状态管理</strong> 的 JS 库</li><li>可用于 React、Angular、Vue 等项目中，常用于 React</li><li>集中式管理 React 应用多个组件共享的状态</li></ul><p>何时用 Redux</p><ul><li>某个组件的状态，需要让其他组件拿到（状态共享）</li><li>一个组件需要改变另一个组件的状态（通信）</li><li>使用原则：不到万不得已不要轻易动用</li></ul><p>Redux 工作流程</p><p><img src="https://gitee.com/brucecai55520/bruceblog/raw/master/docs/notes/react/images/redux.png" alt="redux 工作流程图"></p><ul><li>组件想操作 Redux 中的状态：把动作类型和数据告诉 <code>Action Creators</code></li><li><code>Action Creators</code> 创建 <code>action</code> ：同步 <code>action</code> 是一个普通对象，异步 <code>action</code> 是一个函数</li><li><code>Store</code> 调用 <code>dispatch()</code> 分发 <code>action</code> 给 <code>Reducers</code> 执行</li><li><code>Reducers</code> 接收 <code>previousState</code> 、<code>action</code> 两个参数，对状态进行加工后返回新状态</li><li><code>Store</code> 调用 <code>getState()</code> 把状态传给组件</li></ul><h2 id="核心概念" tabindex="-1">核心概念 <a class="header-anchor" href="#核心概念" aria-label="Permalink to &quot;核心概念&quot;">​</a></h2><p><strong><code>action</code></strong> ：</p><ul><li>表示动作的对象，包含 2 个属性</li><li><code>type</code> ：标识属性，值为字符串，唯一，必须属性</li><li><code>data</code> ：数据属性，类型任意，可选属性</li><li><code>{type: &#39;increment&#39;, data: 2}</code></li></ul><p><strong><code>reducer</code></strong> ：</p><ul><li>用于初始化状态、加工状态</li><li>根据旧状态和 <code>action</code> 产生新状态</li><li>是<strong>纯函数</strong></li></ul><blockquote><p>纯函数：输入同样的实参，必定得到同样的输出</p><ul><li>不能改写参数数据</li><li>不产生副作用，如网络请求、输入输出设备（网络请求不稳定）</li><li>不能调用 <code>Date.now()</code> 、<code>Math.random()</code> 等不纯方法</li></ul></blockquote><p><strong><code>store</code></strong> ：</p><ul><li>Redux 核心对象，内部维护着 <code>state</code> 和 <code>reducer</code></li><li>核心 API <ul><li><code>store.getState()</code> ：获取状态</li><li><code>store.dispatch(action)</code> ：分发任务，触发 <code>reducer</code> 调用，产生新状态</li><li><code>store.subscribe(func)</code> ：注册监听函数，当状态改变自动调用</li></ul></li></ul><h2 id="一个求和案例" tabindex="-1">一个求和案例 <a class="header-anchor" href="#一个求和案例" aria-label="Permalink to &quot;一个求和案例&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// App.jsx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span>import Count from &#39;./components/Count&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default class App extends Component {</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;Count /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// index.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import React from &#39;react&#39;</span></span>
<span class="line"><span>import ReactDOM from &#39;react-dom&#39;</span></span>
<span class="line"><span>import App from &#39;./App&#39;</span></span>
<span class="line"><span>import store from &#39;./redux/store&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ReactDOM.render(&lt;App /&gt;, document.getElementById(&#39;root&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 状态改变重新渲染 App 组件</span></span>
<span class="line"><span>store.subscribe(() =&gt; {</span></span>
<span class="line"><span>  ReactDOM.render(&lt;App /&gt;, document.getElementById(&#39;root&#39;))</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span>// redux/constant.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 保存常量值</span></span>
<span class="line"><span>export const INCREMENT = &#39;increment&#39;</span></span>
<span class="line"><span>export const DECREMENT = &#39;decrement&#39;</span></span>
<span class="line"><span>// redux/count_reducer.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { INCREMENT, DECREMENT } from &#39;./constant&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//初始化状态</span></span>
<span class="line"><span>const initState = 0</span></span>
<span class="line"><span>export default function countReducer(preState = initState, action) {</span></span>
<span class="line"><span>  const { type, data } = action</span></span>
<span class="line"><span>  switch (type) {</span></span>
<span class="line"><span>    case INCREMENT:</span></span>
<span class="line"><span>      return preState + data</span></span>
<span class="line"><span>    case DECREMENT:</span></span>
<span class="line"><span>      return preState - data</span></span>
<span class="line"><span>    default:</span></span>
<span class="line"><span>      return preState</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// redux/store.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { createStore } from &#39;redux&#39;</span></span>
<span class="line"><span>//引入为 Count 组件服务的 reducer</span></span>
<span class="line"><span>import countReducer from &#39;./count_reducer&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default createStore(countReducer)</span></span>
<span class="line"><span>// redux/count_action.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { INCREMENT, DECREMENT } from &#39;./constant&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const createIncrementAction = (data) =&gt; ({ type: INCREMENT, data })</span></span>
<span class="line"><span>export const createDecrementAction = (data) =&gt; ({ type: DECREMENT, data })</span></span>
<span class="line"><span>// components/Count/index.jsx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span>import store from &#39;../../redux/store&#39;</span></span>
<span class="line"><span>import { createIncrementAction, createDecrementAction } from &#39;../../redux/count_action&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default class Count extends Component {</span></span>
<span class="line"><span>  // 可在组件单独监听 Redux 状态变化</span></span>
<span class="line"><span>  // componentDidMount() {</span></span>
<span class="line"><span>  // 	store.subscribe(() =&gt; {</span></span>
<span class="line"><span>  // 		this.setState({})</span></span>
<span class="line"><span>  // 	})</span></span>
<span class="line"><span>  // }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  increment = () =&gt; {</span></span>
<span class="line"><span>    const { value } = this.selectNumber</span></span>
<span class="line"><span>    // 将 value 转为数值</span></span>
<span class="line"><span>    // 手动写 Action 对象</span></span>
<span class="line"><span>    store.dispatch({ type: &#39;increment&#39;, data: value * 1 })</span></span>
<span class="line"><span>    // 专门创建 Action 对象</span></span>
<span class="line"><span>    store.dispatch(createIncrementAction(value * 1))</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  decrement = () =&gt; {</span></span>
<span class="line"><span>    const { value } = this.selectNumber</span></span>
<span class="line"><span>    store.dispatch(createDecrementAction(value * 1))</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  incrementAsync = () =&gt; {</span></span>
<span class="line"><span>    const { value } = this.selectNumber</span></span>
<span class="line"><span>    setTimeout(() =&gt; {</span></span>
<span class="line"><span>      store.dispatch(createIncrementAction(value * 1))</span></span>
<span class="line"><span>    }, 500)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;h1&gt;当前求和为：{store.getState()}&lt;/h1&gt;</span></span>
<span class="line"><span>        &lt;select ref={(c) =&gt; (this.selectNumber = c)}&gt;</span></span>
<span class="line"><span>          &lt;option value=&quot;1&quot;&gt;1&lt;/option&gt;</span></span>
<span class="line"><span>          &lt;option value=&quot;2&quot;&gt;2&lt;/option&gt;</span></span>
<span class="line"><span>          &lt;option value=&quot;3&quot;&gt;3&lt;/option&gt;</span></span>
<span class="line"><span>        &lt;/select&gt;</span></span>
<span class="line"><span>        &lt;button onClick={this.increment}&gt;+&lt;/button&gt;</span></span>
<span class="line"><span>        &lt;button onClick={this.decrement}&gt;-&lt;/button&gt;</span></span>
<span class="line"><span>        &lt;button onClick={this.incrementAsync}&gt;异步加&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>redux 只负责管理状态，状态改变驱动页面展示要自己写</li><li>可以在 <code>index.js</code> 中统一监听状态变化，也可以在组件中单独监听。注意不能直接 <code>this.render()</code> 调用 <code>render</code> 函数，要通过 <code>this.setState({})</code> 间接调用</li><li><code>reducer</code> 由 <code>store</code> 自动触发首次调用，传递的 <code>preState</code> 为 <code>undefined</code> ，<code>action</code> 为 <code>{type: &#39;@@REDUX/ININT_a.5.v.9&#39;}</code> 类似的东东，只有 <code>type</code></li></ul><h2 id="redux-异步编程" tabindex="-1">Redux 异步编程 <a class="header-anchor" href="#redux-异步编程" aria-label="Permalink to &quot;Redux 异步编程&quot;">​</a></h2><p>安装异步中间件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install redux-thunk -S</span></span></code></pre></div><p>要点：</p><ul><li>延迟的动作不想交给组件，而是 <code>action</code></li><li>当操作状态所需数据要靠异步任务返回时，可用异步 <code>action</code></li><li>创建 <code>action</code> 的函数返回一个函数，该函数中写异步任务</li><li>异步任务完成后，分发一个同步 <code>action</code> 操作状态</li><li>异步 <code>action</code> 不是必要的，完全可以在组件中等待异步任务结果返回在分发同步 <code>action</code></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// store.js</span></span>
<span class="line"><span>import { createStore, applyMiddleware } from &#39;redux&#39;</span></span>
<span class="line"><span>import countReducer from &#39;./count_reducer&#39;</span></span>
<span class="line"><span>import thunk from &#39;redux-thunk&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default createStore(countReducer, applyMiddleware(thunk))</span></span>
<span class="line"><span>// count_action.js</span></span>
<span class="line"><span>import { INCREMENT, DECREMENT } from &#39;./constant.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const createIncrementAction = (data) =&gt; ({ type: INCREMENT, data })</span></span>
<span class="line"><span>export const createDecrementAction = (data) =&gt; ({ type: DECREMENT, data })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 异步 action 返回一个函数</span></span>
<span class="line"><span>export const createIncrementAsyncAction = (data, time) =&gt; {</span></span>
<span class="line"><span>  return (dispatch) =&gt; {</span></span>
<span class="line"><span>    setTimeout(() =&gt; {</span></span>
<span class="line"><span>      dispatch(createIncrementAction(data))</span></span>
<span class="line"><span>    }, time)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// Count.jsx</span></span>
<span class="line"><span>incrementAsync = () =&gt; {</span></span>
<span class="line"><span>  const { value } = this.selectNumber</span></span>
<span class="line"><span>  store.dispatch(createIncrementAsyncAction(value * 1))</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>整个过程简单理解：<code>store</code> 在分发 <code>action</code> 时，发现返回一个函数，那它知道这是个异步 <code>action</code> 。因此 <code>store</code> 勉为其难地帮忙执行这个函数，同时给这个函数传递 <code>dispatch</code> 方法，等待异步任务完成取到数据后，直接调用 <code>dispatch</code> 方法分发同步 <code>action</code> 。</p><h1 id="react-redux" tabindex="-1">React-Redux <a class="header-anchor" href="#react-redux" aria-label="Permalink to &quot;React-Redux&quot;">​</a></h1><blockquote><p>React-Redux 是一个插件库，用于简化 React 中使用 Redux 。</p></blockquote><p><img src="https://gitee.com/brucecai55520/bruceblog/raw/master/docs/notes/react/images/react-redux.png" alt="React-Redux模型图"></p><p>React-Redux 将组件分为两类：</p><ul><li>UI 组件 <ul><li>只负责 UI 呈现，不带有业务逻辑</li><li>通过 <code>props</code> 接收数据</li><li>不能使用 Redux 的 API</li><li>保存在 <code>components</code> 文件夹下</li></ul></li><li>容器组件 <ul><li>负责管理数据和业务逻辑，和 Redux 通信，将结果交给 UI 组件</li><li>可使用 Redux 的 API</li><li>保存在 <code>containers</code> 文件夹下</li></ul></li></ul><h2 id="react-redux-基本使用" tabindex="-1">React-Redux 基本使用 <a class="header-anchor" href="#react-redux-基本使用" aria-label="Permalink to &quot;React-Redux 基本使用&quot;">​</a></h2><p>要点：</p><ul><li><code>connect()()</code> ：创建容器组件</li><li><code>mapStateToProps(state)</code> ：映射状态为 UI 组件标签属性，即传递状态</li><li><code>mapDispatchToProps(dispatch)</code> ：传递操作状态的方法</li><li>容器组件中的 <code>store</code> 是靠 <code>props</code> 传进去，而不是在容器组件中直接引入</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// containers/Count/index.jsx</span></span>
<span class="line"><span>// Count 容器组件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import CountUI from &#39;../../components/Count&#39;</span></span>
<span class="line"><span>import { connect } from &#39;react-redux&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from &#39;../../redux/count_action&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function mapStateToProps(state) {</span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    count: state,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function mapDispatchToProps(dispatch) {</span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    add: (number) =&gt; dispatch(createIncrementAction(number)),</span></span>
<span class="line"><span>    sub: (number) =&gt; dispatch(createDecrementAction(number)),</span></span>
<span class="line"><span>    addAsync: (number) =&gt; dispatch(createIncrementAsyncAction(number, time)),</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default connect(mapStateToProps, mapDispatchToProps)(CountUI)</span></span>
<span class="line"><span>// App.jsx</span></span>
<span class="line"><span>import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span>import Count from &#39;./containers/Count&#39;</span></span>
<span class="line"><span>import store from &#39;./redux/store.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default class App extends Component {</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;Count store={store} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// components/Count/index.jsx</span></span>
<span class="line"><span>// Count UI 组件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>increment = () =&gt; {</span></span>
<span class="line"><span>  const { value } = this.selectNumber</span></span>
<span class="line"><span>  this.props.add(value * 1)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>decrement = () =&gt; {</span></span>
<span class="line"><span>  const { value } = this.selectNumber</span></span>
<span class="line"><span>  this.props.sub(value * 1)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>incrementAsync = () =&gt; {</span></span>
<span class="line"><span>  const { value } = this.selectNumber</span></span>
<span class="line"><span>  this.props.addAsync(value * 1, 500)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="优化写法" tabindex="-1">优化写法 <a class="header-anchor" href="#优化写法" aria-label="Permalink to &quot;优化写法&quot;">​</a></h2><p><code>mapDispatchToProps</code> 可以写成对象形式，React-Redux 底层会帮助自动分发。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 函数写法</span></span>
<span class="line"><span>export default connect(</span></span>
<span class="line"><span>  state =&gt; ({count:state}),</span></span>
<span class="line"><span>  dispatch =&gt; ({</span></span>
<span class="line"><span>    add: number =&gt; dispatch(createIncrementAction(number)),</span></span>
<span class="line"><span>    sub: number =&gt; dispatch(createDecrementAction(number)),</span></span>
<span class="line"><span>    addAsync: (number,time) =&gt; dispatch(createIncrementAsyncAction(number,time)),</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>)(CountUI)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 对象写法</span></span>
<span class="line"><span>export default connect(</span></span>
<span class="line"><span>  state =&gt; ({ count: state }),</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    add: createIncrementAction,</span></span>
<span class="line"><span>    sub: createDecrementAction,</span></span>
<span class="line"><span>    addAsync: createIncrementAsyncAction,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>)(CountUI)</span></span></code></pre></div><p>React-Redux 容器组件可以自动监测 Redux 状态变化，因此 <code>index.js</code> 不需要手动监听：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>store.subscribe(() =&gt; {</span></span>
<span class="line"><span>  ReactDOM.render(&lt;App /&gt;, document.getElementById(&#39;root&#39;))</span></span>
<span class="line"><span>})</span></span></code></pre></div><p><code>Provider</code> 组件的使用：让所有组件都能获得状态数据，不必一个一个传递</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// index.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import React from &#39;react&#39;</span></span>
<span class="line"><span>import ReactDOM from &#39;react-dom&#39;</span></span>
<span class="line"><span>import App from &#39;./App&#39;</span></span>
<span class="line"><span>import { Provider } from &#39;react-redux&#39;</span></span>
<span class="line"><span>import store from &#39;./redux/store&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ReactDOM.render(</span></span>
<span class="line"><span>  &lt;Provider store={store}&gt;</span></span>
<span class="line"><span>    &lt;App /&gt;</span></span>
<span class="line"><span>  &lt;/Provider&gt;,</span></span>
<span class="line"><span>  document.getElementById(&#39;root&#39;)</span></span>
<span class="line"><span>)</span></span></code></pre></div><p>整合容器组件和 UI 组件为一个文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span>import {</span></span>
<span class="line"><span>	createIncrementAction,</span></span>
<span class="line"><span>	createDecrementAction,</span></span>
<span class="line"><span>} from &#39;../../redux/count_action&#39;</span></span>
<span class="line"><span>import {connect} from &#39;react-redux&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义 UI 组件</span></span>
<span class="line"><span>class Count extends Component {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建容器组件</span></span>
<span class="line"><span>export default connect(</span></span>
<span class="line"><span>  state =&gt; ({count: state}),</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    add: createIncrementAction,</span></span>
<span class="line"><span>    sub: createDecrementAction</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>)(Count)</span></span></code></pre></div><h2 id="多个组件数据共享" tabindex="-1">多个组件数据共享 <a class="header-anchor" href="#多个组件数据共享" aria-label="Permalink to &quot;多个组件数据共享&quot;">​</a></h2><p>首先规范化文件结构，容器组件和 UI 组件合为一体后放在 <code>containers</code> 文件夹。<code>redux</code> 文件夹新建 <code>actions</code> 和 <code>reducers</code> 文件夹分别用于存放每个组件对应的 <code>action</code> 和 <code>reducer</code> 。</p><p>新建 <code>Person</code> 组件对应的 <code>action</code> 和 <code>reducer</code> ：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// redux/actions/person.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { ADD_PERSON } from &#39;../constant.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const createAddPersonAction = (personObj) =&gt; ({ type: ADD_PERSON, data: personObj })</span></span>
<span class="line"><span>// redux/reducers/person.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { ADD_PERSON } from &#39;../constant.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const initState = [{ id: &#39;lsfd&#39;, name: &#39;china&#39;, age: &#39;9999&#39; }]</span></span>
<span class="line"><span>export default function personReducer(preState = initState, action) {</span></span>
<span class="line"><span>  const { type, data } = action</span></span>
<span class="line"><span>  switch (type) {</span></span>
<span class="line"><span>    case ADD_PERSON:</span></span>
<span class="line"><span>      return [data, ...preState]</span></span>
<span class="line"><span>    default:</span></span>
<span class="line"><span>      return preState</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>关键步骤：在 <code>store.js</code> 中使用 <code>combineReducers()</code> 整合多个 <code>reducer</code> 来创建 <code>store</code> 对象。</p><p>这样 Redux 中就以对象的形式存储着每个组件的数据。类似于这样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  total: 0,</span></span>
<span class="line"><span>  personList: []</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// redux/store.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { createStore, applyMiddleware, combineReducers } from &#39;redux&#39;</span></span>
<span class="line"><span>import countReducer from &#39;./reducers/count&#39;</span></span>
<span class="line"><span>import personReducer from &#39;./reducers/person&#39;</span></span>
<span class="line"><span>import thunk from &#39;redux-thunk&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const Reducers = combineReducers({</span></span>
<span class="line"><span>  total: countReducer,</span></span>
<span class="line"><span>  personList: personReducer,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default createStore(Reducers, applyMiddleware(thunk))</span></span></code></pre></div><p><code>Person</code> 组件中获取 Redux 保存的状态，包括其他组件的数据。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span>import { connect } from &#39;react-redux&#39;</span></span>
<span class="line"><span>import { createAddPersonAction } from &#39;../../redux/actions/person&#39;</span></span>
<span class="line"><span>import { nanoid } from &#39;nanoid&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Person extends Component {</span></span>
<span class="line"><span>  addPerson = () =&gt; {</span></span>
<span class="line"><span>    const name = this.nameInput.value</span></span>
<span class="line"><span>    const age = this.ageInput.value</span></span>
<span class="line"><span>    const personObj = { id: nanoid(), name, age }</span></span>
<span class="line"><span>    this.props.addPerson(personObj)</span></span>
<span class="line"><span>    this.nameInput.value = &#39;&#39;</span></span>
<span class="line"><span>    this.ageInput.value = &#39;&#39;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;h2&gt;在Person组件拿到Count组件的数据：{this.props.count}&lt;/h2&gt;</span></span>
<span class="line"><span>        &lt;input type=&quot;text&quot; ref={(c) =&gt; (this.nameInput = c)} placeholder=&quot;Please input name&quot; /&gt;</span></span>
<span class="line"><span>        &lt;input type=&quot;text&quot; ref={(c) =&gt; (this.ageInput = c)} placeholder=&quot;Please input age&quot; /&gt;</span></span>
<span class="line"><span>        &lt;button onClick={this.addPerson}&gt;添加&lt;/button&gt;</span></span>
<span class="line"><span>        &lt;ul&gt;</span></span>
<span class="line"><span>          {this.props.personList.map((item) =&gt; {</span></span>
<span class="line"><span>            return (</span></span>
<span class="line"><span>              &lt;li key={item.id}&gt;</span></span>
<span class="line"><span>                {item.name} -- {item.age}</span></span>
<span class="line"><span>              &lt;/li&gt;</span></span>
<span class="line"><span>            )</span></span>
<span class="line"><span>          })}</span></span>
<span class="line"><span>        &lt;/ul&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default connect(</span></span>
<span class="line"><span>  // state 是 Redux 保存的状态对象</span></span>
<span class="line"><span>  // 容器组件从 Redux 中取出需要的状态，并传递给 UI 组件</span></span>
<span class="line"><span>  state =&gt; ({personList: state.personList, count: state.total}),</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    addPerson: createAddPersonAction</span></span>
<span class="line"><span>    // 这一行凑数的，为了保持代码格式</span></span>
<span class="line"><span>    addPerson2: createAddPersonAction</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>)(Person)</span></span></code></pre></div><p>一个细节，在 <code>personReducer</code> 中，是按如下方式修改状态的，而没有使用 <code>unshift</code> 方法。在第二种方式，React 会认为状态没有变化从而不会重新渲染页面，因为 <code>preState</code> 保存的是数组地址值，返回的地址和之前的地址是一样的，尽管数组内容发生了改变。而第一种方式返回一个新的数组的地址值，和之前不一样，因此会重新渲染页面。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 方式一</span></span>
<span class="line"><span>switch (type) {</span></span>
<span class="line"><span>  case ADD_PERSON:</span></span>
<span class="line"><span>    return [data, ...preState]</span></span>
<span class="line"><span>  default:</span></span>
<span class="line"><span>    return preState</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 方式二</span></span>
<span class="line"><span>switch (type) {</span></span>
<span class="line"><span>  case ADD_PERSON:</span></span>
<span class="line"><span>    preState.unshift(data)</span></span>
<span class="line"><span>    return preState</span></span>
<span class="line"><span>  default:</span></span>
<span class="line"><span>    return preState</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="纯函数" tabindex="-1">纯函数 <a class="header-anchor" href="#纯函数" aria-label="Permalink to &quot;纯函数&quot;">​</a></h2><p>概念：输入同样的参数，返回同样的输出。</p><p>约束：</p><ul><li>不能修改参数数据</li><li>不产生任何副作用，如网络请求、输入和输出设备</li><li>不能调用 <code>Date.now()</code> 或 <code>Math.random()</code> 等不纯的方法</li></ul><p><code>reducer</code> 的函数必须是纯函数。</p><h2 id="redux-开发者工具" tabindex="-1">Redux 开发者工具 <a class="header-anchor" href="#redux-开发者工具" aria-label="Permalink to &quot;Redux 开发者工具&quot;">​</a></h2><p>Chrome 安装 Redux DevTools 开发者工具，项目下载依赖包 <code>npm i redux-devtools-extension --save-dev</code>，最后在 <code>store.js</code> 进行配置：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { composeWithDevTools } from &#39;redux-devtools-extension&#39;</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span>export default createStore(Reducers, composeWithDevTools(applyMiddleware(thunk)))</span></span>
<span class="line"><span>// 不需要异步中间件</span></span>
<span class="line"><span>export default createStore(Reducers, composeWithDevTools())</span></span></code></pre></div><h2 id="项目打包运行" tabindex="-1">项目打包运行 <a class="header-anchor" href="#项目打包运行" aria-label="Permalink to &quot;项目打包运行&quot;">​</a></h2><p>运行命令：<code>npm run build</code> 进行项目打包，生成 <code>build</code> 文件夹存放着打包完成的文件。</p><p>运行命令：<code>npm i serve -g</code> 全局安装 <code>serve</code> ，它能够以当前目录为根目录开启一台服务器，进入 <code>build</code> 文件夹所在目录，运行 <code>serve</code> 命令即可开启服务器查看项目效果。</p><h1 id="react-扩展内容" tabindex="-1">React 扩展内容 <a class="header-anchor" href="#react-扩展内容" aria-label="Permalink to &quot;React 扩展内容&quot;">​</a></h1><h2 id="setstate-更新状态的两种写法" tabindex="-1">setState 更新状态的两种写法 <a class="header-anchor" href="#setstate-更新状态的两种写法" aria-label="Permalink to &quot;setState 更新状态的两种写法&quot;">​</a></h2><p>对象式：<code>setState(stateChange, [callback])</code></p><ul><li><code>stateChange</code> 为状态改变对象(该对象可以体现出状态的更改)</li><li><code>callback</code> 是可选的回调函数, 它在状态更新完毕、界面也更新后才被调用</li></ul><p>函数式：<code>setState(updater, [callback])</code></p><ul><li>updater 为返回 stateChange 对象的函数。</li><li>updater 可以接收到 state 和 props。</li></ul><p>说明：</p><ul><li>React 状态更新是异步的。下述代码打印的 <code>count</code> 值是上一次的值，而非更新后的。可在第二个参数回调中获取更新后的状态。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>add = () =&gt; {</span></span>
<span class="line"><span>  this.setState({ count: this.state.count + 1 })</span></span>
<span class="line"><span>  console.log(this.state.count)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>add = () =&gt; {</span></span>
<span class="line"><span>  this.setState({ count: this.state.count + 1 }, () =&gt; {</span></span>
<span class="line"><span>    console.log(this.state.count)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li><code>callback</code> 回调在 <code>componentDidMount</code> 钩子之后执行</li><li>对象式写法可以看做函数式写法的语法糖</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>add = () =&gt; {</span></span>
<span class="line"><span>  this.setState((state, props) =&gt; {</span></span>
<span class="line"><span>    return { count: state.count + props.step }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="路由组件懒加载-lazyload" tabindex="-1">路由组件懒加载 lazyLoad <a class="header-anchor" href="#路由组件懒加载-lazyload" aria-label="Permalink to &quot;路由组件懒加载 lazyLoad&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import React, { Component, lazy, Suspense } from &#39;react&#39;</span></span>
<span class="line"><span>import Loading from &#39;./Loading&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 通过 lazy 函数配合 import() 函数动态加载路由组件</span></span>
<span class="line"><span>// 路由组件代码会被分开打包</span></span>
<span class="line"><span>const Home = lazy(() =&gt; import(&#39;./Home&#39;))</span></span>
<span class="line"><span>const About = lazy(() =&gt; import(&#39;./About&#39;))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default Demo extends Component {</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;h1&gt;Demo 组件&lt;/h1&gt;</span></span>
<span class="line"><span>        &lt;Link to=&quot;/home&quot;&gt;Home&lt;/Link&gt;</span></span>
<span class="line"><span>        &lt;Link to=&quot;/about&quot;&gt;About&lt;/Link&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 通过 &lt;Suspense&gt; 指定在加载得到路由打包文件前显示一个自定义 Loading 界面</span></span>
<span class="line"><span>        &lt;Suspense fallback={Loading}&gt;</span></span>
<span class="line"><span>          &lt;Switch&gt;</span></span>
<span class="line"><span>            &lt;Route path=&quot;/home&quot; component={Home}&gt;</span></span>
<span class="line"><span>            &lt;Route path=&quot;/about&quot; component={About}&gt;</span></span>
<span class="line"><span>          &lt;/Switch&gt;</span></span>
<span class="line"><span>        &lt;/Suspense&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="react-hook" tabindex="-1">React Hook <a class="header-anchor" href="#react-hook" aria-label="Permalink to &quot;React Hook&quot;">​</a></h2><blockquote><p>Hook 是 React 16.8.0 增加的新特性，让我们能在函数式组件中使用 <code>state</code> 和其他特性</p></blockquote><h3 id="state-hook" tabindex="-1">State Hook <a class="header-anchor" href="#state-hook" aria-label="Permalink to &quot;State Hook&quot;">​</a></h3><ul><li><p><code>State Hook</code> 让函数式组件也可拥有 <code>state</code> 状态。</p></li><li><p>语法：<code>const [Xxx, setXxx] = React.useState(initValue)</code></p></li><li><p><code>useState()</code> 参数：状态初始化值；返回值：包含 2 个元素的数组，分别为状态值和状态更新函数</p></li><li><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>setXxx()</span></span></code></pre></div><p>的 2 种用法：</p><ul><li><code>setXxx(newValue)</code></li><li><code>setXxx(value =&gt; newValue)</code></li><li>注意！新状态值会<strong>覆盖</strong>原状态值！因此若有多个状态，只能多次调用 <code>React.useState</code> ，不能使用对象！</li></ul></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const [count, setCount] = React.useState(0)</span></span>
<span class="line"><span>const [name, setName] = React.useState(&#39;Tom&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function add() {</span></span>
<span class="line"><span>  setCount(count + 1)</span></span>
<span class="line"><span>  setCount((count) =&gt; count + 1)</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="effect-hook" tabindex="-1">Effect Hook <a class="header-anchor" href="#effect-hook" aria-label="Permalink to &quot;Effect Hook&quot;">​</a></h3><ul><li><code>Effect Hook</code> 让我们能在函数式组件中执行副作用操作（就是模拟生命周期钩子）</li><li>副作用操作：发送 Ajax 请求、定时器、手动更改真实 DOM</li><li><code>Effect Hook</code> 可以模拟三个钩子：<code>componentDidMount</code>、<code>componentDidUpdate</code>、<code>componentWillUnmount</code></li><li><code>React.useEffect</code> 第一个参数 <code>return</code> 的函数相当于 <code>componentWillUnmount</code> ，若有多个会按顺序执行</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 语法</span></span>
<span class="line"><span>React.useEffect(() =&gt; {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  return () =&gt; {</span></span>
<span class="line"><span>    // 组件卸载前执行，即 componentWillUnmount 钩子</span></span>
<span class="line"><span>    ...</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}, [stateValue])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 模拟 componentDidMount</span></span>
<span class="line"><span>// 第二个参数数组为空，表示不监听任何状态的更新</span></span>
<span class="line"><span>// 因此只有页面首次渲染会执行输出</span></span>
<span class="line"><span>React.useEffect(() =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;DidMount&#39;)</span></span>
<span class="line"><span>  return () =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;WillUnmount 1&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}, [])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 模拟全部状态 componentDidUpdate</span></span>
<span class="line"><span>// 若第二个参数不写，表示监听所有状态的更新</span></span>
<span class="line"><span>React.useEffect(() =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;All DidUpdate&#39;)</span></span>
<span class="line"><span>  return () =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;WillUnmount 2&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 模拟部分状态 componentDidUpdate</span></span>
<span class="line"><span>// 第二个参数数组写上状态，表示只监听这些状态的更新</span></span>
<span class="line"><span>React.useEffect(() =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;Part DidUpdate&#39;)</span></span>
<span class="line"><span>  return () =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;WillUnmount 3&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}, [count, name])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 若调用 ReactDOM.unmountComponentAtNode(document.getElementById(&#39;root&#39;))</span></span>
<span class="line"><span>// 会输出 WillUnmount 1、2、3</span></span></code></pre></div><h3 id="ref-hook" tabindex="-1">Ref Hook <a class="header-anchor" href="#ref-hook" aria-label="Permalink to &quot;Ref Hook&quot;">​</a></h3><ul><li><code>Ref Hook</code> 可以在函数式组件存储或查找组件内的标签或其他数据</li><li>语法：<code>const refContainer = React.useRef()</code></li><li>保存标签对象的容器，和 <code>React.createRef()</code> 类似，也是专人专用</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function Demo() {</span></span>
<span class="line"><span>  const myRef = React.useRef()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function show() {</span></span>
<span class="line"><span>    console.log(myRef.current.value)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;input type=&quot;text&quot; ref={myRef} /&gt;</span></span>
<span class="line"><span>      &lt;button onClick={show}&gt;展示数据&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="fragment" tabindex="-1">Fragment <a class="header-anchor" href="#fragment" aria-label="Permalink to &quot;Fragment&quot;">​</a></h2><ul><li><code>Fragment</code> 标签本身不会被渲染成一个真实 DOM 标签，有点像 Vue 的 <code>template</code>。</li><li>用空标签也有相同效果，但是空标签不能传递任何属性，<code>Fragment</code> 标签可以传递 <code>key</code> 属性，遍历时候可用。</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import React, { Component, Fragment } from &#39;react&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default class Demo extends Component {</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;Fragment key={1}&gt;</span></span>
<span class="line"><span>        &lt;input type=&quot;text&quot; /&gt;</span></span>
<span class="line"><span>        &lt;input type=&quot;text&quot; /&gt;</span></span>
<span class="line"><span>      &lt;/Fragment&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 或</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;&gt;</span></span>
<span class="line"><span>        &lt;input type=&quot;text&quot; /&gt;</span></span>
<span class="line"><span>        &lt;input type=&quot;text&quot; /&gt;</span></span>
<span class="line"><span>      &lt;/&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="context" tabindex="-1">Context <a class="header-anchor" href="#context" aria-label="Permalink to &quot;Context&quot;">​</a></h2><p>Context 是一种组件间通信方式，常用于祖父组件与子孙组件。实际开发一般不用，一般用 React-Redux</p><p>用法说明：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>1) 创建Context容器对象：</span></span>
<span class="line"><span>const XxxContext = React.createContext()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2) 渲染子组时，外面包裹xxxContext.Provider, 通过value属性给后代组件传递数据：</span></span>
<span class="line"><span>&lt;XxxContext.Provider value={数据}&gt;</span></span>
<span class="line"><span>  子组件</span></span>
<span class="line"><span>&lt;/XxxContext.Provider&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3) 后代组件读取数据：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 第一种方式：仅适用于类组件</span></span>
<span class="line"><span>// 声明接收context</span></span>
<span class="line"><span>static contextType = xxxContext</span></span>
<span class="line"><span>// 读取context中的value数据</span></span>
<span class="line"><span>this.context</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//第二种方式: 可用于函数组件与类组件</span></span>
<span class="line"><span>&lt;XxxContext.Consumer&gt;</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    // value就是context中的value数据</span></span>
<span class="line"><span>    value =&gt; (</span></span>
<span class="line"><span>      ...</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/XxxContext.Consumer&gt;</span></span></code></pre></div><p>举个栗子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// context.js</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import React from &#39;react&#39;</span></span>
<span class="line"><span>export const MyContext = React.createContext()</span></span>
<span class="line"><span>export const { Provider, Consumer } = MyContext</span></span>
<span class="line"><span>// A.jsx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span>import B from &#39;./B.jsx&#39;</span></span>
<span class="line"><span>import { Provider } from &#39;./context.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default class A extends Component {</span></span>
<span class="line"><span>  state = { username: &#39;tom&#39;, age: 18 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    const { username, age } = this.state</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;A组件&lt;/h3&gt;</span></span>
<span class="line"><span>        &lt;h4&gt;用户名是:{username}&lt;/h4&gt;</span></span>
<span class="line"><span>        &lt;Provider value={{ username, age }}&gt;</span></span>
<span class="line"><span>          &lt;B /&gt;</span></span>
<span class="line"><span>        &lt;/Provider&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// B.jsx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span>import C from &#39;./C.jsx&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default class B extends Component {</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;B组件&lt;/h3&gt;</span></span>
<span class="line"><span>        &lt;C /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// C.jsx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span>import { MyContext } from &#39;./context.js&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default class C extends Component {</span></span>
<span class="line"><span>  static contextType = MyContext</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    const { username, age } = this.context</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;C组件&lt;/h3&gt;</span></span>
<span class="line"><span>        &lt;h4&gt;</span></span>
<span class="line"><span>          从A组件接收到的用户名:{username},年龄:{age}</span></span>
<span class="line"><span>        &lt;/h4&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// C.jsx 为函数式组件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { Consumer } from &#39;./context.js&#39;</span></span>
<span class="line"><span>export default function C() {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;h3&gt;我是C组件&lt;/h3&gt;</span></span>
<span class="line"><span>      &lt;h4&gt;</span></span>
<span class="line"><span>        从A组件接收到的用户名:</span></span>
<span class="line"><span>        &lt;Consumer&gt;{(value) =&gt; \`\${value.username},年龄是\${value.age}\`}&lt;/Consumer&gt;</span></span>
<span class="line"><span>      &lt;/h4&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="组件渲染优化" tabindex="-1">组件渲染优化 <a class="header-anchor" href="#组件渲染优化" aria-label="Permalink to &quot;组件渲染优化&quot;">​</a></h2><p>问题：</p><ul><li>只要调用 <code>setState()</code> ，即使没有修改状态，组件也会重新 <code>render()</code></li><li>只要父组件重新渲染，即使子组件没有使用父组件的状态，也会重新 <code>render()</code></li></ul><p>原因：</p><ul><li><code>shouldComponentUpdate()</code> 钩子默认总是返回 <code>true</code></li></ul><p>改进：</p><ul><li>只有组件的 <code>state</code> 或 <code>props</code> 的数据发生改变时才重新渲染</li></ul><p>方式：</p><ol><li>手动重写 <code>shouldComponentUpdate(nextProps, nextState)</code> 的逻辑，只有数据发生改变才返回 <code>true</code></li><li>使用 <code>PureComponent</code> ，它重写了 <code>shouldComponentUpdate()</code> ， 只有 <code>state</code> 或 <code>props</code> 数据有变化才返回 <code>true</code></li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>它只是进行 <code>state</code> 和 <code>props</code> 数据的浅比较, 如果只是数据对象内部数据变了, 返回 <code>false</code>。即对于引用数据类型，比较的是地址引用</li><li>不要直接修改 <code>state</code> 数据, 而是要产生新数据 :::</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import React, { PureComponent } from &#39;react&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Demo extends PureComponent {</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  addStu = () =&gt; {</span></span>
<span class="line"><span>    // 不会渲染</span></span>
<span class="line"><span>    const { stus } = this.state</span></span>
<span class="line"><span>    stus.unshift(&#39;小刘&#39;)</span></span>
<span class="line"><span>    this.setState({ stus })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 重新渲染</span></span>
<span class="line"><span>    const { stus } = this.state</span></span>
<span class="line"><span>    this.setState({ stus: [&#39;小刘&#39;, ...stus] })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="render-props-插槽" tabindex="-1">render props (插槽) <a class="header-anchor" href="#render-props-插槽" aria-label="Permalink to &quot;render props (插槽)&quot;">​</a></h2><blockquote><p>类似于 Vue 中的插槽技术</p></blockquote><p>如何向组件内部动态传入带内容的结构（即标签或组件）？</p><ul><li>Vue：插槽技术</li><li>React： <ul><li>使用 <code>children props</code>：通过组件标签体传入结构</li><li>使用 <code>render props</code>：通过组件标签属性传入结构，可携带数据</li></ul></li></ul><p><code>children props</code> 方式：</p><ul><li>组件标签体内容会存储到 <code>this.props.children</code> 中</li><li>缺点：A 组件无法向 B 组件传递数据</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default class Parent extends Component {</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;Parent组件&lt;/h3&gt;</span></span>
<span class="line"><span>        &lt;A&gt;</span></span>
<span class="line"><span>          &lt;B /&gt;</span></span>
<span class="line"><span>        &lt;/A&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class A extends Component {</span></span>
<span class="line"><span>  state = { name: &#39;tom&#39; }</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;A组件&lt;/h3&gt;</span></span>
<span class="line"><span>        {this.props.children}</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class B extends Component {</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;B组件&lt;/h3&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><code>render props</code> 方式：</p><ul><li><code>&lt;A render={(name) =&gt; &lt;B name={name} /&gt;} /&gt;</code></li><li><code>{this.props.render(name)}</code></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default class Parent extends Component {</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;Parent组件&lt;/h3&gt;</span></span>
<span class="line"><span>        &lt;A render={(name) =&gt; &lt;B name={name} /&gt;} /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class A extends Component {</span></span>
<span class="line"><span>  state = { name: &#39;tom&#39; }</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    const { name } = this.state</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;A组件&lt;/h3&gt;</span></span>
<span class="line"><span>        {this.props.render(name)}</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class B extends Component {</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;h3&gt;B组件,{this.props.name}&lt;/h3&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="错误边界" tabindex="-1">错误边界 <a class="header-anchor" href="#错误边界" aria-label="Permalink to &quot;错误边界&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">错误边界(Error boundary)：用来捕获后代组件错误，渲染出备用页面。</p><p>注意：只在生产环境（项目上线）起效 :::</p><p>特点：</p><ul><li>只能捕获<strong>后代组件生命周期</strong>产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误</li><li>简单理解就是只能捕获后代组件生命周期钩子里面代码的错误</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span>import Child from &#39;./Child&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default class Parent extends Component {</span></span>
<span class="line"><span>  state = {</span></span>
<span class="line"><span>    //用于标识子组件是否产生错误</span></span>
<span class="line"><span>    hasError: &#39;&#39;,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 当子组件出现错误，会触发调用，并携带错误信息</span></span>
<span class="line"><span>  static getDerivedStateFromError(error) {</span></span>
<span class="line"><span>    // render 之前触发</span></span>
<span class="line"><span>    // 返回新的 state</span></span>
<span class="line"><span>    return { hasError: error }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 子组件产生错误时调用该钩子</span></span>
<span class="line"><span>  componentDidCatch(error, info) {</span></span>
<span class="line"><span>    console.log(error, info)</span></span>
<span class="line"><span>    console.log(&#39;此处统计错误，反馈给服务器&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;h2&gt;Parent组件&lt;/h2&gt;</span></span>
<span class="line"><span>        {this.state.hasError ? &lt;h2&gt;网络不稳定，稍后再试&lt;/h2&gt; : &lt;Child /&gt;}</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="组件通信方式总结" tabindex="-1">组件通信方式总结 <a class="header-anchor" href="#组件通信方式总结" aria-label="Permalink to &quot;组件通信方式总结&quot;">​</a></h2><ul><li><code>props</code></li><li>消息订阅发布：<code>pubs-sub</code></li><li>集中管理：Redux、dva 等</li><li><a href="https://gitee.com/brucecai55520/bruceblog/blob/master/docs/notes/react/react-extensions.md#context" target="_blank" rel="noreferrer">conText</a></li></ul><p>推荐搭配：</p><ul><li>父子组件：<code>props</code></li><li>兄弟组件：消息订阅-发布、集中式管理</li><li>祖孙组件(跨级组件)：消息订阅-发布、集中式管理、<code>conText</code>(开发用的少，封装插件用的多即 React-Redux)</li></ul><h1 id="react-router-6" tabindex="-1">React Router 6 <a class="header-anchor" href="#react-router-6" aria-label="Permalink to &quot;React Router 6&quot;">​</a></h1><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>React Router 发布了三个不同的包：</p><ul><li><code>react-router</code>：路由核心库，提供许多组件、钩子</li><li><code>react-router-dom</code>：包括了 <code>react-router</code> 所有内容，同时添加了用于 DOM 的组件，如 <code>&lt;BrowserRouter&gt;</code></li><li><code>react-router-native</code>：包括了 <code>react-router</code> 所有内容，同时添加了用于 ReactNative 的 API，如 <code>&lt;NativeRouter&gt;</code></li></ul><p>与 React Router 5.x 版本的区别：</p><ul><li>内置组件的变化：移除 <code>&lt;Switch/&gt;</code>，新增 <code>&lt;Routes/&gt;</code>……</li><li>语法变化：<code>component={About}</code> 变成 <code>element={&lt;About/&gt;}</code>……</li><li>新增 hook：<code>useParams</code>、<code>useNavigate</code>、<code>useMatch</code>……</li><li>官方明确表示推荐使用函数式组件</li></ul><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><p>安装 6 版本的 React Router。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install react-router-dom</span></span></code></pre></div><p><code>index.js</code> 文件引入 <code>&lt;BrowserRouter&gt;</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 从 react-dom/client 引入 ReactDOM</span></span>
<span class="line"><span>import ReactDOM from &#39;react-dom/client&#39;</span></span>
<span class="line"><span>import { BrowserRouter } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span>import App from &#39;./App&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// React 18 的语法发生改变了</span></span>
<span class="line"><span>ReactDOM.createRoot(document.getElementById(&#39;root&#39;)).render(</span></span>
<span class="line"><span>  &lt;BrowserRouter&gt;</span></span>
<span class="line"><span>    &lt;App /&gt;</span></span>
<span class="line"><span>  &lt;/BrowserRouter&gt;</span></span>
<span class="line"><span>)</span></span></code></pre></div><p><code>App.js</code> 设置路由链接和注册路由。<code>&lt;Route caseSensitive&gt;</code> 属性用于指定匹配时是否区分大小写（默认为 false）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { NavLink, Routes, Route } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span>import About from &#39;./components/About/About&#39;</span></span>
<span class="line"><span>import Hello from &#39;./components/Hello/Hello&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// React 18 默认使用函数式组件了</span></span>
<span class="line"><span>export default function App() {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;NavLink to=&quot;/about&quot;&gt;About&lt;/NavLink&gt;</span></span>
<span class="line"><span>      &lt;NavLink to=&quot;/hello&quot;&gt;Hello&lt;/NavLink&gt;</span></span>
<span class="line"><span>      &lt;hr /&gt;</span></span>
<span class="line"><span>      &lt;Routes&gt;</span></span>
<span class="line"><span>        &lt;Route path=&quot;/about&quot; element={&lt;About /&gt;}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span>        &lt;Route path=&quot;/hello&quot; element={&lt;Hello /&gt;}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span>      &lt;/Routes&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="browserrouter" tabindex="-1"><code>&lt;BrowserRouter&gt;</code> <a class="header-anchor" href="#browserrouter" aria-label="Permalink to &quot;\`&lt;BrowserRouter&gt;\`&quot;">​</a></h2><p><code>&lt;BrowserRouter&gt; </code>用于包裹整个应用。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import ReactDOM from &#39;react-dom/client&#39;</span></span>
<span class="line"><span>import { BrowserRouter } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span>import App from &#39;./App&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ReactDOM.createRoot(document.getElementById(&#39;root&#39;)).render(</span></span>
<span class="line"><span>  &lt;BrowserRouter&gt;</span></span>
<span class="line"><span>    &lt;App /&gt;</span></span>
<span class="line"><span>  &lt;/BrowserRouter&gt;</span></span>
<span class="line"><span>)</span></span></code></pre></div><h2 id="hashrouter" tabindex="-1"><code>&lt;HashRouter&gt;</code> <a class="header-anchor" href="#hashrouter" aria-label="Permalink to &quot;\`&lt;HashRouter&gt;\`&quot;">​</a></h2><p>作用与 <code>&lt;BrowserRouter&gt;</code> 一样，但 <code>&lt;HashRouter&gt;</code> 修改的是地址栏的 hash 值。</p><p>6.x 版本中 <code>&lt;HashRouter&gt;</code>、<code>&lt;BrowserRouter&gt;</code> 的用法与 5.x 相同。</p><h2 id="routes" tabindex="-1"><code>&lt;Routes/&gt;</code> <a class="header-anchor" href="#routes" aria-label="Permalink to &quot;\`&lt;Routes/&gt;\`&quot;">​</a></h2><p>6 版本中移出了 <code>&lt;Switch&gt;</code>，引入了新的替代者：<code>&lt;Routes&gt;</code>。</p><p><code>&lt;Routes&gt;</code> 和 <code>&lt;Route&gt;</code> 要配合使用，且必须要用 <code>&lt;Routes&gt;</code> 包裹 <code>&lt;Route&gt;</code>。</p><h2 id="navigate-重定向" tabindex="-1"><code>&lt;Navigate&gt;</code> 重定向 <a class="header-anchor" href="#navigate-重定向" aria-label="Permalink to &quot;\`&lt;Navigate&gt;\` 重定向&quot;">​</a></h2><p>只要 <code>&lt;Navigate&gt;</code> 组件被渲染，就会修改路径，切换视图。可用于路由重定向。</p><p><code>replace</code> 属性用于控制跳转模式（push 或 replace，默认是 push）。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { NavLink, Routes, Route, Navigate } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span>import About from &#39;./components/About/About&#39;</span></span>
<span class="line"><span>import Hello from &#39;./components/Hello/Hello&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function App() {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;NavLink to=&quot;/about&quot;&gt;About&lt;/NavLink&gt;</span></span>
<span class="line"><span>      &lt;NavLink to=&quot;/hello&quot;&gt;Hello&lt;/NavLink&gt;</span></span>
<span class="line"><span>      &lt;hr /&gt;</span></span>
<span class="line"><span>      &lt;Routes&gt;</span></span>
<span class="line"><span>        &lt;Route path=&quot;/about&quot; element={&lt;About /&gt;}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span>        &lt;Route path=&quot;/hello&quot; element={&lt;Hello /&gt;}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span>        &lt;Route path=&quot;/&quot; element={&lt;Navigate to=&quot;/about&quot; /&gt;}&gt;&lt;/Route&gt;</span></span>
<span class="line"><span>      &lt;/Routes&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>import React, { useState } from &#39;react&#39;</span></span>
<span class="line"><span>import { Navigate } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Home() {</span></span>
<span class="line"><span>  const [sum, setSum] = useState(1)</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;h1&gt;Home&lt;/h1&gt;</span></span>
<span class="line"><span>      {/* 根据sum的值决定是否切换视图 */}</span></span>
<span class="line"><span>      {sum === 1 ? &lt;h4&gt;sum的值为{sum}&lt;/h4&gt; : &lt;Navigate to=&quot;/about&quot; replace={true} /&gt;}</span></span>
<span class="line"><span>      &lt;button onClick={() =&gt; setSum(2)}&gt;将sum变为 2&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="useroutes-路由表" tabindex="-1"><code>useRoutes()</code> 路由表 <a class="header-anchor" href="#useroutes-路由表" aria-label="Permalink to &quot;\`useRoutes()\` 路由表&quot;">​</a></h2><p>路由规则可以单独抽出一个模块。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 路由表</span></span>
<span class="line"><span>// routes/index.js</span></span>
<span class="line"><span>import { Navigate } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span>import About from &#39;../components/About/About&#39;</span></span>
<span class="line"><span>import Hello from &#39;../components/Hello/Hello&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const routes = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/about&#39;,</span></span>
<span class="line"><span>    element: &lt;About /&gt;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/hello&#39;,</span></span>
<span class="line"><span>    element: &lt;Hello /&gt;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/&#39;,</span></span>
<span class="line"><span>    element: &lt;Navigate to=&quot;/about&quot; /&gt;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default routes</span></span>
<span class="line"><span>// 引入路由表</span></span>
<span class="line"><span>// App.js</span></span>
<span class="line"><span>import { NavLink, useRoutes } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span>import routes from &#39;./routes&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function App() {</span></span>
<span class="line"><span>  // 生成路由规则</span></span>
<span class="line"><span>  const element = useRoutes(routes)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;NavLink to=&quot;/about&quot;&gt;About&lt;/NavLink&gt;</span></span>
<span class="line"><span>      &lt;NavLink to=&quot;/hello&quot;&gt;Hello&lt;/NavLink&gt;</span></span>
<span class="line"><span>      &lt;hr /&gt;</span></span>
<span class="line"><span>      {element}</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="outlet-嵌套路由" tabindex="-1"><code>&lt;Outlet&gt;</code> 嵌套路由 <a class="header-anchor" href="#outlet-嵌套路由" aria-label="Permalink to &quot;\`&lt;Outlet&gt;\` 嵌套路由&quot;">​</a></h2><ul><li>嵌套路由中，需要使用 <code>&lt;Outlet&gt;</code> 设置子路由的路由出口，即在何处渲染子路由。</li><li>设置二级路由链接时，可以是 <code>to=&quot;news&quot;</code>、<code>to=&quot;./news&quot;</code>，但不能是 <code>to=&quot;/news&quot;</code>。</li></ul><p>不使用路由表的嵌套路由：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// App.js</span></span>
<span class="line"><span>export default function App() {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;NavLink to=&quot;about&quot;&gt;About&lt;/NavLink&gt;</span></span>
<span class="line"><span>      &lt;NavLink to=&quot;hello&quot;&gt;Hello&lt;/NavLink&gt;</span></span>
<span class="line"><span>      &lt;hr /&gt;</span></span>
<span class="line"><span>      &lt;Routes&gt;</span></span>
<span class="line"><span>        &lt;Route path=&quot;about&quot; element={&lt;About /&gt;} /&gt;</span></span>
<span class="line"><span>        &lt;Route path=&quot;hello&quot; element={&lt;Hello /&gt;}&gt;</span></span>
<span class="line"><span>          &lt;Route path=&quot;news&quot; element={&lt;News /&gt;} /&gt;</span></span>
<span class="line"><span>          &lt;Route path=&quot;message&quot; element={&lt;Message /&gt;} /&gt;</span></span>
<span class="line"><span>        &lt;/Route&gt;</span></span>
<span class="line"><span>        &lt;Route path=&quot;/&quot; element={&lt;Navigate to=&quot;about&quot; /&gt;} /&gt;</span></span>
<span class="line"><span>      &lt;/Routes&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>使用路由表的嵌套路由：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 路由表</span></span>
<span class="line"><span>const routes = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/about&#39;,</span></span>
<span class="line"><span>    element: &lt;About /&gt;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/hello&#39;,</span></span>
<span class="line"><span>    element: &lt;Hello /&gt;,</span></span>
<span class="line"><span>    // 定义二级路由，注意不要加 /</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        path: &#39;news&#39;,</span></span>
<span class="line"><span>        element: &lt;News /&gt;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        path: &#39;message&#39;,</span></span>
<span class="line"><span>        element: &lt;Message /&gt;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/&#39;,</span></span>
<span class="line"><span>    element: &lt;Navigate to=&quot;/about&quot; /&gt;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>// Hello 子组件</span></span>
<span class="line"><span>import React, { Fragment } from &#39;react&#39;</span></span>
<span class="line"><span>import { NavLink, Outlet } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Hello() {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;Fragment&gt;</span></span>
<span class="line"><span>      &lt;h2&gt;I am Hello!&lt;/h2&gt;</span></span>
<span class="line"><span>      {/* 子路由链接 */}</span></span>
<span class="line"><span>      &lt;NavLink to=&quot;news&quot;&gt;News&lt;/NavLink&gt;</span></span>
<span class="line"><span>      &lt;NavLink to=&quot;message&quot;&gt;Message&lt;/NavLink&gt;</span></span>
<span class="line"><span>      &lt;hr /&gt;</span></span>
<span class="line"><span>      {/* 子路由出口 */}</span></span>
<span class="line"><span>      &lt;Outlet&gt;&lt;/Outlet&gt;</span></span>
<span class="line"><span>    &lt;/Fragment&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="navlink-路由高亮" tabindex="-1"><code>&lt;NavLink&gt;</code> 路由高亮 <a class="header-anchor" href="#navlink-路由高亮" aria-label="Permalink to &quot;\`&lt;NavLink&gt;\` 路由高亮&quot;">​</a></h2><p>实现导航的 “高亮” 效果，6 版本不能直接指定高亮类名，需要通过函数返回。该函数传入一个对象，类似于 <code>{isActive: true}</code> 标识路由是否被激活。</p><p>默认情况下，当 <code>Home</code> 的子组件匹配成功，<code>Home</code> 的导航也会高亮，<code>end</code> 属性可移除该效果。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// NavLink 默认类名是 active，下面是指定自定义类名</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//自定义样式</span></span>
<span class="line"><span>&lt;NavLink</span></span>
<span class="line"><span>    to=&quot;login&quot;</span></span>
<span class="line"><span>    className={({ isActive }) =&gt; {</span></span>
<span class="line"><span>        console.log(&#39;home&#39;, isActive)</span></span>
<span class="line"><span>        return isActive ? &#39;base MyClass&#39; : &#39;base&#39;</span></span>
<span class="line"><span>    }}</span></span>
<span class="line"><span>&gt;about&lt;/NavLink&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 默认情况下，当 Home 的子组件匹配成功，Home 的导航也会高亮</span></span>
<span class="line"><span>// 当 NavLink 上添加了 end 属性后，若 Home 的子组件匹配成功，则 Home 的导航没有高亮效果。</span></span>
<span class="line"><span>&lt;NavLink to=&quot;home&quot; end &gt;home&lt;/NavLink&gt;</span></span></code></pre></div><h2 id="路由传参-1" tabindex="-1">路由传参 <a class="header-anchor" href="#路由传参-1" aria-label="Permalink to &quot;路由传参&quot;">​</a></h2><blockquote><p>以不使用路由表为例</p></blockquote><h3 id="传递-params参数" tabindex="-1">传递 <code>params</code>参数 <a class="header-anchor" href="#传递-params参数" aria-label="Permalink to &quot;传递 \`params\`参数&quot;">​</a></h3><p>注册路由时声明 <code>params</code> 参数，和 React Router 5 一样。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>export default function App() {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;Routes&gt;</span></span>
<span class="line"><span>        &lt;Route path=&quot;hello&quot; element={&lt;Hello /&gt;}&gt;</span></span>
<span class="line"><span>          &lt;Route path=&quot;message&quot; element={&lt;Message /&gt;}&gt;</span></span>
<span class="line"><span>            &lt;Route path=&quot;detail/:id/:name/:age&quot; element={&lt;Detail /&gt;} /&gt;</span></span>
<span class="line"><span>          &lt;/Route&gt;</span></span>
<span class="line"><span>        &lt;/Route&gt;</span></span>
<span class="line"><span>      &lt;/Routes&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>传递参数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;Link to={\`detail/\${item.id}/\${item.name}/\${item.age}\`}&gt;{item.name}&lt;/Link&gt;</span></span></code></pre></div><p>使用 <code>useParams()</code> 接收 <code>params</code> 参数。<code>useParams()</code> 返回一个参数对象。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import React from &#39;react&#39;</span></span>
<span class="line"><span>import { useParams, useMatch } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Detail() {</span></span>
<span class="line"><span>  // 解构赋值</span></span>
<span class="line"><span>  const { id, name, age } = useParams()</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;li&gt;id:{id}&lt;/li&gt;</span></span>
<span class="line"><span>      &lt;li&gt;name:{name}&lt;/li&gt;</span></span>
<span class="line"><span>      &lt;li&gt;age:{age}&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="传递-search-参数" tabindex="-1">传递 <code>search</code> 参数 <a class="header-anchor" href="#传递-search-参数" aria-label="Permalink to &quot;传递 \`search\` 参数&quot;">​</a></h3><p>和 5 版本一样，正常注册路由即可。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;Route path=&quot;detail&quot; element={&lt;Detail /&gt;} /&gt;</span></span></code></pre></div><p>传递参数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;Link to={\`detail?id=\${item.id}&amp;name=\${item.name}&amp;age=\${item.age}\`}&gt;{item.name}&lt;/Link&gt;</span></span></code></pre></div><p>使用 <code>useSearchParams()</code> 接收参数。该方法返回一个包含两个元素的数组：<code>search</code> 参数和修改 <code>search</code> 参数的方法。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import React from &#39;react&#39;</span></span>
<span class="line"><span>import { useSearchParams } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Detail() {</span></span>
<span class="line"><span>  // 数组的解构赋值</span></span>
<span class="line"><span>  const [searchParams, setSearchParams] = useSearchParams()</span></span>
<span class="line"><span>  // 需要调用 get() 方法获取对应的参数值</span></span>
<span class="line"><span>  const id = searchParams.get(&#39;id&#39;)</span></span>
<span class="line"><span>  const name = searchParams.get(&#39;name&#39;)</span></span>
<span class="line"><span>  const age = searchParams.get(&#39;age&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function change() {</span></span>
<span class="line"><span>    setSearchParams(&#39;id=666&amp;name=Lily&amp;age=888&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;li&gt;id:{id}&lt;/li&gt;</span></span>
<span class="line"><span>      &lt;li&gt;name:{name}&lt;/li&gt;</span></span>
<span class="line"><span>      &lt;li&gt;age:{age}&lt;/li&gt;</span></span>
<span class="line"><span>      &lt;button onClick={change}&gt;Change search params&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span></code></pre></div><h3 id="传递-state-参数" tabindex="-1">传递 <code>state</code> 参数 <a class="header-anchor" href="#传递-state-参数" aria-label="Permalink to &quot;传递 \`state\` 参数&quot;">​</a></h3><p>和 5 版本一样，正常注册路由即可。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;Route path=&quot;detail&quot; element={&lt;Detail /&gt;} /&gt;</span></span></code></pre></div><p>传递参数，这里相较于 5 版本有所不同，不必写到一个对象里面。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;Link to=&quot;detail&quot; state={{ id: item.id, name: item.name, age: item.age }}&gt;</span></span>
<span class="line"><span>  {item.name}</span></span>
<span class="line"><span>&lt;/Link&gt;</span></span></code></pre></div><p>使用 <code>useLocation()</code> 接收参数。该方法返回路由组件的 <code>location</code> 对象，就是 5 版本路由组件的 <code>location</code> 属性，其中包含 <code>state</code> 参数。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import { useLocation } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Detail() {</span></span>
<span class="line"><span>  // 连续解构赋值</span></span>
<span class="line"><span>  const {</span></span>
<span class="line"><span>    state: { id, name, age },</span></span>
<span class="line"><span>  } = useLocation()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;li&gt;id:{id}&lt;/li&gt;</span></span>
<span class="line"><span>      &lt;li&gt;name:{name}&lt;/li&gt;</span></span>
<span class="line"><span>      &lt;li&gt;age:{age}&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="usenavigate-编程式路由导航" tabindex="-1"><code>useNavigate()</code> 编程式路由导航 <a class="header-anchor" href="#usenavigate-编程式路由导航" aria-label="Permalink to &quot;\`useNavigate()\` 编程式路由导航&quot;">​</a></h2><p><code>useNavigate()</code> 返回一个函数，调用该函数实现编程式路由导航。函数有两种参数传递方式。</p><p>第一种方式传递两个参数：路由和相关参数。参数只能设置 <code>replace</code> 和 <code>state</code>。想要传递 <code>params</code> 和 <code>search</code> 参数直接在路由带上。</p><p>第二种方式传递数字，代表前进或后退几步。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>import React, { useState } from &#39;react&#39;</span></span>
<span class="line"><span>import { Outlet, useNavigate } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Message() {</span></span>
<span class="line"><span>  const [list] = useState([</span></span>
<span class="line"><span>    { id: 1, name: &#39;Bruce&#39;, age: 33 },</span></span>
<span class="line"><span>    { id: 2, name: &#39;You&#39;, age: 3 },</span></span>
<span class="line"><span>    { id: 3, name: &#39;React&#39;, age: 333 },</span></span>
<span class="line"><span>  ])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const navigate = useNavigate()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function showDetail(item) {</span></span>
<span class="line"><span>    navigate(&#39;detail&#39;, {</span></span>
<span class="line"><span>      replace: true,</span></span>
<span class="line"><span>      state: {</span></span>
<span class="line"><span>        id: item.id,</span></span>
<span class="line"><span>        name: item.name,</span></span>
<span class="line"><span>        age: item.age,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function back() {</span></span>
<span class="line"><span>    navigate(1)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function forward() {</span></span>
<span class="line"><span>    navigate(-1)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;ul&gt;</span></span>
<span class="line"><span>        {list.map((item) =&gt; {</span></span>
<span class="line"><span>          return (</span></span>
<span class="line"><span>            &lt;li key={item.id}&gt;</span></span>
<span class="line"><span>              &lt;button onClick={() =&gt; showDetail(item)}&gt;查看详情&lt;/button&gt;</span></span>
<span class="line"><span>              &lt;button onClick={back}&gt;后退&lt;/button&gt;</span></span>
<span class="line"><span>              &lt;button onClick={forward}&gt;前进&lt;/button&gt;</span></span>
<span class="line"><span>            &lt;/li&gt;</span></span>
<span class="line"><span>          )</span></span>
<span class="line"><span>        })}</span></span>
<span class="line"><span>      &lt;/ul&gt;</span></span>
<span class="line"><span>      &lt;Outlet&gt;&lt;/Outlet&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="other-hooks" tabindex="-1">Other Hooks <a class="header-anchor" href="#other-hooks" aria-label="Permalink to &quot;Other Hooks&quot;">​</a></h2><h3 id="usematch" tabindex="-1"><code>useMatch()</code> <a class="header-anchor" href="#usematch" aria-label="Permalink to &quot;\`useMatch()\`&quot;">​</a></h3><p>返回路由组件的 <code>match</code> 数据，即 5 版本中的 <code>match</code> 属性。</p><p>必须传入该组件对应的路由规则才能正确返回，否则返回 <code>null</code>。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// Detail.jsx</span></span>
<span class="line"><span>import { useParams, useMatch } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default function Detail() {</span></span>
<span class="line"><span>  const match = useMatch(&#39;hello/message/detail/:id/:name/:age&#39;)</span></span>
<span class="line"><span>  console.log(match)</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;li&gt;id&lt;/li&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>params: {id: &#39;1&#39;, name: &#39;Bruce&#39;, age: &#39;33&#39;}</span></span>
<span class="line"><span>pathname: &quot;/hello/message/detail/1/Bruce/33&quot;</span></span>
<span class="line"><span>pathnameBase: &quot;/hello/message/detail/1/Bruce/33&quot;</span></span>
<span class="line"><span>pattern: {path: &#39;hello/message/detail/:id/:name/:age&#39;, caseSensitive: false, end: true}</span></span>
<span class="line"><span>*/</span></span></code></pre></div><h3 id="useinroutercontext" tabindex="-1"><code>useInRouterContext()</code> <a class="header-anchor" href="#useinroutercontext" aria-label="Permalink to &quot;\`useInRouterContext()\`&quot;">​</a></h3><p>如果组件在 <code>&lt;Router&gt;</code> 的上下文中呈现，则 <code>useInRouterContext</code> 钩子返回 <code>true</code>，否则返回 <code>false</code>。即组件有没有被包裹在 <code>&lt;BrowserRouter&gt;</code> 这种东西里面。这个对第三方组件库有用处。</p><h3 id="usenavigationtype" tabindex="-1"><code>useNavigationType()</code> <a class="header-anchor" href="#usenavigationtype" aria-label="Permalink to &quot;\`useNavigationType()\`&quot;">​</a></h3><p>返回当前的导航类型（用户是如何来到当前页面的）。</p><p>返回值：<code>POP</code>、<code>PUSH</code>、<code>REPLACE</code>。</p><p><code>POP</code> 是指在浏览器中直接打开了这个路由组件（刷新页面）。</p><h3 id="useoutlet" tabindex="-1"><code>useOutlet()</code> <a class="header-anchor" href="#useoutlet" aria-label="Permalink to &quot;\`useOutlet()\`&quot;">​</a></h3><p>用来呈现当前组件中渲染的嵌套路由。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const result = useOutlet()</span></span>
<span class="line"><span>console.log(result)</span></span>
<span class="line"><span>// 如果嵌套路由没有挂载,则返回 null</span></span>
<span class="line"><span>// 如果嵌套路由已经挂载,则展示嵌套的路由对象</span></span></code></pre></div><h3 id="useresolvedpath" tabindex="-1"><code>useResolvedPath()</code> <a class="header-anchor" href="#useresolvedpath" aria-label="Permalink to &quot;\`useResolvedPath()\`&quot;">​</a></h3><p>给定一个 URL 值，解析其中的：<code>path</code>、<code>search</code>、<code>hash</code> 值。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const res = useResolvedPath(&#39;/user?id=001&amp;name=Bruce#React&#39;)</span></span>
<span class="line"><span>console.log(res)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/*</span></span>
<span class="line"><span>hash: &#39;#React&#39;</span></span>
<span class="line"><span>pathname: &#39;/user&#39;</span></span>
<span class="line"><span>search: &#39;?id=001&amp;name=Bruce&#39;</span></span>
<span class="line"><span>*/</span></span></code></pre></div></div></div></div>`,88),t=[l];function i(c,o,r,d,h,u){return n(),a("div",null,t)}const m=s(e,[["render",i]]);export{k as __pageData,m as default};
