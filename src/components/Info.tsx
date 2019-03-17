import * as React from 'react'
import { InfoProps } from '../lib/utils'

interface Props extends InfoProps {
  children: React.ReactChild[]
}

export const Info = (props: Props) => (
  <div className="absolute top-0 left-0 w-100 h-100 bg-greenblue flex flex-column justify-center items-center f5">
    <div
      onClick={props.toggleInfo}
      className="absolute top-1 right-1 pointer flex flex-column justify-center items-center"
    >
      <div className="f1">❌</div>
      <div>Close Info</div>
    </div>
    {props.children}
  </div>
)
