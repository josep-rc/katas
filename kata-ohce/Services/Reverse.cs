using System;
namespace Services
{
    public class Reverse
    {
        public static string GetReverse(string words)
        {
            int length = words.Length - 1;
            string reverse = "";

            while (length >= 0)
            {
                reverse += words[length];
                length--;
            }
            return reverse;
        }
    }
}
