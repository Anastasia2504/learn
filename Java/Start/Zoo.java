
/**
 * Write a description of class Zoo here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Zoo
{
    // instance variables - replace the example below with your own
    private int x;

    /**
     * Constructor for objects of class Zoo
     */
    public static void ShowBirds ()
    {
        // initialise instance variables
        String [] birds = new String[]{"Goose", "Swan", "Duck"};
        System.out.println("We have" + birds.length + " birds: ");
        for(int i = 0; i < birds.length; i++) {
            System.out.println(birds[i]); 
        }
    }

    /**
     * An example of a method - replace this comment with your own
     * 
     * @param  y   a sample parameter for a method
     * @return     the sum of x and y 
     */
    public int sampleMethod(int y)
    {
        // put your code here
        return x + y;
    }
}
