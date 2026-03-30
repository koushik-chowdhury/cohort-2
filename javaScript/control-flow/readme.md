# JavaScript Day 3 – Conditional Statements

## Overview

This repository contains my Day 3 practice of JavaScript fundamentals, focused on conditional statements and decision-making logic.

The goal is to learn how to control program flow using if, else, and else if, and to write clean and readable logic using early return patterns.

---

## Topics Covered

- if statements
- if...else
- else if chains
- condition evaluation order
- logical conditions
- early return pattern
- avoiding nested conditions
- handling edge cases

---

## Project Structure

control-flow/
│
├── exercise.js
└── readme.md

---

##  Exercises

### 1. ageCategory(age)

Return:

- "Child" (0–12)
- "Teen" (13–17)
- "Adult" (18–59)
- "Senior" (60+)

Rules:

- Negative age → return "Invalid"

---

### 2. getTicketPrice(age, isWeekend)

Pricing:

- Child → $8
- Teen → $12
- Adult → $15
- Senior → $10

Rules:

- Weekend → +$3
- Invalid age → return -1

---

### 3. calculateGrade(score)

Return:

- A (90–100)
- B (80–89)
- C (70–79)
- D (60–69)
- F (<60)

Rules:

- Invalid score → "Invalid"

---

### 4. loginCheck(username, password)

Rules:

- If username missing → "Username required"
- If password missing → "Password required"
- If both correct → "Login successful"
- Otherwise → "Invalid credentials"

---

### 5. weatherAdvice(temp, isRaining)

Rules:

- temp >= 35 → "Too hot"
- temp >= 25 and not raining → "Great weather"
- temp >= 25 and raining → "Warm but rainy"
- temp >= 15 and not raining → "Nice weather"
- temp >= 15 and raining → "Cool and rainy"
- temp < 15 → "Cold"

---

### 6. checkPassword(password)

Rules:

- length < 6 → "Weak"
- contains number and letter → "Strong"
- otherwise → "Medium"

---

### 7. calculateDiscount(amount)

Rules:

- amount >= 1000 → 20% discount
- amount >= 500 → 10% discount
- otherwise → no discount

Return final amount

---

### 8. numberChecker(num)

Return:

- "Even" or "Odd"
- "Positive", "Negative", or "Zero"

---

## Interview Questions

1. Difference between if and else if?
2. Why order matters in conditions?
3. What is early return?
4. Why avoid nested if statements?
5. How do you handle invalid input?
6. What is short-circuit logic inside conditions?
7. What is a clean way to structure multiple conditions?

---

## Learning Goals

- Build strong decision-making logic
- Write clean and readable conditions
- Avoid common logical mistakes
- Handle edge cases properly

---

## Mistakes I Made

- Wrong order of conditions
- Forgot edge cases
- Used too much nesting
- Didn’t validate input first

---