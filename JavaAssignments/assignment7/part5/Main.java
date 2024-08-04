package assignment7.part5;
class OuterClass1 {
    // Outer class with an inner class
    static class  InnerClass1 {
        String name;

        // Non-default constructor for InnerClass1
        InnerClass1(String name) {
            this.name = name;
            System.out.println("InnerClass1 created with name: " + name);
        }

        void display() {
            System.out.println("Name in InnerClass1: " + name);
        }
    }
}

class OuterClass2 {
    // Outer class with an inner class that inherits from InnerClass1
    static class InnerClass2 extends OuterClass1.InnerClass1 {
        // Constructor for InnerClass2
        InnerClass2(String name) {
            super(name);
        }

        void displayMessage() {
            System.out.println("InnerClass2 inherits from InnerClass1.");
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // Create an instance of OuterClass1 and its inner class
        OuterClass1 outer1 = new OuterClass1();
        OuterClass1.InnerClass1 inner1 = new OuterClass1.InnerClass1("Rodent");

        // Create an instance of OuterClass2 and its inner class
        OuterClass2 outer2 = new OuterClass2();
        OuterClass2.InnerClass2 inner2 = new OuterClass2.InnerClass2("Gerbil");

        // Display messages
        inner1.display();
        inner2.displayMessage();
        inner2.display();
    }
}
