import React from 'react'

const InternalServiceError = () => (
    <>
        <div className="container">
            <h1 className="text-center">
                Error communicating with Keycloak OAuth2 client
            </h1>
        </div>
        <style jsx>
            {`
                .text-center {
                    text-align: center;
                    margin-top: 25%;
                }

                .container {
                    display: flex;
                    min-width: 100vh;
                    min-height: 80vh;
                    justify-content: center;
                    justify-items: center;
                }
            `}
        </style>
    </>
)

export default InternalServiceError
