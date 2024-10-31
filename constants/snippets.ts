const snippets = [
  {
    title: "Quick Sort Algorithm",
    language: "Python",
    code: "def quicksort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[len(arr) // 2]\n    left = [x for x in arr if x < pivot]\n    middle = [x for x in arr if x == pivot]\n    right = [x for x in arr if x > pivot]\n    return quicksort(left) + middle + quicksort(right)",
  },
  {
    title: "React useEffect Hook",
    language: "JavaScript",
    code: "useEffect(() => {\n  // Effect code here\n  return () => {\n    // Cleanup code here\n  };\n}, [dependency]);",
  },
  {
    title: "CSS Flexbox Layout",
    language: "CSS",
    code: ".container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}",
  },
  {
    title: "Python List Comprehension",
    language: "Python",
    code: "squares = [x**2 for x in range(10)]",
  },
  {
    title: "JavaScript Promise.all()",
    language: "JavaScript",
    code: "Promise.all([\n  fetch(url1),\n  fetch(url2)\n])\n.then(([res1, res2]) => {\n  // Handle responses\n})\n.catch(error => {\n  // Handle error\n});",
  },
  {
    title: "Git Merge vs Rebase",
    language: "Shell",
    code: "# Merge\ngit checkout main\ngit merge feature\n\n# Rebase\ngit checkout feature\ngit rebase main",
  },
];

export default snippets;
