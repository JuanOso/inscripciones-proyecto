var dorsal = document.getElementById('dorsal_jugador')
var cedula = document.getElementById('cedula_jugador')
var nombreJ = document.getElementById('nombre_jugador')
var telefonoJ = document.getElementById('telefono_jugador')


function guardar_data () {
    //debugger
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

    localStorage.setItem("nombre_del_" + ref_data, nombre)
    localStorage.setItem("telefono_del_" + ref_data, telefono)
    localStorage.setItem("email_del" + ref_data, email)
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

    let dorsal = document.getElementById('dorsal_jugador').value
    let cedula = document.getElementById('cedula_jugador').value
    let nombreJ = document.getElementById('nombre_jugador').value
    let telefonoJ = document.getElementById('telefono_jugador').value

    localStorage.setItem("dorsal_jugador_" + ref_data, dorsal)
    localStorage.setItem("cedula_jugador_" + ref_data, cedula)
    localStorage.setItem("nombre_jugador_" + ref_data, nombreJ)
    localStorage.setItem("telefono_jugador_" + ref_data, telefonoJ)
    
    ref_data = parseInt(ref_data) +1
    localStorage.setItem('jugador', ref_data)

    let ref_actual = ref_data - 1
    listado_data(ref_actual)
    document.getElementById("mi_formulario").reset()

}

function listado_data (ref_actual = 1, actualiza_tabla = false) {
    //debugger
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
                <i class="fas fa-trash mx-2" onclick="borrar_elemento(${x})"></i>
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
            <i class="fas fa-trash mx-2" onclick="borrar_elemento(${ref_actual})"></i>
            </td>
        </tr>
        `
    }
}

//para que este llamado?..
listado_data(1, true)

function editar_elemento(ref) {
    let boton = document.getElementById("boton_formulario")
    boton.innerHTML = 'Actualizar'
    boton.setAttribute('onclick', `confirmar_edicion(${ref})`)
    console.log(ref)
    let titulo_formulario = document.querySelector("#titulo_accion_formulario")
    titulo_formulario.innerHTML = `Actualizar datos`

    dorsal.value = localStorage.getItem("dorsal_jugador_" + ref)
    cedula.value = localStorage.getItem("cedula_jugador_" + ref)
    nombreJ.value = localStorage.getItem("nombre_jugador_" + ref)
    telefonoJ.value = localStorage.getItem("telefono_jugador_" + ref)

    console.log(dorsal.value + cedula.value + nombreJ.value + telefonoJ.value)

}


function confirmar_edicion (ref) {
    var dorsalUpdate = document.getElementById('dorsal_jugador').value
    var cedulaUpdate = document.getElementById('cedula_jugador').value
    var nombreUpdate = document.getElementById('nombre_jugador').value
    var telefonoUpdate = document.getElementById('telefono_jugador').value

    localStorage.setItem("dorsal_jugador_" + ref, dorsalUpdate)
    localStorage.setItem("cedula_jugador_" + ref, cedulaUpdate)
    localStorage.setItem("nombre_jugador_" + ref, nombreUpdate)
    localStorage.setItem("telefono_jugador_" + ref, telefonoUpdate)

    let body_tabla = document.querySelector("#data-usuario-read")
    body_tabla.innerHTML = ''

    listado_data(1, true)

    let boton = document.getElementById("boton_formulario")
    boton.setAttribute('onclick', `guardar_data_jugador()`)

    document.getElementById("mi_formulario").reset()
    boton.innerHTML = 'Añadir'
    
}

function borrar_elemento (ref) {
    Swal.fire({
        title: 'Estás seguro?',
        text: "No podrás revertir esta acción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminarlo!'
      }).then((result) => {
        if (result.isConfirmed) {

            localStorage.removeItem('dorsal_jugador_' + ref)
            localStorage.removeItem('cedula_jugador_' + ref)
            localStorage.removeItem('nombre_jugador_' + ref)
            localStorage.removeItem('telefono_jugador_' + ref)
            let disminuir = localStorage.getItem('jugador')
            disminuir--
            localStorage.setItem('jugador', disminuir)
            let body_tabla = document.getElementById("data-usuario-read")
            body_tabla.innerHTML = '' 
            listado_data(1, true)

          Swal.fire(
            'Eliminado!',
            'El registo fue borrado',
            'success'
          )
        }
      })

}

