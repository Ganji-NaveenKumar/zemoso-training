package assignment7.part3;

public class Main {
        public static void methodA(FirstInterface first) {
            first.methodFirstA();
            first.methodFirstB();
        }

        public static void methodB(SecondInterface second) {
            second.methodSecondA();
            second.methodSecondA();
        }

        public static void methodC(ThirdInterface third) {
            third.methodThirdA();
            third.methodThirdB();
        }

        public static void methodCombined(MainInterface combined) {
            combined.mainInterfaceMethod();
        }
    public static void main(String[] args) {
        MainClass main = new MainClass();
        methodA(main);
        methodB(main);
        methodC(main);
        methodCombined(main);
    }
}
