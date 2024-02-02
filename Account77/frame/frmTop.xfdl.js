(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fm_top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,65);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Popup", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">하위메뉴_1</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">하위메뉴_2</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">하위메뉴_2_1</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">하위메뉴_2_2</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">하위메뉴_2_3</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">하위메뉴_3</Col><Col id=\"Column1\">0</Col></Row><Row><Col id=\"Column0\">하위메뉴_4</Col><Col id=\"Column1\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","24",null,"41","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_top_bg02");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","24","160","41",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("ACCOUNT");
            obj.set_textAlign("center");
            obj.set_font("bold 20px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","310","24","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_top_menu");
            obj.set_text("메뉴");
            this.addChild(obj.name, obj);

            obj = new Static("user_info","10","0","210","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Hello! Hong Gil Dong");
            obj.set_cssclass("sta_top_textWht");
            this.addChild(obj.name, obj);

            obj = new Button("Home","170","25","140","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_top_menu");
            obj.set_text("홈으로");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00","320","69","140","101",null,null,null,null,null,null,this);
            obj.set_innerdataset("gds_menu");
            obj.set_captioncolumn("MENU_NAME");
            obj.set_idcolumn("MENU_NAME");
            obj.set_levelcolumn("MENU_ORDER");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,65,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmTop.xfdl", function() {

        this.fm_top_onload = function(obj,e)
        {
        	// user 정보 출력
        	var position = application.gds_open.getColumn(0, "CODE");
        	var name = application.gds_open.getColumn(0, "NAME");
        	//this.user_info.set_text(name + " " + position + "님");
        	trace("@@@@"+position+"@@@@"+name);
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.PopupMenu00.trackPopupByComponent(this.Button00,0,41);
        };

        this.Home_onclick = function(obj,e)
        {
        	gfn_open("Base::MainPage.xfdl", "MainPage", "mainForm");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Home.addEventHandler("onclick",this.Home_onclick,this);
            this.PopupMenu00.addEventHandler("onmenuclick",this.PopupMenu00_onmenuclick,this);
        };
        this.loadIncludeScript("frmTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
