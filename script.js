flavours_array = [];

function submit()
{

      var flavour_1= document.getElementById("flavor_input_1").value;
      var flavour_2= document.getElementById("flavor_input_2").value;
      var flavour_3= document.getElementById("flavor_input_3").value;
      var flavour_4= document.getElementById("flavor_input_4").value;
      var flavour_5= document.getElementById("flavor_input_5").value;
      var flavour_6= document.getElementById("flavor_input_6").value;
     

      flavours_array.push(flavour_1);
      flavours_array.push(flavour_2);
      flavours_array.push(flavour_3);
      flavours_array.push(flavour_4);
      flavours_array.push(flavour_5);
      flavours_array.push(flavour_6);

      console.log(flavours_array);

      document.getElementById("display_name").innerHTML=flavours_array;
}