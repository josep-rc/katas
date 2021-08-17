using System;
using AOC.Utils;

namespace ex001
{
    public class Star2
    {
        public static void Run()
        {
            int expectedSum = 2020;
            string filePath = "/Users/joseppenalba/dev/katas/adventofcode/aoc2020/ex001/input.webarchive";
            int[] inputdata = DataFromFile.GetLines<int>(filePath);
            (int, int, int) operands3 = DataFinder.FindSum3(inputdata, expectedSum);

            if (operands3.Item1 + operands3.Item2 + operands3.Item3 == expectedSum)
            {
                Console.WriteLine($"{operands3.Item1} + {operands3.Item2} + {operands3.Item3}= {expectedSum}");
                int product3Result = operands3.Item1 * operands3.Item2 * operands3.Item3;
                Console.WriteLine($"{operands3.Item1} * {operands3.Item2} * {operands3.Item3}= {product3Result}");
            }
            else
            {
                Console.WriteLine("No se encuentra la combinación");
            }
        }
    }
}
