package assignment6;
class OurCar{
    String car;
    OurCar(String str){
        this.car = str;
        System.out.println("Our Car number is : "+car);
    }
}
public class ConstructorExample2 {
    public static void main(String[] args) {
        OurCar[] cars=new OurCar[5];
        for(int i=0;i<cars.length;i++){
            cars[i]=new OurCar(""+i);
        }
    }
}
