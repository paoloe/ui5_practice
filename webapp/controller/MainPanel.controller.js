sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment"
], function(
	Controller,
	MessageToast,
	JSONModel,
	Fragment,
	Message
) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.MainPanel", {
        onShowData : function () {
			// load json data
			var oBundl2 = this.getView().getModel("oModel").getProperty("/case/");
            // retrieve user input value
			var userInput = this.getView().byId("inputCase").getValue();
			var sOutput = "Unknown Input"; // default negative value


			// loop through json data if id == input display data
			oBundl2.forEach(function(item, index){
				if(item.id==userInput){
					sOutput = item.caseDesc;
				}
			})
			MessageToast.show(sOutput, {
				duration : 3000,
				at : "left",
				animationTimingFunction: 'ease-out',
				animationDuration: 1000

			});

        },
		onRetrieveData : function(btnId){
			var sPath; 		// for get property assignment value
			var sInput; 	// to assign input value of user
			var sOutput = "Input Unknown";	// default negative value
			var oBundle;	// json file

			switch(btnId){
				case "btnCase":
					sPath = "/case/"
					sInput = this.getView().byId("inputCase").getValue();
					break;
				case "btnSolution":
					sPath = "/solution/"
					sInput = this.getView().byId("inputSolution").getValue();
					break;
				case "btnHint":
					sPath = "/hint/"
					sInput = this.getView().byId("inputHint").getValue();
					break;
				deafult:
					alert("unknown!");
					break;
			}

			oBundle = this.getView().getModel("oModel").getProperty(sPath);

			// loop through json data if id == input display data
			oBundle.forEach(function(item, index){
				if(item.id === sInput){	// triple === checks data type and value; double == checks value only
					sOutput = item.desc;
					return;
				}
			}.bind(this)) // by adding this notation you can make references to the application model etc within forloop
			MessageToast.show(sOutput, {
				duration : 3000,
				at : "left",
				animationTimingFunction: 'ease-out',
				animationDuration: 1000
			});
		}
	});
});