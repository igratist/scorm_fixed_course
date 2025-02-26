window['API'] = {
			initialized : false,
			submitted: false,
			finished: false,
			values : {'cmi.interactions._count' : -1, 'cmi.core.student_id' : 'user', 'cmi.core.student_name' : 'user'},
			LMSInitialize : function() {
				window['API']['initialized'] = true;
				window.console.log('LMSInitialize');
				return 'true';
			},
			LMSFinish : function() {
				window['API']['finished'] = true;
				window.console.log('LMSFinish');
				return 'true';
			},
			LMSCommit : function() {
				window['API']['submitted'] = true;
				window.console.log('LMSCommit');
				return 'true';
			},
			LMSGetValue: function(name) {
				window.console.log('LMSGetValue' + ' ' + name);
				return window['API']['values'][name];
			},
			LMSSetValue: function(name, value) {
				if (name.indexOf('id') != -1)
				{
					window['API']['values']['cmi.interactions._count'] += 1;
				}
				window['API']['values'][name] = value;
				window.console.log('LMSSetValue' + ' ' + name + ' ' + value);
				return 'true';
			},
		};
window['API']['values']['cmi.interactions._count'] = 0;
window['API']['values']['cmi.learner_id'] = 'test';
window['API']['values']['cmi.learner_name'] = 'test';