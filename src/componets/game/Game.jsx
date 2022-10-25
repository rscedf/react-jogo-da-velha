/*
import useState  =  importa função de array
import styles = importa css
import GameOption = importa o status x ou 0

*/


import {useState} from 'react'
import styles from './Game.module.css'

import Icon from '../icon/Icon'
import GameOption from '../gameOption/GameOption'

/* 
const[gameState, setGameState] = cria constante do array 9 posições com valor 0 
const[currentPlayer, setCurrentPlayer]= useState(1)  = inicia com jogador 1    0
if verifica se posição está vazia
variavel newGameState assume novo clic na posição
setGameState(newGameState)  = setGame recebe o valor de newGameState
 */
function Game(){
    const[gameState, setGameState]=useState(Array(9).fill(0))
    const[currentPlayer, setCurrentPlayer]= useState(1)

    const handleClic = (pos)=>{
        if(gameState[pos] === 0){
            let newGameState = [...gameState]
            newGameState[pos]= currentPlayer
            setCurrentPlayer(currentPlayer * -1)
            setGameState(newGameState)
        }
        
   }
   /*  
    Primeira div 
    cria tabuleiro
    getState.map = percorre posições array
    key = variável como única
    Segunda div
    cria escritas do lado tabuleiro
   */
    return(
        <div className={styles.gameContent}>
            <div className={styles.game}>
            {
                gameState.map((value, pos)=>
                    <GameOption 
                    key={'game-option-pos-${pos}'}
                    status = {value}
                    onClick={()=> handleClic(pos)}
                    />
                )
            }
             </div>

             <div className={styles.gameInfo}>
                <h4>Próximo a jogar:</h4>
                {
                    currentPlayer === 1 && <Icon iconName="circle" />
                }
                {
                    currentPlayer === -1 && <Icon iconName="x" />
                }
             </div>
        </div>
        
        
    )
}

export default Game