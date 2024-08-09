package assignment6;
class Car{
    String car;
    int carNo;
    Car(){
        this("BMW",2222);
    }
    Car(String str,int carNo){
        this.car=str;
        this.carNo=carNo;
    }
    public  void display(){
        System.out.println(car+" "+carNo);
    }
}
public class Naveen {
    public static void main(String[] args) {
        Car car = new Car();
        car.display();
    }
}
