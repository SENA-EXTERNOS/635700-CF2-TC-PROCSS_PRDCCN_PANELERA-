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

    LineaTiempoC.color-acento-botones(text-small)
      .row.justify-content-around.align-items-center(titulo="Extracción")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/T2/img-2.svg', alt='Texto que describa la imagen')
          
      
        .col-md-8
          p.mb-3 <b>Extracción de la materia prima</b>
          p.mb-4 El corte y transporte de las cañas de azúcar es muy importante, ya que, es la etapa previa al inicio del proceso productivo de panela y al mismo tiempo, es necesario cortar las cañas en el punto óptimo de madurez para garantizar la excelente calidad de la panela.
          p.mb-4 La caña de azúcar está madura cuando la concentración de azúcar en la base y el final del tallo es similar. El tiempo de maduración de la caña de azúcar desde el momento de la siembra o entre cortes depende de la variedad, las condiciones climáticas y, sobre todo, la altitud del campo de cultivo.
         


      .row.justify-content-around.align-items-center(titulo="Recepción")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/T2/img-3.svg', alt='Texto que describa la imagen')
          
      
        .col-md-7
          p.mb-3 <b>Recepción de la materia prima</b>
          p.mb-4 Esta etapa se denomina preparación de caña, y consiste en almacenar suficiente caña para permitir el funcionamiento continuo del quemador. Se recomienda cubrir el área con un piso de cemento (en el techo) para evitar que el lodo se pegue a la caña, lo que puede afectar la calidad de la panela. 
          p.mb-4 Un dato útil es que 1 tonelada de tubería ocupa un área de aproximadamente 2 m3, o 1 m2 x 2 m de alto.


      .row.justify-content-around.align-items-center(titulo="Molienda")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/T2/img-4.svg', alt='Texto que describa la imagen')
          
      
        .col-md-7
          p.mb-3 <b>Molienda</b>
          p.mb-4 Esta es la primera parte del proceso donde la caña de azúcar se pasa entre los rodillos o martillos de un molino para obtener el jugo de caña de azúcar y un residuo sólido llamado bagazo verde que contiene 50 – 60 % de humedad. 
          p.mb-4 La industria panelera utiliza un proceso de extracción en seco. Es decir, el proceso de trituración se realiza sin añadir agua.

      .row.justify-content-around.align-items-center(titulo="Pre-limpieza")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/T2/img-5.svg', alt='Texto que describa la imagen')
          
      
        .col-md-8
          p.mb-3 <b>Pre-limpieza</b>
          p.mb-4 El jugo crudo obtenido durante el proceso de molienda, o guarapo, es un pre-prensado, elemento compuesto principalmente por bagazo, caña de azúcar, tierra, sobrantes de materia en suspensión, que tiene la función de retener las impurezas dispersas en el jugo, pasar por el limpiador, sustancias, lodos y sustancias precursoras del color. 
          p.mb-4 Los pre-limpiadores funcionan separando las impurezas del jugo debido a las diferencias de densidad. La separación en frío, antes del inicio del proceso, evita que los precursores de colorantes se liberen en el jugo por exposición al calor, afectando negativamente la presentación de los azúcares orgánicos. Este proceso se repite hasta que el jugo esté completamente limpio, garantizando mejores productos.

      .row.justify-content-around.align-items-center(titulo="Almacenamiento")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/T2/img-6.svg', alt='Texto que describa la imagen')
          
      
        .col-md-8
          p.mb-3 <b>Almacenamiento de los jugos</b>
          p.mb-4 Consiste en recolectar el jugo prelavado en tanques de almacenamiento o colectores de acero inoxidable. El paso del jugo almacenado al clarificador es por gravedad, por lo que es importante que el colector quede arriba del clarificador.

      .row.justify-content-around.align-items-center(titulo="Clarificación")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/T2/img-7.svg', alt='Texto que describa la imagen')
          
      
        .col-md-8
          p.mb-3 <b>Clarificación</b>
          p.mb-4 La etapa de clarificación se realiza, tradicionalmente, precalentando el calor generado en los quemadores en combinación sin evaporación y alcalinizando el jugo de caña de azúcar mediante la adición de aditivos básicos a base de corteza vegetal como el guásimo, cadillo, etc. 
          p.mb-4 En algunos lugares se utiliza la ceniza de la cascarilla del café. La clarificación se realiza por flotación. En esta etapa, la cachaza se elimina en forma de burbujas que se forman en la superficie del jugo, lo que garantiza un producto más puro y claro.
          p.mb-4 La literatura sugiere aumentar la temperatura del jugo en el rango de 1.5 - 2.5 °C / min. Esto permite que los contaminantes floculan debido al efecto combinado de la temperatura, el tiempo de clarificación y el floculante o aglutinante. Es importante tener en cuenta que el tiempo de residencia del jugo en la sartén después de la clarificación debe ser de 1,5 a 2 horas.
          p.mb-4 Uno de los factores más importantes a controlar al hacer panela es la acidez del jugo. Para medir este factor se utiliza el pH (0 - 7 soluciones ácidas y 7-14 soluciones básicas). El objetivo es trabajar a un pH neutro (7) que no destruya los azúcares reductores presentes y evite la descomposición o inversión de la sacarosa en azúcares reductores (glucosa y fructosa).

      .row.justify-content-around.align-items-center(titulo="Evaporación")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/T2/img-8.svg', alt='Texto que describa la imagen')
          
      
        .col-md-7
          p.mb-3 <b>Evaporación y concentración</b>
          p.mb-4 Al final de la refinación del jugo de caña de azúcar, el contenido de agua se evapora. Esto aumenta la concentración de azúcar hasta que alcanza un nivel de sólidos solubles de alrededor de 70 ° Brix, llamado miel.
          p.mb-4 Este proceso se realiza en platos metálicos en módulos de paneles pequeños o en filas de 3 - 4 pailas en módulos grandes. Las pailas aumentan la eficiencia energética, reduce el tiempo de residencia, aumenta la producción y los ingresos de los productores.
          p.mb-4 En la etapa de concentración, el jugo ya evaporado se concentra evaporando más agua. La diferencia en esta etapa es que se usa menos jugo y que la sacarosa se remueve constantemente para evitar que se queme y se pegue a las paredes de la olla.

      .row.justify-content-around.align-items-center(titulo="Punteo")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/T2/img-9.svg', alt='Texto que describa la imagen')
          
      
        .col-md-8
          p.mb-3 <b>Punteo</b>
          p.mb-4 Esta parte del proceso consiste en la evaporación casi completa del agua. Con ello se consigue la mayor concentración de sólidos alcanzando valores superiores a los 90 ° Brix.
          p.mb-4 Un indicador técnico es el punto de ebullición de la miel, que debe llegar a unos 127 °C para la panela granular. Esta temperatura puede variar hasta 2 °C dependiendo de la altitud y la pureza de la miel.
          p.mb-4 Sin equipo de control, el módulo panelero se basa en la observación de propiedades específicas como la viscosidad y la adhesión de la miel.

      .row.justify-content-around.align-items-center(titulo="Cristalización")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/T2/img-10.svg', alt='Texto que describa la imagen')
          
      
        .col-md-8
          p.mb-3 <b>Cristalización y enfriamiento</b>
          p.mb-4 En esta etapa se bate la miel y cuando llega al punto de panela se retira del fogón y se remueve con un batidor de acero inoxidable en un recipiente llamado cazo. 
          p.mb-4 Una vez encontrado el punto, se deja enfriar, batiéndolo por 20 minutos, logrando su enfriamiento y acto seguido se transfiere a las gabelas que pueden ser de 1 libra o de 1 kilo.
          p.mb-4 Al pasar 20 minutos, ya la panela se ha cristalizado, desarman las gabelas y la panela ya se encuentra lista para ser empacada, sin antes dejar enfriar.

      .row.justify-content-around.align-items-center(titulo="Tamizado")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/T2/img-11.svg', alt='Texto que describa la imagen')
          
      
        .col-md-8
          p.mb-3 <b>Tamizado</b>
          p.mb-4 El único caso en que es necesario este paso es en la producción de panela granulada, proceso que consiste en tamizar la panela después de la molienda para obtener un granulado uniforme. 
          p.mb-4 El residuo del tamiz se procesa nuevamente y se envía a evaporación.


    Separador.mb-5

    #t_2_1.titulo-segundo.color-acento-contenido.mb-5
      h2 2.1.	Hornilla panelera

    p.mb-5 El horno para hacer panela, comúnmente llamado quemador panelero, es un subsistema, dispositivo o equipo en un ingenio azucarero que remueve la mayoría de las impurezas y evapora el agua del jugo de la caña de azúcar para concentrar los sólidos solubles, principalmente azúcar, hasta "punto de la panela". La energía utilizada para calentar el jugo y evaporar el agua proviene del bagazo que se produce al triturar la caña de azúcar.
      .row.justify-content-around.align-items-center
        .col-md-9
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            span Diagrama en perspetiva de un trapiche panelero
          figure
            img(src='@/assets/curso/temas/T2/img-12.svg', alt='Texto que describa la imagen')
            figcaption Nota: Adaptada / Programa de procesos Agroindustriales. CORPOICA- C.I. Tibaitatá, 2011

    p.mb-5 La mayoría de los ingenios azucareros trabajan con un sistema de “evaporación abierta y fuego directo”. Está abierto porque el evaporador (olla) está en contacto directo con los gases de combustión, por lo que el jugo hierve a la presión atmosférica local y tiene llama abierta.
    
    p.mb-5 <b>A continuación, se presentan las partes que componen una hornilla panelera.</b>
      .row.justify-content-around.align-items-center
        .col-md-9
          .titulo-sexto.color-acento-contenido
            h5 Figura 3.
            span Partes que componen una hornilla panelera

    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/T2/img-13.svg', alt='Texto que describa la imagen')
          

      .tarjeta.tarjeta-amarillo.p-3(x="10%" y="62%" numero="1")
        .h5.mb-2 Cámara de combustión
        p Una cavidad en la parte delantera del quemador donde se quema bagazo u otro combustible.
        img(src='@/assets/curso/temas/T2/img-14.svg', alt='Texto que describa la imagen')

      .tarjeta.tarjeta-amarillo.p-3(x="3%" y="100%" numero="2")
        .h5.mb-2 Cenicero
        p El cenicero es el compartimento o espacio justo debajo de la parrilla. 
        img(src='@/assets/curso/temas/T2/img-15.svg', alt='Texto que describa la imagen')

      .tarjeta.tarjeta-amarillo.p-3(x="7%" y="83%" numero="3")
        .h5.mb-2 Puerta de alimentación
        p Una abertura para que el panelero inserte el bagazo y encienda fuego. 
        img(src='@/assets/curso/temas/T2/img-16.svg', alt='Texto que describa la imagen')

      .tarjeta.tarjeta-amarillo.p-3(x="35%" y="96%" numero="4")
        .h5.mb-2 Parrilla
        p La parrilla consiste en una serie de placas de hierro fundido colocadas horizontalmente una detrás de la otra. 
        img(src='@/assets/curso/temas/T2/img-17.svg', alt='Texto que describa la imagen')

      .tarjeta.tarjeta-amarillo.p-3(x="49%" y="93%" numero="5")
        .h5.mb-2 Ducto de gases
        p También recibe su nombre de gasoductos, carreteras, barcos, etc.  
        img(src='@/assets/curso/temas/T2/img-18.svg', alt='Texto que describa la imagen')

      .tarjeta.tarjeta-amarillo.p-3(x="78%" y="27%" numero="6")
        .h5.mb-2 Chimenea
        p Se trata de un conducto de ladrillo o chapa que se encuentra al final del quemador.  
        img(src='@/assets/curso/temas/T2/img-19.svg', alt='Texto que describa la imagen')

      .tarjeta.tarjeta-amarillo.p-3(x="50%" y="47%" numero="7")
        .h5.mb-2 Pailas
        p Una paila es un recipiente metálico (a veces llamado charola, cacerola o evaporador).  
        img(src='@/assets/curso/temas/T2/img-20.svg', alt='Texto que describa la imagen')
    figcaption.mb-5 Nota: Adaptada / Programa de procesos Agroindustriales. CORPOICA- C.I. Tibaitatá, 2011

    ol.lista-ol--cuadro.mb-3
      li
        .lista-ol--cuadro__vineta
          span 1
        h3 Cámara de combustión
    p.mb-5 Una cavidad en la parte delantera del quemador donde se quema bagazo u otro combustible para producir la energía o el calor necesarios para el proceso de fabricación de Panela. 

    ol.lista-ol--cuadro.mb-3
      li
        .lista-ol--cuadro__vineta
          span 
        p <b>Tipos de cámaras de combustión</b>

    TabsA.color-secundario.mb-5
      .tarjeta.color-tabs.p-4(titulo="Plana")
        h4 Plana

        .row 
          .col-xl-6.mb-4
            p En las cámaras convencionales, la superficie de la parrilla es demasiado grande, lo que permite que el aire falso enfríe el gas, lo que resulta en bajas temperaturas de combustión (850 °C, humedad del bagazo de 30 °C). Además, la superficie relativamente fría de la olla está directamente en la cámara, lo que termina en una combustión incompleta y un alto porcentaje de CO (6-7 %).
          .col-xl-6
            figure
                img(src='@/assets/curso/temas/T2/img-21.svg', alt='Texto que describa la imagen')
              
              
      
      .tarjeta.color-tabs.p-4(titulo="Plana-Cimpa")
        h4 Plana-Cimpa

        .row
          .col-xl-6.mb-4
            p.mb-4 Esta cámara es un diseño mejorado de la cámara tradicional, donde el bagazo se quema lejos de la primera bandeja y alcanza una alta temperatura de combustión de casi 950 °C. Este tipo de cámara se caracteriza por la combustión de bagazo con una humedad inferior al 30 % (base húmeda, b.h.) y un exceso de aire de casi el 60 %.
            p Las dimensiones de la cámara dependen de la energía requerida para el proceso y la geometría de la parrilla estándar. En general son más largas que anchas y las dimensiones son la velocidad del gas (3-5 m/s debajo de la primera cubeta y 7-10 m/s debajo de la última cubeta) y el máximo medio La 4ª o 5ª cubeta dada la longitud de la llama del bagazo alcanzando los 6 metros.
          .col-xl-6
            figure
                img(src='@/assets/curso/temas/T2/img-22.svg', alt='Texto que describa la imagen')
            
      
      .tarjeta.color-tabs.p-4(titulo="Ward-CIMPA")
        h4 Ward-CIMPA
        p.mb-4 Este tipo de cámara tiene un diseño especial que aumenta la combustión y la eficiencia del proceso. Esto se debe a una mejor estabilidad en términos de temperatura y potencia a lo largo del tiempo. Este tipo de cámara puede alcanzar temperaturas cercanas a los 1200 °C y, cuando se le suministra un 60 % de exceso de aire y una humedad promedio de 40 bagazo, produce un 3 % en volumen de monóxido de carbono y un 14 % en volumen de dióxido de carbono. 
        p.mb-4 También cuenta con dos características especiales. Primero, hay lámparas que precalientan y secan el bagazo antes de quemarlo. 
        p En esta tolva, la humedad contenida en el bagazo se evapora de las paredes de la cámara bajo la acción de la energía radiante. Esta característica permite la introducción de bagazo con un contenido de humedad de casi 45 % (b.h.). En segundo lugar, el aire necesario para la combustión se suministra en dos corrientes. Uno es el aire primario que fluye a través de la parrilla (un total de 70 litros de aire) y el 30 % restante se alimenta como aire secundario a la cámara por encima de la combustión de los volátiles en el lecho de bagazo (Gordillo & García, 1992).

    .row
      .col-xl-6.mb-4
        ol.lista-ol--cuadro.mb-3
          li
            .lista-ol--cuadro__vineta
              span 2
            h3 Cenicero
          p.mb-5 El cenicero es el compartimento o espacio justo debajo de la parrilla. Sirve para almacenar la ceniza que se genera al quemar el bagazo, y que se escapa de la parrilla, además, orienta el aire necesario para la combustión.

          li
            .lista-ol--cuadro__vineta
              span 3
            h3 Puerta de alimentación
          p.mb-4 Una abertura para que el panelero inserte el bagazo y encienda fuego. 
          p.mb-5 En la mayoría de los casos, en realidad es una boca de alimentación, ya que no tiene hojas que se puedan abrir y cerrar. Generalmente está hecha de hierro fundido gris y puede soportar temperaturas moderadamente altas sin deformarse.

          li
            .lista-ol--cuadro__vineta
              span 4
            h3 Parrilla
          p.mb-5 La parrilla consiste en una serie de placas de hierro fundido colocadas horizontalmente una detrás de la otra, que actúan como lecho para quemar el bagazo. La parrilla toma aire para la combustión y el paso de la ceniza del cenicero.

      .col-xl-6
        ol.lista-ol--cuadro.mb-3
            li
              .lista-ol--cuadro__vineta
                span 5
              h3 Ducto de gases
            p.mb-4 También recibe su nombre de gasoductos, carreteras, barcos, etc. Las partes que componen el canal son muros de contención, pisos, arcos y cacerolas. Su función es canalizar los gases de combustión y ponerlos en contacto con la olla, transfiriendo parte de la energía al jugo.
            p.mb-5 La forma y los materiales de los canales varían, desde el más tradicional, que es la excavación realizada directamente en el sitio de construcción del horno, hasta las ollas sostenidas por paredes y arcos de tierra, que son de ladrillo refractario. 

            li
              .lista-ol--cuadro__vineta
                span 6
              h3 Chimenea
            p.mb-4 Se trata de un conducto de ladrillo o chapa que se encuentra al final del quemador y va conectado directamente a la chimenea. Su forma es cilíndrica, trapezoidal o cónica. Sus dimensiones dependen de su forma y del tamaño del quemador.
            p.mb-5 Su función es crear un diferencial de presión llamado “tiro”. Esto asegura el suministro de aire necesario para la combustión del bagazo y el transporte de gas, a través de los ductos.



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
