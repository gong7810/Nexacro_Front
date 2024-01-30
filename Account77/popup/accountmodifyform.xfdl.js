(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("accountdetailform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_account", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CHARACTER\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_accountDetailList", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_account_for_transfer", this);
            obj._setContents("<ColumnInfo><Column id=\"PARENT_ACCOUNT_INNER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CHARACTER\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("list_btn","907","340","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_inner_code","20","95","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","31","50","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("계정코드");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","273","50","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("계정과목코드");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","515","50","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("계정그룹코드");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","757","50","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("계정과목");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("mod_del_btn","707","340","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("mod_btn","807","340","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("수정");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_account_code","259","95","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_group_code","498","95","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_subject","737","95","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_readonly("false");
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
        this.addIncludeScript("accountmodifyform.xfdl","scripts::commonDate.xjs");
        this.registerScript("accountmodifyform.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/;
        application = nexacro.getApplication();
        var today;
        var data=this.parent.date; // detailform으로부터 배열 데이터를 받아온다.

        // 수정할거





        this.accountdetailform_onload = function(obj,e)
        {		var data=this.parent.data;
        		trace("onload Event has been occured at : accountaddform");
        		trace('<<<< data received from accountform is :'+data[0]);




        	trace("<<<<transaction for ds_accountDetailList has been started!!!");

        	var id = "forFindDuplication";
        	var url = "svcOperate::forFindDuplication";
        	var resData = "";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        	var reqData = "ds_accountDetailList=gds_account_detail"; // 데이터 요청 To클래스명을
        	var args = "";											  // 잘 맞추어 주어야 한다.
        	var callback = "callback2";

        	this.transaction(id, url, resData, reqData, args, callback);
        	trace(">>>>>>transaction for ds_accountDetailList has been finished!!!");









        trace( '<<<<<account_inner_code :'+data[0],
        	   ' // parent_account_inner_code : ' + data[1],
        	   ' // account_group_code : ' + data[2],
        	   ' // account_name : ' + data[3]
        	);


         this.edit_inner_code.set_value(data[0]);
         this.edit_account_code.set_value(data[1]);
         this.edit_group_code.set_value(data[2]);
         this.edit_subject.set_value(data[3]);

        //해당 폼이 띄워지면은 edit_subject에 포커스를 준다.
        this.edit_subject.setFocus();


        };


        this.callback2=function(){

        trace('<<<transaction has been successfully transfered from : accountmodifyform');
        var rowCnt=this.ds_accountDetailList.getRowCount();
        trace("<<<<<< data for find duplication has been arrived rowCnt : "+rowCnt)
        var cnt=this.ds_accountDetailList.extractRows('ACCOUNT_NAME == 현금');
        trace('<<<<< cnt is :'+cnt)


        }








        //목록으로 돌아가는 버튼 ---> 해당 창이 닫힘
        this.list_btn_onclick = function(obj,e)
        {
           this.close('mod_list_btn');
        };



        //esc버튼을 누르면 해당 창이 닫힘
        this.accountdetailform_onkeydown = function(obj,e)
        {
        		const a=e.keycode;
        		if(a==27){
        			this.close('mod_esc');
        			}
        };


        //위에서 받아온 값을 아래의 버튼 이벤트에서 사용하지 못해서 다시 받아옴.
        var data=this.parent.data;
        this.mod_btn_onclick = function(obj,e)
        {


        	//값을 잘 받아 왔는지 확인하고
        	trace('<<<<< onclick event has been occured at : mod_btn');
        	trace('<<<<<<<<data is : '+data);
        	trace('<<<<< this is data from parent : '+data[3]);



        	// 넘겨받은 데이터를 변수에 할당하고
        	var accountInnerCode=data[0];
        	// 수정한 계정과목을 edit으로 부터 읽어와서 변수에 할당
        	var accountName=this.edit_subject.text;
        		trace('<<<<this.edit_subject.text :  '+accountName);
        	trace('<<<<<<<<<<< accountInnerCode : '+accountInnerCode,'<<<<<<<<<< '+accountName);




        	// 계정과목에 새로 입력된 값을 받아서
        	var accountSubject=this.edit_subject.text;
        	// output에 출력
        	trace("account_Subject : "+accountSubject);




        	// 입력된 값과 중복되는 값이 없으면, -1을 반환 있으면 해당 행의 index를 반환
        	var nRow=this.ds_accountDetailList.findRow("ACCOUNT_NAME",accountSubject);
        	trace("<<<<<< there is no such data like "+ accountSubject+" nRow : "+nRow);                                                // -1을 반환 있으면 해당 row?를 반환

        	trace('this is e : '+e);



        	    var bool=confirm('수정 하시겠습니까?');







        	if(bool){
        			//입력한 값이 원래의 계정과목과 일치하지 않으면
        			if(data[3]!=accountSubject){

        			// Dataset에서 입력된 값과 일치하는 값이 있으면
        			if(nRow!=-1){
        		       alert('이미 존재하는 계정과목 입니다.');
        		    return;
        				}
        			}

        	var id = "modifyaccount";
        	var url = "svcOperate::modifyAccountDetail";
        	var resData = "";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        	var reqData = ""; // 데이터 요청
        	var args = "accountName='"+accountName + "'accountInnerCode="+accountInnerCode;
        	var callback = "";

        	///"FULL_NAME =='" + e.newvalue +"'&& currow != " + e.row

        	//"empCode='"+empCode+"'"

        	this.transaction(id, url, resData, reqData, args, callback);
        	 trace('<<<transaction has been successfully sent from : modiofyform');
        	 alert('수정이 완료되었습니다.');
        	 this.close('mod_mod_btn');

        	}else{
        	return;
        	}





        };







        this.mod_del_btn_onclick = function(obj,e)
        {
        		var account_inner_code=this.parent.data[0];
        	trace("account_inner_code from del_btn is : "+account_inner_code);

        		var bool=confirm('삭제 하시겠습니까?');

        	if(bool){

        	var id = "deleteaccount";
        	var url = "svcOperate::removeAccountDetail";
        	var resData = "";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        	var reqData = ""; // 데이터 요청
        	var args = "accountInnerCode="+account_inner_code;
        	var callback = "";


        	 this.transaction(id, url, resData, reqData, args, callback);
        	 trace('<<<transaction has been successfully sent!!!');
        	 alert('삭제되었습니다.');
        	 this.close('mod_del_btn');
        	}else{
        	return;
        	}





        	trace('<<<<< onclick event has been occured at : mod_del_btn ');
        };








        this.edit_subject_onkeyup = function(obj,e)
        {
        	var key=e.keycode;
        trace('<<< key is : '+key)
        		if(key==13){
        	this.mod_btn.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.accountdetailform_onload,this);
            this.addEventHandler("onkeydown",this.accountdetailform_onkeydown,this);
            this.addEventHandler("ondragmove",this.accountdetailform_ondragmove,this);
            this.list_btn.addEventHandler("onclick",this.list_btn_onclick,this);
            this.edit_inner_code.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.mod_del_btn.addEventHandler("onclick",this.mod_del_btn_onclick,this);
            this.mod_btn.addEventHandler("onclick",this.mod_btn_onclick,this);
            this.edit_subject.addEventHandler("onkeyup",this.edit_subject_onkeyup,this);
        };
        this.loadIncludeScript("accountmodifyform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
