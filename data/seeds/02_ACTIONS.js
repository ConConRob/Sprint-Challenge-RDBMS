
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, description: 'make server', project_id:1},
        {id: 2, description: 'get photos ', project_id:1},
        {id: 3, description: 'make react app', project_id:1},
        {id: 4, description: 'Get supplies', note: "-10 2x4s, -300 nails" , project_id:2},
        {id: 5, description: 'Put nails in 2x4s', project_id:2},
        {id: 6, description: 'cook new things', project_id:3},
        {id: 7, description: 'write it down', project_id:3},
      ]);
    });
};
