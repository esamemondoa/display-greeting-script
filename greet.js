<script>
  var Greeting = "Hello. ";
  var Today = new Date();
  var CurrentHour = Today.getHours();
    if (CurrentHour < 12) { Greeting = "Good Morning. "; }
    if (CurrentHour >= 12 && CurrentHour < 16) { Greeting = "Good Afternoon. "; } 
    if (CurrentHour >= 17) { Greeting = "Good Evening. "; } document.write(Greeting);
</script>
<noscript>Hello. </noscript>
