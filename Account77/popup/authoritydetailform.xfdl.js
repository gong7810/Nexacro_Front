(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("authoriry_emp_detailform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("list_btn","907","340","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Button("del_btn","805","340","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_code","20","95","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","31","50","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_textAlign("center");
            obj.set_text("직급코드");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","273","50","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_textAlign("center");
            obj.set_text("사원명");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","515","50","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_text("권한코드");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","757","50","212","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_textAlign("center");
            obj.set_text("권한명");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_authority_code","498","95","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_name","259","95","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_authority_name","737","95","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_textAlign("center");
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
        this.addIncludeScript("authoritydetailform.xfdl","scripts::commonDate.xjs");
        this.registerScript("authoritydetailform.xfdl", function() {
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/;
        application = nexacro.getApplication();
        var today;
        var row;
        var status;
        var code;







        this.authoriry_emp_detailform_onload = function(obj,e)
        {		var empId=this.parent.empId;
        		var empCode=this.parent.empCode;
        		var empName=this.parent.empName;
        		var authCode=this.parent.authCode;
        		var authName=this.parent.authName;


        		this.edit_emp_code.set_value(empCode);
        		this.edit_emp_name.set_value(empName);
        		this.edit_authority_code.set_value(authCode);
        		this.edit_authority_name.set_value(authName);



        };


        //삭제 버튼을 누르면 발생할 이벤트
        this.del_btn_onclick = function(obj,e)
        {  	 trace('del_btn_clicked');
        	var empId=this.parent.empId;
        	trace('empId is : '+empId);


        	trace('<<< tracnsaction for delete has been sent');


        	var id = "deleteEmpAuth";
        	var url = "svcOperate::removeAuthorityEmpDetail"; // 매핑된 url주소
        	var resData = "";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        	var reqData ="";   // 데이터 요청
        	var args = "id="+empId;
        	var callback = "";

        	var bool=confirm('삭제하시겠습니까?');

        	if(bool){
        			this.transaction(id, url, resData, reqData, args, callback);

        			trace('--------------delete data has been sent--------------');
        			trace('');
        			trace('');
        			trace('');
        			alert('삭제되었습니다.');


        			this.close();

        	}else{
        	 return;
        	 }


        };





        this.authoriry_emp_detailform_onkeyup = function(obj,e)
        {
        	var code=e.keycode;
        	trace(code);
        	if(code==27){
        	this.close();
        	}
        };






        //목록 버튼을 누르면 해당 창을 종료
        this.list_btn_onclick = function(obj,e)
        {
        	this.close();
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclick",this.authoriry_emp_addform_onclick,this);
            this.addEventHandler("onkeyup",this.authoriry_emp_detailform_onkeyup,this);
            this.addEventHandler("onload",this.authoriry_emp_detailform_onload,this);
            this.list_btn.addEventHandler("onclick",this.list_btn_onclick,this);
            this.list_btn.addEventHandler("onkeydown",this.list_btn_onkeydown,this);
            this.del_btn.addEventHandler("onclick",this.del_btn_onclick,this);
        };
        this.loadIncludeScript("authoritydetailform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
