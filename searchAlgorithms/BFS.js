/*
We need to run a normal BFS, but using a step based system.
This means that the BFS will have to send back either the
state of the grid it's searching in, or the new cell it has moved
to and its search status after each step, and then wait for
a command to perform the next step.
The latter is more efficient, but the former is a little more versatile.
*/

function createBFS(grid, start, end) {
  
}