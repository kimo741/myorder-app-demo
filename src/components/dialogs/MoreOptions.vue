<template>
  <q-list
    bordered
    separator
    padding
    class="bg-white q-pa-sm"
    style="border-radius: 14px"
  >
    <!-- //////////////////////////////////////// -->
    <q-item @click="$emit('emitUnfollow')" clickable v-ripple>
      <q-item-section avatar>
        <q-icon name="img:icon/Profile.png" />
      </q-item-section>
      <q-item-section side>إلغاء متابعة المطعم</q-item-section>
    </q-item>
    <!-- //////////////////////////////////////// -->
    <q-item @click="$emit('emitToggleLike')" clickable v-ripple>
      <q-item-section avatar>
        <q-icon name="img:icon/Love.png" />
      </q-item-section>
      <q-item-section side>اضافة / حزف الأعجاب</q-item-section>
    </q-item>
    <!-- //////////////////////////////////////// -->
    <q-item @click="$emit('emitMute')" clickable v-ripple>
      <q-item-section avatar>
        <q-icon name="img:icon/mute.png" />
      </q-item-section>
      <q-item-section side>كتم /ميوت المطعم</q-item-section>
    </q-item>
    <!-- //////////////////////////////////////// -->
    <q-item @click="$emit('emitReport')" clickable v-ripple>
      <q-item-section avatar>
        <q-icon name="img:icon/info.png" />
      </q-item-section>
      <q-item-section side>تبليغ عن البوستة</q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {};
</script>

<style>
</style>
