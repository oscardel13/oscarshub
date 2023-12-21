import InfoBarHeader from '../info-bar-header/info-bar-header.component';
import InfoBarSocials from '../info-bar-socials/info-bar-social.components';
import InfoBarContent from '../info-bar-content/info-bar-content.component';

const InfoBar = (props: {hide: () => void}) =>{
    return (
        <div className='flex flex-col w-full min-w-72 xl:min-w-80 h-full bg-[rgb(32,32,42,0.95)]'>
            <InfoBarHeader hide={props.hide}/>
            <InfoBarContent/>
            <InfoBarSocials/>
        </div>
    )

}

export default InfoBar