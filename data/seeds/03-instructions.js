exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("intructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("intructions").insert([
        { step_number: 1, intruction: "fill a pot with water", recipe_id: 2 },
        { step_number: 2, intruction: "bring water to a boil", recipe_id: 2 },
        { step_number: 3, intruction: "add ramen packet", recipe_id: 2 },
        {
          step_number: 1,
          intruction: "place burger one the grill",
          recipe_id: 3
        },
        {
          step_number: 2,
          intruction: "cook one one side for eight minutes",
          recipe_id: 3
        },
        {
          step_number: 1,
          intruction: "heat pasta sauce in pan for 5 minutes",
          recipe_id: 1
        },
        {
          step_number: 2,
          intruction: "add cheese to pan",
          recipe_id: 1
        }
      ]);
    });
};
