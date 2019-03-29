
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Build a portfolio', description: "This portfolio will help e get my dream job"},
        {id: 2, name: 'Build a tree house'},
        {id: 3, name: 'Write a cookbook'}
      ]);
    });
};
