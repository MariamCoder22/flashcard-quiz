# Data Structures and Algorithms Interview Questions

This repository contains a curated list of **30 essential data structures and algorithms questions** commonly asked in technical interviews. Each question is accompanied by an answer, multiple choice alternatives, difficulty level, and source reference.

Great for:
- Interview preparation  
- Building quiz apps or coding challenges  
- Studying core CS concepts  

## 📂 Contents

- `questions`: An array of JSON objects representing interview questions
- `fields`:
  - `id`: Unique identifier
  - `question`: The question text
  - `answer`: Correct answer
  - `alternatives`: Multiple choice options
  - `source`: Where the question is commonly used or inspired from
  - `difficulty`: Difficulty level (`easy`, `medium`, `hard`)

## ✅ Sample Data

```json
[
  {
    "id": 1,
    "question": "What data structure would you use to efficiently check if an element exists in a collection with O(1) average time complexity?",
    "answer": "hash table",
    "alternatives": ["hash set", "hashmap", "dictionary", "hash"],
    "source": "Common technical interview question",
    "difficulty": "easy"
  },
  {
    "id": 2,
    "question": "What algorithm is used to find the shortest path in a weighted graph?",
    "answer": "Dijkstra's algorithm",
    "alternatives": ["Breadth-First Search", "Bellman-Ford", "A* Search", "Floyd-Warshall"],
    "source": "Common technical interview question",
    "difficulty": "medium"
  },
  {
    "id": 3,
    "question": "Which data structure is used to implement a depth-first search?",
    "answer": "stack",
    "alternatives": ["queue", "linked list", "binary tree", "hash table"],
    "source": "Common technical interview question",
    "difficulty": "easy"
  },
  {
    "id": 4,
    "question": "What is the time complexity of searching for an element in a balanced binary search tree?",
    "answer": "O(log n)",
    "alternatives": ["O(n)", "O(1)", "O(n log n)", "O(log n)"],
    "source": "Common technical interview question",
    "difficulty": "medium"
  },
  {
    "id": 5,
    "question": "What data structure is used to implement breadth-first search?",
    "answer": "queue",
    "alternatives": ["stack", "linked list", "binary tree", "hash table"],
    "source": "Common technical interview question",
    "difficulty": "easy"
  },
  {
    "id": 6,
    "question": "What is the time complexity of inserting an element in a binary heap?",
    "answer": "O(log n)",
    "alternatives": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    "source": "Common technical interview question",
    "difficulty": "medium"
  },
  {
    "id": 7,
    "question": "What data structure is used to store hierarchical data?",
    "answer": "tree",
    "alternatives": ["graph", "array", "linked list", "hash table"],
    "source": "Common technical interview question",
    "difficulty": "easy"
  },
  {
    "id": 8,
    "question": "Which sorting algorithm has the best worst-case time complexity?",
    "answer": "Merge sort",
    "alternatives": ["Quick sort", "Bubble sort", "Insertion sort", "Heap sort"],
    "source": "Common technical interview question",
    "difficulty": "medium"
  },
  {
    "id": 9,
    "question": "What is the time complexity of accessing an element in an array?",
    "answer": "O(1)",
    "alternatives": ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
    "source": "Common technical interview question",
    "difficulty": "easy"
  },
  {
    "id": 10,
    "question": "Which algorithm is used to find the minimum spanning tree in a graph?",
    "answer": "Kruskal's algorithm",
    "alternatives": ["Prim's algorithm", "Dijkstra's algorithm", "Bellman-Ford", "Floyd-Warshall"],
    "source": "Common technical interview question",
    "difficulty": "medium"
  },
  {
    "id": 11,
    "question": "What is the time complexity of the quicksort algorithm in the average case?",
    "answer": "O(n log n)",
    "alternatives": ["O(n)", "O(n log n)", "O(log n)", "O(n^2)"],
    "source": "Common technical interview question",
    "difficulty": "medium"
  },
  {
    "id": 12,
    "question": "What is the main characteristic of a hash function used in hash tables?",
    "answer": "It maps data of arbitrary size to a fixed-size value",
    "alternatives": ["It sorts the data", "It checks for duplicates", "It maps data to fixed-size value", "It encrypts data"],
    "source": "Common technical interview question",
    "difficulty": "medium"
  },
  {
    "id": 13,
    "question": "What is the time complexity of deleting an element from a hash table?",
    "answer": "O(1)",
    "alternatives": ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
    "source": "Common technical interview question",
    "difficulty": "medium"
  },
  {
    "id": 14,
    "question": "What is the space complexity of storing an array of size n?",
    "answer": "O(n)",
    "alternatives": ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
    "source": "Common technical interview question",
    "difficulty": "easy"
  },
  {
    "id": 15,
    "question": "Which data structure is ideal for implementing a LRU (Least Recently Used) cache?",
    "answer": "doubly linked list with hash map",
    "alternatives": ["array", "hash table", "stack", "queue"],
    "source": "Common technical interview question",
    "difficulty": "medium"
  },
  {
    "id": 16,
    "question": "What is the primary difference between a stack and a queue?",
    "answer": "A stack is LIFO (Last In, First Out), a queue is FIFO (First In, First Out)",
    "alternatives": ["Stack is FIFO, Queue is LIFO", "Stack is for priority, Queue is for data", "No difference", "Stack is LIFO, Queue is FIFO"],
    "source": "Common technical interview question",
    "difficulty": "easy"
  },
  {
    "id": 17,
    "question": "What is the worst-case time complexity of bubble sort?",
    "answer": "O(n^2)",
    "alternatives": ["O(n log n)", "O(n)", "O(n^2)", "O(n^3)"],
    "source": "Common technical interview question",
    "difficulty": "easy"
  },
  {
    "id": 18,
    "question": "Which data structure can be used to implement a priority queue?",
    "answer": "heap",
    "alternatives": ["binary search tree", "stack", "array", "linked list"],
    "source": "Common technical interview question",
    "difficulty": "medium"
  },
  {
    "id": 19,
    "question": "What is the time complexity of finding the minimum element in a min-heap?",
    "answer": "O(1)",
    "alternatives": ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
    "source": "Common technical interview question",
    "difficulty": "easy"
  },
  {
    "id": 20,
    "question": "In a doubly linked list, what is the time complexity for inserting at the head of the list?",
    "answer": "O(1)",
    "alternatives": ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
    "source": "Common technical interview question",
    "difficulty": "easy"
  },
  {
    "id": 21,
    "question": "Which algorithm is best for sorting a large dataset that is already partially sorted?",
    "answer": "Insertion sort",
    "alternatives": ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
    "source": "Common technical interview question",
    "difficulty": "medium"
  },
  {
    "id": 22,
    "question": "What is the time complexity of accessing an element in a hash map?",
    "answer": "O(1)",
    "alternatives": ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
    "source": "Common technical interview question",
    "difficulty": "easy"
  },
  {
    "id": 23,
    "question": "Which algorithm is typically used to solve the 'knapsack problem'?",
    "answer": "Dynamic programming",
    "alternatives": ["Greedy algorithm", "Divide and conquer", "Backtracking", "Dynamic programming"],
    "source": "Common technical interview question",
    "difficulty": "hard"
  },
  {
    "id": 24,
    "question": "What is the time complexity of binary search in a sorted array?",
    "answer": "O(log n)",
    "alternatives": ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
    "source": "Common technical interview question",
    "difficulty": "medium"
  },
  {
    "id": 25,
    "question": "Which data structure is used in implementing recursion?",
    "answer": "stack",
    "alternatives": ["queue", "array", "linked list", "stack"],
    "source": "Common technical interview question",
    "difficulty": "easy"
  },
  {
    "id": 26,
    "question": "What is the time complexity of inserting an element into a sorted array?",
    "answer": "O(n)",
    "alternatives": ["O(log n)", "O(n)", "O(n^2)", "O(1)"],
    "source": "Common technical interview question",
    "difficulty": "medium"
  },
  {
    "id": 27,
    "question": "What algorithm is typically used for finding the longest common subsequence between two strings?",
    "answer": "Dynamic programming",
    "alternatives": ["Greedy algorithm", "Divide and conquer", "Backtracking", "Dynamic programming"],
    "source": "Common technical interview question",
    "difficulty": "hard"
  },
  {
    "id": 28,
    "question": "What is the space complexity of a recursive algorithm?",
    "answer": "O(depth of recursion)",
    "alternatives": ["O(n)", "O(log n)", "O(depth of recursion)", "O(1)"],
    "source": "Common technical interview question",
    "difficulty": "medium"
  },
  {
    "id": 29,
    "question": "Which sorting algorithm has the worst case time complexity of O(n^2)?",
    "answer": "Quick sort",
    "alternatives": ["Merge sort", "Bubble sort", "Quick sort", "Insertion sort"],
    "source": "Common technical interview question",
    "difficulty": "medium"
  },
  {
    "id": 30,
    "question": "What is the time complexity of checking if a key exists in a balanced binary search tree?",
    "answer": "O(log n)",
    "alternatives": ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
    "source": "Common technical interview question",
    "difficulty": "medium"
  }
]
