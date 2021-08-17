using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using AOC.Utils;

namespace ex008
{
    public static class Program
    {
        // result star1: 2058
        // result star2: 1000
        public static void Main()
        {
            var sw = new Stopwatch();
            sw.Start();
            
            const string filePath = "/Users/joseppenalba/dev/katas/adventofcode/aoc2020/ex008/input.txt";
            var inputData = DataFromFile.GetLines<string>(filePath);
            
            Console.WriteLine("Time elapsed reading file: {0}", sw.ElapsedMilliseconds);
            
            sw.Restart();
            // Guardamos los datos en una lista de tuplas (instruccion, valor, repeticiones)
            var originalData = GetCommandsFromData(inputData);
            Console.WriteLine("Time elapsed creating list: {0}", sw.ElapsedMilliseconds);
            sw.Stop();
            
            // Star 1
            // Ejecutamos
            (int Result, bool Last, bool Over) star1Result = ExecuteProgram(originalData);
            Console.WriteLine(star1Result.Result + " " + star1Result.Last + " " + star1Result.Over);

            // Para Star2
            // Vamos a recorrer data cambiando instrucciones jmp por nop y nop por jmp
            // (una cada vez) hasta que encontremos la manera de que el programa finalice
            // ejecutando la última instrucción
            for (var index = 0; index < originalData.Count; index++)
            {
                var command = originalData[index];
                var copyData = GetCommandsFromData(inputData);
                var instruccionCambiada = false;
                
                if (command.Instruccion == "jmp")
                {
                    copyData[index].Instruccion = "nop";
                    instruccionCambiada = true;
                }

                if (command.Instruccion == "nop")
                {
                    copyData[index].Instruccion = "jmp";
                    instruccionCambiada = true;
                }

                // Si hemos canviado la instrucción
                // Comprobamos si el programa finaliza por la ejecución de la
                // última instrucción
                if (instruccionCambiada)
                {
                    var (result, last, over) = ExecuteProgram(copyData);
                    if (last)
                    {
                        Console.WriteLine("ultima instrucción ejecutada, resultado: " + result);
                        break;
                    }
                }
            }
        }

        // Devuelva una lista con los comandos extraidos del
        // array de string origin
        private static List<Command> GetCommandsFromData(string[] origin)
        {
            return origin.Select(id => new Command(id)).ToList();
        }
        
        private static (int, bool, bool) ExecuteProgram(List<Command> data)
        {
            // ejecuto hasta que la instrucción a ejecutar tenga ya una repeticion
            // o ejecutemos la ultima instrucción
            // o nos salgamos de la lista
            var star1Count = 0; // acumulador
            var currentIndex = 0; // operacion en curso
            var lastExecuted = false; // true si se ha ejecutado la ultima instruccion
            var sobrepasado = false; // true si ha saltado fuera de la data
            while (true)
            {
                var command = data[currentIndex];
                // comprobamos que la instruccion actual no se haya ejecutado ya
                if (command.Repeticiones > 0) break; // si ya se ha ejecutado nos salimos
                
                // ejecutar la instrucción actual;
                switch (command.Instruccion)
                {
                    case "acc":
                        star1Count += command.Operacion;
                        command.Repeticiones++;
                        currentIndex++;
                        break;
                    case "jmp":
                        // si nos vamos mas alla del fin de los datos
                        if (currentIndex+command.Operacion > data.Count)
                        {
                            sobrepasado = true;
                        }
                        else
                        {
                            currentIndex += command.Operacion;
                            command.Repeticiones++;
                        }
                        break;
                    case "nop":
                        currentIndex++;
                        command.Repeticiones++;
                        break;
                }

                if (currentIndex>data.Count-1)
                {
                    lastExecuted = true;
                }

                if (lastExecuted || sobrepasado)
                {
                    break;
                }
                
            }
            return (star1Count, lastExecuted, sobrepasado);
        }
    }

    internal class Command
    {
        public string Instruccion { get; set; }
        public int Operacion { get; set; }
        public int Repeticiones { get; set; }

        public Command(string input)
        {
            // split input data by " "
            var sid = input.Split(" ");
            Instruccion = sid[0];
            Operacion = int.Parse(sid[1]);
            Repeticiones = 0;
        }
    }
}