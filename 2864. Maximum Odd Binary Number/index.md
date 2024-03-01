You are given a **binary** string `s` that contains at least one `'1'`.

You have to **rearrange** the bits in such a way that the resulting binary number is the **maximum odd binary number** that can be created from this combination.

Return _a string representing the maximum odd binary number that can be created from the given combination._

**Note** that the resulting string **can** have leading zeros.

**Example 1:**

```
<strong>Input:</strong> s = "010"
<strong>Output:</strong> "001"
<strong>Explanation:</strong> Because there is just one '1', it must be in the last position. So the answer is "001".
```

**Example 2:**

```
<strong>Input:</strong> s = "0101"
<strong>Output:</strong> "1001"
<strong>Explanation: </strong>One of the '1's must be in the last position. The maximum number that can be made with the remaining digits is "100". So the answer is "1001".
```

**Constraints:**

- `1 <= s.length <= 100`
- `s` consists only of `'0'` and `'1'`.
- `s` contains at least one `'1'`.

---

Seen this question in a real interview before?

1/4

---

---

---

---

Copyright ©️ 2024 LeetCode All rights reserved
