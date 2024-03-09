Given an array of strings `strs`, group **the anagrams** together. You can return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

```
<strong>Input:</strong> strs = ["eat","tea","tan","ate","nat","bat"]
<strong>Output:</strong> [["bat"],["nat","tan"],["ate","eat","tea"]]
```

**Example 2:**

```
<strong>Input:</strong> strs = [""]
<strong>Output:</strong> [[""]]
```

**Example 3:**

```
<strong>Input:</strong> strs = ["a"]
<strong>Output:</strong> [["a"]]
```

**Constraints:**

- `1 <= strs.length <= 10<sup>4</sup>`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters.
