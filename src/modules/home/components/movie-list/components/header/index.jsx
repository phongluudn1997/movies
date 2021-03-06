import * as React from 'react'
import {Header as SmallHeader} from 'modules/common/components/header'
import {NavigateGroupButtons} from 'modules/common/components/navigate-group-button'

function Header() {
  return (
    <div className="flex justify-between">
      <SmallHeader subTitle="Top Trending" title="RECOMMENDED MOVIES" />
      <NavigateGroupButtons />
    </div>
  )
}

export {Header}
