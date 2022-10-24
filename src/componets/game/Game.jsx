/*
import useState  =  importa função de array
import styles = importa css
import GameOption = importa o status x ou 0

const[gameState, setGameState] = cria constante do array 9 posições com valor 0
getState.map = percorre posições array
key = variável como única

*/


import {useState} from 'react'
import styles from './Game.module.css'

import GameOption from '../gameOption/GameOption'

function Game(){
    const[gameState, setGameState]=useState(Array(9).fill(0))
    return(
        <div className={styles.game}>
            {
                gameState.map((value, pos)=>
                    <GameOption 
                    key={'game-option-pos-${pos}'}
                    status = {value}
                    />
                )
            }
        </div>
        
    )
}

export default Game