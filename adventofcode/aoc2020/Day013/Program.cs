using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using AOC.Utils;

namespace Day013
{
    class Program
    {
        static void Main(string[] args)
        {
            const string filePath = "/Users/joseppenalba/dev/katas/adventofcode/aoc2020/Day013/input.txt"; 
            var inputData = DataFromFile.GetLines<string>(filePath);
           
            var horaRef = int.Parse(inputData[0]);
            var pasos = new List<(int hora, int id)>();
            var busIDs = inputData[1].Split(",");
            
            var ids = new List<int>();
            foreach (var eID in busIDs)
            {
                if (eID != "x")
                {
                    ids.Add(int.Parse(eID));
                }
            }

            foreach (var id in ids)
            {
                for (int i = 0; i < 999999999; i+=id)
                {
                    if (i > horaRef)
                    {
                        pasos.Add((i,id));
                        break;
                    } 
                }
            }

            var pronto = pasos[1];
            foreach (var paso in pasos)
            {
                if (paso.hora < pronto.hora)
                {
                    pronto = paso;
                }
                // Console.WriteLine(paso.id+":"+paso.hora);
            }

            Console.WriteLine("Nuestro Bus: {0}, que pasa a las: {1}",pronto.id,pronto.hora);

            var minutosEspera = pronto.hora - horaRef;
            var star1Result = pronto.id * minutosEspera;

            Console.WriteLine("Star1 = busId({0}) * minutos de espera ({1}) = {2}",pronto.id, minutosEspera,star1Result);



            var input = new List<(ulong, ulong)>(){(5,3),(3,2),(2,0)};
            //input = new List<(ulong, ulong)>() {(19,3),(17,0),(13,2)};
            //input = new List<(ulong, ulong)>() {(67,0),(61,3),(59,2),(7,1)};
            //input = new List<(ulong, ulong)>() {(67,0),(61,4),(59,3),(7,2)};
            //input = new List<(ulong, ulong)>() {(67,0),(61,4),(59,3),(7,1)};
            //input = new List<(ulong, ulong)>() {(1889,3),(1789,0),(47,2),(37,1)};
            input = new List<(ulong, ulong)>() {(743,19),(643,50),(41,9),(37,56),(29,48),(23,73),(19,0),(17,33),(13,32)};

            Star2(input);
        }

        public static void Star2(List<(ulong, ulong)> input)
        {
            ulong factor = 1;
            ulong time = 0;
            foreach (var bus in input)
            {
                while ((time + bus.Item2) % bus.Item1 != 0)
                {
                    time += factor;
                }

                factor *= bus.Item1;
            }

            Console.WriteLine("Encontrado Star2: {0}", time);
        }
        
    }
}