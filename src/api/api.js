export const getAllTasks = () => {
    return fetch('/tasks')
        .then(res => res.json())
}

export const createTaskApi = task => {
    return fetch('/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ todo: task, isDone: false })
    })
}
export const deleteTaskApi = id => {
    return fetch(`/delete/${id}`, {
        method: 'DELETE'
    })
}

export const deleteAllTaskApi = () => {
    return fetch('/delete-all', {
        method: 'DELETE'
    })
}

export const changeStateApi = (id) => {
    return fetch(`/update-status/${id}`, {
        method: 'PUT'
    })
}