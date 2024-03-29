//XJS=commonDataset.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {

        /********************************************************************************
         공통 유틸
         @Path          scripts::commonDataset.xjs
         @Description   공통 데이터셋 관련 함수
         @Author        최용우
         @Create        2019. 11. 20.

         * =========================================================================
         * 수정일자     수정자    내    용
         * =========================================================================
         * 2019.11.20    최용우    최초작성

         ********************************************************************************/

        /***************************************************************************
         * this.gfn_isDataChange        : 해당 화면의 변경사항 체크
         * this.gfn_dsIsUpdated			: dataSet의 Row 중에서 변경된 내용이 있는지 여부
         * this.gfn_updateToDataset		: 컨트롤이 Dataset에 bind되어 있을 경우 즉시 value를 Dataset에 적용시킨다.
         * this.gfn_GetColIndex			: 컬럼의 Dataset Index를 구한다.
         * this.gfn_GetLastRow			: Dataset 의 마지막 Row를 구한다.
         * this.gfn_GetNextRow			: Dataset에서 현재 Row의 다음 Row Index를 구한다.
         * this.gfn_GetPrevRow			: Dataset에서 현재 Row의 이전 Row를 구한다.
         **************************************************************************/

        /**
         * @class 해당 화면의 변경사항 체크
         * @return boolean
         */
        this.gfn_isDataChange = function (fv_dscheck)
        {
        	var bChange = false;

        	var arrDataset = gfn_split(fv_dscheck, ";");
        	for (var i = 0; i < arrDataset.length; i++)
        	{
        		var rtn = gfn_dsIsUpdated(eval(arrDataset[i]));
        		// trace("arrDataset[i] : " + arrDataset[i] + " / rtn : " + rtn);
        		if (rtn)
        		{
        			bChange = true;
        			break;
        		}
        	}
        	return bChange;
        };


        /**
         * @class dataSet의 Row 중에서 변경된 내용이 있는지 여부
         * @param objDs     - 확인 대상 Dataset
         * @return boolean
         */
        this.gfn_dsIsUpdated = function (objDs)
        {
        	gfn_updateToDataset();

        	var bRtn = false;
        	var sFilterStr = (objDs.filterstr).toString();

        	// Filter되어있을 경우 UnFilter해서
        	// 필터되어있던 Row에 대해서도 Update가 발생했는지 체크한다
        	if (sFilterStr.length > 0)
        	{
        		objDs.filter("");
        	}

        	// 삭제건수 확인
        	if (objDs.updatecontrol)
        	{
        		if (objDs.getDeletedRowCount() > 0)
        		{
        			// 필터가 되어있었을 경우 다시 필터해준다.
        			if (sFilterStr.length > 0)
        			{
        				objDs.filter(sFilterStr);
        			}
        			return true;
        		}
        	}

        	var iRowType;

        	for (var i = 0; i < objDs.getRowCount(); i++)
        	{
        		iRowType = objDs.getRowType(i);

        		// insert, update, delete 확인
        		if (iRowType == 2 || iRowType == 4 || iRowType == 8)
        		{
        			bRtn = true;
        			break;
        		}
        	}

        	// 필터가 되어있었을 경우 다시 필터해준다.
        	if (sFilterStr.length > 0)
        	{
        		objDs.filter(sFilterStr);
        	}

        	return bRtn;
        };

        /**
         * @class 컨트롤이 Dataset에 bind되어 있을 경우 즉시 value를 Dataset에 적용시킨다.
         * @return 없음
         */
        this.gfn_updateToDataset = function ()
        {
        	var objComp = getFocus();

        	if (objComp != null)
        	{
        		try
        		{
        			objComp.parent.applyChange();
        		}
        		catch (e)
        		{
        		}
        	}
        };

        /**
         * @class 컬럼의 Dataset Index를 구한다.
         * @param objDs - 대상 Dataset
         * @param strColID - 대상 컬럼
         * @return Column Index (Integer)
         */
        this.gfn_GetColIndex = function (objDs, strColID)
        {
        	if (this.gfn_IsNull(objDs))
        	{
        		return;
        	}
        	if (this.gfn_IsNull(strColID))
        	{
        		return;
        	}
        	if (!(objDs instanceof Dataset))
        	{
        		return;
        	}

        	var rtnIndex;

        	for (var i = 0; i < objDs.getColCount(); i++)
        	{
        		if (objDs.getColID(i).toLowerCase() == strColID.toLowerCase())
        		{
        			rtnIndex = i;
        			break;
        		}
        	}

        	return rtnIndex;
        };

        /**
         * @class Dataset 의 마지막 Row를 구한다.
         * @param objDs - 대상 Dataset
         * @return Row Index
         */
        this.gfn_GetLastRow = function (objDs)
        {
        	var nCount = objDs.getRowCount();

        	if (nCount > 0)
        	{
        		return nCount - 1;
        	}
        	else
        	{
        		return -1;
        	}
        };

        /**
         * @class Dataset에서 현재 Row의 다음 Row Index를 구한다.
         * @param objDs - 대상 Dataset
         * @return 다음 Row Index
         */
        this.gfn_GetNextRow = function (objDs)
        {
        	var nRowCount = objDs.getRowCount();

        	if (nRowCount > 0)
        	{
        		if (objDs.rowposition == objDs.getRowCount() - 1)
        		{
        			return objDs.rowposition;
        		}
        		else
        		{
        			// Dataset이 마지막 레코드를 가리키고 있을 때는 NextRow는 CurRow와 같습니다
        			return objDs.rowposition + 1;
        		}
        	}
        	else
        	{
        		return -1;
        	}
        };

        /**
         * @class Dataset에서 현재 Row의 이전 Row를 구한다.
         * @param objDs - 대상 Dataset
         * @return 현재 Row의 이전 Row Index
         */
        this.gfn_GetPrevRow = function (objDs)
        {
        	var nRowCount = objDs.getRowCount();

        	if (nRowCount > 0)
        	{
        		if (objDs.rowposition == 0)
        		{
        			return objDs.rowposition;
        		}
        		else
        		{
        			// Dataset이 첫 레코드를 가리키고 있을 때는 PrevRow는 CurRow와 같습니다
        			return objDs.rowposition - 1;
        		}
        	}
        	else
        	{
        		return 0;
        	}
        };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
