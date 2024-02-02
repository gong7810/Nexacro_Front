(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("boardform");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_board", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"WRITTEN_BY\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_BY\" type=\"STRING\" size=\"256\"/><Column id=\"WRITE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnFirst","282","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_firstBlue1");
            obj.set_text("<<");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrev","317","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_preBlue1");
            obj.set_text("<");
            this.addChild(obj.name, obj);

            obj = new Button("btn1","352","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn2","387","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn3","422","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn4","457","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn5","492","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn6","527","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("6");
            this.addChild(obj.name, obj);

            obj = new Button("btn7","562","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Button("btn8","597","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("8");
            this.addChild(obj.name, obj);

            obj = new Button("btn9","632","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("9");
            this.addChild(obj.name, obj);

            obj = new Button("btn10","667","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext","702","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_nextBlue1");
            obj.set_text(">");
            this.addChild(obj.name, obj);

            obj = new Button("btnLast","737","525","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_lastBlue1");
            obj.set_text(">>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","185","90","731","340",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("ds_board");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"0\"/><Column size=\"88\"/><Column size=\"218\"/><Column size=\"94\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"bno\"/><Cell col=\"2\" text=\"작성자\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"작성일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"expr:Number(ID)\"/><Cell col=\"2\" text=\"bind:WRITTEN_BY\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:TITLE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:WRITE_DATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","270","20","537","59",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("사내 게시판");
            obj.set_textAlign("center");
            obj.set_font("48px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("write_btn","852","470","68","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("글쓰기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Grid00","binddataset","gds_bbs","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("boardform.xfdl","scripts::commonOpen.xjs");
        this.addIncludeScript("boardform.xfdl","scripts::commonDate.xjs");
        this.registerScript("boardform.xfdl", function() {
        this.executeIncludeScript("scripts::commonOpen.xjs"); /*include "scripts::commonOpen.xjs"*/;
        this.executeIncludeScript("scripts::commonDate.xjs"); /*include "scripts::commonDate.xjs"*/;
        application = nexacro.getApplication();
        var today;
        var page=0;


        //Grid edit에 id 칼럼의 headsize를 0으로 설정해 놓았습니다.
        //CRUD시에만 필요해서 그렇게 해놓은 것이므로 필요시 size를
        //키워서 사용하시면 되겠습니다. ---> Grid에 데이터가 표시되지 않습니다.

        this.boardform_onload = function(obj,e)
        {
        	trace("onload Event has been occured at : boardform");
        	today=this.gfn_today();

        	var id = "findBoardList";
        	var url = "svcOperate::findBoardList";
        	var reqData = "";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        	var resData = "ds_board=ds_board"; // 데이터 요청
        	var args = "";
        	var callback = "callback";

        	this.transaction(id, url, reqData, resData, args, callback);

        	trace("<<<<<<<<<<<<<<< on_load event successfully finished");
        };


        this.callback=function(){
        	trace('>>>>>>>>>>>>>>> data for board has been successfully arrived!!!');
        }

        this.write_btn_onclick = function(obj,e)
        {
        	trace("btn has been pushed for : write_board");

        	//띄울 poppdiv의 정보를 작성하고
        	var sID="baordwriteform";
        	var sURL="popup::boardwriteform.xfdl";
        	var param={}; // 열리는 폼에 파라미터를 넘겨준다.
        	var callbackFunc="callbackFunc";
        	// 해당 프레임을 생성												 //            --파라미터 순서--
        	var oChildFrame = new ChildFrame(sID,300, 150, 100, 500, null, null, sURL);  // 프레임명, 부모프레임의 왼쪽과의 거리,
        	// 부모프레임의 상단과의 거리, 해당 프레임의 넓이,
        	// 해당 프레임의 높이, 부로 프레임의 오른쪽과의 거리,
        	// 부모 프레임과의 하단과의 거리, 참조할 프레임의 주소 ㄴ
        	// 해당 프레임의 띄어지는 위치및 해당 프레임을 화면에 출력												 // 참고 : 해당 프레임의 크기는 변경할수는 없는거 같다.
        	oChildFrame.set_openalign("center middle");
        	oChildFrame.showModal(sID, this.getOwnerFrame(), param, this, callbackFunc);

        	trace("this is for write");
        };

        //셀을 클릭하면은, 클릭한 게시판의 세부내용을 다른 화면에 출력

        this.Grid00_oncelldblclick = function(obj,e)
        {		var bno=this.Grid00.getCellText(this.Grid00.currentrow,1); // 게시물 id를 열리는 폼에 넘김
        	trace("<<< e.row : "+e.row);
        	trace(bno);

        	//띄울 poppdiv의 정보를 작성하고
        	var sID="baorddetail";
        	var sURL="popup::boarddetailform.xfdl";
        	var param={bno:bno,c:3}; // 생성되는 폼에 파라미터를 넘겨준다.
        	var callbackFunc="callbackFunc";
        	// 해당 프레임을 생성												 //            --파라미터 순서--
        	var oChildFrame = new ChildFrame(sID,0, 0, 0, 0, null, null, sURL);  // 프레임명, 부모프레임의 왼쪽과의 거리,
        	// 부모프레임의 상단과의 거리, 해당 프레임의 넓이,
        	// 해당 프레임의 높이, 부로 프레임의 오른쪽과의 거리,
        	// 부모 프레임과의 하단과의 거리, 참조할 프레임의 주소 ㄴ
        	// 해당 프레임 화면에 출력												 // 참고 : 해당 프레임의 크기는 변경할수는 없는거 같다.
        	oChildFrame.set_openalign("center middle");  // ---> 띄워지는 위치를 지정
        	oChildFrame.showModal(sID, this.getOwnerFrame(), param, this, callbackFunc);

        	trace("this is for read");

        };


        // boarddetailform과 boardwriteform의 콜백함수를 받는 함수 입니다.
        // 단 해당 폼의 onload시의 콜백함수를 받으면 무한 로딩에 걸림
        this.callbackFunc=function(obj,e)
        {
        	trace('');
        	trace('');
        	trace('');
        	trace("<<<<<<< callback function has been called");

        	if(e=='esc'||e=='list_btn'){


        		trace('<<<<<<<<<<<<<<<< this is esc or list_btn >>>>>>>>>>>>>>>>>>>');


        	}else if(e=='del_btn'||e=='mod_btn'||e=='write_btn'){


        		this.reload();
        		trace(">>>>>>> boardform has been reloaded!!");

        	}
        	trace('');
        	trace('');
        	trace('');

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.boardform_onload,this);
            this.addEventHandler("onkeydown",this.boardform_onkeydown,this);
            this.addEventHandler("onactivate",this.boardform_onactivate,this);
            this.addEventHandler("oninit",this.boardform_oninit,this);
            this.addEventHandler("onclose",this.boardform_onclose,this);
            this.btnFirst.addEventHandler("onclick",this.Button_onclick,this);
            this.btnPrev.addEventHandler("onclick",this.Button_onclick,this);
            this.btn1.addEventHandler("onclick",this.btn0_onclick,this);
            this.btn2.addEventHandler("onclick",this.btn1_onclick,this);
            this.btn3.addEventHandler("onclick",this.btn2_onclick,this);
            this.btn4.addEventHandler("onclick",this.btn3_onclick,this);
            this.btn5.addEventHandler("onclick",this.btn4_onclick,this);
            this.btn6.addEventHandler("onclick",this.btn5_onclick,this);
            this.btn7.addEventHandler("onclick",this.btn6_onclick,this);
            this.btn8.addEventHandler("onclick",this.btn7_onclick,this);
            this.btn9.addEventHandler("onclick",this.btn8_onclick,this);
            this.btn10.addEventHandler("onclick",this.btn9_onclick,this);
            this.btnNext.addEventHandler("onclick",this.Button_onclick,this);
            this.btnLast.addEventHandler("onclick",this.Button_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.write_btn.addEventHandler("onclick",this.write_btn_onclick,this);
        };
        this.loadIncludeScript("boardform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
