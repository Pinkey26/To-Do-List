export default function Searchholder({ newTask, updateTodoValue, newTodo }) {
    
    return (
      <div>
        <form onSubmit={newTask}>
          <input
            placeholder="Add the tasks"
            value={newTodo}
            onChange={updateTodoValue}
            
          />
          &nbsp;
          <button type="submit" style={{backgroundColor:"#BF5700"}}>ADD</button>
        </form>
      </div>
    );
  }
  