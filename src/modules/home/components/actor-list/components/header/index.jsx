import * as React from 'react'
import {Header as SmallHeader} from 'modules/common/components/header'
import {SearchBar} from 'modules/common/components/search'
import {NavigateGroupButtons} from 'modules/common/components/navigate-group-button'

function Header() {
  function onSubmit(data) {
    console.log('Submit Data', data)
  }

  return (
    <div className="flex justify-between align-center">
      <SmallHeader title="movies by actors" subtitle="top actors" />
      <div className="flex gap-4">
        <SearchBar onSubmit={onSubmit} />
        <NavigateGroupButtons />
      </div>
    </div>
  )
}

export {Header}
