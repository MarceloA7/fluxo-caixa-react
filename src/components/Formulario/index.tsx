import Botao from "components/Botao"
import CampoSelecao from "components/CampoSelecao"
import CampoValor from "components/CampoValor"
import { Movimentacao } from "Interfaces/Movimentacao"
import { TipoMovimentacao } from "Interfaces/TipoMovimentacao"
import { useState } from "react"
import tipoMovimentacao from "./movimentacao.json"
import { v4 as uuidv4 } from 'uuid'

interface Props {
    setListaMovimentacao:React.Dispatch<React.SetStateAction<Movimentacao[]>>    
}

const Formulario = ({setListaMovimentacao}:Props) => {

    const [tiposMovimentacao, setTiposMovimentacao] = useState<Array<TipoMovimentacao>>(tipoMovimentacao);
    const [valorMovimentado, setValorMovimentacao] = useState<string>("0,00")
    const [tipoSelecionado, setValorSelecionado] = useState<string>(tipoMovimentacao[0].tipo)


    function adicionarMovimentacao (evento:React.FormEvent) {
        evento.preventDefault();
        const movimentacao:Movimentacao = {
            tipoSelecionado,
            valorMovimentado,
            id:uuidv4()
        }
        setListaMovimentacao((valorAntigo)=>[...valorAntigo,movimentacao])
        setValorMovimentacao("");
    }

    return (
        <form onSubmit={(evento) => adicionarMovimentacao(evento)}>
            <CampoSelecao label="Tipo" listaSelecao={tiposMovimentacao} setValorSelecionado={setValorSelecionado}/>
            <CampoValor label="Valor" valorMovientado = {valorMovimentado} setValorMovimentacao = {setValorMovimentacao}/>
            <Botao>Adicionar</Botao>
        </form>
    )
}

export default Formulario