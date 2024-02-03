<script>
      let foodPreferances = [
        {
          preferance: 'Test',
        },
        {
          preferance: 'Test',
        },
	      {
        preferance: 'Test',
        },
        {
        preferance: 'Test',
        },
        {
        preferance: 'Test',
        },
        {
        preferance: 'Test',
        },
        {
        preferance: 'Test',
        },
        {
        preferance: 'Test',
        },
        {
        preferance: 'Test',
        },
      ]

      let musicPreferances = [
        {
          preferance: 'Test',
        },
        {
          preferance: 'Test',
        },
	      {
        preferance: 'Test',
        },
        {
        preferance: 'Test',
        },
        {
        preferance: 'Test',
        },
      ]

      let interests = [
        {
          preferance: 'Test',
        },
        {
          preferance: 'Test',
        },
	      {
        preferance: 'Test',
        },
        {
        preferance: 'Test',
        },
        {
        preferance: 'Test',
        },
        {
        preferance: 'Test',
        },
        {
        preferance: 'Test',
        },
      ]
  </script>
  
  <div class="relative w-[97vw] h-full z-10 top-[15vw] mb-[1vw]">
    <div class="box bg-whitebackground w-full h-[26vw] rounded-lg p-[0.1vw]">
      <div class="w-[32vw] text-[2vw] ml-[1vw]">
        <p class="font-bold m-[1.3vw]">Preferances</p>  
      </div>
  
      <!-- Flex Container for All Preferences -->
      <div class="flex justify-between w-full">
        <!-- Food Preferences -->
        <div class="w-[33vw] text-[1.5vw]">
          <p class="font-bold ml-[2.5vw]">Food preferances</p> 
          <div class="flex flex-wrap ml-[2.5vw] mt-[1vw]">
            {#each foodPreferances as foodPreferances}
            <div class="flex text-[1.3vw] items-center mr-[0.5vw] mb-[1vw] justify-center w-[9vw] py-[0.5vw] border-2 border-gray-300 rounded-full">
              <span>{foodPreferances.preferance}</span>
            </div>
            {/each}
          </div>
        </div>
  
        <!-- Music Preferences -->
        <div class="w-[33vw] text-[1.5vw]">
          <p class="font-bold ml-[2.5vw]">Music preferances</p>
          <div class="flex flex-wrap ml-[2.5vw] mt-[1vw]">
            {#each musicPreferances as musicPreferances}
            <div class="flex text-[1.3vw] items-center mr-[0.5vw] mb-[1vw] justify-center w-[9vw] py-[0.5vw] border-2 border-gray-300 rounded-full">
              <span>{musicPreferances.preferance}</span>
            </div>
            {/each}
          </div>
        </div>
  
        <!-- Interests -->
        <div class="w-[33vw] text-[1.5vw]">
          <p class="font-bold ml-[2.5vw]">Interests</p>
          <div class="flex flex-wrap ml-[2.5vw] mt-[1vw]">
            {#each interests as interests}
            <div class="flex text-[1.3vw] items-center mr-[0.5vw] mb-[1vw] justify-center w-[9vw] py-[0.5vw] border-2 border-gray-300 rounded-full">
              <span>{interests.preferance}</span>
            </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
  
