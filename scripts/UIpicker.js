
const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');
const Materials = require('Materials');

const lutTex1 = Textures.get('deuteranopia_corrector');
const lutTex2 = Textures.get('protanopia_corrector');
const lutTex3 = Textures.get('tritanopia_corrector');
const lutTex4 = Textures.get('deuteranopia_simulator');
const lutTex5 = Textures.get('protanopia_simulator');

const baseMat = Materials.get('baseMaterial');
const lut2Mat = Materials.get('lut2Mat');
const lut3Mat = Materials.get('lut3Mat');
const lut4Mat = Materials.get('lut4Mat');
const lut5Mat = Materials.get('lut5Mat');

const rectangleObject = Scene.root.child('Device').child('Camera').child('Focal Distance').child('baseCanvas').find('baseRectangle');


const picker = NativeUI.picker;

var index = 0;


//get images
const config = {

    selectedIndex: index,

    items:[

        {image_texture: lutTex1},
        {image_texture: lutTex2},
        {image_texture: lutTex3},
        {image_texture: lutTex4},
        {image_texture: lutTex5}
    ]
};

picker.configure(config);
picker.visible = true;

picker.selectedIndex.monitor().subscribe(function(e){

    var n = e.newValue;

    switch(n){
        case 0:
        rectangleObject.material = baseMat;
        break;

        case 1:
        rectangleObject.material = lut2Mat;
        break;

        case 2:
        rectangleObject.material = lut3Mat;
        break;

         case 3:
         rectangleObject.material = lut4Mat;
         break;
                
                
        case 4:
        rectangleObject.material = lut5Mat;
        break;
    }
});

