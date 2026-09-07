gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.managefilters', false, function () {
   this.ServerClass =  "wwpbaseobjects.managefilters" ;
   this.PackageName =  "GeneXus.Programs" ;
   this.ServerFullClass =  "wwpbaseobjects.managefilters.aspx" ;
   this.setObjectType("web");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.DSO =  "WorkWithPlusDS" ;
   this.SetStandaloneVars=function()
   {
      this.AV14UserKey=gx.fn.getControlValue("vUSERKEY") ;
      this.AV6GridStateCollection=gx.fn.getControlValue("vGRIDSTATECOLLECTION") ;
   };
   this.e11132_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e15132_client=function()
   {
      return this.executeServerEvent("VMOVEUP.CLICK", true, arguments[0], false, false);
   };
   this.e16132_client=function()
   {
      return this.executeServerEvent("VMOVEDOWN.CLICK", true, arguments[0], false, false);
   };
   this.e17132_client=function()
   {
      return this.executeServerEvent("VUDELETE.CLICK", true, arguments[0], false, false);
   };
   this.e18131_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,36,37,38,39];
   this.GXLastCtrlId =39;
   this.GridgridstatecollectionsContainer = new gx.grid.grid(this, 2,"WbpLvl2",15,"Gridgridstatecollections","Gridgridstatecollections","GridgridstatecollectionsContainer",this.CmpContext,this.IsMasterPage,"wwpbaseobjects.managefilters",[],false,1,false,true,0,true,false,false,"CollWWPBaseObjects\GridStateCollection.Item",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"AV6GridStateCollection",false,[1,1,1,1],false,0,true,false);
   var GridgridstatecollectionsContainer = this.GridgridstatecollectionsContainer;
   GridgridstatecollectionsContainer.addSingleLineEdit("Moveup",16,"vMOVEUP","","","MoveUp","char",30,"px",20,20,"start","e15132_client",[],"Moveup","MoveUp",true,0,false,false,"Attribute",0,"WWIconActionColumn");
   GridgridstatecollectionsContainer.addSingleLineEdit("Movedown",17,"vMOVEDOWN","","","MoveDown","char",30,"px",20,20,"start","e16132_client",[],"Movedown","MoveDown",true,0,false,false,"Attribute",0,"WWIconActionColumn");
   GridgridstatecollectionsContainer.addSingleLineEdit("GXV2",18,"GRIDSTATECOLLECTION__TITLE","","","Title","svchar",0,"px",100,80,"start",null,[],"GXV2","GXV2",true,0,false,false,"",0,"WWColumn");
   GridgridstatecollectionsContainer.addSingleLineEdit("GXV3",19,"GRIDSTATECOLLECTION__GRIDSTATEXML","URL","","GridStateXML","vchar",0,"px",2097152,80,"start",null,[],"GXV3","GXV3",true,0,false,false,"AttributeRealWidth",0,"WWColumn");
   GridgridstatecollectionsContainer.addSingleLineEdit("Udelete",20,"vUDELETE","","","UDelete","char",30,"px",20,20,"start","e17132_client",[],"Udelete","UDelete",true,0,false,false,"Attribute",0,"WWIconActionColumn");
   this.GridgridstatecollectionsContainer.emptyText = "";
   this.setGrid(GridgridstatecollectionsContainer);
   this.GRIDGRIDSTATECOLLECTIONS_EMPOWERERContainer = gx.uc.getNew(this, 40, 39, "WWP_GridEmpowerer", "GRIDGRIDSTATECOLLECTIONS_EMPOWERERContainer", "Gridgridstatecollections_empowerer", "GRIDGRIDSTATECOLLECTIONS_EMPOWERER");
   var GRIDGRIDSTATECOLLECTIONS_EMPOWERERContainer = this.GRIDGRIDSTATECOLLECTIONS_EMPOWERERContainer;
   GRIDGRIDSTATECOLLECTIONS_EMPOWERERContainer.setProp("Class", "Class", "", "char");
   GRIDGRIDSTATECOLLECTIONS_EMPOWERERContainer.setProp("Enabled", "Enabled", true, "boolean");
   GRIDGRIDSTATECOLLECTIONS_EMPOWERERContainer.setDynProp("GridInternalName", "Gridinternalname", "", "char");
   GRIDGRIDSTATECOLLECTIONS_EMPOWERERContainer.setProp("HasCategories", "Hascategories", false, "bool");
   GRIDGRIDSTATECOLLECTIONS_EMPOWERERContainer.setProp("InfiniteScrolling", "Infinitescrolling", "False", "str");
   GRIDGRIDSTATECOLLECTIONS_EMPOWERERContainer.setProp("HasTitleSettings", "Hastitlesettings", false, "bool");
   GRIDGRIDSTATECOLLECTIONS_EMPOWERERContainer.setProp("HasColumnsSelector", "Hascolumnsselector", false, "bool");
   GRIDGRIDSTATECOLLECTIONS_EMPOWERERContainer.setProp("HasRowGroups", "Hasrowgroups", false, "bool");
   GRIDGRIDSTATECOLLECTIONS_EMPOWERERContainer.setProp("FixedColumns", "Fixedcolumns", "", "str");
   GRIDGRIDSTATECOLLECTIONS_EMPOWERERContainer.setProp("PopoversInGrid", "Popoversingrid", "", "str");
   GRIDGRIDSTATECOLLECTIONS_EMPOWERERContainer.setProp("Visible", "Visible", true, "bool");
   GRIDGRIDSTATECOLLECTIONS_EMPOWERERContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(GRIDGRIDSTATECOLLECTIONS_EMPOWERERContainer);
   this.DVELOP_BOOTSTRAP_PANEL1Container = gx.uc.getNew(this, 34, 16, "", "DVELOP_BOOTSTRAP_PANEL1Container", "this", "DVELOP_BOOTSTRAP_PANEL1");
   var DVELOP_BOOTSTRAP_PANEL1Container = this.DVELOP_BOOTSTRAP_PANEL1Container;
   DVELOP_BOOTSTRAP_PANEL1Container.setC2ShowFunction(function(UC) { UC.(); });
   this.setUserControl(DVELOP_BOOTSTRAP_PANEL1Container);
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEMAIN",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"TABLECONTENT",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[16]={ id:16 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:15,gxgrid:this.GridgridstatecollectionsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMOVEUP",fmt:1,gxz:"ZV12MoveUp",gxold:"OV12MoveUp",gxvar:"AV12MoveUp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV12MoveUp=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV12MoveUp=Value},v2c:function(row){gx.fn.setGridControlValue("vMOVEUP",row || gx.fn.currentGridRowImpl(15),gx.O.AV12MoveUp,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV12MoveUp=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vMOVEUP",row || gx.fn.currentGridRowImpl(15))},nac:gx.falseFn,evt:"e15132_client"};
   GXValidFnc[17]={ id:17 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:15,gxgrid:this.GridgridstatecollectionsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMOVEDOWN",fmt:1,gxz:"ZV11MoveDown",gxold:"OV11MoveDown",gxvar:"AV11MoveDown",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV11MoveDown=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV11MoveDown=Value},v2c:function(row){gx.fn.setGridControlValue("vMOVEDOWN",row || gx.fn.currentGridRowImpl(15),gx.O.AV11MoveDown,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV11MoveDown=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vMOVEDOWN",row || gx.fn.currentGridRowImpl(15))},nac:gx.falseFn,evt:"e16132_client"};
   GXValidFnc[18]={ id:18 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:0,isacc:0,grid:15,gxgrid:this.GridgridstatecollectionsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"GRIDSTATECOLLECTION__TITLE",fmt:0,gxz:"ZV18GXV2",gxold:"OV18GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.GXV2=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV18GXV2=Value},v2c:function(row){gx.fn.setGridControlValue("GRIDSTATECOLLECTION__TITLE",row || gx.fn.currentGridRowImpl(15),gx.O.GXV2,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.GXV2=this.val(row)},val:function(row){return gx.fn.getGridControlValue("GRIDSTATECOLLECTION__TITLE",row || gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};
   GXValidFnc[19]={ id:19 ,lvl:2,type:"vchar",len:2097152,dec:0,sign:false,ro:0,isacc:0,grid:15,gxgrid:this.GridgridstatecollectionsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"GRIDSTATECOLLECTION__GRIDSTATEXML",fmt:0,gxz:"ZV19GXV3",gxold:"OV19GXV3",gxvar:"GXV3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.GXV3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV19GXV3=Value},v2c:function(row){gx.fn.setGridControlValue("GRIDSTATECOLLECTION__GRIDSTATEXML",row || gx.fn.currentGridRowImpl(15),gx.O.GXV3,0)},c2v:function(row){if(this.val(row)!==undefined)gx.O.GXV3=this.val(row)},val:function(row){return gx.fn.getGridControlValue("GRIDSTATECOLLECTION__GRIDSTATEXML",row || gx.fn.currentGridRowImpl(15))},nac:gx.falseFn};
   GXValidFnc[20]={ id:20 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:15,gxgrid:this.GridgridstatecollectionsContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUDELETE",fmt:1,gxz:"ZV13UDelete",gxold:"OV13UDelete",gxvar:"AV13UDelete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV13UDelete=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV13UDelete=Value},v2c:function(row){gx.fn.setGridControlValue("vUDELETE",row || gx.fn.currentGridRowImpl(15),gx.O.AV13UDelete,1)},c2v:function(row){if(this.val(row)!==undefined)gx.O.AV13UDelete=this.val(row)},val:function(row){return gx.fn.getGridControlValue("vUDELETE",row || gx.fn.currentGridRowImpl(15))},nac:gx.falseFn,evt:"e17132_client"};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"BTNENTER",grid:0,evt:"e11132_client",std:"ENTER"};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"BTNCANCEL",grid:0,evt:"e18131_client"};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id: 30, fld:"HTML_USERTABLE_UTPANELDUMMY",grid:0};
   GXValidFnc[31]={ id: 31, fld:"UTPANELDUMMY",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[39]={ id:39 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vCOLLECTIONISEMPTY",fmt:0,gxz:"ZV5CollectionIsEmpty",gxold:"OV5CollectionIsEmpty",gxvar:"AV5CollectionIsEmpty",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.AV5CollectionIsEmpty=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV5CollectionIsEmpty=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("vCOLLECTIONISEMPTY",gx.O.AV5CollectionIsEmpty,true)},c2v:function(){if(this.val()!==undefined)gx.O.AV5CollectionIsEmpty=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vCOLLECTIONISEMPTY")},nac:gx.falseFn,values:['true','false']};
   this.ZV12MoveUp = "" ;
   this.OV12MoveUp = "" ;
   this.ZV11MoveDown = "" ;
   this.OV11MoveDown = "" ;
   this.ZV18GXV2 = "" ;
   this.OV18GXV2 = "" ;
   this.ZV19GXV3 = "" ;
   this.OV19GXV3 = "" ;
   this.ZV13UDelete = "" ;
   this.OV13UDelete = "" ;
   this.AV5CollectionIsEmpty = false ;
   this.ZV5CollectionIsEmpty = false ;
   this.OV5CollectionIsEmpty = false ;
   this.AV5CollectionIsEmpty = false ;
   this.AV14UserKey = "" ;
   this.AV12MoveUp = "" ;
   this.AV11MoveDown = "" ;
   this.GXV2 = "" ;
   this.GXV3 = "" ;
   this.AV13UDelete = "" ;
   this.AV6GridStateCollection = [ ] ;
   this.Events = {"e11132_client": ["ENTER", true] ,"e15132_client": ["VMOVEUP.CLICK", true] ,"e16132_client": ["VMOVEDOWN.CLICK", true] ,"e17132_client": ["VUDELETE.CLICK", true] ,"e18131_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{"av":"GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage"},{"av":"GRIDGRIDSTATECOLLECTIONS_nEOF"},{"av":"AV6GridStateCollection","fld":"vGRIDSTATECOLLECTION","grid":15},{"av":"nGXsfl_15_idx","ctrl":"GRID","prop":"GridCurrRow","grid":15},{"av":"nRC_GXsfl_15","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"GridRC","grid":15},{"av":"","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"Rows"},{"av":"AV5CollectionIsEmpty","fld":"vCOLLECTIONISEMPTY"},{"av":"AV14UserKey","fld":"vUSERKEY","hsh":true}],[{"ctrl":"GRIDSTATECOLLECTION__TITLE","prop":"Title"},{"ctrl":"FORM","prop":"Caption"},{"ctrl":"GRIDSTATECOLLECTION__GRIDSTATEXML","prop":"Visible"},{"ctrl":"GRIDSTATECOLLECTION__TITLE","prop":"Class"}]];
   this.EvtParms["GRIDGRIDSTATECOLLECTIONS.LOAD"] = [[],[{"av":"AV12MoveUp","fld":"vMOVEUP"},{"av":"AV11MoveDown","fld":"vMOVEDOWN"},{"av":"AV13UDelete","fld":"vUDELETE"}]];
   this.EvtParms["ENTER"] = [[{"av":"AV6GridStateCollection","fld":"vGRIDSTATECOLLECTION","grid":15},{"av":"nGXsfl_15_idx","ctrl":"GRID","prop":"GridCurrRow","grid":15},{"av":"GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage"},{"av":"nRC_GXsfl_15","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"GridRC","grid":15},{"av":"AV5CollectionIsEmpty","fld":"vCOLLECTIONISEMPTY"},{"av":"AV14UserKey","fld":"vUSERKEY","hsh":true},{"av":"GRIDGRIDSTATECOLLECTIONS_nEOF"},{"av":"","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"Rows"}],[{"av":"AV6GridStateCollection","fld":"vGRIDSTATECOLLECTION","grid":15},{"av":"nGXsfl_15_idx","ctrl":"GRID","prop":"GridCurrRow","grid":15},{"av":"GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage"},{"av":"nRC_GXsfl_15","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"GridRC","grid":15}]];
   this.EvtParms["VMOVEUP.CLICK"] = [[{"av":"AV6GridStateCollection","fld":"vGRIDSTATECOLLECTION","grid":15},{"av":"nGXsfl_15_idx","ctrl":"GRID","prop":"GridCurrRow","grid":15},{"av":"GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage"},{"av":"nRC_GXsfl_15","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"GridRC","grid":15},{"av":"GRIDGRIDSTATECOLLECTIONS_nEOF"},{"av":"","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"Rows"},{"av":"AV5CollectionIsEmpty","fld":"vCOLLECTIONISEMPTY"},{"av":"AV14UserKey","fld":"vUSERKEY","hsh":true}],[{"av":"AV6GridStateCollection","fld":"vGRIDSTATECOLLECTION","grid":15},{"av":"nGXsfl_15_idx","ctrl":"GRID","prop":"GridCurrRow","grid":15},{"av":"GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage"},{"av":"nRC_GXsfl_15","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"GridRC","grid":15}]];
   this.EvtParms["VMOVEDOWN.CLICK"] = [[{"av":"AV6GridStateCollection","fld":"vGRIDSTATECOLLECTION","grid":15},{"av":"nGXsfl_15_idx","ctrl":"GRID","prop":"GridCurrRow","grid":15},{"av":"GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage"},{"av":"nRC_GXsfl_15","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"GridRC","grid":15},{"av":"GRIDGRIDSTATECOLLECTIONS_nEOF"},{"av":"","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"Rows"},{"av":"AV5CollectionIsEmpty","fld":"vCOLLECTIONISEMPTY"},{"av":"AV14UserKey","fld":"vUSERKEY","hsh":true}],[{"av":"AV6GridStateCollection","fld":"vGRIDSTATECOLLECTION","grid":15},{"av":"nGXsfl_15_idx","ctrl":"GRID","prop":"GridCurrRow","grid":15},{"av":"GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage"},{"av":"nRC_GXsfl_15","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"GridRC","grid":15}]];
   this.EvtParms["VUDELETE.CLICK"] = [[{"av":"AV6GridStateCollection","fld":"vGRIDSTATECOLLECTION","grid":15},{"av":"nGXsfl_15_idx","ctrl":"GRID","prop":"GridCurrRow","grid":15},{"av":"GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage"},{"av":"nRC_GXsfl_15","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"GridRC","grid":15},{"av":"GRIDGRIDSTATECOLLECTIONS_nEOF"},{"av":"","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"Rows"},{"av":"AV5CollectionIsEmpty","fld":"vCOLLECTIONISEMPTY"},{"av":"AV14UserKey","fld":"vUSERKEY","hsh":true}],[{"av":"AV6GridStateCollection","fld":"vGRIDSTATECOLLECTION","grid":15},{"av":"nGXsfl_15_idx","ctrl":"GRID","prop":"GridCurrRow","grid":15},{"av":"GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage"},{"av":"nRC_GXsfl_15","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"GridRC","grid":15},{"av":"AV5CollectionIsEmpty","fld":"vCOLLECTIONISEMPTY"}]];
   this.EvtParms["GRIDGRIDSTATECOLLECTIONS_FIRSTPAGE"] = [[{"av":"GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage"},{"av":"GRIDGRIDSTATECOLLECTIONS_nEOF"},{"av":"AV6GridStateCollection","fld":"vGRIDSTATECOLLECTION","grid":15},{"av":"nGXsfl_15_idx","ctrl":"GRID","prop":"GridCurrRow","grid":15},{"av":"nRC_GXsfl_15","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"GridRC","grid":15},{"av":"","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"Rows"},{"av":"AV14UserKey","fld":"vUSERKEY","hsh":true},{"av":"AV5CollectionIsEmpty","fld":"vCOLLECTIONISEMPTY"}],[{"ctrl":"GRIDSTATECOLLECTION__TITLE","prop":"Title"},{"ctrl":"FORM","prop":"Caption"},{"ctrl":"GRIDSTATECOLLECTION__GRIDSTATEXML","prop":"Visible"},{"ctrl":"GRIDSTATECOLLECTION__TITLE","prop":"Class"}]];
   this.EvtParms["GRIDGRIDSTATECOLLECTIONS_PREVPAGE"] = [[{"av":"GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage"},{"av":"GRIDGRIDSTATECOLLECTIONS_nEOF"},{"av":"AV6GridStateCollection","fld":"vGRIDSTATECOLLECTION","grid":15},{"av":"nGXsfl_15_idx","ctrl":"GRID","prop":"GridCurrRow","grid":15},{"av":"nRC_GXsfl_15","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"GridRC","grid":15},{"av":"","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"Rows"},{"av":"AV14UserKey","fld":"vUSERKEY","hsh":true},{"av":"AV5CollectionIsEmpty","fld":"vCOLLECTIONISEMPTY"}],[{"ctrl":"GRIDSTATECOLLECTION__TITLE","prop":"Title"},{"ctrl":"FORM","prop":"Caption"},{"ctrl":"GRIDSTATECOLLECTION__GRIDSTATEXML","prop":"Visible"},{"ctrl":"GRIDSTATECOLLECTION__TITLE","prop":"Class"}]];
   this.EvtParms["GRIDGRIDSTATECOLLECTIONS_NEXTPAGE"] = [[{"av":"GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage"},{"av":"GRIDGRIDSTATECOLLECTIONS_nEOF"},{"av":"AV6GridStateCollection","fld":"vGRIDSTATECOLLECTION","grid":15},{"av":"nGXsfl_15_idx","ctrl":"GRID","prop":"GridCurrRow","grid":15},{"av":"nRC_GXsfl_15","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"GridRC","grid":15},{"av":"","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"Rows"},{"av":"AV14UserKey","fld":"vUSERKEY","hsh":true},{"av":"AV5CollectionIsEmpty","fld":"vCOLLECTIONISEMPTY"}],[{"ctrl":"GRIDSTATECOLLECTION__TITLE","prop":"Title"},{"ctrl":"FORM","prop":"Caption"},{"ctrl":"GRIDSTATECOLLECTION__GRIDSTATEXML","prop":"Visible"},{"ctrl":"GRIDSTATECOLLECTION__TITLE","prop":"Class"}]];
   this.EvtParms["GRIDGRIDSTATECOLLECTIONS_LASTPAGE"] = [[{"av":"GRIDGRIDSTATECOLLECTIONS_nFirstRecordOnPage"},{"av":"GRIDGRIDSTATECOLLECTIONS_nEOF"},{"av":"AV6GridStateCollection","fld":"vGRIDSTATECOLLECTION","grid":15},{"av":"nGXsfl_15_idx","ctrl":"GRID","prop":"GridCurrRow","grid":15},{"av":"nRC_GXsfl_15","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"GridRC","grid":15},{"av":"","ctrl":"GRIDGRIDSTATECOLLECTIONS","prop":"Rows"},{"av":"AV14UserKey","fld":"vUSERKEY","hsh":true},{"av":"AV5CollectionIsEmpty","fld":"vCOLLECTIONISEMPTY"}],[{"ctrl":"GRIDSTATECOLLECTION__TITLE","prop":"Title"},{"ctrl":"FORM","prop":"Caption"},{"ctrl":"GRIDSTATECOLLECTION__GRIDSTATEXML","prop":"Visible"},{"ctrl":"GRIDSTATECOLLECTION__TITLE","prop":"Class"}]];
   this.EnterCtrl = ["BTNENTER"];
   this.setVCMap("AV14UserKey", "vUSERKEY", 0, "svchar", 100, 0);
   this.setVCMap("AV6GridStateCollection", "vGRIDSTATECOLLECTION", 0, "CollWWPBaseObjects\GridStateCollection.Item", 0, 0);
   this.setVCMap("AV14UserKey", "vUSERKEY", 0, "svchar", 100, 0);
   this.setVCMap("AV14UserKey", "vUSERKEY", 0, "svchar", 100, 0);
   GridgridstatecollectionsContainer.addRefreshingParm({rfrProp:"Rows", gxGrid:"Gridgridstatecollections"});
   GridgridstatecollectionsContainer.addRefreshingVar({rfrVar:"AV14UserKey"});
   GridgridstatecollectionsContainer.addRefreshingParm({rfrVar:"AV14UserKey"});
   GridgridstatecollectionsContainer.addRefreshingParm(this.GXValidFnc[39]);
   this.addGridBCProperty("Gridstatecollection", ["Title"], this.GXValidFnc[18], "AV6GridStateCollection");
   this.addGridBCProperty("Gridstatecollection", ["GridStateXML"], this.GXValidFnc[19], "AV6GridStateCollection");
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(this.wwpbaseobjects.managefilters);});
