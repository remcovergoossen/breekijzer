<template>
  <div>
    <div class="mailbox">
      <div
        class="message-center overflow-auto position-relative"
        v-for="notification in notifications"
        :notification="notification"
        :key="notification.notificationtitle"
      >
        <!-- Message -->
        <a
          href="javascript:void(0)"
          class="d-flex align-items-center border-bottom d-block px-1 py-1"
        >
          <vs-button
            radius
            color
            :class="[notification.btnbg]"
            type="filled"
            :icon="notification.btnicon"
          ></vs-button>
          <div class="mail-contnet d-inline-block w-75 pl-1 align-middle">
            <h6 class="message-title mt-1">
              {{ notification.notificationtitle }}
            </h6>
            <span
              class="mail-desc d-block text-truncate overflow-hidden text-nowrap text-muted"
              >{{ notification.notificationdesc }}</span
            >
            <span
              class="time d-block text-truncate overflow-hidden text-nowrap text-muted"
              >{{ notification.notificationtime }}</span
            >
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RecentNotification',
  props: {
    comment: Object
  },
  data: () => ({
    title: 'RecentNotification',
    notifications: [
      {
        btnbg: 'vs-button-danger',
        btnicon: 'error',
        notificationtitle: 'Update Error',
        notificationdesc: 'There was a problem installing an update',
        notificationtime: '9:30 AM'
      },
      {
        btnbg: 'vs-button-warning',
        btnicon: 'update',
        notificationtitle: 'Pending Restart',
        notificationdesc: 'Server S0MDTW0001G is pending restart',
        notificationtime: '9:10 AM'
      },
      {
        btnbg: 'vs-button-warning',
        btnicon: 'update',
        notificationtitle: 'Pending Restart',
        notificationdesc: 'Server S0MDTW0001G is pending restart',
        notificationtime: '9:10 AM'
      },
      {
        btnbg: 'vs-button-warning',
        btnicon: 'perm_data_setting',
        notificationtitle: 'Settings',
        notificationdesc: 'You can customize this template as you want',
        notificationtime: '9:08 AM'
      },
      {
        btnbg: 'vs-button-danger',
        btnicon: 'face',
        notificationtitle: 'Pavan kumar',
        notificationdesc: 'Just see the my admin!',
        notificationtime: '9:02 AM'
      }
    ]
  })
}
</script>
