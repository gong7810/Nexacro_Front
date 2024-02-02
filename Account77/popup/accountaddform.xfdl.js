(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("addaccountform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_account", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CHARACTER\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_group", this);
            obj._setContents("<ColumnInfo><Column id=\"GROUP_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_accountDetailList", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_account_for_transfer", this);
            obj._setContents("<ColumnInfo><Column id=\"PARENT_ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CHARACTER\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("list_btn","907","340","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Button("save_btn","805","340","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_inner_code","20","95","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_subject","737","95","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_displaynulltext("계정과목을 입력해 주세요");
            this.addChild(obj.name, obj);

            obj = new Combo("edit_group","498","95","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_group");
            obj.set_datacolumn("GROUP_CODE");
            obj.set_displaynulltext("계정그룹코드를 선택해 주세요");
            this.addChild(obj.name, obj);

            obj = new Combo("edit_subject_code","259","95","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_account");
            obj.set_datacolumn("ACCOUNT_NAME");
            obj.set_displaynulltext("계정과목을 선택해 주세요");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","31","50","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("계정코드");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","273","50","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("계정과목코드");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","515","50","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("계정그룹코드");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","757","50","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("계정과목");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("accountaddform.xfdl","scripts::commonDate.xjs");
        this.registerScript("accountaddform.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/;
        application = nexacro.getApplication();
        var today;
        var row;
        var status;
        var code;





        this.addaccountform_onload = function(obj,e)
        {

        	trace("onload Event has been occured at : accountaddform");


        	var id = "selectaccount";
        	var url = "svcOperate::findParentAccountList";
        	var resData = "";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        	var reqData = "ds_account=gds_account"; // 데이터 요청
        	var args = "";
        	var callback = "callback";

        	this.transaction(id, url, resData, reqData, args, callback);

        		trace("onload event has been successfully finished at : accountaddform");


        	trace("<<<<transaction for ds_accountDetailList has been started!!!");

        	var id = "forFindDuplication";
        	var url = "svcOperate::forFindDuplication";
        	var resData = "";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        	var reqData = "ds_accountDetailList=gds_account_detail"; // 데이터 요청 To클래스명을
        	var args = "";											  // 잘 맞추어 주어야 한다.
        	var callback = "callback2";

        	this.transaction(id, url, resData, reqData, args, callback);
        	trace(">>>>>>transaction for ds_accountDetailList has been finished!!!");



        	// 해당 폼이 띄워지면은 edit_subject_code로 포커스를 준다.
        	// this.edit_subject_code.setFocus();






        };


        // 비교할 데이터가 잘 왔는 지 확인
        this.callback2=function(){

        var rowCnt=this.ds_accountDetailList.getRowCount();
        trace("<<<<<< data for find duplication has been arrived rowCnt : "+rowCnt)




        }











        //목록으로 돌아가는 버튼 ---> 해당 창이 닫힘
        this.list_btn_onclick = function(obj,e)
        {
           this.close();
        };



        //esc버튼을 누르면 해당 창이 닫힘
        this.addaccountform_onkeydown = function(obj,e)
        {
        		const a=e.keycode;

        if(a==27){
        this.close();
        	}
        };



        //테스트 완료
        this.save_btn_onclick = function(obj,e)
        {

        		trace(this.edit_subject_code.value);
        		if(this.edit_subject_code.value==undefined){
        			alert('계정과목 코드를 선택해 주세요.');
        			return;
        		}else if(this.edit_group.value==undefined){
        			alert('계정그룹을 선택해 주세요.');
        			return;
        		}else if(this.edit_subject.value==''||this.edit_subject.value==undefined||this.edit_subject.text.trim()==''){
        			trace("edit_subject_code doesnt have value");
        			return;
        		}



        	var accountSubject=this.edit_subject.text;  // 계정과목에 입력된 값을 받아서
        	trace("account_Subject : "+accountSubject);						// 출력


        	// 입력된 값과 중복되는 값이 없으면, -1을 반환 있으면 해당 행의 index를 반환
        	var nRow=this.ds_accountDetailList.findRow("ACCOUNT_NAME",accountSubject);
        	trace('');
        	trace('');
        	trace('');
        	trace("<<<<<< is this account_subject duplicated? "+ accountSubject+" nRow : "+nRow);                                                // -1을 반환 있으면 해당 row?를 반환
        	trace(nRow==-1?'NO' : 'YES');
        	trace('');
        	trace('');
        	trace('');



        	//등록 여부를 물어보고
        	var bool =confirm("계정과목을 등록하시겠습니까?");

        	// "아니요"를 선택하면은 return
        	if(!bool)return;


        	// "예"를 선택하면은 함수를 호출
        	this.for_insert_transaction(bool,nRow);



        };


        // confirm의 값이 true일때 해당 값을 ds_account_for_transfer에 넣어서 서버로 전송
        this.for_insert_transaction=function(bool,nRow){



        		var edit_subjectCnt=this.edit_subject.text;

        		//대응하는 db칼럼이 최대 20자 이므로, 20자 이하로 작성 해야함.
        		if(edit_subjectCnt.length>20){
        		trace('<<<this is length of word : '+edit_subjectCnt.length)
        		alert('글자수는 20자 이내로 작성해 주세요.');
        		return;
        			}



        			if(nRow!=-1){ // 입력된 값과 일치하는 값이 있으면
        		       alert('이미 존재하는 계정과목 입니다.');
        		    return;
        	     	}



        trace('<<<<this is from insert transaction!!!');




        var parent_account_inner_code=this.edit_inner_code.text; // DB에는 parent_account_inner_code insert;
        var account_character=this.edit_subject_code.text;
        var account_name=this.edit_subject.text;
        var account_group=this.edit_group.text;


        trace('<<<<account_inner_code is : '+parent_account_inner_code,
        	  ' // account_character is :' + account_character,
        	  ' // account_name is :' + account_name,
        	  ' // account_group is :' + account_group
        );

        	this.ds_account_for_transfer.clearData(); // 데이터 셋을 지우고
        	this.ds_account_for_transfer.addRow();     // 새로운 row를 추가
        	trace('--->this is ds_account.rowCount() after addRow() : '+this.ds_account_for_transfer.getRowCount());
        	this.ds_account_for_transfer.setColumn(0,0,parent_account_inner_code);
        	this.ds_account_for_transfer.setColumn(0,1,account_character);
        	this.ds_account_for_transfer.setColumn(0,2,account_name);
        	this.ds_account_for_transfer.setColumn(0,3,account_group);



           if(bool){



        	trace('<<<Data for insert are ready to trasnfer!!! ')


        	var id = "insertaccountsubject";
        	var url = "svcOperate::registerAccountDetail";
        	var resData = "gds_account_detail=ds_account_for_transfer"; // 데이터 전송
        	var reqData = "";
        	var args = "";
        	var callback = "callback";

        	this.transaction(id, url, resData, reqData, args, callback);

          trace('>>> data for insert is successfully submitted!!!');

          alert("계정과목이 등록 되었습니다.");
          this.close();
          }else if(bool){

        	return;
          }

        }











        // 콤보의 아이템이 변경되고 나서 발생
        //테스트 성공
        this.edit_subject_code_onitemchanged = function(obj,e)
        {

        	var objDs = obj.getInnerDataset(); //바인딩된 innertdataset의 정보를 찾아옴
        	trace("<<<objDs : "+objDs);
        		var data = objDs.getColumn(e.postindex,"ACCOUNT_INNER_CODE"); // innerdataset이라 postindex값을 사용해야
        		trace("<<<data : "+data);									  // 하는거 같음
         		this.edit_inner_code.set_value(data);						  //  그냥 데이터 셋은 e.row,e.currow사용



        	code=this.edit_subject_code.text;
        	trace("this is code received from : edit_group_code_on_itemchanged "+code);




        	//선택된 계정과목에 따라 그룹 코드에 데이터를 추가하기 위한 함수
        	this.group_code_Func(code);
        };





        //테스트 완료
        this.group_code_Func=function(code){

        trace("group_code_Func has been called");
        	this.ds_group.clearData();

        	this.ds_group.addRow(); // 새로운 행을 추가

        //테스트 성공
        	if(code=='당좌자산'||code=='재고자산'){
        	this.ds_group.setColumn(0,0,'유동자산');

        	}else if(code=='투자자산'||code=='유형자산'||code=='무형자산'||code=='기타비유동자산'){
        		this.ds_group.setColumn(0,0,'비유동자산');
        	}else if(code=='유동부채'){
        		this.ds_group.setColumn(0,0,'유동부채');
        	}else if(code=='비유동부채'){
        		this.ds_group.setColumn(0,0,'비유동부채');
        	}else if(code=='자본금'||code=='자본잉여금'||code=='이익잉여금'||code=='자본조정'||code=='기타포괄손익'){
        		this.ds_group.setColumn(0,0,'자본');
        	}


        //데이터가 잘 들어갔는지 확인할때 사용
        // 	var rowCnt=this.ds_group.getRowCount();
        // 	trace("rowCnt : "+rowCnt);

        };



        //edit_subject에서 entre키를 눌렀다가 때면은 save_btn이 클릭되도록 이벤트를 등록
        this.edit_subject_onkeyup = function(obj,e)
        {   var key=e.keycode;
        		if(key==13){
        	this.save_btn.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown",this.addaccountform_onkeydown,this);
            this.addEventHandler("onload",this.addaccountform_onload,this);
            this.list_btn.addEventHandler("onclick",this.list_btn_onclick,this);
            this.save_btn.addEventHandler("onclick",this.save_btn_onclick,this);
            this.edit_inner_code.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.edit_subject.addEventHandler("onkeyup",this.edit_subject_onkeyup,this);
            this.edit_group.addEventHandler("onitemchanged",this.edit_group_onitemchanged,this);
            this.edit_subject_code.addEventHandler("canitemchange",this.edit_subject_canitemchange,this);
            this.edit_subject_code.addEventHandler("onitemchanged",this.edit_subject_code_onitemchanged,this);
        };
        this.loadIncludeScript("accountaddform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
