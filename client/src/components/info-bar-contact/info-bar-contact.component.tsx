import Stack from 'react-bootstrap/Stack';

const InfoBarContact = () => {
    return (
        <div className="info">
                <Stack direction="horizontal">
                    <h6>Residence:</h6>
                    <div className='ms-auto'>
                        <small>USA</small>
                    </div>
                </Stack>
                <Stack direction="horizontal">
                    <h6>City:</h6>
                    <div className='ms-auto'>
                        <small>Denver</small>
                    </div>
                </Stack>
                <Stack direction="horizontal">
                    <h6>Email:</h6>
                    <div className='ms-auto'>
                        <small>oscardel413@gmail.com</small>
                    </div>
                </Stack>
                <Stack direction="horizontal">
                    <h6>Phone:</h6>
                    <div className='ms-auto'>
                        <small>720-219-5293</small>
                    </div>
                </Stack>
            </div>
    )
}

export default InfoBarContact