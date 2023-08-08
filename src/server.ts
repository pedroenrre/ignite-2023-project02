import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/test', async (req, res) => {
  const tables = await knex('sqlite_schema')

  return res.send(tables)
})

app.listen({ port: 3333 }).then(() => {
  console.log('Server running')
})
