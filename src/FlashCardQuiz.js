import React, { useState, useEffect } from 'react';

const AlgorithmFlashcards = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: "What data structure would you use to efficiently check if an element exists in a collection with O(1) average time complexity?",
      answer: "hash table",
      alternatives: ["hash set", "hashmap", "dictionary", "hash"],
      source: "Common technical interview question",
      difficulty: "easy"
    },
    {
      id: 2,
      question: "Which algorithm is typically used to find the shortest path in a weighted graph?",
      answer: "dijkstra",
      alternatives: ["dijkstra's algorithm", "dijkstras algorithm", "dijkstra algorithm"],
      source: "LeetCode #743: Network Delay Time",
      difficulty: "medium"
    },
    {
      id: 3,
      question: "What data structure allows for efficient insertion and deletion at both ends but not in the middle?",
      answer: "deque",
      alternatives: ["double-ended queue", "double ended queue"],
      source: "Meta technical interview question",
      difficulty: "easy"
    },
    {
      id: 4,
      question: "Which sorting algorithm has the best average time complexity?",
      answer: "merge sort",
      alternatives: ["mergesort", "quick sort", "quicksort", "heapsort", "heap sort", "timsort"],
      source: "Google technical interview question",
      difficulty: "medium"
    },
    {
      id: 5,
      question: "What data structure is commonly used to implement a breadth-first search?",
      answer: "queue",
      alternatives: [],
      source: "Amazon technical interview question",
      difficulty: "easy"
    },
    {
      id: 6,
      question: "Which algorithm is used to find the minimum spanning tree of a graph?",
      answer: "kruskal",
      alternatives: ["kruskal's algorithm", "kruskals algorithm", "kruskal algorithm", "prim", "prim's algorithm", "prims algorithm", "prim algorithm"],
      source: "LeetCode #1584: Min Cost to Connect All Points",
      difficulty: "medium"
    },
    {
      id: 7,
      question: "P vs NP is one of the seven _____ problems in mathematics.",
      answer: "millennium prize",
      alternatives: ["millennium", "millennium prize problems", "clay millennium prize"],
      source: "Clay Mathematics Institute",
      difficulty: "hard"
    },
    {
      id: 8,
      question: "What data structure would you use to implement an undo functionality in a text editor?",
      answer: "stack",
      alternatives: [],
      source: "Microsoft technical interview question",
      difficulty: "medium"
    },
    {
      id: 9,
      question: "Which algorithm would you use to find all pairs of shortest paths in a graph?",
      answer: "floyd-warshall",
      alternatives: ["floyd warshall", "floyd", "warshall", "floyd-warshall algorithm"],
      source: "LeetCode #399: Evaluate Division",
      difficulty: "hard"
    },
    {
      id: 10,
      question: "What data structure would you use to efficiently find the k-th smallest element in a constantly changing collection?",
      answer: "heap",
      alternatives: ["priority queue", "binary heap", "min heap"],
      source: "Apple technical interview question",
      difficulty: "medium"
    },
    {
      id: 11,
      question: "Which algorithm uses dynamic programming to find the longest common subsequence between two strings?",
      answer: "lcs",
      alternatives: ["longest common subsequence", "dynamic programming"],
      source: "LeetCode #1143: Longest Common Subsequence",
      difficulty: "medium"
    },
    {
      id: 12,
      question: "What data structure would you use to implement a spell checker?",
      answer: "trie",
      alternatives: ["prefix tree", "digital tree"],
      source: "Twitter/X technical interview question",
      difficulty: "medium"
    },
    {
      id: 13,
      question: "Which algorithm would you use to detect cycles in a directed graph?",
      answer: "dfs",
      alternatives: ["depth-first search", "depth first search", "topological sort"],
      source: "LeetCode #207: Course Schedule",
      difficulty: "medium"
    },
    {
      id: 14,
      question: "What data structure maintains elements in sorted order and allows for logarithmic time insertions and deletions?",
      answer: "balanced binary search tree",
      alternatives: ["avl tree", "red black tree", "bst", "binary search tree", "treap", "b-tree"],
      source: "AoPS: Introduction to Data Structures",
      difficulty: "hard"
    },
    {
      id: 15,
      question: "Which algorithm is commonly used for string pattern matching?",
      answer: "kmp",
      alternatives: ["knuth-morris-pratt", "knuth morris pratt", "rabin-karp", "rabin karp", "boyer-moore", "boyer moore"],
      source: "IOI 2016: Aliens",
      difficulty: "hard"
    },
    {
      "id": 16,
      "question": "What data structure would you use to efficiently check if an element exists in a collection with O(1) average time complexity?",
      "answer": "hash table",
      "alternatives": ["hash set", "hashmap", "dictionary", "hash"],
      "source": "Common technical interview question",
      "difficulty": "easy"
    },
    {
      "id": 17,
      "question": "What algorithm is used to find the shortest path in a weighted graph?",
      "answer": "Dijkstra's algorithm",
      "alternatives": ["Breadth-First Search", "Bellman-Ford", "A* Search", "Floyd-Warshall"],
      "source": "Common technical interview question",
      "difficulty": "medium"
    },
    {
      "id": 18,
      "question": "Which data structure is used to implement a depth-first search?",
      "answer": "stack",
      "alternatives": ["queue", "linked list", "binary tree", "hash table"],
      "source": "Common technical interview question",
      "difficulty": "easy"
    },
    {
      "id": 19,
      "question": "What is the time complexity of searching for an element in a balanced binary search tree?",
      "answer": "O(log n)",
      "alternatives": ["O(n)", "O(1)", "O(n log n)", "O(log n)"],
      "source": "Common technical interview question",
      "difficulty": "medium"
    },
    {
      "id": 20,
      "question": "What data structure is used to implement breadth-first search?",
      "answer": "queue",
      "alternatives": ["stack", "linked list", "binary tree", "hash table"],
      "source": "Common technical interview question",
      "difficulty": "easy"
    },
    {
      "id": 21,
      "question": "What is the time complexity of inserting an element in a binary heap?",
      "answer": "O(log n)",
      "alternatives": ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      "source": "Common technical interview question",
      "difficulty": "medium"
    },
    {
      "id": 22,
      "question": "What data structure is used to store hierarchical data?",
      "answer": "tree",
      "alternatives": ["graph", "array", "linked list", "hash table"],
      "source": "Common technical interview question",
      "difficulty": "easy"
    },
    {
      "id": 23,
      "question": "Which sorting algorithm has the best worst-case time complexity?",
      "answer": "Merge sort",
      "alternatives": ["Quick sort", "Bubble sort", "Insertion sort", "Heap sort"],
      "source": "Common technical interview question",
      "difficulty": "medium"
    },
    {
      "id": 24,
      "question": "What is the time complexity of accessing an element in an array?",
      "answer": "O(1)",
      "alternatives": ["O(log n)", "O(n)", "O(1)", "O(n log n)"],
      "source": "Common technical interview question",
      "difficulty": "easy"
    },
    {
      "id": 25,
      "question": "Which algorithm is used to find the minimum spanning tree in a graph?",
      "answer": "Kruskal's algorithm",
      "alternatives": ["Prim's algorithm", "Dijkstra's algorithm", "Bellman-Ford", "Floyd-Warshall"],
      "source": "Common technical interview question",
      "difficulty": "medium"
    },
    {
      "id": 26,
      "question": "What is the time complexity of the quicksort algorithm in the average case?",
      "answer": "O(n log n)",
      "alternatives": ["O(n)", "O(n log n)", "O(log n)", "O(n^2)"],
      "source": "Common technical interview question",
      "difficulty": "medium"
    },
    {
      "id": 27,
      "question": "What is the main characteristic of a hash function used in hash tables?",
      "answer": "It maps data of arbitrary size to a fixed-size value",
      "alternatives": ["It sorts the data", "It checks for duplicates", "It maps data to fixed-size value", "It encrypts data"],
      "source": "Common technical interview question",
      "difficulty": "medium"
    },
    {
      "id": 28,
      "question": "What is the time complexity of deleting an element from a hash table?",
      "answer": "O(1)",
      "alternatives": ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
      "source": "Common technical interview question",
      "difficulty": "medium"
    },
    {
      "id": 29,
      "question": "What is the space complexity of storing an array of size n?",
      "answer": "O(n)",
      "alternatives": ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
      "source": "Common technical interview question",
      "difficulty": "easy"
    },
    {
      "id": 30,
      "question": "Which data structure is ideal for implementing a LRU (Least Recently Used) cache?",
      "answer": "doubly linked list with hash map",
      "alternatives": ["array", "hash table", "stack", "queue"],
      "source": "Common technical interview question",
      "difficulty": "medium"
    },
    {
      "id": 31,
      "question": "What is the primary difference between a stack and a queue?",
      "answer": "A stack is LIFO (Last In, First Out), a queue is FIFO (First In, First Out)",
      "alternatives": ["Stack is FIFO, Queue is LIFO", "Stack is for priority, Queue is for data", "No difference", "Stack is LIFO, Queue is FIFO"],
      "source": "Common technical interview question",
      "difficulty": "easy"
    },
    {
      "id": 32,
      "question": "What is the worst-case time complexity of bubble sort?",
      "answer": "O(n^2)",
      "alternatives": ["O(n log n)", "O(n)", "O(n^2)", "O(n^3)"],
      "source": "Common technical interview question",
      "difficulty": "easy"
    },
    {
      "id": 33,
      "question": "Which data structure can be used to implement a priority queue?",
      "answer": "heap",
      "alternatives": ["binary search tree", "stack", "array", "linked list"],
      "source": "Common technical interview question",
      "difficulty": "medium"
    },
    {
      "id": 34,
      "question": "What is the time complexity of finding the minimum element in a min-heap?",
      "answer": "O(1)",
      "alternatives": ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
      "source": "Common technical interview question",
      "difficulty": "easy"
    },
    {
      "id": 35,
      "question": "In a doubly linked list, what is the time complexity for inserting at the head of the list?",
      "answer": "O(1)",
      "alternatives": ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
      "source": "Common technical interview question",
      "difficulty": "easy"
    },
    {
      "id": 36,
      "question": "Which algorithm is best for sorting a large dataset that is already partially sorted?",
      "answer": "Insertion sort",
      "alternatives": ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"],
      "source": "Common technical interview question",
      "difficulty": "medium"
    },
    {
      "id": 37,
      "question": "What is the time complexity of accessing an element in a hash map?",
      "answer": "O(1)",
      "alternatives": ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
      "source": "Common technical interview question",
      "difficulty": "easy"
    },
    {
      "id": 38,
      "question": "Which algorithm is typically used to solve the 'knapsack problem'?",
      "answer": "Dynamic programming",
      "alternatives": ["Greedy algorithm", "Divide and conquer", "Backtracking", "Dynamic programming"],
      "source": "Common technical interview question",
      "difficulty": "hard"
    },
    {
      "id": 39,
      "question": "What is the time complexity of binary search in a sorted array?",
      "answer": "O(log n)",
      "alternatives": ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
      "source": "Common technical interview question",
      "difficulty": "medium"
    },
    {
      "id": 40,
      "question": "Which data structure is used in implementing recursion?",
      "answer": "stack",
      "alternatives": ["queue", "array", "linked list", "stack"],
      "source": "Common technical interview question",
      "difficulty": "easy"
    },
    {
      "id": 41,
      "question": "What is the time complexity of inserting an element into a sorted array?",
      "answer": "O(n)",
      "alternatives": ["O(log n)", "O(n)", "O(n^2)", "O(1)"],
      "source": "Common technical interview question",
      "difficulty": "medium"
    },
    {
      "id": 42,
      "question": "What algorithm is typically used for finding the longest common subsequence between two strings?",
      "answer": "Dynamic programming",
      "alternatives": ["Greedy algorithm", "Divide and conquer", "Backtracking", "Dynamic programming"],
      "source": "Common technical interview question",
      "difficulty": "hard"
    },
    {
      "id": 43,
      "question": "What is the space complexity of a recursive algorithm?",
      "answer": "O(depth of recursion)",
      "alternatives": ["O(n)", "O(log n)", "O(depth of recursion)", "O(1)"],
      "source": "Common technical interview question",
      "difficulty": "medium"
    },
    {
      "id": 44,
      "question": "Which sorting algorithm has the worst case time complexity of O(n^2)?",
      "answer": "Quick sort",
      "alternatives": ["Merge sort", "Bubble sort", "Quick sort", "Insertion sort"],
      "source": "Common technical interview question",
      "difficulty": "medium"
    },
    {
      "id": 45,
      "question": "What is the time complexity of checking if a key exists in a balanced binary search tree?",
      "answer": "O(log n)",
      "alternatives": ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
      "source": "Common technical interview question",
      "difficulty": "medium"
    }  
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [remainingQuestions, setRemainingQuestions] = useState([...Array(questions.length).keys()]);
  const [reviewMode, setReviewMode] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewAnswers, setReviewAnswers] = useState([]);
  
  // Handle shuffling questions at the start
  useEffect(() => {
    shuffleQuestions();
  }, []);
  
  const shuffleQuestions = () => {
    const shuffled = [...remainingQuestions].sort(() => Math.random() - 0.5);
    setRemainingQuestions(shuffled);
    setCurrentQuestionIndex(shuffled[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentQuestion = questions[currentQuestionIndex];
    const normalizedUserAnswer = userAnswer.trim().toLowerCase();
    const correctAnswers = [currentQuestion.answer, ...currentQuestion.alternatives].map(a => a.toLowerCase().trim());
    
    if (correctAnswers.includes(normalizedUserAnswer)) {
      setFeedback('Correct!');
      setScore(score + 1);
    } else {
      setFeedback(`Incorrect. The answer is: ${currentQuestion.answer}`);
    }
    
    setShowAnswer(true);
    
    // Store answer for review
    setReviewAnswers([...reviewAnswers, {
      questionId: currentQuestion.id,
      question: currentQuestion.question,
      userAnswer: normalizedUserAnswer,
      correctAnswer: currentQuestion.answer,
      isCorrect: correctAnswers.includes(normalizedUserAnswer),
      source: currentQuestion.source,
      difficulty: currentQuestion.difficulty
    }]);
  };

  const nextQuestion = () => {
    setUserAnswer('');
    setFeedback('');
    setShowAnswer(false);
    
    // Remove the current question from remaining
    const updatedRemaining = remainingQuestions.filter((_, idx) => idx !== 0);
    setRemainingQuestions(updatedRemaining);
    
    if (updatedRemaining.length > 0) {
      setCurrentQuestionIndex(updatedRemaining[0]);
    } else {
      setQuizComplete(true);
    }
  };
  
  const restartQuiz = () => {
    setReviewAnswers([]);
    setScore(0);
    setQuizComplete(false);
    setReviewMode(false);
    setUserAnswer('');
    setFeedback('');
    setShowAnswer(false);
    setRemainingQuestions([...Array(questions.length).keys()]);
    shuffleQuestions();
  };
  
  const startReview = () => {
    setReviewMode(true);
    setReviewIndex(0);
  };
  
  const nextReviewItem = () => {
    if (reviewIndex < reviewAnswers.length - 1) {
      setReviewIndex(reviewIndex + 1);
    } else {
      setReviewMode(false);
    }
  };
  
  const prevReviewItem = () => {
    if (reviewIndex > 0) {
      setReviewIndex(reviewIndex - 1);
    }
  };

  // Render different views based on quiz state
  if (reviewMode) {
    const review = reviewAnswers[reviewIndex];
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Review Mode</h1>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <div className="flex justify-between mb-2">
            <span className={`px-2 py-1 text-xs rounded-full ${review.difficulty === 'easy' ? 'bg-green-200 text-green-800' : review.difficulty === 'medium' ? 'bg-yellow-200 text-yellow-800' : 'bg-red-200 text-red-800'}`}>
              {review.difficulty}
            </span>
            <span className="text-sm text-gray-500">Source: {review.source}</span>
          </div>
          <p className="text-lg font-medium mb-4">{review.question}</p>
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-2">
              <span className="font-semibold">Your answer:</span>
              <span className={review.isCorrect ? "text-green-600" : "text-red-600"}>{review.userAnswer || "(no answer)"}</span>
            </div>
            <div className="flex space-x-2">
              <span className="font-semibold">Correct answer:</span>
              <span className="text-green-600">{review.correctAnswer}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button 
            onClick={prevReviewItem} 
            disabled={reviewIndex === 0}
            className={`px-4 py-2 rounded-md ${reviewIndex === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            Previous
          </button>
          <span className="py-2">{reviewIndex + 1} of {reviewAnswers.length}</span>
          {reviewIndex < reviewAnswers.length - 1 ? (
            <button 
              onClick={nextReviewItem}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Next
            </button>
          ) : (
            <button 
              onClick={() => setReviewMode(false)}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Finish Review
            </button>
          )}
        </div>
      </div>
    );
  }

  if (quizComplete) {
    const accuracy = (score / questions.length * 100).toFixed(1);
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Quiz Complete!</h1>
        <div className="text-center mb-6">
          <p className="text-xl mb-2">Your score: {score} out of {questions.length}</p>
          <p className="text-lg">Accuracy: {accuracy}%</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-3xl font-bold text-green-600 mb-2">{reviewAnswers.filter(a => a.isCorrect).length}</p>
            <p className="text-sm text-gray-600">Correct</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <p className="text-3xl font-bold text-red-600 mb-2">{reviewAnswers.filter(a => !a.isCorrect).length}</p>
            <p className="text-sm text-gray-600">Incorrect</p>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4">
          <button 
            onClick={startReview}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Review Answers
          </button>
          <button 
            onClick={restartQuiz}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between mb-4">
        <span className="text-sm text-gray-500">Question {questions.length - remainingQuestions.length + 1} of {questions.length}</span>
        <span className="text-sm text-gray-500">Score: {score}</span>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className={`px-2 py-1 text-xs rounded-full ${currentQuestion.difficulty === 'easy' ? 'bg-green-200 text-green-800' : currentQuestion.difficulty === 'medium' ? 'bg-yellow-200 text-yellow-800' : 'bg-red-200 text-red-800'}`}>
            {currentQuestion.difficulty}
          </span>
          <span className="text-sm text-gray-500">Source: {currentQuestion.source}</span>
        </div>
        <p className="text-lg font-medium">{currentQuestion.question}</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Type your answer here..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={showAnswer}
          />
        </div>
        
        {!showAnswer ? (
          <button 
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        ) : (
          <div className="space-y-4">
            <div className={`p-4 rounded-lg ${feedback.startsWith('Correct') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {feedback}
            </div>
            <button 
              type="button"
              onClick={nextQuestion}
              className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              Next Question
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default AlgorithmFlashcards;