package org.dodream.variable;

public class VariableEx02 {

	public static void main(String[] args) {
		int value = 5;
		int result = value + 10;
		System.out.println(result);
		
		int hour = 2;
		int minute = 40;
		System.out.println(hour + "시 " + minute + "분이다");
		
		int minutes = hour*60 + minute;
		System.out.println(minutes);
		
		String name="홍길동";
		String lang="자바";
		System.out.println(name + "은 " + lang + " 프로그래밍을 공부한다.");
		
		
	}

}
