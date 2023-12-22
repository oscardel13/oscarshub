import HardSkill from '../info-bar-hard-skill/info-bar-hard-skill.component';
import { useEffect, useState } from 'react';

type skillType = {
    name: string,
    percent: number
}

type skillsType = skillType[]

const initialHardSkills = [
    {name: 'NodeJS', percent: 0},
    {name: 'React', percent: 0},
    {name: 'MongoDB', percent: 0},
    {name: 'HTML', percent: 0},
    {name: 'CSS', percent: 0},
    {name: 'JavaScript', percent: 0},
    {name: 'Python', percent: 0},
    {name: 'Django', percent: 0},
]

const hardSkills = [
    {name: 'Node.Js', percent: 85},
    {name: 'React', percent: 80},
    {name: 'Next.Js', percent: 80},
    {name: 'Django', percent: 80},
    {name: 'MongoDB', percent: 75},
    {name: 'SQL', percent: 75},
    {name: 'HTML', percent: 90},
    {name: 'CSS', percent: 75},
]

const InfoBarHardSkills = () => {
    const [skills, setSkills] = useState<skillsType>([])
    useEffect(()=>{
        setTimeout(()=>setSkills(initialHardSkills),300)
        setTimeout(()=>setSkills(hardSkills),600)   
    },[])
    return (
        <div className="hard skills pb-2">
            <h3>Languages</h3>
            <br/>
            <div className='flex flex-col gap-4'>
                {
                    skills.map((skill) => 
                    <HardSkill key={skill.name} name={skill.name} percent={skill.percent}/>
                    )
                }                
            </div>
        </div>
    )
}

export default InfoBarHardSkills