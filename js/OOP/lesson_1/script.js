// Создать пустой граф
function newGraph() {
    var g = {
        vertices: []
    };
    return {
        // Функция подсчета числа вершин графа g
        vertexCount: function() {
            let a = g.vertices.length;
            return a;
        },

        // Функция подсчета числа дуг графа g
        edgeCount: function() {
            let a = g.vertices.length;
            let sum = 0;
            for (let i = 0; i < a; i++) {
                sum += graph.vertices[i].links.length;
            }
            return sum;
        },

        // Добавить в граф g новую вершину с указанным массивом l исходящих дуг
        addVertex: function(l) {
            g.vertices.push({
                links: l
            });
            let a = g.vertices.length;
            return a - 1;
        },

        // Добавить в граф g дугу исходящую из вершины source и входящую в вершину target
        addEdge: function(source, target) {
            g.vertices[source].links.push(target);
        }
    };
}

// Пример использования
// Конструируем граф g1, используя функции
// A --> B --> C --> A
var g1 = newGraph(); // Пустой граф
var A = g1.addVertex([]);
var B = g1.addVertex([]);
var C = g1.addVertex([]);
g1.addEdge(A, B);
g1.addEdge(B, C);
g1.addEdge(C, A);
