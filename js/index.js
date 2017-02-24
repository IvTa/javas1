function make() {
   var a = parseFloat(frm.a.value);
   var b = parseFloat(frm.b.value);
   var c = parseFloat(frm.c.value);
   var x1, x2, d;
   var result = '';
   d = b*b - 4*a*c;
 alert('D = ' + d);
   if (d < 0) {
    result = 'Рівняння немає коренів';
    alert(result);
    breake;
   };
   if (d = 0) {result = 'Рівняння має один корінь'};
   if (d > 0) {result = 'Рівняння має два корені'};
 alert(result);
   x1 = (-b - Math.sqrt(d))/(2*a);
   
   x2 = (-b + Math.sqrt(d))/(2*a);
    alert('x1 = ' + x1);
 alert('x2 = ' + x2);
}