//XJS=commonString.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"scripts::commonUtil.xjs");
        this.registerScript(path, function() {

        /********************************************************************************
         공통 유틸
         @Path          scripts::commonString.xjs
         @Description   공통 String 함수
         @Author        최용우
         @Create        2019. 11. 20.

         * =========================================================================
         * 수정일자     수정자    내    용
         * =========================================================================
         * 2019.11.20    최용우    최초 작성

         ********************************************************************************/

        /***************************************************************************
         * this.gfn_split          : 특정 문자열을 기준으로 전체 문자열을 나누어서 하나의 배열(Array)로 만들어 반납하는 함수
         * this.gfn_replace        : 입력된 문자열의 일부분을 다른 문자열로 치환하는 함수
         * this.gfn_getLengB       : 입력받은 전체 길이를 계산 결과를 Number Type으로 반환
         * this.gfn_length         : 입력값 형태에 따라서 길이 또는 범위를 구하는 함수
         * this.gfn_lengthByte     : 문자 전체 길이를 계산
         * this.gfn_lengthByteUtf8 : 입력받은 string 의 utf8단위의 byte를 리턴한다.
         * this.gfn_left           : 문자열의 왼쪽부분을 지정한 길이만큼 Return
         * this.gfn_right          : 문자열의 오른쪽부분을 지정한 길이만큼 Return
         * this.gfn_midString      : 시작글자와 끝글자에 해당하는 글자의 사이에 있는 가운데 글자를 대소문자를 구별하여 찾는다.
         * this.gfn_trim           : 대소문자 구별하여 왼쪽, 오른쪽 문자열 삭제
         * this.gfn_lTrim          : 대소문자 구별하여 왼쪽에서 문자열 삭제
         * this.gfn_lTrimCase      : 대소문자 구별없이 왼쪽에서 문자열 삭제
         * this.gfn_rTrim          : 대소문자 구별하여 오른쪽에서 문자열 삭제
         * this.gfn_rTrimCase      : 대소문자 구별없이 오른쪽에서 문자열 삭제
         * this.gfn_lPad           : 자리수 만큼 왼쪽에 문자열 추가
         * this.gfn_rPad           : 자리수 만큼 오른쪽에 문자열 추가
         * this.gfn_pos            : 문자열의 위치를 대소문자 구별하여 찾는다
         * this.gfn_toString       : 입력값을 String으로 변경
         * this.gfn_toCamelCase    : 문자열을 CamelCase형식으로 변환 한다.
         * this.gfn_strToMap       : String로 된 파라메타를 Array(map)로 전환
         * this.gfn_subStr         : 지정한 위치에서 시작하고 지정한 길이를 갖는 부분 문자열을 반환하는 함수
         **************************************************************************/

        this.executeIncludeScript("scripts::commonUtil.xjs"); /*include "scripts::commonUtil.xjs"*/

        /**
         * @class 특정 문자열을 기준으로 전체 문자열을 나누어서 하나의 배열(Array)로 만들어 반납하는 함수
         * @param strString - 원본 문자열
         * @param strChar - 나눌 기준이 되는 문자
         * @return Array 1 차원 배열
         */
        this.gfn_split = function (strString, strChar)
        {
        	var rtnArr = new Array();
        	var arrArgument = this.gfn_split.arguments;

        	if (arrArgument.length < 1)
        	{
        	}
        	else if (arrArgument.length < 2)
        	{
        		if (!this.gfn_isNull(arrArgument[0]))
        		{
        			rtnArr[0] = arrArgument[0];
        		}
        	}
        	else if (arrArgument.length == 2)
        	{
        		if (!this.gfn_isNull(arrArgument[0]))
        		{
        			rtnArr = arrArgument[0].toString().split(arrArgument[1]);
        		}
        	}
        	else
        	{
        		if (!this.gfnIsNull(arrArgument[0]))
        		{
        			rtnArr = arrArgument[0].toString().split(arrArgument[1]);
        		}
        	}

        	return rtnArr;
        };

        /**
         * @class 입력된 문자열의 일부분을 다른 문자열로 치환하는 함수
         * @param Val - 원본 문자열
         * @param strOld - 원본 문자열에서 찾을 문자열
         * @param strNew - 새로 바꿀 문자열
         * @return String 문자열
         */
        this.gfn_replace = function (Val, strOld, strNew)
        {
        	var varRtnValue = "";
        	var arrArgument = this.gfn_replace.arguments;

        	if (this.gfn_isNull(arrArgument[0]) || this.gfn_isNull(arrArgument[1]))
        	{
        		return varRtnValue;
        	}

        	if (this.gfn_isNull(arrArgument[2]))
        	{
        		arrArgument[2] = "";
        	}

        	varRtnValue = arrArgument[0].toString().replace(arrArgument[1], arrArgument[2]);
        	return varRtnValue;
        };

        /**
         * @class 입력값 형태에 따라서 길이 또는 범위를 구하는 함수
         * @param Val - 문자열
         * @return Integer Type에 따라 구해진 길이
         */
        this.gfn_length = function (Val)
        {
        	if (this.gfn_isNull(Val))
        	{
        		return 0;
        	}

        	if (typeof (Val) == "object")
        	{
        		var rtnVal = 0;

        		// Container
        		if (Val.components)
        		{
        			rtnVal = Val.components.length;
        		}
        		// 배열일 경우
        		else if (Val.constructor == Array)
        		{
        			rtnVal = Val.length;
        		}
        		// 캘린더 등
        		else
        		{
        			rtnVal = String(Val).length;
        		}

        		return rtnVal;
        	}
        	else
        	{
        		return Val.toString().length;
        		// string, number인 경우
        	}
        };

        /**
         * @class 입력받은 전체 길이를 계산 결과를 Number Type으로 반환
         *        문자, 숫자, 특수문자 : 1 로 Count
         * 		  그 외 한글/한자 : 2 로 count
         * @param sValue - 대상문자열
         * @return v_cnt - number
         */
        this.gfn_getLengB = function (sValue)
        {
        	var v_ChkStr = sValue.toString();
        	var v_cnt = 0;

        	for (var i = 0; i < v_ChkStr.length; i++)
        	{
        		if (v_ChkStr.charCodeAt(i) > 127)
        		{
        			v_cnt += 2;
        		}
        		else
        		{
        			v_cnt += 1;
        		}
        	}
        	return v_cnt;
        };


        /**
         * @class 문자 전체 길이를 계산
         - 문자, 숫자, 특수문자 : 1 로 Count
         - 그외 한글/한자 : 2 로 count 되어 합산
         * @param sVal - 문자열
         * @return Integer Type에 따라 구해진 길이
         */
        this.gfn_lengthByte = function (sVal)
        {
        	var lengthByte = 0;

        	if (this.gfn_isNull(sVal))
        	{
        		return 0;
        	}

        	sVal = sVal.toString();

        	for (var i = 0; i < sVal.length; i++)
        	{
        		if (sVal.charCodeAt(i) > 127)
        		{
        			lengthByte += 2;
        		}
        		else
        		{
        			lengthByte += 1;
        		}
        	}

        	return lengthByte;
        };


        /**
         * @class 입력받은 string 의 utf8단위의 byte를 리턴한다.
         - 문자, 숫자, 특수문자 : 1 로 Count
         - 그외 한글/한자 : 2 ~ 4 로 count 되어 합산
         * @param sVal - 문자열
         * @return Integer Type에 따라 구해진 길이
         */
        this.gfn_lengthByteUtf8 = function (sValue)
        {
        	if (this.gfn_isNull(sValue))
        	{
        		return 0;
        	}

        	var v_ChkStr = sValue.toString();
        	var v_cnt = 0;
        	var charCode = "";

        	for (var i = 0; i < v_ChkStr.length; i++)
        	{
        		charCode = v_ChkStr.charCodeAt(i);

        		if (charCode <= 0x00007F)
        		{
        			v_cnt += 1;
        		}
        		else if (charCode <= 0x0007FF)
        		{
        			v_cnt += 2;
        		}
        		else if (charCode <= 0x00FFFF)
        		{
        			v_cnt += 3;
        		}
        		else
        		{
        			v_cnt += 4;
        		}
        	}
        	return v_cnt;
        };

        /**
         * @class 문자열의 왼쪽부분을 지정한 길이만큼 Return
         * @param Val - 왼쪽 부분을 얻어올 원본 문자열
         * @param nSize - 얻어올 크기. [Default Value = 0]
         * @return String 문자열
         */
        this.gfn_left = function (Val, nSize)
        {
        	if (this.gfn_isNull(Val))
        	{
        		return "";
        	}
        	return this.gfn_toString(Val).substr(0, nSize);
        };

        /**
         * @class 문자열의 오른쪽부분을 지정한 길이만큼 Return
         * @param Val - 오른 부분을 얻어올 원본 문자열
         * @param nSize - 얻어올 크기. [Default Value = 0]
         * @return String 문자열
         */
        this.gfn_right = function (Val, nSize)
        {
        	if (this.gfn_isNull(Val))
        	{
        		return "";
        	}
        	var nStart = this.gfn_toString(Val).length;
        	var nEnd = Number(nStart) - Number(nSize);
        	var rtnVal = Val.substring(nStart, nEnd);

        	return rtnVal;
        };

        /**
         * @class 시작글자와 끝글자에 해당하는 글자의 사이에 있는 가운데 글자를 대소문자를 구별하여 찾는다.
         ( 예 : aaBBbbccdd에서 bb, dd사이의 글자 cc를 찾는다 )
         * @param sOrg   - 원래 문자열
         * @param sStart - 찾고자 하는 시작 문자열(옵션 : Default = "")
         * @param sEnd   - 찾고자 하는 끝 문자열 (옵션 : Default = "")
         * @param nStart - 검색 시작위치 (옵션 : Default=0)
         * @return String 가운데 글자
         */
        this.gfn_midString = function (sOrg, sStart, sEnd, nStart)
        {
        	var pos_start,pos_end,ret_str;

        	if (this.gfn_isNull(sOrg))
        	{
        		return "";
        	}
        	if (this.gfn_isNull(sStart))
        	{
        		sStart = "";
        	}
        	if (this.gfn_isNull(sEnd))
        	{
        		sEnd = "";
        	}
        	if (this.gfn_isNull(nStart))
        	{
        		nStart = 0;
        	}

        	if (sStart == "")
        	{
        		pos_start = nStart;
        	}
        	else
        	{
        		pos_start = this.gfn_pos(sOrg, sStart, nStart);
        		if (pos_start < 0)
        		{
        			return "";
        		}
        	}
        	if (sEnd == "")
        	{
        		pos_end = sOrg.length;
        	}
        	else
        	{
        		pos_end = this.gfn_pos(sOrg, sEnd, pos_start + sStart.length, nStart);
        		if (pos_end < 0)
        		{
        			return "";
        		}
        	}

        	return sOrg.substring(pos_start + sStart.length, pos_end);
        };

        /**
         * @class 대소문자 구별하여 왼쪽, 오른쪽 문자열 삭제
         * @param sOrg - 원래 문자열
         * @param sTrim - Trim할 문자열(옵션 : Default=" ")
         * @return String Trim된 문자열
         */
        this.gfn_trim = function (sOrg, sTrim)
        {
        	var rtnVal = "";
        	if (this.gfn_isNull(sTrim))
        	{
        		sTrim = " ";
        	}
        	rtnVal = this.gfn_rTrim(sOrg, sTrim);
        	rtnVal = this.gfn_lTrim(rtnVal, sTrim);

        	return rtnVal;
        };

        /**
         * @class 대소문자 구별하여 왼쪽에서 문자열 삭제
         * @param sOrg - 원래 문자열
         * @param sTrim - Trim할 문자열(옵션 : Default=" ")
         * @return String Trim된 문자열
         */
        this.gfn_lTrim = function (sOrg, sTrim)
        {
        	var chk,pos;

        	sOrg = this.gfn_toString(sOrg);

        	if (this.gfn_isNull(sOrg))
        	{
        		return "";
        	}
        	if (this.gfn_isNull(sTrim))
        	{
        		sTrim = " ";
        	}

        	for (pos = 0; pos < sOrg.length; pos += sTrim.length)
        	{
        		if (sOrg.substr(pos, sTrim.length) != sTrim)
        		{
        			break;
        		}
        	}

        	return sOrg.substr(pos);
        };

        /**
         * @class 대소문자 구별없이 왼쪽에서 문자열 삭제
         * @param sOrg - 원래 문자열
         * @param sTrim - Trim할 문자열(옵션 : Default=" ")
         * @return String Trim된 문자열
         */
        this.gfn_lTrimCase = function (sOrg, sTrim)
        {
        	var pos;

        	if (this.gfn_isNull(sOrg))
        	{
        		return "";
        	}
        	if (this.gfn_isNull(sTrim))
        	{
        		sTrim = " ";
        	}

        	for (pos = 0; pos < sOrg.length; pos += sTrim.length)
        	{
        		if (sOrg.toLowerCase().substr(pos, sTrim.length) != sTrim.toLowerCase())
        		{
        			break;
        		}
        	}

        	return sOrg.substr(pos);
        };


        /**
         * @class 대소문자 구별하여 오른쪽에서 문자열 삭제
         * @param sOrg - 원래 문자열
         * @param sTrim - Trim할 문자열(옵션 : Default=" ")
         * @return String Trim된 문자열
         */
        this.gfn_rTrim = function (sOrg, sTrim)
        {
        	var pos,nStart;

        	sOrg = this.gfn_toString(sOrg);

        	if (this.gfn_isNull(sOrg))
        	{
        		return "";
        	}
        	if (this.gfn_isNull(sTrim))
        	{
        		sTrim = " ";
        	}

        	for (pos = sOrg.length - sTrim.length; pos >= 0; pos -= sTrim.length)
        	{
        		if (sOrg.substr(pos, sTrim.length) != sTrim)
        		{
        			break;
        		}
        	}

        	return sOrg.substr(0, pos + sTrim.length);
        };

        /**
         * @class 대소문자 구별없이 오른쪽에서 문자열 삭제
         * @param sOrg - 원래 문자열
         * @param sTrim - Trim할 문자열(옵션 : Default=" ")
         * @return String Trim된 문자열
         */
        this.gfn_rTrimCase = function (sOrg, sTrim)
        {
        	var pos,nStart;

        	if (this.gfn_isNull(sOrg))
        	{
        		return "";
        	}
        	if (this.gfn_isNull(sTrim))
        	{
        		sTrim = " ";
        	}

        	for (pos = sOrg.length - sTrim.length; pos >= 0; pos -= sTrim.length)
        	{
        		if (sOrg.toLowerCase().substr(pos, sTrim.length) != sTrim.toLowerCase())
        		{
        			break;
        		}
        	}

        	return sOrg.substr(0, pos + sTrim.length);
        };

        /**
         * @class 자리수 만큼 왼쪽에 문자열 추가
         * @param sOrg - 원래 문자열
         * @param sPad - Pad할 문자열
         * @param nCnt - 자리수
         * @return String Pad된 문자열
         */
        this.gfn_lPad = function (sOrg, sPad, nCnt)
        {
        	var i,sRet = "";
        	var nLength;

        	if (this.gfn_isNull(sOrg))
        	{
        		return "";
        	}
        	if (this.gfn_isNull(sPad))
        	{
        		sPad = " ";
        	}
        	if (this.gfn_isNull(nCnt))
        	{
        		nCnt = 1;
        	}

        	for (i = 0; i < nCnt; i++)
        	{
        		sRet += sPad;
        	}
        	sRet += sOrg;

        	nLength = this.gfn_length(sOrg) > nCnt ? this.gfn_length(sOrg) : nCnt;

        	return this.gfn_right(sRet, nLength);
        };

        /**
         * @class 자리수 만큼 오른쪽에 문자열 추가
         * @param sOrg - 원래 문자열
         * @param sPad - Pad할 문자열
         * @param nCnt - 자리수
         * @return String Pad된 문자열
         */
        this.gfn_rPad = function (sOrg, sPad, nCnt)
        {
        	var i,sRet = "";
        	var nLength;

        	if (this.gfn_isNull(sOrg))
        	{
        		return "";
        	}
        	if (this.gfn_isNull(sPad))
        	{
        		sPad = " ";
        	}
        	if (this.gfn_isNull(nCnt))
        	{
        		nCnt = 1;
        	}

        	sRet += sOrg;
        	for (i = 0; i < nCnt; i++)
        	{
        		sRet += sPad;
        	}

        	nLength = this.gfn_length(sOrg) > nCnt ? this.gfn_length(sOrg) : nCnt;

        	return this.gfn_left(sRet, nLength);
        };

        /**
         * @class 문자열의 위치를 대소문자 구별하여 찾는다
         * @param sOrg   - 원래 문자열
         * @param sFind  - 찾고자 하는 문자열
         * @param nStart - 검색 시작위치 (옵션 : Default=0)
         * @return Integer 찾고자 하는 문자열의 시작위치
         */
        this.gfn_pos = function (sOrg, sFind, nStart)
        {
        	if (this.gfn_isNull(sOrg) || this.gfn_isNull(sFind))
        	{
        		return -1;
        	}
        	if (this.gfn_isNull(nStart))
        	{
        		nStart = 0;
        	}

        	return sOrg.indexOf(sFind, nStart);
        };

        /**
         * @class 입력값을 String으로 변경
         * @param Val - 문자열
         * @return String 문자열
         */
        this.gfn_toString = function (Val)
        {
        	if (this.gfn_isNull(Val))
        	{
        		return new String();
        	}
        	return new String(Val);
        };

        /**
         * @class 문자열을 CamelCase형식으로 변환 한다.
         *        ex) gfn_toCamelCase(rtnVal)
         *
         * @param strVal 변환할 문자열
         * @return strVal CamcelCase로 변환된 문자열
         */
        this.gfn_toCamelCase = function (strVal)
        {
        	// strVal = strVal.replace(/([^a-zA-Z0-9_\- ])|^[_0-9]+/g, "").trim().toLowerCase();
        	strVal = strVal.trim().toLowerCase();
        	strVal = strVal.replace(/([_]+)([a-zA-Z0-9])/g, function (a, b, c)
        	{
        		return c.toUpperCase();
        	});
        	return strVal;
        };

        /**
         * @class String로 된 파라메타를 Array(map)로 전환
         * @param strParam - 원래 문자열
         * @param strDelimiter1 - 첫번째로 잘라낼 구분 문자열(default "^")
         * @param strDelimiter2 - 두번째로 잘라낼 구분 문자열(default "=")
         * @return Array Map {key:value,ke2:value2...}
         */
        this.gfn_strToMap = function (strParam, strDelimiter1, strDelimiter2)
        {
        	if (this.gfn_isNull(strDelimiter1))
        	{
        		strDelimiter1 = "^";
        	}
        	if (this.gfn_isNull(strDelimiter2))
        	{
        		strDelimiter2 = "=";
        	}

        	// strParam = this.gfn_toString(strParam);
        	var strArr = "var arrParam = {";
        	var splitArr1 = strParam.split(strDelimiter1);
        	var splitArr2;
        	for (var i = 0; i < splitArr1.length; i++)
        	{
        		if (i > 0)
        		{
        			strArr += ",";
        		}

        		splitArr2 = splitArr1[i].split(strDelimiter2);
        		for (var j = 0; j < splitArr2.length; j++)
        		{
        			if (j == 0)
        			{
        				strArr += splitArr2[j];
        			}
        			else
        			{
        				if (!this.gfn_isNull(splitArr2[j]))
        				{
        					if (splitArr2[j].indexOf("\\") > -1)
        					{
        						splitArr2[j] = splitArr2[j].replace('\\', '\\\\');
        					}
        					if (splitArr2[j].indexOf("'") > -1)
        					{
        						splitArr2[j] = splitArr2[j].replace("'", "\\'");
        					}
        				}
        				strArr += ":'" + splitArr2[j] + "'";
        			}
        		}
        	}
        	strArr += "};";
        	eval(strArr);
        	return arrParam;
        };

        /**
         * @class 지정한 위치에서 시작하고 지정한 길이를 갖는 부분 문자열을 반환하는 함수
         * @param strString - 가운데 부문을 얻어올 원본 문자열
         * @param nStart    - 얻어올 첫 글자의 Index
         * @param nLength   - Integer 얻어올 글자수 [Default length(해당 개채의 길이)]
         * @return String 문자열
         */
        this.gfn_subStr = function (sVal, nStart, nLength)
        {
        	var retVal = "";
        	if (!this.gfn_isNull(sVal))
        	{
        		if (this.gfn_isNull(nLength))
        		{
        			retVal = String(sVal).substr(nStart);
        		}
        		else
        		{
        			retVal = String(sVal).substr(nStart, nLength);
        		}
        	}

        	return retVal;
        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
