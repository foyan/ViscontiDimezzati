var navigation = {
	
	home: {},
	uberuns: {},
	konzerte: {},
	rep: {},
	demo: {},
	
	selected: ko.observable(null),
		
};

$(function () {
	navigation.selected(navigation.home);
	ko.applyBindings(navigation, $("#outerContent").get(0));
});