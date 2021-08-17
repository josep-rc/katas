using Xunit;
using AOC.Utils;

namespace AOC.UtilsTests
{
    public class ListCharactersInAllLinesTest
    {
        private const string Input1 = "abc";
        private const string Input2 = "a\nb\nc";
        private const string Input3 = "ab\nac";
        private const string Input4 = "a\na\na\na";
        private const string Input5 = "b";
        private const string Input6 = "abcdef\ncf";
        private const string Input7 = "cbcdf\ncf";
        

        [Theory]
        [InlineData(Input1, "abc")]
        [InlineData(Input2, "")]
        [InlineData(Input3, "a")]
        [InlineData(Input4, "a")]
        [InlineData(Input5, "b")]
        [InlineData(Input6, "cf")]
        [InlineData(Input7, "cf")]
        public void Test1(string input, string expected )
        {
            Assert.Equal(expected, StringWorker.ListCharactersInAllLines(input));
        }
    }
}