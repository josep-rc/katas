using System;
using AOC.Utils;

namespace ex006
{
    public static class Program
    {
        public static void Main(string[] args)
        {
            const string filePath = "/Users/joseppenalba/dev/katas/adventofcode/aoc2020/ex006/input.txt";
            var fileData = DataFromFile.Get(filePath);
            // Split groups from data
            var groupsData = fileData.Split("\n\n");
            var counterStar1 = 0;
            var counterStar2 = 0;

            foreach (var group in groupsData)
            {
                var r1 = StringWorker.ListPresentCharacters(group).Length;
                counterStar1 += r1;

                var r2 = StringWorker.ListCharactersInAllLines(group).Length;
                counterStar2 += r2;
            }

            Console.WriteLine(counterStar1);
            Console.WriteLine(counterStar2);
        }
    }
}