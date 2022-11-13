let result = '';
let isCalc = false;

window.onload = function () {
  result = document.getElementById('result');
};

function cClick(){
  result.value = '0';
  isCalc = false;
}

function numClick(val){
  if(isCalc)  result.value = '0';
  isCalc = false;  
  if(result.value =='0' && val == '0'){
    result.value = '0';
  }else if(result.value == '0' && val == '.'){
    result.value = '0.';
  }else if(result.value == '0'){
    result.value = val;
  }else{
    result.value += val;
  }
}

function opeClick(val){
  if(isCalc)  isCalc = false;
  
  if(isOpeLast()){
    result.value = result.value.slice(0, -1) + val;
  } else {
    result.value += val.replace('x<sup>n</sup>','^');
  }
}

function equalClick(){
  if(isOpeLast())  result.value = result.value.slice(0, -1);

  let temp = new Function('return ' + result.value.replaceAll('×', '*',).replaceAll('÷', '/').replaceAll('^', '**').replaceAll('mod', '%'))();
  if(temp == Infinity || Number.isNaN(temp)){
    result.value = 'Error';
  }else{
    result.value = temp;
    isCalc = true;
  }
}

function isOpeLast(){
  return ['+','-','×','÷','^','mod'].includes(result.value.toString().slice(-1));
}