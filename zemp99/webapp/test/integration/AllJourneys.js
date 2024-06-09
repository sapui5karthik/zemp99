/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/zemp99/zemp99/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/zemp99/zemp99/test/integration/pages/Worklist",
	"com/zemp99/zemp99/test/integration/pages/Object",
	"com/zemp99/zemp99/test/integration/pages/NotFound",
	"com/zemp99/zemp99/test/integration/pages/Browser",
	"com/zemp99/zemp99/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.zemp99.zemp99.view."
	});

	sap.ui.require([
		"com/zemp99/zemp99/test/integration/WorklistJourney",
		"com/zemp99/zemp99/test/integration/ObjectJourney",
		"com/zemp99/zemp99/test/integration/NavigationJourney",
		"com/zemp99/zemp99/test/integration/NotFoundJourney",
		"com/zemp99/zemp99/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});