export function specialSum(a, b) {
    if (b >= 5)
        b = 4
    return a + b;
}

export function substraction(a, b){ 
    return a - b ;
}

export function ordenar(arr){
    return arr.sort((elemA,elemB)=>{
        if(elemA>elemB)
            // Orden ascendente
            return 1
        else return -1     
    })
}

