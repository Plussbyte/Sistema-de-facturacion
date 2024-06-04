// MAIN
import { closeScreenSecond } from './utils.js' // <---------- Cierra la segunda y la tercera pantalla
import { openScreenSecond} from './utils.js' // <---------- Abre la segunda y la tercera pantalla

export function finalUser(){ //<----------- Boton de usuario final 
    document.getElementById('finalUser').addEventListener('click',()=>{
        // Desblokea la segunda y tercera pantalla y quita la primera
            document.getElementById('firstBill').style.display = 'none'
            document.getElementById('secondBill').style.opacity = '1'
            document.getElementById('secondBill').style.pointerEvents = 'auto'
            document.getElementById('record').style.opacity = '1'
            document.getElementById('record').style.pointerEvents = 'auto'

        // Desblokea la segunda y tercera pantalla y quita la primera
            document.getElementById('documentBill').innerText = '2222222222'
            document.getElementById('phoneBill').innerText = '0000000000'
            document.getElementById('nameBill').innerText = 'Cliente final'
            document.getElementById('adressBill').innerText = 'correo@gmail.com'
    })
}

export function center(){ //<----------- Contiene todo el centro de la pagina

    //FACTURACION
            //PRIMERA PANTALLA
                //PANTALLA DATOS CLIENTE
                    // Boton para llenar los datos de clientes (Boton Aceptar)      
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

                        //Elimina el texto predeterminado en documento,nombre etc... si el usuario hace click
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
                        }, 500)                    
                    })

                    document.getElementById('buttonReturn').addEventListener('click', ()=>{
                        clientScreen.style.display = 'initial'
                        setTimeout(() => {
                            clientScreen.style.right = '0'
                            printBill.style.left = '460px'
                        }, 100);
                        setTimeout(()=>{
                            printBill.style.display = 'none'
                        }, 500)
                    })

                // IMPRIMIR FACTURAS PANTALLA 

            //PRIMERA PANTALLA
}

