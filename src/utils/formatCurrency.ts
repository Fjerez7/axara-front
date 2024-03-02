export const formatCurrency = (value:number) => {
    return value.toLocaleString('es-CO', {style:"currency", currency: 'COP'})
}