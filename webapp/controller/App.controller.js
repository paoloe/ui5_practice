sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {

		onShowHello : function () {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var oBundl2 = this.getView().getModel("oModel").getResourceBundle();
			// below retrieves the value in the input field
			var sRecipient = this.getView().byId("inputCase").getValue();
			var sMsg = oBundl2.getData();
			var sErrMsf = oBundle.getText("notValid");
			
			// Below isn't great it gives access to the whole i18n file
			MessageToast.show(sMsg, {
				duration: 30000 // 30 second duration to follow rule book
			});	

			// if(sRecipient == 1){
			// 	MessageToast.show(sMsg, {
			// 		duration: 30000 // 30 second duration to follow rule book
			// 	});	
			// }
			// else{
			// 	MessageToast.show(sErrMsf)
			// }
		}
	});

});