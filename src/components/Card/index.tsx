import CardStyles from './CardStyles.module.scss'

interface Props{
    label:string,
    total:string
}

const Card = ({label, total}:Props) => {



    return (
        <div className={CardStyles.card}>
            <h3>{label}</h3>
            <span>{total}</span>
        </div>
    )
}

export default Card
