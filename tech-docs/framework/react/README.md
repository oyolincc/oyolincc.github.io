# React源码小记

## 渲染流程

```js
ReactDOM.createRoot(rootElement).render(<App />)
```

首先会创建Fiber根节点，再创建根Fiber节点。

开始递的过程（beginWork），过程中会创建Fiber节点，建立父子Fiber的关系，且会开始协调新旧Fiber，标记更新、新增或删除。

然后是归的过程（completeWork），过程中会创建DOM节点，建立父子DOM的关系，合并节点flags。

最后是提交的过程（commitRoot），过程中会更新DOM。

## useState

### useState 过程中发生了什么

#### 首次渲染
- 当函数组件首次渲染时，useState 会创建一个新的 Hook 对象，并将其插入到当前 Fiber 节点的 Hook 链表中
- 初始化 memoizedState 为初始状态
- 返回 memoizedState 和 dispatch 函数

#### 后续渲染
- 复用已有的 Hook 对象
- 检查是否有待处理的更新，如果有，则依次执行这些更新，更新 memoizedState
- 返回最新的 memoizedState 和 dispatch 函数

#### 如何触发重新渲染
当调用 setState（即 dispatch 函数）时，会执行以下步骤：
1. 创建一个新的更新对象 update，并将其插入到 queue.pending 链表中
2. 调用 scheduleUpdateOnFiber 函数，该函数会触发 React 的调度流程，最终导致组件重新渲染
