using System;
using AOC.Utils;

namespace ex003
{
    public static class Star2
    {
        public static void Run()
        {
            const string filePath = "/Users/joseppenalba/dev/katas/adventofcode/aoc2020/ex003/input.txt";
            var inputdata = DataFromFile.GetLines<string>(filePath);

            (int, int)[] slopes = new[] {(1, 1), (3, 1), (5, 1), (7, 1), (1, 2)};

            var totalsTrees = new int[5];
            var i = 0;
            foreach (var slope in slopes)
            {
                Console.WriteLine(TreeCounter(inputdata, slope));
                totalsTrees[i] = TreeCounter(inputdata, slope);
                i++;
            }

            // Calculo la multiplicación de resultados
            ulong totalMulti = 1;
            foreach (var subtotal in totalsTrees)
            {
                totalMulti *= (ulong)subtotal;
            }
            Console.WriteLine("Star2: " + totalMulti);
        }

        static int TreeCounter(string[] inputdata, (int,int) slopes)
        {
            var jumpX = slopes.Item1;
            var jumpY = slopes.Item2;
            var currentX = 0;
            var numTrees = 0;
            

            for(var i = jumpY; i<inputdata.Length; i = i+jumpY)
            {
                currentX += jumpX;
                if (DataFinder.IsCharacterInPatternPosition('#', currentX, inputdata[i])) numTrees++;
            }
            
            
            return numTrees;   
        }
    }
}