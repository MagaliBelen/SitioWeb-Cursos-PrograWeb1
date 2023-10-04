
  let contadorElement = document.getElementById('contador');
  let cursosListElement = document.getElementById('cursosList');
  let mensajeVacioElement = document.getElementById('mensajeVacio');
  let popupElement = document.getElementById('popup');
  let cerrarPopupBtn = document.getElementById('cerrarPopupBtn');
  
  // Obtener el contador almacenado en sessionStorage
  let contador = sessionStorage.getItem('contador');
  
  // Verificar si hay un contador almacenado
  if (contador) {
    contadorElement.innerHTML = contador;
  }
  
  // Función para actualizar el contador y almacenarlo en sessionStorage
  function actualizarContador(valor) {
    contadorElement.innerHTML = valor;
    sessionStorage.setItem('contador', valor);
  }
  
  // Manejar el evento de clic en los botones "Comprar"
  let comprarBtns = document.getElementsByClassName('comprarBtn');
  for (let i = 0; i < comprarBtns.length; i++) {
    comprarBtns[i].addEventListener('click', function() {
      let cursosObtenidos = sessionStorage.getItem('cursosObtenidos');
      if (cursosObtenidos) {
        cursosObtenidos = JSON.parse(cursosObtenidos);
      } else {
        cursosObtenidos = [];
      }
      
      let curso = this.parentNode;
      let cursoNombre = curso.querySelector('h4').innerHTML;
      
      cursosObtenidos.push(cursoNombre);
      sessionStorage.setItem('cursosObtenidos', JSON.stringify(cursosObtenidos));
      
      actualizarContador(cursosObtenidos.length);
    });
  }
  
  // Mostrar el popup al hacer clic en el contador
  contadorElement.addEventListener('click', function() {
    let cursosObtenidos = sessionStorage.getItem('cursosObtenidos');
    if (cursosObtenidos) {
      cursosObtenidos = JSON.parse(cursosObtenidos);
    } else {
      cursosObtenidos = [];
    }
    
    if (cursosObtenidos.length > 0) {
      cursosListElement.innerHTML = '';
      for (let i = 0; i < cursosObtenidos.length; i++) {
        let cursoItem = document.createElement('li');
        cursoItem.innerHTML = cursosObtenidos[i];
        cursosListElement.appendChild(cursoItem);
      }
      
      mensajeVacioElement.style.display = 'none';
      popupElement.classList.remove('hidden');
    } else {
      mensajeVacioElement.style.display = 'block';
      popupElement.classList.remove('hidden');
    }
  });
  
  // Cerrar el popup al hacer clic en el botón "Cerrar"
  cerrarPopupBtn.addEventListener('click', function() {
    popupElement.classList.add('hidden');
  });

