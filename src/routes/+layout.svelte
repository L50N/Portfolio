<script>
 import "../app.css";
 import Footer from "$lib/components/Footer.svelte";
</script>

<div class="min-h-screen flex flex-col">
 <!-- In diesem Slot wird der Inhalt der Seite eingebettet. -->
 <div class="flex-grow pt-[3.05rem] md:pt-[3.25rem] font-instrument font-bold flex items-center flex-col px-8 sm:px-18 md:px-0 overflow-x-hidden p-0 m-0">
  <div class="md:w-[72vw] md:max-w-[104rem] flex-grow w-full mx-auto">
   <div class="flex flex-grow">
    <div class="w-full">
     <slot />
    </div>
   </div>
  </div>
 </div>
 <Footer class="mt-auto" />
</div>