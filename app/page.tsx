import { BlogPosts } from 'app/components/posts'

// Home Page
// Do Tailwind.css magic here (3 rows of flexboxes - 1 nav container row, 1 body container row with 3 boxes, 1 footer container row with 1 centered box)

export default function Page() {
  return (
    <section className="">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Andrew Joo
      </h1>
      <p className="mb-4">
        {`
        Certified web developer and IT analyst with over 1 year of experience in web development. Currently transitioning from React-based technologies to .NET and Microsoft Azure stacks. Seasoned in implementing full-stack web technologies and software testing philosophies within squad-based settings.`}
      </p>
      
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
