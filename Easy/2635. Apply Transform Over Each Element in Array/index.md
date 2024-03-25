Given an integer array `arr` and a mapping function `fn`, return a new array with a transformation applied to each element.

The returned array should be created such that `returnedArray[i] = fn(arr[i], i)`.

Please solve it without the built-in `Array.map` method.

**Example 1:**

```
<strong>Input:</strong> arr = [1,2,3], fn = function plusone(n) { return n + 1; }
<strong>Output:</strong> [2,3,4]
<strong>Explanation:</strong>
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one.
```

**Example 2:**

```
<strong>Input:</strong> arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
<strong>Output:</strong> [1,3,5]
<strong>Explanation:</strong> The function increases each value by the index it resides in.
```

**Example 3:**

```
<strong>Input:</strong> arr = [10,20,30], fn = function constant() { return 42; }
<strong>Output:</strong> [42,42,42]
<strong>Explanation:</strong> The function always returns 42.
```

**Constraints:**

- `0 <= arr.length <= 1000`
- `-10<sup>9</sup> <= arr[i] <= 10<sup>9</sup>`
- `fn` returns a number

---

Seen this question in a real interview before?

1/4

---

---

---

---

---

Copyright ©️ 2024 LeetCode All rights reserved
