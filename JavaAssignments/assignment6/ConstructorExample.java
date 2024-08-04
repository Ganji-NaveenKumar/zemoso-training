package assignment6;
class MyCar{
    String car;
    MyCar(String str){
        this.car=str;
        System.out.println("Car Constructor"+car);
    }
}
public class ConstructorExample {
    public static void main(String[] args) {
        MyCar[] Car=new MyCar[5];
    }
}
