var isGamePaused = 0;
var isRewardGained = 0;
var isRewardDismissed = 0;
var isFrequencyCapped = 0;

var imported = document.createElement('script');
var AdsenseId = "ca-pub-9737420423828962"

var admobInterstitial = "ca-app-pub-9737420423828962/1938994944"
var admobReward = "ca-app-pub-9737420423828962/3204956027"

var ChannelId = "2916734308"
var adFrequency = "30s";
var testAdsOn = false;

window.adsbygoogle = window.adsbygoogle || [];
var adBreak;
var adConfig;

function loadAdSetup()
{
	
	adBreak = function(o) {adsbygoogle.push(o);}
	adConfig = function(o) {adsbygoogle.push(o);}
	adConfig({
    preloadAdBreaks: 'on',
    sound: 'on', // This game has sound
    onReady: () => {
        
    }, // Called when API has initialised and adBreak() is ready
});

}
function nextAds()
{
    
    adBreak({
        type: 'start', // ad shows at start of next level
        name: 'start-game',
        beforeAd: () => {            
            
			isGamePaused = 1;
        }, // You may also want to mute thegame's sound.
        afterAd: () => {
            
			isGamePaused = 0;
        }, // resume the game flow.
        adBreakDone: (placementInfo) => {
            
			isGamePaused = 0;
            
        },
    });
}

function showReward()
{
    
    adBreak({
        type: 'reward', // ad shows at start of next level
        name: 'rewarded Ad',
        beforeAd: () => {            
            
			isGamePaused = 1;
        }, // You may also want to mute thegame's sound.
        afterAd: () => {
            
			isGamePaused = 0;
        }, // resume the game flow.
        beforeReward: (showAdFn) => {showAdFn(0)},
        adDismissed: () => {rewardDismissed();},
        adViewed: () => {RewardGained();},
        adBreakDone: (placementInfo) => {
           
			isGamePaused = 0;
            if(placementInfo.breakStatus == "frequencyCapped"){updateTextRewardPanel()};
        },
    });
}

function rewardDismissed()		
{
	
	isRewardDismissed = 1;
	// User clicked the close button when reward is showing. So just restart the game with no rewards.
}

function RewardGained()
{
	
	isRewardGained = 1;
	
	// User watched the rewarded ad. so add rewards function here.
}

function updateTextRewardPanel()
{
    
	isFrequencyCapped  = 1;
	// frequencyCapped No reward Ads
}

function createAFGScript()
{

    imported.setAttribute('data-ad-client', AdsenseId);
    imported.setAttribute('data-ad-channel', ChannelId);
	
	imported.setAttribute('data-admob-interstitial-slot', admobInterstitial);
	imported.setAttribute('data-admob-rewarded-slot', admobReward);
	
    imported.setAttribute('data-ad-frequency-hint', adFrequency);
    if(testAdsOn == true){imported.setAttribute('data-adbreak-test', "on");}
    imported.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    imported.setAttribute("type", "text/javascript");
    imported.async = true;
    document.head.appendChild(imported);
}

createAFGScript()
loadAdSetup()



const scriptsInEvents = {

	async Eqkyads_Event5_Act1(runtime, localVars)
	{
		
		nextAds()
		
	},

	async Eqkyads_Event6_Act1(runtime, localVars)
	{
		runtime.globalVars["isPausedGame"] = isGamePaused;
	},

	async Eqkyads_Event7_Act1(runtime, localVars)
	{
		showReward()
	},

	async Eqkyads_Event8_Act1(runtime, localVars)
	{
		runtime.globalVars["isRewardGained"] = isRewardGained;
		runtime.globalVars["isFrequencyCapped"] = isFrequencyCapped;
		runtime.globalVars["isRewardDismissed"] = isRewardDismissed;
		isRewardGained = 0;
		isFrequencyCapped = 0;
		isRewardDismissed = 0;
	},

	async Eqkyads_Event10_Act1(runtime, localVars)
	{
		
	},

	async Eqkyads_Event14_Act4(runtime, localVars)
	{
		
	},

	async Eqkyads_Event20_Act4(runtime, localVars)
	{
		
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

