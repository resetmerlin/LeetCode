You are given an array `apple` of size `n` and an array `capacity` of size `m`.

There are `n` packs where the `i<sup>th</sup>` pack contains `apple[i]` apples. There are `m` boxes as well, and the `i<sup>th</sup>` box has a capacity of `capacity[i]` apples.

Return _the **minimum** number of boxes you need to select to redistribute these_ `n` _packs of apples into boxes_.

**Note** that, apples from the same pack can be distributed into different boxes.

**Example 1:**

```
<strong>Input:</strong> apple = [1,3,2], capacity = [4,3,1,5,2]
<strong>Output:</strong> 2
<strong>Explanation:</strong> We will use boxes with capacities 4 and 5.
It is possible to distribute the apples as the total capacity is greater than or equal to the total number of apples.
```

**Example 2:**

```
<strong>Input:</strong> apple = [5,5,5], capacity = [2,4,2,7]
<strong>Output:</strong> 4
<strong>Explanation:</strong> We will need to use all the boxes.
```

**Constraints:**

- `1 <= n == apple.length <= 50`
- `1 <= m == capacity.length <= 50`
- `1 <= apple[i], capacity[i] <= 50`
- The input is generated such that it's possible to redistribute packs of apples into boxes.
