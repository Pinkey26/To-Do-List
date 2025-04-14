import Deletebutton from "./Deletebutton";
import Markdone from "./Markdone";
import './Listtodo.css';

export default function Listtodo({ todos, deleteTodo, markAsDone }) {
  return (
    <div className="Listtodo">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              className={todo.isDone ? "done-task" : ""}
            >
              {todo.task}
              &nbsp;&nbsp;
              <Deletebutton onDelete={() => deleteTodo(todo.id)} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Markdone onMark={() => markAsDone(todo.id)} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
