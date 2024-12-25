// https://github.com/nuxt-themes/docus/blob/main/nuxt.schema.ts
export default defineAppConfig({
  docus: {
    title: 'NextJS, por Jorge Simon',
    description: 'NextJS tutorial',
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
  
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
