import Link from 'next/link'

// URL routes + link names
const navItems = {
  '/': {
    name: 'Home',
  },
  '/blog': {
    name: 'Blog',
  },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': {
    name: 'Deploy',
  },
}

// change Navbar color?
// also change Navbar so that it's on top (NO absolute positioning)

export function Navbar() {
  return (
    <aside className="-ml-[4px] md:-translate-x-7 mb-4 md:mb-16 tracking-tight max-w-xl md:mx-auto py-3">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative mx-4 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
