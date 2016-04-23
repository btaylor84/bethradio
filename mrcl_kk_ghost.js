var mrcl_kk_ghost=new function() {

this.digitPad = 4;
this.groupPad = 15;
this.heightFrac = 0.7;
this.widthFrac = 0.7;
this.secondsScale = {val:0.6, pos:'middle'};


this.bgColor = [255, 255, 255];
this.baseColor = [ 100, 100, 100 ];
this.partColor = { a:[ 51, 102, 153 ], b:[ 0, 200, 200 ]};
this.secondColor = this.bgColor;
this.colonColors = [ [200, 50, 200] , [0, 200, 200] ];

this.baseLineWidth = 7;
this.partLineWidth = 5;
this.colonRadius = 4;
this.beginAniTime = 0;
this.endAniTime = 1;

this.baseInFront = false;
this.pulsate = false;

this.disableSlowest = true;

var trans0={a:[ 250, 50, 250 ], b:[ 150, 0, 150 ]};

this.t = new Array();
for (var i=0;i<=50;i++)
this.t[i] = new Array();
this.t[0].push({ src: 0, type: 'shift', to: 2});
this.t[0].push({ src: 6, type: 'flip', to: 5});
this.t[0].push({ src: 1, type: 'shift', to: 2});
this.t[0].push({ src: 4, type: 'shift', to: 5});
this.t[0].push({ src: 2, type: 'shrink', mov: 0});
this.t[0].push({ src: 5, type: 'shrink', mov: 1}); 

this.t[1].push({ src: 2, type: 'shift', to: 0});
this.t[1].push({ src: 5, type: 'shift', to: 6});
this.t[1].push({ src: 2, type: 'grow', mov: 0});
this.t[1].push({ src: 2, type: 'shift', to: 4});
this.t[1].push({ src: 2, type: 'shift', to: 3});

this.t[2].push({ src: 2, type: 'shift', to: 5});
this.t[2].push({ src: 0, type: 'grow', mov: 1});
this.t[2].push({ src: 3, type: 'shift', to: 6});
this.t[2].push({ src: 3, type: 'grow', mov: 1});
this.t[2].push({ src: 4, type: 'shift', to: 6});
this.t[2].push({ src: 3, type: 'shift', to: 5});
this.t[2].push({ src: 0, type: 'shift', to: 2}); 
this.t[2].push({ src: 6, type: 'shrink', mov: 0});

this.t[3].push({ src: 0, type: 'shift', to: 2});
this.t[3].push({ src: 3, type: 'grow', mov: 0});
this.t[3].push({ src: 5, type: 'shift', to: 5});    
this.t[3].push({ src: 3, type: 'shift', to: 1});
this.t[3].push({ src: 6, type: 'shrink', mov: 0});
this.t[3].push({ src: 2, type: 'shrink', mov: 0});

this.t[4].push({ src: 1, type: 'flip', to: 0});    
this.t[4].push({ src: 3, type: 'shift', to: 3});
this.t[4].push({ src: 5, type: 'flip', to: 6});
this.t[4].push({ src: 2, type: 'shift', to: 5});
this.t[4].push({ src: 1, type: 'grow', mov: 0}); 

this.t[5].push({ src: 1, type: 'flip', to: 0});
this.t[5].push({ src: 6, type: 'shift', to: 4});
this.t[5].push({ src: 5, type: 'flip', to: 6});
this.t[5].push({ src: 3, type: 'shift', to: 3});
this.t[5].push({ src: 0, type: 'shrink', mov: 0});
this.t[5].push({ src: 1, type: 'grow', mov: 0});
this.t[5].push({ src: 5, type: 'grow', mov: 1});

this.t[50].push({ src: 0, type: 'shift', to: 2});    
this.t[50].push({ src: 6, type: 'shift', to: 4});    
this.t[50].push({ src: 1, type: 'grow', mov: 0});
this.t[50].push({ src: 1, type: 'flip', to: 0});
this.t[50].push({ src: 5, type: 'grow', mov: 1});
this.t[50].push({ src: 5, type: 'flip', to: 6});
this.t[50].push({ src: 3, type: 'shrink', mov: 0});
this.t[50].push({ src: 3, type: 'shrink', mov: 1});

this.t[6].push({ src: 0, type: 'shift', to: 2});
this.t[6].push({ src: 3, type: 'shrink', mov: 0});
this.t[6].push({ src: 6, type: 'shift', to: 5});
this.t[6].push({ src: 1, type: 'flip', to: 0});
this.t[6].push({ src: 5, type: 'shift', to: 5});
this.t[6].push({ src: 1, type: 'shift', to: 2});
this.t[6].push({ src: 4, type: 'shift', to: 2});


this.t[7].push({ src: 0, type: 'shift', to: 1,});
this.t[7].push({ src: 5, type: 'shift', to: 6,});
this.t[7].push({ src: 0, type: 'shift', to: 2});
this.t[7].push({ src: 0, type: 'grow', mov: 1});
this.t[7].push({ src: 2, type: 'shift', to: 4});
this.t[7].push({ src: 5, type: 'shift', to: 5});
this.t[7].push({ src: 2, type: 'shift', to: 3});
this.t[7].push({ src: 2, type: 'shrink', mov: 0});

this.t[8].push({ src: 1, type: 'flip', to: 0});
this.t[8].push({ src: 4, type: 'shift', to: 1});
this.t[8].push({ src: 6, type: 'shift', to: 6});
this.t[8].push({ src: 3, type: 'shrink', mov: 0});  
this.t[8].push({ src: 0, type: 'shrink', mov: 0});  
this.t[8].push({ src: 2, type: 'shift', to: 2});
this.t[8].push({ src: 5, type: 'shift', to: 5});
this.t[8].push({ src: 4, type: 'flip', to: 3,});

this.t[9].push({ src: 0, type: 'shift', to: 0});
this.t[9].push({ src: 1, type: 'shrink', mov: 1});    
this.t[9].push({ src: 2, type: 'shift', to: 2});   
this.t[9].push({ src: 3, type: 'shift', to: 1});  
this.t[9].push({ src: 5, type: 'grow', mov: 1});  
this.t[9].push({ src: 5, type: 'flip', to: 6}); 
this.t[9].push({ src: 6, type: 'shift', to: 4});

this.t[10].push({ src: 2, type: 'shrink', mov: 0});
this.t[10].push({ src: 5, type: 'shrink', mov: 0});


this.t[21].push({ src: 0, type: 'shift', to: 2});
this.t[21].push({ src: 2, type: 'shift', to: 2});
this.t[21].push({ src: 3, type: 'shift', to: 5});
this.t[21].push({ src: 4, type: 'shift', to: 5});
this.t[21].push({ src: 6, type: 'shift', to: 5});



this.t[20].push({ src: 0, type: 'shrink', mov: 0});
this.t[20].push({ src: 2, type: 'shrink', mov: 0});
this.t[20].push({ src: 3, type: 'shrink', mov: 0});
this.t[20].push({ src: 4, type: 'shrink', mov: 0});
this.t[20].push({ src: 6, type: 'shrink', mov: 0});
this.t[30].push({ src: 0, type: 'flip', to: 2});
this.t[30].push({ src: 2, type: 'flip', to: 2});
this.t[30].push({ src: 3, type: 'flip', to: 2});
this.t[30].push({ src: 5, type: 'flip', to: 5});
this.t[30].push({ src: 6, type: 'flip', to: 5});
this.t[11].push({ src: 5, type: 'grow', mov: 0, t:[.9,.95]});
this.t[11].push({ src: 2, type: 'grow', mov: 0, t:[.95,1]}); 
this.fontName='mrcl_kk_ghost';}