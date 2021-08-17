using System;

namespace ex002
{
    public static class Program
    {
        public static void Main()
        {
            Star1.Run();
            Star2.Run();

            // Code validation example
            var tc = new TobogganCode("4-5 x: xdxlfx");
            Console.WriteLine(tc);
            Predicate<TobogganCode> validator = Validator1;
            Console.WriteLine(tc.IsValid(validator));
        }

        // Example validator
        private static bool Validator1(TobogganCode item)
        {
            return true;
        }
    }

    // 4-5 x: xdxlfx
    public class TobogganCode
    {
        public int Num1 { get; private init; }
        public int Num2 { get; private init; }
        public char Letter { get; private init; }
        public string Code { get; private init; }

        public TobogganCode(string sourceLine)
        {
            var parts = sourceLine.Split(' ', '-', ':');
            Num1 = int.Parse(parts[0]);
            Num2 = int.Parse(parts[1]);
            Letter = parts[2][0];
            Code = parts[4];
        }

        public bool IsValid(Predicate<TobogganCode> validator)
        {
            return validator(this);
        }

        public override string ToString()
        {
            return $"{Num1},{Num2}-{Letter}:{Code}";
        }
    }
}
