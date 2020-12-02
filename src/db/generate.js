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
        sccmstate: _.sample(['Success', 'InProgress', 'Error', 'Unknown']),
        localstate: _.sample([
          'Installing',
          'PendingSoftReboot',
          'Downloading',
          'WaitingDeadline'
        ])
      }
    }),
    patches: _.times(15, function (n) {
      return {
        id: n + 1,
        deploymentid: _.random(1, 5),
        articleid: n + 200001
      }
    }),
    checklisttodo: _.times(10, function (n) {
      return {
        id: n + 1,
        todotitle: `Title${n + 1}`,
        todosubtitle: `Subtitle${n + 1}`,
        state: _.sample(['todo', 'inprogress', 'completed', 'onhold']),
        badgeactive: _.sample([true, false])
      }
    })
  }
}
