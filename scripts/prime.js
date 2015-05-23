$( document ).ready(function(){
	
	var prime = new TimelineMax();
		prime.to($(".forearm"), .4, {marginTop:'-35px', delay: 1, ease: Bounce.easeOut})
			.to($('.hands'), .4, {marginTop:'-35px', ease: Bounce.easeOut})
			.to($('.abs'), .4, {borderLeft: '0', borderRight: '0', width: '160px', ease: Bounce.easeOut}, 'widenUp')
			.to($('.pelvis'), .4, {width: '160px', ease: Bounce.easeOut}, 'widenUp')
			.to($('.reflectors'), 0, {display: 'none'}, 'widenUp')
			.to($('.rightArm'), .4, {marginLeft: '92px', ease: Bounce.easeOut}, 'armsIn')
			.to($('.leftArm'), .4, {marginRight: '90px', ease: Bounce.easeOut}, 'armsIn')
			.to($('.head'), .4, {marginTop: '70px', ease: Bounce.easeOut})
			.to($('.torsoTop'), .4, {marginTop: '75px', ease: Bounce.easeOut}, 'dropDown')
			.to($('.arms'), .4, {marginTop: '75px', ease: Bounce.easeOut}, 'dropDown')
			.to($('.head'), .4, {marginTop: '145px', ease: Bounce.easeOut}, 'dropDown')
			.to($('.torsoTop'), .4, {marginTop: '242px', ease: Bounce.easeOut}, 'dropDown2')
			.to($('.torsoTop'), .4, {marginTop: '242px', ease: Bounce.easeOut}, 'dropDown2')
			.to($('.arms'), .4, {marginTop: '242px', ease: Bounce.easeOut}, 'dropDown2')
			.to($('.head'), .4, {marginTop: '316px', ease: Bounce.easeOut}, 'dropDown2')
			.to($('.thighs'), .4, {marginTop: '74px', ease: Bounce.easeOut}, 'dropDown2')
			.to($('.leg'), 0, {display: 'none'})
			.to($('.tires'), .2, {display: "block"})
			.to($('.torsoTop'), .4, {marginTop: '226px', ease: Bounce.easeOut}, 'bounceUp')
			.to($('.torsoTop'), .4, {marginTop: '226px', ease: Bounce.easeOut}, 'bounceUp')
			.to($('.arms'), .4, {marginTop: '226px', ease: Bounce.easeOut}, 'bounceUp')
			.to($('.head'), .4, {marginTop: '300px', ease: Bounce.easeOut}, 'bounceUp')
			.to($('.thighs'), .4, {marginTop: '58px', ease: Bounce.easeOut}, 'bounceUp')
			.to($('.lights'), .4, {opacity: '1'});



});