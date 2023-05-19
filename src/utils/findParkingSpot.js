//return row-col nearest to 0-0
export const findParkingSpot = (slots) => {
  var ROW = slots.length;
  var COL = slots[0].length;
  var vis = Array.from(Array(ROW), () => Array(COL).fill(false));
  console.log("slotaa", slots);
  console.log(slots[0][0].booked);
  if (!slots[0][0].booked) return "0-0";
  var slot = BFS(slots, 0, 0, ROW, COL, vis);
  return slot;
};

// Direction vectors
var dRow = [-1, 0, 1, 0];
var dCol = [0, 1, 0, -1];

// Function to check if a cell
// is be visited or not
function isValid(row, col, ROW, COL, vis) {
  // If cell lies out of bounds
  if (row < 0 || col < 0 || row >= ROW || col >= COL) return false;

  // If cell is already visited
  if (vis[row][col]) return false;
  // Otherwise
  return true;
}

// Function to perform the BFS traversal
function BFS(slots, row, col, ROW, COL, vis) {
  // Stores indices of the matrix cells
  var q = [];

  // Mark the starting cell as visited
  // and push it into the queue
  q.push([row, col]);
  // vis[row][col] = true;

  // Iterate while the queue
  // is not empty
  while (q.length !== 0) {
    var cell = q[0];
    var x = cell[0];
    var y = cell[1];
    console.log(x, y);
    // document.write( grid[x][y] + " ");

    q.shift();

    // Go to the adjacent cells
    for (var i = 0; i < 4; i++) {
      var adjx = x + dRow[i];
      var adjy = y + dCol[i];

      if (isValid(adjx, adjy, ROW, COL, vis)) {
        if (!slots[adjx][adjy].booked) return `${adjx}-${adjy}`;
        q.push([adjx, adjy]);
        vis[adjx][adjy] = true;
      }
    }
  }
  return null;
}
