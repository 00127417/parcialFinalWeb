window.onload = () => {
    app.init();

}

let app = {

    init: function () {
        this.addEvent();
        this.loadContent();
    },

    addEvent: function () {
        document.formMain.addEventListener('submit', function (event) {
            this.submit(event, this.addRow);
        })
    },

    addRow: function (data) {
        
        let body = document.getElementsByClassName('autos')[0];
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${data.nombre}</td>
            <td>${data.nombre}</td>
            <td>${data.uv}</td>
          <td>${data.descripcion}</td>
          <td>
            <a class="update">update</a>
            <a class="delete">delete</a>
          </td>
        `;
        tr.document.getElementsByClassName('update')[0].addEventListener('click', function (event) {
            this.update(tr, body, data);
        });
        tr.document.getElementsByClassName('delete')[0].addEventListener('click', function (event) {
            this.delete(event, tr, body, data);
        })
    },

    update: function (tr, tbody, data) {
        tr.innerHTML = `
        <td colspan="3">
        <form action="/autos">
             <input type="text" name="nombre" value="${data.nombre}">
             <input type="text" name="uv" value="${data.uv}">
             <input type="text" name="descripcion" value="${data.descripcion}">
             <input type="submit" value="actualizar">
        </form>
        </td>
        `;
        let formu = tr.document.getElementByTagName('form');

        let update = this.update;
        let borrar = this.delete;

        formu.addEventListener('submit', function (event) {
            event.preventDefault();
            let datos = {
                nombre: formu.nombre.value,
                uv: formu.nombre.value,
                descripcion: formu.descripcion.value
            }

            fetch('/autos' + data._id, {
                method: 'PUT',
                body: JSON.stringify(datos),
                headers: { 'Content-Type': 'application/json' }
            })
                .then(res => res.json())
                .then(resData => {
                    if (resData.ok) {
                        let tr = document.createElement('tr');
                        tr.innerHTML = `
                            <td>${resData.nombre}</td>
                            <td>${resData.nombre}</td>
                            <td>${resData.uv}</td>
                            <td>${resData.descripcion}</td>
                            <td>
                                <a class="update">update</a>
                                <a class="delete">delete</a>
                            </td>
                        `;
                    }else{
                        document.getElementsByClassName('error')[0].innerHTML='no se pudo actualizar';
                    }
                });
        });

    },

    delete: function (event, tr, tbody, data) {
        event.preventDefault();
        fetch('/autos' + data._id, {
            method: 'DELETE'})
            .then(res => res.json())
            .then(resData => {
                if (resData.ok) {
                    tbody.removeChild(tr);
                }else{
                    document.getElementsByClassName('error')[0].innerHTML='no se pudo eliminar';
                }
            });
    },

    submit: (event,addRow) => {
        event.preventDefault();
        let datos ={
            nombre: fromMain.nombre.value,
            uv: formMain.uv.value,
            descripcion: fromMain.descripcion.value
        }
        fetch('/',{
            method: 'POST',
            body: JSON.stringify(datos),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
            .then(data=>{
                if(data.ok){
                    addRow(data);
                }else{
                    document.getElementsByClassName('error')[0].innerHTML='no se pudo agreagar';
                }
            });

    },
    loadContent: function () {
        fetch('/')
        .then(res => res.json())
            .then(data=>{
                if(data.ok){
                    data.autos.forEach(element=>{
                        this.addRow(element);
                    });
                    
                }
            });
    }
}