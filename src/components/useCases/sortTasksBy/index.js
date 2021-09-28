/**
 * Recebe como paramêtro o formato selecionado da ordenação, realiza a ordenação e
 * devolve o array ordenado.
 * @param {String} query 
 * @param {Array} tasks 
 * @returns Array
 */
function sortBy(query, tasks) {
    let filtered = [];

    if (query === "completed") {
        filtered = tasks.filter(index => (index.includes("completed")));
    } else if (query === "all") {
        filtered = tasks;
    } else {
        filtered = tasks.filter(index => (index.includes("completed") === false));
    }
    filtered.map((index) => (
        index[3] = "filtered"
    ));

    return filtered
}

export { sortBy }