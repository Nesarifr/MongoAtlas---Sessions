
Swal.fire({
        title: 'Loguearse con nombre:',
        html: `<input type="text" id="nombre" class="swal2-input" placeholder="Nombre">`,
        confirmButtonText: 'Iniciar',
        focusConfirm: false,
        preConfirm: () => {
            const nombre = Swal.getPopup().querySelector('#nombre').value;
            if ( !nombre ) {
                Swal.showValidationMessage(`Pro favor complete el formulario`);
            }
            return { nombre }
        },
        allowOutsideClick: false
    }).then((result) => {
        user = result.value;
        return fetch(`?user=${user.nombre}`,{
            method: 'GET',
        })
}).then(
    (response)=> location.reload()
);
