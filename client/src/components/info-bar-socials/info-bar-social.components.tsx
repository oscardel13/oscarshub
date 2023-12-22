import { ReactComponent as LinkedIn } from '../../assets/linkedin-3.svg'
import { ReactComponent as GitHub } from '../../assets/github-1.svg'
import { ReactComponent as StackOverFlow } from '../../assets/stack-overflow.svg'
import { ReactComponent as Docker } from '../../assets/docker.svg'

const InfoBarSocials = () =>{
    return (
        <div className='flex flex-row justify-center items-center space-x-8 h-20 w-full bg-[rgba(37,37,50,0.98)]'>
            <a className='flex items-center h-10 w-6' href="https://www.linkedin.com/in/oscardel13/">
                <div className='bg-white rounded-full'>
                    <LinkedIn className='fill-[#0077B5]'/>
                </div>
            </a>
            <a className='flex items-center h-10 w-6' href="https://github.com/oscardel13" >
                <GitHub className='fill-white'/>
            </a>
            <a className='flex items-center h-10 w-6' href="https://stackoverflow.com/users/14166743/oscar-delgado">
                <StackOverFlow className=''/>
            </a>
            
            <a className='flex h-10 w-6' href="https://hub.docker.com/u/oscardel13">
                <Docker className=''/>
            </a>
        </div>
    )
}

export default InfoBarSocials