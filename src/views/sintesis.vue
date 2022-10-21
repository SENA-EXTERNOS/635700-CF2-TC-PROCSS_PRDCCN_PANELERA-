<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5


    figure.mb-5
      .titulo-sexto.color-secundario
        p.mb-0 
          h3 Técnico en procesos de producción panelera
          em Síntesis: Efectos de la temperatura en la producción panelera

    p Si bien Colombia es el mayor consumidor mundial de panela y su producción es una de las actividades agrícolas más importantes en la economía nacional, no se ha logrado mejorar el uso de los recursos energéticos y es uno de los países más deficitarios. Además del bagazo, se utilizan combustibles adicionales como madera y llantas para compensar los déficits de energía (Velásquez et al., 2004).
    p.mb-5 A continuación, se muestra una descripción general de los conocimientos adquiridos en este componente de formación.

    .row.justify-content-around.align-items-center
      .col-md-9
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span Efectos de la temperatura en la producción panelera

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
