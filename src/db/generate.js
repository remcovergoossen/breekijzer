const { random } = require('core-js/fn/number')

module.exports = function () {
  var faker = require('faker')
  var _ = require('lodash')

  return {
    deployments: _.times(5, function (n) {
      return {
        id: n + 1,
        name: faker.name.jobType(),
        starttime: faker.date.future(0),
        deadline: faker.date.future(0.2)
      }
    }),
    devices: _.times(75, function (n) {
      return {
        id: n + 1,
        deploymentid: _.random(1, 5),
        name: `Device${n + 1}`,
        status: _.sample(['Success', 'InProgress', 'Error', 'Unknown'])
      }
    }),
    patches: _.times(15, function (n) {
      return {
        id: n + 1,
        deploymentid: _.random(1, 5),
        articleid: n + 200001
      }
    })
  }
}
