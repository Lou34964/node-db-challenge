
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {Name: 'John Wick', Desc: 'Try not to get caught.'},
        {Name: 'Attic Renovation'},
        {Name: 'Landscaping'}
      ]);
    });
};
