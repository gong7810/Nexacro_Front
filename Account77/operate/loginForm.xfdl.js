(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("loginForm");
            this.set_titletext("New Form");
            this.set_borderRadius("10px");
            if (Form == this.constructor)
            {
                this._setFormPosition(390,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Emp_Auth_List", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AUTHORITY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"AUTHORITY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"IS_AUTHORITY\" type=\"STRING\" size=\"256\"/><Column id=\"AUTHORITY_LEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00","0","0","390","490",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_image("url(\'../../../../../../Downloads/0628치과/thumb_d_1174C8BDD2F59CCB55AEA36F4B30F24B.jpg\')");
            obj.set_stretch("fit");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_login","121","323","148","37",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("로그인");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","83","15","224","99",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Account");
            obj.set_color("black");
            obj.set_font("28px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_id","77","180","236","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_displaynulltext("아이디를 입력해주세요");
            obj.set_textAlign("center");
            obj.set_value("emp7");
            obj.set_text("emp7");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_pw","77","240","236","43",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_displaynulltext("패스워드 입력해주세요");
            obj.set_textAlign("center");
            obj.set_value("11111111");
            obj.set_visible("true");
            obj.set_password("true");
            obj.set_text("11111111");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("loginForm.xfdl","scripts::commonDate.xjs");
        this.addIncludeScript("loginForm.xfdl","scripts::commonOpen.xjs");
        this.registerScript("loginForm.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/;
        this.executeIncludeScript("scripts::commonOpen.xjs"); /*include "scripts::commonOpen.xjs"*/;
        application = nexacro.getApplication();

        this.btn_login_onclick = function(obj,e)
        {
        	trace("@@@@btn_login_onclick@@@@");
        	var empCode = 'emp7';
        	var userPw = this.ed_pw.value;
        	var today = this.gfn_today(); // 2021-01-01

        	trace("@@@@@@"+empCode+"  "+userPw+"  "+today);
        	trace("로그인");

        	var id = "login";
        	var url = "svcBase::login"
        	var resData = "";
        	var reqData = "gds_emp=gds_emp gds_period=gds_period";
        	var args = "today='"+today+"' empCode='"+empCode+"' userPw='"+userPw+"'";
        	var callback = "callback";

        	if(empCode && userPw){
        		this.transaction(id, url, resData, reqData, args, callback, false);
        	}else if(empCode==""){
        		this.alert("아이디를 입력해주세요.");
        	}else{
        		this.alert("비밀번호를 입력해주세요.");
        	}

        };


        //로그인한 후에 gds_menu를 가지고 온다.
        this.afterLoginSetting = function(){
        		var code = application.gds_emp.getColumn(0, "EMP_CODE");
        		var name = application.gds_emp.getColumn(0, "EMP_NAME");
        		var position = application.gds_emp.getColumn(0, "POSITION_NAME");
        		var deptCode = application.gds_emp.getColumn(0, "DEPT_CODE");
        		// 현재 기수번호 구함
        		var index = application.gds_period.getRowCount()-1;
        		var current_periodNo = application.gds_period.getColumn(index, "ACCOUNT_PERIOD_NO");

        		// 글로벌변수 세팅
        		application.gv_empCode = code;
        		application.gv_empName = name;
        		application.gv_deptCode = deptCode;
        		application.gv_currentPeriod = current_periodNo;

        		this.alert(name + " " + position + "님 접속을 환영합니다!");

        		// 모든 메뉴를 가져온다.
        		var id = "getMenuList";
        		var url = "svcBase::findMenuList";
        		var resData = "";
        		var reqData = "gds_menu=gds_menu";
        		var args = "";
        		var callback = "menu_callback";

        		application.transaction(id,  url, resData, reqData, args, callback, false);

        		// 메뉴 권한 목록 가져온다
        		this.gfn_loginAuthority(code);
        		application.gv_authorityCode = application.gds_loginAuthority.getColumn(0, "AUTHORITY_LEVEL");

        		// 로그인한 user정보 세팅
        		var index = application.gds_open.addRow();
        		application.gds_open.setColumn(index, "CODE", position); // 직책
        		application.gds_open.setColumn(index, "NAME", name);
        		this.gfn_open("Base::MainPage.xfdl", "MainPage", "mainForm");
        		//application.mainframe.set_visible(true);				                  //*******************************



        	// 로그인한 사용자의 권한 목록을 가져오기 위한 트랜잭션

        	var id = "selectEmpAuthDetailList";
        	var url = "svcOperate::authorityEmpDetailList";
        	var resData = "";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        	var reqData ="Emp_Auth_List=gds_authority_emp"; // 데이터 요청
        	var args = "empCode="+code;
        	var callback = "auth_datacallbackFunc";

        	this.transaction(id, url, resData, reqData, args, callback);

        	trace('<<< transaction for user auth has been sent');




        	trace('<<< transaction for auth_verification has been sent');
        	// 여기서는 못받아 온다.
        	// 그래서 아래의 콜백에서
        	// 데이터를 받고 검증을 한다.
        	// 콜백이 많이 지연되지 않는 다는 가정하에
        	// 이 로직은 사용가능
        	// ---> 지연시간이 있기는 하나
        	//      데이터가 많지 않기때문
        	//      지연시간 1초 미만
        	trace('this is data for auth : '+this.Emp_Auth_List.getRowCount());










        }




        // 현재 로그인한 사용자의 권한을 콜백메서드에서 확인
        //---> 트랜잭션이 데이터를 가지고 오고 나서
        //     실행하기 위함
        this.auth_datacallbackFunc=function(){
        trace('');
        trace('');
        trace('');
        trace('---------------------------logic for user verification started---------------------------')

        	//현재 로그인한 사용자의 정보를 받아서
        	var user = application.gds_emp.getColumn(0, "EMP_CODE");
        	trace('<<< user is : '+ user+'>>>');
        	trace('------- this is user  auth data -------');
        	trace('>>>>> user auth data is  : '+this.Emp_Auth_List.getRowCount());
        	var cnt	=application.gds_menu.getRowCount();
        	trace('<<<<<<< menu rowCnt before delete row is :'+cnt )




        	// 권한 정보를 넣을 배열을 선언 ---> 권한 정보를 콘솔창에서 확인하기 위함.
        	var arr=[];
        	var rowCnt=this.Emp_Auth_List.getRowCount();
        	trace('<<<<< rowCnt is : '+rowCnt+'>>>>>');




        	//배열에 권한 정보를 추가
        	for(var i=0;i<rowCnt;i++){


        		// 로그인한 사용자의 dataset에 있는 권한정보를
        		// arr배열에 넣는다.
        		var auth=this.Emp_Auth_List.getColumn(i,3);
        		arr.push(auth);

        	};

        	//로그인한 사용자가 가지고 있는 권한목록
        	trace('<<<arr[] for auth is :'+arr+'>>>');

        	//권한에 없는 row를 지우기 전의 row 개수
        	var	cnt=application.gds_menu.getRowCount();
        	trace('<<<<< before delete row from menu :'+cnt );



        	// 권한 데이터가 잘 왔는지 확인
        	// 권한이 하나도 없으면
        	// undefined가 출력됨
        	var column=this.Emp_Auth_List.getColumn(0,3);
        	trace('<<<<<<<< column is : '+column+'>>>>>>>>');


        	//사용하지 않는 페이지를 gds_menu에서 삭제하기 위한 로직
        				trace('');
        				trace('');
        				trace('');
        				var arr=application.gds_menu.extractRows("DESCRIPTION=='10'");
         				application.gds_menu.deleteMultiRows(arr);
         				cnt=application.gds_menu.getRowCount();
         				trace('------------- after delete description 10 cnt : '+cnt+'------------------');
        				trace('');
        				trace('');
        				trace('');


        	// 로그인한 사용자의 권한을 확인하기 위한 로직
        	// DB의 menu 테이블 description 칼럼에 입력된
        	// 숫자를 기준으로 합니다.

        			if(this.Emp_Auth_List.findRow(3,'AU01')==-1){
        				var arr=application.gds_menu.extractRows("DESCRIPTION=='1'");
         				application.gds_menu.deleteMultiRows(arr);
         				cnt=application.gds_menu.getRowCount();
         				trace('1>>>>>> after delete rows : '+cnt);


        			}

        			if(this.Emp_Auth_List.findRow(3,'AU02')==-1){
        				var arr=application.gds_menu.extractRows("DESCRIPTION=='2'");
        				application.gds_menu.deleteMultiRows(arr);
         				cnt=application.gds_menu.getRowCount();
        				trace('2>>>>>> after delete rows : '+cnt);


        			}

        			if(this.Emp_Auth_List.findRow(3,'AU03')==-1){
        				var arr=application.gds_menu.extractRows("DESCRIPTION=='3'");
        				application.gds_menu.deleteMultiRows(arr);
         				cnt=application.gds_menu.getRowCount();
        				trace('3>>>>>> after delete rows : '+cnt);


        			}

        			if(this.Emp_Auth_List.findRow(3,'AU04')==-1){

        			var arr=application.gds_menu.extractRows("DESCRIPTION=='4'");
        				application.gds_menu.deleteMultiRows(arr);
         				cnt=application.gds_menu.getRowCount();
        				trace('4>>>>>> after delete rows : '+cnt);

        			}

        			if(this.Emp_Auth_List.findRow(3,'AU05')==-1){

        				var arr=application.gds_menu.extractRows("DESCRIPTION=='5'");
        				application.gds_menu.deleteMultiRows(arr);
         				cnt=application.gds_menu.getRowCount();
        				trace('5>>>>>> after delete rows : '+cnt);

        			}

        			if(this.Emp_Auth_List.findRow(3,'AU06')==-1){

        				var arr=application.gds_menu.extractRows("DESCRIPTION=='6'");
        				application.gds_menu.deleteMultiRows(arr);
         				cnt=application.gds_menu.getRowCount();
        				trace('6>>>>>> after delete rows : '+cnt);

        			}

        			if(this.Emp_Auth_List.findRow(3,'AU07')==-1){

        				var arr=application.gds_menu.extractRows("DESCRIPTION=='7'");
        				application.gds_menu.deleteMultiRows(arr);
         				cnt=application.gds_menu.getRowCount();
        				trace('7>>>>>> after delete rows : '+cnt);

        			}

        			if(this.Emp_Auth_List.findRow(3,'AU09')==-1){

        				var arr=application.gds_menu.extractRows("DESCRIPTION=='8'");
        				application.gds_menu.deleteMultiRows(arr);
         				cnt=application.gds_menu.getRowCount();
        				trace('8>>>>>> after delete rows : '+cnt);

        				}






        	trace('>>>>>>> menu rowCnt after delete rows is : '+cnt);
        	trace('---------------------------logic for user verification ended---------------------------');
        	trace('');
        	trace('');
        	trace('');



        	//권한에 따른 gds_menu의 데이터를 삭제하고 난 다음에 페이지를 보여준다.
        	application.mainframe.set_visible(true);


         //권한에 따라서 데이터를 삭제하고 해당 폼을 종료
         this.close();
        }







        // 권한 메뉴 목록 함수
        this.gfn_loginAuthority = function(empCode){
        		trace("@@@@gfn_loginAuthority@@@@");
        		var id = "findLoginAuthorityList";
        		var url = "svcOperate::loginAuthority";
        		var resData = "";
        		var reqData = "gds_loginAuthority=gds_loginAuthority";
        		var args = "empCode='"+empCode+"'";
        		var callback = "callback";

        		application.transaction(id, url, resData, reqData, args, callback, false);


        }



        this.callback = function(strSvcID, nErrorCode, strErrorMsg){
        	//alert("callback함수");


        	trace("nErrorCode  :" + nErrorCode);
        	trace("strErrorMsg  :" + strErrorMsg);
        	if(strSvcID=="login"){
        		if(nErrorCode < 0){
        			alert("아이디나 비밀번호를 확인해주세요. "+strErrorMsg);
        		}else{
        			//alert("로그인성공")
        			this.afterLoginSetting(); //로그인한 후에 발생하는 이벤트
        		}
        	}




        }
        // this.callback1 = function(strSvcID, nErrorCode, strErrorMsg){
        // 	if(strSvcID=="getMenuList"){
        // 		alert("메뉴조회완료")
        // 	}
        // }
        // this.callback2 = function(strSvcID, nErrorCode, strErrorMsg){
        // 		if(strSvcID=="findLoginAuthorityList"){
        // 		alert("권한조회완료")
        //
        // 	}
        // }


        //엔터키를 누르면은 로그인 버튼에 클릭 이벤트가 실행되게 한다.
        this.enter = function(obj,e)
        {
        	trace(e.keycode);
        	if(e.keycode == 13){
        		this.btn_login.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeyup",this.enter,this);
            this.ImageViewer00.addEventHandler("onclick",this.ImageViewer00_onclick,this);
            this.btn_login.addEventHandler("onclick",this.btn_login_onclick,this);
            this.Emp_Auth_List.addEventHandler("onload",this.Emp_Auth_List_onload,this);
        };
        this.loadIncludeScript("loginForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
