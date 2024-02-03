<script lang="ts">

    import Info from './info.svelte';
    import Preferances from './preferances.svelte';
    import Listings from './listings.svelte';
    import Reviews from './reviews.svelte';
    import Photos from './photos.svelte';

    let selectedTab: string = 'info';
  
    function selectTab(tab: string): void {
      selectedTab = tab;
    }

    let info = {
      name: "Almin Alibasic",
      profilePicture: "https://firebasestorage.googleapis.com/v0/b/bld-images.appspot.com/o/images%2FUsers%2F0%2FBanner.png?alt=media&token=30025770-e51c-42bc-80a9-6f79062669a5",
      banner: "https://firebasestorage.googleapis.com/v0/b/bld-images.appspot.com/o/images%2FUsers%2F0%2FProfilePic.JPG?alt=media&token=333b333c-b8b0-4ab3-a16b-b6b975c1bc2a",
    };
  </script>
  
  
  <div class="mx-auto h-screen overflow-hidden flex">
    <div class="flex-grow flex flex-col">
      <div class="p-5 flex-grow overflow-auto bg-complementary">
        <div class="relative h-[19vw] z-10">
          <img src="{info.profilePicture}" alt="" class="absolute top-0 left-0 w-[97vw] h-[14vw] object-cover object-center rounded-t-lg">
          <div class="absolute bottom-0 h-[5vw] pl-[15vw] bg-whitebackground w-full flex rounded-b-lg">
          
          <a href="#" class="tabs {selectedTab === 'info' ? 'border-textgray border-b-[0.3vw] font-semibold' : 'border-transparent'}" on:click|preventDefault={() => selectTab('info')}>
            Information
          </a>
          <a href="#" class="tabs {selectedTab === 'preferances' ? 'border-textgray border-b-[0.3vw] font-semibold' : 'border-transparent'}" on:click|preventDefault={() => selectTab('preferances')}>
            Preferances
          </a>
          <a href="#" class="tabs {selectedTab === 'listings' ? 'border-textgray border-b-[0.3vw] font-semibold' : 'border-transparent'}" on:click|preventDefault={() => selectTab('listings')}>
            Listings
          </a>
          <a href="#" class="tabs {selectedTab === 'reviews' ? 'border-textgray border-b-[0.3vw] font-semibold' : 'border-transparent'}" on:click|preventDefault={() => selectTab('reviews')}>
             Reviews
           </a>
          <a href="#" class="tabs {selectedTab === 'photos' ? 'border-textgray border-b-[0.3vw] font-semibold' : 'border-transparent'}" on:click|preventDefault={() => selectTab('photos')}>
            Photos
          </a>
          <a href="#" class="tabs">
            Edit account
          </a>
        </div>
         
        <div class="ml-[2vw] mb-[2vw] text-textlight drop-shadow-2xl font-bold text-[2vw] z-10 relative top-[9vw] left-[13vw]">{info.name}</div>
          <div class="absolute flex items-center z-10 bottom-[1.5vw] left-[2.5vw] w-[11vw]">
            <img src="{info.banner}" alt="" class="w-[10vw] h-[10vw] rounded-full object-cover border-[0.3vw] border-whitebackground">
          </div>
          {#if selectedTab === 'info'}
            <Info />
          {:else if selectedTab === 'preferances'}
            <Preferances />
          {:else if selectedTab === 'listings'}
            <Listings />
          {:else if selectedTab === 'reviews'}
            <Reviews />
          {:else if selectedTab === 'photos'}
            <Photos />
          {/if}
      </div>
    </div>
  </div>
</div>
  