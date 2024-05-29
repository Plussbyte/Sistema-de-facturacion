export function closeScreen(){ // <---------- Cierra la segunda y la tercera pantalla de facuración
    document.getElementById('secondBill').style.opacity = '.5'
    document.getElementById('secondBill').style.pointerEvents = 'none'
    document.getElementById('record').style.pointerEvents = 'none'
    document.getElementById('record').style.opacity = '0.5'
}

export function closeScreenInv(){ // <---------- Cierra pantallas inventario 
    
}





