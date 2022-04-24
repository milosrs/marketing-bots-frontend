import { Spinner, SpinnerSize } from '@blueprintjs/core'
import React, { CSSProperties } from 'react'

export const Loader = () => {
    const centeredStyle: CSSProperties = {
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignContent:'center',
      }


    return <div style={centeredStyle}><Spinner size={SpinnerSize.LARGE}/></div>
}