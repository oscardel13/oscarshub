import Stack from 'react-bootstrap/Stack';

const InfoBarKnowledge = () =>{
    return(
        <div className="knowledge">
            <Stack gap={2}>
                <Stack direction="horizontal" gap={3}>
                    <span>&#10003;</span>
                    <small> Docker and Kubernetes</small>  
                </Stack>
                <Stack direction="horizontal" gap={3}>
                    <span>&#10003;</span>
                    <small> Git and Github</small>  
                </Stack>
                <Stack direction="horizontal" gap={3}>
                    <span>&#10003;</span>
                    <small>AWS and GCP knowledge</small>  
                </Stack>
                <Stack direction="horizontal" gap={3}>
                    <span>&#10003;</span>
                    <small> CI/CD Pipeline</small>  
                </Stack>
                <Stack direction="horizontal" gap={3}>
                    <span>&#10003;</span>
                    <small> Bootstrap</small>  
                </Stack>
            </Stack>
        </div>
    )
}

export default InfoBarKnowledge