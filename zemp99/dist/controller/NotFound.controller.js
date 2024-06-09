sap.ui.define([
		"com/zemp99/zemp99/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.zemp99.zemp99.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);