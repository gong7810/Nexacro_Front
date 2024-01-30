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
            obj.set_taborder("3");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_inner_code","20","95","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","31","50","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("계정코드");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","273","50","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("계정과목코드");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","515","50","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("계정그룹코드");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","757","50","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("계정과목");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("del_btn","707","340","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("mod_btn","807","340","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
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
            obj.set_readonly("true");
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
        this.addIncludeScript("accountdetailform.xfdl","scripts::commonDate.xjs");
        this.registerScript("accountdetailform.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/;
        application = nexacro.getApplication();
        var today;



        var account_inner_code=this.parent.account_inner_code;
        var parent_account_inner_code=this.parent.parent_account_inner_code;
        var account_group_code=this.parent.account_group_code;
        var account_name=this.parent.account_name;


        this.accountdetailform_onload = function(obj,e)
        {
        		trace("onload Event has been occured at : accountaddform");





        trace( '<<<<<account_inner_code :'+account_inner_code,
        	   ' // parent_account_inner_code : ' + parent_account_inner_code,
        	   ' // account_group_code : ' + account_group_code,
        	   ' // account_name : ' + account_name
        	);


         this.edit_inner_code.set_value(account_inner_code);
         this.edit_account_code.set_value(parent_account_inner_code);
         this.edit_group_code.set_value(account_group_code);
         this.edit_subject.set_value(account_name);




        };










        //목록으로 돌아가는 버튼 ---> 해당 창이 닫힘
        this.list_btn_onclick = function(obj,e)
        {
           this.close('list_btn');
        };


        //esc버튼을 누르면 해당 창이 닫힘
        this.accountdetailform_onkeydown = function(obj,e)
        {
        	const a=e.keycode;

        if(a==27){
        this.close("esc"); // esc를 눌러서 종료한것임을 알려주기 위한 인수
        	}
        };


        this.mod_btn_onclick = function(obj,e)
        {
        	trace('<<<<< onclick event has been occured at : mod_btn');


        	this.close(account_inner_code+":"+
        			   parent_account_inner_code+":"+
        			   account_group_code+":"+
        			   account_name
        				);// 부모 폼으로 해당 폼에 있는 데이터를 넘겨주기 위함 문자열로 넘어갑니다.



        };





        this.del_btn_onclick = function(obj,e)
        {
        	var account_inner_code=this.parent.account_inner_code;
        	trace("account_inner_code from del_btn is : "+account_inner_code);




        	var account_inner_code=this.parent.account_inner_code;
        	trace("account_inner_code from del_btn is : "+account_inner_code);

        		var bool=confirm('삭제 하시겠습니까?');

        	if(bool){

        	var id = "deleteaccount";
        	var url = "svcOperate::removeAccountDetail";
        	var resData = "";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        	var reqData = ""; // 데이터 요청
        	var args = "accountInnerCode="+account_inner_code;
        	var callback = "detailform_callbackFunc";




        	this.transaction(id, url, resData, reqData, args, callback);
        	 trace('<<<transaction has been successfully sent!!!');
        	 alert('삭제되었습니다.');
        	 this.close('del_btn'); // del_btn에서 일어난 이벤트라는 것을 알려주기 위한 인수
        	}else{
        	return;
        	}


        	trace('<<<<< onclick event has been occured at : del_btn ');


        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown",this.accountdetailform_onkeydown,this);
            this.addEventHandler("onload",this.accountdetailform_onload,this);
            this.list_btn.addEventHandler("onclick",this.list_btn_onclick,this);
            this.edit_inner_code.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.del_btn.addEventHandler("onclick",this.del_btn_onclick,this);
            this.del_btn.addEventHandler("onsetfocus",this.del_btn_onsetfocus,this);
            this.del_btn.addEventHandler("ontouchstart",this.del_btn_ontouchstart,this);
            this.del_btn.addEventHandler("onkeydown",this.del_btn_onkeydown,this);
            this.mod_btn.addEventHandler("onclick",this.mod_btn_onclick,this);
        };
        this.loadIncludeScript("accountdetailform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
