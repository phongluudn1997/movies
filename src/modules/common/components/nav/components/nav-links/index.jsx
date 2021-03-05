import * as React from 'react'

const links = [
  {
    name: 'movies',
  },
  {
    name: 'shows',
  },
  {
    name: 'actors',
  },
  {
    name: 'news',
  },
  {
    name: 'comunity',
  },
]

function NavLinks() {
  return (
    <ul className="">
      {links.map(link => (
        <li key={link.name} className="inline text-white font-bold p-4">
          {link.name.toUpperCase()}
        </li>
      ))}
    </ul>
  )
}

export {NavLinks}
