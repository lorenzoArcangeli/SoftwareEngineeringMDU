<script lang="ts">

    import Info from '../info.svelte';
    import Preferances from '../preferances.svelte';
    import Listings from '../listings.svelte';
    import Reviews from '../reviews.svelte';
    import Photos from '../photos.svelte';

  </script>
  
  
  <div class="h-[150vw] flex">
    <div class="flex-grow flex">
      <div class="p-[1vw] flex-grow bg-complementary ">
        <div class="absolute top-[0vw] z-0">
          <Info />
          <Preferances />
          <Listings />
          <Photos />
          <Reviews />
        </div>
      </div>
  </div>
</div>
  