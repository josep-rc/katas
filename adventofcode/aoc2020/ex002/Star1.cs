using System;
using AOC.Utils;

namespace ex002
{
    public static class Star1
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
                if (tcode.IsValid(ValidatorStar1)) validCounter++;
            }
            Console.WriteLine("Num. Star1 valid codes: " + validCounter);
        }

        private static bool ValidatorStar1(TobogganCode item)
        {
            var letterTimes = 0;
            var validCode = false;
            foreach (var c in item.Code)
            {
                if (c == item.Letter) letterTimes++;
            }
            if (letterTimes >= item.Num1 && letterTimes <= item.Num2) validCode = true;
            return validCode;
        }
    }
}
