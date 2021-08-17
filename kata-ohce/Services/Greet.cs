using System;

namespace Kata.Services
{
    public class Greet
    {
        public static string GetGreetTo(string name, int hour)
        {
            if(hour >= 20 || hour < 6)
            {
                return "Buenas noches " + name;
            }

            if(hour >= 6 && hour < 12)
            {
                return "Buenos dias " + name;
            }

            return "Buenas tardes " + name;
        }
    }
}
