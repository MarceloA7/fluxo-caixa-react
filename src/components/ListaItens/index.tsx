import { Movimentacao } from 'Interfaces/Movimentacao'
import { useEffect, useState } from 'react'
import ListaItensStyles from './ListaItensStyle.module.scss'
interface Props {
    listaMovimentacao:Movimentacao[],
    filtroSelecionado:String|null
}
const ListaItens = ({listaMovimentacao, filtroSelecionado}:Props) => {

    const [novaLista, setNovaLista] = useState<Array<Movimentacao>>([])

    useEffect(() => {
        const listaTratada = listaMovimentacao.filter((movimentacao) => movimentacao.tipoSelecionado === filtroSelecionado);
        setNovaLista(listaTratada)
    },[filtroSelecionado])

    useEffect(() => {
        setNovaLista(listaMovimentacao)
    },[listaMovimentacao])    

    return (
        
        <ul className={ListaItensStyles.listaitens}>
            {novaLista.map((item) => (
                <li key={item.id} className={ListaItensStyles.listaitens__item}>
                    <h3>{item.tipoSelecionado}</h3>
                    <span>{`R$ ${item.valorMovientado}`}</span>
                </li>                
            ))}
        </ul>
        
    )
}

export default ListaItens