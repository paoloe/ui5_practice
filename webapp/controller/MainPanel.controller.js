sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function(
	Controller,
	MessageToast,
	JSONModel,
	Filter,
	FilterOperator
) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.MainPanel", {
        onShowData : function () {
        // read msg from i18n model
			//var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var oBundl2 = this.getView().getModel("oModel").getProperty("/oModel");
            var sRecipient = this.getView().byId("inputCase").getValue();
            //var sMsg = oBundle.getText(sRecipient);
			
			for(var i = 0; i < oBundl2.length; i++) {
				var obj = oBundl2[i];
				if(obj.id == sRecipient){
					console.log("success!");
				}
			}

            console.log(sMsg2);
			// Below isn't great it gives access to the whole i18n file
			// MessageToast.show(sMsg2, {
			// 	duration: 30000 // 30 second duration to follow rule book
			// });	
        }
	});
});