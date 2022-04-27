import React from "react";

interface IProps {
    header: JSX.Element;
    content: JSX.Element;
}

export const Panel = ({header, content}: IProps) => 
<>
<div className='panel vertical'>
    <div className='header'>
        {header}
    </div>
    <div className='content'>
        {content}
    </div>
</div>
<style>{`
    .vertical {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .vertical > .header {
        width: 100%;
        border-bottom: 1px solid;
        border-color: black;
        margin-bottom: 5px;
        text-align: center;
    }

    .content {
        display: flex;
        flex-direction: column;
    }
`}</style>
</>