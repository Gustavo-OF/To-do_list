/**
 * Adiciona a tarefa recebida no paramêtro, junto com o ID e retorna 
 * o array inteiro
 * @param {String} value 
 * @param {Int} id 
 * @param {Array} tasks 
 * @returns Array
 */
function addTask(value, id, tasks) {
    tasks[id] = [id, value];
    return tasks;
}

export { addTask }