import styles from './Header.module.css'

import Title from '../Title/Title'
import SubTitle from '../SubTitle/SubTitle'

function Header(){
    return(
        <div className={styles.header}>
            <Title>Jogo da Velha</Title>
            <SubTitle>Criado por RafaelCardoso</SubTitle>
                       
        </div>
    )
}

export default Header