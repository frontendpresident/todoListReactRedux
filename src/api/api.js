const errProcessing = () => {
  return (res) =>
    new Promise((resolve, reject) => {
      if (res.status >= 200 && res.status < 400) {
        return resolve(res);
      }
      return reject(res);
    });
};

export const getAllTasks = () => {
  return fetch("/tasks").then((res) => res.json());
};

export const createTaskApi = (task) => {
  return fetch("/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ todo: task, isDone: false }),
  }).then(errProcessing());
};

export const deleteTaskApi = (id) => {
  return fetch(`/delete/${id}`, {
    method: "DELETE",
  }).then(errProcessing());
};

export const deleteAllTaskApi = () => {
  return fetch("/delete-all", {
    method: "DELETE",
  }).then(errProcessing());
};

export const changeStateApi = (id) => {
  return fetch(`/update-status/${id}`, {
    method: "PUT",
  }).then(errProcessing());
};
