package assignment5.naveen.assignment.singleton;

public class StringClass {
     String str;
    public static StringClass stringUpdate(String string){
//        we need to create instance of class,then non-static methods access them.
        StringClass st=new StringClass();
        st.str=string;
        return st;
    }

//    non-static methods,cannot access the non-static variables.
//    when we create instance ,we can access.
    public  void displayString(){
        System.out.println(str);
    }
}
