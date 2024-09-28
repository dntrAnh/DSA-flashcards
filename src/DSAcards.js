const questions = [
    "What is the time complexity of searching for an element in a balanced binary search tree (BST)?",
    "What is the difference between a stack and a queue?",
    "How does a hash table handle collisions?",
    "What is the worst-case time complexity of quicksort?",
    "What is the worst-case time complexity of mergesort?",
    "What is a heap data structure, and what are its types?", 
    "What is a graph traversal technique that uses a queue?", 
    "What is the difference between a depth-first search (DFS) and a breadth-first search (BFS)?",
    "What is the purpose of Dijkstra's algorithm?",
    "What data structure is used in the implementation of a priority queue?"
];

const answers = [
    "O(log n)",
    "A stack is a LIFO (last in, first out) data structure, while a queue is a FIFO (first in, first out) data structure.",
    "A hash table uses a linked list to handle collisions.",
    "O(n^2)",
    "O(n log n)",
    "A heap is a binary tree data structure that satisfies the heap property. There are two types of heaps: max heap and min heap.",
    "Breadth-first search (BFS)",
    "DFS explores as far as possible along each branch before backtracking, while BFS explores the neighbor nodes first.",
    "Dijkstra's algorithm is used to find the shortest path between nodes in a graph.",
    "A priority queue is typically implemented using a binary heap."
];

export { questions, answers };