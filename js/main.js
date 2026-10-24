window.addEventListener('load', () => {
  const marcador = document.querySelector('a-nft');
  
  if (marcador) {
    marcador.addEventListener('markerFound', () => {
      console.log('¡Imagen objetivo encontrada!');
      // Aquí el equipo puede agregar código para ocultar un GIF de "Escaneando..."
    });

    marcador.addEventListener('markerLost', () => {
      console.log('Se perdió el rastro de la imagen.');
      // Aquí el equipo puede mostrar una alerta pidiendo enfocar nuevamente
    });
  }
});