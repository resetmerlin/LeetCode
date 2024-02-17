**Balanced** strings are those that have an equal quantity of `'L'` and `'R'` characters.

Given a **balanced** string `s`, split it into some number of substrings such that:

- Each substring is balanced.

Return _the **maximum** number of balanced strings you can obtain._

**Example 1:**

```
<strong>Input:</strong> s = "RLRRLLRLRL"
<strong>Output:</strong> 4
<strong>Explanation:</strong> s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
```

**Example 2:**

```
<strong>Input:</strong> s = "RLRRRLLRLL"
<strong>Output:</strong> 2
<strong>Explanation:</strong> s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2<sup>nd</sup> and 5<sup>th</sup> substrings are not balanced.
```

**Example 3:**

```
<strong>Input:</strong> s = "LLLLRRRR"
<strong>Output:</strong> 1
<strong>Explanation:</strong> s can be split into "LLLLRRRR".
```

**Constraints:**

- `2 <= s.length <= 1000`
- `s[i]` is either `'L'` or `'R'`.
- `s` is a **balanced** string.

---

Seen this question in a real interview before?

1/4

---

---

---

---

---

---
