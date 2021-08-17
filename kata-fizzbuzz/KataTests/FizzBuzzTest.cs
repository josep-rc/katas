using Xunit;
using Kata;

namespace KataTests
{
    public class FizzBuzzTest
    {
        [Fact]
        public void ReturnFizz_WhenDivisibleBy3()
        {
            string expected = "Fizz";
            
            Assert.Equal(expected, FizzBuzzKata.FizzBuzz(9));
        }

        [Fact]
        public void ReturnBuzz_WhenDivisibleBy5()
        {
            string expected = "Buzz";
            Assert.Equal(expected, FizzBuzzKata.FizzBuzz(10));
        }

        [Fact]
        public void ReturnFizzBuzz_WhenDivisibleBy3AndBy5()
        {
            string expected = "FizzBuzz";
            Assert.Equal(expected, FizzBuzzKata.FizzBuzz(15));
        }

        [Fact]
        public void ReturnParamNumberToString_WhenNotDivisibleBy3Or5()
        {
            string expected = "2";
            Assert.Equal(expected, FizzBuzzKata.FizzBuzz(2));
        }

        [Fact]
        public void ReturnString0_When0()
        {
            string expected = "0";
            Assert.Equal(expected, FizzBuzzKata.FizzBuzz(0));
        }

        [Fact]
        public void ReturnFizz_WhenDivisibleBy3Negative()
        {
            string expected = "Fizz";
            Assert.Equal(expected, FizzBuzzKata.FizzBuzz(-9));
        }

        [Fact]
        public void ReturnBuzz_WhenDivisibleBy5Negative()
        {
            string expected = "Buzz";
            Assert.Equal(expected, FizzBuzzKata.FizzBuzz(-10));
        }

        [Fact]
        public void ReturnFizzBuzz_WhenDivisibleNegativeBy3AndBy5()
        {
            string expected = "FizzBuzz";
            Assert.Equal(expected, FizzBuzzKata.FizzBuzz(-15));
        }

        [Theory]
        [InlineData(2, "2")]
        [InlineData(0, "0")]
        [InlineData(22, "22")]
        [InlineData(3, "Fizz")]
        [InlineData(9, "Fizz")]
        [InlineData(18, "Fizz")]
        [InlineData(-21, "Fizz")]
        [InlineData(5, "Buzz")]
        [InlineData(20, "Buzz")]
        [InlineData(-50, "Buzz")]
        [InlineData(15, "FizzBuzz")]
        [InlineData(150, "FizzBuzz")]
        public void FizzBuzzTheory(int value, string expected)
        {
            Assert.Equal(expected, FizzBuzzKata.FizzBuzz(value));
        }
    }
}
