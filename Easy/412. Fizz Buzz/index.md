Given an integer `n`, return _a string array_ `answer` _(**1-indexed**) where_:

- `answer[i] == "FizzBuzz"` if `i` is divisible by `3` and `5`.
- `answer[i] == "Fizz"` if `i` is divisible by `3`.
- `answer[i] == "Buzz"` if `i` is divisible by `5`.
- `answer[i] == i` (as a string) if none of the above conditions are true.

**Example 1:**

```
<strong>Input:</strong> n = 3
<strong>Output:</strong> ["1","2","Fizz"]
```

**Example 2:**

```
<strong>Input:</strong> n = 5
<strong>Output:</strong> ["1","2","Fizz","4","Buzz"]
```

**Example 3:**

```
<strong>Input:</strong> n = 15
<strong>Output:</strong> ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
```

**Constraints:**

- `1 <= n <= 10<sup>4</sup>`
