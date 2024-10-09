# 常见算法汇总

## 二叉树

### 前序遍历

递归版：

```js
const preorderTraversal = function (root) {
  const results = []
  function traverse(node) {
    if (node) {
      results.push(node.val)
      traverse(node.left)
      traverse(node.right)
    }
  }
  traverse(root)
  return results
}
```

循环版

```js
const preorderTraversal = function (root) {
  const results = []
  const stack = []
  let cur = root
  while (cur || stack.length) {
    while (cur) {
      results.push(cur.val)
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    cur = cur.right
  }
  return results
}
```

### 中序遍历

递归版：

```js
const inorderTraversal = function (root) {
  const results = []
  function traverse(node) {
    if (node) {
      traverse(node.left)
      results.push(node.val)
      traverse(node.right)
    }
  }
  traverse(root)
  return results
}
```

循环版

```js
const inorderTraversal = function (root) {
  const results = []
  const stack = []
  let cur = root
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    results.push(cur.val)
    cur = cur.right
  }
  return results
}
```

### 后序遍历

后序遍历个人感觉递归版很简单，但是循环版是最难的... 每次都很难想到，最后问AI写的答案哈哈哈哈。

还有一个思路就是先走前序遍历（但是是 中右左），生成的results再`results.reverse()`就出来了。

递归版：

```js
const postorderTraversal = function (root) {
  const results = []
  function traverse(node) {
    if (node) {
      node.left && traverse(node.left)
      node.right && traverse(node.right)
      results.push(node.val)
    }
  }
  traverse(root)
  return results
}
```

循环版

```js
const postorderTraversal = function (root) {
  const results = []
  if (root !== null) {
    const stack1 = [root]
    const stack2 = []

    while (stack1.length > 0) {
      const node = stack1.pop()
      stack2.push(node)

      if (node.left) {
        stack1.push(node.left)
      }
      if (node.right) {
        stack1.push(node.right)
      }
    }

    while (stack2.length > 0) {
      const node = stack2.pop()
      results.push(node.val)
    }
  }
  return results
}
```

还有一个栈版本的：

```js
function postorderIterativeOneStack(root) {
  const results = []
  const stack = []
  let cur = root
  let lastVisited = null

  while (cur || stack.length) {
      if (cur) {
          stack.push(cur)
          cur = cur.left
          continue
      }
      const peek = stack[stack.length - 1]
      if (peek.right && lastVisited !== peek.right) {
          cur = peek.right
          continue
      }
      results.push(peek.value)
      lastVisited = stack.pop()
  }
  return results
}
```

### 层次遍历

有详细版和简化版的，区别在于需不需要直到某一层的大小，比如：

```js
/* 详细版 */
const levelOrder = function (root) {
  const stack = [root]
  let levelSize = 0
  const results = []
  if (!root) {
    return results
  }
  while ((levelSize = stack.length)) {
    const items = []
    // 遍历这一层的元素，这里可以直到某一层的大小
    for (let i = 0; i < levelSize; i++) {
      const cur = stack.shift()
      items.push(cur.val)
      cur.left && stack.push(cur.left)
      cur.right && stack.push(cur.right)
    }
    results.push(items)
  }
  return results
}

/* 简化版 */
const levelOrder = function (root) {
  const stack = [root]
  let cur = null
  while ((cur = stack.shift())) {
    // 纯遍历，不需要直到levelSize
    console.log(cur.val)
    cur.left && stack.push(cur.left)
    cur.right && stack.push(cur.right)
  }
}
```
