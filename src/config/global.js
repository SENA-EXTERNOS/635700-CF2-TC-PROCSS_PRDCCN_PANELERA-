export default {
  global: {
    componenteFormativo: 'Efectos de la temperatura en la producción panelera',
    descripcionCurso:
      'La temperatura juega un papel importante en el control del proceso y afecta la calidad del producto final. La relación entre esta, la concentración y la pureza de las soluciones de azúcar, es una herramienta de control eficaz para la industria. Se sabe que a medida que aumenta la concentración de una solución, expresada en grados Brix, también aumenta el punto de ebullición.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Combustible utilizado en las hornillas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Combustible para quemadores de clarificación y quemadores evaporativos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Combustible utilizado en las hornillas concentración',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Combustión',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Procesos unitarios',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Procesos de transferencia de calor en la hornilla panelera',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Hornilla panelera',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Seguridad y salud en el trabajo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Gestión ambiental y residuos en el proceso productivo de la panela',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Procesos unitarios',
      referencia:
        'Guerrero Useda, M. E., & Escobar Guzmán, J. D. (2015). Eficiencia técnica de la producción de panela. Revista de Tecnología, 14(1), 107 - 116.',
      tipo: 'Artículo  Eficiencia técnica de la producción de panela',
      link: 'https://revistas.unbosque.edu.co/RevTec/article/view/1853',
    },
    {
      tema: 'Procesos unitarios',
      referencia:
        'Díaz, A., & Iglesias, C. E. (2012). Bases teóricas para la fundamentación del proceso de extracción de jugo de caña de azúcar para la producción de panela. Revista Ciencias técnicas agropecuarias, 21(1), 53-57.',
      tipo:
        'Bases teóricas para la fundamentación del proceso de extracción de jugo de caña de azúcar para la producción de panela',
      link:
        'http://scielo.sld.cu/scielo.php?pid=S2071-00542012000100010&script=sci_arttext&tlng=en',
    },
    {
      tema: 'Combustión en hornillas',
      referencia:
        'Guevara Enciso, J. I. (2014). Modelo computacional de la combustión del bagazo de caña en una cámara de combustión tipo ward-cimpa de una hornilla panelera.',
      tipo:
        'Modelo computacional de la combustión del bagazo de caña en una cámara de combustión tipo ward-cimpa de una hornilla panelera',
      link:
        'https://repositorio.uniandes.edu.co/bitstream/handle/1992/12574/u686426.pdf?sequence=1',
    },
    {
      tema: 'Combustión en hornillas',
      referencia:
        'García Rincón, J. G. ., Arévalo Toscano, J. ., & Guerrero Gómez, G. . (2021). Análisis exergético de un horno de lecho fijo en la producción de panela. Revista Colombiana De Tecnologías De Avanzada (Rcta), 1(25), 32-39.',
      tipo:
        'Análisis exergético de un horno de lecho fijo en la producción de panela',
      link:
        'http://ojs.unipamplona.edu.co/ojsviceinves/index.php/rcta/article/view/409',
    },
    {
      tema: 'Proceso de transferencia de calor en la hornilla panelera',
      referencia:
        'Delgado Ramírez, L. O. (2015). Modelación unidimensional de la transferencia de calor en intercambiadores de una hornilla panelera. Universidad de Piura, Perú.',
      tipo:
        'Modelación unidimensional de la transferencia de calor en intercambiadores de una hornilla panelera',
      link: 'https://pirhua.udep.edu.pe/handle/11042/2265',
    },
    {
      tema: 'Proceso de transferencia de calor en la hornilla panelera.',
      referencia:
        'Cortés Sanabria, P. J. (2016). Estudio computacional de la transferencia de calor por convección en hornillas con pailas aleteadas de la industria panelera. Universidad de los Andes.',
      tipo:
        'Estudio computacional de la transferencia de calor por convección en hornillas con pailas aleteadas de la industria panelera',
      link: 'https://repositorio.uniandes.edu.co/handle/1992/13598',
    },
    {
      tema: 'Combustión en hornillas',
      referencia:
        'Guevara Enciso, J. I. (2014). Modelo computacional de la combustión del bagazo de caña en una cámara de combustión tipo ward-cimpa de una hornilla panelera. Universidad de los Andes.',
      tipo:
        'combustión del bagazo de caña en una cámara de combustión tipo ward-cimpa de una hornilla panelera',
      link:
        'https://repositorio.uniandes.edu.co/bitstream/handle/1992/12574/u686426.pdf?sequence=1',
    },
    {
      tema: 'Seguridad y salud en el trabajo ',
      referencia:
        'Diaz Orozco, A y Victoria Carmona, P. (2015). Identificación de peligros en el proceso de fabricación de la panela en dos (2) trapiches ubicados en la ciudad Pereira (Risaralda) 2015.',
      tipo:
        'Identificación de peligros en el proceso de fabricación de la panela en dos (2) trapiches ubicados en la ciudad Pereira (Risaralda) 2015',
      link: 'https://bdigital.uniquindio.edu.co/handle/001/4187',
    },
    {
      tema: 'Manejo integral de residuos',
      referencia:
        'García, H. R., Albarracín, L. C., Toscano LaTorre, A., Santana, N., & Insuasty, O. (2007). Guía tecnológica para el manejo integral del sistema productivo de la caña panelera.',
      tipo:
        'Guía tecnológica para el manejo integral del sistema productivo de la caña panelera',
      link:
        'https://repository.agrosavia.co/bitstream/handle/20.500.12324/13454/42610_46668.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Impacto ambiental',
      referencia:
        'González Campaña, P. J., & Zúñiga Cabrera, D. C. (2022). Impactos ambientales en la producción de panela en la parroquia de Pacto del Distrito Metropolitano de Quito. Esferas, 3, 94-111.',
      tipo:
        'Impactos ambientales en la producción de panela en la parroquia de Pacto del Distrito Metropolitano de Quito',
      link: 'https://revistas.usfq.edu.ec/index.php/esferas/article/view/2430',
    },
    {
      tema: 'Residuos',
      referencia:
        'Pico Poma, L. P. (2018). Simulación del proceso de digestión anaerobia para predecir la producción de biogás a partir de residuos de la industria panelera en la Provincia de Pastaza ',
      tipo:
        'Simulación del proceso de digestión anaerobia para predecir la producción de biogás a partir de residuos de la industria panelera en la Provincia de Pastaza.',
      link: 'https://repositorio.uea.edu.ec/handle/123456789/690',
    },
    {
      tema: 'Implementación de prácticas ambientales',
      referencia:
        'Castillo Quiroga, B., García Castellanos, E. H., León Quiroga, L., & Moreno Diaz, D. M. (2020). Implementación de prácticas que generen la disminución de agentes contaminantes que se liberan en el medio ambiente en los centros de producción panelera en el municipio de Santana, Boyacá.',
      tipo:
        'Implementación de prácticas que generan la disminución de agentes contaminantes que se liberan en el medio ambiente en los centros de producción panelera en el municipio de Santana, Boyacá.',
      link: 'https://repository.libertadores.edu.co/handle/11371/3463',
    },
  ],
  glosario: [
    {
      termino: 'Acción de mejora',
      significado:
        'medidas para optimizar el sistema de gestión de seguridad y salud en el trabajo, SGSST, para lograr mejoras en el desempeño de seguridad y salud ocupacional de la organización de acuerdo con las políticas organizacionales.',
    },
    {
      termino: 'Amenaza',
      significado:
        'un evento físico natural o accidental causado o inducido por la acción humana suficiente para causar la muerte, lesiones u otros efectos en la salud, daños y pérdidas a la propiedad, la propiedad, la infraestructura, los medios de subsistencia y los riesgos inherentes a la provisión de servicios y recursos ambientales de gran importancia.',
    },
    {
      termino: 'Auto-reporte de condiciones de trabajo y salud',
      significado:
        'es un procedimiento para que los empleados o contratistas informen por escrito a su empleador o contratista cualquier condición adversa de salud y seguridad que observen en su lugar de trabajo.',
    },
    {
      termino: 'Buenas Prácticas Agrícolas (BPA)',
      significado:
        'es un procedimiento para que los empleados o contratistas informen por escrito a su empleador o contratista cualquier condición adversa de salud y seguridad que observen en su lugar de trabajo.',
    },
    {
      termino: 'Buenas prácticas ambientales (BPAs)',
      significado:
        'es una serie de acciones sencillas que promueven una relación amigable con el medio ambiente y significan un cambio de actitudes y comportamientos en las actividades cotidianas (Secretaría de ambiente del municipio del distrito metropolitano Quito, 2020).',
    },
    {
      termino: 'Cachaza',
      significado:
        'es creado por residuos que se acumulan durante la clarificación del jugo de caña de azúcar durante la producción de azúcar cruda.',
    },
    {
      termino: 'Ciclo PHVA',
      significado:
        'un enfoque lógico, paso a paso, que permite la mejora continua al hacer un plan: Planificar: Debe planificar cómo mejorar la seguridad y la salud de los trabajadores, identificar qué está mal, qué se puede mejorar y proponer ideas para resolver esos problemas. Hacer: Implementación de las contramedidas planificadas. Verificar: Comprobar si los procedimientos y medidas adoptadas están consiguiendo los resultados deseados. Actuar: Implementación de medidas correctivas para el máximo beneficio de la seguridad y salud de los trabajadores.',
    },
    {
      termino: 'Contaminación ambiental',
      significado:
        'la presencia de uno o más contaminantes que provocan la degradación de los recursos naturales como el agua, el suelo, el aire, las plantas y los animales, y tienen efectos adversos sobre la salud humana (Sánchez & Guiza, 1989).',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'el proceso de transformación del medio natural, socioeconómico, cultural e institucional. Su objetivo es asegurar la mejora de las condiciones de vida humana, la producción de bienes y la prestación de servicios sin dañar el entorno natural ni poner en peligro la base del desarrollo. (CAR, 2019).',
    },
    {
      termino: 'Evaluación del riesgo',
      significado:
        'es un procedimiento para determinar el nivel de riesgo asociado con la probabilidad de que ocurra un riesgo y la gravedad de las consecuencias de esa ocurrencia.',
    },
    {
      termino: 'Gestión ambiental',
      significado:
        'gestión participativa de las condiciones ambientales locales por parte de diversos actores mediante el uso y aplicación de herramientas legales, de planificación, técnicas, económicas, financieras y de gestión para lograr mejorar el funcionamiento de los ecosistemas y la calidad de vida de la población. En el marco de la sustentabilidad (Guhl & Leyva, 2015).',
    },
    {
      termino: 'Grados Brix (° Brix)',
      significado:
        'la concentración de sólidos solubles, expresada en azúcares, presentes en la muestra.',
    },
    {
      termino: 'Identificación del peligro',
      significado:
        'el proceso de determinar si existe un peligro y definir sus características.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'cambios en el entorno físico, químico, biológico, cultural y socioeconómico resultantes de las actividades humanas relacionadas con las actividades del proyecto (CAR, 2019).',
    },
    {
      termino: 'Hornilla',
      significado:
        'un horno de ladrillo y barro que hierve y espesa el jugo de la caña de azúcar.',
    },
    {
      termino: 'Hornillero',
      significado:
        'operador responsable de suministrar bagazo a un quemador o cámara de combustión.',
    },
    {
      termino: 'Humedad',
      significado:
        'la determinación de humedad o volátiles se basa en la pérdida de peso que sufre el alimento al calentarlo a 100 ªC. Este valor incluye, además del agua propiamente dicha, las sustancias volátiles que acompañan al alimento.',
    },
    {
      termino: 'Jugo crudo',
      significado:
        'se obtiene directamente de la molienda de la caña de azúcar y contiene todos los sólidos en solución excepto la fibra.',
    },
    {
      termino: 'Molino',
      significado:
        'equipo que se utiliza para la extracción de los jugos de la caña o establecimiento donde se produce la panela. ',
    },
    {
      termino: 'Política de seguridad y salud en el trabajo',
      significado:
        'es el compromiso declarado formalmente de la alta dirección de la organización con la seguridad y salud en el trabajo lo que define el alcance de la organización y compromete a la organización en su conjunto.',
    },
    {
      termino: 'Residuo orgánico',
      significado:
        'se refiere a todos los residuos de origen biológico. Incluye diversos residuos que ocurren naturalmente durante el "ciclo de vida" como resultado de las funciones fisiológicas de preservación y mantenimiento, o que son productos de la explotación humana de los recursos biológicos (García, et al., 2007).',
    },
    {
      termino: 'Riesgo',
      significado:
        'una combinación de la probabilidad de que ocurran una o más exposiciones o eventos peligrosos y la gravedad del daño resultante.',
    },
  ],
  referencias: [
    {
      referencia:
        'Durán Sánchez, E. (2019). Estudio térmico, económico y de calidad en sistemas de producción de panela. ',
      link: 'https://repositorio.unal.edu.co/handle/unal/76063',
    },
    {
      referencia:
        'Diaz Delgado, N. Y., Sarasty Ruano, L. C., & Tobar Zambrano, D. M. (2021). Diseño de un Sistema de Gestión de Seguridad y Salud en el Trabajo en la empresa “Trapiche Divino Niño” Municipio de Ancuya-Nariño–2020. ',
      link: 'https://hdl.handle.net/20.500.12962/803   ',
    },
    {
      referencia:
        'Díaz, A., & Iglesias, C. E. (2012). Bases teóricas para la fundamentación del proceso de extracción de jugo de caña de azúcar para la producción de panela. Revista Ciencias técnicas agropecuarias, 21(1), 53-57.',
      link: 'https://www.redalyc.org/comocitar.oa?id=93222722010',
    },
    {
      referencia:
        'Esquivel Barrios, L. C., & Arenas Quimbayo, J. M. (2016). Análisis externo en el sector panelero. Temas y Reflexiones; núm. 5 (2016). ',
      link:
        'http://repositorio.unibague.edu.co:80/jspui/handle/20.500.12313/216',
    },
    {
      referencia:
        'García, H. R., Albarracín L., Toscano A., Santana N. & Insuasty O. (2007). Guía tecnológica para el manejo integral del sistema productivo de la caña panelera. Mosquera: Produmedios (editorial para el sector agropecuario).',
      link: 'http://hdl.handle.net/20.500.12324/13454',
    },
    {
      referencia:
        'Gordillo, G. y García, H. R. (1992). Manual para el diseño y operación de hornillas paneleras. Barbosa. ICA-Holanda.',
      link: '',
    },
    {
      referencia:
        'Hugot, E. (1974).  Manual para ingenieros azucareros. Editorial continental. S.A. 2da Edición. (México). ',
      link: '',
    },
    {
      referencia:
        'Jaramillo Gómez, D. A., Sánchez López, S. A., & Meneses Suarez, E. J. (2018). Criterios de implementación ISO 14001: 2015 caso de estudio sector Panelero. ',
      link:
        'https://repository.unad.edu.co/bitstream/handle/10596/23421/dajaramillog.pdf?sequence=1',
    },
    {
      referencia:
        'La Madrid Olivares, R. (2015). Modelación numérica del proceso de transferencia de calor en intercambiadores de calor abiertos utilizados en la industria panelera. ',
      link:
        'https://pirhua.udep.edu.pe/bitstream/handle/11042/5446/DOC_ING_AUT_001.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Marcelo, D., La Madrid, R., & Santamaría, H. (2013). Evaluación mediante indicadores productivos y energéticos de tres módulos de producción de panela granulada. In 17 th Latin American and Caribbean conference of engineering and technology LACCEI.',
      link: 'http://www.laccei.org/LACCEI2013-Cancun/RefereedPapers/RP252.pdf',
    },
    {
      referencia:
        'Medina Moreno, R. A. (2016). Estudio computacional de la transferencia de calor en una paila panelera tipo semiesférica. ',
      link: 'https://repositorio.uniandes.edu.co/handle/1992/13708',
    },
    {
      referencia:
        'Mejía Restrepo, A. M. (2007). Propuesta para la implementación del sistema de gestión ambiental en el trapiche panelero-HVC. ',
      link:
        'https://repositorio.utp.edu.co/items/2a289c49-1854-4bb8-9d9d-832cc77e5a69',
    },
    {
      referencia:
        'García, J.G, Toscano, J. A., &Guerrero, G. G. (2015). Análisis exergético de un horno de lecho fijo en la producción de panela. Revista Colombiana De Tecnologias De Avanzada (Rcta), 1(25), 32-39.',
      link:
        'https://docplayer.es/72041133-Exergy-analysis-for-a-furnace-in-the-production-of-panela-analisis-exergetico-de-un-horno-de-lecho-fijo-en-la-produccion-de-panela.html',
    },
    {
      referencia:
        'Sánchez Castro, Z., & Mendieta Menjura, O. A. (2014). Ajuste de un modelo matemático para la combustión de bagazo de caña en una cámara Ward-Cimpa. Ciencia y Tecnología Agropecuaria, 15(2), 133-151. ',
      link: '',
    },
    {
      referencia:
        'Leguízamos, S. G. I. ., & Yepes. G. N. V. (2014). Estudio Descriptivo Mediante Análisis Multicriterio de la Cadena Agroalimentaria de La Panela. Publicaciones e Investigación, 8, 161-183. ',
      link:
        'https://hemeroteca.unad.edu.co/index.php/publicaciones-e-investigacion/article/view/1298',
    },
    {
      referencia:
        'Suárez Guevara, I. C. (2019). Estrategias para la producción más limpia en el sector de cacao y caña panelera en el Valle del Cauca bajo el marco del Plan Nacional de Negocios Verdes en Colombia.',
      link: '',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio, «Estudios de Mercado. Cadena productiva de la panela en Colombia 2010 -2012,» SIC, Bogotá, 2012.Superintendencia de Industria y Comercio, «Estudios de Mercado. Cadena productiva de la panela en Colombia 2010 -2012,» SIC, Bogotá, 2012.',
      link: '',
    },
    {
      referencia:
        'Vallejo Carabalí, C. E., Peña Medina, H., & Mora Muñoz, L. S. (1995). Evaluación de la producción y consumo de energía en hornillas paneleras. Universidad Autónoma de Occidente.',
      link: ' https://red.uao.edu.co/handle/10614/2588',
    },
    {
      referencia:
        'Velásquez, H. I., Janna, F. C., & Agudelo, A. F. (2006). Diagnóstico exergético de los procesos productivos de la panela en Colombia. Energética, (35), 15-22.',
      link: ' https://www.redalyc.org/articulo.oa?id=147019422003',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
