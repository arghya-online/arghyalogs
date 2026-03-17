export const CODE_SECTIONS = [
  {
    id: "section-1",
    title: "Fibonacci using recursion with prev1 prev2",
    algorithmTitle: "Algorithm – Fibonacci using recursion with prev1 prev2",
    algorithmSteps: [
      "Start",
      "Take prev1 = 0, prev2 = 1",
      "Print prev1",
      "next = prev1 + prev2",
      "Call function again",
      "Stop when count > 20",
    ],
    snippets: [
      {
        title: "Code",
        language: "python",
        code: `# fibonacci using recursion
def fibo(prev1, prev2, count):
    if count > 20:
        return
    print(prev1, end=" ")
    next = prev1 + prev2
    fibo(prev2, next, count + 1)

fibo(0, 1, 1)`,
        explanation: [
          "A function named fibo is created.",
          "It takes three values: prev1, prev2, and count.",
          "If count becomes greater than 20, function stops.",
          "First number is printed.",
          "Next number is calculated using addition.",
          "Function calls itself again (recursion).",
          "Each time count increases by 1.",
          "This continues until 20 numbers are printed.",
        ],
        output: `0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181`,
      },
    ],
  },
  {
    id: "section-2",
    title: "Selection Sort and Insertion Sort",
    algorithmTitle: "Selection Sort Algorithm / Insertion Sort Algorithm",
    algorithmSteps: [
      "Selection Sort: Take array, find smallest element, swap, repeat",
      "Insertion Sort: Take array, compare with previous, shift, insert",
    ],
    snippets: [
      {
        title: "Code – Selection Sort",
        language: "python",
        code: `arr = [5, 2, 8, 1, 3]
n = len(arr)
for i in range(n):
    min = i
    for j in range(i + 1, n):
        if arr[j] < arr[min]:
            min = j
    temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp

print(arr)`,
        explanation: [
          "A list is taken.",
          "Outer loop runs for each position.",
          "min stores index of smallest value.",
          "Inner loop checks remaining elements.",
          "If smaller element found, index changes.",
          "Values are swapped.",
          "After loop, array becomes sorted.",
        ],
        output: `[1, 2, 3, 5, 8]`,
      },
      {
        title: "Code – Insertion Sort",
        language: "python",
        code: `arr = [5, 2, 8, 1, 3]
for i in range(1, len(arr)):
    key = arr[i]
    j = i - 1
    while j >= 0 and arr[j] > key:
        arr[j + 1] = arr[j]
        j = j - 1
    arr[j + 1] = key

print(arr)`,
        explanation: [
          "Start from second element.",
          "Store current value in key.",
          "Compare with previous elements.",
          "Bigger elements move right.",
          "Key inserted at correct place.",
          "Repeats until sorted.",
        ],
        output: `[1, 2, 3, 5, 8]`,
      },
    ],
  },
  {
    id: "section-3",
    title: "Quick Sort and Merge Sort",
    algorithmTitle: "Quick Sort Algorithm",
    algorithmSteps: ["Take pivot", "Left smaller", "Right bigger", "Repeat"],
    snippets: [
      {
        title: "Code – Quick Sort",
        language: "python",
        code: `def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[0]
    left = []
    right = []
    for x in arr[1:]:
        if x < pivot:
            left.append(x)
        else:
            right.append(x)
    return quicksort(left) + [pivot] + quicksort(right)

arr = [5, 2, 8, 1, 3]
print(quicksort(arr))`,
        explanation: [
          "Function quicksort is created.",
          "First element is pivot.",
          "Smaller values go to left list.",
          "Bigger values go to right list.",
          "Function calls itself again.",
          "Lists are joined.",
          "Sorted list returned.",
        ],
        output: `[1, 2, 3, 5, 8]`,
      },
      {
        title: "Code – Merge Sort",
        language: "python",
        code: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    result = []
    i = 0
    j = 0
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    while i < len(left):
        result.append(left[i])
        i += 1
    while j < len(right):
        result.append(right[j])
        j += 1
    return result

arr = [5, 2, 8, 1, 3]
print(merge_sort(arr))`,
        explanation: [
          "Function divides list into two parts.",
          "Each part sorted again.",
          "Two sorted lists merged.",
          "Smaller element added first.",
          "Final list becomes sorted.",
        ],
        output: `[1, 2, 3, 5, 8]`,
      },
    ],
  },
  {
    id: "section-4",
    title: "Search in Stack, Queue, Linked List",
    snippets: [
      {
        title: "Stack Search",
        language: "python",
        code: `stack = [5, 2, 8, 1, 3]
target = 8
found = False
while stack:
    x = stack.pop()
    if x == target:
        found = True
        break

print(found)`,
        explanation: [
          "List used as stack.",
          "pop removes last element.",
          "Each element checked.",
          "If found, stop.",
          "Print True or False.",
        ],
        output: `True`,
      },
      {
        title: "Queue Search",
        language: "python",
        code: `queue = [5, 2, 8, 1, 3]
target = 1
found = False
while queue:
    x = queue.pop(0)
    if x == target:
        found = True
        break

print(found)`,
        explanation: [
          "List used as queue.",
          "pop(0) removes first element.",
          "Each element checked.",
          "If found, stop.",
          "Print result.",
        ],
        output: `True`,
      },
      {
        title: "Linked List Search",
        language: "python",
        code: `class Node:
                def __init__(self, data):
                                self.data = data
                                self.next = None

head = Node(5)
head.next = Node(2)
head.next.next = Node(8)
head.next.next.next = Node(1)

target = 8

temp = head
found = False
while temp != None:
while temp != None:
        if temp.data == target:
                found = True
                break
        temp = temp.next

print(found)`,
        explanation: [
          "Node class created.",
          "Linked list created manually.",
          "temp moves node to node.",
          "Each value checked.",
          "If found, True printed.",
        ],
        output: `True`,
      },
    ],
  },
  {
    id: "section-5",
    title: "Binary Tree Traversal",
    snippets: [
      {
        title: "Binary Tree Traversal (your code)",
        language: "python",
        code: `class TreeNode:
                def __init__(self, data):
                                self.data = data
                                self.left = None
                                self.right = None

root = TreeNode('R')

root.left = TreeNode('A')
root.right = TreeNode('B')

root.left.left = TreeNode('C')
root.left.right = TreeNode('D')

root.right.left = TreeNode('E')
root.right.right = TreeNode('F')

root.right.left.left = TreeNode('G')

targetNode = root.right.left.left
print(targetNode.data)

print("\nPre Order")

def preOrder(node):
    if node == None:
        return
    print(node.data, end=" ")
    preOrder(node.left)
    preOrder(node.right)

preOrder(root)

print("\nIn Order")

def inOrder(node):
    if node == None:
        return
    inOrder(node.left)
    print(node.data, end=" ")
    inOrder(node.right)

inOrder(root)

print("\nPost Order")

def postOrder(node):
    if node == None:
        return
    postOrder(node.left)
    postOrder(node.right)
    print(node.data, end=" ")

postOrder(root)`,
        explanation: [
          "TreeNode class created.",
          "Tree made using left and right.",
          "preOrder means root left right.",
          "inOrder means left root right.",
          "postOrder means left right root.",
          "Functions call themselves.",
          "All nodes printed.",
        ],
        output: `G

Pre Order
R A C D B E G F

In Order
C A D R G E B F

Post Order
C D A G E F B R`,
      },
    ],
  },
];
