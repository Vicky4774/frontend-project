package com.scanner;

import java.util.Scanner;

public class AdditionUser {

	public static void main(String[] args) 
	{
		
		System.out.println("Enter First Number : ");
		Scanner sc=new Scanner(System.in);
		int num1=sc.nextInt();
		System.out.println("Enter Second Number : ");
		int num2=sc.nextInt();
		System.out.println("The Addition Of Two Number Is : " + (num1+num2));
	}

}
