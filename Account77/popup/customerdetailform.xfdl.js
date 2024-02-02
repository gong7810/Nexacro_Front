(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("customerdetailform");
            this.set_titletext("New Form");
            this.set_visible("true");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_customer", this);
            obj._setContents("<ColumnInfo><Column id=\"CUSTOMER_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPLACE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_CEO\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_LICENSE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_BUSINESS_CONDITIONS\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_BUSINESS_ITEMS\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_ZIP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_BASIC_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_DETAIL_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_TEL_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_FAX_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edit_customer_ceo","310","55","90","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_password("false");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("del_btn","74.06%","80.00%","6.09%","14.00%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("삭 제");
            this.addChild(obj.name, obj);

            obj = new Button("mod_btn","82.42%","80.00%","6.02%","14.00%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("수 정");
            this.addChild(obj.name, obj);

            obj = new Button("list_btn","90.78%","80.00%","6.02%","14.00%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("목 록");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_customer_business_conditions","410","55","180","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_password("false");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_customer_name","120","55","180","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_password("false");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_customer_business_itmes","600","55","180","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_password("false");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_customer_code","20","55","90","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_password("false");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_customer_basic_address","790","55","281","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_password("false");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","14","90","31",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("거래처코드");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","120","14","180","31",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("거래처명");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","310","14","90","31",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("대표자");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","790","10","281","31",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("주소");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","410","14","180","31",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("업태");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_04","600","10","180","31",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("종목");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_05","1081","14","180","31",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("전화번호");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("edit_customer_phone_number","1081","55","180","31",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_displaynulltext("휴대폰 번호를 입력해 주세요");
            obj.set_type("string");
            obj.set_format("###-####-####");
            obj.set_textAlign("center");
            obj.set_usesoftkeyboard("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("customerdetailform.xfdl", function() {
        application = nexacro.getApplication();


        //부모로부터 받은 값들을 변수에 할당한다.
        var custCode=this.parent.custCode;
        var custName=this.parent.custName;
        var custCeo=this.parent.custCeo;
        var custBusinessConditions=this.parent.custBusinessConditions;
        var custBusinessItems=this.parent.custBusinessItems;
        var custAddr=this.parent.custAddr;
        var custPhone=this.parent.custPhone;


        this.customerdetailform_onload = function(obj,e)
        {

        		// 수정 버튼을 눌렀을때 추가된 row를 삭제
        		this.ds_customer.clearData();

        		// 수정 버튼을 눌렀을때 변경된 사항들을 원래 상태로 원복
        		this.del_btn.set_visible(true);
        		this.mod_btn.set_text('수 정');
        		this.edit_customer_ceo.set_readonly(true);
        		this.edit_customer_basic_address.set_readonly(true);
        		this.edit_customer_phone_number.set_readonly(true);



        trace('this is from child : '+custCode+'//'+custName+'//'+custCeo+'//'+custBusinessConditions+'//'+custBusinessConditions+'//'+custBusinessItems+
        	   '//'+custAddr+'//'+custPhone);


        this.edit_customer_code.set_value(custCode);
        this.edit_customer_name.set_value(custName);
        this.edit_customer_ceo.set_value(custCeo);
        this.edit_customer_business_conditions.set_value(custBusinessConditions);
        this.edit_customer_business_itmes.set_value(custBusinessItems);
        this.edit_customer_basic_address.set_value(custAddr);
        this.edit_customer_phone_number.set_value(custPhone);

        };








        this.del_btn_onclick = function(obj,e)
        {
        		var customerCode=this.edit_customer_code.text;
        		trace('empCode for delete data is : '+customerCode);

        		var bool=confirm('삭제하시겠습니까?');

        		if(bool){
        			var id = "removeCustomer";
        			var url = "svcOperate::removeCustomer";
        			var resData = "";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        			var reqData = ""; // 데이터 요청
        			var args = "customerCode="+customerCode;
        			var callback = "";
        			this.transaction(id, url, resData, reqData, args, callback);

        			alert('삭제되었습니다.');
        			this.close('del_btn');
        				}else{

        				return;

        				}




        };


        //수정 버튼을 클릭하면 발생시킬 이벤트
        this.mod_btn_onclick = function(obj,e)
        {		var modBtn=this.mod_btn.text;



        		//기존의 컴포넌트의 값을 가지고 온다.


        		if(modBtn=='수 정'){

        		this.ds_customer.addRow();
        		trace(this.ds_customer.getRowCount());

        		this.del_btn.set_visible(false);
        		this.mod_btn.set_text('저 장');
        		this.edit_customer_ceo.set_readonly(false);
        		this.edit_customer_basic_address.set_readonly(false);
        		this.edit_customer_phone_number.set_readonly(false);
        		}else if(modBtn=='저 장'){

        		var bool=confirm('저장하시겠습니까?');
        		trace(this.edit_customer_phone_number.text.length);
        				trace('<<<< value is : '+this.edit_customer_ceo.value);
        			if(this.edit_customer_ceo.text.trim()==''){

        				alert('대표자를 입력해 주세요.');
        				return;
        			}else if(this.edit_customer_basic_address.text.trim()==''){
        				alert('주소를 입력해 주세요.');
        				return;
        			}else if(this.edit_customer_phone_number.text=='___-____-____'){

        				alert('휴대폰 번호를 입력해주세요.');

        			}



        			this.for_update_transaction();


        		}

        	// 수정 버튼을 누르면 삭제 버튼을 안보이게 하고
        	 // 수정 버튼의 글자를 저장으로 변경.
        	 // 대표자,주소, 전화번호의 속성을 readonly=false로 변경
        	 // 해당 데이터가 원래의 데이터와 같거나 빈칸이 아닐시
        	 // 데이터를 전송하는 로직 구현

        	 // detail on_load 이벤트에 바뀐 사항들을 다시 원복하는
        	 // 코드 추가

        	 // 컴포넌트의 데이터를 dataset에 할당
        	 // transaction으로 dataset을 보냄


        };


        this.for_update_transaction=function(){
        			trace('');
        			trace('');
        			trace('');
        			trace('------------im in for_update_transaction-----------------');

        			// 컴포넌트의 값을 dataset에 할당
        			this.ds_customer.setColumn(0,'CUSTOMER_CODE',this.edit_customer_code.text);
        			this.ds_customer.setColumn(0,'CUSTOMER_NAME',this.edit_customer_name.text);
        			this.ds_customer.setColumn(0,'CUSTOMER_CEO',this.edit_customer_ceo.text);
        			this.ds_customer.setColumn(0,'CUSTOMER_BUSINESS_CONDITIONS',this.edit_customer_business_conditions.text);
        			this.ds_customer.setColumn(0,'CUSTOMER_BUSINESS_ITEMS',this.edit_customer_business_itmes.text);
        			this.ds_customer.setColumn(0,'CUSTOMER_BASIC_ADDRESS',this.edit_customer_basic_address.text);
        			this.ds_customer.setColumn(0,'CUSTOMER_TEL_NUMBER',this.edit_customer_phone_number.text);


        			trace('');
        			trace('');
        			trace('-----------data has inserted???-----------------------------');
        			trace(this.ds_customer.getColumn(0,'CUSTOMER_CODE'));
        			trace(this.ds_customer.getColumn(0,'CUSTOMER_NAME'));
        			trace(this.ds_customer.getColumn(0,'CUSTOMER_CEO'));
        			trace(this.ds_customer.getColumn(0,'CUSTOMER_BUSINESS_CONDITIONS'));
        			trace(this.ds_customer.getColumn(0,'CUSTOMER_BUSINESS_ITEMS'));
        			trace(this.ds_customer.getColumn(0,'CUSTOMER_BASIC_ADDRESS'));
        			trace(this.ds_customer.getColumn(0,'CUSTOMER_TEL_NUMBER'));
        			trace('');
        			trace('');
        			trace('');


        			// 트랜잭션으로 전송
        			var id = "updateCustomer";
        			var url = "svcOperate::updateCustomer";
        			var resData = "ds_customer=ds_customer";  // update하거나 insert할때는 res데이터로 :U옵션을 주고 전송
        			var reqData = ""; // 데이터 요청
        			var args = "";
        			var callback = "save_btn_callbackFunc";
        			this.transaction(id, url, resData, reqData, args, callback);

        			alert('성공적으로 수정되었습니다.');

        			trace('');
        			trace('');
        			trace('-----------transaction has been successfully sent----------------');
        			trace('');
        			trace('');
        			trace('');
        			this.close('save_btn');


        }








        this.list_btn_onclick = function(obj,e)
        {
        	this.close('list_btn');
        };



        // esc 키를 누르면은 해당 폼을 닫는다.
        this.customerdetailform_onkeyup = function(obj,e)
        {

        	var code=e.keycode
        	if(code==27){

        	this.close('esc');

        	}



        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.customerdetailform_onload,this);
            this.addEventHandler("onkeyup",this.customerdetailform_onkeyup,this);
            this.edit_customer_ceo.addEventHandler("onchanged",this.edit_pw_onchanged,this);
            this.del_btn.addEventHandler("onclick",this.del_btn_onclick,this);
            this.mod_btn.addEventHandler("onclick",this.mod_btn_onclick,this);
            this.list_btn.addEventHandler("onclick",this.list_btn_onclick,this);
        };
        this.loadIncludeScript("customerdetailform.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
