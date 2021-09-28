/**
 * Marca a tarefa recebida no paramêtro como finalizada.
 * @param {Int} e 
 * @param {Array} tasks 
 * @returns Array
 */
function markCompleteTask(e,tasks) {
    if (!tasks[e].includes("completed")) {
        tasks[e].push("completed");
    }
    return tasks;
}

export { markCompleteTask }