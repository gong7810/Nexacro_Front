(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fm_left");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(190,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("grdLeft","0","40","190",null,null,"75",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gds_menu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_cssclass("grd_LF_treeMenu");
            obj.set_treeinitstatus("expand,all");
            obj.set_border("0px solid #c7c7c7,1px solid #c7c7c7");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"184\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"MENU\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_ORDER\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","190","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Main Title Menu");
            obj.set_cssclass("sta_LF_title01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",190,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLeft.xfdl", function() {
        this.application = null;

        this.fm_left_onload = function(obj,e)
        {
        	this.application = nexacro.getApplication();
        };

        this.divLeft_grdLeft_oncellclick = function(obj,e)
        {
        	trace("grdLeft_oncellclick");
           var sID = application.gds_menu.getColumn(e.row, "MENU_CODE");
           var url = application.gds_menu.getColumn(e.row, "URL");
           var title = application.gds_menu.getColumn(e.row, "MENU_NAME");
           var level = application.gds_menu.getColumn(e.row, "MENU_ORDER");
           trace("sID  :"+sID);
           trace("url  :"+url);
           trace("title  :"+title);
           trace("level  :"+level);
        	gfn_open(url, title, sID);

        //    for(var i=0; i<application.gds_loginAuthority.getRowCount(); i++){
        // 		if(application.gds_loginAuthority.getColumn(i, "MENU_CODE")==sID){
        // 		trace(application.gds_loginAuthority.getColumn(i, "IS_AUTHORITY"));
        // 			if(application.gds_loginAuthority.getColumn(i, "IS_AUTHORITY")=="1"){
        // 				gfn_open(url, title, sID);
        // 			}
        // 			else {
        // 				alert("권한이 없습니다.");
        // 				return;
        // 			}
        // 		}
        //    }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fm_left_onload,this);
            this.grdLeft.addEventHandler("oncellclick",this.divLeft_grdLeft_oncellclick,this);
        };
        this.loadIncludeScript("frmLeft.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
