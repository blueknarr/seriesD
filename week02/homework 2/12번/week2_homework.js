$(document).ready(function () {
    //alert('다 로딩됐다!')
    // 여기에 환율 API Ajax 요청을 하면 되겠죠?
    $.ajax({
        type: "GET", // GET 방식으로 요청한다.
        url: "https://api.manana.kr/exchange/rate.json",
        data: {}, // 요청하면서 함께 줄 데이터 (GET 요청시엔 비워두세요)
        success: function (response) { // 서버에서 준 결과를 response라는 변수에 담음
            console.log(response) // 서버에서 준 결과를 이용해서 나머지 코드를 작성
            $('#exchange').text(response[1]['rate'])
        }
    })
});

function addOrder(){

    let name = $('#form-control1').val()
    let quantity = parseInt($('#form-control2').val())
    let address = $('#form-control3').val()
    let tel = $('#form-control4').val()
    //수량 number 바꾸고, 입력을 받았는지 확인
    if(isNaN(quantity) || name.trim() || address.trim() || tel.trim()){
        alert('이름, 수량, 주소, 전화번호를 확인해주세요')
    }else{
        console.log(name,quantity,address,tel)
        let tempHtml = `<tr><td>${name}</td><td>${quantity}</td><td>${address}</td><td>${tel}</td></tr>`
        $('#orders-box').append(tempHtml)
    }
}



