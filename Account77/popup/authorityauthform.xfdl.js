(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("authorityauthform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("edit_id","24","103","252","57",null,null,null,null,null,null,this);
            obj.set_textAlign("center");
            obj.set_border("0px none");
            obj.set_background("transparent");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("static_auth","24","93","252","14",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_textAlign("center");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","66","340","168","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("authorityauthform.xfdl", function() {
        application = nexacro.getApplication();







        this.Button00_onclick = function(obj,e)
        {

        this.close();

        };
















         this.authorityauthform_onkeydown = function(obj,e)
         {


        	var code=e.keycode;

        	if(code===27){
         		this.close();
         	}
         };




        //이거로는 파라미터를 보낼수가 없음
        // this.authorityauthform_onclose = function(obj:nexacro.Form,e:nexacro.CloseEventInfo)
        // {
        // 	var a='1';
        // 	var b='2';
        //
        //    this.close(a);
        // 	trace('Data has been sent from : authorityauthform ' +a+","+b);
        //
        // };

        this.authorityauthform_oninit = function(obj,e)
        {

        var	name = application.gds_emp.getColumn(0, "POSITION_NAME"); //현재 로그인되어 있는 id를 가져옴
        	trace('<<<<< name : '+name);
        	this.edit_id.set_value('현재 권한은 '+name+' 입니다.');

        };

        this.authorityauthform_onkeyup = function(obj,e)
        {
        	var code=e.keycode;

        	if(code==13||code==32){
        	 this.Button00.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsetfocus",this.write_board_onsetfocus,this);
            this.addEventHandler("onkeydown",this.authorityauthform_onkeydown,this);
            this.addEventHandler("ondeactivate",this.authorityauthform_ondeactivate,this);
            this.addEventHandler("oninit",this.authorityauthform_oninit,this);
            this.addEventHandler("onkeyup",this.authorityauthform_onkeyup,this);
            this.edit_id.addEventHandler("onsetfocus",this.edit_id_onsetfocus,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("authorityauthform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
