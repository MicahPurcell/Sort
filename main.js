var name_of_the_student_array=[]
function submit(){
    var display_student_array=[]
    for (let i = 1; i <=4; i++){
        var name_of_the_student=document.getElementById('name_of_the_student_'+i).value
        console.log(name_of_the_student)
        name_of_the_student_array.push(name_of_the_student)
    }
       console.log(name_of_the_student_array)
       var length=name_of_the_student_array.length
       for (let j = 0; j <length; j++) {
      display_student_array.push("<h4>Name-"+name_of_the_student_array[j]+"</h4>")     
           
       }
    document.getElementById("display_name_with_commas").innerHTML=display_student_array
    var remove_comma=display_student_array.join(" ")
    document.getElementById("display_name_without_commas").innerHTML=remove_comma
   document.getElementById("submit_button").style.display="none"
   document.getElementById("sort_button").style.display="inline-block" 
} 
function sorting(){
    var sorted=name_of_the_student_array.sort()
    var display_sorted_array=[]
    var length=name_of_the_student_array.length
       for (let j = 0; j <length; j++) {
      display_sorted_array.push("<h4>Name-"+name_of_the_student_array[j]+"</h4>")     
           
       }
       document.getElementById("display_name_with_commas").innerHTML=display_sorted_array 
       var remove_comma=display_sorted_array.join(" ")
       document.getElementById("display_name_without_commas").innerHTML=remove_comma  
}