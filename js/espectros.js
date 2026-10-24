AFRAME.registerComponent('efecto-espectro', {
  schema: {
    opacidad: { type: 'number', default: 0.75 },
    colorBrillo: { type: 'color', default: '#ff007f' }, // Rosa mexicano / neón por defecto
    intensidad: { type: 'number', default: 0.6 }
  },
  init: function () {
    const aplicarEfecto = () => {
      const obj = this.el.getObject3D('mesh');
      if (!obj) return;

      obj.traverse((node) => {
        if (node.isMesh && node.material) {
          node.material = node.material.clone(); // Se clona para no alterar otros modelos
          node.material.transparent = true;
          node.material.opacity = this.data.opacidad;
          node.material.emissive = new THREE.Color(this.data.colorBrillo);
          node.material.emissiveIntensity = this.data.intensidad;
          node.material.depthWrite = false;
        }
      });
    };

    // Espera a que el modelo .glb esté completamente cargado para aplicar los cambios
    this.el.addEventListener('model-loaded', aplicarEfecto);
    aplicarEfecto();
  }
});