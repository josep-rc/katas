using System;
using System.Collections.Generic;
using System.Linq;
using AOC.Utils;

namespace ex009
{
    public static class Program
    {
        // Day 9
        // My Star1 result: 138879426
        // My Star2 result: 23761694
        public static void Main(string[] args)
        {
            const string filePath = "/Users/joseppenalba/dev/katas/adventofcode/aoc2020/ex009/input.txt";
            var inputData = DataFromFile.GetLines<string>(filePath);
            var data = inputData.Select(long.Parse).ToList();

            const int preamble = 25;
            long noValidNumber = 0;
            
            for (var i = preamble; i < data.Count; i++)
            {
                var preambleList = new List<long>();
                // mientras estemos en el preambulo actual
                // metemos en la lista los que deben estar en el preambulo
                for (var j = 0; j < preamble; j++)
                {
                    preambleList.Add(data[i - j - 1]);
                }
                if (!FindSum2InList(preambleList, data[i]))
                {
                    Console.WriteLine("Star1: No hay combinación para sumar: {0}",data[i]);
                    noValidNumber = data[i];
                    break;
                }
            }

            // obtenemosla lista de los contiguos que sumen noValidNumber
            var resStar2 = FindContigousSum(data, noValidNumber);
            // el mínimo de dicha lista
            var star2Min = resStar2.Min();
            // y el maximo
            var star2Max = resStar2.Max();

            Console.WriteLine("Star2, minimo + maximo: {0}",star2Min+star2Max);
        }

        // Busca dos numeros en la lista que sumados den expected
        // Devuelve true si los hay, false si no
        public static bool FindSum2InList(List<long> list, long expected)
        {
            for (var i = 0; i < list.Count; i++)
            {
                for (var y = 0; y < list.Count; y++)
                {
                    if (i != y && list[i] + list[y] == expected)
                    {
                        return true;
                    }
                }                
            }
            return false;
        }

        // Devuelve una lista con los numeros contiguos de la lista de entrada
        // que sumen expected
        public static List<long> FindContigousSum(List<long> list, long expected)
        {
            var listContigous = new List<long>();
            for (var i = 1; i < list.Count; i++)
            {
                var currentContigous = new List<long>();
                for (var j = i-1; j >= 0; j--)
                {
                    currentContigous.Add(list[j]);
                    var currentContinousSum = currentContigous.Sum();
                    if (currentContinousSum == expected)
                    {
                        foreach (var cc in currentContigous)
                        {
                            listContigous.Add(cc);
                        }
                        return listContigous;
                    }
                }
            }
            return listContigous;
        }
    }
}