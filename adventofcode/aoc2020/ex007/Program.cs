using System;
using System.Collections.Generic;
using AOC.Utils;

namespace ex007
{
    public static class Program
    {
        /*
         * TODO: Refactor and make tests
         */
        public static void Main(string[] args)
        {
            const string filePath = "/Users/joseppenalba/dev/katas/adventofcode/aoc2020/ex007/input.txt";
            var fileData = DataFromFile.GetLines<string>(filePath);
            
            // Star1
            // how many colors can contain at least one shiny gold bag?
            // My solution:
            // input.txt: 378
            // example.txt: 9
            // example2.txt: 0
            var star1Result = GetCountColorsDeepConatainColor("shiny gold", fileData);
            Console.WriteLine("Star1 result: " + star1Result);
            
            // Star2
            // How many individual bags are required inside your single shiny gold bag?
            // My solution:
            // input.txt: 27526
            // example.txt: 32
            // example2.txt: 126
            int totalStar2 = 0;
            var initList = new List<(string, int)>();
            initList.Add(("shiny gold", 1));
            GetChildBags(initList, fileData, totalStar2);
        }


        private static int GetCountColorsDeepConatainColor(string color, string[] data)
        {
            var totalStar1 = 0;
            var initialList = new List<string>();
            var indexAdded = new List<int>();
            initialList.Add(color);
            FindBags(initialList, data, indexAdded, ref totalStar1);
            return totalStar1;
        }
        private static List<string> FindBags(List<string> bags, string[] fullList, List<int> addeds,ref int totalStar1)
        {
            var finded = new List<string>();
            var findCounter = 0;
            for (var i = 0; i < fullList.Length; i++)
            {
                var bagGroup = fullList[i];
                var b = bagGroup.Split(" ");
                var bagGroupColor = b[0] + " " + b[1];
                foreach (var bagColor in bags)
                {
                    if (bagGroup.Contains(bagColor) && bagColor != bagGroupColor)
                    {
                        //Console.WriteLine(bagGroupColor + " contains: " + bagColor);
                        // si no tenemos ya la linea
                        if (!addeds.Contains(i))
                        {
                            finded.Add(bagGroupColor);
                            addeds.Add(i);
                            findCounter++;
                        }
                        break;
                    }
                }
            }

            //Console.WriteLine(findCounter);
            totalStar1 += findCounter;
            if (findCounter == 0)
            {
                return finded;
            }
            return FindBags(finded, fullList, addeds, ref totalStar1);
        }

        private static List<(string, int)> GetChildBags(List<(string, int)> parent, string[] fullList, int totalStar2)
        {
            var result = new List<(string, int)>();
            if (parent.Count > 0)
            {
                for (int i = 0; i < parent.Count; i++)
                {
                    foreach (var line in fullList)
                    {
                        var b = line.Split(" ");
                        var bagColor = b[0] + " " + b[1];
                        if (parent[i].Item1 == bagColor)
                        {
                            //Console.WriteLine(bagColor);
                            // si lo encontramos
                            var c = line.Split("contain ");
                            //Console.WriteLine(c[0]);
                            //Console.WriteLine(c[1]);
                            var d = c[1].Split(", ");
                            foreach (var dBag in d)
                            {
                                var color = dBag.Split(" ");
                                var fullcolor = color[1] + " " + color[2];
                                if (color[0] != "no")
                                {
                                    var quantity = int.Parse(color[0]);
                                    totalStar2 += quantity*parent[i].Item2;
                                    //Console.Write(quantity*parent[i].Item2);
                                    //Console.WriteLine(" : " + fullcolor);
                                    result.Add((fullcolor,quantity*parent[i].Item2));
                                }
                            }
                        }
                    }
                }
                return GetChildBags(result, fullList, totalStar2);
            }
            Console.WriteLine("Star2 result: " + totalStar2);
            return result;
        }
    }
}