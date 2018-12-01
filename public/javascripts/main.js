window.onload = () =>{
    app.init();
    
}

let app = {

    init :  function(){
        this.addEvent();
        this.loadContent();
    },
    
    addEvent: function(){
        document.formMain.addEventListener('submit',function(event){
            this.submit(event,this.addRow);
        })
    },

    addRow: function(event,addRow){
        let data ={
            nombre: formMain.nombre.value,
            uv: formMain.uv.value,
            descripcion: fromMain.descripcion.value
        }
        let body = document.getElementsByClassName('autos')[0];
        let tr = document.createElement('tr');
        tr.innerHTML=`
            <td>${data.nombre}</td>
            <td>${data.nombre}</td>
            <td>${data.uv}</td>
          <td>${data.descripcion}</td>
          <td>
            <a class="update">update</a>
            <a class="delete">delete</a>
          </td>
        `
    },

    update: function(){

    },

    delete: function(){

    },

    submit: function(){

    },
    loadContent: function(){

    }
}