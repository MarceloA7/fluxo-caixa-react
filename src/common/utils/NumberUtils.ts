export abstract class NumberUtils{

    public static valorStringEmNumber (valor:string) {
        const alterarSeletores = valor.replace(".","").replace(",",".");
        const coverterValorEmNumero = Number(alterarSeletores);
        return coverterValorEmNumero;
    }


    public static valorNumberEmBrString(valor:number){
        const brValor = valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        return brValor;
    }

}