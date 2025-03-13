function cambia_seccion ( num_boto )  { 
    const menu = documento. getElementById ( "menu" ) ; 
    const num_botons = menú. children . length ;     // el número de botones dentro del elemento "menu" 
    for  ( let i =  1 ; y < num_botons ; i ++ )  { 
        let boto = documento. getElementById ( "boto_"  + y ) ; 
        let seccion = documento. getElementById ( "sección_"  + y ) ; 
        if  ( y == num_boto )  { 
            boto. style . color  =  "#950E17" ;     // se destaca la sección activa con el cambio de colores del botón correspondiente 
            boton. style . backgroundColor  =  "#FCDEE0" ; 
            seccion. style . display  =  "flex" ;     // se hace visible la sección activa 
        } 
        else  { 
            boto. style . color  =  "white" ;     // colores de los botones de secciones inactivas 
            boto. style . backgroundColor  =  "#950E17" ; 
            seccion. style . display  =  "none" ;     // se ocultan las secciones inactivas 
        } 
    } 
}
let validado =  false ;     //variable que permite saber si hay algún usuario validado 
el nombre , contraseña ; 
let scriptURL =  "https://script.google.com/macros/s/AKfycbz6-f_B-QvLYFZCzovO61BlwW-B0c6ZsZ3YL6caSsOGmyJhuM63K7zLcldnWBEIM5sN/exec"     // se debe sustituir la cadena de texto por la URL del script
 
function inicio_sessio ( )  { 
    nombre = documento. getElementById ( "nombre_usuario" ) . value ;     // la propiedad "value" de un cuadro de texto corresponde al texto escrito por el usuario 
    contraseña = documento. getElementById ( "contraseña" ) . value ; 
    let consulta = scriptURL +  "?query=select&where=usuario&is="  + nombre +  "&and=contraseña&equal="  + contraseña ; 
    fetch ( consulta ) 
        . then ( ( respuesta )  =>  {    // registros que contienen el nombre de usuario y contraseña escritos por el usuario 
            return respuesta. json ( ) ;     // conversión a lista 
        } ) 
        . then ( ( respuesta )  =>  { 
            if ( respuesta. length  ==  0 )  {     // lista vacía 
                window. alert ( "El nombre de usuario o la contraseña no son correctos." ) ; 
            } 
            else  {     // lista con (al menos) un registro 
                window. alert ( "se ha iniciado correctamente la sesión." ; ' ; ; " 
                inicia_sessio " } } ) ; }    
                    function inicia_sessio ( )  { 
    validado =  true ;     // usuario validado 
    documento. getElementById ( "seccion_0" ) . style . display  =  "none" ;     // se oculta la sección de validación de usuarios 
    cambia_seccion ( 1 ) ;     // se muestra la sección 1 
}
function nuevo_usuario ( )  { 
    nombre = documento. getElementById ( "nombre_usuario" ) . value ; 
    contraseña = documento. getElementById ( "contraseña" ) . value ; 
    let consulta_1 = scriptURL +  "?query=select&where=usuario&is="  + nombre ;     // primera consulta para saber si ya existe algún usuario con el nombre escrito por el usuario que se desea registrar 
    fetch ( consulta_1 ) 
        . then ( ( respuesta )  =>  { 
            return respuesta. json ( ) ; 
        } ) 
        . then ( ( respuesta )  =>  { 
            if ( respuesta. length  ==  0 )  {     // No hay ningún otro usuario con el mismo nombre let consulta_2 = 
                scriptURL + " ?  query=insert&values="  + nombre + "  $$"  + contraseña ;     // segunda consulta para registrar el usuario nuevo fetch 
                ( consulta_2 ) { . 
                    en la base de datos window . 
                            alert ( " Se ha completado el registro de usuario." ) inicia_sessio 
                            ( ) ; } else { // no se ha podido añadir un registro en 
                la base de datos 
                            alert ( " Se ha producido un error en el registro de usuario." ) } ) } lose { a el usuario ; } } ; }  
                              
            function cierre_sessio ( )  { 
    if  ( validado )  { 
        if  ( confirmo ( "¿Quieres cerrar la sesión?" ) )  {     // Se ha respondido "Sí" 
            storage. setItem ( "usuario" ,  "" ) ; 
            alquiler. reload ( ) ;     // recarga de la página, se reinicializan todas las variables 
        } 
    } 
}            
                             
                        
                    
             
                 
            
        

            
            
