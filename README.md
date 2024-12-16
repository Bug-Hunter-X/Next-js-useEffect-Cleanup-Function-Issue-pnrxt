# Next.js useEffect Cleanup Function Issue

This repository demonstrates a common issue encountered when using the `useEffect` hook in Next.js applications.  Specifically, the cleanup function within `useEffect` might not be consistently called when navigating away from a page.

## Bug Description

The `MyComponent` component includes a `useEffect` hook with a cleanup function.  This function should log a message to the console when the component is unmounted. However, under certain navigation scenarios (e.g., quickly switching between routes), this cleanup message may not always be logged, indicating that the cleanup function isn't always being executed.

## Solution

The solution involves ensuring proper handling of component unmounting and potential race conditions. A possible solution involves utilizing a flag to track whether the component is still mounted and conditionally performing the cleanup.