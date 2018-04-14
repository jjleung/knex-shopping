exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("products").insert([
        {
          title: "thing",
          description: "stuff",
          inventory: 1,
          price: 40
        },
        {
          title: "thang",
          description: "staff",
          inventory: 2,
          price: 20
        },
        {
          title: "thong",
          description: "stoof",
          inventory: 3,
          price: 10
        }
      ]);
    });
};
