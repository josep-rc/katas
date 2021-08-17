using System.Text.RegularExpressions;

namespace AOC.Utils
{
    public static class StringWorker
    {
        /*
         * Dado un string multilinea (input)
         * devuelve un string con todos
         * los caracteres (a-z) usados en el input
         * en el orden en que aparecen y sin repeticiones
         */
        public static string ListPresentCharacters(string input)
        {
            var response = "";
            foreach (var c in input)
            {
                if (Regex.IsMatch(c.ToString(), @"^[a-z]{1}$"))
                {
                    if (!response.Contains(c))
                    {
                        response += c;
                    }
                };
            }
            return response;
        }

        /*
         * Dado un string multilinea
         * devuelve un string con los caracteres
         * que estan en todas las lineas (sin repeticiones)
         */
        public static string ListCharactersInAllLines(string input)
        {
            var personResponse = input.Split("\n");
            var repeated = personResponse[0];
            if (personResponse.Length > 1)
            {
                // For every line except the first
                for (var index = 1; index < personResponse.Length; index++)
                {
                    // We check that it has each character of the repeated ones
                    for (var i = 0; i < repeated.Length; i++)
                    {
                        // If current character is not in repeated
                        if (!personResponse[index].Contains(repeated[i]))
                        {
                            // We delete it
                            repeated = repeated.Remove(i, 1);
                            i--;
                        }
                    }
                }
            }
            return ListPresentCharacters(repeated);
        }
    }
}