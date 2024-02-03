<script>
    export let text = 'Sample Text';
    export let color = "blue";
    export let size = 100;

    let hypotenuse = size / Math.sqrt(2);
    let offset = hypotenuse / 2;
  </script>
  
  <div class="relative flex items-center">
    <div class="text-textdark" style="width:{size / 8.3}vw; height:{size / 26}vw; background-color: {color};">
      <div class="flex justify-center items-center h-full">
        <span style="font-size: 0.8vw;" class="z-30">{text}</span>
      </div>
    </div>
  
    <div class="rotate-45 absolute z-10" style="width:{hypotenuse / 27}vw; height:{hypotenuse / 27}vw; left:{(size /2.165) - offset}vw; background-color: {color};"/>
  </div>