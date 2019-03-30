
exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(table) {
    table.increments();
    table
      .string("description", 255)
      .notNullable()
      .unique();
    table.string("note", 255);
    table.boolean("completed").defaultTo(false);
    table
      .integer("project_id")
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
