(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("employeeform2");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Grid("Grid00","60","160","320","311",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gds_emp");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사원코드\"/><Cell col=\"1\" text=\"사원이름\"/><Cell col=\"2\" text=\"직급\"/><Cell col=\"3\" text=\"부서이름\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_CODE\"/><Cell col=\"1\" text=\"bind:EMP_NAME\"/><Cell col=\"2\" text=\"bind:POSITION_NAME\"/><Cell col=\"3\" text=\"bind:DEPT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","60","75","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사원 조회");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","240","75","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사원 추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","420","75","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("사원 수정");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","610","75","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("사원 삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("EmployeeForm.xfdl","scripts::commonOpen.xjs");
        this.registerScript("EmployeeForm.xfdl", function() {
        this.executeIncludeScript("scripts::commonOpen.xjs"); /*include "scripts::commonOpen.xjs"*/;
        application = nexacro.getApplication();
        this.employeeform2_onload = function(obj,e)
        {
           this.gds_emp.clearData();

        };

        this.Button00_onclick = function(obj,e)
        {
             this.transaction(
              "findEmployeeList",
              "svcOperate::findEmployeeList",
              "",
              "gds_emp=gds_emp",
              "",
              "callback"
              );
        };


        this.Button01_onclick = function(obj,e)
        {
           trace("추가를 해봅시다");
           this.gfnOpen("popup", "popup::addemployeeform.xfdl", "add")

        };




        this.callbackFunc = function( strID, vArgu ){
           this.reload();

        }

        this.Button02_onclick = function(obj,e)
        {
           trace("수정을 해봅시다");
           this.gfnOpen("popup", "popup::addemployeeform.xfdl", "modifying")
        };
        this.Button04_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.employeeform2_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
        };
        this.loadIncludeScript("EmployeeForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
