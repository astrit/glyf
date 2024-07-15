import Link from "@/link/link"

import "./categories.css"

export default function Categories() {
  return (
    <aside className="categories">
      <h2>Categories</h2>
      <nav>
        <Link data-count="100" href="#">
          All
        </Link>
        <Link data-count="243" href="#">
          Category 2
        </Link>
        <Link data-count="43" href="#">
          Category 3
        </Link>
        <Link data-count="32" href="#">
          Category 4
        </Link>
        <Link data-count="89" href="#">
          Category
        </Link>
      </nav>
      {/* <hr />
      <h2>Navigation</h2>
      <div>
        <kbd>⌘</kbd> + <kbd>shift</kbd> to copy
      </div>
      <div>
        <kbd>shift</kbd> + <kbd>click</kbd> to copy unicode
      </div> */}
    </aside>
  )
}
