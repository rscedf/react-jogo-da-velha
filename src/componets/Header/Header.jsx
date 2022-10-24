/*
importa outras classes que estão sendo usadas:
- Header.module / Title/ SubTitle/ Icon

Header
className = styles.header: usa o css header.module .header para div
className = styles.iconContent: usa o css header.module .iconContent para div
iconName passa: icone / size(se não for passado usa padrão) / link
*/


import styles from './Header.module.css'

import Title from '../Title/Title'
import SubTitle from '../SubTitle/SubTitle'
import Icon from '../icon/Icon'

function Header(){
    return(
        <div className={styles.header}>
            <Title>Jogo da Velha</Title>
            <SubTitle>Criado por RafaelCardoso</SubTitle>
            <div className={styles.iconContent}>
                <Icon iconName="github" link="https://github.com/rscedf" />
            </div>           
                       
        </div>
    )
}

export default Header