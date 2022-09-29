// https://codesandbox.io/s/search-page-1-forked-2onjek
// https://codesandbox.io/s/search-page-1-forked-2onjek
// https://codesandbox.io/s/search-page-1-forked-2onjek
// https://codesandbox.io/s/search-page-1-forked-2onjek

export default function Search() {
  return (
    <form action="">
      <Search
        placeholder="e.g love → ♥"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        pattern="[A-Za-z0-9\-]+"
      />
      <label htmlFor="s">Label</label>
      <button type="submit">Enter</button>
      <button type="reset">Reset</button>
    </form>
  );
}
