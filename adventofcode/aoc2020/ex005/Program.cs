using System;
using System.Collections.Generic;
using AOC.Utils;

namespace ex005
{
    public static class Program
    {
        public static void Main()
        {
            /* Examples
            var seat1 = new SeatCode("FBFBBFFRLR", 7, 3);
            var seat2 = new SeatCode("BFFFBBFRRR", 7, 3);
            var seat3 = new SeatCode("FFFBBBFRRR", 7, 3);
            var seat4 = new SeatCode("BBFFBBFRLL", 7, 3);
            var seat5 = new SeatCode("BBFFBBBRLL", 7, 3);
            var seat6 = new SeatCode("BBBFBBFLRR", 7, 3);

            Console.WriteLine(seat1.SeatId);
            Console.WriteLine(seat2.SeatId);
            Console.WriteLine(seat3.SeatId);
            Console.WriteLine(seat4.SeatId);
            Console.WriteLine(seat5.SeatId);
            Console.WriteLine(seat6.SeatId);
            */
            
            var codesFromFile = DataFromFile.GetLines<string>("/Users/joseppenalba/dev/katas/adventofcode/aoc2020/ex005/input.txt");
            var seatCodes = new List<SeatCode>();
            var highestSeatId = 0;
            foreach (var seatCode in codesFromFile)
            {
                var sc = new SeatCode(seatCode, 7, 3);
                seatCodes.Add(sc);
                if (sc.SeatId > highestSeatId)
                {
                    highestSeatId = sc.SeatId;
                }
            }

            Console.WriteLine("Star1 Highest: " + highestSeatId);
            seatCodes.Sort();
            for (var index = 1; index < seatCodes.Count-1; index++)
            {
                var seatCode = seatCodes[index];
                if (seatCode.SeatId != seatCodes[index - 1].SeatId + 1 ||
                    seatCode.SeatId != seatCodes[index + 1].SeatId - 1)
                {
                    // empty seat
                    Console.WriteLine("Star2 My seat id: " + (seatCode.SeatId+1));
                    break;
                }
            }
        }
    }

    public class SeatCode : IComparable<SeatCode>
    {
        public string Code { get; init; }
        public string RowCode { get; init; }
        public string ColumnCode { get; init; }
        public int NumRows { get; init; }
        public int NumColumns { get; init; }
        public int DigitsInCodeRow { get; init; }
        public int DigitsInCodeColumn { get; init; }
        public int RowNum { get; init; }
        public int ColumnNum { get; init; }
        public int SeatId { get; init; }

        public SeatCode(string code, int digitsInCodeRow, int digitsInCodeColumn)
        {
            Code = code;
            DigitsInCodeRow = digitsInCodeRow;
            DigitsInCodeColumn = digitsInCodeColumn;
            NumRows = (int) Math.Pow(2,digitsInCodeRow); // 128 0-127
            NumColumns = (int)Math.Pow(2,digitsInCodeColumn); // 8 0-7
            RowCode = Code.Substring(0,digitsInCodeRow);
            ColumnCode = Code.Substring(digitsInCodeRow, digitsInCodeColumn);
            RowNum = GetRowNum(RowCode, NumRows);
            ColumnNum = GetColNum(ColumnCode, NumColumns);
            SeatId = GetSeatId(RowNum, ColumnNum);
        }

        private int GetSeatId(in int rowNum, in int columnNum)
        {
            return rowNum * 8 + columnNum;
        }

        private int GetRowNum(string rowCode, int numRows)
        {
            var selectedLow = 0;
            var selectedHigh = numRows - 1; // 127
            foreach (var charCode in rowCode)
            {
                var range = selectedHigh - selectedLow;
                if (charCode == 'F')
                {
                    selectedHigh -= range / 2;
                    selectedHigh--;
                }

                if (charCode == 'B')
                {
                    selectedLow += range / 2;
                    selectedLow++;
                }
            }
            return selectedHigh;
        }
        
        private int GetColNum(string colCode, int numCols)
        {
            var selectedLow = 0;
            var selectedHigh = numCols - 1; // 127
            var range = 0;
            foreach (var charCode in colCode)
            {
                range = selectedHigh - selectedLow;
                if (charCode == 'L')
                {
                    selectedHigh -= range / 2;
                    selectedHigh--;
                }

                if (charCode == 'R')
                {
                    selectedLow += range / 2;
                    selectedLow++;
                }
            }
            return selectedHigh;
        }

        // IComparable
        public int CompareTo(SeatCode other)
        {
            return this.SeatId.CompareTo(other.SeatId);
        }
    }
}