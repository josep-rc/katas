using System;
using AOC.Utils;

namespace ex002
{
    public static class Star2
    {
        public static void Run()
        {
            const string filePath = "/Users/joseppenalba/dev/katas/adventofcode/aoc2020/ex002/input.webarchive";
            var inputdata = DataFromFile.GetLines<string>(filePath);
            var validCounter = 0;
            TobogganCode tcode;

            foreach (var line in inputdata)
            {
                tcode = new TobogganCode(line);
                if (tcode.IsValid(ValidatorStar2)) validCounter++;
            }
            Console.WriteLine("Num. Star2 valid codes: " + validCounter);
        }

        private static bool ValidatorStar2(TobogganCode item)
        {
            var pos1IsCharacter = item.Code[item.Num1 - 1] == item.Letter;
            var pos2IsCharacter = item.Code[item.Num2 - 1] == item.Letter;
            return pos1IsCharacter ^ pos2IsCharacter;
        }
    }
}
