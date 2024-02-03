<script lang="ts">
import Icon from '@iconify/svelte';

    let info = {
      cityCountry: "Hallstahammar, Sweden",
      origin: "Bosnia",
      languages: "Swedish, Bosnian, English",
      gender: "Male",
      birthday: new Date(2002, 6, 3),
      about: "I am a 21 year old student studying computer science at Mälardalens Universitet in Västerås. I am however from Hallstahammar so my listings will be here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus vel felis nec finibus. In ut massa neque. Aenean hendrerit volutpat ligula, in ornare tortor semper in. Nulla at volutpat lacus. Sed sollicitudin, nibh at lobortis pharetra, magna nisi sollicitudin tortor, vitae aliquet magna ante pellentesque tellus. Vestibulum consequat ante in arcu pretium rutrum. Fusce vulputate molestie tortor sed aliquet. Ut sed convallis urna. In ultrices eu tellus quis interdum. Phasellus non tristique arcu. Morbi enim arcu, imperdiet vitae ipsum eget, ultricies pulvinar metus. Fusce eleifend augue ut orci mattis, a auctor dolor convallis. Duis at tempus nulla. Quisque nec nulla sed enim dignissim malesuada. Nulla eu erat ac erat vestibulum rutrum sit amet in sem. ",
    

      location: "City Center",
      accommodationType: "Apartment",
      tenantsNumber: 1,
      kidsNumber: 2,


      name: "Almin Alibasic",
      banner: "https://firebasestorage.googleapis.com/v0/b/bld-images.appspot.com/o/images%2FUsers%2F0%2FBanner.png?alt=media&token=30025770-e51c-42bc-80a9-6f79062669a5",
      profilePicture: "https://firebasestorage.googleapis.com/v0/b/bld-images.appspot.com/o/images%2FUsers%2F0%2FProfilePic.JPG?alt=media&token=333b333c-b8b0-4ab3-a16b-b6b975c1bc2a"
    };

    
  let showModal = false;
  let isShortText = info.about.length <= 100;
  let shortText = isShortText ? info.about : `${info.about.substring(0, 100)}...`;

  function toggleModal() {
    showModal = !showModal;
  }

  function handleKeyUp(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    showModal = false;
  }
}

  function handleClickOutside(event: Event) {
    if (event.target instanceof HTMLElement) {
    if (event.target.classList.contains('modal-backdrop')) {
            showModal = false;
        }
      }
    }
</script>

<div class="relative w-[97vw] h-full top-[15vw] mb-[1vw]">
  <img src="{info.banner}" alt="" class="absolute top-[-14vw] left-0 w-[97vw] h-[14vw] object-cover object-center rounded-t-lg">
    <div class="box bg-whitebackground h-[26vw] rounded-lg p-[1.5vw]">

      <div class="text-textdark drop-shadow-2xl font-bold text-[2vw] w-[40vw] z-30 relative top-[0vw] left-[1vw]">{info.name}</div>
    
    <div class="absolute flex items-center z-10 bottom-[24.5vw] left-[2.5vw] w-[11vw]">
      <img src="{info.profilePicture}" alt="" class="w-[10vw] h-[10vw] rounded-full object-cover border-[0.3vw] border-whitebackground">
    </div>


        <div class="w-[32vw] text-[1.2vw]">
            <p class="font-semibold m-[1.3vw]">{info.cityCountry}</p>  
            <p class="m-[1.3vw]"><span class="font-semibold">Country of Origin:</span> {info.origin}</p>
            <p class="m-[1.3vw]"><span class="font-semibold">Gender:</span> {info.gender}</p>
            <p class="m-[1.3vw]"><span class="font-semibold">Date of birth:</span> {info.birthday.toLocaleDateString()}</p>
            <p class="m-[1.3vw]"><span class="font-semibold">About Myself:</span> {shortText}
                {#if !isShortText}
                 <button class="underline" on:click={toggleModal}>Show more</button>
                 {/if}
            </p>
        </div>


        <div class="absolute w-[32vw] text-[1.3vw] right-[1vw] top-[2vw]">
          <p class="flex items-center m-[2vw]"><Icon class="text-black w-[2vw] h-[2vw] mr-[1vw]" icon="cil:language" /><span class="font-semibold mr-[0.5vw]">Languages: </span> {info.languages}</p>
          <p class="flex items-center m-[2vw]"><Icon class="text-black w-[2vw] h-[2vw] mr-[1vw]" icon="ph:house" /><span class="font-semibold mr-[0.5vw]">Type of accommidation: </span> {info.accommodationType}</p>
          <p class="flex items-center m-[2vw]"><Icon class="text-black w-[2vw] h-[2vw] mr-[1vw]" icon="ep:location" /><span class="font-semibold mr-[0.5vw]">Location: </span> {info.location}</p>
          <p class="flex items-center m-[2vw]"><Icon class="text-black w-[2vw] h-[2vw] mr-[1vw]" icon="uil:kid" /><span class="font-semibold mr-[0.5vw]">Number of kids: </span> {info.kidsNumber}</p>
          <p class="flex items-center m-[2vw]"><Icon class="text-black w-[2vw] h-[2vw] mr-[1vw]" icon="ph:person" /><span class="font-semibold mr-[0.5vw]">How many live in my house: </span> {info.tenantsNumber}</p>
        </div>


        </div>
      </div>

    {#if showModal}
      <div class="fixed inset-0 bg-blackbackground bg-opacity-50 flex w-full text-[1.5vw] justify-center items-center z-50 modal-backdrop" on:click={handleClickOutside} on:keyup={handleKeyUp} tabindex="-1" role="button" aria-label="Close modal"> 
        <div class="bg-white p-4 rounded-lg w-[60vw]">
          <p class="m-[2vw] text-[1.5vw]">{info.about}</p>
          <button class="text-blue-600 mb-[2vw] ml-[2vw] text-[1.5vw]" on:click={toggleModal}>Close</button>
        </div>
      </div>
    {/if}
