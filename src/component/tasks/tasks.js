const Tasks = (props) => {
 
    return (
       props.todo.map(todo => {
           return(
            <div key={todo.id}>
               <p>
                   {todo.task}
               </p>
               <button>х</button>
           </div>
           )
           
       })
    )
}

export default Tasks;