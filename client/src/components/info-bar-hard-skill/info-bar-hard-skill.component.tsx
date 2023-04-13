import Stack from 'react-bootstrap/Stack';
import { InfoBarContentHardSkill } from './info-bar-hard-skill.styles';

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
            <InfoBarContentHardSkill now={percent} />
        </div>
    )
}

export default HardSkill;