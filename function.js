
function checkInform(){
	var ID = document.getElementById("ID");
	ID=ID.value;
	//ID체크
  var checkID =/^[A-Za-z0-9]{4,12}$/;
  var checkPW =/^[A-Za-z0-9]{4,12}$/;  
  var checkEmail=/^[A-Za-z0-9]{1,}@+?[A-Za-z]{1,}\.+?[A-Za-z]{1,}$/;
    if (ID=="") {
      alert("아이디를 입력해주세요.")
      return false;
    }
    else if(checkID.test(ID)){
    }
    else{
      alert("비밀번호는 4~12자리의 영어 대소문자와 숫자만 입력하여 주십시오");
      return false;
    }

	var PW      = document.getElementById("PW");
	PW=PW.value;
	var PWcheck = document.getElementById("PWconfirm");
	PWcheck=PWcheck.value;
	//비밀번호 일치 확인
	if(PW==""){
		alert("비밀번호를 입력하여 주십시오");
		return false;		
	}

	if(PW==ID){
		alert("비밀번호와 아이디는 일치하면 안됩니다");
		return false;
	}
	if(!checkPW.test(PW)){
		alert("비밀번호는 4~12자리의 영어 대소문자와 숫자만 입력하여 주십시오")
		return false;
	}
	if(PW!=PWcheck){
		alert("비밀번호가 일치하지 않습니다");
		return false;
	}
	
	
	
	//이메일 형식 확인
  var Mail = document.getElementById("e-Mail").value;
  var count=0;
  	if(Mail==""){
		alert("이메일을 입력하여 주십시오");
		return false;		
	}
    if(checkEmail.test(Mail)){
    }
    else{
    alert("메일형식이 일치하지 않습니다");
    return false;
    }
	//주민등록번호 확인
	var Numbers = document.getElementById("humanNumber");
	Numbers=Numbers.value;
	if(Numbers==""){
		alert("주민등록번호를 입력하여 주십시오");
		return false;		
	}
	if(Numbers.length!=13){
		alert("주민등록번호의 형식이 맞지 않습니다");
		return false;
	}
	var errorCheck =[2,3,4,5,6,7,8,9,2,3,4,5];//오류 검증 코드
	errortemp=new Array();//임시 저장용 오류 검증 코드
	var sum=0;//12자리 주민번호와 12자리 오류검증코드를 각각 곱한 합
	for(var i=0;i<12;i++){
		errortemp[i]=(String( parseInt(Numbers[i])*parseInt(errorCheck[i])));
		sum+=parseInt(errortemp[i]);
	}
	
	var on = parseInt(sum/11.0);//몫
	var no = sum%11;
	var cord = 11-no;//검증코드 11-나머지
	if(cord>=10)cord-=10;
	if(cord!=Numbers[12]){//주민번호 형식 다름
		alert("주민등록번호의 마지막 번호가 맞지 않습니다 ");
		return false;
	}
	var year = Numbers.slice(0,2);
	var birthMonth = Numbers.slice(2,4);
	var birthDay = Numbers.slice(4,6);
	var birthYear = document.getElementById("year");
	birthYear="19"+year;

	join.year.value=birthYear;
	join.month.value=birthMonth;
	join.day.value=birthDay;
	return true;
}
function sendMail(){
	var Mail = document.getElementById("e-Mail");
	Mail=Mail.value;
	window.open('mailto:'+Mail);
}
	
