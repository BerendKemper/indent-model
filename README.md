# IndentModel
Configure an indentation model and put spaces with fixed tabsizes in between strings
<br>
<pre><code>npm i indent-model</code></pre>

```javascript
const IndentModel = require("indent-model");
```
<br>
<h3>Class IndentModel</h3>
<h3>IndentModel.tabify(...data)</h3>
<ul>
	<details>
		<summary>
			<code>data</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values">&lt;Primitive&gt;</a>
		</summary>
		Typically <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values">&lt;Primitive&gt;</a> types can be joined into a printable string. This method does not have features to join objects and arrays into strings like <a href="https://developer.mozilla.org/en-US/docs/Web/API/Console/log">console.log</a> does.
	</details>
	<details>
		<summary>
			Returns <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">&lt;string&gt;</a>
		</summary>
		A tabified string. Examples are shown below.
	</details>
</ul>
<h3>new IndentModel([options])</h3>
<ul>
	<details>
		<summary>
			<code>options</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">&lt;Object&gt;</a> optional
		</summary>
		<ul>
			<details>
				<summary>
					<code>tabSize</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> Default: <code>4</code>
				</summary>
				The amount of spaces one tab is made up of.
			</details>
			<details>
				<summary>
					<code>minDistance</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type">&lt;integer&gt;</a> Default: <code>2</code>
				</summary>
				The minimal amount of spaces that separates two strings from each other.
			</details>
		</ul>
	</details>
</ul>
<h2>Example</h2>

```javascript
const IndentModel = require("indent-model");
const itemsToLog = [
    "2020-08-06T00:00:00.000+0200",
    "GET",
    "/v1/some/api/endpoint",
    "monkey",
    1273457,
    true,
    false
];
//
const tabs4 = new IndentModel();
console.log(tabs4.tabify(...itemsToLog));
"2020-08-06T00:00:00.000+0200    GET     /v1/some/api/endpoint   monkey  1273457     true    false"
//--,---,---,---,---,---,---,---,---,---,---,---,---,---,---,---,---,---,---,---,---,---,---,
//
const tabs6 = new IndentModel({ tabSize: 6, minDistance: 4 });
console.log(tabs6.tabify(...itemsToLog));
"2020-08-06T00:00:00.000+0200        GET         /v1/some/api/endpoint         monkey      1273457     true        false"
//----,-----,-----,-----,-----,-----,-----,-----,-----,-----,-----,-----,-----,-----,-----,-----,-----,-----,-----,
```