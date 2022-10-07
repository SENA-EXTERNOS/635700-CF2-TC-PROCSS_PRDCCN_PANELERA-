<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Procesos de transferencia de calor en la hornilla panelera 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(data-aos='fade-right')(
        :style="{'background-image': `url(${require('@/assets/curso/temas/T2/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La panela es un edulcorante altamente nutritivo que se elabora concentrando todos los sólidos solubles en agua y en el jugo de caña de azúcar. La panela se diferencia de la azúcar refinada en que contiene, además de sacarosa, glucosa y fructosa, una presencia importante de minerales, grasas, compuestos proteicos y vitaminas, desde el punto de vista nutricional.
    p.mb-4 <b>A continuación, se presentan las fases del proceso de producción de panela.</b>
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
