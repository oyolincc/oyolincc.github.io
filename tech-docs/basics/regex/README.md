# JavaScript正则表达式

## 使用方法

Javascript创建正则表达式方法有以下两种：

* **字面量**

    ```js
    var expression = / pattern / flags
    ```

    其中pattern部分可以是任何简单或复杂的正则表达式。flags支持以下三个标志：

    **g**：表示全局模式，即模式将被用于所有字符串，而非在发现第一个匹配项时立即停止

    **i** ：表示不区分大小写

    **m**：多行模式，即在到达一行文本末尾时还会继续查找下一行中是否存在模式匹配项

    ```js
    "abcuuuabuab".replace(/ab/, '**');	//	**cuuuabuab
    "abcuuuabuab".replace(/ab/g, '**');	//	**cuuu**u**
    ```

* **构造函数**

    ```js
    var pattern1 = /\d{3}/g;
    var pattern2 = new RegExp('\\d{3}', 'g');
    // pattern1 与 pattern2等价
    
    for (i=0; i<4; i++)
        console.log(re.lastIndex, re.test('ppcatacatb'));
    //  连续输出四次  0  true
    
    re = new RegExp('cat', 'g');
    
    for (i=0; i<4; i++)
        console.log(re.lastIndex, re.test('ppcatacatb'));
    //	输出分别为：0 true, 5 true, 9 false, 0 true
    //	( lastIndex属性详见下文 **RegExp属性与方法** )
    ```



## RegExp属性与方法

### RegExp属性

  * **global：**布尔值，表示是否设置了 **g** 标志
  * **ignoreCase：**布尔值，表示是否设置了 **i** 标志
  * **lastIndex：**整数，表示开始搜索下一个匹配项的字符位置，从0算起
  * **multiline：**布尔值，表示是否设置了**m**标志
  * **source：**正则表达式的字符串表示（与字面量模式中的pattern相同）

### RegExp自带方法

* **exec()**

  该方法接收一个待匹配的字符串，然后返回一个包含第一个匹配项信息的数组，若无匹配项将返回**null**，返回的数组有额外两个属性：**index**和**input**，前者为匹配项在字符串中的位置，后者为应用的正则表达式字符串。在数组中，第一项是整个模式匹配的字符串，其他项是模式中的捕获组匹配的字符串。

  ```js
  console.dir(/\d{3}/g.exec('abb1286f777'));
  /*
      0: "128"
      groups: undefined
      index: 3
      input: "abb1286f777"
      length: 1
  */
  ```

  更多例子见下文 **捕获组**。

* **test()**

  接受一个字符串参数并返回是否匹配，即true或false。

### 字符串的正则方法

* **search()**

  检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。 

  ```js
  "What the Fuck about Huck and Fuck!".search(/[F]uck/g);	// 9
  ```
  
* **replace()**

  用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

* **match()**

  接收一个正则表达式实例并返回匹配项的数组。

  ```js
  'aaaaabbbbb'.match(/./g)
  // ["a", "a", "a", "a", "a", "b", "b", "b", "b", "b"]
  ```




## RegExp语法

### 方括号

  ```
  [abc]				查找方括号之间的任何字符
  [^abc]				查找任何不在方括号之间的字符
  [0-9]				查找任何从 0 至 9 的数字
  [a-z]				查找任何从小写 a 到小写 z 的字符
  [A-Z]				查找任何从大写 A 到大写 Z 的字符
  [A-z]				查找任何从大写 A 到小写 z 的字符
  [adgk]				查找给定集合内的任何字符
  [^adgk]				查找给定集合外的任何字符
  (red|blue|green)	查找任何指定的选项
  ```

 ### 元字符

  ```
  .		查找任意单个字符，除了换行和行结束符
  \w		查找单词字符。即 a-zA-Z0-9
  \W		查找非单词字符
  \d		查找数字
  \D		查找非数字字符
  \s		查找空白字符。即空格符、制表符、回车符、换行符、垂直换行符、换页符
  \S		查找非空白字符
  \b		匹配单词边界
  \B		匹配非单词边界
  \0		查找 NULL 字符
  \n		查找换行符
  \f		查找换页符
  \r		查找回车符
  \t		查找制表符
  \v		查找垂直制表符
  \xxx	查找以八进制数 xxx 规定的字符
  \xdd	查找以十六进制数 dd 规定的字符
  \uxxxx	查找以十六进制数 xxxx 规定的 Unicode 字符
  ```

例如：

```js
  /uck\b../g.exec('fuckA huck tool');
  // ["uck t", index: 7, input: "fuckA huck tool", groups: undefined]
```

### 量词

```
  n+		匹配任何包含至少一个 n 的字符串。
  n*		匹配任何包含零个或多个 n 的字符串。
  n?		匹配任何包含零个或一个 n 的字符串。
  n{X}	匹配包含 X 个 n 的序列的字符串。
  n{X,}	X 是一个正整数。前面的模式 n 连续出现至少 X 次时匹配。
  n{X,Y}	X 和 Y 为正整数。前面的模式 n 连续出现至少 X 次，至多 Y 次时匹配。
  n$		匹配任何结尾为 n 的字符串。
  ^n		匹配任何开头为 n 的字符串。
  ?=n		匹配任何其后紧接指定字符串 n 的字符串。
  ?!n		匹配任何其后没有紧接指定字符串 n 的字符串。
```

例如：

```js
  /ha(?=owa)/g.exec('hahahawohaowahaha');
  // ["ha", index: 8, input: "hahahawohaowahaha", groups: undefined]
  /(?=owa)ha/g.exec('hahahawohaowahaha');
  // null
```

### 捕获组 & 非捕获组

捕获组就是把正则表达式中子表达式匹配的内容，保存到内存中以数字编号或显式命名的组里，方便后面引用，组的编号方式以深度优先开始编号，捕获组使用**( )**进行捕获：

  ```js
  /((\d{2})a)/g.exec('789b83a');
  // ["83a", "83a", "83", index: 4, input: "789b83a", groups: undefined]
  // 可知 组0："83a"	组1："83"
  
  /om\s(Lisa|Reky){2}/g.exec('om LisaReky')
  // ["om LisaReky", "Reky", index: 0, input: "om LisaReky", groups: undefined]
  ```

  非捕获组则是参与匹配但不捕获：

  ```js
  /om\s(?:Lisa|Reky){2}/g.exec('om LisaReky');
  // ["om LisaReky", index: 0, input: "om LisaReky", groups: undefined]
  ```

### 引用

* 外部引用

  可使用 `$x` 取得组的引用。

  ```js
  '爸爸打儿子'.replace(/^(.+)打(.+)$/g, '$2打$1');
  // '儿子打爸爸'
  ```

  上述$1表示捕获的第一个组，$2表示捕获的第二个组。

* 反向引用

  捕获组捕获到的内容，不仅可以在正则表达式外部通过程序进行引用，也可以在正则表达式内部用 **\x** 进行引用，这种引用方式就是反向引用。

  ```js
  '爸爸打爸爸吗'.match(/^(.+)打\1/g);
  // ["爸爸打爸爸"]
  ```

### 贪婪与非贪婪模式

默认情况下捕获为贪婪模式，即最大程度匹配待匹配的表达式：

```js
/(.+)b/g.exec('aaaaabbbb');
// ["aaaaabbbb", "aaaaabbb", index: 0, input: "aaaaabbbb", groups: undefined]
```

因此，可以使用 **?** 转变为非贪婪模式：

```js
/(.+?)b/g.exec('aaaaabbbb')
// ["aaaaab", "aaaaa", index: 0, input: "aaaaabbbb", groups: undefined]
```

