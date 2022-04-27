import { Button } from '@blueprintjs/core';
import { useRouter } from 'next/router';
import React from 'react';

export default function Four0Four () {
    const router = useRouter();

    return <div className='container'>
        <h1>404</h1>
        <div className='explanation'>
            This page could not be found. 
            Check your url, or 
        </div>
        <Button 
            className='btn-home'
            onClick={() => router.push('/')} 
            text='Go to homepage' 
            color='white'
            intent='primary'
            small
            minimal
        />
        <style jsx>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: calc(100% - 60px);
            }

            h1 {
                border-right: 1px solid;
                border-color: white;
                padding-right: 24px;
            }

            h2 {
                margin: 6px;
                text-align: center;
            }

            .explanation {
                margin-left: 24px;
            }

            btn-home {
                margin-left: 16px;
            }
        `}</style>
    </div>
}