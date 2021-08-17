using System.Diagnostics.CodeAnalysis;
using System.Text.RegularExpressions;

namespace ex004
{
    public static class Program
    {
        public static void Main(string[] args)
        {
            Star1.Run();
            Star2.Run();
        }
    }

    [SuppressMessage("ReSharper", "MemberCanBePrivate.Global")]
    public class Passport
    {
        public string Byr { get; init; }
        public string Iyr { get; init; }
        public string Eyr { get; init; }
        public string Hgt { get; init; }
        public string Hcl { get; init; }
        public string Ecl { get; init; }
        public string Pid { get; init; }
        public string Cid { get; init; }

        public Passport(string byr, string iyr, string eyr, string hgt, string hcl, string ecl, string pid, string cid)
        {
            Byr = byr;
            Iyr = iyr;
            Eyr = eyr;
            Hgt = hgt;
            Hcl = hcl;
            Ecl = ecl;
            Pid = pid;
            Cid = cid;
        }

        /*
         * Generate a passport from string
         * in optional multiline format:
         * iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
         * hcl:#cfa07d byr:1929
         */
        public Passport(string passport)
        {
            Byr = "";
            Iyr = "";
            Eyr = "";
            Hgt = "";
            Hcl = "";
            Ecl = "";
            Pid = "";
            Cid = "";
            var passportData = passport.Split(' ', '\n');
                            
            foreach (var element in passportData)
            {
                var propertyName = element.Split(':')[0];
                var propertyValue = element.Split(':')[1];
                switch (propertyName)
                {
                    case "byr":
                        Byr = propertyValue;
                        break;
                    case "iyr":
                        Iyr = propertyValue;
                        break;
                    case "eyr":
                        Eyr = propertyValue;
                        break;
                    case "hgt":
                        Hgt = propertyValue;
                        break;
                    case "hcl":
                        Hcl = propertyValue;
                        break;
                    case "ecl":
                        Ecl = propertyValue;
                        break;
                    case "pid":
                        Pid = propertyValue;
                        break;
                    case "cid":
                        Cid = propertyValue;
                        break;
                }
            }
        }

        public bool IsValidForStar1()
        {
            var isValid = Byr != "" && Iyr != "" && Eyr != "" && Pid != "" && Hgt != "" && Hcl != "" && Ecl != "";

            return isValid;
        }

        public bool IsValidForStar2()
        {
            if(!IsValidForStar1()) return false;
            if (int.Parse(Byr) < 1920 || int.Parse(Byr) > 2002) return false;
            if (int.Parse(Iyr) < 2010 || int.Parse(Iyr) > 2020) return false;
            if (int.Parse(Eyr) < 2020 || int.Parse(Eyr) > 2030) return false;
            if (!Regex.IsMatch(Hcl, @"^#[0-9a-f]{6}$")) return false;
            if (!Regex.IsMatch(Pid, @"^[0-9]{9}$")) return false;
            if (!Regex.IsMatch(Ecl, @"^amb|blu|brn|gry|grn|hzl|oth$")) return false;
            
            var measure = Hgt.Split('c', 'i');
            //Console.WriteLine(medida[0] + " - "+medida[1]);
            if (measure.Length != 2) return false;
            var height = int.Parse(measure[0]);
            if (measure[1] == "m")
            {
                if (height < 150 || height > 193) return false;
            }
            if (measure[1] == "n")
            {
                if (height < 59 || height > 76) return false;
            }
            return true;
        }
    }
}