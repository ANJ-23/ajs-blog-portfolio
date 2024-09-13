import { BlogPosts } from 'app/components/posts'

// Home Page
// Do Tailwind.css magic here (3 rows of flexboxes - 1 nav container row, 1 body container row with 3 boxes, 1 footer container row with 1 centered box)

export default function Page() {
  return (
    <section className="">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
