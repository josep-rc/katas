using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using AOC.Utils;

namespace ex010
{
    public static class Program
    {
        public static void Main(string[] args)
        {
            // Star 1
            // example result: 35
            // example2 result: 220
            // my input result: 1625
            
            // Star 2
            // example result: 8
            // example2 result: 19208
            // my input result: 3100448333024
            
            // Cronos
            var swtotal = new Stopwatch();
            swtotal.Start();
            var sw = new Stopwatch();
            sw.Start();
            const string filePath = "/Users/joseppenalba/dev/katas/adventofcode/aoc2020/ex010/input.txt";
            var inputData = DataFromFile.GetLines<string>(filePath);
            var input = inputData.Select(int.Parse).ToList();
            
            Console.WriteLine("Read file time: {0}ms",sw.ElapsedMilliseconds);
            sw.Restart();
            
            // Lista ordenada
            // añado el 0 inicial
            var orderedInput = new List<int>();
            input.Sort();
            orderedInput.Add(0);
            orderedInput.AddRange(input);
            
            Console.WriteLine("Sort list time: {0}ms", sw.ElapsedMilliseconds);
            sw.Restart();
            
            // Star1
            var numDifs1 = 0;
            var numDifs2 = 0;
            var numDifs3 = 0;
            var intervals = new List<int>();

            for (var i = 0; i < orderedInput.Count-1; i++)
            {
                var dif = orderedInput[i + 1] - orderedInput[i];
                switch (dif)
                {
                    case 1:
                        numDifs1++;
                        intervals.Add(1);
                        break;
                    case 2:
                        numDifs2++;
                        intervals.Add(2);
                        break;
                    case 3:
                        numDifs3++;
                        intervals.Add(3);
                        break;
                }
            }
            
            // Añado el elemento final
            intervals.Add(3);
            numDifs3++;
            
            Console.WriteLine("diffs of 1: {0}", numDifs1);
            Console.WriteLine("diffs of 2: {0}", numDifs2);
            Console.WriteLine("diffs of 3: {0}", numDifs3);

            Console.WriteLine("Star1 diffs1 * diffs3: {0}", numDifs1*numDifs3);

            Console.WriteLine("Star1 time: {0}ms", sw.ElapsedMilliseconds);
            sw.Restart();
            
            // Star2
            ulong combinaciones = 1L;
            var unosCount = 0;
            foreach (var interval in intervals)
            {
                if (interval == 1) unosCount++;

                if (interval == 3)
                {
                    switch (unosCount)
                    {
                        case 2:
                            combinaciones *= 2;
                            break;
                        case 3:
                            combinaciones *= 4;
                            break;
                        case 4:
                            combinaciones *= 7;
                            break;
                    }
                    unosCount = 0;
                }
            }

            Console.WriteLine("Star2 combinations: {0}", combinaciones);
            
            Console.WriteLine("Star2 time: {0}ms", sw.ElapsedMilliseconds);
            sw.Stop();
            
            Console.WriteLine("Total time: {0}ms", swtotal.ElapsedMilliseconds);
            swtotal.Stop();
        }
    }
}