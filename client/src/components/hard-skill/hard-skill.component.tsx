import Stack from 'react-bootstrap/Stack';
import ProgressBar from 'react-bootstrap/ProgressBar';

const HardSkill = (props: {name: String, percent: number}) =>{
    const { name, percent } = props
    return (
        <div>
            <Stack direction="horizontal">
                <span>{name}</span>
                <div className='ms-auto'>
                    <small>{percent}</small>
                </div>
            </Stack>
            <ProgressBar now={percent} />
        </div>
    )
}

export default HardSkill;