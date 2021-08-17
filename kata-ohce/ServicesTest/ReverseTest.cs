using Xunit;
using Kata.Services;
using Services;

namespace ServicesTest
{
    public class ReverseTest
    {
        [Theory]
        [InlineData("Pepe", "epeP")]
        [InlineData("non", "non")]
        [InlineData("Una frase completa.", ".atelpmoc esarf anU")]
        public void TestGetReverse(string inWords, string expected)
        {
            Assert.Equal(expected, Reverse.GetReverse(inWords));
        }
    }
}
