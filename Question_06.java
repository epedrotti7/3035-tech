// Escreva um programa EM JAVA que lê três números reais, calcule e apresente
// a soma e a média dos números informados com 2 casas depois da vírgula.

public class Question_06 {
    public static void main(String[] args) {
        double number_1 = 5;
        double number_2 = 10;
        double number_3 = 7;
        double soma = number_1 + number_2 + number_3;
        double media = soma / 3;

        System.out.printf("Soma = %.2f %n", soma);
        System.out.printf("Media = %.2f %n", media);
    }
}