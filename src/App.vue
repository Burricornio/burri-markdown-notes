<template>
  <!-- Delete note -->
  <DeleteNote v-if="$store.state.deleting" />
  <div
    v-if="$store.state.user"
    class="
      container
      |
      min-h-1/2
      p-3
      my-3
      mx-auto
      |
      bg-white
      rounded-xl
      shadow-2xl
      |
      md:flex
    "
  >
    <!-- Left side -->
    <section class="md:w-1/4 p-3 mr-3 | bg-gray-100">
      <!-- Logout -->
      <a
        @click="$store.dispatch('userLogout')"
        href="#"
        class="underline text-center block font-bold m-3"
        >Logout</a
      >
      <!-- Search notes -->
      <SearchNote />
      <!-- Note list -->
      <NoteList />
    </section>

    <!-- Right side -->
    <section class="p-3 | flex-grow">
      <!-- Active note -->
      <ActiveNote />
    </section>
  </div>

  <!-- Login -->
  <div v-else>
    <a
      @click="$store.dispatch('userLogin')"
      href="#"
      class="w-full h-screen | flex justify-center items-center | underline"
      >Login please</a
    >
  </div>
</template>

<script>
import NoteList from '@/components/NoteList.vue'
import ActiveNote from '@/components/ActiveNote.vue'
import DeleteNote from '@/components/DeleteNote.vue'
import SearchNote from '@/components/SearchNote.vue'

export default {
  name: 'App',
  components: { NoteList, ActiveNote, DeleteNote, SearchNote }
}
</script>
