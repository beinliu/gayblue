$('.contents').on('tap','.btn-members-refresh',function(){
	$('.btn-open-stage-3').trigger('tap');


	setTimeout(function() {$('[data-stage-name="パンデモニウム 第1階層"]').trigger('tap')},1000);


	setTimeout(function() {$('.btn-set-quest' + '[data-index="2"]').trigger('tap')},2000);


	setTimeout(function() {$('[data-quest-id="601731"]').trigger('tap')},3000);



	setInterval(function() {$('.se-quest-start') && $('.se-quest-start').trigger('tap')},700);

});

	$('.btn-open-stage-3').trigger('tap');


	setTimeout(function() {$('[data-stage-name="パンデモニウム 第1階層"]').trigger('tap')},1000);


	setTimeout(function() {$('.btn-set-quest' + '[data-index="2"]').trigger('tap')},2000);


	setTimeout(function() {$('[data-quest-id="601731"]').trigger('tap')},3000);



	setInterval(function() {$('.se-quest-start') && $('.se-quest-start').trigger('tap')},700);

console.info('黑水晶中')
