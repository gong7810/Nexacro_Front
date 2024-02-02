(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("authoriry_emp_addform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("emp_list", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("auth_code_list", this);
            obj._setContents("<ColumnInfo><Column id=\"authority_code\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"authority_code\">AU01</Col></Row><Row><Col id=\"authority_code\">AU02</Col></Row><Row><Col id=\"authority_code\">AU03</Col></Row><Row><Col id=\"authority_code\">AU04</Col></Row><Row><Col id=\"authority_code\">AU05</Col></Row><Row><Col id=\"authority_code\">AU06</Col></Row><Row><Col id=\"authority_code\">AU07</Col></Row><Row><Col id=\"authority_code\">AU08</Col></Row><Row><Col id=\"authority_code\">AU09</Col></Row><Row><Col id=\"authority_code\">AU10</Col></Row><Row><Col id=\"authority_code\">AU11</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("auth_name", this);
            obj._setContents("<ColumnInfo><Column id=\"auth_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"auth_name\">거래관리</Col></Row><Row><Col id=\"auth_name\">장부관리</Col></Row><Row><Col id=\"auth_name\">결산 및 재무제표</Col></Row><Row><Col id=\"auth_name\">예산관리</Col></Row><Row><Col id=\"auth_name\">고정자산관리</Col></Row><Row><Col id=\"auth_name\">자금관리</Col></Row><Row><Col id=\"auth_name\">어음명세서관리</Col></Row><Row><Col id=\"auth_name\">업무용차량관리</Col></Row><Row><Col id=\"auth_name\">인사관리</Col></Row><Row><Col id=\"auth_name\">시스템관리</Col></Row><Row><Col id=\"auth_name\">게시판</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("auth_list", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AUTHORITY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"AUTHORITY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"IS_AUTHORITY\" type=\"STRING\" size=\"256\"/><Column id=\"AUTHORITY_LEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("emp_auth_for_trasaction", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AUTHORITY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"AUTHORITY_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("list_btn","907","340","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Button("save_btn","805","340","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_code","20","95","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("edit_emp_name","259","95","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("emp_list");
            obj.set_datacolumn("EMP_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","31","50","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_text("직급코드");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","273","50","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_textAlign("center");
            obj.set_text("사원명");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","515","50","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_textAlign("center");
            obj.set_text("권한코드");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","757","50","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_textAlign("center");
            obj.set_text("권한명");
            this.addChild(obj.name, obj);

            obj = new Combo("edit_authority_name","737","95","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("auth_name");
            obj.set_datacolumn("auth_name");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_authority_code","498","95","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edit_authority_code","value","emp_auth_for_trasaction","AUTHORITY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("authorityempaddform.xfdl","scripts::commonDate.xjs");
        this.registerScript("authorityempaddform.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/;
        application = nexacro.getApplication();
        var today;
        var row;
        var status;
        var code;



        									//추가할 기능

        // 엔터키를 누르면은 등록 버튼을 누르는 이벤트를 등록



        this.addaccountform_onload = function(obj,e)
        {	//기존의 데이터셋을 삭제하고
        	this.emp_auth_for_trasaction.deleteRow(0);

        	var id2 = "selecEmpList";
        	var url2 = "svcOperate::findEmpList";
        	var resData2 = "";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        	var reqData2 ="emp_list=gds_emp"; // 데이터 요청
        	var args2 = "";
        	var callback2 = "callback";


        	this.transaction(id2, url2, resData2, reqData2, args2, callback2);


        	// 중복되는 권한이 있는지 확인하기 위한 데이터를 받기위한 트랜잭션

        	trace('<<< tracnsaction for emp_list has been sent');


        	var id = "selectEmpAuthList";
        	var url = "svcOperate::authorityEmpList";
        	var resData = "";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        	var reqData ="auth_list=gds_authority_emp"; // 데이터 요청
        	var args = "";
        	var callback = "data_for_dupFunc";


        	this.transaction(id, url, resData, reqData, args, callback);






        	// 해당 폼이 띄워지면은 edit_subject_code로 포커스를 준다.
        	 this.edit_emp_name.setFocus();

        	//transaction을 위해 emp_auth_for_transaction에 행을 하나 추가한다.
        	this.emp_auth_for_trasaction.addRow();
        	var cnt=this.emp_auth_for_trasaction.getRowCount();
        	trace('<<<< cnt is : '+cnt);


        	trace('--------------onload event has been finished--------------');
        	trace('');
        	trace('');
        	trace('');
        };


        this.data_for_dupFunc=function(){

        var cnt=this.auth_list.getRowCount();
        trace('<<<<<<<< cnt is : '+cnt);

        }








        //목록으로 돌아가는 버튼 ---> 해당 창이 닫힘
        this.list_btn_onclick = function(obj,e)
        {
           this.close();
        };



        //esc버튼을 누르면 해당 창이 닫힘
        this.authoriry_emp_addform_onkeydown = function(obj,e)
        {

        		const a=e.keycode;
        	if(a==27){
        		this.close();
        	}

        };







        //edit_subject에서 entre키를 눌렀다가 때면은 save_btn이 클릭되도록 이벤트를 등록




        this.edit_authority_code00_onkeyup = function(obj,e)
        {
        	 var key=e.keycode;
        		if(key==13){
        	this.save_btn.click();
        	}
        };


        //사원명을 선택할때 이벤트 추가
        this.edit_emp_name_onitemchanged = function(obj,e)
        {			//콤보의 innerDataset을 얻어와서
        			var objDs=obj.getInnerDataset();
        			var empCode=objDs.getColumn(e.postindex,0);
        			trace('<<<<<testdata is : '+empCode);
        			this.edit_emp_code.set_value(empCode);
        			this.emp_auth_for_trasaction.setColumn(0,0,empCode);
        			this.emp_auth_for_trasaction.setColumn(0,1,e.posttext)// 현재 콤보에서 선택된 아이템을 가져와서 dataset에 할당
        			var testdata=	this.emp_auth_for_trasaction.getColumn(0,0);
        			trace('<<<<<<<< test data : '+testdata);
        };



        //권한코드를 선택할때 이벤트 추가


        this.edit_authority_name_onitemchanged = function(obj,e)
        {
        	//innerdataset의 정보를 받아와서
        		var objDs=obj.getInnerDataset();
        				//선택된 아이템을 변수에 할당
        				var text=e.posttext;
        			trace('<<<<<< text : '+text);

        			//선택된 아이템에 해당하는 권한 코드를 edit_emp_code에 할당
        			if(text=='거래관리'){

        				this.emp_auth_for_trasaction.setColumn(0,2,'AU01');

        			}else if(text=='장부관리'){

        				this.emp_auth_for_trasaction.setColumn(0,2,'AU02');

        			}else if(text=='결산 및 재무제표'){

        				this.emp_auth_for_trasaction.setColumn(0,2,'AU03');
        				trace('THIS IS RIGHT');

        			}else if(text=='예산관리'){

        				this.emp_auth_for_trasaction.setColumn(0,2,'AU04');


        			}else if(text=='고정자산관리'){

        				this.emp_auth_for_trasaction.setColumn(0,2,'AU05');

        			}else if(text=='자금관리'){

        				this.emp_auth_for_trasaction.setColumn(0,2,'AU06');

        			}else if(text=='어음명세서관리'){

        				this.emp_auth_for_trasaction.setColumn(0,2,'AU07');

        			}else if(text=='업무용차량관리'){

        				this.emp_auth_for_trasaction.setColumn(0,2,'AU08');

        			}else if(text=='인사관리'){

        				this.emp_auth_for_trasaction.setColumn(0,2,'AU09');

        			}else if(text=='시스템관리'){

        				this.emp_auth_for_trasaction.setColumn(0,2,'AU10');

        			}else if(text=='게시판'){

        				this.emp_auth_for_trasaction.setColumn(0,2,'AU11');

        			}

        			var coltext=this.emp_auth_for_trasaction.getColumn(0,2);

        			trace('<<<<<<<<<<<<<<<<<<<<<< coltext : '+coltext);


        			this.emp_auth_for_trasaction.setColumn(0,3,e.posttext); //현재 선택된 아이템을  dataset에 할당
        			var ddd=this.emp_auth_for_trasaction.getColumn(0,3);
        			trace('<<<<<<< ddd id : '+ddd);

        };


        //저장할 데이터를 전송하기 위한 이벤트
        this.save_btn_onclick = function(obj,e)
        {



           // 복합조건으로 중복되는 데이터의 유무를 검색




        		//각각의 edit의 값을 변수에 할당해서

        		var edit_emp=this.edit_emp_name.text;
        		var edit_authority_name=this.edit_authority_name.text;
        		var edit_authority_code=this.edit_authority_code.text;
        		trace('<<<<< edit_emp is : '+edit_emp+' // '+'<<<<<<<< edit_authority is : '+edit_authority_code);




        			// 선택하지 않았으면은 alert을 띄움

        			if(edit_emp==''){

        		alert('사원명을 선택해 주세요');
        		return;

        		}else if(edit_authority_name==''){

        		alert('권한명을 선택해 주세요');
        		return;
        		}


        			//var result=this.auth_list.findRowExpr("EMP_NAME == '"+edit_emp+ "'&& AUTHORITY_CODE == '"+edit_authority_code+"'"); //얘도 문자열 처리를 해주어야 하는거같다.
        			//trace('<<<<<<<< result is : '+result);

        			//먼저 직급을 코드의 값을 변수에 할당
        			var editEmpCode=this.edit_emp_code.text;
        			//해당 직급에 해당하는 사원을 검색
        			var arr=this.auth_list.extractRows("EMP_CODE=='"+editEmpCode+"'");


        			// 해당 직급에 해당하는 권한 목록 배열의 가장 작은 인덱스와 가장 큰 인덱스를 구하는 코드

        			//아래의 if 문에서 사용하기 위해 0으로 초기화 ---> 초기화 하지 않으면 변수의 값이 undefined로 나옴
        			var min=0;
        			var max=0;
        			for(var i=0;i<arr.length;i++){

        			var first=arr[0]

        			min=Math.min(first,arr[i]);

        			max=Math.max(arr[i],min);

        			}
        			trace('min : '+min);
        			trace('max : '+max)



        			trace('<<<<< reault.length is : '+arr.length);

        			// 검색하고 싶은 복합조건, 검색을 시작할 Dataset의 인덱스, 검색을 종료할 Dataset의 인덱스 ---> 만족하는 결과가
        																												//  없을 경우 -1을 반환
        			// 중복 데이터 유무의 결과를 담을 변수를 선언
        			var res;

        			if(min!=0&&max!=0){
        			trace(max+'    '+min);
        			res=this.auth_list.findRowExpr("EMP_NAME == '"+edit_emp+ "'&& AUTHORITY_CODE == '"+edit_authority_code+"'",min,max+1);
        			trace('min&&max is not 0');

        			}else if((min==0&&max==0)||(min==0||max==0)){

        			res=this.auth_list.findRowExpr("EMP_NAME == '"+edit_emp+ "'&& AUTHORITY_CODE == '"+edit_authority_code+"'");
        			trace('min or max is  0');

        			}







        			trace(res==-1?'<<<<<< isDuplicated? : false':'<<<<<< isDuplicated? :  true');





        		//데이터 셋에 데이터가 잘 들어갔는지 확인

        	var first=this.emp_auth_for_trasaction.getColumn(0,0);
        	var second=this.emp_auth_for_trasaction.getColumn(0,1);
        	var third=this.emp_auth_for_trasaction.getColumn(0,2);
        	var fourth=this.emp_auth_for_trasaction.getColumn(0,3);
        	trace('<<<<<< firts :'+first+" // "+'second is : '+second+' // '+'third is : '+third+' // fourth is : '+fourth );



        			var bool=confirm('권한을 부여하시겠습니까?');


        			if(bool){
        			this.add_authcallbackFunc(res,bool);
        			}else if(bool){

        			return;
        			}




        };


        //
        this.add_authcallbackFunc=function(res,bool){

        		trace('call has been from auth_authcallbackFunc');


        	//중복되는 데이터가 있는지 확인하고
        	if(res!=-1){

        		alert('이미 존재하는 권한 입니다.');
        		return;

        	}else{

        		}// res를 비교하는 if문의 마지막




        	 if(bool){
        			trace('');
        			trace('');
        			trace('');
        			trace('  -----------------------------this is start of  if statement------------------------------------------ ');
        			trace('');
        			trace('');
        			trace('');
        			// 중복되는 데이터가 없으면은 데이터 전송
        			var id = "registerempauth";
        			var url = "svcOperate::registerAuthorityEmp";
        			var resData = "gds_authority_emp=emp_auth_for_trasaction";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        			var reqData =""; // 데이터 요청
        			var args = "";
        			var callback = "callback";


        			this.transaction(id, url, resData, reqData, args, callback);
        			alert('권한이 부여되었습니다.')
        			trace('>>>>>>>> transaction for registerAuthorityEmp has been successfully sent');
        			this.close();
        			}else if(bool){

        		return;

        	 }// bool을 비교하는 코드의 마지막

        		trace('');
        		trace('');
        		trace('');
        		trace(' -----------------------------this is end of if statement------------------------------------------ ');
        		trace('');
        		trace('');
        		trace('');



        }// add_authcallbackFunc 의 마지막










        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.addaccountform_onload,this);
            this.addEventHandler("onkeydown",this.authoriry_emp_addform_onkeydown,this);
            this.addEventHandler("onclick",this.authoriry_emp_addform_onclick,this);
            this.list_btn.addEventHandler("onclick",this.list_btn_onclick,this);
            this.list_btn.addEventHandler("onkeydown",this.list_btn_onkeydown,this);
            this.save_btn.addEventHandler("onclick",this.save_btn_onclick,this);
            this.edit_emp_code.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.edit_emp_name.addEventHandler("onitemchanged",this.edit_emp_name_onitemchanged,this);
            this.edit_authority_name.addEventHandler("onitemchanged",this.edit_authority_name_onitemchanged,this);
        };
        this.loadIncludeScript("authorityempaddform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
