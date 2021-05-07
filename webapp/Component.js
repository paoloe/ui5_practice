sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.walkthrough.Component", {

		metadata : {
			manifest: "json"
		},

		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			var oModel = new JSONModel();
			oModel.loadData("mydata.json");
			oModel.attachRequestCompleted(function(oEventModel){
				console.log(oModel.getData());
				// console.log(JSON.stringify(oModel.getData()));
				//This is called after data is loading
			});
			this.setModel(oModel)
		}
	});

});