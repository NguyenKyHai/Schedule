using Schedule.Common;
using System.Security.Cryptography;
using System.Text;

namespace Schedule.Extentions
{
    public static class StringExtention
    {
        private const string INIT_VECTOR = "tu89geji340t89u2";
        private const int KEY_SIZE = 256;
        private static string SECRET_PHRASE
        {
            get
            {
                //return ConfigurationManager.AppSettings["OMS.SECRET_PHRASE"];
                return "B77A5C561934E089";
            }
        }
        public static string Encrypt(this string plain)
        {
            //Init
            byte[] initVectorBytes = Encoding.UTF8.GetBytes(INIT_VECTOR);
            byte[] plainTextBytes = Encoding.UTF8.GetBytes(plain);
            PasswordDeriveBytes password = new PasswordDeriveBytes(SECRET_PHRASE, null);
            byte[] keyBytes = password.GetBytes(KEY_SIZE / 8);

            //Create Rijndael Managed
            RijndaelManaged symmetricKey = new RijndaelManaged();
            symmetricKey.Mode = CipherMode.CBC;

            //Encrypt
            ICryptoTransform encryptor = symmetricKey.CreateEncryptor(keyBytes, initVectorBytes);
            MemoryStream memoryStream = new MemoryStream();
            CryptoStream cryptoStream = new CryptoStream(memoryStream, encryptor, CryptoStreamMode.Write);
            cryptoStream.Write(plainTextBytes, 0, plainTextBytes.Length);
            cryptoStream.FlushFinalBlock();
            byte[] cipherTextBytes = memoryStream.ToArray();
            memoryStream.Close();
            cryptoStream.Close();

            return Convert.ToBase64String(cipherTextBytes);
            //return Encrypt(SymmetricAlgorithmType.DES, plain, "ISV.Utilities.dll");
        }

        public static string ToFixCodeDB(this string value, FixCodeType type)
        {
            int lenght = GetCodeLenghtDB(type);

            if (IsNumeric(value.Trim()))
            {
                return value.Trim().PadLeft(lenght, '0');
            }

            return value.Trim();
        }

        public static int GetCodeLenghtDB(FixCodeType type)
        {
            switch (type)
            {
                case FixCodeType.User:
                    return 10;
                case FixCodeType.Equipment:
                    return 10;
                case FixCodeType.actionTypeID:
                    return 10;
                default:
                    return 10;
            }
        }

        public static bool IsNumeric(string value)
        {
            if (string.IsNullOrEmpty(value))
            {
                return false;
            }

            foreach (char c in value)
            {
                if (!char.IsDigit(c))
                {
                    return false;
                }

            }
            return true;
        }
    }
}
