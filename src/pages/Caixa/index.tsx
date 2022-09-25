import Card from 'components/Card'
import Formulario from 'components/Formulario'
import ListaItens from 'components/ListaItens'
import { useEffect, useState } from 'react'
import CaixaStyles from './CaixaStyles.module.scss'
import { Movimentacao } from 'Interfaces/Movimentacao'
import { NumberUtils } from 'common/utils/NumberUtils'
import Filtro from 'components/Filtro'

const Caixa = () => {

    const [listaMovimentacao, setListaMovimentacao] = useState<Array<Movimentacao>>([]); 
    const [totalSaida, setTotalSaida] = useState<string>("0,00");
    const [totalEntrada, setTotalEntra] = useState<string>("0,00");
    const [totalMovimentado, setTotalMovimentado] = useState<string>("0,00"); 
    const [filtroSelecionado, setFiltroSelecionado] = useState<string | null>(null)    

    useEffect(() => {

        const listaSaida = listaMovimentacao.filter(movimentacao => movimentacao.tipoSelecionado === 'Saida');
        const listaEntrada = listaMovimentacao.filter(movimentacao => movimentacao.tipoSelecionado === 'Entrada');

        const totalMovimentacaodoSaida  = listaSaida.reduce(
            (prevent, element) => prevent + NumberUtils.valorStringEmNumber(element.valorMovimentado),0);
        const totalMovimentacaoEntrada  = listaEntrada.reduce(
            (prevent, element) => prevent + NumberUtils.valorStringEmNumber(element.valorMovimentado),0);
        const totalMovimentacao = listaMovimentacao.reduce(
            (prevent, element) => prevent + NumberUtils.valorStringEmNumber(element.valorMovimentado),0);
        
        setTotalSaida(NumberUtils.valorNumberEmBrString(totalMovimentacaodoSaida));
        setTotalEntra(NumberUtils.valorNumberEmBrString(totalMovimentacaoEntrada));
        setTotalMovimentado(NumberUtils.valorNumberEmBrString(totalMovimentacao));

    },[listaMovimentacao])

    return(
        <div className={CaixaStyles.caixa}>
            <header>
                <div className={CaixaStyles.cabecalho}>
                    <h1>Fluxo de Caixa</h1>
                </div>
            </header>
            <main>
                <div className={CaixaStyles.cards}>
                    <Card label="Total Saída" total={totalSaida}/>
                    <Card label="Total Entrada" total={totalEntrada}/>
                    <Card label="Total Mov." total={totalMovimentado}/>
                </div>
                <div className={CaixaStyles.conteudo}>
                    <div className={CaixaStyles.conteudo__cadastro}>
                        <Formulario setListaMovimentacao={setListaMovimentacao}/>
                    </div>
                    <div className={CaixaStyles.conteudo__listaRegistros}>
                        <h3>Lista de registros</h3>
                        <Filtro setFiltroSelecionado={setFiltroSelecionado}/>
                        <ListaItens listaMovimentacao = {listaMovimentacao} filtroSelecionado={filtroSelecionado}/>
                    </div>                    
                </div>
            </main>        
        </div>

    )
}

export default Caixa