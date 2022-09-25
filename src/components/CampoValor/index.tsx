import CampoValorStyles from './CampoValorStyles.module.scss'

interface Props {
    label: string,
    valorMovientado:string,
    setValorMovimentacao:React.Dispatch<React.SetStateAction<string>>
}

const CampoValor = ({label, valorMovientado, setValorMovimentacao}:Props) => {
    return (
        <div className={CampoValorStyles.campoValor}>
            <label className={CampoValorStyles.campoValor__label} htmlFor="campoValor">{label}</label>
            <input 
                className={CampoValorStyles.campoValor__input} 
                value={valorMovientado} 
                type="text" 
                name='campoValor' 
                onChange={(event) => setValorMovimentacao(event.target.value)}/>
        </div>
    )
}

export default CampoValor