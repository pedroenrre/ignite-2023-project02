import { Knex } from 'knex'

// O QUE ESSA MIGRATION VAI CRIAR/FAZER
export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('transactions', (table) => {
    table.uuid('id').primary()
    table.text('title').notNullable()
    table.decimal('amount', 10, 2).notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
  })
}

// COMO DAR UM ROLLBACK. DESFAZ O QUE O MÉTODO UP FEZ
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions')
}
