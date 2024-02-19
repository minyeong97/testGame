gdjs._51228_47785_50630_45716_32_51109_47732Code = {};
gdjs._51228_47785_50630_45716_32_51109_47732Code.GDBackgroundObjects1= [];
gdjs._51228_47785_50630_45716_32_51109_47732Code.GDBackgroundObjects2= [];


gdjs._51228_47785_50630_45716_32_51109_47732Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._51228_47785_50630_45716_32_51109_47732Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._51228_47785_50630_45716_32_51109_47732Code.GDBackgroundObjects1.length = 0;
gdjs._51228_47785_50630_45716_32_51109_47732Code.GDBackgroundObjects2.length = 0;

gdjs._51228_47785_50630_45716_32_51109_47732Code.eventsList0(runtimeScene);

return;

}

gdjs['_51228_47785_50630_45716_32_51109_47732Code'] = gdjs._51228_47785_50630_45716_32_51109_47732Code;
