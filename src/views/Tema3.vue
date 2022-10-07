<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión ambiental y residuos en el proceso productivo de la panela

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(data-aos='fade-right')(
        :style="{'background-image': `url(${require('@/assets/curso/temas/T3/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 A lo largo de los años, la industria de la panela ha evolucionado su proceso de producción a través de la artesanía sin agregar valor a sus productos ni realizar cambios importantes en el proceso de producción. A continuación, se presenta un video que muestra cómo se ve la gestión ambiental y de residuos del proceso de producción de panela en Colombia. 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    .tarjeta.tarjeta-amarillo.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(data-aos='fade-right')(src="@/assets/curso/temas/T3/img-2.svg")

        .col-md.col-lg-6
          p.mb-4 <b>¡Muy bien!</b> ha finalizado el estudio de este componente formativo, a través del cual se ha aprendido sobre los efectos de la temperatura en la producción panelera. Ahora lo invitamos repasar, mediante la síntesis, los principales aspectos desarrollados en este ciclo y a realizar la actividad de aprendizaje donde podrá poner a prueba lo aprendido y, a su vez, consultar el material complementario que le servirá como refuerzo. Con el glosario final, también podrá profundizar en los conceptos manejados.  



</template>

<script>
export default {
  name: 'Tema3',
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
