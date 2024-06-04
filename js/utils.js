export function closeScreenSecond(){ // <---------- Cierra la segunda y la tercera pantalla de facuración
    document.getElementById('secondBill').style.opacity = '.5'
    document.getElementById('secondBill').style.pointerEvents = 'none'
    document.getElementById('record').style.pointerEvents = 'none'
    document.getElementById('record').style.opacity = '0.5'
}

export function openScreenSecond(){ // <---------- Abre la segunda y la tercera pantalla de facuración
    document.getElementById('secondBill').style.opacity = '1'
    document.getElementById('secondBill').style.pointerEvents = 'auto'
    document.getElementById('record').style.pointerEvents = 'auto'
    document.getElementById('record').style.opacity = '1'
}

export function closeScreenInv(){ // <---------- Cierra pantallas inventario 
    
}





