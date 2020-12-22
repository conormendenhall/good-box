module.exports = {
  siteMetadata: {
    title: `Good Box`,
    description: `  `,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Good Box`,
        short_name: `GoodBox`,
        start_url: `/`,
        background_color: `#eca5ff`,
        theme_color: `#26adc9`,
        display: `standalone`,
        icon: `src/images/blue.png`,
      },
    },
    `gatsby-plugin-offline`, // list this after gatsby-plugin-manifest
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
