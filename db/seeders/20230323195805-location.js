"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("locations", [
      {
        name: "Australasia",
        description:
          "While most of the world's marsupials are found in Australia, marsupials also occur naturally in New Guinea, Indonesia and surrounding islands and the Americas. Besides the grey kangaroos and agile wallabies from Australia, this exhibit also showcases the tree kangaroos from Papua New Guinea.",
        type: "zone",
        latitude: 1.406,
        longitude: 103.79336,
      },
      {
        name: "Elephants of Asia",
        description:
          "Revered in Hinduism and Buddhism, elephants have profoundly influenced the Asian way of life since their domestication 4,000 years ago. Featuring Burmese-style architecture, this one-hectare exhibit showcases these largest of living land animals and their associated history and culture.",
        type: "zone",
        latitude: 1.40526,
        longitude: 103.79567,
      },
      {
        name: "Fragile Forest",
        description:
          "Step into this 20,000 cubic metre biodome that mimics a tropical rainforest habitat. Come face-to-face with its furry and feathered inhabitants as you journey through the various strata of the rainforest. What's more, close encounters of the spineless kind await you at Discovery Outpost!",
        type: "zone",
        latitude: 1.4022,
        longitude: 103.79526,
      },
      {
        name: "Great Rift Valley of Ethiopia",
        description:
          "Together with the nimble Nubian ibexes, the Hamadryas baboons rule the rugged rockscape. Explore further to meet the meerkats, black-backed jackals and rock hyraxes. Also stop by the rustic dwelling huts recreating life in the Konso and Amharic villages.",
        type: "zone",
        latitude: 1.40521,
        longitude: 103.79339,
      },
      {
        name: "Primate Kingdom",
        description:
          "Each primate species is designated its own 'island'. Add to that a landscaping of trees, a surrounding moat and you get 'castles' in which our furry rulers dwell. Here, our primates need not be king of the jungle to rule their own kingdom!",
        type: "zone",
        latitude: 1.40525,
        longitude: 103.79474,
      },
      {
        name: "Rainforest KidzWorld",
        description:
          "Swing, splash, slide, hop, jump! Let your hair down and play your heart out here. Take a spin on the Wild Animal Carousel, say hello to the falabellas and hop by Buddy Barn to cosy up to some furry friends.",
        type: "zone",
        latitude: 1.40309,
        longitude: 103.79635,
      },
      {
        name: "Reptile Garden",
        description:
          "RepTopia. Tortoise Shell'ter. Sungei Buaya. All these exhibits and more can be found on the sprawling grounds of Reptile Garden. Come enter the dragon's lair and learn more about the lives and loves of these prehistoric creatures that have been around since the age of the dinosaurs.",
        type: "zone",
        latitude: 1.403,
        longitude: 103.79472,
      },
      {
        name: "RepTopia",
        description:
          "Home to over 60 species of reptiles and amphibians, a third of which have never been seen here before, RepTopia takes you on a tour of four unique geographical zones. Multi-species displays, keeper demos, interactive stations and play elements interface to make this a most 'snake'-tacular zone.",
        type: "zone",
        latitude: 1.40252,
        longitude: 103.79476,
      },
      {
        name: "Tortoise Shell-ter",
        description:
          "Tortoise Shell-ter is a naturalistic sanctuary offering optimum conditions for our chelonian collection to breed and display their natural behaviour. Here, you can learn about our 'shell-ebrities' - some of the world's rarest tortoises - and ongoing conservation efforts to increase their numbers.",
        type: "zone",
        latitude: 1.40315,
        longitude: 103.79499,
      },
      {
        name: "Treetops Trail",
        description:
          "Replicating a rainforest habitat, Treetops Trail showcases\r\nanimals at different layers of a forest.",
        type: "zone",
        latitude: 1.40484,
        longitude: 103.79142,
      },
      {
        name: "Wild Africa",
        description:
          "Africa boasts a diverse range of habitats, from tropical rainforests to harsh deserts. The animals found there have adapted accordingly in no end of amazing ways. As a result, the continent counts among its endemic species the tallest, the fastest and the largest creatures on land.",
        type: "zone",
        latitude: 1.40322,
        longitude: 103.79376,
      },
      {
        name: "Free Ranging Orangutan Island",
        description: null,
        type: "zone",
        latitude: 1.40369,
        longitude: 103.79383,
      },
      {
        name: "Free Ranging Orangutan Boardwalk",
        description: null,
        type: "zone",
        latitude: 1.40371,
        longitude: 103.79423,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("locations", null, {});
  },
};
