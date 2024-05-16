
// HEADER

    document.getElementById('buttonAcept').addEventListener('click',() =>{
        document.getElementById('all').style.opacity = '1'
        document.getElementById('all').style.pointerEvents = 'auto'
        document.getElementById('usuarioContent').style.display = 'none'

    })

    document.getElementById('change').addEventListener('click',() =>{
        document.getElementById('usuarioContent').style.display = 'flex'
        document.getElementById('all').style.opacity = '.2'
        document.getElementById('all').style.pointerEvents = 'none'
    })

    document.getElementById('billButton').addEventListener('click',() =>{
        document.getElementById('billing').style.display = 'initial'
        document.getElementById('firstBill').style.display = 'initial'
            document.getElementById('secondBill').style.opacity = '.5'
            document.getElementById('secondBill').style.pointerEvents = 'none'
    })

// HEADER

// MAIN

    //FACTURACION

        //PRIMERA PANTALLA
            document.getElementById('detailsButton').addEventListener('click',() =>{
                //DESBLOKEAR FACTURACION
                    document.getElementById('firstBill').style.display = 'none'
                    document.getElementById('secondBill').style.opacity = '1'
                    document.getElementById('secondBill').style.pointerEvents = 'auto'
                //DESBLOKEAR FACTURACION

                //MOSTRAR DATOS USUARIO
                    document.getElementById('nameBill').innerText = document.getElementById('nameDetailsWrite').value
                    document.getElementById('documentBill').innerText = document.getElementById('nameDetailsWrite2').value
                    document.getElementById('phoneBill').innerText = document.getElementById('nameDetailsWrite3').value
                    document.getElementById('adressBill').innerText = document.getElementById('nameDetailsWrite4').value
                //MOSTRAR DATOS USUARIO
            })


        //PRIMERA PANTALLA

        //SEGUNDA PANTALLA


        //SEGUNDA PANTALLA

    //FACTURACION

// MAIN