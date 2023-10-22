  // Agrega un evento de clic al botón de "Raspar"
      $("#boton-raspar").click(function() {
        var url = $("#url").val();

        // Utiliza AJAX para obtener el contenido de la página web
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            mostrarContenido(this.responseText);
          }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
      });

      function mostrarContenido(respuesta) {
        // Utiliza jQuery para analizar el contenido HTML
        var enlaces = $(respuesta).find("a");
        var imagenes = $(respuesta).find("img");
        var texto = $(respuesta).text();

        // Agrega los enlaces y las imágenes a la página
        for (var i = 0; i < enlaces.length; i++) {
          var enlace = enlaces[i];
          var li = document.createElement("li");
          var a = document.createElement("a");
          a.href = enlace.href;
          a.textContent = enlace.textContent;
          li.appendChild(a);
          document.getElementById("enlaces").appendChild(li);
        }

        for (var i = 0; i < imagenes.length; i++) {
          var imagen = imagenes[i];
          var img = document.createElement("img");
          img.src = imagen.src;
          document.getElementById("contenedor-imagenes").appendChild(img);
        }

        // Busca correos electrónicos, números de teléfono e IDs en el texto
        var correos = texto.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g);
        var telefonos = texto.match(/(\d{3}[-\.\s]??\d{3}[-\.\s]??\d{4}|\(\d{3}\)\s*\d{3}[-\.\s]??\d{4}|\d{10}|\d{3}[-\.\s]??\d{4})/g);
        var ids = texto.match(/#[A-Za-z0-9-_]+/g);

        // Agrega los correos electrónicos, números de teléfono e IDs a la página
        for (var i = 0; i < correos.length; i++) {
          var correo = correos[i];
          var li = document.createElement("li");
          li.textContent = correo;
          document.getElementById("correos").appendChild(li);
        }

        for (var i = 0; i < telefonos.length; i++) {
          var telefono = telefonos[i];
          var li = document.createElement("li");
          li.textContent = telefono;
          document.getElementById("telefonos").appendChild(li);
        }

        for (var i = 0; i < ids.length; i++) {
          var id = ids[i];
          var li = document.createElement("li");
          li.textContent = id;
          document.getElementById("ids").appendChild(li);
        }
      }

      // Agrega un evento de clic al botón de "Mostrar imágenes"
      $("#boton-imagenes").click(function() {
        $("#contenedor-imagenes").show();
      });


function showPopup() {
  var popup = document.getElementById("popup");
  popup.classList.remove("hidden");
}

function hidePopup() {
  var popup = document.getElementById("popup");
  popup.classList.add("hidden");
}




 // Simular tiempo de carga
         setTimeout(function() {
            // Ocultar el elemento de carga
            document.querySelector('.loading').style.display = 'none';
            // Mostrar el menú
            document.querySelector('.menu').style.display = 'block';
         }, 3000); // Cambia el tiempo de espera a tu preferencia (en milisegundos)

         function closeMenu() {
            document.querySelector('.menu').style.display = 'none';
            document.querySelector('.overlay').style.display = 'none';
         }

       

         function closeMenuAndPlayMusic() {
            closeMenu();
            playMusic();
         }

         function playMusic() {
            var music = document.getElementById("music");
            music.play();
         }



function checkTildes(text) {
  const tildes = /[áéíóúÁÉÍÓÚ]/;
  return tildes.test(text);
}

function openPopup() {
            document.getElementById("popupOverlay2").style.display = "block";
         }

         function closePopup() {
            document.getElementById("popupOverlay2").style.display = "none";
         }

function scrollPage(direction) {
  const scrollFraction = 0.2; // Puedes ajustar la fracción de desplazamiento aquí (0.2 = 20% de la altura de la ventana)
  const windowHeight = window.innerHeight;
  const scrollAmount = windowHeight * scrollFraction;

  if (direction === "up") {
    window.scrollBy(0, -scrollAmount); // Desplazamiento hacia arriba (negativo)
  } else if (direction === "down") {
    window.scrollBy(0, scrollAmount); // Desplazamiento hacia abajo (positivo)
  }
}

// Detectar evento de desplazamiento de la rueda del ratón
document.addEventListener("wheel", function(event) {
  if (event.deltaY > 0) {
    // Desplazar hacia abajo si la rueda del ratón se desplaza hacia abajo
    scrollPage("down");
  } else if (event.deltaY < 0) {
    // Desplazar hacia arriba si la rueda del ratón se desplaza hacia arriba
    scrollPage("up");
  }
});

function changeVolume(action) {
  const music = document.getElementById('music');
  const currentVolume = music.volume;
  const step = 0.1; // Incremento/decremento del volumen

  if (action === 'up') {
    if (currentVolume + step <= 1.0) {
      music.volume += step;
    }
  } else if (action === 'down') {
    if (currentVolume - step >= 0) {
      music.volume -= step;
    }
  }
}
