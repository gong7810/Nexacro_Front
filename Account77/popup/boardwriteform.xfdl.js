(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("write_board");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_board", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"WRITTEN_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("e_contents","32","132","618","228",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","32","36","64","14",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","32","90","64","14",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("작성자");
            obj.set_textAlign("center");
            obj.set_font("bold 12px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("write_btn","485","370","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Edit("e_title","110","36","526","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("list_btn","580","370","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("목록");
            this.addChild(obj.name, obj);

            obj = new Edit("e_writer","110","82","526","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_text("hi");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","e_contents","value","ds_board","CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","e_title","value","ds_board","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","e_contents","readonly","ds_write","CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","e_writer","accessibilityaction","Dataset00","user");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","e_writer","accessibilitydesclevel","ds_writer","writer");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","e_writer","value","ds_board","WRITTEN_BY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("boardwriteform.xfdl", function() {
        // include "scripts::commonDate.xjs";
        // application = nexacro.getApplication();
        // var today;
        // var row;
        // var status;
        //
        application = nexacro.getApplication();




        //테스트 완료

        this.write_board_onload = function(obj,e)
        {


        	trace('');
        	trace('');
        	trace('');
        	trace('-------------------onload event has been started------------------------');
        	trace("<<<<<<<<<<<<<<<< : this is for write");

        			//기존에 있는 데이터 셋을 삭제
        			trace('cleared data cnt is :'+this.ds_board.clearData());

        			//데이터셋에 row를 추가
        			this.ds_board.addRow();

        			//데이터 셋에 row가 추가되었는지 확인
        			trace(this.ds_board.getRowCount());


        			//현재 로그인한 사용자의 정보가 있는 데이터 셋에서 사용자의 이름을 가지고 온다.
        			var name = application.gds_emp.getColumn(0, "EMP_NAME");

        			//이름을 잘 가지고 왔는지 확인
        			trace('this is name : '+name);

        			//사용자의 이름을 e_writer에 할당
        			this.e_writer.set_value(name);



        	trace('-----------------------------onload event has been finished-------------------------------');
        	trace('');
        	trace('');
        	trace('');


        };




        //테스트 완료

        this.list_btn_onclick = function(obj,e)
        {
        	this.close('list_btn');

        };



        //테스트 완료

        this.write_btn_onclick = function(obj,e)
        {
        			//제목과 내용의 text값을 변수에 할당
        			var title=this.e_title.text;
        			var contents=this.e_contents.text;
        			trace("title : " +title,"contents : "+contents);

        	trace("this is for write");

        	//트랜잭션 정보를 변수에 할당
         	var id = "writeBoard";
         	var url = "svcOperate::registerBoard";
         	var reqData = "";
         	var resData = "ds_board=ds_board";
         	var args = "";
         	var callback = "callback";



        	// 제목이나 내용을 입력하지 않았다면 transaction이 실행되지 않음
        	// ---> 공백이어도 마찬가지
        	if(title.trim()==''){
        		alert('제목을 입력해 주세요');
        		return;
        	}else if(contents.trim()==''){
        		alert('내용을 입력해 주세요');
        		return;

        	//제목과 내용을 다 입력했는지 확인
        	}else if(title&&contents){

         	this.transaction(id, url, resData, reqData, args, callback);
         	this.close('write_btn');

        	}



        };


        //테스트 완료
        // esc 버튼을 클릭하면은 해당 화면을 종료
        this.write_board_onkeydown = function(obj,e)
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
            this.addEventHandler("onload",this.write_board_onload,this);
            this.addEventHandler("onkeydown",this.write_board_onkeydown,this);
            this.e_contents.addEventHandler("onkeyup",this.e_contents_onkeyup,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.write_btn.addEventHandler("onclick",this.write_btn_onclick,this);
            this.e_title.addEventHandler("onmouseenter",this.e_title_onmouseenter,this);
            this.list_btn.addEventHandler("onclick",this.list_btn_onclick,this);
        };
        this.loadIncludeScript("boardwriteform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
