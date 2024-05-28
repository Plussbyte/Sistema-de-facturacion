export function center(){
    // MAIN
        //FACTURACION
            //PRIMERA PANTALLA
                //PANTALLA DATOS CLIENTE      
                document.getElementById('detailsButton').addEventListener('click',() =>{
                    console.log('Button clicked')
                    //RESTRINGIR INPUTS
                        let nameDetailsWrite = document.getElementById('nameDetailsWrite') ,nameDetailsWrite2 = document.getElementById('nameDetailsWrite2') , nameDetailsWrite3 = document.getElementById('nameDetailsWrite3') ,nameDetailsWrite4 = document.getElementById('nameDetailsWrite4')
                        let arrayTextNameDetailsWrite = nameDetailsWrite.value.split("").concat(nameDetailsWrite2.value.split(""))
                        let arrayTextNameDetailsWrite2 = nameDetailsWrite3.value.split("")
                        console.log(arrayTextNameDetailsWrite2)
                        let iterador = 0 , iterador2 = 0, lock = 0

                            // Bucle que determina si hay numeros o letras en el arreglo
                            for(let i = 0;i<arrayTextNameDetailsWrite.length;i++){  // En este caso permite numeros 
                                for(let a = 0;a<=9;a++){
                                    if(arrayTextNameDetailsWrite[i] == a){
                                        iterador++
                                    }
                                }
                            }
                                        
                            for(let i = 0;i<arrayTextNameDetailsWrite2.length;i++){ // En este caso permite letras
                                for(let a = 0;a<=9;a++){
                                    if(arrayTextNameDetailsWrite2[i] == a){
                                        if(arrayTextNameDetailsWrite2[i] !== ' '){ //Arregla el problema de 0 = ' ':true
                                            iterador2++
                                        }                                    
                                    }
                                }
                            }
                            console.log(iterador2)
                            // Bucle que determina si hay numeros o letras en el arreglo
                        
                        if(arrayTextNameDetailsWrite.length === iterador && iterador2 === 0){
                            lock = 0
                        } else if(arrayTextNameDetailsWrite.length !== iterador){
                            lock = 1
                        } else if(iterador2 > 0){
                            lock = 2
                        } else {
                        
                        }
                    
                    //RESTRINGIR INPUTS
                    if(nameDetailsWrite.value !== 'Documento' && nameDetailsWrite2.value !== 'Teléfono' && nameDetailsWrite3.value !== 'Nombre' && nameDetailsWrite4.ariaValueMin !== 'Correo' && lock === 0){// ----> Verifica todos los inputs
                        //DESBLOKEAR FACTURACION
                            document.getElementById('firstBill').style.display = 'none'
                            document.getElementById('secondBill').style.opacity = '1'
                            document.getElementById('secondBill').style.pointerEvents = 'auto'
                            document.getElementById('record').style.opacity = '1'
                            document.getElementById('record').style.pointerEvents = 'auto'

                        //DESBLOKEAR FACTURACION

                        //MOSTRAR DATOS USUARIO
                            document.getElementById('documentBill').innerText = nameDetailsWrite.value
                            document.getElementById('phoneBill').innerText = nameDetailsWrite2.value
                            document.getElementById('nameBill').innerText = nameDetailsWrite3.value
                            document.getElementById('adressBill').innerText = nameDetailsWrite4.value
                        //MOSTRAR DATOS USUARIO 

                        document.getElementById('warningFirstBill').innerText = ''
                    }else if(lock === 1){
                        document.getElementById('warningFirstBill').innerText = 'Verifique que el documento y el teléfono contengan numeros'
                    }else if(lock === 2){
                        document.getElementById('warningFirstBill').innerText = 'Verifique que el nombre no contenga numeros'
                    }else if(lock === 3){
                        document.getElementById('warningFirstBill').innerText = 'Error'
                    } else{ document.getElementById('warningFirstBill').innerText = 'Verifique que los campos esten completos'

                    }

                    document.getElementById('warningFirstBill').classList.add('newClassWarning')
                    setTimeout(() => {
                        document.getElementById('warningFirstBill').classList.remove('newClassWarning')
                    }, 500);

                    /* Pruebas --------------
                        document.getElementById('firstBill').style.display = 'none'
                        document.getElementById('secondBill').style.opacity = '1'
                        document.getElementById('secondBill').style.pointerEvents = 'auto'
                        document.getElementById('record').style.opacity = '1'
                        document.getElementById('record').style.pointerEvents = 'auto'
                    // Pruebas --------------*/
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
                    
                //PANTALLA DATOS CLIENTE
                
                // IMPRIMIR FACTURAS PANTALLA

                    let clientScreen = document.getElementById('detailsContent')
                    let printBill = document.getElementById('printBill')

                    document.getElementById('copyBillButton').addEventListener('click',()=>{
                        printBill.style.display = 'initial'
                        setTimeout(()=>{
                            clientScreen.style.right = '450px'
                            printBill.style.left = '0'
                        }, 100)
                        setTimeout(()=>{
                            clientScreen.style.display = 'none'
                        }, 600)                    
                    })

                    document.getElementById('buttonReturn').addEventListener('click', ()=>{
                        clientScreen.style.display = 'initial'
                        setTimeout(() => {
                            clientScreen.style.right = '0'
                            printBill.style.left = '460px'
                        }, 100);
                        setTimeout(()=>{
                            printBill.style.display = 'none'
                        }, 600)
                    })

                // IMPRIMIR FACTURAS PANTALLA 

            //PRIMERA PANTALLA

            //SEGUNDA PANTALLA
                //Boton final de factura (Boton Facturar)
                    document.getElementById('finalInvoiceButton').addEventListener('click',()=>{
                        document.getElementById('loadingScreenBill').style.display = 'flex'
                        document.getElementById('secondBill').style.opacity = '0.5'
                        document.getElementById('secondBill').style.pointerEvents = 'none'
                        document.getElementById('record').style.opacity = '0.5'
                        document.getElementById('record').style.pointerEvents = 'none'
                        setTimeout(() => {
                            document.getElementById('loadingScreenBill').style.display = 'none'
                            document.getElementById('secondBill').style.opacity = '1'
                            document.getElementById('secondBill').style.pointerEvents = 'auto'
                            document.getElementById('record').style.opacity = '1'
                            document.getElementById('record').style.pointerEvents = 'auto'
                        }, 2000);
                    })
                //Boton final de factura (Boton Facturar)
            //SEGUNDA PANTALLA
        //FACTURACION
    // MAIN
}