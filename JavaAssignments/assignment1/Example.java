package assignment1;
import java.io.File;
import java.util.*;
import java.util.regex.Pattern;

public class Example {
    public static void search(File[] files, Pattern pattern) {
        if (files != null) {
            for (File file : files) {
//                if file is folder/directory then,calling again to find it files.
                if (file.isDirectory()) {
                    search(file.listFiles(), pattern);
                }
//                if it is file,then matching with pattern and file name ,then printing absolutePath.
                else {
                    if(pattern.matcher(file.getName()).matches()) {
                        System.out.println(file.getAbsolutePath());
                    }
                }
            }
        }
    }

    public static void main(String[] args) {
//       String directoryPath = "C:\\Users\\ganji\\OneDrive\\Desktop\\Zemoso\\Assignments";
        String directoryPath = System.getProperty("user.home");
//        String directoryPathZemoso=directoryPath+"\\OneDrive\\Desktop\\Zemoso";
        File homeDir = new File(directoryPath);
        Scanner sc = new Scanner(System.in);
//        continuously takes input
        while(true){
            System.out.println("Enter the file Name:");
            String str = sc.nextLine();
            if(str.equals("exit")) break;
            File[] files = homeDir.listFiles();
            try {
//                making pattern of input with Case_insensitive
                Pattern pattern = Pattern.compile("(?i)" + Pattern.quote(str));
//                search function
                search(files, pattern);
            } catch (Exception e) {
                System.out.println("error");
            }
        }

    }

}