export function secondScreenBill(){ // <---------- Logica segunda pantalla de factura
    //Boton final de factura (Boton Facturar)
        document.getElementById('finalInvoiceButton').addEventListener('click',()=>{
            document.getElementById('fourScreen').style.display = 'flex'
            //Cierra la segunda y la tercera pantalla
                closeScreenSecond()
        })

    //Logica de botones posfacturas
        //Boton varios metodos de pago
            document.getElementById('several').addEventListener('click',()=>{

                hover('cash',1)
                hover('transfer',1)
                hover('card',1)
                hover('several',1)

                document.getElementById('contentTextWriteSeveral').style.display = 'flex'
                document.getElementById('contentButtonSeveral').style.display = 'flex'

                document.getElementById('textValue').innerText = 'Efectivo:'
                document.getElementById('textValue').style.margin = '0 .5em 0 0'

                document.getElementById('textCTC1').style.borderColor = 'grey'
                document.getElementById('cash').style.borderColor = 'grey'
                document.getElementById('cash').style.pointerEvents = 'none'
                
                document.getElementById('textCTC2').style.borderColor = 'grey'
                document.getElementById('transfer').style.borderColor = 'grey'
                document.getElementById('transfer').style.pointerEvents = 'none'

                document.getElementById('textCTC3').style.borderColor = 'grey'
                document.getElementById('card').style.borderColor = 'grey'
                document.getElementById('card').style.pointerEvents = 'none'

                document.getElementById('textCTC4').style.borderColor = 'grey'
                document.getElementById('several').style.borderColor = 'grey'
                document.getElementById('several').style.pointerEvents = 'none'

            })
        //Boton Volver medios de pago
            function hover(ID,color){
                let name = document.getElementById(ID)
                if(color === 1){ 
                    name.addEventListener('mouseover',()=>{
                        name.style.borderColor = 'gray'
                    })

                    name.addEventListener('mouseout',()=>{
                        name.style.borderColor = 'gray'
                    })

                }else{
                    name.addEventListener('mouseover',()=>{
                        name.style.borderColor = 'Black'
                    })

                    name.addEventListener('mouseout',()=>{
                        name.style.borderColor = color
                    })
                }
            }

            document.getElementById('buttonReturnSeveral').addEventListener('click',()=>{

                document.getElementById('contentTextWriteSeveral').style.display = 'none'
                document.getElementById('contentButtonSeveral').style.display = 'none'

                document.getElementById('textValue').innerText = 'Valor:'

                document.getElementById('textCTC1').style.borderColor = 'rgb(21, 255, 0)'
                document.getElementById('cash').style.borderColor = 'rgb(21, 255, 0)'
                document.getElementById('cash').style.pointerEvents = 'auto'

                document.getElementById('textCTC2').style.borderColor = 'rgb(111, 0, 255)'
                document.getElementById('transfer').style.borderColor = 'rgb(111, 0, 255)'
                document.getElementById('transfer').style.pointerEvents = 'auto'

                document.getElementById('textCTC3').style.borderColor = 'rgb(255, 251, 0)'
                document.getElementById('card').style.borderColor = 'rgb(255, 251, 0)'
                document.getElementById('card').style.pointerEvents = 'auto'

                document.getElementById('textCTC4').style.borderColor = 'rgb(4, 0, 255)'
                document.getElementById('several').style.borderColor = 'rgb(4, 0, 255)'
                document.getElementById('several').style.pointerEvents = 'auto'

                hover('cash','rgb(21, 255, 0)')
                hover('transfer','rgb(111, 0, 255)')
                hover('card','rgb(255, 251, 0)')
                hover('several','rgb(4, 0, 255)')
            })

            // Logica del boton [ aceptar ] medios de pago
                document.getElementById('buttonSeveral').addEventListener('click',()=>{
                    document.getElementById('buttonReturnSeveral').click()
                    document.getElementById('loadingScreenBill').style.display = 'flex'
                    document.getElementById('secondBill').style.opacity = '0.5'
                    document.getElementById('secondBill').style.pointerEvents = 'none'
                    document.getElementById('record').style.opacity = '0.5'
                    document.getElementById('record').style.pointerEvents = 'none'
                    document.getElementById('fourScreen').style.display = 'none'
                    setTimeout(() => {
                        
                        document.getElementById('loadingScreenBill').style.display = 'none'
        
                        //Elimina los datos anteriores para nueva factura
                            document.getElementById('documentBill').innerText =''
                            document.getElementById('phoneBill').innerText = ''
                            document.getElementById('nameBill').innerText = ''
                            document.getElementById('adressBill').innerText = ''
                        //Cierra la segunda y la tercera pantalla
                            closeScreenSecond()
                                    
                        //Abre la primera pantalla
                            document.getElementById('firstBill').style.display = 'initial'
                    }, 2000);
                })

            // Logica boton [ efectivo ]
                document.getElementById('cash').addEventListener('click',()=>{
                    document.getElementById('loadingScreenBill').style.display = 'flex'
                    document.getElementById('secondBill').style.opacity = '0.5'
                    document.getElementById('secondBill').style.pointerEvents = 'none'
                    document.getElementById('record').style.opacity = '0.5'
                    document.getElementById('record').style.pointerEvents = 'none'
                    document.getElementById('fourScreen').style.display = 'none'
                    setTimeout(() => {
                        document.getElementById('loadingScreenBill').style.display = 'none'
                        //Elimina los datos anteriores para nueva factura
                            document.getElementById('documentBill').innerText =''
                            document.getElementById('phoneBill').innerText = ''
                            document.getElementById('nameBill').innerText = ''
                            document.getElementById('adressBill').innerText = ''
                        //Cierra la segunda y la tercera pantalla
                            closeScreenSecond()
                                    
                        //Abre la primera pantalla
                            document.getElementById('firstBill').style.display = 'initial'
                    }, 2000);
                })

            // Logica boton [ transferencia ]
                document.getElementById('transfer').addEventListener('click',()=>{
                    document.getElementById('loadingScreenBill').style.display = 'flex'
                    document.getElementById('secondBill').style.opacity = '0.5'
                    document.getElementById('secondBill').style.pointerEvents = 'none'
                    document.getElementById('record').style.opacity = '0.5'
                    document.getElementById('record').style.pointerEvents = 'none'
                    document.getElementById('fourScreen').style.display = 'none'
                    setTimeout(() => {
                        document.getElementById('loadingScreenBill').style.display = 'none'
                        //Elimina los datos anteriores para nueva factura
                            document.getElementById('documentBill').innerText =''
                            document.getElementById('phoneBill').innerText = ''
                            document.getElementById('nameBill').innerText = ''
                            document.getElementById('adressBill').innerText = ''
                        //Cierra la segunda y la tercera pantalla
                            closeScreenSecond()
                                    
                        //Abre la primera pantalla
                            document.getElementById('firstBill').style.display = 'initial'
                    }, 2000);
                })

            // Logica boton [ tarjeta ]
                document.getElementById('card').addEventListener('click',()=>{
                    document.getElementById('loadingScreenBill').style.display = 'flex'
                    document.getElementById('secondBill').style.opacity = '0.5'
                    document.getElementById('secondBill').style.pointerEvents = 'none'
                    document.getElementById('record').style.opacity = '0.5'
                    document.getElementById('record').style.pointerEvents = 'none'
                    document.getElementById('fourScreen').style.display = 'none'
                    setTimeout(() => {
                        document.getElementById('loadingScreenBill').style.display = 'none'
                        //Elimina los datos anteriores para nueva factura
                            document.getElementById('documentBill').innerText =''
                            document.getElementById('phoneBill').innerText = ''
                            document.getElementById('nameBill').innerText = ''
                            document.getElementById('adressBill').innerText = ''
                        //Cierra la segunda y la tercera pantalla
                            closeScreenSecond()
                                    
                        //Abre la primera pantalla
                            document.getElementById('firstBill').style.display = 'initial'
                    }, 2000);
                })
            // Logica boton [ Cancelar ]
                document.getElementById('cancelCTC').addEventListener('click',()=>{
                    document.getElementById('fourScreen').style.display = 'none'
                    document.getElementById('buttonReturnSeveral').click()
                    openScreenSecond()
                })

                
}

//FACTURACION
export function invetory(){ // <---------- Logica del invetario
        document.getElementById('inventoryButton').addEventListener('click',()=>{
            document.getElementById('billing').style.display = 'none'
        })
}
// MAIN