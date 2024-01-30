(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("employeeaddform");
            this.set_titletext("New Form");
            this.set_visible("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_empList", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SOCIAL_SECURITY_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"BASIC_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"USER_OR_NOT\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPLACE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_OF_EDUCATION\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADDRESS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("gender_inner_dataset", this);
            obj._setContents("<ColumnInfo><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GENDER\">남</Col></Row><Row><Col id=\"GENDER\">여</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("user_or_not_inner_dataset", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_OR_NOT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USER_OR_NOT\">재직</Col></Row><Row><Col id=\"USER_OR_NOT\">휴직</Col></Row><Row><Col id=\"USER_OR_NOT\">퇴직</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("level_of_education_dataset", this);
            obj._setContents("<ColumnInfo><Column id=\"LEVEL_OF_EDUCATION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LEVEL_OF_EDUCATION\">전문대졸업</Col></Row><Row><Col id=\"LEVEL_OF_EDUCATION\">학사</Col></Row><Row><Col id=\"LEVEL_OF_EDUCATION\">석사</Col></Row><Row><Col id=\"LEVEL_OF_EDUCATION\">박사</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_empList_for_find_duplicatie_info", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SOCIAL_SECURITY_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"BASIC_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"USER_OR_NOT\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPLACE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL_OF_EDUCATION\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADDRESS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dept_name_dataset", this);
            obj._setContents("<ColumnInfo><Column id=\"dept_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"dept_name\">이사회</Col></Row><Row><Col id=\"dept_name\">개발부</Col></Row><Row><Col id=\"dept_name\">인사부</Col></Row><Row><Col id=\"dept_name\">총무부</Col></Row><Row><Col id=\"dept_name\">홍보부</Col></Row><Row><Col id=\"dept_name\">생산부</Col></Row><Row><Col id=\"dept_name\">영업부</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("position_name_dataset", this);
            obj._setContents("<ColumnInfo><Column id=\"POSITION_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"POSITION_NAME\">대표이사</Col></Row><Row><Col id=\"POSITION_NAME\">부장</Col></Row><Row><Col id=\"POSITION_NAME\">차장</Col></Row><Row><Col id=\"POSITION_NAME\">실장</Col></Row><Row><Col id=\"POSITION_NAME\">과장</Col></Row><Row><Col id=\"POSITION_NAME\">주임</Col></Row><Row><Col id=\"POSITION_NAME\">기사</Col></Row><Row><Col id=\"POSITION_NAME\">수석연구원</Col></Row><Row><Col id=\"POSITION_NAME\">책임연구원</Col></Row><Row><Col id=\"POSITION_NAME\">전임연구원</Col></Row><Row><Col id=\"POSITION_NAME\">주임연구원</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_img", this);
            obj._setContents("<ColumnInfo><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog", this);
            this.addChild(obj.name, obj);


            obj = new VirtualFile("VirtualFile00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button_imgFind","5.00%","34.31%","6.20%","3.33%",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("사진첨부");
            this.addChild(obj.name, obj);

            obj = new Button("save_img_btn","12.80%","34.31%","6.20%","3.47%",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("사진저장");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("emp_img","5.00%","6.94%","27.00%","25.00%",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_stretch("fixaspectratio");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","5.00%","80.97%","7.70%","4.31%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("직급");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","54.00%","52.64%","7.70%","4.31%",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("재직여부");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","54.00%","59.58%","7.70%","4.31%",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("이메일");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","54.00%","66.81%","7.70%","4.31%",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("휴대전화");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","54.00%","73.89%","7.70%","4.31%",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("최종학력");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_00","54.00%","80.83%","7.70%","4.31%",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("기본주소");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03_00","5.00%","45.56%","7.70%","4.31%",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("사원코드");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_02_00","5.00%","52.64%","7.70%","4.31%",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("사원이름");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_01","5.00%","59.72%","7.70%","4.31%",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("비밀번호");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_01","5.00%","66.81%","7.70%","4.31%",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("주민번호");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02_00_01","5.00%","73.89%","7.70%","4.31%",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("생년월일");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_01","54.00%","45.56%","7.70%","4.31%",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("성별");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_basic_address","65.30%","80.83%","24.60%","4.31%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_name","16.00%","52.64%","25.10%","4.31%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_code","16.00%","45.56%","25.10%","4.31%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_textAlign("center");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_email","65.30%","59.58%","24.60%","4.31%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mask_edit_social_security_number","16.00%","66.81%","25.10%","4.31%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_format("######-#{######}");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_trimtype("left");
            obj.set_rtl("");
            obj.set_maskchar(" ");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edit_phone_number","65.30%","66.81%","24.60%","4.31%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_format("###-####-####");
            obj.set_type("string");
            obj.set_displaynulltext("___-____-____");
            obj.set_textAlign("center");
            obj.set_maskchar("-");
            obj.set_trimtype("left");
            this.addChild(obj.name, obj);

            obj = new Calendar("edit_birth_date","16.00%","73.89%","25.10%","4.31%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_displayinvalidtext("날짜를 선택해 주세요");
            obj.set_innerdataset("ds_empList");
            obj.set_datecolumn("BIRTH_DATE");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_pw","160","429","251","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Button("save_btn","81.10%","90.28%","8.80%","5.56%",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("등  록");
            this.addChild(obj.name, obj);

            obj = new Combo("edit_gender","653","328","246","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("gender_inner_dataset");
            obj.set_datacolumn("GENDER");
            obj.set_displaynulltext("성별을 선택해 주세요");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("edit_user_or_not","653","379","246","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("user_or_not_inner_dataset");
            obj.set_datacolumn("USER_OR_NOT");
            obj.set_displaynulltext("재직여부를 선택해 주세요");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("edit_level_of_education","653","532","246","31",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_innerdataset("level_of_education_dataset");
            obj.set_datacolumn("LEVEL_OF_EDUCATION");
            obj.set_displaynulltext("최종학력을 선택해 주세요");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00_01_00","54.00%","39.03%","7.70%","4.31%",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("부서명");
            obj.set_textAlign("center");
            obj.set_background("#87c4f1");
            obj.set_borderRadius("5px");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Combo("edit_dept_name","653","281","246","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dept_name_dataset");
            obj.set_datacolumn("dept_name");
            obj.set_displaynulltext("부서를 선택해 주세요");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Combo("edit_position_name","160","582","251","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("position_name_dataset");
            obj.set_datacolumn("POSITION_NAME");
            obj.set_displaynulltext("직급을 선택해 주세요");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","emp_img","image","ds_img","IMAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edit_basic_address","value","ds_empList","BASIC_ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edit_emp_name","value","ds_empList","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edit_emp_code","value","ds_empList","EMP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edit_email","value","ds_empList","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","mask_edit_social_security_number","value","ds_empList","SOCIAL_SECURITY_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edit_phone_number","value","ds_empList","PHONE_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edit_birth_date","datecolumn","gds_emp","BIRTH_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edit_birth_date","value","ds_empList","BIRTH_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edit_emp_code","accessibilityaction","ds_empList","EMP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edit_emp_name","accessibilityaction","ds_empList","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edit_pw","value","ds_empList","USER_PW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","mask_edit_social_security_number","accessibilityaction","ds_empList","SOCIAL_SECURITY_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("employeeaddform.xfdl","scripts::commonOpen.xjs");
        this.registerScript("employeeaddform.xfdl", function() {
        this.executeIncludeScript("scripts::commonOpen.xjs"); /*include "scripts::commonOpen.xjs"*/
        application = nexacro.getApplication();






        this.employeeaddform_onload = function(obj,e)
        {

        	this.ds_empList.clearData();
        		//트랜잭션을 위해서 데이터를 저장할 로우를 추가하고
        		this.ds_empList.addRow();
        		var rowCnt=this.ds_empList.getRowCount()
        		trace('rowCnt is : '+rowCnt);


        	var id = "findEmployeeList";
        	var url = "svcOperate::findEmpList";
        	var resData = "";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        	var reqData = "ds_empList_for_find_duplicatie_info=gds_emp"; // 데이터 요청
        	var args = "";
        	var callback = "data_for_dup_callbackFunc";

        	this.transaction(id, url, resData, reqData, args, callback);
        	//onload 이벤트가 발생할때 edit_emp_code에 포커스를 준다.
        	this.edit_emp_code.setFocus();

        	trace('--------------------------------------------onload event has been finished----------------------------------------------');



        };






        // 중복 검증을 위한 데이터를 잘 받았는지를 확인하는 코드
        this.data_for_dup_callbackFunc=function(){

        var rowCnt=this.ds_empList_for_find_duplicatie_info.getRowCount();
        trace('<<<<<<<<<<<<<<<<<<<<<<< rowCnt is : '+rowCnt);


        var empCode='emp'+(rowCnt+1);
        trace('empCode is : '+empCode);

        this.edit_emp_code.set_value(empCode);

        }




        //esc를 누르면 화면종료

        this.employeeaddform_onkeydown = function(obj,e)
        {

        	var code=e.keycode;
        	if(code==27){
        	//아니요를 눌렀을때 return
        	if(!confirm('등록을 취소하시겠습니까?'))return;
        	// 트랜잭션용 dataset에 있는 데이터를 지우고 해당 창을 닫는다.
        	var cleared_data=this.ds_empList.clearData();
        	trace('<<<<<<< cleared data is :'+cleared_data);
        	trace('>>>>>>> row after terminated  '+this.ds_empList.getRowCount());
        	this.close('esc');

        	}

        };






        //-------------------------------------------각각의 컴포넌트에서 이벤트가 발생할때마다 값을 ds_empList에 저장된 값을 확인 ----------------------------------
        											 // ---> 콤보에 있는 아이템들은 아이템을 선택하고 나서 dataset에 값을 할당


        // 사원코드
        this.edit_emp_code_onchanged = function(obj,e)
        {
        	trace(this.ds_empList.getColumn(e.row,'EMP_CODE'));
        };

        this.edit_emp_name_onchanged = function(obj,e)
        {
        	trace(this.ds_empList.getColumn(e.row,"EMP_NAME"));
        };

        this.edit_pw_onchanged = function(obj,e)
        {
        	trace(this.ds_empList.getColumn(e.row,'USER_PW'));
        };

        this.mask_edit_social_security_number_onchanged = function(obj,e)
        {
        	trace(this.ds_empList.getColumn(e.row,'SOCIAL_SECURITY_NUMBER'));
        };

        this.edit_birth_date_onchanged = function(obj,e)
        {
        	trace(this.ds_empList.getColumn(e.row,'BIRTH_DATE'));
        };




        this.edit_position_name_oncloseup = function(obj,e)
        {
        		this.ds_empList.setColumn(0,'POSITION_NAME',e.posttext);
        	    trace(this.ds_empList.getColumn(0,'POSITION_NAME'));
        };





        this.edit_dept_name_oncloseup = function(obj,e)
        {
        	this.ds_empList.setColumn(0,'DEPT_NAME',e.posttext);
            trace(this.ds_empList.getColumn(0,'DEPT_NAME'));

        };


        this.edit_gender_oncloseup = function(obj,e)
        {

        	this.ds_empList.setColumn(0,'GENDER',e.posttext);
        	trace(this.ds_empList.getColumn(0,'GENDER'));

        };



        this.edit_user_or_not_oncloseup = function(obj,e)
        {
        		this.ds_empList.setColumn(0,'USER_OR_NOT',e.posttext);
        	trace(this.ds_empList.getColumn(0,'USER_OR_NOT'));

        };


        this.edit_phone_number_onchanged = function(obj,e)
        {
        		trace(this.ds_empList.getColumn(e.row,'PHONE_NUMBER'));
        };




        this.edit_email_onchanged = function(obj,e)
        {

        	trace(this.ds_empList.getColumn(e.row,'EMAIL'));

        }



        this.edit_level_of_education_oncloseup = function(obj,e)
        {

        	this.ds_empList.setColumn(0,'LEVEL_OF_EDUCATION',e.posttext);
        	trace(this.ds_empList.getColumn(0,'LEVEL_OF_EDUCATION'));


        };


        this.edit_basic_address_onchanged = function(obj,e)
        {


        	trace(this.ds_empList.getColumn(0,'BASIC_ADDRESS'));
        };




        //------------------------------------------------------ds_empList에 값 할당끝--------------------------------------------------------------------








        this.save_btn_onclick = function(obj,e)
        {
        			trace('<<<  this is for image : '+this.emp_img.image);


        				// 이미지가 존재하면은 이미지 경로를 변수에 할당해서 ds_empList의
        				// IMAGE 칼럼에 할당
        				if(this.emp_img.image!=undefined){
        					trace('<<<<<<< there is image exist!!!');

        						//사진정보를 ds_empList의 IMAGE칼럼에 저장
        					this.ds_empList.setColumn(0,'IMAGE',this.emp_img.image);
        					trace('-------------------image info is : '+this.ds_empList.getColumn(0,'IMAGE'));

        				}




        	trace('<<<<< birth_date.length is : '+this.edit_birth_date.text.length);

        	var dept_name=this.edit_dept_name.value;  // value로 해야지 undefined일때 검증이 가능하다.
        	trace('-----------<'+dept_name+'>-------   ');
        	trace(dept_name==undefined?'it is empthy':'its not empty');
        	var socialSecurityNumber=this.mask_edit_social_security_number.text;
        	trace('<<<<<<<<<<<<< socialNumber is : '+socialSecurityNumber.length);
        	var bool=confirm('저장하시겠습니까?')

        	// 아니요를 클릭하면은 return
        	if(!bool)return;

        	//중복되는 empCode가 없는지 체크
        	var empCode=this.edit_emp_code.text;
        	var isDuplicated=this.ds_empList_for_find_duplicatie_info.findRow('EMP_CODE',empCode.trim())
        	trace('<<<<<<<<<<<<<<<<<<<< isDuplicated is : '+isDuplicated);

        	//모든 컴포넌트의 문자열을 가지고 온다.  // 아래의 value로 값을 가져오는 것들은 콤보이고 콤보를 선택하지 않으면 해당 컴포넌트의
        												  // 값을 가지고 올때  undefined가 뜨기 때문에 value로 해놓았습니다.

        	var empCode=this.edit_emp_code.text;

        	var empName=this.edit_emp_name.text;

        	var userPw=this.edit_pw.text;

        	var socialSecurityNumber=this.mask_edit_social_security_number.value;

        	var birthDate=this.edit_birth_date.text;

        	var positionName=this.edit_position_name.value;      //*******

        	var deptName=this.edit_dept_name.value;              //*******

        	var gender=this.edit_gender.value;                   //*******

        	var userOrNot=this.edit_user_or_not.value;           //*******

        	var email=this.edit_email.text;

        	var phoneNumber=this.edit_phone_number.text;

        	var levelOfEducation=this.edit_level_of_education.value;   //*******

        	var basicAddress=this.edit_basic_address.text;

        	trace('userPw : '+userPw);
        	trace('level of education : '+levelOfEducation);
        	trace('phoneNumber : '+phoneNumber);

        	trace('-------------------start of if statement-----------------------------');

        	if(empCode.trim()==''||empCode.length<3||empCode.length>10){

        		if(empCode.trim()==''){

        			alert('사원코드를 입력해 주세요.');
        			return;

        		}else if(empCode.length<3){

        			alert('사원코드는 3자 이상으로 입력해 주세요.');
        			return;
        		}else if(empCode.length>10){

        		  alert('사원코드는 10자 이하로 입력해 주세요.');
        		  return;
        		}

        	}else if(empName.trim()==''||empName.length<3){

        		if(empName.trim()==''){
        			alert('사원명을 입력해 주세요.');
        			return;
        		}else if(empName.length<3){
        			alert('사원명은 3자 이상으로 입력해 주세요.');
        			return;
        		}

        	}else if(userPw.trim()==''||userPw.length<6){

        			if(userPw.trim==''){
        				trace('here--------------------');
        				alert('비밀번호를 입력해 주세요.');
        				return;
        			}else if(userPw.length<6){
        				alert('비밀번호는 7자 이상으로 입력해 주세요');
        				return;
        		}

         	}else if(positionName==undefined){

        		alert('직급을 선택해 주세요.');
        		return;

        	}else if(deptName==undefined){

        		alert('부서명을 선택해 주세요.');
        		return;

        	}else if(gender==undefined){

        		alert('성별을 선택해 주세요.');
        		return;

        	}else if(userOrNot==undefined){

        	alert('재직여부를 선택해 주세요.');
        	return;

        	}else if(email==''){

        		alert('이메일을 입력해 주세요.');
        		return;
        	}else if(phoneNumber=='-------------'||phoneNumber=='___-____-____'){ // 이거는 개선이 필요합니다.

         	alert('핸드폰 번호를 입력해 주세요.');
         	return;

         	}
        	else if(levelOfEducation===undefined){

        	alert('최종학력을 선택해 주세요.');
        	return;

        	}else if(basicAddress==''){

        		alert('기본 주소를 입력해 주세요.');
        		return;

        	}



        	trace('-------------------end of if statement-----------------------------');






        	if(bool){

        	this.for_insert_transaction(isDuplicated);

        	}else{

        	return;

        	}






        };



        this.for_insert_transaction=function(isDuplicated){

        	// 중복되는 결과가 없으면 트랜잭션을 보내고
        	if(isDuplicated==-1){


        	var id = "findEmployeeList";
        	var url = "svcOperate::registerEmp";
        	var resData = "gds_emp=ds_empList";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        	var reqData = ""; // 데이터 요청
        	var args = "";
        	var callback = "register_emp_callbackFunc";

        	this.transaction(id, url, resData, reqData, args, callback);

        	trace('-----------------------transaction for registeremployee has been sent!!!---------------------------------');

        		//ds_empList의 행을 삭제
        	var cleared_data=this.ds_empList.clearData();
        	trace('<<<<<<<< cleared data from save_btn is : '+cleared_data);
        	trace('>>>>>>>> row after terminated  '+this.ds_empList.getRowCount());
        	alert('등록 되었습니다.');
        	this.close('save_btn');

        	 //중복되는 결과가 있으면은 다시 addform으로 돌아감
        	}else if(isDuplicated!=-1){

        		alert('이미 존재하는 사원 코드 입니다.');
        		return;


        	}




        }



        this.regiser_emp_callback=function(){

        trace('transaction has been successfully sent to controller');

        }










        //사진첨부버튼 누를때
        var vFile;
        var empFilename;

        var fileName;
        var img;
        var imgVfile;
        var newFileName;
        var imgVfile;
        var imgURL;

        this.Button_imgFind_onclick= function(obj,e)         //1. "사진첨부" 버튼클릭
        {



        	trace('???');
            this.FileDialog.open("사진첨부", FileDialog.LOAD);                           //2. 모달창이름, 파일1개       *open검색하면 FileDialog.LOAD는 open할때 한개의 파일할때 사용하는거라고 나옴
        						// f1 => 검색
        	trace('???');







        };






        this.img_find_callbackFunc=function(){


        }






         //이거 empcode 현재 등록하는 회원의 데이터로 날리도록 하자
        // 이거는 회원을 등록할때 같이 날리도록 하자
        this.save_img_btn_onclick = function(obj,e)
        {

        		//ImageViewer에 있는 값을 가지고 와서
        		trace('<<<  this is for image : '+this.emp_img.image);

        		var image=this.emp_img.image
        	  //this.ds_empList.setColumn(e.row,"IMAGE",this.emp_img.image);
              //var image=this.ds_empList.getColumn(e.row,"IMAGE");
        	  //var empCode=this.edit_emp_code.text;
        	  trace("image  :"+image);
        	//  trace("empCode  :"+empCode);

        		//"empCode='"+empCode+"' image='"+image+"'"




        	var id = "saveEmpImg";
        	var url = "svcOperate::saveEmpImg";
        	var resData = "";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        	var reqData = "ds_empRegist=gds_emp"; // 데이터 요청
        	var args = "empCode='"+'emp4'+"'image='"+image+"'";
        	var callback = "for_test";

        	this.transaction(id, url, resData, reqData, args, callback);









        //          this.transaction(      //2. Apache/Apache2에 사원코드.jpg로 저장하기위해 들어가는 트랜젝션
        //             "saveEmpImg",
        //             "svcHr::saveEmpImg",   //http://localhost:9999/SpringBoot_Account/hr/saveEmpImg
        //             "ds_img=ds_img:u",      //3. 아까 넣어놨던 물통들고 들어감 => ds_img여기에 사진이름과 사진 데이터가 담겨져있다.
        //             "",
        //             "",
        //             "callback",
        //             false            //4. 반드시 동기형식으로해놔야함, 비동기식으로하면 사진을 다 읽기도전에 callback메서드 호출됨
        //          );


        };


        this.for_test=function(svdid,errorMsg,errorMessage){
        trace('<<<<<< e : '+errorMsg);
        trace('<<<<<< v : '+errorMessage);

        }

        //사진을  emp_img 에 입력?
        this.FileDialog_onclose = function(obj,e)   //3. 모달꺼지면 실행됨, 아래 Design탭의 Invisible Object에 FileDialog라고 물통있음(사진선택안했으면 e가 null임)
        {
        	trace("모달창닫을때!!!");
        	trace(e.reason);
              vFile = e.virtualfiles[0];    // 사진을 0번째 배열에 넣은 것                      //4. 사진e를 배열에 담고

        	  trace("vFile :"+vFile);

              //var i = vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);         //5. 사진이 null이 아닐때(성공시) this.FileList_onsuccess메서드 실행
              //var j = vFile.addEventHandler("onerror", this.FileList_onerror, this);            //5. 사진이 null일때(실패시) this.FileList_onerror메서드 실행


        	  // 선택한 파일이 있으면 아래의 코드를 실행
        	  if(vFile!=undefined){
              vFile.open(vFile.fullpath, VirtualFile.openBinary);                           //6. 이줄이있어야 성공시onsuccess메서드, 실패시onerror메서드 호출 가능(둘다헷갈, 안에보면 바이너리라고해서 2진수로 읽어주는애 있음)
              // 선택한 사진을 2진수로 바꿔줌.
        	  vFile.read();                                                      //7. 읽어옴(여기까지가 모달창 꺼질때, 클릭한 사진을 읽어오기까지임)
        		// 2진수로 읽음
              empFileName = vFile.filename;             // 사진의 이름을 불러온다.
        	  trace(empFileName);
        	  var realPath = system.convertRealPath(vFile.fullpath);                        //9. 실제경로 주고
              this.emp_img.set_image("file://"+realPath);                                 //10 <사진태그>에다가 바탕화면의 사진을 세팅함
              this.emp_img.set_stretch("fit");                                       //11. <사진태그>에 맞게 사진사이즈 맞추는중
        	  trace("★★★★★★★★★★★★★★★★★★"+this.emp_img.image);


        			}else if(vFile==undefined){

        				  trace('');
        				  trace('');
        				  trace('');
        				  trace('-----------------------there is no image to show----------------------------');
        				  trace('');
        				  trace('');
        				  trace('');

        			}

        	trace('');
        	trace('');
        	trace('');
        	trace('---------------------------add image finished---------------------------');
        	trace('');
        	trace('');
        	trace('');


        };



        //이미지 VirtualFile 오픈 성공
        this.FileList_onsuccess = function(obj,e)   //12. 모달끌떄, 사진을 읽었다면 실행되는 메서드
        {
              var findNum = this.ds_img.findRow("EMP_FILE_NAME", empFileName);
              if(findNum > -1){            //13. 해당사원의 프로필사진이 이미 있다면
                 this.ds_img.deleteRow(findNum);   //14. 삭제시킴(새로운걸 넣기위해)
              }

              this.ds_img.addRow();            //15. 위에서 row자체를 삭제시켯으니, 이제 다시 사진을넣을 row만들어서
              //로그인시 세팅한 정보로 넣는방법(계속 admin으로 들어감)
              //16.이줄은 이름 넣는중(사원코드+jpg)
                                         //방안1. this.ds_empList.rowposition   방안2.application.gds_emp   방안3.application.gv_empCode
        	  //저장될 사진의 이름을 설정하는 줄
              this.ds_img.setColumn(0,"EMP_FILE_NAME",application.gds_emp.getColumn(this.ds_empList.rowposition,"EMP_CODE")+".jpg");   //16.이줄은 이름 넣는중(사원코드+jpg) string형태
              this.ds_img.setColumn(0,"IMG_FILE_DATA", e.binarydata);      //17.이줄은 데이터넣는중(2진수의 형태)=  BLOB : 2진수의 자료형
              // 사진과 사진이름을 각각 저장한다.
        	  trace("★★★★★★★★★★★★★"+this.ds_img.getColumn(e.row, "EMP_FILE_NAME"));
        };











        //테스트용 버튼
        this.test_button_onclick = function(obj,e)
        {
        	// 주민번호만 mask_edit 입니다.

        	var empCode=this.edit_emp_code.text;

        	var empName=this.edit_emp_name.text;

        	var userPw=this.edit_pw.text;

        	var socialSecurityNumber=this.mask_edit_social_security_number.text;

        	var birthDate=this.edit_birth_date.text;

        	var positionName=this.edit_position_name.text;

        	var deptName=this.edit_dept_name.text;

        	var gender=this.edit_gender.text;

        	var userOrNot=this.edit_user_or_not.text;

        	var email=this.edit_email.text;

        	var phoneNumber=this.edit_phone_number.text;

        	var levelOfEducation=this.edit_level_of_education.text;

        	var basicAddress=this.edit_basic_address.text;

        	trace('<<<<< empCode is : '+empCode.trim()+'------'); // 3자 이상으로 적게 한다.
        	trace('<<<<<< empName is : '+empName);                // 3자 이상으로 적게 한다.
        	trace('<<<<<< userPw is : '+userPw);                  // 7자 이상으로 적게한다.
        	trace('<<<<<< socialSecurityNumber is : '+socialSecurityNumber); // 형식에 맞지 않으면은 다시 작성하게 한다.
        	trace('<<<<<< birthDate is : ' + birthDate);                     // 선택하지 않았으면은 다시 선택하게 한다.
        	trace('<<<<<<<< positionName is : '+ positionName);              // 이거는 콤보를 이용하는게 좋을거 같다.
        	trace('<<<<<<<< gender is : '+ gender);							 // 이거는 선택하지 않았으면은 다시 선택하게 한다.
        	trace('<<<<< deptName is :'+deptName);							 // 이거는 선택하지 않았으면은 다시 선택하게 한다.
        	trace('<<<<<<<< userOrNot is : '+ userOrNot);					 // 이거는 선택하지 않았으면은 다시 선택하게 한다.
        	trace('<<<<<<<< email is :' +email);
        	trace('<<<<<<< phoneNumber is :'+phoneNumber);
        	trace('<<<<<<<< levelOfEducation is :'+levelOfEducation);
        	trace('<<<<<<< basicAddress is : '+basicAddress);
        	trace('<<<<<< socialSecurityNumber.length is : '+socialSecurityNumber.length) // '-'이것도 하나의 문자로 취급된다.  14 자
        	trace('<<<<<<<<<<<<< phoneNubmer.length is : '+phoneNumber.length); // '-'이것도 하나의 문자로 취급된다.  13자
        	trace('<<<<<<<<<<<<<<<<<<<<<<<<<<< userPw.length is :'+userPw.length);// 이거는 비밀번호를 입력하지 않았을때






        	trace('<<<<< empCode is : '+empCode.trim()+'------'); // 3자 이상으로 적게 한다.
        	trace('<<<<<< empName is : '+empName);                // 3자 이상으로 적게 한다.
        	trace('<<<<<< userPw is : '+userPw);                  // 7자 이상으로 적게한다.
        	trace('<<<<<< socialSecurityNumber is : '+socialSecurityNumber); // 형식에 맞지 않으면은 다시 작성하게 한다.
        	trace('<<<<<< birthDate is : ' + birthDate);                     // 선택하지 않았으면은 다시 선택하게 한다.
        	trace('<<<<<<<< positionName is : '+ positionName);
        	trace('<<<<<<<< gender is : '+ gender);
        	trace('<<<<<<<< userOrNot is : '+ userOrNot);
        	trace('<<<<<<<< email is :' +email);
        	trace('<<<<<<< phoneNumber is :'+phoneNumber);
        	trace('<<<<<<<< levelOfEducation is :'+levelOfEducation);
        	trace('<<<<<<< basicAddress is : '+basicAddress);


        };









        // ------------------------------------------------ 사진관련 -----------------------------------------------------------------
        // 이 코드들이 가장 밑에 있다면은 아직 적용이 되지 않은것 입니다.




        // 유효성검사 - canchage
        this.check = function(obj,  e)
        {
           //var id=e.fromreferenceobject;
           var MaskEdit=obj.id;
           switch(MaskEdit){
              case 'socialSecurityNumber':  var regExp=/^\d{13}$/;
                                     var mat=this.socialSecurityNumber.value.match(regExp);
                                     if(mat==null){
                                      this.static_snCheck.set_text('주민번호를 확인해주세요');
                                     }else{
                                      this.static_snCheck.text='' };  break;
              case 'phoneNumber':  var regExp=/^[0]\d{10}$/;//
                                     var mat=this.phoneNumber.value.match(regExp);
                                     if(mat==null){
                                      this.static_pnCheck.set_text('휴대폰번호를 확인해주세요');
                                     }else{
                                      this.static_pnCheck.text='' };  break;

           }
        }














        //이미지 VirtualFile 오픈 실패
        this.FileList_onerror = function(obj,e)
        {
           trace("실패");
           trace("errortype: "+e.errortype);
            trace("errormsg: "+e.errormsg);
            trace("statuscode: "+e.statuscode);
        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.employeeaddform_onload,this);
            this.addEventHandler("onkeydown",this.employeeaddform_onkeydown,this);
            this.Button_imgFind.addEventHandler("onclick",this.Button_imgFind_onclick,this);
            this.save_img_btn.addEventHandler("onclick",this.save_img_btn_onclick,this);
            this.edit_basic_address.addEventHandler("onchanged",this.edit_basic_address_onchanged,this);
            this.edit_emp_name.addEventHandler("onchanged",this.edit_emp_name_onchanged,this);
            this.edit_emp_code.addEventHandler("onchanged",this.edit_emp_code_onchanged,this);
            this.edit_email.addEventHandler("onchanged",this.edit_email_onchanged,this);
            this.mask_edit_social_security_number.addEventHandler("onchanged",this.mask_edit_social_security_number_onchanged,this);
            this.edit_phone_number.addEventHandler("onchanged",this.edit_phone_number_onchanged,this);
            this.edit_birth_date.addEventHandler("onchanged",this.edit_birth_date_onchanged,this);
            this.edit_pw.addEventHandler("onchanged",this.edit_pw_onchanged,this);
            this.save_btn.addEventHandler("onclick",this.save_btn_onclick,this);
            this.edit_gender.addEventHandler("oncloseup",this.edit_gender_oncloseup,this);
            this.edit_user_or_not.addEventHandler("oncloseup",this.edit_user_or_not_oncloseup,this);
            this.edit_level_of_education.addEventHandler("oncloseup",this.edit_level_of_education_oncloseup,this);
            this.edit_dept_name.addEventHandler("oncloseup",this.edit_dept_name_oncloseup,this);
            this.edit_position_name.addEventHandler("oncloseup",this.edit_position_name_oncloseup,this);
            this.FileDialog.addEventHandler("onclose",this.FileDialog_onclose,this);
        };
        this.loadIncludeScript("employeeaddform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
