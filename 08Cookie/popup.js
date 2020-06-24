//쿠키 생성 박스()- 매개변수를 받아서 해당이름으로 1일간 유지되는 쿠키를 생성
function createCookie(name) {
    var date = new Date();

    date.setDate(date.getDate() + 1); //현재시간으로부터 7일 설정

    //쿠키에 저장할 문자열 생성(형식 지켜야함)
    var cookie = "";

    cookie += name + "=true;";
    cookie += "expires=" + date.toUTCString();

    document.cookie = cookie; //쿠키에 만들려는 쿠키를 저장                    
}



//쿠키 확인 함수
function getCookie(name) {
    //쿠키를 얻는다.
    var cookies = document.cookie.split("; ");

    for (var i in cookies) {
        if (cookies[i].search(name) != -1) { // 쿠키를 찾은 경우
            return true; //찾은 의미로 true를 반환
        }
    }
}