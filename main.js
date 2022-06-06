// bài tập 1
document.getElementById('btnTinhTienLuong').onclick = function(){
    // input: luongNgay : number , soNgay: number, 
    var luongNgay = document.getElementById('luongMotNgay').value;
    var soNgay = document.getElementById('soNgayLam').value;
    // output; tinhTien : number.
    var tinhTien = 0;
    //progress:
    tinhTien = luongNgay * soNgay ;
    //in output đó ra giao diện
    document.getElementById('xuatKetQua').innerHTML = tinhTien + 'vnd';

}
// bài tập 2.
document.getElementById('trungBinh').onclick = function(){
//input: so1,so2,so3,so4,so5 : number
var so1 = +document.getElementById('soThu1').value;
var so2 = +document.getElementById('soThu2').value;
var so3 = +document.getElementById('soThu3').value;
var so4 = +document.getElementById('soThu4').value;
var so5 = +document.getElementById('soThu5').value;
//output: tinhTrungBinh: number
var tinhTrungBinh = 0;
//progress:
tinhTrungBinh = (so1 + so2 + so3 + so4 +so5)/5;
//in output đó ra giao diện
document.getElementById('xuatKetQua2').innerHTML = tinhTrungBinh.toFixed(3);

}
// BÀI TẬP 3
document.getElementById('quyDoiTien').onclick = function(){
    //input: tienUsd,giaUsd: number.
    var tienUsd = document.getElementById('usd').value;
    //output: giaUsd : number
    var giaUsd = 23500;
   
    var doiTien = 0;
    //progress:
    doiTien = tienUsd * giaUsd;
    //in output đó ra giao diện
    document.getElementById('xuatKetQua3').innerHTML = doiTien + 'vnd';
}
// BÀI TẬP 4
document.getElementById('tinh').onclick = function(){
    // input: chieuDai,chieuRong :number
    var chieuDai = +document.getElementById('chieuDai').value;
    var chieuRong = +document.getElementById('chieuRong').value;
    //output : chuVi,dienTich: number
    var dienTich = 0;
    var chuVi = 0;
    //progress:
    dienTich = chieuDai * chieuRong ;
    chuVi = (chieuDai + chieuRong) * 2;
    //in output đó ra giao diện
    document.getElementById('xuatKetQua4').innerHTML = "diện tích là: " + dienTich + "; chu vi là : " + chuVi;
    

}
// BÀI TẬP 5
document.getElementById('tinhTong').onclick = function(){
    //input: so2ChuSo,hangChuc,hangdv: number
    var so2ChuSo = document.getElementById('so').value;
    var hangChuc = Math.floor(so2ChuSo/10);
    var hangdv = so2ChuSo % 10;
    //output: tinhTong :number
    var tinhTong = 0;
    //progress:
    tinhTong = hangChuc + hangdv;
    //in output đó ra giao diện
    document.getElementById('xuatKetQua5').innerHTML = tinhTong;

}