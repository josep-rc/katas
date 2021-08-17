using System;
using Kata.Services;
using Services;

namespace Kata
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string name = args[0];
            int hora = DateTime.Now.Hour;
            string saludo = Greet.GetGreetTo(name, hora);

            // Saludo inicial
            Console.WriteLine(saludo);

            // capturamos lo que escriba el user
            string entrada = Console.ReadLine();

            // Mientras el user no escriba Stop
            while (entrada != "Stop")
            {

                // Sacamos la palabra invertida
                Console.WriteLine(Reverse.GetReverse(entrada));

                // Si es palíndroma sacamos "Bonita palabra"
                if (IsPalindrome.ItIsPalindrome(entrada))
                {
                    Console.WriteLine("Bonita palabra");
                }

                // Obtenemos la entrada del user
                entrada = Console.ReadLine();
            }

            // Si escribe Stop
            // Nos despedimos
            Console.WriteLine("Adios " + name);
        }
    }
}
