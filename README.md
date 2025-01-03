# React useEffect: Incorrect Previous State Check

This repository demonstrates a common error in React's `useEffect` hook where the previous state value is incorrectly checked, leading to unexpected behavior. The issue arises from attempting to compare the current state value (`count`) within the `useEffect` function to determine if it's changed from a previous value.

## Problem

The provided `MyComponent` uses `useEffect` to log a message when `count` is greater than 0.  The intention is to log only after the count increases but due to how state is updated asynchronously, this check only works after the count has changed from 0 to 1.  The first increment won't trigger the log statement.

## Solution

The solution addresses the issue by leveraging the optional second argument in the `useEffect` hook to access the previous state using the `useRef` hook. This allows for proper comparison of the current and previous state values, ensuring the intended logic is executed correctly on every state update.