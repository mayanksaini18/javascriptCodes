// interface Calculator1 {
//     default void mul() {
//         System.out.println("Calculator1 mul()");
//     }
// }

// interface Calculator2 {
//     default void mul() {
//         System.out.println("Calculator2 mul()");
//     }
// }

// interface Calculator3 extends Calculator1, Calculator2 {
//     @Override
//     default void mul() {
//         // You can also call parent interface methods if needed
//         Calculator1.super.mul();
//         Calculator2.super.mul();
//         System.out.println("Overridden method in Calculator3");
//     }
// }

// public class Main implements Calculator3 {   // ✅ Make this public
//     public static void main(String[] args) {
//         Main obj = new Main();
//         obj.mul(); // Calls overridden method
//     }
// }



// interface Calculator1 {
//    default  void mul(){
//        System.out.println("Calculator1 mul()");
//    }
// }

// interface Calculator2 {
//     default void mul() {
//         System.out.println("Calculator2 mul()");
//     }
// }


// interface Calculator3 extends Calculator1, Calculator2 {
//     //   @Override
//     //   default void mul() {
          
//     //       System.out.println("Overridden method in Calculator3");
//     //   }

//        void mul();
        
// }

// public class Main implements Calculator3 {  
//     public static void main(String[] args) {
//         Main obj = new Main();
//         obj.mul(); // Calls overridden method
//     }
// }



interface Calculator1 {
  default void mul (){
        System.out.println("Calculator1 mul()");
 }
}

class Calculator2 {
    void mul() {
        System.out.println("Calculator2 mul()");
    }
}

class Casio  extends Calculator2 implements Calculator1{}


public class Main {  
    public static void main(String[] args) {
        Casio obj = new Casio();
        obj.mul(); // Calls overridden method
    }
}




