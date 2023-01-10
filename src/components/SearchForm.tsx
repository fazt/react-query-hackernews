import "./SearchForm.css";

interface Props {
  onSubmit: (text: string) => void;
}

function SearchForm({ onSubmit }: Props) {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        const text = e.currentTarget.search.value;
        console.log(text);
        onSubmit(text);
      }}
    >
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search"
        autoFocus
      />
    </form>
  );
}

export default SearchForm;
