import FiltroStyle from './FiltroStyle.module.scss'

interface Props {
    setFiltroSelecionado:React.Dispatch<React.SetStateAction<string | null>>
}

const Filtro = ({setFiltroSelecionado} : Props) => {
    return (
        <div className={FiltroStyle.filtros}>
            <span className={FiltroStyle.filtros__botao} onClick={() => setFiltroSelecionado("Entrada")}>Entrada</span>            
            <span className={FiltroStyle.filtros__botao} onClick={() => setFiltroSelecionado("Saida")}>Saida</span>
        </div>        
    )
}

export default Filtro