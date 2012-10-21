var navigation = {
	
	home: {},
	uberuns: {},
	konzerte: {},
	rep: {},
	demo: {},
	
	selected: ko.observable(null),
	
	gigs: [
		{ wann: "15.02.2013", wo: "Luogo lorem Zurigo", link: "http://www.google.com" },
		{ wann: "18.03.2013", wo: "Luogo lorem Berna", link: "http://www.google.com" },
		{ wann: "12.04.2013", wo: "Luogo lorem Basilea", link: "http://www.google.com" },
		{ wann: "15.06.2013", wo: "Luogo lorem Lausanna", link: "http://www.google.com" },
		{ wann: "19.08.2013", wo: "Luogo lorem Ulan-baator", link: "http://www.google.com" },
		{ wann: "15.09.2013", wo: "Luogo lorem Moscow", link: "http://www.google.com" },
		{ wann: "18.09.2013", wo: "Luogo lorem New York", link: "http://www.google.com" },
		{ wann: "15.02.2013", wo: "Luogo lorem Schützenhaus Unterenstringen-West", link: "http://www.google.com" },
		{ wann: "12.10.2013", wo: "Luogo lorem Roma", link: "http://www.google.com" }
	]
		
};

$(function () {
	navigation.selected(navigation.home);
	ko.applyBindings(navigation, $("#outerContent").get(0));
});

ko.bindingHandlers.fadeVisible = {
	init: function(element, valueAccessor) {
		var value = valueAccessor();
		$(element).toggle(ko.utils.unwrapObservable(value));
	},
	update: function(element, valueAccessor) {
		var value = valueAccessor();
		ko.utils.unwrapObservable(value) ? $(element).fadeIn() : $(element).toggle(false);
	}
};