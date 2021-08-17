using System;
using AOC.Utils;

namespace ex011
{
    // My star1 results:
    // example: 37
    // input: 2093
    
    // My star2 results:
    // example: 26
    // input: 1862
    public static class Program
    {
        private const string filePath = "/Users/joseppenalba/dev/katas/adventofcode/aoc2020/ex011/input.txt"; 
        public static readonly string[] InputData = DataFromFile.GetLines<string>(filePath);

        public static void Main(string[] args)
        {

            var map = new SeatsMap(InputData);
            
            Console.WriteLine("Puzle de {0} x {1}", map.With, map.Height);
            Console.WriteLine("Número de casillas: {0}", map.Cells);
            
            // Star1
            var currentMap = map.Sit();
            var nextMap = currentMap.Sit();

            while (!currentMap.Equal(nextMap))
            {
                currentMap = currentMap.Sit();
                nextMap = nextMap.Sit();
            }

            Console.WriteLine("Star1 accupieds: {0}", nextMap.CountOccupiedSeats());
            
            // Star2
            map = new SeatsMap(InputData);
            currentMap = map.Sit2();
            nextMap = currentMap.Sit2();
            
            while (!currentMap.Equal(nextMap))
            {
                currentMap = currentMap.Sit2();
                nextMap = nextMap.Sit2();
            }

            Console.WriteLine("Star2 occupieds: {0}", nextMap.CountOccupiedSeats());
            
        }
        
    }

    public class SeatsMap
    {
        public int With { get; init; }
        public int Height { get; init; }

        public int Cells => With * Height;

        private readonly Seat[,] _map;

        public SeatsMap(string[] input)
        {
            With = input[0].Length;
            Height = input.Length;
            
            _map = new Seat[With,Height];
            for (var y=0; y < input.Length; y++)
            {
                for (var x=0; x < input[y].Length; x++)
                {
                    var c = input[y][x];
                    if (c == 'L') _map[x, y] = Seat.empty;
                    else if (c == '#') _map[x,y] = Seat.occup;
                    else _map[x,y] = Seat.floor;
                }
            }
        }

        public SeatsMap Sit()
        {
            var resultMap = new SeatsMap(Program.InputData);
            for (var y = 0; y < Height; y++)
            {
                for (var x = 0; x < With; x++)
                {
                    if (_map[x, y] == Seat.empty)
                    {
                        if (GetAdjacents(x, y) == 0) resultMap._map[x, y] = Seat.occup;
                        else resultMap._map[x, y] = Seat.empty;
                    }else if (_map[x, y] == Seat.occup)
                    {
                        if (GetAdjacents(x, y) >= 4) resultMap._map[x, y] = Seat.empty;
                        else resultMap._map[x, y] = Seat.occup;
                    }
                }
            }
            return resultMap;
        }
        
        public SeatsMap Sit2()
        {
            var resultMap = new SeatsMap(Program.InputData);
            for (var y = 0; y < Height; y++)
            {
                for (var x = 0; x < With; x++)
                {
                    if (_map[x, y] == Seat.empty)
                    {
                        if (GetVisibles(x, y) == 0) resultMap._map[x, y] = Seat.occup;
                        else resultMap._map[x, y] = Seat.empty;
                    };

                    if (_map[x, y] == Seat.occup)
                    {
                        if (GetVisibles(x, y) >= 5) resultMap._map[x, y] = Seat.empty;
                        else resultMap._map[x, y] = Seat.occup;
                    }
                }
            }
            return resultMap;
        }
        
        public bool Equal(SeatsMap sm)
        {
            // comprobamos tamaño
            if (With != sm.With) return false;
            if (Height != sm.Height) return false;
            
            // comprobamos elementos
            for (var y = 0; y < Height; y++)
            {
                for (var x = 0; x < With; x++)
                {
                    if (_map[x, y] != sm._map[x, y]) return false;
                }
            }
            return true;
        }

