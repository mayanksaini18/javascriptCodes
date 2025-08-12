package pack1;

public class Demo1 {

public int a = 10;
protected int b = 20;
int c = 30;
private int d = 40;

void disp1(){
    System.out.println("demo 1  class");
    System.out.println(a);
    System.out.println(b);
    System.out.println(c);
    System.out.println(d);
}    
}

class Demo2 extends Demo1 {
 
void disp2(){
    System.out.println("demo 2  class");
    System.out.println(a);
    System.out.println(b);
    System.out.println(c);
    System.out.println(d); //error: d has private access in Demo1
}

}


// public class package1 {
//     public static void main(String[] args) {
//         System.out.println("hey mayank ");
//         Demo1 d1 = new Demo1();
//         d1.disp1();
//         Demo2 d2 = new Demo2();
//         d2.disp2();
//         Demo3 d3 = new Demo3();
//         d3.disp3();
//         Demo4 d4 = new Demo4();
//         d4.disp4();
//     }
// }
