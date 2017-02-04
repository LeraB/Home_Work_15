var step;

function level_one() {
    var i=0;
while (i < 2){
    north();
    i++;
}
    map();
}
function level_two() {
    for(var i = 0; i<=15; i++){
        east();
    }
    map();
}
function level_three() {
   i = 1;
   step=i;
   var i = 0;
   
do{
    if (south(isFree)) {
       south();
       
    } else {
		east();
       
    }
	i++;
}while(i<=13);
map();	
	}
	
	
function level_four() {
 for(i = 0; i< 9; i++){
	 if(south(isFree) == 'true'){
		 south();
	 }
	 else{
		 east();
	 }
 } 
    map();
}
function level_five() {
	var way_from = '';
 for(i = 0; i< 29; i++){
	 if(isFree('south') && way_from != 'south'){
		 way_from = 'south';
		 south();
	 }else if(isFree('east') && way_from != 'east' ){
		 way_from = 'east';
		east();
	}else if(isFree('north') && way_from != 'north'){
		way_from = 'north';
		north ();
	}else if(isFree('west') && way_from != 'west'){
		way_from = 'west';
		west();
	 }}
  
    map();
}
 
