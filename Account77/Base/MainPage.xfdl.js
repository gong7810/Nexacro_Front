(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MainPage");
            this.set_titletext("New Form");
            this.set_background("white");
            this.set_borderRadius("10px 0px 0px / 0px");
            this.set_border("0px none transparent,0px none,0px none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","400","180","365","70",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("77기 회계 프로젝트");
            obj.set_font("25pt/normal \"휴먼둥근헤드라인\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("slipForm","197","304","149","46",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("전표");
            obj.set_font("bold 15pt/normal \"Arial\",\"함초롬바탕\"");
            obj.set_borderRadius("10px");
            obj.set_background("#EAEAEA");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Button("journalForm","356","304","149","46",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("분개장");
            obj.set_font("bold 15pt/normal \"Arial\",\"함초롬바탕\"");
            obj.set_borderRadius("10px");
            obj.set_background("#EAEAEA");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","180","130","295","143",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_image("url(\'https://img.freepik.com/free-vector/accounting-icons-set_1284-3976.jpg?w=740&t=st=1705401064~exp=1705401664~hmac=bde2fd9e1639a93bc515b301744d133189f1f658e98030b97a338ef42dd69fc4\')");
            obj.set_stretch("fixaspectratio");
            obj.set_borderRadius("10px");
            obj.set_opacity("1");
            obj.set_background("transparent");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Button("incomestatementform","515","304","149","46",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("손익계산서");
            obj.set_font("bold 15pt/normal \"Arial\",\"함초롬바탕\"");
            obj.set_borderRadius("10px");
            obj.set_background("#EAEAEA");
            obj.set_border("0px none transparent,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Button("financialpositionform","674","304","149","46",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("재무상태표");
            obj.set_font("bold 15pt/normal \"Arial\",\"함초롬바탕\"");
            obj.set_borderRadius("10px");
            obj.set_background("#EAEAEA");
            obj.set_border("0px none transparent,0px none,0px none");
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
        this.registerScript("MainPage.xfdl", function() {

        this.slipForm_onclick = function(obj,e)
        {
        	gfn_open("/posting/slipform", "일반 전표");
        };

        this.journalForm_onclick = function(obj,e)
        {
        	gfn_open("/posting/journalform", "분개장");
        };

        this.incomestatementform_onclick = function(obj,e)
        {
        	gfn_open("/settlement/incomestatementform", "손익계산서");
        };

        this.financialpositionform_onclick = function(obj,e)
        {
        	gfn_open("/settlement/financialpositionform", "재무상태표");
        };

        this.ImageViewer00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.slipForm.addEventHandler("onclick",this.slipForm_onclick,this);
            this.journalForm.addEventHandler("onclick",this.journalForm_onclick,this);
            this.incomestatementform.addEventHandler("onclick",this.incomestatementform_onclick,this);
            this.financialpositionform.addEventHandler("onclick",this.financialpositionform_onclick,this);
        };
        this.loadIncludeScript("MainPage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
