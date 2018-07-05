import apiEndpoint from './config'
import transform from './transformer'

const Prismic = require('prismic-javascript')

export default async function getData () {
  const api = await Prismic.getApi(apiEndpoint)
  const response = await api.query('')

  const reduced = response.results.reduce((map, data) => {
    const transformed = transform(data);
    map[transformed.path] = transformed;
    return map;
  }, {})
  // console.log(reduced)
  return reduced;
}




