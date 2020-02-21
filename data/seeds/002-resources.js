
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {ResourceName: "Computer"},
        {ResourceName: "Conference Room"},
        {ResourceName: "Microphone"},
        {ResourceName: "Projector"},
        {ResourceName: "Van"},
        {ResourceName: "Hammer"},
        {ResourceName: "Bleach"},
        {ResourceName: "Trash Bags"},
        {ResourceName: "Shovels"},
        {ResourceName: "Flashlight", "ResourceDesc": "Use this when the lights get low"}
      ]);
    });
};
