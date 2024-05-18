
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
            document.getElementById('warningFirstBill').innerText = ''
            nameDetailsWrite.value = 'Documento', nameDetailsWrite.style.color = 'grey'
            nameDetailsWrite2.value = 'Teléfono', nameDetailsWrite2.style.color = 'grey'
            nameDetailsWrite3.value = 'Nombre', nameDetailsWrite3.style.color = 'grey'
            nameDetailsWrite4.value = 'Correo', nameDetailsWrite4.style.color = 'grey'
    })

// HEADER

// MAIN

    //FACTURACION

        //PRIMERA PANTALLA
            let nameDetailsWrite = document.getElementById('nameDetailsWrite') ,nameDetailsWrite2 = document.getElementById('nameDetailsWrite2') , nameDetailsWrite3 = document.getElementById('nameDetailsWrite3') ,nameDetailsWrite4 = document.getElementById('nameDetailsWrite4')

            document.getElementById('detailsButton').addEventListener('click',() =>{
                
                if(nameDetailsWrite.value !== 'Documento' && nameDetailsWrite2.value !== 'Teléfono' && nameDetailsWrite3.value !== 'Nombre' && nameDetailsWrite4.ariaValueMin !== 'Correo'){// ----> Verifica si se escribio o no 
                    //DESBLOKEAR FACTURACION
                        document.getElementById('firstBill').style.display = 'none'
                        document.getElementById('secondBill').style.opacity = '1'
                        document.getElementById('secondBill').style.pointerEvents = 'auto'
                    //DESBLOKEAR FACTURACION

                    //MOSTRAR DATOS USUARIO
                        document.getElementById('documentBill').innerText = nameDetailsWrite.value
                        document.getElementById('phoneBill').innerText = nameDetailsWrite2.value
                        document.getElementById('nameBill').innerText = nameDetailsWrite3.value
                        document.getElementById('adressBill').innerText = nameDetailsWrite4.value
                    //MOSTRAR DATOS USUARIO 
                    document.getElementById('warningFirstBill').innerText = ''
                } else{ document.getElementById('warningFirstBill').innerText = 'Verifique que los campos esten correctos'

                }
            })

            //TEXTO DE INPUTS

                    //Elimina el texto predeterminado si el usuario hace click
                    nameDetailsWrite.addEventListener('focus',() =>{
                        if(nameDetailsWrite.value === 'Documento'){
                            nameDetailsWrite.value = ''
                            nameDetailsWrite.style.color = 'black'
                        }
                    })
                    nameDetailsWrite2.addEventListener('focus',() =>{
                        if(nameDetailsWrite2.value === 'Teléfono'){
                            nameDetailsWrite2.value = ''
                            nameDetailsWrite2.style.color = 'black'
                        }
                    })
                    nameDetailsWrite3.addEventListener('focus',() =>{
                        if(nameDetailsWrite3.value === 'Nombre'){
                            nameDetailsWrite3.value = ''
                            nameDetailsWrite3.style.color = 'black'
                        }
                    })
                    nameDetailsWrite4.addEventListener('focus',() =>{
                        if(nameDetailsWrite4.value === 'Correo'){
                            nameDetailsWrite4.value = ''
                            nameDetailsWrite4.style.color = 'black'
                        }
                    })

                    //Vuelve al texto predeterminado si el usuario sale del input
                    nameDetailsWrite.addEventListener('blur',()=>{
                        if(nameDetailsWrite.value === ''){
                            nameDetailsWrite.value = 'Documento'
                            nameDetailsWrite.style.color = 'gray'
                        }                       
                    })
                    nameDetailsWrite2.addEventListener('blur',()=>{
                        if(nameDetailsWrite2.value === ''){
                            nameDetailsWrite2.value = 'Teléfono'
                            nameDetailsWrite2.style.color = 'gray'
                        }                       
                    })
                    nameDetailsWrite3.addEventListener('blur',()=>{
                        if(nameDetailsWrite3.value === ''){
                            nameDetailsWrite3.value = 'Nombre'
                            nameDetailsWrite3.style.color = 'gray'
                        }                       
                    })
                    nameDetailsWrite4.addEventListener('blur',()=>{
                        if(nameDetailsWrite4.value === ''){
                            nameDetailsWrite4.value = 'Correo'
                            nameDetailsWrite4.style.color = 'gray'
                        }                       
                    })
            //TEXTO DE INPUTS


        //PRIMERA PANTALLA

        //SEGUNDA PANTALLA


        //SEGUNDA PANTALLA

    //FACTURACION

// MAIN