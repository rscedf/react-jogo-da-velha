/*
import useState  =  importa função de array
import useEffect = programa faz ação sem clic do usuário
import styles = importa css
import GameOption = importa o status x ou 0

*/
import {useState, useEffect} from 'react'
import styles from './Game.module.css'

import GameOption from '../gameOption/GameOption'
import GameInfo from '../gameInfo/GameInfo'

/* winnerTable  = array com possibilidades de vitória */

const winnerTable=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

/* 
const[gameState, setGameState] = cria constante do array 9 posições com valor 0 
const[currentPlayer, setCurrentPlayer]= useState(1)  = inicia com jogador 1    0
if verifica se posição está vazia e se winner é igual a zero(se não for termina)
variavel newGameState assume novo clic na posição
setGameState(newGameState)  = setGame recebe o valor de newGameState
const[winner, setWinner]= useState(0)  = variável para verificar campeão
        0 ninguém / 1 campeão 1 / 2 campeão 2
 */
function Game(){
    const[gameState, setGameState]=useState(Array(9).fill(0))
    const[currentPlayer, setCurrentPlayer]= useState(-1)
    const[winner, setWinner]= useState(0)

    const handleClic = (pos)=>{
        if(gameState[pos] === 0 && winner===0){
            let newGameState = [...gameState]
            newGameState[pos]= currentPlayer            
            setGameState(newGameState)
        }
        
   }

   /*Reinicia o jogo */
   const handleReset = ()=>{
        setGameState(Array(9).fill(0)) /* zera o array deixando em branco  */
        setWinner(0) /*zera o ganhador  */
    }

   /*winnerTable.forEach(()=>{   percorre o winnerTable dos resultado
    const value= line.map((pos)=> gameState[pos])  pega o valor da posição
    const soma = values.reduce((valAcumulado, valTotal)=> valAcumulado+valTotal) = soma acumula valor da posição
    if(soma===3 || soma === -3) setWinner(soma/3)  verifica se soma = 3 ou -3 e chama setWinner
    */

   const verifyGame = ()=>{
        winnerTable.forEach((line)=>{
            const values= line.map((pos)=> gameState[pos])
            const soma = values.reduce((soma, valTotal)=> soma + valTotal)
            if(soma===3 || soma === -3) setWinner(soma/3)
        })
   }


   /* useEffect = primeiro parâmetro sempre uma função e 
   segundo parâmetro sempre um array  - o array vazio carrega informação quando a página é carregada
   se tiver variável no array, sempre que tiver alteração da variável ele entra na função do primeiro 
   parâmetrocaso. Nesse caso se gameState acima for alterado.
   setCurrentPlayer é responsável por trocar o jogador */

   useEffect(()=>{    
    setCurrentPlayer(currentPlayer * -1)
    verifyGame()
   }, [gameState])


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
                    key={`game-option-pos-${pos}`}
                    status = {value}
                    onClick={()=> handleClic(pos)}
                    />
                )
            }
             </div>
            <GameInfo
                currentPlayer = {currentPlayer}
                winner = {winner}
                onReset={handleReset}
            />
             
        </div>
        
        
    )
}

export default Game