import{_ as n,e as s}from"./app.54d3e095.js";const a={},t=s(`<h1 id="\u{1FA96}-arma-reforger" tabindex="-1"><a class="header-anchor" href="#\u{1FA96}-arma-reforger" aria-hidden="true">#</a> \u{1FA96} Arma Reforger</h1><h2 id="hints" tabindex="-1"><a class="header-anchor" href="#hints" aria-hidden="true">#</a> Hints</h2><div class="language-c ext-c"><pre class="language-c"><code>string title <span class="token operator">=</span> <span class="token string">&quot;Gruppe Adler&quot;</span><span class="token punctuation">;</span> <span class="token comment">// default = string.Empty</span>
string message <span class="token operator">=</span> <span class="token string">&quot;rulez&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> duration <span class="token operator">=</span> <span class="token number">10.0</span><span class="token punctuation">;</span> <span class="token comment">// in seconds</span>
bool isSilent <span class="token operator">=</span> false<span class="token punctuation">;</span> <span class="token comment">// default = false</span>

SCR_HintManagerComponent<span class="token punctuation">.</span><span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ShowCustomHint</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> title<span class="token punctuation">,</span> duration<span class="token punctuation">,</span> isSilent<span class="token punctuation">)</span><span class="token punctuation">;</span>

SCR_HintManagerComponent<span class="token punctuation">.</span><span class="token function">GetInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ShowCustomHint</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre></div><img width="222" alt="Screenshot 2023-10-14 111219" src="https://github.com/gruppe-adler/wiki.gruppe-adler.de/assets/50139270/85497374-bf69-4c84-a11a-cfe541990f23"><h2 id="console-output" tabindex="-1"><a class="header-anchor" href="#console-output" aria-hidden="true">#</a> Console Output</h2><div class="language-c ext-c"><pre class="language-c"><code><span class="token comment">// LogLevel defaults to LogLevel.NORMAL</span>

<span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;spam message&quot;</span><span class="token punctuation">,</span> LogLevel<span class="token punctuation">.</span>SPAM<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;verbose message&quot;</span><span class="token punctuation">,</span> LogLevel<span class="token punctuation">.</span>VERBOSE<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;debug message&quot;</span><span class="token punctuation">,</span> LogLevel<span class="token punctuation">.</span>DEBUG<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;normal message&quot;</span><span class="token punctuation">,</span> LogLevel<span class="token punctuation">.</span>NORMAL<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;warning message&quot;</span><span class="token punctuation">,</span> LogLevel<span class="token punctuation">.</span>WARNING<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;error message&quot;</span><span class="token punctuation">,</span> LogLevel<span class="token punctuation">.</span>ERROR<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;fatal message&quot;</span><span class="token punctuation">,</span> LogLevel<span class="token punctuation">.</span>FATAL<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//Perhaps SPAM, VERBOSE and DEBUG only show up if special states are active, like Debug Mode</span>
</code></pre></div><img width="362" alt="Screenshot 2023-10-14 112118" src="https://github.com/gruppe-adler/wiki.gruppe-adler.de/assets/50139270/ea0a9d79-84fc-48fd-befb-398ac95c93cc"><div class="language-c ext-c"><pre class="language-c"><code>string s1 <span class="token operator">=</span> <span class="token string">&quot;The&quot;</span><span class="token punctuation">;</span>
string s2 <span class="token operator">=</span> <span class="token string">&quot;quick&quot;</span><span class="token punctuation">;</span>
string s3 <span class="token operator">=</span> <span class="token string">&quot;brown&quot;</span><span class="token punctuation">;</span>
string s4 <span class="token operator">=</span> <span class="token string">&quot;fox&quot;</span><span class="token punctuation">;</span>
string s5 <span class="token operator">=</span> <span class="token string">&quot;jumps&quot;</span><span class="token punctuation">;</span>
string s6 <span class="token operator">=</span> <span class="token string">&quot;over&quot;</span><span class="token punctuation">;</span>
string s7 <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span>
string s8 <span class="token operator">=</span> <span class="token string">&quot;lazy&quot;</span><span class="token punctuation">;</span>
string s9 <span class="token operator">=</span> <span class="token string">&quot;dog&quot;</span><span class="token punctuation">;</span>

<span class="token function">PrintFormat</span><span class="token punctuation">(</span><span class="token string">&quot;%1 %2 %3 %4 %5 %6 %7 %8 %9.&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> s3<span class="token punctuation">,</span> s4<span class="token punctuation">,</span> s5<span class="token punctuation">,</span> s6<span class="token punctuation">,</span> s7<span class="token punctuation">,</span> s8<span class="token punctuation">,</span> s9<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// PrintFormat() does not support LogLevel but you could use this instead:</span>
<span class="token function">Print</span><span class="token punctuation">(</span>string<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">&quot;%1 %2 %3 %4 %5 %6 %7 %8 %9.&quot;</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> s3<span class="token punctuation">,</span> s4<span class="token punctuation">,</span> s5<span class="token punctuation">,</span> s6<span class="token punctuation">,</span> s7<span class="token punctuation">,</span> s8<span class="token punctuation">,</span> s9<span class="token punctuation">)</span><span class="token punctuation">,</span> LogLevel<span class="token punctuation">.</span>NORMAL<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// I think I read somewhere that the parameter count of functions is generally limited to 9 or 10</span>
</code></pre></div><img width="376" alt="Screenshot 2023-10-14 112710" src="https://github.com/gruppe-adler/wiki.gruppe-adler.de/assets/50139270/86539fb9-f196-4d3a-81af-4b0a387ac7f4">`,9);function p(o,e){return t}var u=n(a,[["render",p]]);export{u as default};
