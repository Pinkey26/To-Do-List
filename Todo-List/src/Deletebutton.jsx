import './Delete.css'
export default function Deletebutton({ onDelete }) {
  return (
    
    <button onClick={onDelete}
     className="delete"
     >
    <i className="fas fa-trash"></i> Delete
</button>

  );
};


