package org.dodream.operator;

import java.util.Scanner;

public class OperatorEx02 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("숫자 또는 알파벳을 입력하세요.");
        System.out.print("입력 : ");
        char ch = scanner.next().charAt(0);

        String msg = null;
        if (ch>= 48 && ch <= 57) msg="입력한 값은 숫자입니다.";
        else if (ch>=65 && ch<=90) msg="입력한 값은 대문자입니다.";
        else if (ch>=97 && ch<=122) msg="입력한 값은 소문자입니다.";
        else msg="입력한 값은 숫자 또는 영문자가 아닙니다.";
        System.out.println(msg);

    }
}
