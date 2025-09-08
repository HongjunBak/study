package org.dodream.operator;

import java.util.Scanner;

public class OperatorEx01 {
    public static void main(String[] args) {
        Scanner scanner = null;
        scanner = new Scanner(System.in);
        double num1 = 0.0, num2 = 0.0, result = 0.0;

        System.out.println("산술 연산을 위해 두 피연산자를 입력하세요.");
        System.out.println("실수 입력 : ");
        num1 = scanner.nextDouble();
        System.out.println("실수 입력 : ");
        num2 = scanner.nextDouble();
        System.out.println(num1+" + "+num2+" = "+(num1 + num2));
        System.out.println(num1+" - "+num2+" = "+(num1 - num2));
        System.out.println(num1+" X "+num2+" = "+(num1 * num2));
        if (num1 == 0 || num2 == 0) System.out.println("피연산자를 잘못 입력했습니다.");
        else {
            System.out.println(num1 + " / " + num2 + " = " + (num1 / num2));
            System.out.println(num1 + " % " + num2 + " = " + (num1 % num2));
        }
    }
}
