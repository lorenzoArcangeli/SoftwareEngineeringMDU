<script>
let imageUrls = [
    'https://firebasestorage.googleapis.com/v0/b/bld-images.appspot.com/o/images%2FUsers%2F0%2FPhotos%2FBanner.png?alt=media&token=5598c911-2516-4b48-9801-70863cca91cd',
    'https://firebasestorage.googleapis.com/v0/b/bld-images.appspot.com/o/images%2FUsers%2F0%2FPhotos%2F654e1d1fd8319d51d25dee1a_225B1765-2061-42FC-AD9B-B83825E00B70.png?alt=media&token=ff169fec-2fe6-4cae-bf3d-95932c85ab76',
    'https://firebasestorage.googleapis.com/v0/b/bld-images.appspot.com/o/images%2FUsers%2F0%2FPhotos%2FProfilePic.JPG?alt=media&token=7da99eee-7fe4-4d68-ad9c-a7e892da48d2', 
    'https://firebasestorage.googleapis.com/v0/b/bld-images.appspot.com/o/images%2FUsers%2F0%2FPhotos%2FSk%C3%A4rmbild%202023-12-08%20121120.png?alt=media&token=f85137b3-75d0-4864-a872-5573b22023b0',
    'https://firebasestorage.googleapis.com/v0/b/bld-images.appspot.com/o/images%2FUsers%2F0%2FPhotos%2FScreenshot%20(1).png?alt=media&token=5571a754-4afe-417e-b70f-a945da1c40e0',
    'https://firebasestorage.googleapis.com/v0/b/bld-images.appspot.com/o/images%2FUsers%2F0%2FPhotos%2Fpexels-justin-shaifer-1222271.jpg?alt=media&token=6b1e35dc-9e9a-467a-ac80-8b8f3d9bf5d7',
];
</script>

<div class="relative w-[97vw] h-full z-10 top-[15vw] mb-[1vw]">
    <div class="box bg-whitebackground w-full h-[26vw] rounded-lg p-[0.1vw]">
      <div class="w-[32vw] text-[2vw] ml-[1vw]">
        <p class="font-bold m-[1.3vw]">Photos</p>  
      </div>
      <div class="flex flex-nowrap overflow-x-auto relative top-[2vw] m-[2.2vw]">
          {#each imageUrls as url}
            <div class="w-[15vw] h-[15vw] min-w-[15vw] mr-[2vw] relative">   
              <img src={url} alt="Image" class="w-full h-full object-cover rounded-xl"/>
            </div>
            {/each}
        </div>
    </div>
    <div class="absolute top-0 right-0 pr-[2vw] pt-[0.7vw]">
      <span class="text-[3vw] font-bold">+</span>
    </div>
</div>