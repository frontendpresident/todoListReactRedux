const Tasks = (props) => {
    return (
       props.todo.map(todo => {
           return(
            <div key={todo.id}>
               <p>
                   {todo.task}
               </p>
               <button onClick={() => props.deleteTask(todo.id)}>х</button>
           </div>
           )
           
       })
    )
}

export default Tasks;