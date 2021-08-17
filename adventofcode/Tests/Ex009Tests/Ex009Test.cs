using System.Collections.Generic;
using System.Linq;
using Xunit;
using ex009;

namespace Ex009Tests
{
    public class Ex009Test
    {
        [Theory]
        [InlineData(new long[]{1,2,3}, 5, true)]
        [InlineData(new long[]{1,2,3}, 4, true)]
        [InlineData(new long[]{1,2,3}, 2, false)]
        [InlineData(new long[]{1,2,3}, 15, false)]
        [InlineData(new long[]{1,2,3}, 3, true)]
        public void FindSum2InListTest(long[] data, long expected, bool result)
        {
            var dataList = data.ToList();
            var res = Program.FindSum2InList(dataList, expected);
            Assert.Equal<bool>(result, res);
        }

        [Theory]
        [InlineData(new long[]{1,2,1,2,3}, 5, new long[]{2,1,2})]
        [InlineData(new long[]{1,2,2,3}, 5, new long[]{2,2,1})]
        [InlineData(new long[]{1,2,1,2,3}, 6, new long[]{2,1,2,1})]
        public void FindContigousSumTest(long[] data, long toSum, long[] expected)
        {
            var dataList = data.ToList();
            var dataExpected = expected.ToList();
            var res = Program.FindContigousSum(dataList, toSum);
            Assert.Equal(dataExpected, res);
        }
    }
}