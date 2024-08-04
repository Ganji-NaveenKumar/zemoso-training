package assignment5.naveen.assignment.main;
import assignment5.naveen.assignment.data.ExampleClass;
import assignment5.naveen.assignment.singleton.StringClass;
public class Main {
    public static  void main(String[]args){
        ExampleClass exampleClass = new ExampleClass();
        exampleClass.display();
        exampleClass.displayLocal();
        StringClass st= StringClass.stringUpdate("Naveen");
        st.displayString();
        StringClass name=StringClass.stringUpdate("Neeraj");
        name.displayString();
    }

}
