package controllers;

import java.util.ArrayList;
import java.util.Scanner;

public class ControleFolhaPagamento {
	
	Scanner entradaDouble = new Scanner(System.in), entradaCaracteres = new Scanner(System.in), entradaInt = new Scanner(System.in);
	ArrayList<String> listaNomesFuncionarios = new ArrayList<String>();
	ArrayList<Double> listaSalariosBrutos = new ArrayList<Double>();
	
	private String menu() {
		
		System.out.print("--------------------------------------\n"
				+ "Escolha uma opção:\n"
				+ "1) Cadastrar usuário\n"
				+ "2) Imprimir contracheque\n"
				+ "3) Sair.\n"
				+ "--------------------------------------\n");
		return entradaCaracteres.nextLine();
		
	}
	
	public void iniciar() {
		String opcao = menu();
		while (!opcao.equals("3")) {
			switch(opcao) {
				case "1":
					System.out.print("Digite o nome do funcionário: \n");
					listaNomesFuncionarios.add(entradaCaracteres.nextLine());
					System.out.print("Digite o salário bruto do funcionário: \n");
					listaSalariosBrutos.add(entradaDouble.nextDouble());
					System.out.printf("Funcionário adicionado.\n");
					opcao = menu();
					break;
				case "2":
					System.out.println("Digite o índice do funcionário:\n");
					int i = entradaInt.nextInt();
					calcularINSS(i);
					calcularIRRF(i);
					imprimirFolhaPagamento(i);
					opcao = menu();
					break;
				case "3":
					System.out.println("Programa encerrado.");
					break;
			}
		}
	}
	
	public double calcularINSS(int i) {
		double	INSS = 0,
				salario = listaSalariosBrutos.get(i),
				valorLimite1 = 1045,
				aliquota1 = 0.075,
				valorLimite2 = 2089.6,
				aliquota2 = 0.09,
				valorLimite3 = 3134.40,
				aliquota3 = 0.12,
				valorLimite4 = 6101.06,
				aliquota4 = 0.14;		
		if (salario <= valorLimite1) {
			INSS = salario * aliquota1;
			
		} else if (salario <= valorLimite2) {
			INSS = valorLimite1 * aliquota1;
			INSS += (salario - valorLimite1) * aliquota2;
			
		} else if (salario <= valorLimite3) {
			INSS = valorLimite1 * aliquota1;
			INSS += (valorLimite2 - valorLimite1) * aliquota2;
			INSS += (salario - valorLimite2) * aliquota3;
			
		} else if (salario <= valorLimite4) {
			INSS = valorLimite1 * aliquota1;
			INSS += (valorLimite2 - valorLimite1) * aliquota2;
			INSS += (valorLimite3 - valorLimite2) * aliquota3;
			INSS += (salario - valorLimite3) * aliquota4;
			
		} else {
			INSS = 713.10;
		}
		return INSS;	
	}
	
	private double calcularIRRF(int i) {
		double 	IRRF = 0,
				salarioDescontoINSS = listaSalariosBrutos.get(i) - calcularINSS(i);
		
		if (salarioDescontoINSS <= 1903.98) {
			IRRF = 0;
		} else if (salarioDescontoINSS <= 2826.65) {
			IRRF = salarioDescontoINSS * 0.075 - 142.8;
		} else if (salarioDescontoINSS <= 3751.05) {
			IRRF = salarioDescontoINSS * 0.15 - 354.8;
		} else if (salarioDescontoINSS <= 4664.68) {
			IRRF = salarioDescontoINSS * 0.225 - 636.13;
		} else {
			IRRF = salarioDescontoINSS * 0.275 - 869.36;
		}
		return IRRF;
	}
	
	private void imprimirFolhaPagamento(int i) {
		double salarioLiquido = listaSalariosBrutos.get(i) - calcularINSS(i) - calcularIRRF(i);
		
		System.out.printf("Funcionário: %s\n"
						+ "Salário bruto: %f\n"
						+ "Desconto INSS: %f\n"
						+ "Desconto IRRF: %f\n"
						+ "Total de descontos: %f\n"
						+ "Salário líquido: %f\n",
						listaNomesFuncionarios.get(i),
						listaSalariosBrutos.get(i),
						calcularINSS(i),
						calcularIRRF(i),
						calcularINSS(i) + calcularIRRF(i),
						salarioLiquido);
		
	}

}