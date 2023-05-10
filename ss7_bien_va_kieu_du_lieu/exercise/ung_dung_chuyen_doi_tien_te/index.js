

 function do_something(){
         let tinh1 = document.getElementById("value1").value;
         let tinh2 = document.getElementById("value2").value;
         let ketqua = document.getElementById("money").value;
         if (tinh1 == "VND" && tinh2 == "USD"){
           let  ketqua1 = ketqua / 23000
             document.write('Result : ' + ketqua1)
         } else {
             let ketqua2 = ketqua * 23000
             document.write('Result : ' + ketqua2)
         }
 }