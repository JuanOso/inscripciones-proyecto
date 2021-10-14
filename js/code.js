/* var nombreDelegado = document.getElementById('nombre_delegado')
var telefonoDelegado = document.getElementById('telefono_delegado')
var emailDelegado = document.getElementById('email_delegado')
var nombreEquipo = document.getElementById('nombre_equipo')
var modalidadTorneo = document.getElementById('torneo_modalidad') */


function guardar_data () {
    debugger
    let ref_data = 1;
    if (localStorage.getItem('referencia') == null) {
        localStorage.setItem('referencia', ref_data)
    } else {
        ref_data = localStorage.getItem('referencia')
    }

    var nombre = document.getElementById('nombre_delegado').value
    var telefono = document.getElementById('telefono_delegado').value
    var email = document.getElementById('email_delegado').value
    var equipo = document.getElementById('nombre_equipo').value
    var Torneo = document.getElementById('torneo_modalidad').value

    localStorage.setItem("nombre_" + ref_data, nombre)
    localStorage.setItem("telefono_" + ref_data, telefono)
    localStorage.setItem("email_" + ref_data, email)
    localStorage.setItem("Equipo_" + ref_data, equipo)
    localStorage.setItem("Modalidad_" + ref_data, Torneo)
    
    ref_data = parseInt(ref_data) +1
    localStorage.setItem('referencia', ref_data)

   // let ref_actual = ref_data - 1
   // listado_data(ref_actual)

}

function guardar_data_jugador () {
    //debugger
    let ref_data = 1;
    if (localStorage.getItem('jugador') == null) {
        localStorage.setItem('jugador', ref_data)
    } else {
        ref_data = localStorage.getItem('jugador')
    }

    var dorsal = document.getElementById('dorsal_jugador').value
    var cedula = document.getElementById('cedula_jugador').value
    var nombreJ = document.getElementById('nombre_jugador').value
    var telefonoJ = document.getElementById('telefono_jugador').value

    localStorage.setItem("dorsal_jugador_" + ref_data, dorsal)
    localStorage.setItem("cedula_jugador_" + ref_data, cedula)
    localStorage.setItem("nombre_jugador_" + ref_data, nombreJ)
    localStorage.setItem("telefono_jugador_" + ref_data, telefonoJ)
    
    ref_data = parseInt(ref_data) +1
    localStorage.setItem('jugador', ref_data)

    let ref_actual = ref_data - 1
    listado_data(ref_actual)

}

function listado_data (ref_actual = 1, actualiza_tabla = false) {

    let body_tabla = document.querySelector("#data-usuario-read")
    let titulo_formulario = document.querySelector('#titulo_accion_formulario')
    titulo_formulario.innerHTML = 'Añadir nuevo jugador'
    if (actualiza_tabla) {
        let ref_futura = localStorage.getItem('jugador')
        for (let x = 1; x < ref_futura; x++) {
            body_tabla.innerHTML += `
            <tr>
                <td>${localStorage.getItem('dorsal_jugador_' + x)}</td>
                <td>${localStorage.getItem('cedula_jugador_' + x)}</td>
                <td>${localStorage.getItem('nombre_jugador_' + x)}</td>
                <td>${localStorage.getItem('telefono_jugador_' + x)}</td>
                <td>
                    <i class="fas fa-pen mx-2" onclick="editar_elemento(${x})"></i>
                    <i class="fas fa-trash mx-2" onclick="borrar_elemento()"></i>
                </td>
            </tr>
            `
        }
    } else {
        body_tabla.innerHTML += `
        <tr>
            <td>${localStorage.getItem('dorsal_jugador_' + ref_actual)}</td>
            <td>${localStorage.getItem('cedula_jugador_' + ref_actual)}</td>
            <td>${localStorage.getItem('nombre_jugador_' + ref_actual)}</td>
            <td>${localStorage.getItem('telefono_jugador_' + ref_actual)}</td>
            <td>
                <i class="fas fa-pen mx-2" onclick="editar_elemento(${ref_actual})"></i>
                <i class="fas fa-trash mx-2" onclick="borrar_elemento()"></i>
            </td>
        </tr>
        `
    }
}

//para que este llamado?..
listado_data(1, true)