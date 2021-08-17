using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace AOC.Utils
{
    public static class DataFromFile
    {
        public static T[] GetLines<T>(string filePath)
        {
            IEnumerable<string> fileData = File.ReadLines(filePath);

            switch (Type.GetTypeCode(typeof(T)))
            {
                case TypeCode.Int32:
                    return (T[])(object)DataToInteger(fileData);
            }
            return (T[])(object)fileData.ToArray();

            static int[] DataToInteger(IEnumerable<string> data)
            {
                var dataSize = data.Count();
                var values = new int[dataSize];
                var i = 0;
                foreach (var s in data)
                {
                    values[i] = int.Parse(s);
                    i++;
                }
                return values;
            }
        }

        public static string Get(string filePath)
        {
            return File.ReadAllText(filePath);
        }
    }
}
