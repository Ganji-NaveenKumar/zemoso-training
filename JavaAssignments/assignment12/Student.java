package assignment12;
import java.util.*;
import java.util.stream.Collectors;

class StudentData {
    int id;
    String name;
    int age;
    String gender;
    String engDepartment;
    int yearOfEnrollment;
    double perTillDate;

    StudentData(int id, String name, int age, String gender, String engDepartment, int yearOfEnrollment, double perTillDate) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.engDepartment = engDepartment;
        this.yearOfEnrollment = yearOfEnrollment;
        this.perTillDate = perTillDate;
    }

    public String getName() {
        return name;
    }
    public String getEngDepartment(){
        return engDepartment;
    }
    public int getAge() {
        return age;
    }
    public int getYearOfEnrollment(){
        return yearOfEnrollment;
    }
    public int getId() {
        return id;
    }
    public String getGender() {
        return gender;
    }
    public double getPerTillDate() {
        return perTillDate;
    }
    public String toString() {
        return "\nStudentDate:"+"\n"+"id : "+id
                +"\nname : "+name
                +"\nage : "+age
                +"\ngender : "+gender
                +"\nengDepartment : "+engDepartment
                +"\nyearOfEnrollment : "+yearOfEnrollment
                +"\nperTillDate : "+perTillDate+"\n";
    }
}

public class Student {
    public static void main(String[] args) {
        StudentData[] studentArray = {
                new StudentData(111, "Jiya Brein", 17, "Female", "Computer Science", 2018, 70.8),
                new StudentData(122, "Paul Niksui", 18, "Male", "Mechanical", 2016, 50.2),
                new StudentData(133, "Martin Theron", 17, "Male", "Electronic", 2017, 90.3),
                new StudentData(144, "Murali Gowda", 18, "Male", "Electrical", 2018, 80),
                new StudentData(155, "Nima Roy", 19, "Female", "Textile", 2016, 70),
                new StudentData(166, "Iqbal Hussain", 18, "Male", "Security", 2016, 70),
                new StudentData(177, "Manu Sharma", 16, "Male", "Chemical", 2018, 70),
                new StudentData(188, "Wang Liu", 20, "Male", "Computer Science", 2015, 80),
                new StudentData(199, "Amelia Zoe", 18, "Female", "Computer Science", 2016, 85),
                new StudentData(200, "Jaden Dough", 18, "Male", "Security", 2015, 82),
                new StudentData(211, "Jasna Kaur", 20, "Female", "Electronic", 2019, 83),
                new StudentData(222, "Nitin Joshi", 19, "Male", "Textile", 2016, 60.4),
                new StudentData(233, "Jyothi Reddy", 16, "Female", "Computer Science", 2015, 45.6),
                new StudentData(244, "Nicolus Den", 16, "Male", "Electronic", 2017, 95.8),
                new StudentData(255, "Ali Baig", 17, "Male", "Electronic", 2018, 88.4),
                new StudentData(266, "Sanvi Pandey", 17, "Female", "Electric", 2019, 72.4),
                new StudentData(277, "Anuj Chettiar", 18, "Male", "Computer Science", 2017, 57.5)
        };
        List<StudentData> students = Arrays.asList(studentArray);
//filtering all Department ,then applying distinct and printing them.
        System.out.println("All departments in Data");
        students.stream().map(StudentData::getEngDepartment).distinct().forEach(System.out::println);
        System.out.println();

//        filter all students where YearOfEnrollment after 2018,then map them with name,then printing.
        System.out.println("students who Enrolled after 2018 in Data");
        students.stream().filter(student->
            student.getYearOfEnrollment()>2018
        ).map(StudentData::getName).forEach(System.out::println);
        System.out.println();
//
        System.out.println("All male students in Computer Science");
        students.stream().filter(student->student.getGender().equals("Male")).
                filter(student->student.getEngDepartment().equals("Computer Science")).
                map(StudentData::toString).forEach(System.out::println);
        System.out.println();

//        first grouping by getGender,with collector counting it,then mapping it with forEach,then printing count;
        System.out.println("Total male and female students");
        students.stream().collect(Collectors.groupingBy(StudentData::getGender,Collectors.counting())).
                forEach((gender, count) -> System.out.println(gender + ": " + count));
        System.out.println();
//  collecting based on gender ,while collecting averaging the age,printing them.
        System.out.println("Avg Age of male and female students");
        students.stream().collect(Collectors.groupingBy(StudentData::getGender,
                        Collectors.averagingInt(StudentData::getAge))).
                forEach((gender,avgAge)->System.out.println(gender+" : "+avgAge));
        System.out.println();

//        finding the max with max in stream,with comparing two objects in stream.
        System.out.println("Max percentage student in all");
        students.stream().max((student1,student2)-> (int) (student1.getPerTillDate()-student2.getPerTillDate())).
                ifPresent(System.out::println);

//        builtin comparator
        students.stream().max(Comparator.comparing(StudentData::getPerTillDate)).ifPresent(System.out::println);
        students.stream().max((student1,student2)->Double.compare(student1.getPerTillDate(),student2.getPerTillDate())).
                ifPresent(System.out::println);

//        collecting all departments ,along with count in it using groupingBy Collector,then printing all
        System.out.println("Count of students in each Departments");
        students.stream().collect(Collectors.groupingBy(StudentData::getEngDepartment,
                        Collectors.counting())).
                forEach((department,count)->{System.out.println(department+" : "+count);});
        System.out.println();
//        collecting each department along with averaging the perTillDate by groupBy.
        System.out.println("Avg Percentage of Students in each Department");
        students.stream().collect(Collectors.groupingBy(StudentData::getEngDepartment,
                        Collectors.averagingDouble(StudentData::getPerTillDate))).
                forEach((department,avg)->{System.out.println(department+" : "+avg);});


//        filtering the data on based o department,then finding the minimum age student,with min

        System.out.println();
        System.out.println("Minimum age student");
        students.stream().filter(student->student.getEngDepartment().equals("Electronic")).
                min(Comparator.comparing(StudentData::getAge)).ifPresent(System.out::println);

//filter the data with computer Science ,then grouping by gender along with counting
        System.out.println();
        System.out.println("Male and female count in Computer Science Department students");
        students.stream().filter(student->student.getEngDepartment().equals("Computer Science")).
                collect(Collectors.groupingBy(StudentData::getGender,Collectors.counting())).
                forEach((gender,count)->{System.out.println(gender+" : "+count);});
    }
}
