import "./search.css"

export default function Search() {
  return (
    <form className="search">
      <input type="search" placeholder="Search" />
      <select name="" id="">
        <option value="">All categories</option>
      </select>
      <button type="reset" />
    </form>
  )
}
