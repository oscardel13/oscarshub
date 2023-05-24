import { OscarsHubSandbox } from "./graphql_sandbox.styles";

export function EmbeddedSandBox(){
    return(
        <OscarsHubSandbox
            initialEndpoint='https://oscarshub.com/api/graphql'
            includedCookies={false}
        />
    )
}

export default EmbeddedSandBox;