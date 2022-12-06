// Crie um programa EM JAVA que leia um número real, calcule e exiba na tela os valores 
// correspondentes a 5%, 50% e 150% do valor informado com 1, 2 e 3 casas decimais.

public class Question_07 {
    public static void main(String[] args) {

        double valorOriginal = 178.00;

        double percentual_5 = 5.0 / 100.0;
        double percentual_50 = 50.0 / 100.0;
        double percentual_150 = 150.0 / 100.0;

        double valorFinal_percentual_5 = valorOriginal + (percentual_5 * valorOriginal);
        double valorFinal_percentual_50 = valorOriginal + (percentual_50 * valorOriginal);
        double valorFinal_percentual_150 = valorOriginal + (percentual_150 * valorOriginal);

        System.out.printf("Porcentagem de 5% = %.1f %n", valorFinal_percentual_5);
        System.out.printf("Porcentagem de 50% = %.2f %n", valorFinal_percentual_50);
        System.out.printf("Porcentagem 100% = %.3f %n", valorFinal_percentual_150);
    }
}