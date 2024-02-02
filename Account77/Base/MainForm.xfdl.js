(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample_googlemap_02");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new GoogleMap("GoogleMap00","170","40","480","320",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("0");
            obj.getSetter("onload").set("GoogleMap00_onload");
            obj.getSetter("onerror").set("GoogleMap00_onerror");
            obj.getSetter("onrecvsuccess").set("GoogleMap00_onrecvsuccess");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","32","40","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Show Map");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","32","80","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Add Maker");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","32","120","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Del Maker");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("MainForm.xfdl", function() {
        this.Button00_onclick = function(obj,e)
        {
        	this.GoogleMap00.set_showzoom(true);
        	this.GoogleMap00.set_apikey(nexacro.getApplication().googleMapAPIKey);
        	this.GoogleMap00.load(false, 11.96832946, 121.922996308, 0, 13);
        };

        this.Button01_onclick = function(obj,e)
        {
        	var objGoogleMapMaker = new nexacro.GoogleMapMarker();

        	objGoogleMapMaker.set_latitude(11.96832946);
        	objGoogleMapMaker.set_longitude(121.922996308);
        	objGoogleMapMaker.set_text("Default Marker");
        	objGoogleMapMaker.set_draggable(true);
        	objGoogleMapMaker.set_visible(true);

        	this.GoogleMap00.addItem("MapMarker", objGoogleMapMaker);

        	this.Button01.set_enable(false);
        	this.Button02.set_enable(true);
        };

        this.Button02_onclick = function(obj,e)
        {
        	this.GoogleMap00.removeItem("MapMarker");

        	this.Button01.set_enable(true);
        	this.Button02.set_enable(false);
        };

        this.GoogleMap00_onerror = function(obj,e)
        {
        	trace("error: " + e.errormsg);
        };

         this.GoogleMap00_onload = function(obj,e)
        {
        	trace("loading succeed");

        	if(this.GoogleMap00.items[0])
        	{
        		this.GoogleMap00.removeItem(this.GoogleMap00.items[0]);
        	}

        	this.Button01.set_enable(true);
        	this.Button02.set_enable(false);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("MainForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
