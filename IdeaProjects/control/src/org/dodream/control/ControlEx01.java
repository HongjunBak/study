package org.dodream.control;

import java.util.Scanner;
import java.util.Random;

public class ControlEx01 {
    public static void main(String[] args) {
        System.out.print("숫자 입력 : ");
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();
        if (num<0) num=-num;
        System.out.println("절대값" + num);
        if (num%2==0) System.out.println("짝수입니다."); else System.out.println("홀수입니다");
        System.out.print("1~10 가운데 ");
        Random random = new Random();
        System.out.println(random.nextInt(10) + 1); // 1 ~ 10
        System.out.print("1~10 가운데 ");
        num = (int)(Math.random()*10) + 1;
        System.out.println(num);
        System.out.print("숫자 입력 : ");
        num = scanner.nextInt();    
        String str = num > 0 ? "양수" : num < 0 ? "음수" : "0";
        System.out.println(str);
    }
}
