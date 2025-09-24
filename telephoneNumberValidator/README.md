# Build a Telephone Number Validator

In the US, phone numbers can be formatted in many ways. Here are some examples of **valid** formats for US phone numbers:

```
1 555-555-5555
1 (555) 555-5555
1(555)555-5555
1 555 555 5555
5555555555
555-555-5555
(555)555-5555
```

> **Note:** The area code is required. If the country code is provided, it must be **1**.

---

## Objective
Build an app that is functionally similar to [Telephone Number Validator](https://telephone-number-validator.freecodecamp.rocks).

---

## User Stories

1. You should have an input element with an **id** of `user-input`.
2. You should have a button element with an **id** of `check-btn`.
3. You should have a button element with an **id** of `clear-btn`.
4. You should have a `div`, `span`, or `p` element with an **id** of `results-div`.
5. When you click on the `#check-btn` element without entering a value into the `#user-input` element, an alert should appear with the text:  
   **"Please provide a phone number"**
6. When you click on the `#clear-btn` element, the content within the `#results-div` element should be removed.
7. When the `#user-input` element contains **1 555-555-5555** and the `#check-btn` element is clicked, the `#results-div` element should contain:  
   **"Valid US number: 1 555-555-5555"**
8. When the `#user-input` element contains **1 (555) 555-5555** and the `#check-btn` element is clicked, the `#results-div` element should contain:  
   **"Valid US number: 1 (555) 555-5555"**
9. When the `#user-input` element contains **5555555555** and the `#check-btn` element is clicked, the `#results-div` element should contain:  
   **"Valid US number: 5555555555"**
10. When the `#user-input` element contains **555-555-5555** and the `#check-btn` element is clicked, the `#results-div` element should contain:  
    **"Valid US number: 555-555-5555"**
11. When the `#user-input` element contains **(555)555-5555** and the `#check-btn` element is clicked, the `#results-div` element should contain:  
    **"Valid US number: (555)555-5555"**
12. When the `#user-input` element contains **1(555)555-5555** and the `#check-btn` element is clicked, the `#results-div` element should contain:  
    **"Valid US number: 1(555)555-5555"**
13. When the `#user-input` element contains **555-5555**, the result should be:  
    **"Invalid US number: 555-5555"**
14. When the `#user-input` element contains **5555555**, the result should be:  
    **"Invalid US number: 5555555"**
15. When the `#user-input` element contains **1 555)555-5555**, the result should be:  
    **"Invalid US number: 1 555)555-5555"**
16. When the `#user-input` element contains **1 555 555 5555**, the result should be:  
    **"Valid US number: 1 555 555 5555"**
17. When the `#user-input` element contains **1 456 789 4444**, the result should be:  
    **"Valid US number: 1 456 789 4444"**
18. When the `#user-input` element contains **123**`**&!!asdf#`, the result should be:  
    **"Invalid US number: 123**&!!asdf#"**
19. When the `#user-input` element contains **55555555**, the result should be:  
    **"Invalid US number: 55555555"**
20. When the `#user-input` element contains **(6054756961)**, the result should be:  
    **"Invalid US number: (6054756961)"**
21. When the `#user-input` element contains **2 (757) 622-7382**, the result should be:  
    **"Invalid US number: 2 (757) 622-7382"**
22. When the `#user-input` element contains **0 (757) 622-7382**, the result should be:  
    **"Invalid US number: 0 (757) 622-7382"**
23. When the `#user-input` element contains **-1 (757) 622-7382**, the result should be:  
    **"Invalid US number: -1 (757) 622-7382"**
24. When the `#user-input` element contains **2 757 622-7382**, the result should be:  
    **"Invalid US number: 2 757 622-7382"**
25. When the `#user-input` element contains **10 (757) 622-7382**, the result should be:  
    **"Invalid US number: 10 (757) 622-7382"**
26. When the `#user-input` element contains **27576227382**, the result should be:  
    **"Invalid US number: 27576227382"**
27. When the `#user-input` element contains **(275)76227382**, the result should be:  
    **"Invalid US number: (275)76227382"**
28. When the `#user-input` element contains **2(757)6227382**, the result should be:  
    **"Invalid US number: 2(757)6227382"**
29. When the `#user-input` element contains **2(757)622-7382**, the result should be:  
    **"Invalid US number: 2(757)622-7382"**
30. When the `#user-input` element contains **555)-555-5555**, the result should be:  
    **"Invalid US number: 555)-555-5555"**
31. When the `#user-input` element contains **(555-555-5555**, the result should be:  
    **"Invalid US number: (555-555-5555"**
32. When the `#user-input` element contains **(555)5(55?)-5555**, the result should be:  
    **"Invalid US number: (555)5(55?)-5555"**
33. When the `#user-input` element contains **55 55-55-555-5**, the result should be:  
    **"Invalid US number: 55 55-55-555-5"**
34. When the `#user-input` element contains **11 555-555-5555**, the result should be:  
    **"Invalid US number: 11 555-555-5555"**
35. When the `#user-input` element contains any **valid US number**, the result should be:  
    **"Valid US number: [number]"**
36. When the `#user-input` element contains any **invalid US number**, the result should be:  
    **"Invalid US number: [number]"**

---
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/build-a-telephone-number-validator-project/build-a-telephone-number-validator

## How to Run
1. Clone this repository.
2. Open `index.html` in your browser.
3. Enter a phone number in the input field.
    - Click **Check** to validate it.
    - Click **Clear** to reset the results.
