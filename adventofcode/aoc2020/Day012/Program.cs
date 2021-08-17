using System;
using System.Numerics;
using AOC.Utils;

namespace Day012
{
    public static class Program
    {
        public static void Main(string[] args)
        {
            // Results
            // Star1 example: 25
            // Star1 input: 1221
            // Star2 example: 286
            // Star2 input: 59435
            
            const string filePath = "/Users/joseppenalba/dev/katas/adventofcode/aoc2020/Day012/input.txt"; 
            var inputData = DataFromFile.GetLines<string>(filePath);

            (int x, int y) pos = (0, 0);
            var direccion = 'E';

            foreach (var data in inputData)
            {
                var command = data[0];
                var valueString = data.Substring(1);
                var value = int.Parse(valueString);
                
                switch (command)
                {
                    case 'N':
                        pos.y += value;
                        break;
                    case 'S':
                        pos.y -= value;
                        break;
                    case 'E':
                        pos.x += value;
                        break;
                    case 'W':
                        pos.x -= value;
                        break;
                    case 'R':
                        // modifica direccion
                        direccion = cambiaDireccion(direccion,'R', value);
                        break;
                    case 'L':
                        // modifica direccion
                        direccion = cambiaDireccion(direccion,'L', value);
                        break;
                    case 'F':
                        // avanza en la direccion
                        if (direccion == 'N') pos.y += value;
                        if (direccion == 'S') pos.y -= value;
                        if (direccion == 'E') pos.x += value;
                        if (direccion == 'W') pos.x -= value;
                        break;
                }
            }

            Console.WriteLine("Posicion final: {0},{1}",pos.x,pos.y );
            Console.WriteLine("Star1 (posx+posy) = {0}", Math.Abs(pos.x)+ Math.Abs(pos.y));

            // Star 2
            
            (int x, int y) waypoint = (10, 1);
            pos.x = 0;
            pos.y = 0;

            foreach (var data in inputData)
            {
                var command = data[0];
                var valueString = data.Substring(1);
                var value = int.Parse(valueString);
                
                switch (command)
                {
                    case 'N':
                        waypoint.y += value;
                        break;
                    case 'S':
                        waypoint.y -= value;
                        break;
                    case 'E':
                        waypoint.x += value;
                        break;
                    case 'W':
                        waypoint.x -= value;
                        break;
                    case 'R':
                        // modifica direccion
                        waypoint = cambiaWaypoint(waypoint,'R', value);
                        break;
                    case 'L':
                        // modifica direccion
                        waypoint = cambiaWaypoint(waypoint,'L', value);
                        break;
                    case 'F':
                        pos.x += value * waypoint.x;
                        pos.y += value * waypoint.y;
                        break;
                }
            }

            Console.WriteLine("Posicion final: {0},{1}",pos.x,pos.y );
            Console.WriteLine("Star2 (posx+posy) = {0}", Math.Abs(pos.x)+ Math.Abs(pos.y));
            
        }

        private static (int x, int y) cambiaWaypoint((int x, int y) waypoint, char rotacion, in int value)
        {
            (int x, int y) newWaypoint = (10, 1);

            if (rotacion == 'R')
            {
                switch (value)
                {
                    case 90:
                        newWaypoint.y = -waypoint.x;
                        newWaypoint.x = waypoint.y;
                        break;
                    case 180:
                        newWaypoint.x = -waypoint.x;
                        newWaypoint.y = -waypoint.y;
                        break;
                    case 270:
                        newWaypoint.y = waypoint.x;
                        newWaypoint.x = -waypoint.y;
                        break;
                }
            }
            else
            {
                switch (value)
                {
                    case 90:
                        newWaypoint.y = waypoint.x;
                        newWaypoint.x = -waypoint.y;
                        break;
                    case 180:
                        newWaypoint.x = -waypoint.x;
                        newWaypoint.y = -waypoint.y;
                        break;
                    case 270:
                        newWaypoint.y = -waypoint.x;
                        newWaypoint.x = waypoint.y;
                        break;
                }
            }
            return newWaypoint;
        }

        private static char cambiaDireccion(char direccionActual, char rotacion, in int value)
        {
            if (rotacion == 'R')
            {
                switch (direccionActual)
                {
                    case 'N':
                        if (value == 90) return 'E';
                        if (value == 180) return 'S';
                        if (value == 270) return 'W';
                        break;
                    case 'S':
                        if (value == 90) return 'W';
                        if (value == 180) return 'N';
                        if (value == 270) return 'E';
                        break;
                    case 'E':
                        if (value == 90) return 'S';
                        if (value == 180) return 'W';
                        if (value == 270) return 'N';
                        break;
                    case 'W':
                        if (value == 90) return 'N';
                        if (value == 180) return 'E';
                        if (value == 270) return 'S';
                        break;
                }
            }
            else
            {
                switch (direccionActual)
                {
                    case 'N':
                        if (value == 90) return 'W';
                        if (value == 180) return 'S';
                        if (value == 270) return 'E';
                        break;
                    case 'S':
                        if (value == 90) return 'E';
                        if (value == 180) return 'N';
                        if (value == 270) return 'W';
                        break;
                    case 'E':
                        if (value == 90) return 'N';
                        if (value == 180) return 'W';
                        if (value == 270) return 'S';
                        break;
                    case 'W':
                        if (value == 90) return 'S';
                        if (value == 180) return 'E';
                        if (value == 270) return 'N';
                        break;
                }
            }
            return 'E';
        }
    }
}