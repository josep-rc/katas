using System;
using System.Collections.Generic;
using System.Diagnostics;

namespace Day015
{
    public static class Program
    {
        public static void Main()
        {
            var sw = new Stopwatch();
            sw.Start();

            var initialTurns = 6;
            var numTurns = 30000000;
            var currentValue = 5;

            var turns = new Dictionary<int, Position>()
            {
                {0, new Position(1,1)},
                {3, new Position(2,2)},
                {1, new Position(3,3)},
                {6, new Position(4,4)},
                {7, new Position(5,5)},
                {5, new Position(6,-1)}
            };

            for (int i = initialTurns; i < numTurns; i++)
            {
                if (turns[currentValue].Last == -1)
                {
                    turns[currentValue] = new Position(turns[currentValue].Last, i);
                    currentValue = 0;
                    // Si no existe el 0 en los iniciales da error
                    turns[0] = new Position(turns[0].Last, i+1);
                }
                else
                {
                    currentValue = i - turns[currentValue].Previous;
                    // si el nuevo valor no existe
                    if (!turns.ContainsKey(currentValue))
                    {
                        turns.Add(currentValue, new Position(i,-1));
                    }
                    else
                    {
                        var last = turns[currentValue].Last;
                        turns[currentValue] = new Position(last, i + 1);
                    }
                }

            }

            Console.WriteLine(currentValue);
            
            Console.WriteLine(sw.Elapsed);
            sw.Stop();
           
        }
    }

    public struct Position
    {
        public int Last { get; set; }
        public int Previous { get; set; }

        public Position(int previous, int last)
        {
            Previous = previous;
            Last = last;
        }

        public override string ToString()
        {
            return $"({Previous},{Last})";
        }
    }
}