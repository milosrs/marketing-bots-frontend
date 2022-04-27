import React from "react";

export type HOrientation = 'left' | 'center' | 'right';
export type VOrientation = 'top' | 'middle' | 'bottom';

interface IProps {
    header: JSX.Element;
    content: JSX.Element;
    hOrient?: HOrientation;
    vOrient?: VOrientation;
    noBackground?:boolean;
}

export const Panel = ({header, content, hOrient = 'center', vOrient = 'middle', noBackground = false}: IProps) => 
<>
<div className='panel vertical'>
    <div className='header'>
        {header}
    </div>
    <div className='content' style={{
        justifyContent: hOrient, 
        alignContent: vOrient,
        background: noBackground ? 'none' : 'inherit',
    }}>
        {content}
    </div>
</div>
<style>{`
    .vertical {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .content {
        display: flex;
        flex-direction: column;
    }
    
    .header {
        width: 100%;
        border-bottom: 1px solid;
        border-color: black;
        margin-bottom: 5px;
        text-align: center;
    }
`}</style>
</>