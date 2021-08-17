namespace AOC.Utils
{
  public static class DataFinder
  {

    // Busca en la lista dos números que sumados den expectedResult
    public static (int, int) FindSum2(int[] numList, int expectedResult)
    {
      int operand1;
      int operand2;

      for (var i = 0; i < numList.Length; i++)
      {
        for (var y = 0; y < numList.Length; y++)
        {
          if (numList[i] + numList[y] == expectedResult)
          {
            operand1 = numList[i];
            operand2 = numList[y];
            return (operand1, operand2);
          }
        }
      }
      return (0, 0);
    }

    // Busca en la lista tres números que sumados den expectedResult
    public static (int, int, int) FindSum3(int[] numList, int expectedResult)
    {
      int operand1;
      int operand2;
      int operand3;

      for (var i = 0; i < numList.Length; i++)
      {
        for (var y = 0; y < numList.Length; y++)
        {
          for (var x = 0; x < numList.Length; x++)
          {
            if (numList[i] + numList[y] + numList[x] == expectedResult)
            {
              operand1 = numList[i];
              operand2 = numList[y];
              operand3 = numList[x];
              return (operand1, operand2, operand3);
            }
          }
        }
      }
      return (0, 0, 0);
    }
    
    // Verifica si el caracter character se encuetra en la posición
    // position dentro del pattern (el pattern se repite lo necesario)
    public static bool IsCharacterInPatternPosition(char character, int position, string pattern)
    {
      var realPos = position - (pattern.Length *(position/pattern.Length));
      return pattern[realPos] == character;
    }
  }
}
