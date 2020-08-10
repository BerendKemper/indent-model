# IndentModel

<pre><code class="language-javascript">npm i indent-model

const IndentModel = require("indent-model");</code></pre>

<h3>Class IndentModel</h3>
<h4>indentModel.tabify(...data)</h4>
<pre><code>const tabs4 = new IndentModel();
tabs4.tabify("2020-08-06T00:00:00.000+0200", "GET",
    "/v1/some/api/endpoint", "monkey", 1273457, true, 
    false);
// "2020-08-06T00:00:00.000+0200    GET     /v1/some/api/endpoint   monkey  1273457     true    false"</code></pre>

<h3>new IndentModel([options][,callback])</h3>
<ul>
    <li><code>options</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">&lt;Object&gt;</a></li>
    <ul>
        <li><code>spaces</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> Default: <code>4</code></li>
        <li><code>spaced</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> Default: <code>2</code></li>
    </ul>
    <li><code>callback</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function">&lt;Function&gt;</a></li>
    <ul>
        <li><code>tabified</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">&lt;string&gt;</a></li>
    </ul>
    <li>Returns <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">&lt;string&gt;</a></li>
</ul>

<pre><code>const tabs6 = new IndentModel({ spaces: 6, spaced: 4 });
tabs6.tabify("2020-08-06T00:00:00.000+0200", "GET",
    "test /v1/some/api/endpoint", "monkey", 1273457, true, 
    false, tabified => console.log("test", tabified));
// "2020-08-06T00:00:00.000+0200        GET         /v1/some/api/endpoint         monkey      1273457     true        false"</code></pre>