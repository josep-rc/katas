using System;
using Xunit;
using Kata.Services;

namespace ServicesTest
{
    public class GreetTest
    {
        [Theory]
        [InlineData("Pepe", 22, "Buenas noches Pepe")]
        [InlineData("Pepe", 20, "Buenas noches Pepe")]
        [InlineData("Pepe", 5, "Buenas noches Pepe")]
        [InlineData("Pepe", 6, "Buenos dias Pepe")]
        [InlineData("Pepe", 7, "Buenos dias Pepe")]
        [InlineData("Pepe", 10, "Buenos dias Pepe")]
        [InlineData("Pepe", 12, "Buenas tardes Pepe")]
        public void TestGetGreetTo(string name, int hour, string expected)
        {
            Assert.Equal(expected, Greet.GetGreetTo(name, hour));
        }
    }
}
