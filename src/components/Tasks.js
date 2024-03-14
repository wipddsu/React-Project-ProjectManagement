export default function Tasks() {
  return (
    <div>
      <h3 className="text-2xl">Tasks</h3>
      <div>
        <input type="text" id="text" name="text" />
        <button>Add Task</button>
      </div>
      <ul>
        <li>태스크1</li>
        <li>태스크2</li>
        <li>태스크3</li>
      </ul>
    </div>
  );
}
