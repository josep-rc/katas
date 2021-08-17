using Xunit;
using Kata.Services;
using Services;

namespace ServicesTest
{
    public class IsPalindromeTest
    {
        [Theory]
        [InlineData("Pepe", false)]
        [InlineData("non", true)]
        [InlineData("Una frase completa.", false)]
        [InlineData("laiaiCCiaial", true)]
        public void TestGetReverse(string inWords, bool expected)
        {
            Assert.Equal(expected, IsPalindrome.ItIsPalindrome(inWords));
        }
    }
}
