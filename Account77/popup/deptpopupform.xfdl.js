(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("deptpopupform");
            if (Form == this.constructor)
            {
                this._setFormPosition(390,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_code", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","108","13","167","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("부서코드");
            obj.set_textAlign("center");
            obj.set_font("20px/normal \"휴먼엑스포\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","42","60","298","316",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("gds_department");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서코드\"/><Cell col=\"1\" text=\"부서명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",390,430,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("deptpopupform.xfdl", function() {

        application = nexacro.getApplication();
        this.deptpopupform_onload = function(obj,e)
        {
        		var code = application.gds_department.getColumn(0,"WORKPLACE_CODE");
        		var id = "selectdeptCode";
        		var url = "svcOperate::selectdeptCode";
        		var resData = "";
        		var reqData = "gds_department=gds_department";
        		var args = "";
        		var callback = "callback";

        		this.transaction(id, url, resData, reqData, args, callback);
        };

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var deptCode = application.gds_department.getColumn(e.row,"DEPT_CODE");
        	var deptName = application.gds_department.getColumn(e.row,"DEPT_NAME");

        	application.gds_department.setColumn(0,"DEPT_CODE",deptCode)
        	application.gds_department.setColumn(0,"DEPT_NAME",deptName)

        	this.close();
        };

        // esc로 창 닫기
        this.deptpopupform_onkeydown = function(obj,e)
        {
        	const a=e.keycode;
        	if(a==27){
        		this.close('esc');
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.deptpopupform_onload,this);
            this.addEventHandler("onkeydown",this.deptpopupform_onkeydown,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("deptpopupform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
