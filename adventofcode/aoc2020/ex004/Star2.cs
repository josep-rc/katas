using System;
using System.Collections.Generic;
using AOC.Utils;

namespace ex004
{
    public static class Star2
    {
        public static void Run()
        {
            const string filePath = "/Users/joseppenalba/dev/katas/adventofcode/aoc2020/ex004/input.txt";
            var fileData = DataFromFile.Get(filePath);
            var passportsList = new List<Passport>();
            
            // Split passports from data
            var passportsData = fileData.Split("\n\n");

            // Passports generation
            foreach (var passport in passportsData)
            {
                var newPassport = new Passport(passport);
                passportsList.Add(newPassport);
            }

            // Count valid passports
            var validPassportsCount = 0;
            foreach (var pass in passportsList)
            {
                if (pass.IsValidForStar2()) validPassportsCount++;
            }
            // Show result
            Console.WriteLine(validPassportsCount);
        }
    }
}