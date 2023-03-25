"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("amenities", [
      {
        type: "Restroom",
        name: "Restroom by the main entrance.",
        latitude: 1.40438,
        longitude: 103.79102,
      },
      {
        type: "Restroom",
        name: "Restroom by Ah Meng Restaurant",
        latitude: 1.40436,
        longitude: 103.79347,
      },
      {
        type: "Restroom",
        name: "Restroom at Reptile Garden",
        latitude: 1.40244,
        longitude: 103.79465,
      },
      {
        type: "Restroom",
        name: "Restroom at Rainforest Kidzworld",
        latitude: 1.40338,
        longitude: 103.79744,
      },
      {
        type: "Restroom",
        name: "Restroom by KFC",
        latitude: 1.40353,
        longitude: 103.79676,
      },
      {
        type: "Restroom",
        name: "Restroom near Primate Kingdom",
        latitude: 1.4053,
        longitude: 103.7942,
      },
      {
        type: "Restroom",
        name: "Restroom near Pavilion by the Lake",
        latitude: 1.40599,
        longitude: 103.79445,
      },
      {
        type: "Restaurant",
        name: "Ah Meng Bistro",
        latitude: 1.4039,
        longitude: 103.79353,
      },
      {
        type: "Restaurant",
        name: "Ah Meng Restaurant",
        latitude: 1.40415,
        longitude: 103.7936,
      },
      {
        type: "Restaurant",
        name: "Kentucky Fried Chicken",
        latitude: 1.40349,
        longitude: 103.79684,
      },
      {
        type: "Food & Drink Kiosk",
        name: null,
        latitude: 1.40528,
        longitude: 103.79605,
      },
      {
        type: "Nursing Room",
        name: null,
        latitude: 1.40338,
        longitude: 103.79744,
      },
      {
        type: "Nursing Room",
        name: null,
        latitude: 1.40338,
        longitude: 103.79744,
      },
      {
        type: "Diaper Changing Facility",
        name: null,
        latitude: 1.40338,
        longitude: 103.79744,
      },
      {
        type: "Diaper Changing Facility",
        name: null,
        latitude: 1.40338,
        longitude: 103.79744,
      },
      {
        type: "Stroller, Wheelchairs, Wagons & Electric Scooters Rental",
        name: null,
        latitude: 1.40453,
        longitude: 103.79101,
      },
      {
        type: "Viewing for Guests with Disabilities",
        name: null,
        latitude: 1.40458,
        longitude: 103.79494,
      },
      {
        type: "Viewing for Guests with Disabilities",
        name: null,
        latitude: 1.40346,
        longitude: 103.79648,
      },
      {
        type: "Tram Stop",
        name: "Tram Stop #1",
        latitude: 1.40427,
        longitude: 103.79379,
      },
      {
        type: "Tram Stop",
        name: "Tram Stop #2",
        latitude: 1.40585,
        longitude: 103.7945,
      },
      {
        type: "Tram Stop",
        name: "Tram Stop #3",
        latitude: 1.40311,
        longitude: 103.79362,
      },
      {
        type: "Tram Stop",
        name: "Tram Stop #4",
        latitude: 1.40188,
        longitude: 103.79585,
      },
      {
        type: "Restaurant",
        name: "KFC",
        latitude: 1.40353,
        longitude: 103.79676,
      },
      {
        type: "Food & Drink Kiosk",
        name: "Food and Drink Kiosk by Elephants of Asia",
        latitude: 1.40488,
        longitude: 103.79547,
      },
      {
        type: "Food & Drink Kiosk",
        name: "Food and Drink Kiosk by Shaw Foundation Amphitheatre",
        latitude: 1.40458,
        longitude: 103.79494,
      },
      {
        type: "Water Dispenser",
        name: null,
        latitude: 1.40338,
        longitude: 103.79744,
      },
      {
        type: "Water Dispenser",
        name: null,
        latitude: 1.40338,
        longitude: 103.79744,
      },
      {
        type: "Water Dispenser",
        name: "Water dispenser near KFC",
        latitude: 1.40353,
        longitude: 103.79676,
      },
      {
        type: "Water Dispenser",
        name: null,
        latitude: 1.40527,
        longitude: 103.79416,
      },
      {
        type: "Shelter",
        name: "Pavilion by the Lake",
        latitude: 1.40604,
        longitude: 103.79446,
      },
      {
        type: "Shelter",
        name: "Garden with a View",
        latitude: 1.4033,
        longitude: 103.79524,
      },
      {
        type: "First Aid Station",
        name: null,
        latitude: 1.40331,
        longitude: 103.79702,
      },
      {
        type: "AED",
        name: null,
        latitude: 1.40346,
        longitude: 103.79618,
      },
      {
        type: "AED",
        name: null,
        latitude: 1.4039,
        longitude: 103.79353,
      },
      {
        type: "Cool Zone",
        name: null,
        latitude: 1.40415,
        longitude: 103.7936,
      },
      {
        type: "Cool Zone",
        name: null,
        latitude: 1.40608,
        longitude: 103.79354,
      },
      {
        type: "Cool Zone",
        name: null,
        latitude: 1.40353,
        longitude: 103.79676,
      },
      {
        type: "Cool Zone",
        name: null,
        latitude: 1.40252,
        longitude: 103.79476,
      },
      {
        type: "Cool Zone",
        name: null,
        latitude: 1.40181,
        longitude: 103.79467,
      },
      {
        type: "Wildlife Experiences Meeting Point",
        name: null,
        latitude: 1.40446,
        longitude: 103.79127,
      },
      {
        type: "Lockers",
        name: "Lockers by Wet Play area",
        latitude: 1.40338,
        longitude: 103.79744,
      },
      {
        type: "Gift Shop",
        name: "Rainforest Kidzworld Gift Shop",
        latitude: 1.40325,
        longitude: 103.79655,
      },
      {
        type: "Gift Shop",
        name: "Australasia Gift Shop",
        latitude: 1.40576,
        longitude: 103.79319,
      },
      {
        type: "Gift Shop",
        name: "Mandai Mart",
        latitude: 1.40465,
        longitude: 103.79092,
      },
      {
        type: "First Aid Station",
        name: null,
        latitude: 1.40331,
        longitude: 103.79704,
      },
      {
        type: "Automated External Defibrillatior",
        name: null,
        latitude: 1.40338,
        longitude: 103.79616,
      },
      {
        type: "Picnic Area",
        name: null,
        latitude: 1.4044,
        longitude: 103.79204,
      },
      {
        type: "Shows",
        name: "Animal Playground",
        latitude: 1.40381,
        longitude: 103.79317,
      },
      {
        type: "Shows",
        name: "Shaw Foundation Amphitheater",
        latitude: 1.40458,
        longitude: 103.79494,
      },
      {
        type: "Play Area",
        name: "Houbii Spot Rope Course",
        latitude: 1.40307,
        longitude: 103.79547,
      },
      {
        type: "Shows",
        name: "Rainforest Kidzworld Amphitheatre",
        latitude: 1.40346,
        longitude: 103.79648,
      },
      {
        type: "Shows",
        name: "Elephants of Asia",
        latitude: 1.40526,
        longitude: 103.79567,
      },
      {
        type: "Play Area",
        name: "Wet Play",
        latitude: 1.40342,
        longitude: 103.79716,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("amenities", null, {});
  },
};
