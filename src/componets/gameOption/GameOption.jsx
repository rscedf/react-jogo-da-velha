import styles from './GameOptions.module.css'
import Icon from '../icon/Icon'

const GameIcon = ({iconName})=> <Icon iconName={iconName} size = "25px" />

function GameOption({status, onClick}){
    return(
        <div className={styles.gameOptions} onClick={onClick}>
            {
                status === 1 && <GameIcon iconName="circle" />
            }

            {
                status === -1 && <GameIcon iconName="x" />
            }
          
        </div>
    )
}

export default GameOption