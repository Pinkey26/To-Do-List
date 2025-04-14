import './Markdone.css'
export default function Markdone({ onMark }) {
  return (
    <button
      onClick={onMark}
      className="MarkDone"
    > 
    <i className="fa-solid fa-check" ></i>  MarkDone
    </button>
  );
};
