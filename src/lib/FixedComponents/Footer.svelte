<script>
    import logo from "../../logo.svg";
    import Icon from '@iconify/svelte';
</script>

<footer class="px-[1vw] h-[10vw] border border-complementary flex justify-between items-center">
  <div class="relative left-[10%]">
    <p class="font-bold text-[1vw]">
      YEStravel
    </p>
    <p class="text-[0.7vw] my-[1vw]">
      Shared meal tastes better!
    </p>

    <div class="flex">
      <div class="w-[2VW] h-[2VW] flex items-center justify-center rounded-full bg-blackbackground mr-4">
        <a href="https://www.instagram.com/airbld_by_yestravel?igshid=NGVhN2U2NjQ0Yg%3D%3D" target="_blank" class="flex items-center justify-center">
          <Icon class="text-textlight w-[1.5vw] h-[1.5vw]" icon="mdi:youtube" />
        </a>
      </div>
    
      <div class="w-[2VW] h-[2VW] flex items-center justify-center rounded-full bg-blackbackground mr-4">
        <a href="https://www.instagram.com/airbld_by_yestravel?igshid=NGVhN2U2NjQ0Yg%3D%3D" target="_blank" class="flex items-center justify-center">
          <Icon class="text-textlight w-[1.5vw] h-[1.5vw]" icon="mdi:instagram" />
        </a>
      </div>
    
      <div class="w-[2VW] h-[2VW] flex items-center justify-center rounded-full bg-blackbackground mr-4">
        <a href="https://www.instagram.com/airbld_by_yestravel?igshid=NGVhN2U2NjQ0Yg%3D%3D" target="_blank" class="flex items-center justify-center">
          <Icon class="text-textlight w-[1.5vw] h-[1.5vw]" icon="gg:facebook" />
        </a>
      </div>
    
      <div class="w-[2VW] h-[2VW] flex items-center justify-center rounded-full bg-blackbackground">
        <a href="mailto:someone@example.com" class="flex items-center justify-center">
          <Icon class="text-textlight w-[1vw] h-[1vw]" icon="bi:send-fill" />
        </a>
      </div>
    </div>
    

    <img src={logo} alt="Logo" class="h-[3vw] mr-[1vw] absolute right-[-70vw] top-[2vw]" />
</div>
</footer>


<footer class="bg-blackbackground text-textlight px-[1vw] py-[0.3vw]">
  <div class="flex justify-between">
    <p class="ml-[10%]">© Copyright YEStravel 2022</p>

    <div class="flex justify-between mr-[10%]">
      <a href="/TermsAndConditions" class="mr-[2vw] underline">Terms and Conditions</a>
      <a href="/ContactUs" class="underline">Contact us</a>
    </div>
  </div>
</footer>