        public int CountOccupiedSeats()
        {
            var output = 0;
            for (var y = 0; y < Height; y++)
            {
                for (var x = 0; x < With; x++)
                {
                    if (_map[x, y] == Seat.occup) output++;
                }
            }
            return output;
        }

        private int GetAdjacents(int x, int y)
        {
            var adj = 0;
            // superiores
            if (x!=0 && y!=0 && _map[x-1, y-1] == Seat.occup) adj++;
            if (y!=0 && _map[x, y-1] == Seat.occup) adj++;
            if (x<With-1 && y!=0 && _map[x+1, y-1] == Seat.occup) adj++;
            // laterales
            if (x!=0 && _map[x-1, y] == Seat.occup) adj++;
            if (x<With-1 && _map[x+1, y] == Seat.occup) adj++;
            // inferiores
            if (x!=0 && y<Height-1 && _map[x-1, y+1] == Seat.occup) adj++;
            if (y<Height-1 && _map[x, y+1] == Seat.occup) adj++;
            if (x<With-1 && y<Height-1 && _map[x+1, y+1] == Seat.occup) adj++;
            return adj;
        }

        private int GetVisibles(int x, int y)
        {
            var visibles = 0;

            // para abajo
            for (var i = y+1; i < Height; i++)
            {
                if (_map[x, i] == Seat.occup)
                {
                    visibles++;
                    break;
                }

                if (_map[x, i] == Seat.empty) break;
            }
            
            // para arriba
            for (var i = y-1; i >= 0; i--)
            {
                if (_map[x, i] == Seat.occup)
                {
                    visibles++;
                    break;
                }

                if (_map[x, i] == Seat.empty) break;
            }
            
            // derecha
            for (int i = x+1; i < With; i++)
            {
                if (_map[i, y] == Seat.occup)
                {
                    visibles++;
                    break;
                }
                if(_map[i,y] == Seat.empty) break;
            }
            
            // izquierda
            for (int i = x - 1; i >= 0; i--)
            {
                if (_map[i, y] == Seat.occup)
                {
                    visibles++;
                    break;
                }
                if(_map[i,y] == Seat.empty) break;
            }
            
            // abajo izquierda
            var j = y + 1;
            for (var i = x - 1; i >= 0; i--)
            {
                if (j > Height - 1) break;
                if (_map[i, j] == Seat.occup)
                {
                    visibles++;
                    break;
                }
                if (_map[i, j] == Seat.empty) break;
                if (j > Height - 1) break;
                j++;
            }
            
            // abajo derecha
            j = y + 1;
            for (var i = x+1; i < With; i++)
            {
                if (j > Height - 1) break;

                if (_map[i, j] == Seat.occup)
                {
                    visibles++;
                    break;
                }
                if (_map[i, j] == Seat.empty) break;
                if (j > Height - 1) break;
                j++;
            }
            
            // arriba izquierda
            j = y - 1;
            for (var i = x - 1; i >= 0; i--)
            {
                if (j < 0) break;// si nos salimos por arriba (y<0)
                
                if (_map[i, j] == Seat.occup)
                {
                    visibles++;
                    break;
                }
                if (_map[i, j] == Seat.empty) break;
                if (j > Height - 1) break;
                j--;
                
            }
            
            // arriba derecha
            j = y - 1;
            for (var i = x+1; i < With; i++)
            {
                if (j < 0) break;// si nos salimos por arriba (y<0)
                if (_map[i, j] == Seat.occup)
                {
                    visibles++;
                    break;
                }

                if (_map[i, j] == Seat.empty) break;
                if (j > Height - 1) break;
                j--;
            }
            
            return visibles;
        }

        public override string ToString()
        {
            var output = "\n";
            for (var y = 0; y < Height; y++)
            {
                for (var x = 0; x < With; x++)
                {
                    output += _map[x, y].GetHashCode();
                    output += " ";
                }
                output += "\n";
            }
            return output;
        }

        private enum Seat
        {
            floor = 0,
            empty = 1,
            occup = 2
        }
    }
}