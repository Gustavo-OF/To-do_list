/**
 * Remove do array todas as tarefas marcadas como "finalizadas" e retorna
 * o array.
 * @param {Array} tasks 
 * @returns Array
 */
function removeCompletedTasks(tasks) {
    let filtered = tasks.filter(index => (index.includes("completed")));
    filtered.map((index) =>
        tasks.splice(index[0],filtered.length)
    );
    return tasks;
}

export { removeCompletedTasks }