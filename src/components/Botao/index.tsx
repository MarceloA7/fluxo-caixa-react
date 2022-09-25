import BotaoStyles from './BotaoStyles.module.scss'

interface Props {
    children : React.ReactNode
}


const Botao = ({children}:Props) => {
    return(
        <>
        <button className={BotaoStyles.botao}>{children}</button>
        </>
    )
}

export default Botao