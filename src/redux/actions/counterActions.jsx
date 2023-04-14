import { types } from "../types/counter.types";


export const counterSum = () => ({
    type:types.SUMAR
});

export const counterSumarNumero = (numero) => ({
    type:types.SUMAR_NUM,
    payload:numero
})

export const counterRest = () => ({
    type:types.RESTAR
})

export const setTemporal = (number) => ({
    type:types.SET_TEMPORAL,
    payload:number
})
