/* Funçao Icon recebe variáveis: 
1) iconName = endereço do icon
2) size= variável de tamanho do icon, se não for passada usa o icon.defaultProps
3) link = recebe o link do icon, se não receber não fica link
 */

function Icon({iconName, size, link}){
    return(
        <a href={link} target="_blank">
            <img src={`/icons/${iconName}.svg`} width={size} />
        </a>
    )
}

Icon.defaultProps = {
    size:'30px'
}

export default Icon 