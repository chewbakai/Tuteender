'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tutors', [{
      // tutorName: 'Kirk Poro',
      // picture:{
      //    path: 'img/tutors/kirk.jpg',
      //   mimetype: 'image/jpeg'
      // },
      // tutorEmail: '18104963@usc.edu.ph ',
      // status: 'Available',
      // rate: '250/hr',
      // description:'Hi, Im Kirk! Im very fluent in coding especially in C! Hit me up if you need help, my schedule is super flexible! :)',
      // createdAt: new Date(),
      // updatedAt: new Date()
      // tutorName: 'Kyrah Ceniza',
      // picture:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdsc.community.dev%2Fevents%2Fdetails%2Fdeveloper-student-clubs-university-of-san-carlos-presents-h1hello-worldh1%2F&psig=AOvVaw2kQKXQbuGBpY6WT9iLOBJG&ust=1622832379519000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCQ8e6P_PACFQAAAAAdAAAAABAD',
      // tutorEmail: '18400129@usc.edu.ph ',
      // status: 'Available',
      // rate: '200/hr',
      // description:'im shy and quiet hehe but can teach quiet few things as well lol',
      // createdAt: new Date(),
      // updatedAt: new Date()
      // tutorName: 'Bruce Vincent Alturas',
      // picture:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdsc.community.dev%2Fevents%2Fdetails%2Fdeveloper-student-clubs-university-of-san-carlos-presents-dsc-san-carlos-info-session%2F&psig=AOvVaw0MM2AXR6H8fZN5JbZhnSuQ&ust=1622832445996000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiBkpKQ_PACFQAAAAAdAAAAABAR',
      // tutorEmail: '18400129@usc.edu.ph ',
      // status: 'Available',
      // rate: '300/hr',
      // description:' Hi! Im a 2nd year student at University of San Carlos and is currently a deans lister',
      // createdAt: new Date(),
      // updatedAt: new Date()
      tutorName: 'Jamiel Catalan',
      picture:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdsc.community.dev%2Fevents%2Fdetails%2Fdeveloper-student-clubs-university-of-san-carlos-presents-philippine-android-weekend-2020%2F&psig=AOvVaw3VcpK01P0DKj_Kan2VKyQX&ust=1622832688417000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNiYxoKR_PACFQAAAAAdAAAAABAD',
      tutorEmail: '18400129@usc.edu.ph ',
      status: 'Available',
      rate: '250/hr',
      description:'MongoDB not-so-god | willing to help!',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tutors', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
