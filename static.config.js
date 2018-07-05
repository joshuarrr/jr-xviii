import fetchData from './src/prismic/fetch'

export default {
  getSiteData: () => ({
    title: 'Joshuar',
  }),
  getRoutes: async () => {
    // const posts = await fetchData()
    const pages = await fetchData()
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => pages
      },
      {
        path: '/about',
        component: 'src/containers/About',
        getData: () => pages
      },
      // {
      //   path: '/blog',
      //   component: 'src/containers/Blog',
      //   getData: () => ({
      //     posts,
      //   }),
      //   children: posts.map(post => ({
      //     path: `/post/${post.id}`,
      //     component: 'src/containers/Post',
      //     getData: () => ({
      //       post,
      //     }),
      //   })),
      // },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
}
