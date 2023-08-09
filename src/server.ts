import fastify from 'fastify'
import cookies from '@fastify/cookie'
import { knex } from './database'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(cookies)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app.get('/test', async (req, res) => {
  const tables = await knex('sqlite_schema')

  return res.send(tables)
})

app.listen({ port: 3333 }).then(() => {
  console.log('Server running')
})
