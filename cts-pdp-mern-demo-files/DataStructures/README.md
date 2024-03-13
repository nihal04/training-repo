An algorithm is a set of instructions to solve a particular problem
Characteristics of an algorithm
- Well defined inputs & outputs
- Each step should be clear and should not be ambiguous
- Lanaguage Independent

The absolute running time of an algorithm cannot be predicted because it depends on various factors
- Programming language to be used
- The machine on which the program is running
- other programs which are consuming the resources on that machine
- Operating System

Whenever we are evaluating the performance of an algorithm in terms of input size it has 2 evaluation types
- Time Complexity - Amount of time taken by an algorithm to run
- Space Complexity - Amount of memory taken by an algorithm to run

How do we represent complexity?
Asymptotic notations
There are 3 main Asymptotic notations are there
- Big-O Notation (O-Notation) - Worst case Complexity
- Omega Notation - Best case complexity
- Theta Notation - Average case complexity

What is Big-O notation?
Big-O notation describes the complexity of an algorithm using algebric expression
It has 2 important characteristics
- It is expressed in terms of the input
- It focuses on the bigger picture without getting caught up in the smaller details

Space Complexity
If the algorithm does not need extra memory or the meory does not depend on the input size then the space complexity is O(1)-Constant
O(n)-Linear where the space complexity grows as the input grows
O(log(n)) - Logarithmic where the space complexity grows but not at the same rate as the input size.

Big O Notations in Objects
The operations like insert, remove or accessing the property in object have O(1)-Constant time complexity

The operations like search for a value or key, the complexity is linear.

Big O Notation in Arrays
Insert/Remove an element at end - O(1) constant
Insert/Remove an element from begining - O(n) linear
Access - O(1) constant
searching - O(n) linear

Push/pop - O(1)
Shift/unshift/contact/slice/splice - O(n)
forEach/map/filter/reduce - O(n)

