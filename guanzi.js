$('.contents').on('tap','.btn-members-refresh',function(){
	$('.btn-open-stage-2').trigger('tap');


	setTimeout(function() {$('.btn-forward').trigger('tap')},1000);


	setTimeout(function() {$('[data-stage-name="風凪ぐ地の掃滅任務"]').trigger('tap')},2000);


	setTimeout(function() {$('[data-quest-id="601011"]') && $('.btn-set-quest').trigger('tap')},3000);


	setTimeout(function() {$('[data-quest-id="601011"]').trigger('tap')},4000);



	setInterval(function() {$('.se-quest-start') && $('.se-quest-start').trigger('tap')},1000);

});

	$('.btn-open-stage-2').trigger('tap');


	setTimeout(function() {$('.btn-forward').trigger('tap')},1000);


	setTimeout(function() {$('[data-stage-name="風凪ぐ地の掃滅任務"]').trigger('tap')},2000);


	setTimeout(function() {$('[data-quest-id="601011"]') && $('.btn-set-quest').trigger('tap')},3000);


	setTimeout(function() {$('[data-quest-id="601011"]').trigger('tap')},4000);



	setInterval(function() {$('.se-quest-start') && $('.se-quest-start').trigger('tap')},1000);

	console.info('開罐子中,請稍等。')
