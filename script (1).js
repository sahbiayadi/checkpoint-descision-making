
/* Checkpoint Applied Algorithms in Software Development */

function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    const queue = [];
    
    // Initialize distances to infinity except for the start node
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;
    
    // Enqueue the start node
    queue.push(start);
    
    while (queue.length) {
        // Dequeue a vertex
        const currentVertex = queue.shift();
        visited[currentVertex] = true;
        
        // Visit all adjacent vertices
        for (let neighbor in graph[currentVertex]) {
            // Calculate the distance to the neighbor through the current vertex
            const distance = distances[currentVertex] + graph[currentVertex][neighbor];
            
            // Update the distance if it's shorter than the current known distance
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
            }
            
            // Enqueue the neighbor if it hasn't been visited yet
            if (!visited[neighbor]) {
                queue.push(neighbor);
            }
        }
    }
    
    return distances;
}

// Example graph
const graph = {
   'A': { 'B': 4, 'C': 2 },
   'B': { 'A': 4, 'C': 5, 'D': 10 },
   'C': { 'A': 2, 'B': 5, 'D': 3 },
   'D': { 'B': 10, 'C': 3 }
};

// Starting vertex
const startVertex = 'A';

// Calculate shortest distances using Dijkstra's algorithm
const shortestDistances = dijkstra(graph, startVertex);
console.log(shortestDistances);