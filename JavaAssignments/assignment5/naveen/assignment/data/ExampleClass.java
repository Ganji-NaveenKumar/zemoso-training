package assignment5.naveen.assignment.data;

public class ExampleClass {
    int a;
    char ch;
    public void display() {
        System.out.println("a = " + a);
        System.out.println("ch = " + ch);
    }
    public void displayLocal(){
        int b;
        char sh;
//        local variables must be initialized before using.
//        System.out.println(b+" "+sh);
    }
}
