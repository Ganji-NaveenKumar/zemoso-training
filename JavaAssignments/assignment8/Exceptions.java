package assignment8;
class CustomExceptionA extends Exception {
    public CustomExceptionA(String message) {
        super(message);
    }
}

class CustomExceptionB extends Exception {
    public CustomExceptionB(String message) {
        super(message);
    }
}

class CustomExceptionC extends Exception {
    public CustomExceptionC(String message) {
        super(message);
    }
}

class ExceptionThrower{
    public void throwMethod() throws CustomExceptionA, CustomExceptionB, CustomExceptionC{
        throw new CustomExceptionA("this is customException1");
//        throw new CustomExceptionB("this is customException2");
//        throw new CustomExceptionC("this is customException3");
    }
}
public class Exceptions {
    public static void main(String[] args) {
        ExceptionThrower ex = new ExceptionThrower();
        try {
            ex.throwMethod();
        }
       catch(CustomExceptionA | CustomExceptionB | CustomExceptionC e){
            System.out.println("Caught: " + e.getMessage());
        }
        finally {
            System.out.println("finally");
        }

        try{
            String str = null;
            str.length();
        }
        catch(NullPointerException e){
            System.out.println("Caught: " + e.getMessage());
        }
//        finally can work even it catch or not catch the exception
        finally {
            System.out.println("finally");
        }
    }
}
