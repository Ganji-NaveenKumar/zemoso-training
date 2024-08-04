package assignment9;

import java.util.Scanner;
import java.util.regex.Pattern;
import java.util.regex.Matcher;
public class RegexClass {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str=sc.nextLine();
        Pattern pattern=Pattern.compile("^[A-Z].*\\.$");
        Matcher match=pattern.matcher(str);
        System.out.println(match.matches());
//        Pattern pattern= Pattern.compile("^[A-Z]+");
//        Matcher matches=pattern.matcher("i m nn");
//        System.out.println(matches);
       System.out.println( Pattern.matches("^[A-Z].*\\.$","IAmnaveen."));
    }
}
