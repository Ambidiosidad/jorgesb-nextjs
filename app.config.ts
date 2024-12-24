// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'NextJS, por Jorge Simon',
    description: 'NextJS tutorial',
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
     footer: {
      credits: {
        icon: '',                       // Deja vacío para no mostrar ícono
        text: 'Desarrollado por Jorge', // Cambia el texto
        href: ''                        // Puedes dejarlo vacío o poner una URL propia
      }
    }
  }
})

