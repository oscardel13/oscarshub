import InfoBarHeader from '../info-bar-header/info-bar-header.component';
import InfoBarSocials from '../info-bar-socials/info-bar-social.components';
import InfoBarContent from '../info-bar-content/info-bar-content.component';

import { InfoBarStack } from './info-bar.styles';

const InfoBar = (props: {hide: () => void}) =>{
    return (
        <InfoBarStack gap={3}>
            <InfoBarHeader hide={props.hide}/>
            <InfoBarContent/>
            <InfoBarSocials/>
        </InfoBarStack>
    )

}

export default InfoBar