namespace Services
{
    public class IsPalindrome
    {
        public static bool ItIsPalindrome(string word)
        {
            if (word == Reverse.GetReverse(word)) return true;
            return false;
        }
    }
}
