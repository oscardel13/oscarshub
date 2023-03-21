import { Apollosandbox } from '@apollo/sandbox/react'

export function EmbeddedSandBox(){
    return(
        <Apollosandbox
            initialEndpoint='http://localhost:8000/graphql'
            includedCookies={false}
        />
    )
}

export default EmbeddedSandBox;