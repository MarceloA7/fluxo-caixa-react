import { TipoMovimentacao } from 'Interfaces/TipoMovimentacao'
import CampoSelecaoStyle from './CampoSelecaoStyle.module.scss'

interface Props {
    label:string
    listaSelecao:Array<TipoMovimentacao>,
    setValorSelecionado:React.Dispatch<React.SetStateAction<string>>
}

const CampoSelecao = ({label, listaSelecao, setValorSelecionado}:Props) => {
    return (
        <div className={CampoSelecaoStyle.campoSelecao}>
            <label className={CampoSelecaoStyle.campoSelecao__label} htmlFor="campoSelecao">{label}</label>
            <select className={CampoSelecaoStyle.campoSelecao__input} name="campoSelecao" id="campoSelecao" onChange={(evento) => setValorSelecionado(evento.target.value)}>
                {listaSelecao.map((item) => {
                    return (<option key={item.tipo} value={item.tipo}>{item.tipo}</option>)
                })}
            </select>
        </div>
    )
}

export default CampoSelecao