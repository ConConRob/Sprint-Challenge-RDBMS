exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(table) {
    table.increments();
    table
      .string("name", 120)
      .notNullable()
      .unique();
    table.string("description", 255);
    table.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
