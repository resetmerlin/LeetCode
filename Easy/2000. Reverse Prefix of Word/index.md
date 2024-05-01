Given a **0-indexed** string `word` and a character `ch`, **reverse** the segment of `word` that starts at index `0` and ends at the index of the **first occurrence** of `ch` (**inclusive**). If the character `ch` does not exist in `word`, do nothing.

- For example, if `word = "abcdefd"` and `ch = "d"`, then you should **reverse** the segment that starts at `0` and ends at `3` (**inclusive**). The resulting string will be `"<u>dcba</u>efd"`.

Return _the resulting string_.

**Example 1:**

```
<strong>Input:</strong> word = "<u>abcd</u>efd", ch = "d"
<strong>Output:</strong> "<u>dcba</u>efd"
<strong>Explanation:</strong>&nbsp;The first occurrence of "d" is at index 3.
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
```

**Example 2:**

```
<strong>Input:</strong> word = "<u>xyxz</u>xe", ch = "z"
<strong>Output:</strong> "<u>zxyx</u>xe"
<strong>Explanation:</strong>&nbsp;The first and only occurrence of "z" is at index 3.
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".
```

**Example 3:**

```
<strong>Input:</strong> word = "abcd", ch = "z"
<strong>Output:</strong> "abcd"
<strong>Explanation:</strong>&nbsp;"z" does not exist in word.
You should not do any reverse operation, the resulting string is "abcd".
```

**Constraints:**

- `1 <= word.length <= 250`
- `word` consists of lowercase English letters.
- `ch` is a lowercase English letter.

---

Seen this question in a real interview before?

1/5

---

---

---

---

---
