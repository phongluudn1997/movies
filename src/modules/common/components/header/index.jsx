import * as React from 'react'

function Header({title = 'Title', subTitle = 'Sub Title'}) {
  return (
    <div className="text-white uppercase">
      <p>{subTitle}</p>
      <h1 className="font-bold text-lg">{title}</h1>
      <hr className="border-white" />
    </div>
  )
}

export {Header}
