package org.dodream.control;

import java.util.Scanner;
import java.util.Random;

public class Dice {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        System.out.println("주사위를 굴릴까요? Enter키를 누르세요");
        scanner.nextLine(); // Enter 키를 얻는다
        int num = random.nextInt(6) + 1;

        System.out.println("컴퓨터가 주사위를 굴릴까요? Enter키를 누르세요");
        scanner.nextLine(); // Enter 키를 얻는다
        int num2 = random.nextInt(6) + 1;

        String msg=num>num2?"you win":num2>num?"com win":"draw";
        System.out.println("사람은"+num+", 컴퓨터는 "+num2+"을 뽑았으므로 "+msg);
    }
}