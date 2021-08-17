using System;
using AOC.Utils;

namespace ex001
{
  public static class Star1
  {
    public static void Run()
    {
      const int expectedSum = 2020;
      const string filePath = "/Users/joseppenalba/dev/katas/adventofcode/aoc2020/ex001/input.webarchive";
      var inputdata = DataFromFile.GetLines<int>(filePath);
      var operands = DataFinder.FindSum2(inputdata, expectedSum);

      if (operands.Item1 + operands.Item2 == expectedSum)
      {
        Console.WriteLine($"{operands.Item1} + {operands.Item2} = {expectedSum}");
        var productResult = operands.Item1 * operands.Item2;
        Console.WriteLine($"{operands.Item1} * {operands.Item2} = {productResult}");
      }
      else
      {
        Console.WriteLine("No se encuentra la combinación");
      }
    }
  }
}
