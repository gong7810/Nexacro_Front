(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("workplacepopupform");
            if (Form == this.constructor)
            {
                this._setFormPosition(390,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_code", this);
            obj._setContents("<ColumnInfo><Column id=\"WORKPLACE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPLACE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","108","13","167","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사업장코드");
            obj.set_textAlign("center");
            obj.set_font("20px/normal \"휴먼엑스포\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","42","60","298","316",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("gds_department");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"147\"/><Column size=\"147\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사업장코드\"/><Cell col=\"1\" text=\"사업장명\"/></Band><Band id=\"body\"><Cell text=\"bind:WORKPLACE_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:WORKPLACE_NAME\" textAlign=\"center\"/></Band></Format></Formats>");
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
        this.registerScript("workplacepopupform.xfdl", function() {
        application = nexacro.getApplication();

        this.workplacepopupform_onload = function(obj,e)
        {
        		var id = "selectworkplaceCode";
        		var url = "svcOperate::selectworkplaceCode";
        		var resData = "";
        		var reqData = "gds_department=gds_department";
        		var args = "";
        		var callback = "callback";
        		this.transaction(id, url, resData, reqData, args, callback);
        };

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var workplaceCode = application.gds_department.getColumn(e.row,"WORKPLACE_CODE");

        	var workplaceName = application.gds_department.getColumn(e.row,"WORKPLACE_NAME");

        	application.gds_department.setColumn(0,"WORKPLACE_CODE",workplaceCode);

        	application.gds_department.setColumn(0,"WORKPLACE_NAME", workplaceName);

        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.workplacepopupform_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("workplacepopupform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
