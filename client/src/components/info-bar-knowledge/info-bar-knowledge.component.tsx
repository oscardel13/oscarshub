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
                    <small> Git, Github, Github Actions</small>  
                </Stack>
                <Stack direction="horizontal" gap={3}>
                    <span>&#10003;</span>
                    <small>AWS: EC2, ALB, Route 53, SQS, S3, Cloudfront, Lambda, API Gateway</small>  
                </Stack>
                <Stack direction="horizontal" gap={3}>
                    <span>&#10003;</span>
                    <small> Continuous Integration / Continuous Deployment</small>  
                </Stack>
                <Stack direction="horizontal" gap={3}>
                    <span>&#10003;</span>
                    <small> Tailwind</small>  
                </Stack>
                <Stack direction="horizontal" gap={3}>
                    <span>&#10003;</span>
                    <small> API and Rest API</small>  
                </Stack>
                <Stack direction="horizontal" gap={3}>
                    <span>&#10003;</span>
                    <small> Unit Testing</small>  
                </Stack>
            </Stack>
        </div>
    )
}

export default InfoBarKnowledge