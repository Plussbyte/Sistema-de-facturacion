
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
                    document.getElementById('documentBill').innerText = document.getElementById('nameDetailsWrite').value
                    document.getElementById('phoneBill').innerText = document.getElementById('nameDetailsWrite2').value
                    document.getElementById('nameBill').innerText = document.getElementById('nameDetailsWrite3').value
                    document.getElementById('adressBill').innerText = document.getElementById('nameDetailsWrite4').value
                //MOSTRAR DATOS USUARIO
            })

            //TEXTO DE INPUTS

                    //Elimina el texto predeterminado si el usuario hace click
                    document.getElementById('nameDetailsWrite').addEventListener('focus',() =>{
                        if(document.getElementById('nameDetailsWrite').value === 'Documento'){
                            document.getElementById('nameDetailsWrite').value = ''
                            document.getElementById('nameDetailsWrite').style.color = 'black'
                        }
                    })
                    document.getElementById('nameDetailsWrite2').addEventListener('focus',() =>{
                        if(document.getElementById('nameDetailsWrite2').value === 'Teléfono'){
                            document.getElementById('nameDetailsWrite2').value = ''
                            document.getElementById('nameDetailsWrite2').style.color = 'black'
                        }
                    })
                    document.getElementById('nameDetailsWrite3').addEventListener('focus',() =>{
                        if(document.getElementById('nameDetailsWrite3').value === 'Nombre'){
                            document.getElementById('nameDetailsWrite3').value = ''
                            document.getElementById('nameDetailsWrite3').style.color = 'black'
                        }
                    })
                    document.getElementById('nameDetailsWrite4').addEventListener('focus',() =>{
                        if(document.getElementById('nameDetailsWrite4').value === 'Correo'){
                            document.getElementById('nameDetailsWrite4').value = ''
                            document.getElementById('nameDetailsWrite4').style.color = 'black'
                        }
                    })

                    //Vuelve al texto predeterminado si el usuario sale del input
                    document.getElementById('nameDetailsWrite').addEventListener('blur',()=>{
                        if(document.getElementById('nameDetailsWrite').value === ''){
                            document.getElementById('nameDetailsWrite').value = 'Documento'
                            document.getElementById('nameDetailsWrite').style.color = 'gray'
                        }                       
                    })
                    document.getElementById('nameDetailsWrite2').addEventListener('blur',()=>{
                        if(document.getElementById('nameDetailsWrite2').value === ''){
                            document.getElementById('nameDetailsWrite2').value = 'Teléfono'
                            document.getElementById('nameDetailsWrite2').style.color = 'gray'
                        }                       
                    })
                    document.getElementById('nameDetailsWrite3').addEventListener('blur',()=>{
                        if(document.getElementById('nameDetailsWrite3').value === ''){
                            document.getElementById('nameDetailsWrite3').value = 'Nombre'
                            document.getElementById('nameDetailsWrite3').style.color = 'gray'
                        }                       
                    })
                    document.getElementById('nameDetailsWrite4').addEventListener('blur',()=>{
                        if(document.getElementById('nameDetailsWrite4').value === ''){
                            document.getElementById('nameDetailsWrite4').value = 'Correo'
                            document.getElementById('nameDetailsWrite4').style.color = 'gray'
                        }                       
                    })
            //TEXTO DE INPUTS


        //PRIMERA PANTALLA

        //SEGUNDA PANTALLA


        //SEGUNDA PANTALLA

    //FACTURACION

// MAIN