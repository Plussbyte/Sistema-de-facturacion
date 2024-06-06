// HEADER
    export function head(){
        // Boton aceptar usuario (Boton Ingresar)
        document.getElementById('buttonAcept').addEventListener('click',() =>{
            document.getElementById('all').style.opacity = '1'
            document.getElementById('all').style.pointerEvents = 'auto'
            document.getElementById('usuarioContent').style.display = 'none'
            // Desblokea el footer
                document.querySelector('footer').style.pointerEvents = 'auto'
                document.querySelector('footer').style.opacity = '1'
            // Desblokea el footer
        })
        // Boton aceptar usuario (Boton Ingresar)

        
        document.getElementById('change').addEventListener('click',() =>{
            document.getElementById('usuarioContent').style.display = 'flex'
            document.getElementById('all').style.opacity = '.5'
            document.getElementById('all').style.pointerEvents = 'none'
            document.getElementById('footer').style.opacity = '.5'
            document.getElementById('footer').style.pointerEvents = 'none'
        })

        // Boton abrir la facturacion (Boton facturar)
            document.getElementById('billButton').addEventListener('click',() =>{
                document.getElementById('fourScreen').style.display = 'none'
                document.getElementById('billing').style.display = 'flex'
                document.getElementById('firstBill').style.display = 'initial'
                document.getElementById('secondBill').style.opacity = '.5'
                document.getElementById('secondBill').style.pointerEvents = 'none'
                document.getElementById('warningFirstBill').innerText = ''
                document.getElementById('utilityContainer').style.display = 'none'
                
                //Elimina los datos anteriores para nueva factura
                    document.getElementById('documentBill').innerText =''
                    document.getElementById('phoneBill').innerText = ''
                    document.getElementById('nameBill').innerText = ''
                    document.getElementById('adressBill').innerText = ''

                // Blokea la tercera pantalla
                    document.getElementById('record').style.pointerEvents = 'none'
                    document.getElementById('record').style.opacity = '0.5'

                nameDetailsWrite.value = 'Documento', nameDetailsWrite.style.color = 'grey'
                nameDetailsWrite2.value = 'Teléfono', nameDetailsWrite2.style.color = 'grey'
                nameDetailsWrite3.value = 'Nombre', nameDetailsWrite3.style.color = 'grey'
                nameDetailsWrite4.value = 'Correo', nameDetailsWrite4.style.color = 'grey'
            })

    }

export function utilitiesButton(){
    document.getElementById('utilitiesButton').addEventListener('click',()=>{
        document.getElementById('billing').style.display = 'none'
        document.getElementById('utilityContainer').style.display = 'flex'
    })
}
// HEADER