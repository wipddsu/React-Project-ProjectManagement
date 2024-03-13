export default function NewProject() {
  return (
    <form>
      <div>
        <button>Cancel</button>
        <button>Save</button>
      </div>
      <div>
        <div>
          <label for="title">title</label>
          <input id="title" type="text" />
        </div>
        <div>
          <label for="description">description</label>
          <textarea id="description"></textarea>
        </div>
        <div>
          <label for="date">due date</label>
          <input id="date" type="date" />
        </div>
      </div>
    </form>
  );
}
