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
    }),
    vmrc: _.times(10, function (n) {
      return {
        id: n + 1,
        device: `Device${n + 1}`,
        url:
          'vmrc://clone:cst-VCT-52427363-264e-4e08-3c3e-31f39d9cd807--tp-17-8E-BD-8E-C3-7F-1F-19-D4-48-8D-F4-10-8F-18-FF-24-1A-40-8B cst-VCT-522cb86f-e34e-bffe-678e-49b8ab2c7009--tp-A8-EB-FB-6A-25-E8-9B-AE-87-9C-B4-81-55-F9-0D-DB-9C-3C-C9-57 cst-VCT-52e668e4-552e-47d8-3587-126d37a6c5b0--tp-ED-D9-2B-40-B6-6C-5E-FB-09-78-7E-AB-BA-8A-C3-FB-6E-8E-1E-7D@s0vvcs0018i.infra.cbsp.nl:443/?moid=vm-88950'
      }
    })
  }
}
