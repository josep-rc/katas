using System;
using System.IO;
using Xunit;

namespace KataTest
{
    public class KataTest
    {
        [Fact]
        public void KataTestProgram()
        {
            string[] args = new string[] { "Josep" };
            string inputString = "jaja\nalola\nStop\n";
            string expected = "Buenas tardes Josep\najaj\nalola\nBonita palabra\nAdios Josep\n";

            var output = new StringWriter();
            Console.SetOut(output);

            var input = new StringReader(inputString);
            Console.SetIn(input);

            Kata.Program.Main(args);

            Assert.Equal(expected, output.ToString());

        }
    }
}
