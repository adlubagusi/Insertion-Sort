function seekAngka(){
    var n = $("#jumlah_angka").val(); //var n adalah value dari inputan jumlah angka
    if(n>0){     // cek jika n > 0
        $("#area_angka").html(""); // kosongkan area angka 
        $("#area_hasil").html(""); // kosongkan area_angka
        for(var i = 1; i<=n;i++){  // mulai perulangan untuk mengambil value dari setiap inputan angka
            var id = i; // variabel id diisi dengan i
            var $div_angka = $("<div class='col-lg-2 box-angka'>");
            $div_angka.html("<input type='number' class='form-control' id='angka"+id+"' value='0'></div>");
            $("#area_angka").append($div_angka);
        }   
        $("#angka_tmp").val(n);  
        $("#area_angka_container").css("display","inline-block");
    }else{
        $("#area_angka_container").css("display","none");
        $("#area_hasil_container").css("display","none");
    }
}
function prosesUrut(){
    var n = $("#angka_tmp").val();
    if(n<2){
        alert("Jumlah bilangan harus lebih dari 1");
    }else{
        var data  = [];
        for(var a=1;a<=n;a++){
            var c_angka = $("#angka"+a).val();
            var angka = parseInt(c_angka);
            data.push(angka);
        } 
        var type = cekTipeUrut();
        if(type == "asc"){
            hasil = sortingAsc(data);
        }else{
            hasil = sortingDesc(data);
        }
        tampikanData(hasil);
    }
}

function sortingAsc(data){
    var hasil = [];
    var size = data.length;
    for(var i = 0; i < size; i++){
        var indexTerkecil = 0;             
        var palingKecil   = data[indexTerkecil]; 
        for(var j = 0 ; j < data.length; j++){
            if(data[j] < palingKecil){      
                palingKecil = data[j];
                indexTerkecil = j;
            }
        }
        hasil.push(data[indexTerkecil]);
        data.splice(indexTerkecil, 1);
    }
    return hasil;
}

function sortingDesc(data){
    var hasil = [];
    var size = data.length;
    for(var i = 0; i < size; i++){
        var indexTerbesar = 0;             
        var palingBesar   = data[indexTerbesar]; 
        for(var j = 0 ; j < data.length; j++){
            if(data[j] > palingBesar){      
                palingBesar = data[j];
                indexTerbesar = j;
            }
        }
        hasil.push(data[indexTerbesar]);
        data.splice(indexTerbesar, 1);
    }
    return hasil;
}

function tampikanData(hasil){
    $("#area_hasil").html("");
    var size = hasil.length;
    for(var i=0; i<size; i++){
      var $div_hasil = $("<div class='col-lg-2 box-hasil'>");
      $div_hasil.html("<input type='number' class='form-control' value='"+hasil[i]+"' readonly></div>");
      $("#area_hasil").append($div_hasil);  
    }
    $("#area_hasil_container").css("display","inline-block");
}

function cekTipeUrut(){
    var type = "desc";
    if($("#urut_asc").is(':checked')){
        type = "asc";
    }
    return type;
}

function prosesClear(){
    $("#area_hasil").html("");
    $("#area_angka").html("");
    $("#area_angka_container").css("display","none");
    $("#area_hasil_container").css("display","none");
    $("#jumlah_angka").val(0);
    $("#jumlah_angka").focus();
}